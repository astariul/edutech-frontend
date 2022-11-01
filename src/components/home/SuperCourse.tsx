
import useSuperCourseStyles from "./superCourseStyle";

const SuperCourse = () => {
  const { classes } = useSuperCourseStyles();

  const Ticket = (subTitle: string, title: string, index: number) => {
    return (
      <div key={index} className={classes.ticket}>
        <div className={classes.ticketInner}>
          <div className={classes.ticketSubTitle}>{subTitle}</div>
          <div className={classes.ticketTitle}>{title}</div>
          <div className={classes.ticketFooter}>
            <div className={classes.ticketFooterLeft}>무료강의 신청청하기</div>
            <img className={classes.ticketFooterRight} src={require("../../static/image/home/CaretRightSmall.png")} alt="CaretRight" />
          </div>
        </div>
      </div>
    )
  }
  return (
    <>
    <section className={classes.mainTop}>
      <div className={classes.TopInner}>
        <div className={classes.category}>SUPER COURSE</div>
        <div className={classes.mainInner}>
          <div className={classes.messageArea}>        
            <div className={classes.message}>취업을 위한 코딩 교육은 달라야 합니다.</div>
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
            <div className={classes.hookLeft}>개발자로취업하지못하면100%환불보장!</div>
            <div className={classes.hookMiddle}>개발자로취업하지못하면100%환불보장!</div>
            <div className={classes.hookMiddleMobile}>개발자로취업하지못하면<br/>100%환불보장!</div>
            <div className={classes.hookRight}>개발자로취업하지못하면100%환불보장!</div>
          </div>
          <div className={classes.goPaymentArea}>
            <div className={classes.box}>
              <div className={classes.boxInner}>
                <div className={classes.boxLeft}>11/20 1기 마감!</div>
                <div className={classes.boxRightContainer}>
                  <div className={classes.boxRightLeft}>지금 구매하기</div>
                  <img className={classes.boxRightRight} src={require("../../static/image/home/CaretRight.png")} alt="CaretRight" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className={classes.mainBottom}>
      <div className={classes.ticketArea}>
        {
          [
            Ticket("코딩1도 몰라도 1시간이면 뚝딱!", "토마토마켓 코딩강의 0원", 0),
            Ticket("코딩1도 몰라도 1시간이면 뚝딱!", "토마토마켓 코딩강의 0원", 1),
            Ticket("코딩1도 몰라도 1시간이면 뚝딱!", "토마토마켓 코딩강의 0원", 2),
          ]
        }
      </div>
      <div className={classes.ticketAreaMobile}>
        {
          [
            Ticket("코딩1도 몰라도 1시간이면 뚝딱!", "토마토마켓 코딩강의 0원", 0),
          ]
        }
      </div>
    </div>
    </>
  );
}

export default SuperCourse;
