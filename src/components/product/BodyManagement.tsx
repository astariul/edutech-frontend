import { Space } from "@mantine/core";
import useBodyManagementStyles from "./bodyManagementStyle";


const BodyManagement = () => {
  const { classes, cx } = useBodyManagementStyles();

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
                <Space h={7}/>
                <div className={classes.title}>
                  취업이 될 때까지
                  <br />
                  제대로 관리하는 것은 기본입니다.
                </div>
              </div>
              <Space h={12}/>
              <div className={classes.middleSection}>
                <div className={cx(classes.rowFlex, classes.arrowlineTop)}>
                  <img src={require("../../static/image/home/superManagementArrowTop.png")} alt="arrowTop" />
                  <div>
                    <h3>학습매니저 밀착관리</h3>
                  </div>
                </div>
                <div className={cx(classes.rowFlex, classes.cardSection)}>
                  <img src={require("../../static/image/home/superManagementCard1.png")} alt="card1" />
                  <img src={require("../../static/image/home/superManagementCard2.png")} alt="card2" />
                  <img src={require("../../static/image/home/superManagementCard3.png")} alt="card3" />
                  <img src={require("../../static/image/home/superManagementCard4.png")} alt="card4" />
                </div>
                <Space h={31}/>
                <div className={cx(classes.rowFlex, classes.cardSection)}>
                  <img src={require("../../static/image/home/superManagementCard5.png")} alt="card5" />
                  <img src={require("../../static/image/home/superManagementCard6.png")} alt="card6" />
                  <img src={require("../../static/image/home/superManagementCard7.png")} alt="card7" />
                  <img src={require("../../static/image/home/superManagementCard8.png")} alt="card8" />
                </div>
                <div className={cx(classes.rowFlex, classes.arrowlineBottom)}>
                  <div>
                    <h3>취업매니저 밀착관리</h3>
                  </div>
                  <img src={require("../../static/image/home/superManagementArrowBottom.png")} alt="arrowBottom" />
                </div>
              </div>
              <Space h={44}/>
              <div className={cx(classes.rowFlex, classes.messageBottom)}>
                <img
                  src={require("../../static/image/home/superManagement2Top.png")}
                  alt="2top"
                />
                <div className={cx(classes.columnFlex)}>
                  <h2>
                    <span>2 Top 프리미엄 관리시스템</span>
                  </h2>
                  <h2>
                    슈퍼멘토분들이 학습 매니저와 취업 매니저로 각각 배정하여 <br />
                    성공적인 학습과 취업을 함께 책임집니다.
                  </h2>
                </div>
              </div>
              <Space h={44}/>
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
                <Space h={31}/>
                <div className={cx(classes.columnFlex, classes.middleSection)}>
                  <div className={cx(classes.rowFlex, classes.cardSection)}>
                    <img src={require("../../static/image/home/superManagementCard1.png")} alt="card1" />
                    <img src={require("../../static/image/home/superManagementCard2.png")} alt="card2" />
                  </div>
                  <Space h={31}/>
                  <div className={cx(classes.rowFlex, classes.cardSection)}>
                    <img src={require("../../static/image/home/superManagementCard3.png")} alt="card3" />
                    <img src={require("../../static/image/home/superManagementCard4.png")} alt="card4" />
                  </div>
                  <Space h={31}/>
                  <div className={cx(classes.rowFlex, classes.cardSection)}>
                    <img src={require("../../static/image/home/superManagementCard5.png")} alt="card5" />
                    <img src={require("../../static/image/home/superManagementCard6.png")} alt="card6" />
                  </div>
                  <Space h={31}/>
                  <div className={cx(classes.rowFlex, classes.cardSection)}>
                    <img src={require("../../static/image/home/superManagementCard7.png")} alt="card7" />
                    <img src={require("../../static/image/home/superManagementCard8.png")} alt="card8" />
                  </div>
                </div>
                <Space h={31}/>
                <div className={cx(classes.columnFlex, classes.messageBottom)}>
                  <img
                    src={require("../../static/image/home/superManagement2Top.png")}
                    alt="2top"
                  />
                  <h2>
                    <span>2 Top 프리미엄 관리시스템</span>
                  </h2>
                  <h2>
                    슈퍼멘토분들이 학습 매니저와 취업 매니저로
                    <br />각각 배정하여 성공적인
                    <br />학습과 취업을 함께 책임집니다.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BodyManagement;
