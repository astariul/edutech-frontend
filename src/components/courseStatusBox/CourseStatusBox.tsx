import { useEffect, useState, useCallback } from 'react';
import { Container, Grid, Text, Space } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { useNavigate } from 'react-router-dom';
import { IUserProfile } from '../../typings/db';
import { ICourse, IVideo } from '../../typings/db';
import CourseRepository from '../../repositories/Course';
import LearningCurve from '../learningCurve/LearningCurve';
import { CourseEpisode, findNextEpisode, calculateProgressStatByDate } from '../../utils/common';
import useStyles from './style';


interface CourseStatusBoxProps {
  course: ICourse;
  videos: IVideo[] | {message: string};
  generateButtonGroup: () => JSX.Element|JSX.Element[];
}

const CourseStatusBox = ({course, videos, generateButtonGroup}: CourseStatusBoxProps) => {

  const [login] = useLocalStorage<IUserProfile | null>({ key: 'login', defaultValue: null });
  const [nextEpisode, setNextEpisode] = useState<CourseEpisode | null>(null);
  const { classes } = useStyles();
  const navigate = useNavigate();
  const [progress, setProgress] = useState<number[]>([]);
  const [date, setDate] = useState<string[]>([]);

  useEffect(
    () => {
      new CourseRepository()
      .getCurrentEpisode(login?.token as string, course.id)
      .then(
        (episode) => {
          setNextEpisode(
            findNextEpisode(
              videos as IVideo[], 
              {
                ...episode,
                courseId: course.id,
                courseTitle: course.title,
              }
            )
          )
        }
      )
    }, [login, course, videos, setNextEpisode]
  );

  useEffect(
    () => {
      new CourseRepository()
      .getProgress(login?.token as string, course.id)
      .then(
        (data) => {
          const [retProgressStat, retDate] = calculateProgressStatByDate(data);
          setProgress(retProgressStat as number[]);
          setDate(retDate as string[]);
        })
      }, [login, setProgress, setDate, course]
  )

  const toNextEpisode = useCallback(
    () => {
      const title = course.title.split(" ").join("");
      navigate(
        `/class/${title}/${nextEpisode?.seasonNumber}/${nextEpisode?.number}`,
        {
          state: {
            ...nextEpisode,
            courseId: course.id,
            courseTitle: course.title
          }
        }
      )
    },
    [course, navigate, nextEpisode]
  )

  return (
      <Grid className={classes.main}>
        <Grid.Col className={classes.leftGrid}>
          <Text className={classes.title}>{course.title}</Text>
        </Grid.Col>
        <Grid.Col className={classes.middleGrid}>
          <Container className={classes.chart}>
            <LearningCurve
              datas={{
                main: {
                  title: "내 진척율(%)",
                  data: progress
                }
              }}
              dates={date}
              lineWidth={5}
              title={"Learning Curve"}
              // xaxisType={"datetime"}
            />
          </Container>
          <Text className={classes.outcomeComment}>슈퍼코더는 수료후 초봉5,000만원의 조건으로 3달 안에 입사를 성공하였습니다.</Text>
        </Grid.Col>
        <Grid.Col className={classes.rightGrid}>
          <Grid className={classes.action}>
            {generateButtonGroup()}
            <Space h="xl"></Space>
            <Text
              underline
              variant="link"
              component="a"
              onClick={toNextEpisode}
              style={{cursor: "pointer"}}
            >
              다음강의: EP-{nextEpisode?.number}
            </Text>
          </Grid>
        </Grid.Col>
      </Grid>
  );
}

export default CourseStatusBox;
