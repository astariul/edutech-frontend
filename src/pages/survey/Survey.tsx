import { useCallback, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Textarea, Button, Radio, RadioGroup } from "@mantine/core";
import { useForm } from '@mantine/form';
import { useLocalStorage } from "@mantine/hooks";
import CourseRepository from '../../repositories/Course';
import { IUserProfile } from "../../typings/db";
import {
  TCourseEpisode,
} from "../../utils/common";
import useStyles from './style';

type SurveyValue = {
  questions: {title: string, answer: string, comment: string}[]
}

const Survey = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const episode = location.state as TCourseEpisode;
  const {courseId, episodeNumber} = useParams(); 
  const {classes} = useStyles();
  const [login] = useLocalStorage<IUserProfile | null>({ key: "login", defaultValue: null });

  useEffect(
    () => {
      if (!login) {
        window.alert("로그인 상태가 아닙니다. 로그인해주세요");
        navigate("/login/method");
        return
      }

  }, [login, navigate]);

  const form = useForm<SurveyValue>({
    initialValues: {
      questions : [
        {
          title: "Q1. 이번 강의는 어떠셨나요?",
          answer: "",
          comment: "",
        },
        {
          title: "Q2. 좋았던 점을 알려주시겠어요?",
          answer: "",
          comment: "",
        },
        {
          title: "Q3. 개선할 점을 알려주시겠어요?",
          answer: "",
          comment: "",
        }
      ],
    },
    }
  );

  const updateValue = useCallback(
    (key: string, value: string, questionNumber: number) => {
      const prevValue = form.values.questions;
      const updatedValue = prevValue.map(
        (each, index) => {
          let ret;
          if (index + 1 === questionNumber) {
            ret = {...each, [key]: value};
          } else {
            ret = {...each}
          }
          return ret
        }
      )
      form.setFieldValue("questions", updatedValue)
    }, [form]
  )

  const submitAnswer = useCallback(
    async (values: SurveyValue) => {
      await new CourseRepository()
      .saveReview(
        login?.token as string,
        courseId as string,
        parseInt(episodeNumber as string),
        JSON.stringify(values.questions)
      );

      await new CourseRepository()
      .completeEpisode(
        login?.token as string,
        courseId as string,
        parseInt(episodeNumber as string)
      );

      await new CourseRepository()
      .saveCurrentEpisode(
        login?.token as string,
        courseId as string,
        parseInt(episodeNumber as string)
      );

      window.alert("답변이 제출되었습니다.");
      navigate(
        `/class/${episode.courseTitle.split(" ").join("")}/${episode.seasonNumber}/${episode.number}`,
        {
          state: {
          ...episode,
          courseId: courseId,
          courseTitle: episode.courseTitle
          }
        }
      );
    }, [login, episode, courseId, episodeNumber, navigate]
  )

  return (
    <>
    {
    (login) && (
      <form onSubmit={form.onSubmit((values) => submitAnswer(values))}>
        <div className={classes.main}>
          <div className={classes.questionContainer}>
            <div className={classes.question}>
              <RadioGroup
                className={classes.radio}
                name="survey question 1"
                orientation="vertical"
                size="xl"
                label="Q1. 이번 강의는 어떠셨나요?"
                onChange={(value) => updateValue("answer", value, 1)}
                >
                <Radio value="3" label="쉽게 이해되었어요." />
                <Radio value="2" label="괜찮았어요. 조금 더 복습하면 될 것 같아요." />
                <Radio value="1" label="이해안가는 부분이 있었어요." />
              </RadioGroup>
              <Textarea
                className={classes.answer}
                label="(Optional) 추가 코맨트 입력"
                placeholder="답변"
                minRows={3}
                onChange={(event) => updateValue("comment", event.target.value, 1)}
                />
            </div>
            <div className={classes.question}>
              <Textarea
                className={classes.answer}
                label="Q2. 좋았던 점을 알려주시겠어요?"
                placeholder="답변"
                minRows={5}
                size={"xl"}
                onChange={(event) => updateValue("comment", event.target.value, 2)}
                />
            </div>
            <div className={classes.question}>
              <Textarea
                className={classes.answer}
                label="Q3. 개선할 점을 알려주시겠어요?"
                placeholder="답변"
                minRows={5}
                size={"xl"}
                onChange={(event) => updateValue("comment", event.target.value, 3)}
                />
            </div>
            <Button className={classes.button} type="submit">답변 제출하고 수강완료하기</Button>
          </div>
        </div>
      </form>
    )
    }
    </>
  );
}

export default Survey;
