
import { Button } from '@mantine/core';
import { useStyles } from './eventSectionStyle';

const EventSection = () => {
  const {classes, cx} = useStyles();
  return (
    <section className={classes.main}>
      <div className={classes.contentsWrapper}>
        <div className={cx(classes.contents, classes.columnFlex)}>
          <div className={classes.title}>
            <span>기간 한정 이벤트</span>
            <br />무료강의 완강후기를 작성하면
            <br />웹개발종합반 Plus1개월을 무료로 드립니다.
          </div>
          <div className={cx(classes.body, classes.rowFlex)}>
            <div className={classes.ticket}>
              <img src={require("../../static/image/freeCourse/freeTicket.png")} alt="freeTicket" />
            </div>
            <div className={cx(classes.description, classes.columnFlex)}>
              <div className={classes.bullet}>
                <div>이벤트 상품</div>
                <li>7일 무료 이용권(전원), 10% 할인권(전원), 1개월 무료 이용권(10명)</li>
                <li>이벤트 기간: 2022년 11월 1일 ~ 2022년 11월 30일</li>
              </div>
              <div className={classes.bullet}>
                <div>참여방법</div>
                <li>무료강의를 완강 후</li>
                <li>완강 후기 설문 참여만 하면 끝!</li>
              </div>
              <div className={classes.bullet}>
                <div>상품지급일</div>
                <li>7일 무료 이용권: 완강 후기 설문 작성 즉시 지급</li>
                <li>1개월 무료 이용권: 12월2일 개별 지급</li>
              </div>
            </div>
          </div>
        <Button className={classes.button} radius={10}>웹개발 종합반 PLUS 바로가기</Button>
        </div>
      </div>
    </section>
  )
}

export default EventSection;
