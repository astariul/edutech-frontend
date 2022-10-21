import {useCallback, useEffect, useState} from 'react';
import { useLocalStorage } from '@mantine/hooks';
import { useNavigate } from 'react-router-dom';
import LearningCurve from '../../components/learningCurve/LearningCurve';
import CourseRepository from '../../repositories/Course';
import { IUserProfile, ICourse } from '../../typings/db';
import Star from '../../components/stars/Stars';
import AuthRepository from '../../repositories/Auth';
import useStyles from './style';
import { Button, Title } from '@mantine/core';
import ArticleCard from '../../components/CourseCard';
import { getCourseImagePath } from '../../utils/common';
import { useMediaQuery } from '@mantine/hooks';

const CourseIntro = () => {
  const { classes } = useStyles();
  const [login] = useLocalStorage<IUserProfile | null>({ key: "login", defaultValue: null });
  const [coursesInCart, setCoursesInCart] = useLocalStorage<ICourse[] | []>({ key: "coursesInCart", defaultValue: [] });
  const [course, setCourse] = useState<ICourse>();
  const [courses, setCourses] = useState<ICourse[]>();
  const [clickedCourseIdx, setClickedCourseIdx] = useState(0);
  const [start, setStart] = useState(10);
  const navigate = useNavigate();
  const [progress, setProgress] = useState<number[]>([]);
  const [date, setDate] = useState<string[]>([]);
  const [registered, setRegistered] = useState(false);
  const mobileSreen = useMediaQuery('(max-width: 550px)');

  const toPayment = useCallback(
    () => {
      navigate(
        "/payment",
        { state:course }
      );
      const notIncludedCourses = coursesInCart.filter(
        (courseInCart) => courseInCart.id !== course?.id
      ) && [course as ICourse]
      setCoursesInCart(notIncludedCourses);
      return;
    }, [navigate, course, coursesInCart, setCoursesInCart]
)

  const onClickHandler = useCallback(
    () => {
       if (login && registered) {
        navigate("/myclass")
       } else if (login) {
        toPayment();
       } else {
        window.alert("로그인이 필요합니다.");
        navigate("/login/method");
       }

    }, [login, registered, navigate, toPayment]
  )

  useEffect(
    () => {
      new CourseRepository()
      .getAllCourses(login?.token as string)
      .then(
        (courses) => {
          const target = courses.find((_, index) => index === clickedCourseIdx)
          const course = {
            ...target as ICourse,
          };
          setCourse(course);
          setCourses(courses);
        }
      )
    }, [login, setCourses, setCourse, clickedCourseIdx]
  )

  useEffect(
    () => {
      new AuthRepository()
      .me(login?.token as string)
      .then(
        ({data}) => {
          data.myCourses.forEach(
            (each) => {
              if (each.courseId === course?.id) {
                setRegistered(true);
                return;
              }
              else {
                setRegistered(false);
              }
            }
          )
        }
      )
    }, [login, course, setRegistered]
  )

  useEffect(
    () => {
      setProgress([
        Math.floor(Math.random()*start), Math.floor(Math.random()*start+4), 30, 35,
        36, Math.floor(Math.random()*start+34), 39, 40,
        Math.floor(Math.random()*start+38), 48, Math.floor(Math.random()*start+45), 55,
        75, 80, Math.floor(Math.random()*start+80), 95
      ]);
      setDate([
        "W1", "W2", "W3", "W4",
        "W5", "W6", "W7", "W8",
        "W9", "W10", "W11", "W12",
        "W13", "W14", "W15", "W16",
      ]);
    }, [setProgress, start, setDate]
  )

  return (
    <>
      <div>        
        <div>
          <section>
          <div>
            <div className={classes.descriptionHeader}>
              <div className={classes.descriptionContainer}>
                <div className={classes.courseInfoBox}>
                  <div className={classes.courseHeader}>
                    <div style={{display:"flex", gap: "12px"}}>
                      <Title order={6} align="left">{course?.category}</Title>
                      <Title order={6} align="left">수강기간 8주</Title>
                    </div>
                    <Title className={classes.courseTitle} order={1} align="left">
                      {course?.title}
                    </Title>
                    <div className={classes.courseInfo}>
                      <span className={classes.courseStar}>
                        <Star howmany={5} size={15}></Star>
                      </span>
                      <span style={{marginRight: "8px"}}><strong>by {course?.instructor.name}</strong></span>
                      <span><strong>{course?.instructor.description}</strong></span>
                    </div>
                    <Button className={classes.button} onClick={onClickHandler}>
                      {(login && registered) ? "강의실 바로가기" : "수강신청 하기"}
                    </Button>
                  </div>
                  <div className={classes.learningCurve}>
                    <LearningCurve
                      datas={{
                        main: {
                          title: "진척율(%)",
                          data: progress
                        }
                      }}
                      dates={date}
                      colors={["#D0EBFF"]}
                      height={"140%"}
                      width={mobileSreen ? "300px" : "500px"}
                      title={"Learning Curve"}
                      fontColor={"#D0EBFF"}
                      gridLineColor={"transparent"}
                      markerSize={4}
                      lineWidth={3}
                      style={{
                        margin: "0",
                        backgroundColor: "transparent",
                      }}
                      />
                  </div>
                </div>
              </div>
            </div>
          </div>
          </section>
          <section className={classes.courses}>
            <div className={classes.coursesContainer}>
              <Title className={classes.coursesHeader}>실무형 프론트엔드 로드맵</Title>
              <p className={classes.coursesSubtext}>최신 실무 기반 프런트엔드기술을 학습하세요!</p>
              <div className={classes.coursesCards}>
                  {
                    courses?.map((each, index) => (
                      (index !== clickedCourseIdx) && (
                        <div className={classes.card} onClick={() => {setCourse(each); setClickedCourseIdx(index); setStart(Math.floor(Math.random()*10))}}>
                          <ArticleCard
                            key={each.id}
                            id={each.id}
                            image={getCourseImagePath(each.title) as string}
                            title={each.title}
                            category={each.category}
                            description={each.description}
                            footer={each.level}
                            orgPrice={each.orgPrice}
                            author={each.instructor}
                          />
                        </div>
                      )
                  ))
                }
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default CourseIntro;
