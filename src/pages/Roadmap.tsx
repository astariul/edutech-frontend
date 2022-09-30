import React, {useCallback, useEffect, useState} from 'react';
import { Grid, createStyles, Title, Box, Button} from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { useNavigate } from 'react-router-dom';
import CourseReviewGrid from '../components/CourseReviewGrid';
import SimpleCourseGrid from "../components/SimpleCourseGrid";
import LearningCurve from '../components/learningCurve/LearningCurve';
import CourseRepository from '../repositories/Course';
import { IUserProfile, ICourse } from '../typings/db';
import Star from '../components/stars/Stars';
import AuthRepository from '../repositories/Auth';

const useStyles = createStyles((theme) => ({
  descriptionHeader: {
    padding: "40px 0",
    background: "#002333"
  },
  descriptionContainer: {
    boxSizing: "border-box",
    margin: "0 auto",
    padding: "0 20px",
    maxWidth: "1200px",
  },
  courseHeader: {
    padding: "0 24px",
    flexBasis: "55.3%",
    maxWidth: "55.3%",
    color: "#D0EBFF"
  },
  courseTitle: {
    marginBottom: "20px",
  },
  courseInfo: {
    display: "flex",
    flexWrap: "wrap",
    fontWeight: 400,
    lineHeight: 1.43,
    fontSize: "14px",
    marginBottom: "8px",
    letterSpacing: "-.3px",
    alignItems: "center",
    flexDirection: "row"
  },
  courseStar: {
    marginRight: "10px"
  },
  learningCurve: {
    display: "inline-flex",
    justifyContent: "center",
    flexBasis: "40.45%",
    width: "40.45%",
    padding: 0,
    overflow: "hidden",
  },
  courseInfoBox : {
    display:"flex",
    flex:"0 1 auto",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: "12px",
    maxHeight: "100%"
  },
  coursesArea: {
    width: "100%",
    maxWidth: "100%",
    marginTop: 50,
    justifyContent: "space-between",
    alignItems: "stretch"
  },
  gridBox: {
    margin: "0 auto",
    position: 'relative',
    width: "100%",
    maxWidth: "1200px",
    height: 300,
    backgroundColor: "#ADB5BD"
  },
  registerButton: {
    fontSize: "15px", 
    letterSpacing: "0.5px",
    marginTop: "15px",
    marginLeft: "auto",
    marginRight: "auto",
    height: "55px",
    width: "276px",
    backgroundColor: "transparent",
    border: "1px solid #D0EBFF",
    "&:hover": {
      backgroundColor: "transparent"
    }
  }
}));

const CourseRoadMap = () => {
  const { classes } = useStyles();
  const [login] = useLocalStorage<IUserProfile | null>({ key: "login", defaultValue: null });
  const [coursesInCart, setCoursesInCart] = useLocalStorage<ICourse[] | []>({ key: "coursesInCart", defaultValue: [] });
  const [course, setCourse] = useState<ICourse>();
  const navigate = useNavigate();
  const [progress, setProgress] = useState<number[]>([]);
  const [date, setDate] = useState<string[]>([]);
  const [registered, setRegistered] = useState(false);

  const toPayment = useCallback(
    () => {
      navigate(
        "/payment",
        { state:course }
      );
      const notIncludedCourses = coursesInCart.filter(
        (courseInCart) => courseInCart.id !== (course as ICourse).id
      ) && [course as ICourse]
      setCoursesInCart(notIncludedCourses);
      return;
    }, [navigate, course, coursesInCart, setCoursesInCart]
)

  const onRegister = useCallback(
    () => {
      registered ? navigate("/myclass") : toPayment();
    }, [registered, navigate, toPayment]
  )

  useEffect(
    () => {
      new CourseRepository()
      .getCourseById(login?.token as string, "63346df60875520b1d117aad")
      .then(
        (courseVideos) => {
          setCourse(courseVideos.course);
        }
      )
    }, [login, setCourse]
  )

  useEffect(
    () => {
      new AuthRepository()
      .me(login?.token as string)
      .then(
        ({data}) => {
          data.myCourses.forEach(
            (each) => {
              if (each.courseId === (course as ICourse).id) {
                setRegistered(true);
                return;
              }
            }
          )
        }
      )
    }, [login, course, coursesInCart, setRegistered]
  )

  useEffect(
    () => {
      setProgress([
        23, 24, 30, 35,
        36, 37, 39, 40,
        42, 48, 50, 55,
        75, 80, 85, 95
      ]);
      setDate([
        "W1", "W2", "W3", "W4",
        "W5", "W6", "W7", "W8",
        "W9", "W10", "W11", "W12",
        "W13", "W14", "W15", "W16",
      ]);
    }, [setProgress, setDate]
  )

  return (
    <div>        
      <div>
        <section>
        <div>
          <div className={classes.descriptionHeader}>
            <div className={classes.descriptionContainer}>
              <div className={classes.courseInfoBox}>
                <div className={classes.courseHeader}>
                  <Title order={6} align="left">{course?.category}</Title>
                  <Title className={classes.courseTitle} order={1} align="left">
                    {course?.title}
                  </Title>
                  <div className={classes.courseInfo}>
                    <span className={classes.courseStar}>
                      <Star howmany={5} size={15}></Star>
                    </span>
                    <span><strong>by {course?.instructor.name} {course?.instructor.description}</strong></span>
                  </div>
                  <Button className={classes.registerButton} onClick={onRegister}>
                    {registered ? "강의실로 바로가기" : "수강신청 하기"}
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
                    width={"152%"}
                    title={"수강생 Avg Learning Curve"}
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
        <Grid className={classes.coursesArea}>
          <div className={classes.gridBox}>
            <CourseReviewGrid cols={3}/>
          </div>
          <Box className={classes.gridBox}>
            <SimpleCourseGrid cols={3}/>
          </Box>
        </Grid>
      </div>
    </div>
  );
}

export default CourseRoadMap;
