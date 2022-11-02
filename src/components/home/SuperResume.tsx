import useSuperResumeStyles from "./superResumeStyle";

const SuperResume = () => {
  const {classes} = useSuperResumeStyles();

  return (
    <div className={classes.main}>
      <div className={classes.contents}>
        <div className={classes.category}>SUPER RESUME</div>
        <div className={classes.titleMobile}>
          업계 최고의 CTO 추천서를
          <br />
          부여 받는 곳은<span style={{color:"#0094FF"}}>'슈퍼코딩'</span>이
          <br />
          유일합니다.
        </div>
        <div className={classes.title}>
          업계 최고의 CTO 추천서를 부여 받는 곳은
          <br />
          <span style={{color:"#0094FF"}}>'슈퍼코딩'</span>이 유일합니다.
        </div>
        <div className={classes.cardArea}>
          <div className={classes.cardLeft}>
            <div className={classes.cardInner}>
              <h2>추천서</h2>
              <p>
                슈퍼코딩만이 제공하는
                <br />CTO추천서,
                <br />취업의 프리패스임을
                <br />확신합니다.
              </p>
            </div>
          </div>
          <div className={classes.cardMiddle}>
            <div className={classes.cardInner}>
              <h2>이력서</h2>
              <p>
                강의를 수강하면 회사에서
                <br />요구하는 실무 역량이
                <br />이력서에 반영되는
                <br />경험을 하게 됩니다.
              </p>
            </div>
          </div>
          <div className={classes.cardRight}>
            <div className={classes.cardInner}>
              <h2>포트폴리오 / 면접</h2>
              <div>
                <div className={classes.numAndText}>
                  <div>4</div>
                  <div>PORTFOLIO <br />PROJECT</div>
                </div>
                <div className={classes.numAndText}>
                  <div>20</div>
                  <div>MINI <br />PROJECT</div>
                </div>
              </div>
              <p>
                코딩테스트와 실무 프로젝트를 분석하여 단계별 난이도로
                <br />준비된 24개의 프로젝트 등을 수행하며 포트폴리오를 완성하며
                <br />면접시 막힘없이 설명할수 있도록 반복 훈련하게 됩니다.
              </p>
            </div>
          </div>
          <div className={classes.cardLeftMobile}>
            <div className={classes.cardInner}>
              <h2>추천서</h2>
              <p>
                슈퍼코딩만이 제공하는
                <br />CTO추천서,
                <br />취업의 프리패스임을
                <br />확신합니다.
              </p>
            </div>
          </div>
          <div className={classes.cardMiddleMobile}>
            <div className={classes.cardInner}>
              <h2>이력서</h2>
              <p>
                강의를 수강하면 회사에서
                <br />요구하는 실무 역량이
                <br />이력서에 반영되는
                <br />경험을 하게 됩니다.
              </p>
            </div>
          </div>
          <div className={classes.cardRightMobile}>
            <div className={classes.cardInner}>
              <h2>포트폴리오 / 면접</h2>
              <div>
                <div className={classes.numAndText}>
                  <div>4</div>
                  <div>PORTFOLIO <br />PROJECT</div>
                </div>
                <div className={classes.numAndText}>
                  <div>20</div>
                  <div>MINI <br />PROJECT</div>
                </div>
              </div>
              <p>
                코딩테스트와 실무 프로젝트를 분석하여
                <br />단계별 난이도로 준비된 24개의 프로젝트
                <br />등을 수행하며 포트폴리오를 완성하며
                <br />면접시 막힘없이 설명할수 있도록 
                <br />반복 훈련하게 됩니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SuperResume;
