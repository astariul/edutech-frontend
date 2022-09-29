import React, { useCallback } from "react";
import { Checkbox, CloseButton, Divider, Title } from "@mantine/core";
import useStyles from "./style";
import { ICourse } from "../../typings/db";
import { useLocalStorage } from "@mantine/hooks";

interface PaymentCartProps {
  courses: ICourse[];
}

interface CourseCardProps {
  course: ICourse;
}

const CourseCard = ({course}: CourseCardProps) => {
  const {classes} = useStyles();
  const [coursesInCart, setCoursesInCart] = useLocalStorage<ICourse[] | []>(
    { key: "coursesInCart", defaultValue: [] }
  );
  const removeItem = useCallback(
    (id: string) => {
      setCoursesInCart(
        coursesInCart.filter(
          (courseInCart) => courseInCart.id !== course.id
        )
      )
    }, [course.id, coursesInCart, setCoursesInCart]
  )

  return (
    <article className={classes.courseCard}>
      <Checkbox className={classes.checker} />
      <div className={classes.courseCardImage}>
        <figure className={classes.courseThumbnail}>
          <img className={classes.image} src={("courseImageSample.png" || course.thumbnail)} alt="코스이미지" />
        </figure>
      </div>
      <div className={classes.courseCardInfo}>
        <h3 className={classes.courseCardTitle}>{course.title}</h3>
      </div>
      <div className={classes.courseCardPrice}>
        <span>{course.dcPrice}원</span>
      </div>
      <CloseButton className={classes.close} onClick={() => {removeItem(course.id)}}/>
    </article>
  )
}

const PaymentCart = ({courses}: PaymentCartProps) => {
  const {classes} = useStyles();

  return (
    <>
      <Title className={classes.title}>강의바구니</Title>
      <Divider />
      <section className={classes.body}>
        <section>
          <div></div>
          <div className={classes.list}>
          {
            courses.map(
              (course) => {
                return <CourseCard key={course.id} course={course} />
              }
            )
          }
          </div>
        </section>
      </section>
    </>
  )
}

export default PaymentCart;
