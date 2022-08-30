import React from "react";
import { createStyles, Grid, Divider, Paper, Text, Space, Center } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  simpleCourseCard: {
    position: "relative",
    padding: `${theme.spacing.xs}px ${theme.spacing.xs}px`,
  },

  title: {
    position: "relative",
  },

  star: {
    position: "absolute",
    top: 15,
    left: 255,
    right: 5,
    fontSize: 10
  },

  content: {
    position: "absolute",
    top: 70,
    left: 15,
    right: 15
  },

  line: {
    width: 150,
    float: "left",
    paddingTop: 20,
    paddingBottom: 20,
  }
}));

interface SimpleCourseCardProps {
  title: string
  category: string
}

const SimpleCourseCard = ({title, category}: SimpleCourseCardProps) => {
    const { classes } = useStyles();
    return (
        <Paper withBorder radius="md" className={classes.simpleCourseCard}>
            <Grid>
                <Grid.Col span={12} className={classes.title}>
                  <Center>
                    <Text align="left" weight={800}>{title}</Text>
                  </Center>
                </Grid.Col>
            </Grid>
            <Text size="sm" color="dimmed" className={classes.content}>
                <Space h="xl"/>
                <Divider size="sm" color="dark" className={classes.line}></Divider>
                <Space h="xl"/>
                <Divider size="sm" color="dark" className={classes.line}></Divider>
                <Space h="xl"/>
                <Divider size="sm" color="dark" className={classes.line}></Divider>
            </Text>
        </Paper>
    )
}

export default SimpleCourseCard;

