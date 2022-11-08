import useBodyResumeStyles from "./bodyFeatureStyle";

const BodyFeatures = () => {
  const { classes, cx } = useBodyResumeStyles();
  return (
    <>
      <section className={classes.main}>
        <div className={classes.contents}>
          <div className={classes.super}>
            <div>SUPER</div>
            <div>
              <h2>
                <span>추천서</span>
              </h2>
              <img
                src={require("../../static/image/product/slash.png")}
                alt="slash"
              />
              <h2>
                슈퍼코딩만이 제공하는 CTO추천서, 취업의 프리패스임을 확신합니다.
              </h2>
            </div>
          </div>
          <div className={classes.image}>
            <img
              src={require("../../static/image/product/recommendation.png")}
              alt="recommendation"
            />
          </div>
          <div className={classes.super}>
            <div>SUPER</div>
            <div>
              <h2>
                <span>이력서</span>
              </h2>
              <img
                src={require("../../static/image/product/slash.png")}
                alt="slash"
              />
              <h2>
                강의를 수강하면 회사에서 요구하는 실무 역량이 이력서에 반영되는
                경험을 하게 됩니다.
              </h2>
            </div>
          </div>
          <div className={classes.image}>
            <img
              src={require("../../static/image/product/resume.png")}
              alt="recommendation"
            />
          </div>
          <div className={classes.super}>
            <div>SUPER</div>
            <div>
              <h2>
                <span>포트폴리오</span>
              </h2>
              <img
                src={require("../../static/image/product/slash.png")}
                alt="slash"
              />
              <h2>
                코딩테스트와 실무프로젝트를 분석하여 단계별 난이도로 준비된
                24개의 프로젝트 등을
                <br />
                수행하며 포트폴리오를 완성합니다.
              </h2>
            </div>
          </div>
          <div className={classes.image}>
            <img
              src={require("../../static/image/product/portfolio.png")}
              alt="recommendation"
            />
          </div>
          <div className={classes.super}>
            <div>SUPER</div>
            <div>
              <h2>
                <span>면접</span>
              </h2>
              <img
                src={require("../../static/image/product/slash.png")}
                alt="slash"
              />
              <h2>면접시 막힘없이 설명할수 있도록 반복 훈련하게 됩니다.</h2>
            </div>
          </div>
          <div className={classes.image}>
            <img
              src={require("../../static/image/product/interview.png")}
              alt="recommendation"
            />
          </div>
        </div>
        <div className={classes.contentsMobile}>
          <div className={classes.superMobile}>
            <div className={cx("superTagMobile", "whiteBackground")}>SUPER</div>
            <div className="messageMobile whiteBackground">
              <div>
                <h2>
                  <span>추천서</span>
                </h2>
                <img
                  src={require("../../static/image/product/slashMobile.png")}
                  alt="slash"
                />
                <h2>슈퍼코딩만이 제공하는</h2>
              </div>
              <h2>
                CTO추천서
                <br />
                취업의 프리패스임을 확신합니다.
              </h2>
            </div>
          </div>
          <div className={cx(classes.image, "withoutSideBlank")}>
            <img
              src={require("../../static/image/product/recommendationMobile.png")}
              alt="recommendation"
            />
          </div>
          <div className={classes.superMobile}>
            <div className="superTagMobile">SUPER</div>
            <div className="messageMobile">
              <div>
                <h2>
                  <span>이력서</span>
                </h2>
                <img
                  src={require("../../static/image/product/slashMobile.png")}
                  alt="slash"
                />
                <h2>강의를 수강하면 회사에서</h2>
              </div>
              <h2>
                요구하는 실무 역량이
                <br />
                이력서에 반영되는 경험을 하게 됩니다.
              </h2>
            </div>
          </div>
          <div className={classes.image}>
            <img
              src={require("../../static/image/product/resumeMobile.png")}
              alt="recommendation"
            />
          </div>
          <div className={classes.superMobile}>
            <div className="superTagMobile">SUPER</div>
            <div className="messageMobile">
              <div>
                <h2>
                  <span>포트폴리오</span>
                </h2>
                <img
                  src={require("../../static/image/product/slashMobile.png")}
                  alt="slash"
                />
                <h2>코딩테스트와 실무 프로젝트를</h2>
              </div>
              <h2>
                {" "}
                분석하여 단계별 난이도로 준비된
                <br />
                15개 이상의 프로젝트 등을 수행하며
                <br />
                포트폴리오를 완성합니다.
              </h2>
            </div>
          </div>
          <div className={classes.image}>
            <img
              src={require("../../static/image/product/portfolioMobile.png")}
              alt="recommendation"
            />
          </div>
          <div className={classes.superMobile}>
            <div className="superTagMobile">SUPER</div>
            <div className="messageMobile">
              <div>
                <h2>
                  <span>면접</span>
                </h2>
                <img
                  src={require("../../static/image/product/slashMobile.png")}
                  alt="slash"
                />
                <h2>면접시 막힘없이 설명할 수 있도록</h2>
              </div>
              <h2>반복 훈련하게 됩니다.</h2>
            </div>
          </div>
          <div className={classes.image}>
            <img
              src={require("../../static/image/product/interviewMobile.png")}
              alt="recommendation"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default BodyFeatures;
