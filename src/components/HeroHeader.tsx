import React from 'react';
import { createStyles, Overlay, Container, Text } from '@mantine/core';
import hero_image from "../img/visual.jpg"

const useStyles = createStyles((theme) => ({
  hero: {
    position: 'relative',
    backgroundImage:
      `url(${hero_image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  container: {
    height: 500,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingBottom: theme.spacing.xl * 6,
    zIndex: 1,
    position: 'relative',

    [theme.fn.smallerThan('sm')]: {
      height: 500,
      paddingBottom: theme.spacing.xl * 3,
    },
  },

  title: {
    color: theme.white,
    fontSize: 60,
    fontWeight: 900,
    lineHeight: 1.1,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 40,
      lineHeight: 1.2,
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
      lineHeight: 1.3,
    },
  },

  description: {
    color: theme.white,
    maxWidth: 600,

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
      fontSize: theme.fontSizes.sm,
    },
  },

  control: {
    color: theme.white,
    marginTop: theme.spacing.xl * 1.5,

    [theme.fn.smallerThan('sm')]: {
      width: '100%',
    },
  },
}));

export default function HeroContentLeft() {
  const { classes } = useStyles();

  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={.5}
        zIndex={0}
      />
      <Container className={classes.container}>
        <Text component="a" href="#" className={classes.title}>Learn software development. Lend interviews. Get offers.</Text>
        <Text component="a" href="#" className={classes.description} size="xl" mt="xl">
          EduTech helps thousands of students learning real-life skills in software development.
          Access various classes, unlock new skills, discuss with a large community.
        </Text>
        <Text component="a" className={classes.control} href="#">
          Get started (Arrow)
        </Text>
      </Container>
    </div>
  );
}