import React from 'react';
import { createStyles, Container, Group, Title } from '@mantine/core';
import PaymentSection from './PaymentSection';

const useStyles = createStyles((theme) => ({
  ifr_container: {
    width: "100%",
    paddingTop: "56.25%",
    position: "relative",
  },

  ifr: {
    width: "80%",
    aspectRatio: "16/9",
  },

  fixed_size: {
    height: theme.spacing.xl * 2,
    display: "flex",
    alignItems: "center",
    padding: theme.spacing.xl
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

interface CourseContentProps {
  id: string;
  image: string;
  category: string;
  title: string;
  footer: string;
  description: string;
  price: number;
  author: {
    name: string;
    description: string;
    image: string;
  };
}

export default function CourseContent({
  id,
  image,
  category,
  title,
  footer,
  description,
  price,
  author,
}: CourseContentProps) {
  const { classes } = useStyles();

  return (
    <>
      <Container className={classes.fixed_size} mb="xl">
        <Title order={1}>
          강의제목
        </Title>
      </Container>
      <Container>
      <Group>
        <Container>
          <Title order={2}>
            강의 무료 맛보기 및 강의소개
          </Title>
        </Container>
          <PaymentSection courseName={title} courseID={id} price={price}/>
      </Group>
      </Container>
    </>
  );
}