import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import CourseStatusBox from '../../components/courseStatusBox/CourseStatusBox';
import { ICourse, IVideo, ICourseVideo } from '../../typings/db';
import CourseRepository from '../../repositories/Course';
import { useLocalStorage } from '@mantine/hooks';
import { useNavigate } from "react-router-dom";
import { IUserProfile } from '../../typings/db';
import { Button, Center } from '@mantine/core';
import { Square, SquareCheck } from 'tabler-icons-react';
import { findUniqueSeasonNumber, secondsToMinutesString } from '../../utils/common';
import AuthenticationForm from '../../components/AuthentificationForm';
import ToggleTable from '../../components/Table';
import { useCallback } from 'react';
import useStyles from './style';


const Course = () => {
  const [login] = useLocalStorage<IUserProfile | null>({ key: 'login', defaultValue: null });
  const location = useLocation();
  const navigate = useNavigate();
  const [formType, setFormType] = useState<"register" | "login">("login");
  const {course, videos} = location.state as ICourseVideo;
  const [table, setTable] = useState<JSX.Element | JSX.Element[]>();
  const {classes} = useStyles();

  const onResumeCourse = (course: ICourse, videos: IVideo[] | { message: string }) => {
    new CourseRepository()
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
  }
  
  const getbuttonGroup = (course: ICourse, videos: IVideo[] | { message: string }) => (
    <>
      <Button
        style={{width: "140px", marginTop: "4px", marginBottom: "4px"}}
        onClick={() => window.alert("서비스 준비중입니다.")}
      >
        라운지 입장
      </Button>
      <Button
        style={{width: "140px", marginTop: "4px", marginBottom: "4px"}}
        onClick={() => onResumeCourse(course, videos)}
      >
        계속 수강하기
      </Button>
    </>
  );
  
  const navigateToClassRoom = useCallback(
    (course: ICourse, video: IVideo) => {
      const title = course.title.split(" ").join("")
      navigate(
        `/class/${title}/${video?.seasonNumber}/${video?.number}`,
        {
          state: {
            ...video,
            courseId: course.id,
            courseTitle: course.title
          }
        }
      )
    }, [navigate]
  )

  const generateTable = useCallback(
    (takenEpisodes: number[], videos: IVideo[] | { message: string }) => {
    if (videos.hasOwnProperty("message")){
      return (
        <div>강의 영상 업로드전 입니다.</div>
      )
    }
    return (
      findUniqueSeasonNumber(videos as IVideo[]).map(
        (season) => {
          const rows = (videos as IVideo[]).map(
            (video) => {
              return (video.seasonNumber === season) && (
                  <tr key={video.number}>
                    <td>EP{video.number}</td>
                    <td>{video.title}</td>
                    <td>{secondsToMinutesString(video.duration)}</td>
                    <td>
                      {
                        (
                          takenEpisodes.includes(video.number) ?
                          <SquareCheck color={"black"} strokeWidth={2} /> :
                          <Square color={"black"} strokeWidth={2} />
                        )
                      }
                    </td>
                    <td style={{cursor: "pointer"}} onClick={() => {navigateToClassRoom(course, video)}}>{"에피소드 학습하기"}</td>
                  </tr>
                )
              }
            )
          return (
            <div className={classes.table}>
              <ToggleTable
                header={[`시즌 ${season}`, "시즌 제목", "길이", "수강완료"]}
                rows={rows as JSX.Element[]}
              />
            </div>
          )
        }
      )
    )
  }, [course, navigateToClassRoom, classes.table]
  )

  useEffect(
    () => {
      if (!videos) {
        console.log(videos);
      }
      else {
        new CourseRepository()
        .getProgress(login?.token as string, course.id)
        .then( ({episodeNumbers}) => {
          setTable(generateTable(episodeNumbers, videos));
        })
      }

  }, [login, course, videos, setTable, generateTable]);

  return (
    <>
      {
        (login) && (
          <div className={classes.main}>
            <CourseStatusBox
              course={course}
              videos={videos}
              generateButtonGroup={() => getbuttonGroup(course, videos)}
            />
            <div className={classes.tableContainer}>
              {table}
            </div>
          </div>
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
  );
}

export default Course;
