import { useLocation } from 'react-router-dom';
import CourseStatusBox from '../components/CourseStatusBox';
import { ICourse, IVideo, ICourseVideo } from '../dto/Course';
import CourseRepository from '../repositories/Course';
import { useLocalStorage } from '@mantine/hooks';
import { useNavigate } from "react-router-dom";
import { IUserProfile } from '../dto/UserProfile';
import { Button } from '@mantine/core';


const Course = () => {
  const [login] = useLocalStorage<IUserProfile | null>({ key: 'login', defaultValue: null });
  const location = useLocation();
  const navigate = useNavigate();

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
)

  return (
    <>
      <CourseStatusBox
        course={course}
        videos={videos}
        generateButtonGroup={() => getbuttonGroup(course, videos)}
      />
    </>
  );
}

export default Course;
