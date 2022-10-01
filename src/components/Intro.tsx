import React from 'react';
import { createStyles, Grid, Image, Text, Container, Space, Title } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  intro_line: {
    paddingBottom: theme.spacing.xl * 2,
    paddingTop: theme.spacing.xl * 2,
  },

  intro_line_text: {
    padding: theme.spacing.xl,
    fontWeight: 500,
  },

  intro_line_text_left: {
    padding: theme.spacing.xl,
    fontWeight: 500,
    textAlign: "right",
  },

  intro_title: {
    paddingBottom: theme.spacing.xl * 1.5,
  }
}));

export default function Intro() {
  const { classes } = useStyles();

  return (
    <Container my="md" mt={80}>
      <Title order={1} id="SuperCoding-intro" className={classes.intro_title}>Super Coding, a new learning platform</Title>
      <Grid align="center">
        <Grid.Col xs={4} className={classes.intro_line}>
          <Image
          radius="md"
          height={150}
          src="https://images.unsplash.com/photo-1654002729150-89a0ca7f4be0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
          alt="Intro image 1"
          />
        </Grid.Col>
        <Grid.Col xs={8} className={classes.intro_line_text}>
          <Text size="lg">Super Coding is on a mission to make software development job accessible to everyone.</Text>
          <Space h="md" />
          <Text size="lg">We provide online courses with high-quality content.</Text>
        </Grid.Col>
        <Grid.Col xs={8} className={classes.intro_line_text_left}>
          <Text size="lg">But Super Coding, it's also a community of learners.</Text>
          <Space h="md" />
          <Text size="lg">Participate in the community, learn together, earn prices, and get the job of your dreams.</Text>
        </Grid.Col>
        <Grid.Col xs={4} className={classes.intro_line}>
          <Image
          radius="md"
          height={150}
          src="https://images.unsplash.com/photo-1654013858926-77d45695ede2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="Intro image 2"
          />
        </Grid.Col>
      </Grid>
    </Container>
  );
}