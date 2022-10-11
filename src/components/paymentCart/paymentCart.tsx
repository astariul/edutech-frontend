import React, { useCallback } from "react";
import { Checkbox, CloseButton, Title, Group, Container, Space, Avatar, Text } from "@mantine/core";
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
    <section className={classes.courseCard}>
      <Checkbox className={classes.checker} />
      <Space w={50}/>
        {/** To-do: 이미지 크기 고정시켜놔야함 */}
        <div className={classes.courseCardImage}>
          <figure className={classes.courseThumbnail}>
            <img className={classes.image} src={("courseImageSample.png" || course.thumbnail)} alt="코스이미지" />
          </figure>
        </div>
      {/** List */}
      <Space w={30}/>
      <div>
      <Container className={classes.courseContainer}>
      <Group spacing = "xs">
      <div className = {classes.courseTagBoxGreen}>
          <div className = {classes.courseTagItem}>
            Live 
          </div>
        </div>
        <div className = {classes.courseTagBoxGray}>
          <div className = {classes.courseTagItem}>
            인강 
          </div>
        </div>
        <div className = {classes.courseTagBoxBlue}>
          <div className = {classes.courseTagItem}>
            환급 
          </div>
        </div>
        </Group>
      </Container>
      
      <div className={classes.courseCardInfo}>
        <h3 className={classes.courseCardTitle}>{course.title}</h3>
      </div>
      {/* <div className={classes.courseCardPrice}>
        <span>{course.dcPrice}원</span>
      </div> */}
      {/* <CloseButton className={classes.close} onClick={() => {removeItem(course.id)}}/> */}
      <Group>
        <Avatar src={"./tutor_ky.png"} alt={"이경엽"} radius="xl" />
        <div>
          <Text size="sm">{"이경엽"}</Text>
          <Text size="xs" color="dimmed">
            {"Spacewalk CTO"}
          </Text>
        </div>
      </Group>
      </div>
    </section>
  )
}

const PaymentCart = ({courses}: PaymentCartProps) => {
  const {classes} = useStyles();

  return (
    <>
      <Title className={classes.title}>결제하기</Title>
      
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
