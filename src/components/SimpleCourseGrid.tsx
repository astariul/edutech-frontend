import React, {useState, useEffect} from "react";
import CourseRepositry from "../repositories/Course";
import { ICourse } from "../dto/Course";
import { createStyles, Loader, SimpleGrid } from '@mantine/core';
import SimpleCourseCard from './SimpleCourseCard';

const useStyles = createStyles((theme) => ({
  simpleCourseGrid: {
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
    bottom: 10,
  }
}));

interface SimpleCourseGridProps {
    cols: number,
    roadMapeType: string
}

const SimpleCourseGrid = ({cols, roadMapeType}: SimpleCourseGridProps) => {
    const [courses, setCourses] = useState<ICourse[]>([])
    const [loading, setLoading] = useState(true);
    const {classes}  = useStyles();
    const categoryDict : {[roadMapeType: string]: string[]} = {
        'frontend': ['html/css', 'react', 'typeScript'],
        'backend': ['backend', 'nodejs', 'django']
    }

    useEffect(
        () => {
            new CourseRepositry()
                .getCourses()
                .then(
                    (data) => setCourses(data)
                )
            return () => {
                setCourses([]);
                setLoading(false);
            }
        }, []
    )

    if (loading) return <Loader />;
    return (
        <>
            <SimpleGrid cols={cols} className={classes.simpleCourseGrid}>
                {
                    courses.map(
                        (course) => {
                        let counter = 0;
                        if ((counter < cols) && (categoryDict[roadMapeType].includes(course.category.toLocaleLowerCase()))) {
                            counter += 1;
                            return <SimpleCourseCard key={course.id} {...course}/>
                        }
                        else{
                            return null
                        }
                    })
                }
            </SimpleGrid>
        </>
    )
}

export default SimpleCourseGrid;
