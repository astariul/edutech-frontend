
import useSuperCourseStyles from "./topStyle";

const Top = () => {
  const { classes } = useSuperCourseStyles();

  return (
    <>
    <section className={classes.topSection}>
      <div className={classes.topInner}>
        <div className={classes.messageArea}>        
          <div className={classes.message}>취업을 위한 코딩 교육은 달라야 합니다.</div>
        </div>
        <div className={classes.titleArea}>
          <div className={classes.titleTop}>
            슈퍼코딩
            <br />
            웹개발 종합반 1기
          </div>
        </div>
        <div className={classes.hookArea}>
          <div className={classes.hookLeft}>개발자로취업하지못하면100%환불보장!</div>
          <div className={classes.hookLeft}>개발자로취업하지못하면100%환불보장!</div>
          <div className={classes.hookMiddle}>개발자로취업하지못하면100%환불보장!</div>
          <div className={classes.hookRight}>개발자로취업하지못하면100%환불보장!</div>
          <div className={classes.hookRight}>개발자로취업하지못하면100%환불보장!</div>
        </div>
        <div className={classes.bottomMessageArea}>
          <div className={classes.bottomMessage}>
            <img src={require("../../static/image/product/angleBracketLeft.png")} alt="CaretRight" />
            <div>11/1 1기 마감! 이 가격 마지막</div>
            <img src={require("../../static/image/product/angleBracketRight.png")} alt="CaretRight" />
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Top;
