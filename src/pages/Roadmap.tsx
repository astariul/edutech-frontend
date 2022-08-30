import React, {MouseEvent, useCallback} from 'react';
import { AppShell, Grid, createStyles, Title, Group, Text, Divider, Box, Space} from '@mantine/core';
import RoadMapNav from '../components/RoadMapNav';
import CourseReviewGrid from '../components/CourseReviewGrid';
import SimpleCourseGrid from "../components/SimpleCourseGrid";
import VideoJS from '../components/Video';
import { useState } from 'react';

const useStyles = createStyles((theme) => ({
  courseInfoArea: {
    marginLeft: 50,
    marginRight: 50
  },
  courseInfoBox : {
    padding: 50,
    width: 600,
    height: 450,
    display: "inline-block",
    backgroundColor: "#D3D3D3"
  },
  gridBox: {
    position: 'relative',
    width: 1216,
    height: 300,
    backgroundColor: "#D3D3D3"
  },
  sideBarModal: {
    width: '100%'
  }
}));

const RoadMap = () => {
    const { classes } = useStyles();
    const [roadMapType, setRoadMapType] = useState("frontend");

    const videoJsOptions = {
        autoplay: false,
        controls: true,
        responsive: true,
        aspectRatio: '4:3',
        sources: [
            {
                src: '//vjs.zencdn.net/v/oceans.mp4',
                type: 'video/mp4'
            }
        ]
    };
  const roadMapTypeClickHandler = useCallback(
    (e: MouseEvent<HTMLHeadingElement>) => {
      e.stopPropagation();
      setRoadMapType(e?.currentTarget.id);
    }, []
  )

  return (
      <AppShell
        zIndex={90}
      >
        <Grid columns={24} ml={70}>
          {/* <MediaQuery
            largerThan="sm" styles={{ display: 'none' }}
          >
            <Modal
              opened={opened}
              onClose={() => {}}
              closeOnClickOutside={false}
              closeOnEscape={false}
              size='100%'
              zIndex={90}
            >
              <Title order={1} align="center">
                    포지션
              </Title>
              <Space h="xl"/>
              <Title
                  id={"frontend"}
                  order={3}
                  align="center"
                  sx={{color: activeTitle === 'frontend' ? '#228BE6': '#212529'}}
                  onClick={roadMapTypeClickHandler}
              >
                  Front-End 개발자
              </Title>
              <Space h="xl"/>
              <Title
                  id={"backend"}
                  order={3}
                  align="center"
                  sx={{color: activeTitle === 'backend' ? '#228BE6': '#212529'}}
                  onClick={roadMapTypeClickHandler}
              >
                  Back-End 개발자
              </Title>
            </Modal>
          </MediaQuery> */}
          <Grid.Col span={4}>
            <RoadMapNav
              onClickHandler={roadMapTypeClickHandler} 
              activeTitle={roadMapType} 
            />
          </Grid.Col>
          <Grid.Col span={20}>
            <Box className={classes.courseInfoArea}>
                <Group>
                    <Box sx={{width: 600, height: 450}}>
                      <VideoJS options={videoJsOptions} />
                    </Box>
                    <Box className={classes.courseInfoBox}>
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
                    </Box>
                </Group>
                <Space h="xl"/>
                <Box className={classes.gridBox}>
                    <CourseReviewGrid cols={3}/>
                </Box>
                <Space h="xl"/>
                <Box className={classes.gridBox}>
                    <SimpleCourseGrid cols={3} roadMapeType={roadMapType}/>
                </Box>
            </Box>
          </Grid.Col>
        </Grid>
      </AppShell>
  );
}

export default RoadMap;
