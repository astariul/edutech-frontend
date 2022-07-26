import React, { useState } from 'react';
import { createStyles, Center, Text, Container } from '@mantine/core';

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
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

interface CourseContentProps {
  image: string;
  category: string;
  title: string;
  footer: string;
  video: string;
  author: {
    name: string;
    description: string;
    image: string;
  };
}

export default function CourseContent({
  image,
  category,
  title,
  footer,
  video,
  author,
}: CourseContentProps) {
  const { classes, theme } = useStyles();

  return (
    <>
      <Container className={classes.fixed_size} mb="xl">
        <Text weight={700} className={classes.title} mt="xs" lineClamp={2} size="xl">
          {title}
        </Text>
      </Container>
      <Center mb="xl">
        <iframe
          className={classes.ifr}
          src={video}
          allow="autoplay; encrypted-media"
          title="video"
        />
      </Center>
    </>
  );
}