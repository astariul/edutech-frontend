import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import CourseStatusBox from '../components/CourseStatusBox';
import { ICourse, IVideo, ICourseVideo } from '../dto/Course';
import CourseRepository from '../repositories/Course';
import { useLocalStorage } from '@mantine/hooks';
import { useNavigate } from "react-router-dom";
import { IUserProfile } from '../dto/UserProfile';
import { Button, Center, Space, Table } from '@mantine/core';
import { Checkbox } from 'tabler-icons-react';
import { findUniqueSeasonNumber } from '../utils/common';
import AuthenticationForm from '../components/AuthentificationForm';


const Course = () => {
  const [login] = useLocalStorage<IUserProfile | null>({ key: 'login', defaultValue: null });
  const location = useLocation();
  const navigate = useNavigate();
  const [formType, setFormType] = useState<"register" | "login">("login");
  const {course, videos} = location.state as ICourseVideo;

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
      >
        복습하기
      </Button>
      <Button
        style={{width: "140px", marginTop: "4px", marginBottom: "4px"}}
        onClick={() => onResumeCourse(course, videos)}
      >
        계속 수강하기
      </Button>
    </>
  );

  const seasons = findUniqueSeasonNumber(videos as IVideo[]);
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
              if (video.seasonNumber === season) {
                return (
                  <tr key={video.title}>
                    <td>EP{video.number}</td>
                    <td>{video.title}</td>
                    <td>{video.duration}</td>
                    <td><Checkbox color={"black"}/></td>
                  </tr>
                )
              }
            }
          )
          const table = (
            <>
            <Table style={{marginLeft: "auto", marginRight: "auto", textAlign: "center"}}>
              <thead>
                <tr key={season}>
                  <th style={{fontSize: 18, textAlign: "center"}}>시즌 {season}</th>
                  <th style={{fontSize: 18, textAlign: "center"}}>시즌 제목</th>
                  <th style={{fontSize: 18, textAlign: "center"}}>시간</th>
                  <th style={{fontSize: 18, textAlign: "center"}}>수강완료</th>
                </tr>
              </thead>
              <tbody>{rows}</tbody>
            </Table>
            <Space h="xl"/>
            </>
          )
          return table
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
