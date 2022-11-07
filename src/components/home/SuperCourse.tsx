import useSuperCourseStyles from "./superCourseStyle";
import { useNavigate } from "react-router-dom";

const SuperCourse = () => {
  const { classes } = useSuperCourseStyles();
  const navigate = useNavigate();
  return (
    <>
      <section className={classes.mainTop}>
        <div className={classes.TopInner}>
          <div className={classes.category}>SUPER COURSE</div>
          <div className={classes.mainInner}>
            <div className={classes.messageArea}>
              <div className={classes.message}>
                취업을 위한 코딩 교육은 달라야 합니다.
              </div>
            </div>
            <div className={classes.titleArea}>
              <div className={classes.titleTop}>취업관리형</div>
              <div className={classes.titleBottomContainer}>
                <div className={classes.titleBottomLeft}>웹개발 종합반</div>
                <div className={classes.titleBottomRightContainer}>
                  <div className={classes.titleBottomRightTop}>PLUS</div>
                  <div className={classes.titleBottomRightBottom} />
                </div>
              </div>
            </div>
            <div className={classes.hookArea}>
              <div className={classes.hookLeft}>
                개발자로취업하지못하면100%환불보장!
              </div>
              <div className={classes.hookMiddle}>
                개발자로취업하지못하면100%환불보장!
              </div>
              <div className={classes.hookMiddleMobile}>
                개발자로취업하지못하면
                <br />
                100%환불보장!
              </div>
              <div className={classes.hookRight}>
                개발자로취업하지못하면100%환불보장!
              </div>
            </div>
            <div className={classes.goPaymentArea}>
              <div
                className={classes.box}
                onClick={() =>
                  navigate("/payment", {
                    state: process.env.REACT_APP_COURSE_ID,
                  })
                }
              >
                <div className={classes.boxInner}>
                  <div className={classes.boxLeft}>11월 20일 1차 마감!</div>
                  <div className={classes.boxRightContainer}>
                    <div className={classes.boxRightLeft}>지금 구매하기</div>
                    <img
                      className={classes.boxRightRight}
                      src={require("../../static/image/home/CaretRight.png")}
                      alt="CaretRight"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={classes.mainBottom}>
        <div className={classes.merits}>
          <div>
            가장 쉽게, 제대로 배우는 <br />
            코딩교육
          </div>
          <span></span>
          <div>
            현업 실무 완벽대비 단계별 난이도 <br />
            15개 이상의 프로젝트
          </div>
          <span></span>
          <div>
            코딩테스트, <br />
            면접 완전 정복
          </div>
          <span></span>
          <div>
            2 top 담임제 : <br />
            학습매니저, 취업매니저
          </div>
          <span></span>
          <div>
            현직 CTO, 개발자 슈퍼멘토와 <br />
            함께하는 네트워크
          </div>
        </div>
      </div>
    </>
  );
};

export default SuperCourse;
