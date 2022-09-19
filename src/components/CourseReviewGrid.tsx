import React, {/*useState, useEffect*/} from "react";
// import ReviewRepositry from "../repositories/Review";
// import { IReview } from "../typings/db";
import { createStyles, /*Loader,*/ SimpleGrid } from '@mantine/core';
import CourseReviewCard from './CourseReviewCard';

export const sampleReviews = [
    {
        "title": "작심삼일 탈출하신 김0경님",
        "content": "이 강의를 한단어로 설명한다면? \"튜터님의 미친강의력\". 정말 앉아서 듣기만 해도, '와 코딩 진짜 쉽네'라고 생각할 정도로 미친 강의력을 자랑하시는 튜터님. 튜터님이 이부분에 집중하라고 말하실 때마다, 막막한 제 마음을 읽으시는건지... ㅎㅎ 해이해졌던 집중력을 빠짝 다시 잡을 수 있어서 즐거웠습니다.",
        "star": 5,
        "createdAt": "2022-08-21",
    },
    {
        "title": "1등으로 완주하셨던  박0현님",
        "content": "이 강의를 한단어로 설명한다면? \"튜터님의 미친강의력\". 정말 앉아서 듣기만 해도, '와 코딩 진짜 쉽네'라고 생각할 정도로 미친 강의력을 자랑하시는 튜터님. 튜터님이 이부분에 집중하라고 말하실 때마다, 막막한 제 마음을 읽으시는건지... ㅎㅎ 해이해졌던 집중력을 빠짝 다시 잡을 수 있어서 즐거웠습니다.",
        "star": 5,
        "createdAt": "2022-08-23",
    },
    {
        "title": "코딩의 세계를 접하신 오0명님",
        "content": "이 강의를 한단어로 설명한다면? \"튜터님의 미친강의력\". 정말 앉아서 듣기만 해도, '와 코딩 진짜 쉽네'라고 생각할 정도로 미친 강의력을 자랑하시는 튜터님. 튜터님이 이부분에 집중하라고 말하실 때마다, 막막한 제 마음을 읽으시는건지... ㅎㅎ 해이해졌던 집중력을 빠짝 다시 잡을 수 있어서 즐거웠습니다.",
        "star": 5,
        "createdAt": "2022-08-25",
    }
]

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
    // const [reviews, setReviews] = useState<IReview[]>([])
    // const [loading, setLoading] = useState(true);
    const {classes}  = useStyles();

    // useEffect(
    //     () => {
    //         // new ReviewRepositry()
    //         //     .getReviews()
    //         //     .then(
    //         //         (data) => setReviews(data)
    //         //     )
    //         setReviews(sampleReviews);
    //         return () => {
    //             setReviews([]);
    //             setLoading(false);
    //         }
    //     }, []
    // )

    // if (loading) return <Loader />;
    return (
        <>
            <SimpleGrid cols={cols} className={classes.reviewGrid}>
                {
                    sampleReviews.map(
                        (review, index) => <CourseReviewCard key={index} {...review}/>
                    )
                }
            </SimpleGrid>
        </>
    )
}

export default CourseReviewGrid;
