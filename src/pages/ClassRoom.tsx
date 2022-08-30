import { createStyles, Grid, Container, Space, Stack, Group, Select, Center } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import React, { useState } from "react";
import AuthenticationForm from "../components/AuthentificationForm";
import { UserProfile } from "../components/LocalStorage";
import VideoJS from '../components/Video';
// import { useParams } from "react-router-dom";


const useStyles = createStyles((theme) => ({
  classRoomSidebar: {
    margin: '2.4rem'
  },
  videoContainer : {
    margin: '2.4rem',
    maxHeight: 'calc(100% - 4.8rem - 13.7rem)',
    height: 'calc(100% - 13.7rem)',
    padding: 0,
    width: '100%',
    display: 'block',
  },
  courseInfoBox: {
    width: '100%'
  }
}));

const lectures = {
  courseId: "1",
  videos: [
    {
      number: 1,
      path: ""
    },
    {
      number: 2,
      path: ""
    },
    {
      number: 3,
      path: ""
    },
  ]
}

const ClassRoom = () => {

    const [login] = useLocalStorage<UserProfile | null>({ key: 'login', defaultValue: null });
    const [formType, setFormType] = useState<'register' | 'login'>('login');

    const {classes} = useStyles();
    // const {params} = useParams();
    const videoJsOptions = {
        autoplay: false,
        controls: true,
        responsive: true,
        fluid: true,
        aspectRatio: '16:9',
        sources: [
            {
                src: '//vjs.zencdn.net/v/oceans.mp4',
                type: 'video/mp4'
            }
        ]
    };

    return (
        <>
        {
          (login) && (
            <Grid columns={24} justify={'flex-start'} align={'flex-start'}
            sx={{flexWrap:'nowrap', flexDirection: 'row'}}>
                <Grid.Col span={18}>
                  <div className={classes.videoContainer}>
                    <VideoJS options={videoJsOptions}/>
                  </div>
                    {/* <Container size={'xl'} className={classes.videoBox}>
                    </Container> */}
                    {/* <VideoJS /> */}
                </Grid.Col>
                <Grid.Col span={6}>
                    <Stack className={classes.classRoomSidebar}>
                      <Container sx={{textAlign:'center',display: 'block'}}>다음강의</Container>
                      <Space h="md"/>
                      <Group>
                        <Container sx={{textAlign:'center',display: 'block'}}>
                          목차
                        </Container>
                        <Container sx={{textAlign:'center',display: 'block'}}>
                          채팅
                        </Container>
                      </Group>
                      <Select
                        placeholder="시즌 1"
                        data={[
                          { value: '시즌 1', label: '시즌 1' },
                          { value: '시즌 2', label: '시즌 2' },
                          { value: '시즌 3', label: '시즌 3' },
                        ]}
                        />
                      {
                        lectures['videos'].map((video, index) => {
                          return (
                            <>
                              <Container key={index} sx={{textAlign:'center',display: 'block'}}>
                                EP-{video.number}
                              </Container>
                            </>
                          )
                        })
                      }
                    </Stack>

                </Grid.Col>
            </Grid>
          )
      }
      {
        (!login) && (
          <Center sx={{paddingTop: 100}}>
              <AuthenticationForm formType={formType} setFormType={setFormType} modalSetOpened={() => void(0)} />
          </Center>
        )
      }
      </>
    )
}

export default ClassRoom;
