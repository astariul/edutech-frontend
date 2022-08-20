import { createStyles, Container, Title, Center } from '@mantine/core';
import { useLocation } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  page_title: {
    fontWeight: 500,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
  },
  ifr: {
    width: "100%",
    aspectRatio: "16/9",
  },
}));

interface LearningCourseProps {
  id: string;
  title: string;
  footer: string;
  video: string;
  author: {
    name: string;
    description: string;
    image: string;
  };
}

const LearningCourse = () => {
  const { classes } = useStyles();
  const location = useLocation();
  const state = location.state as LearningCourseProps;

  return (
    <>
      <Container pt="xl" pb="xl" size="sm">
        <Center mb="xl">
          <iframe
            className={classes.ifr}
            src={state.video}
            allow="autoplay; encrypted-media"
            title="video"
          />
        </Center>
      </Container>
      <Container pt="xl" pb="xl">
        <Center pt="xl" pb="xl">
          <Title order={1} className={classes.page_title}>수강 현황(진척률 등) 영역</Title>
        </Center>
      </Container>
    </>
  );
}

export default LearningCourse;
