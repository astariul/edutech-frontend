import React from "react";
import { IReview } from '../dto/Review';
import { createStyles, Grid, Box, Paper, Text, SimpleGrid } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  review: {
    position: "relative",
    padding: `${theme.spacing.xs}px ${theme.spacing.xs}px`,
  },

  titleAndStar: {
    position: "relative",
  },

  title: {
    position: "absolute",
    top: 20,
    left: 10
  },

  star: {
    position: "absolute",
    top: 15,
    left: 280,
    right: 20,
    fontSize: 10
  },

  content: {
    position: "absolute",
    top: 70,
    left: 15,
    right: 15
  }
}));

const Stars = ({howmany} :any) => {
    const { classes } = useStyles();
    return (
        <Box>
            <SimpleGrid cols={howmany} spacing={1} className={classes.star}>
                {
                    Array.from(Array(howmany).keys()).map(
                        (_, index) => <p key={index}>&#11088;</p>
                    )
                }
            </SimpleGrid>
        </Box>
    )
}

const CourseReviewCard = ({title, content, star}: IReview) => {
    const { classes } = useStyles();
    return (
        <Paper withBorder radius="md" className={classes.review}>
            <Grid>
                <Grid.Col span={12} className={classes.titleAndStar}>
                    <Text align="left" weight={800} className={classes.title}>{title}</Text>
                    <Stars howmany={star}/>
                </Grid.Col>
            </Grid>
            <Text size="sm" color="dimmed" className={classes.content}>
                {content}
            </Text>
        </Paper>
    )
}

export default CourseReviewCard;
