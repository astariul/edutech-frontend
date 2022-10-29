import { Transition } from "@mantine/core";
import { ReactNode, useState } from "react";
import {useFAQStyles, useTransitionTableStyle} from "./faqStyle";

interface SingleToggleRowProps {
  title: string,
  content:  string | ReactNode,
}

interface TransitionTableProps {
  headers: string[],
  rows: {title: string, content: string | ReactNode}[],
}

const SingleToggleRow = ({title, content}: SingleToggleRowProps ) => {
  const {classes} = useTransitionTableStyle();
  const [opened, setOpened] = useState(false);

  return (
    <div className={classes.row}>
      <div className={classes.title}>
        <div>{title}</div>
        <img
          className={classes.arrow}
          src={opened ? require("../../static/image/product/boxArrowUp.png") : require("../../static/image/product/boxArrowDown.png")}
          alt="boxArrow"
          onClick={() => setOpened(!opened)}
        />
      </div>
      <Transition mounted={opened} transition="slide-down" duration={200}>
        {() => (
          <div className={classes.transitioned}>
            {content}
          </div>
        )}
      </Transition>
    </div>
  )

}

const TransitonTable = ({headers, rows}: TransitionTableProps) => {
  const {classes} = useTransitionTableStyle();
  return (
    <div className={classes.main}>
      <div className={classes.headers}>
        {
          headers.map((each) => <span>{each}</span>)
        }
      </div>
      <div className={classes.rows}>
        {
          rows.map(
            (row) => <SingleToggleRow title={row.title} content={row.content} />
          )
        }
      </div>
    </div>
  )
}


const FAQ = () => {
  const {classes} = useFAQStyles();
  return (
    <section className={classes.main}>
      <div className={classes.table}>
        <TransitonTable
          headers={["FAQ"]}
          rows={[
            {title:"1.웹개발이 뭔가요?", content: "웹개발이란 입니다."},
            {title:"2.코딩이 처음인데 수강할 수 있나요?", content: "네 수강가능합니다."},
            {title:"3.수업은 온라인으로만 운영하나요?", content: "온라인 전용 강의 입니다."},
            {
              title:"4.학습을 위해 무엇을 준비해야 할까요?",
              content: <>
                코딩을 진행해보기 위해 데스트탑 PC 또는 노트북이 필요해요.
                <br />코딩에 꼭 높은 사양의 PC가 필요하지 않아요. 가지고 있는 PC를 체크해보세요.
                <br />[체크방법 영상으로보기]
                <br />
                <br />[권장사양]
                <br />윈도우
                <br />윈도우 버전 10 이상
                <br />RAM 8G 이상
                <br />CPI i5 이상, 64bit 이상
                
                <br />MAC 10.13(high sierra)이상
              </>
            },
            {title:"5.취업 준비 단계에서 어떤 도움을 받을 수 있나요?", content: "취업을 위한 면접 등 ..."},
          ]}
        />
      </div>
    </section>
  )  
}

export default FAQ;
