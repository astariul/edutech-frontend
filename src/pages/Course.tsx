import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import CourseStatusBox from '../components/CourseStatusBox';
import { ICourse, IVideo, ICourseVideo } from '../typings/db';
import CourseRepository from '../repositories/Course';
import { useLocalStorage } from '@mantine/hooks';
import { useNavigate } from "react-router-dom";
import { IUserProfile } from '../typings/db';
import { Button, Center, Grid, } from '@mantine/core';
import { Square, SquareCheck } from 'tabler-icons-react';
import { findUniqueSeasonNumber } from '../utils/common';
import AuthenticationForm from '../components/AuthentificationForm';
import ToggleTable from '../components/Table';
import { useCallback } from 'react';


const Course = () => {
  const [login] = useLocalStorage<IUserProfile | null>({ key: 'login', defaultValue: null });
  const location = useLocation();
  const navigate = useNavigate();
  const [formType, setFormType] = useState<"register" | "login">("login");
  const {course, videos} = location.state as ICourseVideo;
  const isCompletes = useRef<{[key: string]:string}>({});
  const seasons = findUniqueSeasonNumber(videos as IVideo[]);

  useEffect(
    () => {
      if (!videos) {
        console.log(videos);
      }
      else {
        (videos as IVideo[]).forEach(
          (video) => {
            new CourseRepository()
              .isCompletedEpisode(login?.token as string, course.id, video.number)
              .then(
                (data) => {
                  isCompletes.current = {
                    ...isCompletes.current,
                    [`EP${video.number}`]: data,
                  }
                }
              )}
          )
      }
      return () => {
        isCompletes.current = {}
      }
  }, [login, course, videos, isCompletes]);

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

  const generateTable = (seasons: number[], videos: IVideo[] | { message: string }) => {
    if (videos.hasOwnProperty("message")){
      return (
        <div>강의 영상 업로드전 입니다.</div>
      )
    }
    return (
      (seasons).map(
        (season) => {
          const rows = (videos as IVideo[]).map(
            (video) => {
              return (video.seasonNumber === season) && (
                  <tr key={video.title}>
                    <td style={{cursor: "pointer"}} onClick={() => {navigateToClassRoom(course, video)}}>EP{video.number}</td>
                    <td style={{cursor: "pointer"}} onClick={() => {navigateToClassRoom(course, video)}}>{video.title}</td>
                    <td>{video.duration}</td>
                    <td>
                      {
                        (
                          isCompletes.current[`EP${video.number}`] === "true" ?
                          <SquareCheck color={"black"} strokeWidth={2} /> :
                          <Square color={"black"} strokeWidth={2} />
                        )
                      }
                    </td>
                    <td>{""}</td>
                  </tr>
                )
              }
            )
          return (
            <Grid style={{margin: "10px 350px", flexDirection: "column", justifyContent: "space-between"}}>
              <ToggleTable
                header={[`시즌 ${season}`, "시즌 제목", "길이", `수강완료`]}
                rows={rows as JSX.Element[]}
              />
            </Grid>
          )
        }
      )
    )
  }

  return (
    <>
      {
        (login) && (
          <>
            <CourseStatusBox
              course={course}
              videos={videos}
              generateButtonGroup={() => getbuttonGroup(course, videos)}
            />
            {generateTable(seasons, videos)}
        </>
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
