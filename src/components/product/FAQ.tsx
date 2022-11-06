import { Transition } from "@mantine/core";
import { ReactNode, useState } from "react";
import { useFAQStyles, useTransitionTableStyle } from "./faqStyle";

interface SingleToggleRowProps {
  title: string;
  content: string | ReactNode;
}

interface TransitionTableProps {
  headers: string[];
  rows: { title: string; content: string | ReactNode }[];
}

const SingleToggleRow = ({ title, content }: SingleToggleRowProps) => {
  const { classes } = useTransitionTableStyle();
  const [opened, setOpened] = useState(false);

  return (
    <div className={classes.row}>
      <div className={classes.title}>
        <div>{title}</div>
        <img
          className={classes.arrow}
          src={
            opened
              ? require("../../static/image/product/boxArrowUp.png")
              : require("../../static/image/product/boxArrowDown.png")
          }
          alt="boxArrow"
          onClick={() => setOpened(!opened)}
        />
      </div>
      <Transition mounted={opened} transition="slide-down" duration={200}>
        {() => <div className={classes.transitioned}>{content}</div>}
      </Transition>
    </div>
  );
};

const TransitonTable = ({ headers, rows }: TransitionTableProps) => {
  const { classes } = useTransitionTableStyle();
  return (
    <div className={classes.main}>
      <div className={classes.headers}>
        {headers.map((each) => (
          <span>{each}</span>
        ))}
      </div>
      <div className={classes.rows}>
        {rows.map((row) => (
          <SingleToggleRow title={row.title} content={row.content} />
        ))}
      </div>
    </div>
  );
};

const FAQ = () => {
  const { classes } = useFAQStyles();
  return (
    <section className={classes.main}>
      <div className={classes.table}>
        <TransitonTable
          headers={["FAQ"]}
          rows={[
            {
              title: "1.프론트엔드 웹개발이 뭔가요?",
              content:
                "프론트엔드 웹개발이란 화면에서 보여지는 모든 것들을 직접 만드는 것을 얘기해요. 지금 보고 계시는 슈퍼코딩 웹개발 종합반 화면도 웹개발로 만들어진 화면이고, 우리가 자주 쓰는 네이버, 인스타그램, 페이스북도 다 웹개발로 만든답니다. ",
            },
            {
              title: "2.코딩이 처음인데 수강할 수 있나요?",
              content:
                "물론이죠. 슈퍼코딩 프론트엔드 웹개발 종합반은 처음 배우는 분들, 초등학생도 이해할 수 있게 만들었고 실제 비전공자 분들의 피드백을 받으며 만들었어요.",
            },
            {
              title: "3.수업은 온라인으로만 운영하나요?",
              content:
                "수업은 일부는 온라인으로 운영하고, 일부 수업은 개더타운, 구글 밋 등의 화상 채팅을 이용해서 실제 현장에서 만나는 것을 구현했어요. ",
            },
            {
              title: "4.학습을 위해 무엇을 준비해야 할까요?",
              content: (
                <>
                  코딩을 진행해보기 위해 데스트탑 PC 또는 노트북이 필요해요.
                  <br />
                  코딩에 꼭 높은 사양의 PC가 필요하지 않아요. 가지고 있는 PC를
                  체크해보세요.
                  <br />
                  {/* [체크방법 영상으로보기] */}
                  <br />
                  <br />
                  [권장사양]
                  <br />
                  윈도우
                  <br />
                  윈도우 버전 10 이상
                  <br />
                  RAM 8G 이상
                  <br />
                  CPI i5 이상, 64bit 이상
                  <br />
                  MAC 10.13(high sierra)이상
                </>
              ),
            },
            {
              title: "5.취업 준비 단계에서 어떤 도움을 받을 수 있나요?",
              content:
                "슈퍼코딩 웹개발 종합반 Plus 학습을 마친 후 전문 코치의 코칭으로 개발자로 취업할 수 있도록 지원해요. 학습을 마치면 이력서, 포트폴리오, 추천서가 이미 만들어질거에요. 만들어진 이력서를 어떤 업체에 지원하면 좋을 지 취업 전문 멘토가 조언해드려요. 또한 슈퍼코딩과 협력되어 있는 업체에 지원해드려요.    ",
            },
            {
              title: "6. 취업이 되지 않았을 때에는 환불 받을 수 있나요?",
              content:
                "네. 취업이 되지 않으셨다면 환불해 드릴게요. 자세한 환불 조건은 유의사항을 참고해주세요.",
            },
          ]}
        />
      </div>
    </section>
  );
};

export default FAQ;
