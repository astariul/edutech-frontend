import { useLocalStorage } from "@mantine/hooks";
import { IUserProfile } from "../../typings/db";
import {useStyles, useStylesPeriodYearMonth, useStylesResumeBody} from './style';
import useInput from '../../hooks/useInput';
import { Checkbox, Divider } from '@mantine/core';
import { Button } from '@mantine/core';
import { useCallback, useState } from 'react';
import { CloseButton, Title } from '@mantine/core';
import { ReactNode } from 'react';


interface PeriodYearMonthProps {
  showEndPeriod: boolean
}

interface ResumeBody3InputProps {
  header: string;
  input1Placeholder: string;
  input2Placeholder: string;
  input3Placeholder: string;
}


const PeriodYearMonth = ({showEndPeriod}: PeriodYearMonthProps) => {
  const {classes, cx} = useStylesPeriodYearMonth();
  const [fromYear, onChangeFromYear,] = useInput("");
  const [toYear, onChangeToYear,] = useInput("");
  const [fromMonth, onChangeFromMonth,] = useInput("");
  const [toMonth, onChangeToMonth,] = useInput("");
  return (
    <div className={classes.layout}>
      <div className={classes.from}>
        <input
          className={cx(classes.input, classes.year)}
          type="text"
          placeholder="YYYY"
          name="year"
          maxLength={4}
          value={fromYear}
          onChange={onChangeFromYear}
          />
        <span>
          .
          <input
            className={cx(classes.input, classes.month)}
            type="text"
            placeholder="MM"
            name="month"
            maxLength={2}
            value={fromMonth}
            onChange={onChangeFromMonth}
          />
        </span>
      </div>
      {
        showEndPeriod ? (
          <div className={classes.to}>
            <span>-</span>
              <input
                className={cx(classes.input, classes.year)}
                type="text"
                placeholder="YYYY"
                name="year"
                maxLength={4}
                value={toYear}
                onChange={onChangeToYear}
              />
            <span>
              .
              <input
                className={cx(classes.input, classes.month)}
                type="text"
                placeholder="MM"
                name="month"
                maxLength={2}
                value={toMonth}
                onChange={onChangeToMonth}
              />
            </span>
          </div>
        ) : (
          <></>
        )
      }
    </div>

  )
}

const ResumeBody3Input = ({header, input1Placeholder, input2Placeholder, input3Placeholder}: ResumeBody3InputProps) => {
  const {classes, cx} = useStylesResumeBody();
  const [numAdded, setNumAdded] = useState<number[]>([]);
  const [showEndedPeriod, setShowEndedPeriod] = useState(false);
  const [input1Value, onChangeInput1Value,] = useInput("");
  const [input2Value, onChangeInput2Value,] = useInput("");
  const [input3Value, onChangeInput3Value,] = useInput("");

  const addItem = useCallback(
    () => {
      const added = numAdded.length === 0 ? 1 : (numAdded.at(-1) as number) + 1;
      setNumAdded([...numAdded, added]);
    }, [numAdded]
  )
  const removeItem = useCallback(
    (num: number) => {
      const filtered = numAdded.filter(
        (addedNum) => addedNum != num
      )
      setNumAdded(filtered);
      setShowEndedPeriod(false);
    }, [numAdded]
  )

  return (
    <div style={{marginTop: "50px"}}>
      <Divider size="lg" label={<Title order={3}>{header}</Title>} labelPosition="center"/>
      <Button className={classes.bodyAddButton} variant="subtle" onClick={addItem}>+추가하기</Button>
      <ul className={classes["ol ul"]}>
        {
          numAdded.map(
            (num) => {
              return (
                <li key={num}>
                  <div className={classes.listItem}>
                    <div className={classes.period}>
                      <PeriodYearMonth showEndPeriod={!showEndedPeriod}/>
                      <Checkbox
                        className={classes.checkbox}
                        label="재직중"
                        size="xs"
                        onClick={() => setShowEndedPeriod(!showEndedPeriod)}
                      />
                    </div>
                    <div className={classes.content}>
                      <div>
                        <input
                          className={cx(classes.input, classes.input1)}
                          type="text"
                          placeholder={input1Placeholder}
                          name="email"
                          maxLength={255}
                          value={input1Value}
                          onChange={onChangeInput1Value}
                        />
                      </div>
                      <div>
                        <input
                          className={cx(classes.input, classes.input2)}
                          type="text"
                          placeholder={input2Placeholder}
                          name="email"
                          maxLength={255}
                          value={input2Value}
                          onChange={onChangeInput2Value}
                        />
                      </div>
                      <div className={classes.textarea}>
                        <textarea
                          className={cx(classes.input, classes.input3)}
                          placeholder={input3Placeholder}
                          maxLength={1000}
                          onChange={onChangeInput3Value}
                        >
                        {input3Value}
                        </textarea>
                      </div>
                    </div>
                    <CloseButton onClick={() => removeItem(num)}/>
                  </div>
                </li>
              )
            }
          )
        }
      </ul>
    </div>
  )
}


const Resume = () => {

  const [login] = useLocalStorage<IUserProfile | null>({ key: "login", defaultValue: null });
  const {classes, cx} = useStyles();
  const [title, onChangeTitle,] = useInput("");
  const [name, onChangeName,] = useInput(login?.name as string);
  const [email, onChangeEmail,] = useInput(login?.email as string);
  const [tel, onChangeTel,] = useInput("+82 010 0000 0000");
  return (
    <div className={classes.background}>
      <div className={classes.basicInfo}>
        <div>
          <input
            className={cx(classes.input, classes.title)}
            type="text"
            placeholder="이력서 제목"
            name="name"
            value={title}
            onChange={onChangeTitle}
          />
          <Divider size="lg" label={<Title order={3}>기본정보</Title>} labelPosition="center"/>
        </div>
        <div>
          <input
            className={cx(classes.input, classes.name)}
            type="text"
            placeholder="이름"
            name="name"
            value={name}
            onChange={onChangeName}
          />
        </div>
        <div>
          <input
            className={cx(classes.input, classes.email)}
            type="email"
            placeholder="이메일"
            name="email"
            value={email}
            onChange={onChangeEmail}
          />
        </div>
        <div>
          <input
            className={cx(classes.input, classes.tel)}
            type="tel"
            placeholder="연락처"
            name="phone"
            value={tel}
            onChange={onChangeTel}
          />
        </div>
      </div>
      <ResumeBody3Input
        header="경력 및 프로젝트"
        input1Placeholder="회사명"
        input2Placeholder="직무"
        input3Placeholder="주요성과"
      />
      <ResumeBody3Input
        header="교육"
        input1Placeholder="교육 내용"
        input2Placeholder="교육 기관"
        input3Placeholder=""
      />
    </div>

  );
}

export default Resume;
