import React, {useEffect, useState}from 'react';
import { createStyles, SimpleGrid, Loader, UnstyledButton } from '@mantine/core';
import ArticleCard from './CourseCard';
import { ICourse } from '../dto/Course';
import { Link, useLocation } from "react-router-dom";
import CourseRepository from '../repositories/Course';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
  },

  item: {
    borderRadius: theme.radius.md,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    transition: 'box-shadow 150ms ease, transform 100ms ease',

    '&:hover': {
      boxShadow: `${theme.shadows.md} !important`,
      transform: 'scale(1.05)',
    },
  },
}));

const CourseGrid = () => {
    const { classes } = useStyles();
    const location = useLocation();
    const [loading, setLoading] = useState(true);
    const [courses,  setCourses] = useState<ICourse[]>([])

    let path: string;
    if (location.pathname === '/career/courses' ) {
      path = '/course';
    } else {
      path = '/mypage/course';
    }

    useEffect( () => {
      new CourseRepository()
        .getAllCourses()
        .then(
          (courses) => {
            setCourses(courses);
            setLoading(false);
          }
        );
      }, []
    )

    if (loading) return <Loader />;
    return (
      <SimpleGrid cols={3} mt="md" breakpoints={[
        { minWidth: 'sm', cols: 1 },
        { minWidth: 'md', cols: 2 },
        { minWidth: 1200, cols: 3 },
      ]}>
        {
          courses.map((item =>
            <Link
              key={item.id}
              to={path + '/' + item.id}
              state={ item }
            >
              <UnstyledButton key={item.id} className={classes.item}>
                <ArticleCard
                  {...item}
                  footer={''}
                  author={{
                    name: '',
                    description: '',
                    image: ''
                  }}/>
              </UnstyledButton>
            </Link>
          ))
        }
      </SimpleGrid>
    );
  }

export default CourseGrid;
