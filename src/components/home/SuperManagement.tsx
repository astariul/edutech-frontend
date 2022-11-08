import useSuperManagementStyles from "./superManagementStyle";

interface CardProps {
  index: number;
  title: string;
  contents: string[];
}

const Card = ({ index, title, contents }: CardProps) => {
  const { classes, cx } = useSuperManagementStyles();

  return (
    <div key={index} className={cx(classes.rowFlex, classes.card)}>
      <span>{index}</span>
      <div id="card_title">
        <h2>{title}</h2>
      </div>
      <ul id="card_content" className={cx(classes.columnFlex)}>
        {contents.map((content, idx) => (
          <li key={idx}>{content}</li>
        ))}
      </ul>
    </div>
  );
};

const SuperManagement = () => {
  const { classes, cx } = useSuperManagementStyles();
  const cardContents = [
    {
      index: 1,
      title: "학습진도관리",
      contents: [
        "매주 월요일 주간리포트 - 수강상황, 진도체크",
        "월 1회 그룹 안내",
      ],
    },
    {
      index: 2,
      title: "질의 응답",
      contents: ["함께 답변하며 실력다지기"],
    },
    {
      index: 3,
      title: "페어프로그래밍 과제",
      contents: ["협업능력향상", "기술면접대비"],
    },
    {
      index: 4,
      title: "해커톤",
      contents: [
        "멘토링을 통한 실력향상",
        "심사위원들의 평가 및 수상작 발표회",
      ],
    },
    {
      index: 5,
      title: "핵심자료 제공",
      contents: ["코딩테스트,면접,구현 자료 제공"],
    },
    {
      index: 6,
      title: "코딩테스트 모의고사",
      contents: ["기출 변형 모의고사", "합격/불합격 여부"],
    },
    {
      index: 7,
      title: "모의 면접",
      contents: ["녹화/라이브 방식의 모의 면접을 통한 실전 대비"],
    },
    {
      index: 8,
      title: "회사 추천 및 취업 준비",
      contents: [
        "수강생에게 적합한 회사를 추천 & 컨설팅",
        "타겟 회사 맞춤형 지원 가이드",
      ],
    },
  ];

  return (
    <>
      <section className={classes.main}>
        <div className={classes.contents}>
          <div
            className={cx(
              classes.rowFlex,
              classes.contentsInner,
              classes.desktop
            )}
          >
            <div className={cx(classes.columnFlex, classes.leftSection)}>
              <div className={classes.messageTop}>
                <div className={classes.category}>SUPER MANAGEMENT</div>
                <div className={classes.title}>
                  취업이 될 때까지 제대로
                  <br />
                  관리하는 것은 기본입니다.
                </div>
              </div>
              <div className={cx(classes.columnFlex, classes.messageBottom)}>
                <img
                  src={require("../../static/image/home/superManagement2Top.png")}
                  alt="2top"
                />
                <h2>
                  <span>2 Top 담임제</span>
                </h2>
                <h2>
                  학습 매니저와 취업매니저를 각각 배정하여 <br />
                  성공적인 학습과 취업을 함께 책임집니다.
                </h2>
              </div>
            </div>
            <div className={cx(classes.rightSection, classes.desktop)}>
              <div className={cx(classes.columnFlex, classes.cardArea)}>
                {cardContents.map((each, idx) => (
                  <Card
                    index={each.index}
                    title={each.title}
                    contents={each.contents}
                  />
                ))}
              </div>
            </div>
          </div>
          <div
            className={cx(
              classes.columnFlex,
              classes.contentsInner,
              classes.mobile
            )}
          >
            <div className={cx(classes.columnFlex, classes.leftSection)}>
              <div className={classes.messageTop}>
                <div className={classes.category}>SUPER MANAGEMENT</div>
                <div className={classes.title}>
                  취업이 될 때까지 제대로
                  <br />
                  관리하는 것은 기본입니다.
                </div>
              </div>
              <div
                className={cx(
                  classes.columnFlex,
                  classes.cardArea,
                  classes.mobile
                )}
              >
                {cardContents.map((each, idx) => (
                  <Card
                    index={each.index}
                    title={each.title}
                    contents={each.contents}
                  />
                ))}
              </div>
              <div className={cx(classes.columnFlex, classes.messageBottom)}>
                <img
                  src={require("../../static/image/home/superManagement2Top.png")}
                  alt="2top"
                />
                <h2>
                  <span>2 Top 담임제</span>
                </h2>
                <h2>
                  학습 매니저와 취업매니저를 각각 배정하여 <br />
                  성공적인 학습과 취업을 함께 책임집니다.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SuperManagement;
