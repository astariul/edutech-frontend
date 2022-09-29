import { Textarea, Button } from "@mantine/core";
import { useForm } from '@mantine/form';
import useStyles from './style';

const Survey = () => {
  const {classes} = useStyles();
  const form = useForm({
      initialValues: {
        answer1: "",
        answer2: "",
        answer3: ""
      },
    });
  const submitAnswer = () => {
    console.log(
      form.values.answer1,
      form.values.answer2,
      form.values.answer3
    )
  }

  return (
    <form onSubmit={form.onSubmit(submitAnswer)}>
      <div className={classes.main}>
        <div className={classes.questionContainer}>
          <div className={classes.question}>
            <Textarea
              className={classes.answer}
              label="Q1. 이번 강의는 어떠셨나요?"
              placeholder="답변"
              minRows={5}
              size={"xl"}
              {...form.getInputProps("answer1")}
              />
          </div>
          <div className={classes.question}>
            <Textarea
              className={classes.answer}
              label="Q2. 좋았던 점을 알려주세요"
              placeholder="답변"
              minRows={5}
              size={"xl"}
              {...form.getInputProps("answer2")}
              />
          </div>
          <div className={classes.question}>
            <Textarea
              className={classes.answer}
              label="Q3. 개선할 점을 알려주세요"
              placeholder="답변"
              minRows={5}
              size={"xl"}
              {...form.getInputProps("answer3")}
              />
          </div>
          <Button className={classes.button} type="submit">답변 제출하기</Button>
        </div>
      </div>
    </form>
  );
}


export default Survey;
