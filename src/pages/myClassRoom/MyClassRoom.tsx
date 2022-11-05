
import useStyles from './style';
import { Button, Modal, Pagination } from '@mantine/core';
import { ICourse, ICourseVideo, IUserProfile, IVideo } from '../../typings/db';
import InitialCircle from '../../components/InitialCircle/InitialCircle';
import { useLocalStorage } from '@mantine/hooks';
import Person from '../../components/person/Person';
import CourseEpisode from '../../components/courseEpisode/CourseEpisode';
import { useEffect, useState, MouseEvent } from 'react';
import CourseRepository from '../../repositories/Course';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { secondsToMinutesString } from '../../utils/common';


const KeyValueTable = ({keyName, value}: {
  keyName: string;
  value: string;
}) => {
  const {classes} = useStyles();
  return (
    <div className={classes.keyValueTable}>
      <div className={classes.keyName}>{keyName}</div> 
      <div className={classes.value}>{value}</div> 
    </div>
  )
};

const HeaderSection = (
  {name, buttonNames, howManyDays}:
  {name: string; buttonNames: string[], howManyDays: number}
) => {

  const {classes} = useStyles();
  return (
  <>
    <div className={classes.headerSection}>
      <div className={classes.initialCircle}>
        <InitialCircle
          initial={name[0] as string}
          circleSize="50px"
          fontSize="39.525px"
          fontWeight={600}
          backgroundColor="#000000"
          initialColor="#FFFFFF"
          fontFamily="AlongSanss2"
          />
      </div>
      <div className={classes.message}>
        안녕하세요. <span style={{fontWeight:700}}>{name}님</span>
        <br />
        연속 {howManyDays}일째 슈코중입니다.
      </div>
      <div className={classes.buttonGroupRows}>
        {
          // TODO: 버튼별 onClick 액션 추가 필요
          buttonNames.map(
            name => (
              <Button
                key={name}
                className={classes.button}
                rightIcon={
                  <img src={require("../../static/image/myClassRoom/coolicon.png")}
                  alt="coolicon"/>
                }
                onClick={() => alert("준비중입니다.")}
              >
                {name}
              </Button>
          )
          )
        }
      </div>
    </div>
  </>
  )
}

const TabSection = (
  {tabNames, defaultActiveTabName}
  :{tabNames: string[]; defaultActiveTabName: string}
) => {

  const {classes, cx} = useStyles();
  const [activeTab, setActiveTab] = useState(defaultActiveTabName);

  const onClickTab = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      const input = e.target as HTMLElement;
      const notReady = ["북마크", "학습질문/답변"];
      notReady.includes(input.innerText) && alert("준비중입니다.");
      setActiveTab(input.innerText);
      
    }, [setActiveTab]
  )

  return (
    <div className={classes.tabSection}>
      {
        tabNames.map(
          (name) => {
            return (
              <div key={name}>
                <div
                  className={cx(classes.tabTitle, {[classes.activeTabTitle]: activeTab === name})}
                  onClick={onClickTab}
                >
                  {name}
                </div>
                <div>I</div>
              </div>
            )
          }
        )
      }
    </div>
  )
}

const TableHeaderSection = (
  {courseTitle, instructorName, instructorDescription, numTotalVideos}
  :{courseTitle: string; instructorName: string; instructorDescription: string, numTotalVideos:number}

) => {
  const {classes} = useStyles();
  return (
    <div className={classes.tableHeaderSection}>
      <div className={classes.tableHeader}>
        <img src={require("../../static/image/myClassRoom/courseAltImage.png")} alt={"courseAltImage"} />
        <div className={classes.courseTitleAndInstructor}>
          <div className={classes.courseTitle}>
            {courseTitle}
          </div>
          <div className={classes.instructor}>
            <Person
              image={require("../../static/image/payment/tutor.png")}
              name={instructorName}
              description={instructorDescription}
              size={50.83}/>
          </div>
        </div>
        <div className={classes.courseDurationAndPeriod}>
          <KeyValueTable keyName="강의" value={`${numTotalVideos}강(0시간)`}/>
          <KeyValueTable keyName="수강기간" value="2022.11.20 ~ 2023.05.20"/>
        </div>
        <div className={classes.buttonGroupColumns}>
          <Button className={classes.button} onClick={() => {alert("준비중입니다.")}}>유의사항</Button>
          <Button className={classes.button} onClick={() => {alert("준비중입니다.")}}>환급/연장조건</Button>
          <Button className={classes.button} onClick={() => {alert("준비중입니다.")}}>출석/미션</Button>
        </div>
      </div>
    </div>
  )
}

const VideoListSection = (
  {courseAndVideos, paginatedVideos}
  :{courseAndVideos: ICourseVideo, paginatedVideos: IVideo[]}
) => {
  const {classes} = useStyles();
  const navigate = useNavigate();
  
  const onClickPlayEpisode = useCallback(
    (courseVideo: ICourseVideo, videoList: IVideo[], clickedVideo: IVideo) => {
      const title = courseVideo.course.title.split(" ").join("");
      navigate(
        `/class/${title}/${clickedVideo?.seasonNumber}/${clickedVideo?.number}`,
        {
          state: {
            courseVideo: courseVideo,
            videoList: videoList,
            video: clickedVideo,
          }
        }
      )
    }, [navigate]
  )

  const onClickBookMark = useCallback(
    (course: ICourse, video: IVideo) => {
      // TODO: 백엔드 API 연동
      alert("준비중입니다.")
    }, []
  )

  return (
    <div className={classes.videoList}>
      {
        paginatedVideos.map(
          video => {
            return (
              <div key={video.number} className={classes.video}>
                <CourseEpisode
                  episodeThumbnail={{width: 168, height: 95, image: require("../../static/image/myClassRoom/episodeThumbnail.png")}}
                  playImage={{width: 45, height: 45, image: require("../../static/image/myClassRoom/play.png")}}
                  title={"SEASON" + video.seasonNumber}
                  subTitle={video.title}
                  tag=""
                  progress={0}
                  time={`0:00/${secondsToMinutesString(video.duration)}`}
                  onClickPlay={
                    () => onClickPlayEpisode(
                      {course: courseAndVideos.course, videos: courseAndVideos.videos},
                      paginatedVideos,
                      video
                    )
                  }
                />
                <div className={classes.latestDateAndBookmark}>
                  <KeyValueTable keyName="최근수강일" value="2022.00.00"/>
                  <span
                    className={classes.bookMark}
                    onClick={() => onClickBookMark(courseAndVideos.course, video)}
                  />
                </div>
              </div>
            )
          }
        )
      }
    </div>
  )
}

const MyClassRoom = () => {
  const [login] = useLocalStorage<IUserProfile | null>({ key: "login", defaultValue: null });
  const {classes} = useStyles();
  const [myCourses, setMyCourses] = useState<ICourseVideo[]>([]);
  const [opened, setOpened] = useState(false);
  const [videoList, setVideoList] = useState<IVideo[]>([]);
  const numPaginatedVideo = 4;
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
            setVideoList(
              (courses[0].videos as IVideo[]).slice(0, numPaginatedVideo)
            )
          }
        )
    }, [login, navigate]
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
        (myCourses[0].videos as IVideo[]).slice(startIndex, lastIndex)
      )
    }, [myCourses, setVideoList, numPaginatedVideo]
  )
  
  return (
    <>
    {
      (login) && (myCourses.length === 0) && (
        <>
        {
          <Modal
            opened={opened}
            onClose={() => {setOpened(false); navigate("/");}}
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
        <div className={classes.contents}>
          <div className={classes.title}>내 강의실</div>
          <HeaderSection
            name={login?.name}
            buttonNames={["출석현황", "기기등록", "환급신청"]}
            howManyDays={0}
          />
          <TabSection
            tabNames={["수강목록", "북마크", "학습질문/답변"]}
            defaultActiveTabName={"수강목록"}
          />
          <TableHeaderSection
            courseTitle={myCourses[0].course.title}
            instructorName={myCourses[0].course.instructor.name}
            instructorDescription={myCourses[0].course.instructor.description}
            numTotalVideos={(myCourses[0].videos as IVideo[]).length}
          />
          <VideoListSection courseAndVideos={myCourses[0]} paginatedVideos={videoList}/>
          <div className={classes.pagination}>
            <Pagination
              total={findTotalPagination((myCourses[0].videos as IVideo[]).length, numPaginatedVideo)}
              size={34}
              radius={0}
              onChange={onClickPageNumber}
            />
          </div>
        </div>
      </div>
      )
    }
    </>
  )
}

export default MyClassRoom;
