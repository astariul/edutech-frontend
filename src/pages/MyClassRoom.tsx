import React, { useEffect, useState } from "react";
import { Button, Center, Container, createStyles, Modal } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import CourseStatusBox from "../components/CourseStatusBox";
import { IUserProfile } from '../dto/UserProfile';
import AuthenticationForm from "../components/AuthentificationForm";
import { ICourseVideo, ICourse, IVideo } from '../dto/Course';
import { Link, useNavigate } from "react-router-dom";
import CourseRepository from "../repositories/Course";

// const myCourseStats: ICourseStat[] = [
//   {
//     "id": "63199f7d1547b23bea79610e",
//     "title": "HTML Master",
//     "progess": {
//       "my": [1, 2, 2.3, 3, 3.3, 3.8, 5, 6, 7, 8],
//       "average": [1, 1.8, 2.2, 3, 3.3, 3.8, 4, 4.2, 4.4, 6],
//       "superCoder": [1, 2, 2.5, 4, 4.3, 5, 5.4, 6, 7.5, 10],
//       "weekOnWeek": 5.5
//     },
//     "nextCourse": "EP-02",
//     "currentCourse": "EP-01",
//   }
// ]

const useStyles = createStyles((theme) => ({
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
  },
  button: {
    color: "#141517",
    fontSize: "18px",
    backgroundColor: "#D3D3D3",
    '&:hover': {
      color: "#DEE2E6",
      backgroundColor: "#868E96",
    },
    width: "250px",
    height: "80px"
  },
}));

const MyClassRoom = () => {
  const [login] = useLocalStorage<IUserProfile | null>({ key: 'login', defaultValue: null });
  const [formType, setFormType] = useState<'register' | 'login'>('login');
  const {classes} = useStyles();
  const [myCourses, setMyCourses] = useState<ICourseVideo[]>([]);
  const [opened, setOpened] = useState(false);
  const navigate = useNavigate();

  useEffect(
    () => {
      new CourseRepository()
        .getMyCourse(login?.token as string)
        .then(
          (courses) => {
            if (courses.length === 0) {
              setOpened(true);
            }
            setMyCourses(courses);
          }
        )
    }, [login]
  )

  const navigateCourse = (course: ICourse, videos: IVideo[] | { message: string }) => {
      navigate(
        `/course/${course.id}`,
        {
          state: {
            course: course,
            videos: videos
          }
        }
      )
    }

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
        onClick={() => navigateCourse(course, videos)}
      >
        강좌 페이지
      </Button>
      <Button
        style={{width: "140px", marginTop: "4px", marginBottom: "4px"}}
        onClick={() => onResumeCourse(course, videos)}
      >
        이어서 수강하기
      </Button>
    </>
  )

  return (
    <>
    {
      (login) && (myCourses.length === 0) && (
        <>
        {
          <Modal
            opened={opened}
            onClose={() => setOpened(false)}
          >
            수강중인 강의가 없습니다.
          </Modal>
        }
        </>
      )
    }
    {
      (login) && (myCourses.length > 0) && (
        <>
          {
            myCourses.map(
              (each, index) => {
                return (                    
                  <CourseStatusBox
                    key={index}
                    course={each.course}
                    videos={each.videos}
                    generateButtonGroup={() => getbuttonGroup(each.course, each.videos)}
                  />
                )
              }
            )
          }
          <Container className={classes.buttonContainer}>
            <Button
              className={classes.button}
              component={Link}
              to={"/roadmap"}
            >
              코스 탐색하러 가기
            </Button>
          </Container>
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
  )
}

export default MyClassRoom;
