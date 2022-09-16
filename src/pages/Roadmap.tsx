import React, {MouseEvent, useCallback} from 'react';
import { Grid, createStyles, Title, Text, Divider, Box, Space} from '@mantine/core';
import RoadMapNav from '../components/RoadMapNav';
import CourseReviewGrid from '../components/CourseReviewGrid';
import SimpleCourseGrid from "../components/SimpleCourseGrid";
import { useState } from 'react';
import ReactPlayer from 'react-player/lazy';

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
    // width: "100%",
    // height: "100%",
    minHeight: 400,
  },
  courseInfoArea: {
    marginTop: 50,
  },
  courseInfoBox : {
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

}));

const RoadMap = () => {
  const { classes } = useStyles();
  const [roadMapType, setRoadMapType] = useState("frontend");

  const roadMapTypeClickHandler = useCallback(
    (e: MouseEvent<HTMLHeadingElement>) => {
      e.stopPropagation();
      setRoadMapType(e?.currentTarget.id);
    }, []
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
            <Grid.Col sx={{maxWidth: "1%"}}/>
            <Grid.Col className={classes.courseInfoBox}>
              <Title order={1} align="center" p="xl">Front-End All-in-One</Title>
              <Divider size="sm" color="dark"></Divider>
              <Space h="md"/>
              <Box sx={(theme) => ({padding: theme.spacing.xl, backgroundColor: "#F8F8FF"})}>
                <Text align="center">러닝커브</Text>
              </Box>
              <Space h="md"/>
              <Box sx={(theme) => ({padding: theme.spacing.xl, backgroundColor: "#F8F8FF"})}>
                  <Text align="center">스킬셋</Text>
              </Box>
            </Grid.Col>
            <Grid.Col sx={{maxWidth: "10%"}}/>
          </Grid>
          <Grid className={classes.courseInfoArea} sx={{justifyContent: "space-between", alignItems: "stretch"}}>
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

export default RoadMap;
