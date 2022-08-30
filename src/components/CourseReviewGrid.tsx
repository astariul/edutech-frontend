import React, {useState, useEffect} from "react";
import ReviewRepositry from "../repositories/Review";
import { IReview } from "../dto/Review";
import { createStyles, Loader, SimpleGrid } from '@mantine/core';
import CourseReviewCard from './CourseReviewCard';


const useStyles = createStyles((theme) => ({
  reviewGrid: {
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
    bottom: 10,
  }
}));

const CourseReviewGrid = ({cols}: any) => {
    const [reviews, setReviews] = useState<IReview[]>([])
    const [loading, setLoading] = useState(true);
    const {classes}  = useStyles();

    useEffect(
        () => {
            new ReviewRepositry()
                .getReviews()
                .then(
                    (data) => setReviews(data)
                )
            return () => {
                setReviews([]);
                setLoading(false);
            }
        }, []
    )

    if (loading) return <Loader />;
    return (
        <>
            <SimpleGrid cols={cols} className={classes.reviewGrid}>
                {
                    reviews.map(
                        (review, index) => <CourseReviewCard key={index} {...review}/>
                    )
                }
            </SimpleGrid>
        </>
    )
}

export default CourseReviewGrid;
