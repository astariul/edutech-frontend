import useSuperCourseStyles from "./superCourseStyle";
import { useNavigate } from "react-router-dom";
import { Text, Space } from "@mantine/core";

const SuperCourse = () => {
  const { classes, cx } = useSuperCourseStyles();
  const navigate = useNavigate();
  return (
    <>
      <section className={classes.mainTop}>
        <div className={classes.TopInner}>
          <div className={classes.category}>SUPER COURSE</div>
          <div className={classes.mainInner}>
            <div className={classes.messageArea}>
              <div className={classes.message}>
                코딩, 기초부터 취업까지 한번에!
              </div>
            </div>
            <div className={classes.titleArea}>
              <div className={classes.titleTop}>슈퍼코딩</div>
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
              <div className={classes.hookLeftMobile}>
                개발자로취업하지못하면
                <br />
                100%환불보장!
              </div>
              <div className={classes.hookMiddle}>
                개발자로취업하지못하면100%환불보장!
              </div>
              <div className={classes.hookMiddleMobile}>
                개발자로취업하지못하면
                <br />
                100%환불보장!
              </div>
              <div className={cx(classes.hookRight)}>
                개발자로취업하지못하면100%환불보장!
              </div>
              <div className={cx(classes.hookRightMobile)}>
                개발자로취업하지못하면
                <br />
                100%환불보장!
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
      <div className={cx(classes.mainBottom)}>
        <div className={classes.merits}>
          <div style={{ fontSize: "14px" }}>
            <div className={cx(classes.desktop)} style={{ fontSize: "30px" }}>
              12시간
            </div>
            <div className={cx(classes.mobile)} style={{ fontSize: "20px" }}>
              12시간
              <Space h="sm" />
            </div>
            <br />
            가장 쉽게 배우는 <br />
            코딩교육
          </div>
          <span></span>
          <div style={{ fontSize: "14px" }}>
            <div className={cx(classes.desktop)} style={{ fontSize: "30px" }}>
              15개+
            </div>
            <div className={cx(classes.mobile)} style={{ fontSize: "20px" }}>
              15개+
              <Space h="sm" />
            </div>
            <br />
            포폴 완성을 <br />
            위한 프로젝트
          </div>
          <span></span>
          <div style={{ fontSize: "14px" }}>
            <div className={cx(classes.desktop)} style={{ fontSize: "30px" }}>
              100개 기업
            </div>
            <div className={cx(classes.mobile)} style={{ fontSize: "18px" }}>
              100개 기업
              <Space h="sm" />
            </div>
            <br />
            코테, 면접 <br />
            완전 정복
          </div>
          <span></span>
          <div style={{ fontSize: "14px" }}>
            <div className={cx(classes.desktop)} style={{ fontSize: "30px" }}>
              밀착관리
            </div>
            <div className={cx(classes.mobile)} style={{ fontSize: "20px" }}>
              밀착관리
              <Space h="sm" />
            </div>
            <br />
            학습, 취업 전담 <br />
            매니저
            <br />
          </div>
          <span></span>
          <div style={{ fontSize: "14px" }}>
            <div className={cx(classes.desktop)} style={{ fontSize: "30px" }}>
              네트워크
            </div>
            <div className={cx(classes.mobile)} style={{ fontSize: "20px" }}>
              네트워크
              <Space h="sm" />
            </div>
            <br />
            CTO, 개발자 <br />
            산업군별 네트워크
          </div>
        </div>
      </div>
    </>
  );
};

export default SuperCourse;
