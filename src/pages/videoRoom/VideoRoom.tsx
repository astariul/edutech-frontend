
import { useLocalStorage } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ICourse, ICourseVideo, IUserProfile, IVideo } from '../../typings/db';
import { secondsToMinutesString } from '../../utils/common';
import useStyles from './style';
import { useCallback } from 'react';
import VideoPlayer from '../../components/videoPlayer/VideoPlayer';
import Person from '../../components/person/Person';
import { Progress, TextInput, Button, Pagination } from '@mantine/core';
import CourseEpisode from '../../components/courseEpisode/CourseEpisode';
import { Textarea } from '@mantine/core';

const VideoSection = ({videoUrl}: {videoUrl: string}) => {
  const {classes} = useStyles();
  return (
    <div className={classes.videoSection}>
      <VideoPlayer
        videoUrl={videoUrl}
        playIcon={{
          width: "100%",
          height: "100%",
          image: require("../../static/image/videoRoom/playIcon.png")
        }}
        controls={true}
        size={{width:"868px", height: "483.32px"}}
      />
    </div>
  )
}

const QuestionSection = ({instructorName}: {instructorName: string}) => {
  const {classes} = useStyles();
  return (
    <section className={classes.questionSection}>
      <div>학습질문 작성하기</div>
      <div>
        <img id="instructorImage" src={require("../../static/image/videoRoom/coach.png")} alt="coach" />
        <div>
          <span id="instructorName">{instructorName}</span>
          <span id="guide">슈코치에게<br/> 궁금한점을 물어보세요!</span>
        </div>
      </div>
      <TextInput placeholder="제목을 입력해주세요."/>
      <Textarea placeholder="내용을 입력해주세요."/>
      <Button radius={0}>등록하기</Button>
    </section>
  )
}

const VideoTitleSection = ({video}: {video: IVideo}) => {
  const {classes} = useStyles();
  return (
    <section className={classes.videoTitle}>
      <div className={classes.title}>
        {`SEASON ${video.seasonNumber}`}
      </div>
      <div className={classes.subtitle}>{`${video.number}.${video.title}`}</div>
    </section>
  )
}

const TableHeaderSection = (
  {courseTitle, instructorName, instructorDescription}
  :{courseTitle: string; instructorName: string; instructorDescription: string}
) => {
  const {classes} = useStyles();
  return (
    <section className={classes.tableHeader}>
      <img
        src={require("../../static/image/myClassRoom/courseAltImage.png")}
        alt={"instructorPicture"}
      />
      <div className={classes.courseTitleAndInstructor}>
        <div className={classes.courseTitle}>
          {courseTitle}
        </div>
        <div className={classes.instructor}>
          <Person
            image={require("../../static/image/myClassRoom/avatar.png")}
            name={instructorName}
            description={instructorDescription}
            size={37.78}/>
        </div>
        <div className={classes.progressBar}>
          <Progress value={1} size={4} radius={22}/>
        </div>
      </div>
      <div className={classes.progressText}>
        <span>1강/100강</span>
      </div>
    </section>
  )
}

const CourseReview = ({courseTitle}: {courseTitle: string}) => {
  const {classes} = useStyles();
  return (
    <div className={classes.courseReview}>
      <div>수강후기</div>
      <div className={classes.reviewCard}>
        <div className={classes.reviewPerson}>
          <Person
            image={require("../../static/image/videoRoom/review.png")}
            name={"김O경님"}
            description={courseTitle}
            size={40}
            indicator={false}
            />
        </div>
        <div className={classes.review}>
          <span>이 강의를 한 단어로 설명한다면? “튜터님의 미친 강의력”. 정말 앉아서 듣기만 해도, ‘와 코딩 진짜 쉽네’라고 생각할 정도로 미친 강의력을 자랑하시는 튜터님. 튜터님이 이 부분에 집중하라고 말하실 때마다, 막막한 제 마음을 읽으신건지…ㅎㅎ 해이해졌던 집중력을 빠짝 다시 잡을 수 있어서 즐거웠습니다.</span>
        </div>
        <div className={classes.tags}>
          <div>#비전공자</div>
          <div>#웹개발</div>
          <div>#대학생</div>
        </div>
      </div>
    </div>
  )

}


const VideoListSection = ({course, videos}: {course: ICourse; videos: IVideo[]}) => {
  const {classes} = useStyles();
  const navigate = useNavigate();

  const onClickPlayEpisode = useCallback(
    (courseVideo: ICourseVideo, video: IVideo) => {
      const title = courseVideo.course.title.split(" ").join("");
      navigate(
        `/class/${title}/${video?.seasonNumber}/${video?.number}`,
        {
          state: {
            courseVideo: courseVideo,
            video: video,
          }
        }
      )
    }, [navigate]
  )

  return (
    <section className={classes.videoList}>
    {
      videos.map(
        video => {
          return (
            <div key={video.number} className={classes.courseEpisode}>
              <CourseEpisode
                episodeThumbnail={{width: 100, height: 57, image: require("../../static/image/myClassRoom/episodeThumbnail.png")}}
                playImage={{width: 26, height: 27, image: require("../../static/image/myClassRoom/play.png")}}
                title={"SEASON" + video.seasonNumber}
                subTitle={video.title}
                tag=""
                progress={0}
                time={`0:00/${secondsToMinutesString(video.duration)}`}
                onClickPlay={() => onClickPlayEpisode({course: course, videos: videos}, video)}
              />
            </div>
          )
        }
      )
    }
    </section>
  )
}

const VideoRoom = () => {
  const {classes} = useStyles();
  const location = useLocation();
  const state = location.state as {courseVideo: ICourseVideo; video: IVideo};
  const [courseId] = useState(state.courseVideo.course.id);
  const [courseTitle] = useState(state.courseVideo.course.title);
  const [videoUrl, setVideoUrl] = useState("")
  const navigate = useNavigate();
  const [login] = useLocalStorage<IUserProfile | null>({ key: "login", defaultValue: null });
  const [videoList, setVideoList] = useState<IVideo[]>([]);
  const numPaginatedVideo = 4;

  useEffect(
    () => {
      if (!login) {
        window.alert("로그인 상태가 아닙니다. 로그인해주세요");
        navigate("/login/method");
        return
      }

      setVideoUrl(
        `${process.env.REACT_APP_API_URL}courses/play/${courseId}/${state.video.number}`
      );
      setVideoList(state.courseVideo.videos as IVideo[]);

      // new CourseRepository()
      // .getCourseById(login?.token as string, courseId)
      // .then(
      //   (course) => {
      //     const videos = course.videos as IVideo[];
      //     setCourseVideos(videos);
      //   }
      // )
    }, [login, state, courseId, navigate]
  )

  const findTotalPagination = useCallback(
    (totalVideos: number, numVideoPerPage: number) => Math.ceil(
        totalVideos / numVideoPerPage
    ), []
  )

  const onClickPageNumber = useCallback(
    (page: number) => {
      const lastIndex = page * numPaginatedVideo
      const startIndex = lastIndex - numPaginatedVideo
      setVideoList(
        (state.courseVideo.videos as IVideo[]).slice(startIndex, lastIndex)
      )
    }, [state, setVideoList]
  )

  return (
    <div className={classes.main}>
      <section className={classes.contents}>
        <section className={classes.top}>
          <VideoSection videoUrl={videoUrl}/>
          <QuestionSection instructorName={state.courseVideo.course.instructor.name}/>
        </section>
        <section className={classes.bottom}>
          <section className={classes.bottomLeft}>
            <VideoTitleSection video={state.video} />
            <TableHeaderSection
              courseTitle={courseTitle}
              instructorName={state.courseVideo.course.instructor.name}
              instructorDescription={state.courseVideo.course.instructor.description}
            />
            <VideoListSection
              course={state.courseVideo.course}
              videos={videoList}
            />
          </section>
          <section className={classes.bottomRight}>
            <img src={require("../../static/image/videoRoom/banner.png")} alt="banner" />
            <CourseReview courseTitle={state.courseVideo.course.title}/>
          </section>
        </section>
        <div className={classes.pagination}>
          <Pagination
            total={findTotalPagination((state.courseVideo.videos as IVideo[]).length, numPaginatedVideo)}
            size={34}
            radius={0}
            onChange={onClickPageNumber}
          />
        </div>
      </section>
    </div>
  )
}

export default VideoRoom;
