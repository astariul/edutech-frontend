import { useCallback } from "react";
import { Title, Group, Container, Space, Avatar, Text } from "@mantine/core";
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
  const {classes, cx} = useStyles();
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
      {/** Note: 체크박스가 수행하는 기능이 없으므로 일단 comment 하였음 */}
      {/* <Checkbox className={classes.checker} /> */}
      {/* <Space w={50}/> */}
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
          <div className = {cx(classes.courseTagBoxGreen, classes.courseTagItem)}>
              Live
          </div>
          <div className = {cx(classes.courseTagBoxGray, classes.courseTagItem)}>
              인강
          </div>
          <div className = {cx(classes.courseTagBoxBlue, classes.courseTagItem)}>
              환급
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
        <Avatar src={"./tutor_ky.png"} alt={course.instructor.name} radius="xl" />
        <div>
          <Text size="sm">{course.instructor.name}</Text>
          <Text size="xs" color="dimmed">
            {course.instructor.description}
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
