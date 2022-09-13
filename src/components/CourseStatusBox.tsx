import React, { /*useState*/ } from 'react';
import { createStyles, Container, Grid, Text, Box, Space } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import CourseRepository from '../repositories/Course';
import { useCallback } from 'react';
import { useLocalStorage } from '@mantine/hooks';
import { IUserProfile } from '../dto/UserProfile';
import { ICourse, IVideo } from '../dto/Course';

const useStyles = createStyles((theme) => ({
  statusBox: {
    margin: "100px 100px",
    borderRadius: "15px",
    backgroundColor: "#D3D3D3",
    maxWidth: "100%",
  },
  leftGrid: {
    flex: "1 1 30%",
  },
  middleGrid: {
    flex: "1 1 50%",
  },
  rightGrid: {
    flex: "1 1 20%",
  },
  action: {
    alignItems: "center",
    textAlign:"center",
    flexDirection: "column",
    justifyContent:"space-between",
    padding: "8px 12px"
  },
  actionItem: {
    width: "140px",
    marginTop: "4px",
    marginBottom: "4px"
  },
  chart: {
    padding: "8px 12px",
    boxSizing: "border-box",
  },
  statusComment: {
    fontSize: "17px",
    padding: "8px 12px",
    textAlign:"center",
    boxSizing: "border-box",
  },
  outcomeComment: {
    fontSize: "15px",
    padding: "8px 12px",
    color: "red",
    boxSizing: "border-box",
  },
  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: "30px",
    textAlign:"center",
  },
}));


interface CourseStatusBoxProps {
  course: ICourse;
  videos: IVideo[] | {message: string};
  generateButtonGroup: () => JSX.Element|JSX.Element[];
}

const CourseStatusBox = ({course, videos, generateButtonGroup}: CourseStatusBoxProps) => {

  const [login] = useLocalStorage<IUserProfile | null>({ key: 'login', defaultValue: null });
  // const [nextEpisodePath, setNextEpisodePath] = useState("");
  const { classes } = useStyles();
  const navigate = useNavigate();

  const toNextEpisode = useCallback(
    () => {
    return new CourseRepository()
      .getCurrentEpisode(login?.token as string, course.id)
      .then(
        (episode) => {
          if (videos.hasOwnProperty("message")){
            alert("강의 영상 업로드 전 입니다.")
            return
          }
          else {
            const title = course.title.split(" ").join("")
            navigate(
              `/class/${title}/${episode?.seasonNumber}/${episode?.number}`,
              {
                state: {
                ...episode,
                courseId: course.id,
                courseTitle: course.title
                }
              }
            )
          }
        }
      )
    }, [login, navigate, course, videos]
  )

  return (
      <Grid className={classes.statusBox}>
        <Grid.Col className={classes.leftGrid}>
          <Text className={classes.title}>{course.title}</Text>
          <Text className={classes.statusComment}>진척률통계</Text>
        </Grid.Col>
        <Grid.Col className={classes.middleGrid}>
          <Container className={classes.chart}>chart 영역</Container>
          <Text className={classes.outcomeComment}>슈퍼코더는 수료후 초봉5,000만원의 조건으로 3달 안에 입사를 성공하였습니다.</Text>
        </Grid.Col>
        <Grid.Col className={classes.rightGrid}>
          <Grid className={classes.action}>
            {generateButtonGroup()}
            <Box>빈 영역</Box>
            <Space h="xl"></Space>
            <Text
              underline
              variant="link"
              component="a"
              onClick={toNextEpisode}
              style={{cursor: "pointer"}}
            >
              다음강의:
            </Text>
          </Grid>
        </Grid.Col>
      </Grid>
  );
}

export default CourseStatusBox;
