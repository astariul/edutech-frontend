import React, { useState } from 'react';
import { createStyles, Center } from '@mantine/core';

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
}));

interface CourseContentProps {
  image: string;
  category: string;
  title: string;
  footer: string;
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
  author,
}: CourseContentProps) {
  const { classes, theme } = useStyles();

  return (
    <Center>
      <iframe
        className={classes.ifr}
        src="https://www.youtube.com/embed/E7wJTI-1dvQ"
        allow="autoplay; encrypted-media"
        title="video"
      />
    </Center>
  );
}