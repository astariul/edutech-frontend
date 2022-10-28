import useBodyResumeStyles from "./bodyFeatureStyle"

const BodyFeatures = () => {
  const {classes, cx} = useBodyResumeStyles();
  return (
    <>
      <section className={classes.main}>
        <div className={classes.contents}>
          <div className={classes.super}>
            <div>SUPER</div>
            <div>
              <h2><span>추천서</span></h2>
              <img src={require("../../static/image/product/slash.png")} alt="slash" />
              <h2>슈퍼코딩에게 부여되는 업계 CTO의 추천서는 믿고 채용하는 프리패스임을 확신합니다.</h2>
            </div>
          </div>
          <div className={classes.image}>
            <img src={require("../../static/image/product/recommendation.png")} alt="recommendation" />
          </div>
          <div className={classes.super}>
            <div>SUPER</div>
            <div>
              <h2><span>이력서</span></h2>
              <img src={require("../../static/image/product/slash.png")} alt="slash" />
              <h2>슈퍼코딩은 수업을 수료하면 이력서에 즉각 반영되며 전공자의 이력서를 뛰어넘는 결과물이 <br />자동으로 완성됩니다.</h2>
            </div>
          </div>
          <div className={classes.image}>
            <img src={require("../../static/image/product/resume.png")} alt="recommendation" />
          </div>
          <div className={classes.super}>
            <div>SUPER</div>
            <div>
              <h2><span>포트폴리오</span></h2>
              <img src={require("../../static/image/product/slash.png")} alt="slash" />
              <h2>포트폴리오 슈퍼코딩은 포트폴리오 의미있는 24개를 당영히 만들 수 있습니다.</h2>
            </div>
          </div>
          <div className={classes.image}>
            <img src={require("../../static/image/product/portfolio.png")} alt="recommendation" />
          </div>
          <div className={classes.super}>
            <div>SUPER</div>
            <div>
              <h2><span>면접</span></h2>
              <img src={require("../../static/image/product/slash.png")} alt="slash" />
              <h2>면접 슈퍼코딩은 면접시 막힘이 없이 코딩 과정을 설명할 수 있는 정도의 반복 트레이닝을 받게 됩니다.</h2>
            </div>
          </div>
          <div className={classes.image}>
            <img src={require("../../static/image/product/interview.png")} alt="recommendation" />
          </div>
        </div>
        <div className={classes.contentsMobile}>
          <div className={classes.superMobile}>
            <div className={cx("superTagMobile", "whiteBackground")}>SUPER</div>
            <div className="messageMobile whiteBackground">
              <div>
                <h2><span>추천서</span></h2>
                <img src={require("../../static/image/product/slashMobile.png")} alt="slash" />
                <h2>슈퍼코딩에게 부여되는</h2>
              </div>
              <h2>업계 CTO의 추천서는 믿고 채용하는
                <br />프리패스임을 확신합니다.
              </h2>
            </div>
          </div>
          <div className={cx(classes.image, "withoutSideBlank")}>
            <img src={require("../../static/image/product/recommendationMobile.png")} alt="recommendation" />
          </div>
          <div className={classes.superMobile}>
            <div className="superTagMobile">SUPER</div>
            <div className="messageMobile">
              <div>
                <h2><span>이력서</span></h2>
                <img src={require("../../static/image/product/slashMobile.png")} alt="slash" />
                <h2>슈퍼코딩은 수업을 수료하면</h2>
              </div>
              <h2>
                  이력서에 즉각 반영되며 전공자의 이력서를
                  <br />뛰어넘는 결과물이 자동으로 완성됩니다.
              </h2>
            </div>
          </div>
          <div className={classes.image}>
            <img src={require("../../static/image/product/resumeMobile.png")} alt="recommendation" />
          </div>
          <div className={classes.superMobile}>
            <div className="superTagMobile">SUPER</div>
            <div className="messageMobile">
              <div>
                <h2><span>포트폴리오</span></h2>
                <img src={require("../../static/image/product/slashMobile.png")} alt="slash" />
                <h2>슈퍼코딩은 포트폴리오 </h2>
              </div>
              <h2> 의미있는 24개를 당영히 만들 수 있습니다.</h2> 
            </div>
          </div>
          <div className={classes.image}>
            <img src={require("../../static/image/product/portfolioMobile.png")} alt="recommendation" />
          </div>
          <div className={classes.superMobile}>
            <div className="superTagMobile">SUPER</div>
            <div className="messageMobile">
              <div>
                <h2><span>면접</span></h2>
                <img src={require("../../static/image/product/slashMobile.png")} alt="slash" />
                <h2>면접 슈퍼코딩은 면접시 막힘이 없이</h2> 
              </div>
              <h2>코딩 과정을 설명할 수 있는 정도의
                <br />반복 트레이닝을 받게 됩니다.
              </h2>
            </div>
          </div>
          <div className={classes.image}>
            <img src={require("../../static/image/product/interviewMobile.png")} alt="recommendation" />
          </div>
        </div>
      </section>
    </>
  )
}

export default BodyFeatures;
