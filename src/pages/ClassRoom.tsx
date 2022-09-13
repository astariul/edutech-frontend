import { createStyles, Grid, Container, Center, Text, 
  // Modal
} from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import React, { MouseEvent, useCallback, useEffect, useState } from "react";
import { TriangleInverted } from "tabler-icons-react";
import AuthenticationForm from "../components/AuthentificationForm";
import { IUserProfile } from '../dto/UserProfile';
import ReactPlayer from 'react-player/lazy';
import CourseRepository from "../repositories/Course";
import { IEpisode, IVideo } from "../dto/Course";
import { useLocation, useNavigate } from "react-router-dom";
import Toggle from '../components/Toggle';


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
  },
  seasonText: {
    flex: "0 0 70%",
    paddingLeft: "105px",
    fontSize: "20px",
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

type CourseEpisode = IEpisode & {courseId: string, courseTitle: string};

const findUniqueSeasonNumber = (videos: IVideo[]) => {
  const numbers = videos.map(
    (each) => each.seasonNumber
  )
  return Array.from(new Set(numbers));
}

const findNextEpisode = (videos: IVideo[], currentEpisode: CourseEpisode): CourseEpisode => {
  const ret = videos.find(
    (each) =>
      (
        each.seasonNumber === currentEpisode.seasonNumber &&
        each.number === currentEpisode.number &&
        each.title === currentEpisode.title
      )
  )
  return {
    title: ret?.title as string,
    number: ret?.number as number,
    duration: ret?.duration as number,
    seasonNumber: ret?.seasonNumber as number,
    courseId: currentEpisode.courseId,
    courseTitle: currentEpisode.courseTitle
  };
}

const ClassRoom = () => {

  const [login] = useLocalStorage<IUserProfile | null>({ key: "login", defaultValue: null });
  const [formType, setFormType] = useState<"register" | "login">("login");
  
  const [seasons, setSeasons] = useState<number[]>([]);
  const [currentEpisode, setCurrentEpisode] = useState<CourseEpisode | null>(null);
  const [courseVideos, setCourseVideos] = useState<IVideo[] | null>(null);
  const [nextEpisode, setNextEpisode] = useState<CourseEpisode | null>(null);
  const [videoUrl, setVideoUrl] = useState('')
  const {classes} = useStyles();
  const location = useLocation();
  const navigate = useNavigate();
  
  const episode = location.state as CourseEpisode;

  useEffect(
    () => {
      setCurrentEpisode(episode);
      setVideoUrl(
        `${process.env.REACT_APP_API_URL}courses/play/${currentEpisode?.courseId}/${currentEpisode?.number}}`
      )
            
      new CourseRepository()
      .getCourseById(episode.courseId as string)
      .then(
        (course) => {
          const videos = course.videos as IVideo[];
          setCourseVideos(videos);
          setSeasons(findUniqueSeasonNumber(videos));
          // setSeasons([1,2]);
          // setCourseVideos([
          //   {number:1, path: "", seasonNumber: 1, title: "intro", duration: 5},
          //   {number:2, path: "", seasonNumber: 1, title: "lecture1", duration: 7},
          // ]);
          
          setNextEpisode(findNextEpisode(videos, episode));
        }
      )
    }
    ,[currentEpisode, episode]
  )

  const onClickNextEpisode = useCallback(
    (e: MouseEvent<HTMLHeadingElement>) => {
      e.stopPropagation();
      setCurrentEpisode(nextEpisode);
      setVideoUrl(
        `${process.env.REACT_APP_API_URL}courses/play/${currentEpisode?.courseId}/${currentEpisode?.number}}`
      )
            
      new CourseRepository()
      .getCourseById(nextEpisode?.courseId as string)
      .then(
        (course) => {
          const videos = course.videos as IVideo[];
          setCourseVideos(videos);
          setSeasons(findUniqueSeasonNumber(videos));          
          setNextEpisode(findNextEpisode(videos, currentEpisode as CourseEpisode));
        }
      )
      // navigate(
      //   `/class/${nextEpisode?.courseTitle}/${nextEpisode?.seasonNumber}/${nextEpisode?.number}`,
      //   { state: nextEpisode }
      // )
    }, [currentEpisode, nextEpisode]
  )
  
  const onClickCompleteEpisode = useCallback(
    (e: MouseEvent<HTMLHeadingElement>) => {
      e.stopPropagation();
      navigate(`/survey/${currentEpisode?.courseId}`)
    }, [currentEpisode, navigate]
  )
  
  const onContinueToNextEpisode = useCallback(() => {
    // 현재 강의(비디오) 플레이 완료 시 다음 에피소드 학습 이어가기 질문 모달
    }, []
  )

  // const modalCloseHandler = useCallback(() => {
  //   // 모달 종료시 메인 페이지로 이동
  //   setModalOpened(false);
  //   }, [setModalOpened]
  // )

  const ToggleSeason = seasons.map(
    (num) => {
      return (
        <Toggle
          key={num}
          Name={<Text className={classes.seasonText}>시즌 {num}</Text>}
          Icon={<TriangleInverted className={classes.iconTriangle}/>}
          Items={
            (courseVideos as IVideo[]).map(
              (video) => {
                return (
                  <Grid.Col key={video.number} sx={{textAlign: "center"}}>
                    EP0{video.number}  {video.title}  {video.hasOwnProperty("duration") ? video.duration + ":00": ""}
                  </Grid.Col>
                )
              }
            )
          }
        />
      )
    }
  )

    return (
      <>
      {
        (login) && (
          <Grid className={classes.classRoom}>
              <Grid.Col className={classes.videoContainer}>
                <ReactPlayer
                  config={
                    { file: { attributes: { controlsList: 'nodownload' }}}
                  }
                  url={videoUrl}
                  height="100%"
                  width="100%"
                  controls={true}
                  onEnded={onContinueToNextEpisode}
                />
              </Grid.Col>
              <Grid.Col className={classes.sidebar}>
                <Grid className={classes.sidebarContent} sx={{backgroundColor: "#D3D3D3", boxSizing: "border-box"}}>
                  <Grid.Col sx={{fontSize: "20px", padding: "20px"}} onClick={onClickCompleteEpisode}>수강 완료하기</Grid.Col>
                  <Grid.Col sx={{backgroundColor: "#F8F9FA", width:"100%", padding: "4px"}}/>
                  <Grid.Col sx={{fontSize: "20px", padding: "20px 50px 10px 50px"}} onClick={onClickNextEpisode}>다음 강의</Grid.Col>
                  <Grid.Col sx={{fontSize: "17px", padding: "0px"}}>EP0{nextEpisode?.number}: {nextEpisode?.title}</Grid.Col>
                  <Grid.Col sx={{backgroundColor: "#F8F9FA", width:"100%", padding: "8px"}}/>
                  <Container sx={{fontSize: "20px", padding: "30px 0px 30px 0px", display: "flex", boxSizing: "border-box", border: "2px solid black", width:"100%"}}>
                    <Text sx={{fontSize: "20px", flex: "0 0 50%", textAlign: "center"}}>목차</Text>
                    <Text sx={{fontSize: "20px", flex: "0 0 50%", textAlign: "center"}}>채팅</Text>
                  </Container>
                  <Grid.Col sx={{backgroundColor: "#F8F9FA", width:"100%"}}/>
                  {ToggleSeason}
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
