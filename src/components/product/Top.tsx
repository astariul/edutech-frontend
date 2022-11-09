import useTopStyles from "./topStyle";

const Top = () => {
  const { classes } = useTopStyles();

  return (
    <>
      <section className={classes.topSection}>
        <div className={classes.topInner}>
          <div className={classes.messageArea}>
            <div className={classes.message}>
              코딩, 기초부터 취업까지 한번에!
            </div>
          </div>
          <div className={classes.titleArea}>
            <div className={classes.titleTop}>
              슈퍼코딩
              <br />
              웹개발 종합반 1기
            </div>
            <div className={classes.titleTopMobile}>
              <span>슈퍼코딩</span>
              <span>웹개발 종합반 1기</span>
            </div>
          </div>
          <div className={classes.hookArea}>
            <div className={classes.hookLeft}>
              개발자로 취업하지 못하면 100%환불보장!
            </div>
            <div className={classes.hookLeft}>
              개발자로 취업하지 못하면 100%환불보장!
            </div>
            <div className={classes.hookMiddle}>
              개발자로 취업하지 못하면 100%환불보장!
            </div>
            <div className={classes.hookRight}>
              개발자로 취업하지 못하면 100%환불보장!
            </div>
            <div className={classes.hookRight}>
              개발자로 취업하지 못하면 100%환불보장!
            </div>
          </div>
          <div className={classes.hookAreaMobile}>
            <div className={classes.hookLeftMobile}>
              개발자로취업하지못하면
              <br />
              100% 환불보장!
            </div>
            <div className={classes.hookMiddleMobile}>
              개발자로취업하지못하면
              <br />
              100% 환불보장!
            </div>
            <div className={classes.hookRightMobile}>
              개발자로취업하지못하면
              <br />
              100% 환불보장!
            </div>
          </div>
          <div className={classes.bottomMessageArea}>
            <div className={classes.bottomMessage}>
              <img
                src={require("../../static/image/product/angleBracketLeft.png")}
                alt="CaretRight"
              />
              <div>11월 20일 1기 마감! {"  "}지금이 최저가</div>
              <img
                src={require("../../static/image/product/angleBracketRight.png")}
                alt="CaretRight"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Top;
