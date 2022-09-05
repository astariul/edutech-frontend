import { createStyles, Grid, Container, Collapse, Center, Text, 
  // Modal
} from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import React, { MouseEvent, useCallback, useEffect, useState } from "react";
import { TriangleInverted } from "tabler-icons-react";
import AuthenticationForm from "../components/AuthentificationForm";
import { IUserProfile } from '../dto/UserProfile';
import ReactPlayer from 'react-player/lazy';
import CourseRepository from "../repositories/Course";
import { IVideo } from "../dto/Course";
// import { useParams } from "react-router-dom";


const useStyles = createStyles((theme) => ({
  classRoom: {
    justifyContent: "space-between",
    alignItems: "strech",
    maxWidth: "100%",
    flexDirection: "row",
    marginLeft: "0px"
  },
  sidebar: {
    margin: '2.4rem 1rem 1rem',
    flex: "1 1 20%",
  },
  sidebarContent: {
    flexDirection: "column",
    alignItems: "center",
  },
  videoContainer : {
    flex: "1 1 70%",
    margin: '2.4rem',
    padding: 0,
  },
  buttonContainer: {
    display: "flex",
    width:"100%"
  },
  courseSubCategoryText: {
    flex: "0 0 70%",
    textAlign: "center",
    paddingLeft: "105px",
    fontSize: "22px",
    boxSizing: "border-box",
  },
  iconTriangle: {
    fill: "#101113",
    flex: "0 0 30%",
    boxSizing: "border-box",
    justifyContent: "center",
    paddingTop: "6px",
    paddingLeft: "30px"
  }
}));

let seasons = [1,2,3]


const ClassRoom = () => {

    const [login] = useLocalStorage<IUserProfile | null>({ key: "login", defaultValue: null });
    const [formType, setFormType] = useState<"register" | "login">("login");
    const [opend, setOpend] = useState(false);
    // const [
    //   modalOpened,
    //   setModalOpened
    // ] = useState(false);
    const [subCategory, setSubCategory] = useState("시즌 1");
    // const [currentVideo, setCurrentVideo] = useState<number | null>(null);
    // const [nextVideo, setNextVideo] = useState<number | null>(null);
    // const [myCourse, setMyCourse] = useState<ICourse | null>(null);
    const [courseVideos, setCourseVideos] = useState<IVideo[] | null>(null);
    const {classes} = useStyles();
    // const { courseId } = useParams();
    const courseId = "630df6454d855e3ff3dffbb1"

    useEffect(
      () => {
        new CourseRepository()
        .getCourseById(courseId as string)
        .then(
            (course) => {
              // setMyCourse(course);
              if (course.videos){
                setCourseVideos(course.videos);
              }
              else{
              //  setModalOpened(true);
              }
              // setCurrentVideo(course.videos?.at(0)?.path as string);
              // setNextVideo(course.videos?.at(1)?.number);
            }
        )
        .catch(( {response} ) => {
          console.log("err", response);
          if (response.status.toString().startsWith("4"))
          {
            // setModalOpened(true);
          }
        });
      }, [courseId]
    )

    const clickNextHandler = useCallback(
      (e: MouseEvent<HTMLHeadingElement>) => {
        e.stopPropagation();
        //  백엔드 다음강의 api 호출
      }, []
    )
    
    const clickDoneHandler = useCallback(
      (e: MouseEvent<HTMLHeadingElement>) => {
        e.stopPropagation();
        //  백엔드 수강완료 api 호출
      }, []
    )

    const clickSubCategoryHandler = useCallback(
      (e: MouseEvent<HTMLHeadingElement>) => {
        e.stopPropagation();
        const target = e.target as HTMLElement;
        setSubCategory(target.innerText);
      }, []
    )
  
    const subCategories = seasons.map(
      (num) => {
        return (
          <Grid.Col key={num} sx={{textAlign: "center"}} onClick={clickSubCategoryHandler}>
            시즌-{num}
          </Grid.Col>
        )
      }
    )

    const onEndedHandler = useCallback(() => {
      // 현재 강의(비디오) 플레이 완료 시 현재 강의, 다음 강의 상태 변경
        // setCurrentVideo(nextVideo);
      }, []
    )
  
    // const modalCloseHandler = useCallback(() => {
    //   // 모달 종료시 메인 페이지로 이동
    //   setModalOpened(false);
    //   }, [setModalOpened]
    // )

    const videos = (courseVideos) || ([
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
    ])

    const episodes = videos?.map(
      (video) => {
        return (
          <Grid.Col key={video.number} sx={{textAlign: "center"}}>
            EP-{video.number}
          </Grid.Col>
        )
      }
    )
  
    return (
        <>
        {/* <Modal
          opened={modalOpened}
          onClose={modalCloseHandler}
        >
          <Text>
              요청하신 강의 동영상을 찾을 수 없습니다.
          </Text>
          <Text>
            강의 또는 유닛이 존재하지 않습니다.
          </Text>
        </Modal> */}
        {
          (login) && (
            <Grid className={classes.classRoom}>
                <Grid.Col className={classes.videoContainer}>
                  <ReactPlayer
                    config={{ file: { 
                      attributes: {
                        controlsList: 'nodownload'
                      }
                    }}}
                    url={ `${process.env.REACT_APP_API_URL}courses/play/${courseId}/2}`}
                    height="100%"
                    width="100%"
                    controls={true}
                    onEnded={onEndedHandler}
                  />
                </Grid.Col>
                <Grid.Col className={classes.sidebar}>
                  <Grid className={classes.sidebarContent} sx={{backgroundColor: "#D3D3D3", boxSizing: "border-box"}}>
                    <Grid.Col sx={{fontSize: "20px", padding: "20px"}} onClick={clickDoneHandler}>수강 완료하기</Grid.Col>
                    <Grid.Col sx={{backgroundColor: "#F8F9FA", width:"100%", padding: "4px"}}/>
                    <Grid.Col sx={{fontSize: "20px", padding: "20px 50px 10px 50px"}} onClick={clickNextHandler}>다음 강의</Grid.Col>
                    <Grid.Col sx={{fontSize: "17px", padding: "0px"}}>EP-1</Grid.Col>
                    <Grid.Col sx={{backgroundColor: "#F8F9FA", width:"100%", padding: "8px"}}/>
                    <Container sx={{fontSize: "20px", padding: "30px 0px 30px 0px", display: "flex", boxSizing: "border-box", border: "2px solid black", width:"100%"}}>
                      <Text sx={{fontSize: "20px", flex: "0 0 50%", textAlign: "center"}}>목차</Text>
                      <Text sx={{fontSize: "20px", flex: "0 0 50%", textAlign: "center"}}>채팅</Text>
                    </Container>
                    <Grid.Col sx={{backgroundColor: "#F8F9FA", width:"100%"}}/>
                    <Grid.Col className={classes.buttonContainer} onClick={() => setOpend((o) => !o)}>
                      <Text className={classes.courseSubCategoryText}>{subCategory}</Text>
                      <TriangleInverted className={classes.iconTriangle}/>
                    </Grid.Col>
                  <Collapse in={opend}>
                    {subCategories}
                  </Collapse>
                    {episodes}
                  </Grid>
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
