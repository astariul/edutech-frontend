import { useEffect, useState } from "react";
import { Button, Container, createStyles, Modal } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { Link, useNavigate } from "react-router-dom";
import CourseStatusBox from "../components/courseStatusBox/CourseStatusBox";
import CourseRepository from "../repositories/Course";
import { IUserProfile } from '../typings/db';
import { ICourseVideo, ICourse, IVideo } from '../typings/db';

const useStyles = createStyles((theme) => ({
  main: {
    marginTop: "80px",
    marginBottom: 0,
    marginLeft: "80px",
    marginRight: "auto",
    padding: "12px"
  },
  buttonContainer: {
    margin: "24px auto",
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
  const {classes} = useStyles();
  const [myCourses, setMyCourses] = useState<ICourseVideo[]>([]);
  const [opened, setOpened] = useState(false);
  const navigate = useNavigate();

  useEffect(
    () => {
      if (!login) {
        window.alert("로그인 상태가 아닙니다. 로그인해주세요")
        navigate("/login/method");
        return
      }
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
    }, [login, navigate]
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
        onClick={() => {window.alert("서비스 준비중 입니다.")}}
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
        <div className={classes.main}>
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
        </div>
      )
    }
    </>
  )
}

export default MyClassRoom;
