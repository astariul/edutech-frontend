import useSuperResumeStyles from "./superResumeStyle";

const SuperResume = () => {
  const { classes, cx } = useSuperResumeStyles();

  return (
    <div className={classes.main}>
      <div className={classes.contents}>
        <div className={classes.category}>SUPER RESUME</div>
        <div className={classes.titleMobile}>
          차별화된 합격자 이력서 & 포트폴리오,
          <br />곧 여러분의 것이 됩니다.
        </div>
        <div className={classes.title}>
          차별화된 합격자 이력서 & 포트폴리오,
          <br />곧 여러분의 것이 됩니다.
        </div>
        <div className={classes.cardArea}>
          <div className={classes.cardLeft}>
            <img
              src={require("../../static/image/home/superResumeLeft.png")}
              alt=""
            />
          </div>
          <img
            className={classes.caret}
            src={require("../../static/image/home/CaretRightLarge.png")}
            alt="caret"
          />
          <div className={classes.cardMiddle}>
            <img
              src={require("../../static/image/home/superResumeMiddle.png")}
              alt=""
            />
          </div>
          <img
            className={classes.caret}
            src={require("../../static/image/home/CaretRightLarge.png")}
            alt="caret"
          />
          <div className={classes.cardRight}>
            <img
              src={require("../../static/image/home/superResumeRight.png")}
              alt="caret"
            />
          </div>
        </div>
        <div className={cx(classes.bottomTitle, classes.desktop)}>
          <p>
            코딩테스트와 기술면접, 실무 프로젝트를 분석하여
            <br />
            단계별 난이도로 준비된 15개이상의 프로젝트 등을 수행하며
            <br />
            <span>포트폴리오를 완성하며 면접시 막힘없이 설명</span>할수 있도록
            반복 훈련하게됩니다.
          </p>
        </div>
        <div className={cx(classes.bottomTitle, classes.mobile)}>
          <p>
            코딩테스트와 기술면접,
            <br />
            실무 프로젝트를 분석하여
            <br />
            단계별 난이도로 준비된
            <br />
            15개 이상의 프로젝트 등을 수행하며
            <br />
            <span>포트폴리오를 완성하며 면접시 막힘없이 설명</span>
            <br />
            할수 있도록 반복 훈련하게됩니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuperResume;
