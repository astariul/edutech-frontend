import useSuperResumeStyles from "./superResumeStyle";

const SuperResume = () => {
  const {classes} = useSuperResumeStyles();

  return (
    <div className={classes.main}>
      <div className={classes.textArea}>
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
      </div>
      <div className={classes.cardArea}>
        <img className={classes.cardLeft} src={require("../../static/image/home/superResumeCardLeft.png")} alt={""}/>
        <img className={classes.cardLeftMobile} src={require("../../static/image/home/superResumeCardLeftMobile.png")} alt={""}/>
        <img className={classes.cardMiddle} src={require("../../static/image/home/superResumeCardMiddle.png")} alt={""}/>
        <img className={classes.cardMiddleMobile} src={require("../../static/image/home/superResumeCardMiddleMobile.png")} alt={""}/>
        <img className={classes.cardRight} src={require("../../static/image/home/superResumeCardRight.png")} alt={""}/>
        <img className={classes.cardRightMobile} src={require("../../static/image/home/superResumeCardRightMobile.png")} alt={""}/>
      </div>
    </div>
  )
}

export default SuperResume;
