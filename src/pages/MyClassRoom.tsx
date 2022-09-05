import React, { useState } from "react";
import { Button, Center, Container, createStyles } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import CourseStatusBox from "../components/CourseStatusBox";
import { IUserProfile } from '../dto/UserProfile';
import AuthenticationForm from "../components/AuthentificationForm";
import { ICourseStat } from '../dto/Course';
import { Link } from "react-router-dom";

const myCourseStats: ICourseStat[] = [
    {
        "title": "Front-end All-in-One",
        "progess": {
            "my": [1, 2, 2.3, 3, 3.3, 3.8, 5, 6, 7, 8],
            "average": [1, 1.8, 2.2, 3, 3.3, 3.8, 4, 4.2, 4.4, 6],
            "superCoder": [1, 2, 2.5, 4, 4.3, 5, 5.4, 6, 7.5, 10],
            "weekOnWeek": 5.5
        },
        "nextCourse": "EP-02",
        "currentCourse": "EP-01",
    }
]

const useStyles = createStyles((theme) => ({
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
  },
  button: {
    color: "#141517",
    fontSize: "18px",
    backgroundColor: "#D3D3D3",
    '&:hover': {
      color: "#DEE2E6",
      backgroundColor: "#868E96",
    },
    width: "250px",
    height: "80px"
  },
}));

const MyClassRoom = () => {

    const [login] = useLocalStorage<IUserProfile | null>({ key: 'login', defaultValue: null });
    const [formType, setFormType] = useState<'register' | 'login'>('login');
    const {classes} = useStyles();
    
    const courseStat = myCourseStats.map(
        (myCourseStat, index) => {
        return <CourseStatusBox key={index}/>
    })
    return (
        <>
        {
            (login) && (
                <>
                    {courseStat}
                    <Container className={classes.buttonContainer}>
                        <Button
                            className={classes.button}
                            component={Link}
                            to={"/roadmap"}
                        >
                            코스 탐색하기 가기
                        </Button>
                    </Container>
                </>
            )
        }
        {
            (!login) && (
                <Center sx={{paddingTop: 100}}>
                    <AuthenticationForm formType={formType} setFormType={setFormType} modalSetOpened={() => void(0)} />
                </Center>
            )
        }
        </>
    )
}

export default MyClassRoom;
