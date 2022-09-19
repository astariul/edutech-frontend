import React, {MouseEvent, useCallback} from 'react';
import { Grid, createStyles, Title, Text, Divider, Box, Space, Button} from '@mantine/core';
import RoadMapNav from '../components/RoadMapNav';
import CourseReviewGrid from '../components/CourseReviewGrid';
import SimpleCourseGrid from "../components/SimpleCourseGrid";
import { useState } from 'react';
import ReactPlayer from 'react-player/lazy';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import CourseRepository from '../repositories/Course';
import { useLocalStorage } from '@mantine/hooks';
import { IUserProfile, ICourse } from '../typings/db';

const useStyles = createStyles((theme) => ({
  roadMap: {
    justifyContent: "flex-start",
    flexDirectrion: "columns",
    // marginLeft: "100px",
  },
  navBar: {
    flex: "1 1 20%",
    maxWidth: "20%",
    marginTop: "50px",
    marginLeft: "100px",
    padding: 0,
    '@media (max-width: 1760px)': {
      display: "none"
    }
  },
  courseInfo: {
    flex: "1 1 50%",
    marginTop: "50px",
    marginLeft: "100px",
  },
  player: {
    position: "absolute",
    top: 0,
    left: 0
  },
  playerBox: {
    flex: "1 1 45%",
    position: "relative",
    minHeight: 400,
  },
  courseInfoArea: {
    marginTop: 50,
    justifyContent: "space-between",
    alignItems: "stretch"
  },
  courseInfoBox : {
    display:"flex",
    flexDirection: "column",
    flex: "1 1 30%",
    backgroundColor: "#D3D3D3",
    padding: "40px 60px"
  },
  gridBox: {
    position: 'relative',
    width: 1216,
    height: 300,
    backgroundColor: "#D3D3D3"
  },
  registerButton: {
    fontSize: "17px", 
    marginTop: "30px",
    marginLeft: "50px",
    marginRight: "50px",
    height: "50px"
  }
}));

const CourseRoadMap = () => {
  const { classes } = useStyles();
  const [login] = useLocalStorage<IUserProfile | null>({ key: "login", defaultValue: null });
  const [roadMapType, setRoadMapType] = useState("frontend");
  const [course, setCourse] = useState<ICourse>();
  const navigate = useNavigate();
  const roadMapTypeClickHandler = useCallback(
    (e: MouseEvent<HTMLHeadingElement>) => {
      e.stopPropagation();
      setRoadMapType(e?.currentTarget.id);
    }, []
  )
  const onRegister = useCallback(
    () => {
      navigate(
        "/payment",
        { state:course }
      );
    }, [course]
  )

  useEffect(
    () => {
      new CourseRepository()
      .getAllCourses(login?.token as string)
      .then(
        (courses) => {
          setCourse(courses[0]);
          return
        }
      )
    }, [login, setCourse]
  )

  return (
    <Grid className={classes.roadMap}>
      <Grid.Col className={classes.navBar}>
        <RoadMapNav
          onClickHandler={roadMapTypeClickHandler} 
          activeTitle={roadMapType} 
        />
      </Grid.Col>
      <Grid.Col className={classes.courseInfo}>
        <Grid sx={{justifyContent: "space-between", alignItems: "stretch"}}>
          <Grid.Col className={classes.playerBox}>
            <ReactPlayer
              className={classes.player}
              config={{ file: { 
                attributes: {
                  controlsList: "nodownload"
                }
              }}}
              url={'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'}
              width={"100%"}
              height={"100%"}
              controls={true}
              muted={false}
            />
          </Grid.Col>
          <Grid.Col style={{maxWidth: "1%"}}/>
          <Grid.Col className={classes.courseInfoBox}>
            <Title order={1} align="center" p="xl">{course?.title}</Title>
            <Divider size="sm" color="dark"></Divider>
            <Space h="md"/>
            <Box sx={(theme) => ({padding: theme.spacing.xl, backgroundColor: "#F8F8FF"})}>
              <Text align="center">러닝커브</Text>
            </Box>
            <Space h="md"/>
            <Box sx={(theme) => ({padding: theme.spacing.xl, backgroundColor: "#F8F8FF"})}>
              <Text align="center">스킬셋</Text>
            </Box>
            <Button className={classes.registerButton} onClick={onRegister}>수강신청 하기</Button>
          </Grid.Col>
          <Grid.Col style={{maxWidth: "10%"}}/>
        </Grid>
        <Grid className={classes.courseInfoArea}>
          <Box className={classes.gridBox}>
            <CourseReviewGrid cols={3}/>
          </Box>
          <Box className={classes.gridBox}>
            <SimpleCourseGrid cols={3} roadMapeType={roadMapType}/>
          </Box>
        </Grid>
      </Grid.Col>
    </Grid>
  );
}

export default CourseRoadMap;
