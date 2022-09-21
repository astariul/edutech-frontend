import { createStyles, Grid, Container, Center, Text} from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import React, { MouseEvent, useCallback, useEffect, useState } from "react";
import { TriangleInverted } from "tabler-icons-react";
import AuthenticationForm from "../components/AuthentificationForm";
import { IUserProfile } from '../typings/db';
import ReactPlayer from 'react-player/lazy';
import CourseRepository from "../repositories/Course";
import { IVideo } from "../typings/db";
import { useLocation, useNavigate } from "react-router-dom";
import Toggle from '../components/Toggle';
import { CourseEpisode, findNextEpisode, findUniqueSeasonNumber } from "../utils/common";


const useStyles = createStyles((theme) => ({
  classRoom: {
    justifyContent: "space-between",
    alignItems: "start",
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

const ClassRoom = () => {

  const location = useLocation();
  const episode = location.state as CourseEpisode;
  const [login] = useLocalStorage<IUserProfile | null>({ key: "login", defaultValue: null });
  const [formType, setFormType] = useState<"register" | "login">("login");
  const [courseId] = useState(episode?.courseId)
  const [courseTitle] = useState(episode?.courseTitle)
  const [seasons, setSeasons] = useState<number[]>([]);
  const [currentEpisode, setCurrentEpisode] = useState<CourseEpisode | null>(null);
  const [courseVideos, setCourseVideos] = useState<IVideo[] | null>(null);
  const [nextEpisode, setNextEpisode] = useState<CourseEpisode | null>(null);
  const [videoUrl, setVideoUrl] = useState("")
  const {classes} = useStyles();
  const navigate = useNavigate();

  useEffect(
    () => {
      setVideoUrl(
        `${process.env.REACT_APP_API_URL}courses/play/${courseId}/${episode?.number}`
      )
      new CourseRepository()
      .getCourseById(courseId)
      .then(
        (course) => {
          const videos = course.videos as IVideo[];
          setCurrentEpisode(episode);
          setCourseVideos(videos);
          setSeasons(findUniqueSeasonNumber(videos));
          setNextEpisode(findNextEpisode(videos, episode));
        }
      )
    },[episode, courseId]
  )

  const onClickNextEpisode = useCallback(
    (e: MouseEvent<HTMLHeadingElement>) => {
      e.stopPropagation();

      if (!nextEpisode) {
        alert("마지막 강의 입니다.")
        return
      }
      setVideoUrl(
        `${process.env.REACT_APP_API_URL}courses/play/${courseId}/${nextEpisode?.number}`
      )
      setNextEpisode(findNextEpisode(courseVideos as IVideo[], nextEpisode as CourseEpisode));
      navigate(
        `/class/${courseTitle.split(" ").join("")}/${nextEpisode?.seasonNumber}/${nextEpisode?.number}`,
        {
          state: {
          ...nextEpisode,
          courseId: courseId,
          courseTitle: courseTitle
          }
        }
      )
    }, [courseVideos, nextEpisode, courseId, courseTitle, navigate]
  )

  const onClickCompleteEpisode = useCallback(
    (e: MouseEvent<HTMLHeadingElement>) => {
      e.stopPropagation();
      new CourseRepository()
      .completeEpisode(login?.token as string, courseId, currentEpisode?.number as number)
      .then(
        () => {
          navigate(`/survey/${courseId}`)
        }
      )
      navigate(`/survey/${courseId}`)
    }, [login, courseId, currentEpisode, navigate]
  )

  const onClickTargetEpisode = useCallback(
    (video: IVideo) => () => {
      const targetEpisode = {
        title: video.title,
        number: video.number,
        duration: video.duration,
        seasonNumber: video.seasonNumber,
        courseId: courseId,
        courseTitle: courseTitle,
      }
      setVideoUrl(
        `${process.env.REACT_APP_API_URL}courses/play/${courseId}/${video.number}`
      )
      setNextEpisode(
        findNextEpisode(courseVideos as IVideo[], targetEpisode)
      );
      navigate(
        `/class/${courseTitle.split(" ").join("")}/${video.seasonNumber}/${video.number}`,
        { state: targetEpisode }
      )
    }, [courseId, courseTitle, courseVideos, navigate]
  )

  const onSaveCurrentEpisode = (
    token: string, courseId: string, episodeNumber: number
  ) => {
    new CourseRepository()
    .saveCurrentEpisode(token, courseId, episodeNumber);
  }

  const ToggleSeason = seasons.map(
    (season) => {
      return (
        <Toggle
          key={season}
          Name={<Text className={classes.seasonText}>시즌 {season}</Text>}
          Icon={<TriangleInverted className={classes.iconTriangle}/>}
          Items={
            (courseVideos as IVideo[]).map(
              (video) => {
                return (
                  (season === video.seasonNumber) && (
                    <Grid.Col key={video.number} sx={{textAlign: "center", cursor: "pointer"}} onClick={onClickTargetEpisode(video)}>
                      EP0{video.number}  {video.title}  {video.hasOwnProperty("duration") ? video.duration + ":00": ""}
                    </Grid.Col>
                  )
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
                  { file: { attributes: { controlsList: "nodownload" }}}
                }
                url={videoUrl}
                type="video/mp4"
                height="100%"
                width="100%"
                muted={false}
                controls={true}
                onPlay={() => onSaveCurrentEpisode(
                    login?.token,
                    courseId,
                    (currentEpisode as CourseEpisode).number,
                  )
                }
              />
            </Grid.Col>
            <Grid.Col className={classes.sidebar}>
              <Grid className={classes.sidebarContent} sx={{backgroundColor: "#D3D3D3", boxSizing: "border-box"}}>
                <Grid.Col sx={{fontSize: "20px", padding: "20px", cursor: "pointer"}} onClick={onClickCompleteEpisode}>수강 완료하기</Grid.Col>
                <Grid.Col sx={{backgroundColor: "#F8F9FA", width:"100%", padding: "4px"}}/>
                <Grid.Col sx={{fontSize: "20px", padding: "20px 50px 10px 50px", cursor: "pointer"}} onClick={onClickNextEpisode}>다음 강의</Grid.Col>
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
