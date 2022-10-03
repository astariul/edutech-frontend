import { MouseEvent, useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ReactPlayer from 'react-player/lazy';
import { Grid, Container, Center, Text} from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { TriangleInverted } from "tabler-icons-react";
import AuthenticationForm from "../../components/AuthentificationForm";
import { IUserProfile, IVideo } from '../../typings/db';
import CourseRepository from "../../repositories/Course";
import Toggle from '../../components/Toggle';
import {
  CourseEpisode,
  findNextEpisode,
  findUniqueSeasonNumber,
  secondsToMinutesString
} from "../../utils/common";
import useStyles from "./style";


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
      .getCourseById(login?.token as string, courseId)
      .then(
        (course) => {
          const videos = course.videos as IVideo[];
          setCurrentEpisode(episode);
          setCourseVideos(videos);
          setSeasons(findUniqueSeasonNumber(videos));
          setNextEpisode(findNextEpisode(videos, episode));
        }
      )
    }, [login, episode, courseId]
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

  const onSaveCurrentEpisode = useCallback(
    (
      token: string,
      courseId: string,
      episodeNumber: number
    ) => {
      new CourseRepository()
      .saveCurrentEpisode(token, courseId, episodeNumber);
    }, []
  )

  const onClickCompleteEpisode = useCallback(
    async (e: MouseEvent<HTMLHeadingElement>) => {
      e.stopPropagation();
      const {episodeNumbers} = await new CourseRepository()
      .getProgress(login?.token as string, courseId)
      if (episodeNumbers.includes(currentEpisode?.number as number)) {
        window.alert("이미 수강완료하였습니다. 다음 강의 학습해주세요")
        return
      }
      navigate(
        `/survey/${courseId}/${currentEpisode?.number}`,
        {
          state: {
          ...nextEpisode,
          courseId: courseId,
          courseTitle: currentEpisode?.courseTitle
          }
        }
      );
    }, [login, courseId, currentEpisode, nextEpisode, navigate]
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

  const ToggleSeason = seasons.map(
    (season) => {
      return (
        <Toggle
          key={season}
          Name={<Text className={classes.seasonText}>시즌 {season}</Text>}
          Icon={<TriangleInverted className={classes.iconTriangle}/>}
          toggleOpened={(season === episode.seasonNumber ? true: false)}
          Items={
            (courseVideos as IVideo[]).map(
              (video) => {
                let curEpiBackgroundColor = "#F1F3F5";
                let curEpiFontColor = "#1A1B1E";
                if (season === video.seasonNumber && currentEpisode?.number === video.number) {
                  curEpiBackgroundColor = "#002333";
                  curEpiFontColor = "#DEE2E6";
                }
                return (
                  (season === video.seasonNumber) && (
                    <Grid.Col
                      key={video.number}
                      sx={{textAlign: "center", cursor: "pointer", color: curEpiFontColor, backgroundColor: curEpiBackgroundColor}}
                      onClick={onClickTargetEpisode(video)}
                    >
                      EP0{video.number} {video.title} [{secondsToMinutesString(video.duration)}]
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
