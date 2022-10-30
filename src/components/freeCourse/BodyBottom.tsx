import { useStyles } from "./bodyBottomStyle";
 
interface reviewCardProps {
  content: string,
  who: string,
  key?: any
}
const ReviewCard = ({content, who, key}: reviewCardProps) => {
  const {classes, cx} = useStyles();

  return (
    <div key={key} className={classes.card}>
      <div className={cx(classes.cardInner, classes.columnFlex)}>
        <div className="fiveStar">
          <img src={require("../../static/image/freeCourse/fiveStars.png")} alt="fiveStars" />
        </div>
        <div className="content">{content}</div>
        <div className="who">{who}</div>
      </div>
    </div>
  )
}

const BodyBottom = () => {

  const {classes, cx} = useStyles();
  const reviews = [
    {
      content:"너무 기초가 없었는데 친절하게 하나하나 설명해 주셨어요. 제 손으로 홈페이지를 하나 뚝딱 만들어 낸 게 신기하고 신이 납니다.",
      who:"비전공자 수강생OOO"
    },
    {
      content:"개발자가 될 수는 있는 지, 어디를 써볼 수 있는 지 준비기간은 어떻게 해야 하는지 몰랐는데 현실적으로 딱 정해줘서 좋았어요.",
      who:"비전공자 수강생OOO"
    },
    {
      content:"기업에서 요구하는 스펙이 뭔지도 1도 모르는 초보인데, 공고를 분석해주고 합격 vs 불합격 이력서를 보여줘서 앞으로 어떻게 준비할지 방향이 잡혔어요.",
      who:"비전공자 수강생OOO"
    },
    {
      content:"너튜브나 인터넷엔 광고가 너무 많아요 ㅠㅠ 믿기가 어려웠는데, 인사담당자와 개발자 선배님들이 얘기해 주니 신뢰가 확 생기네요",
      who:"비전공자 수강생OOO"
    },
    {
      content:"비전공자가 지원하기 좋은 기업을 알려주는 게 완전 꿀팁! 개발자로서 시작을 제대로 알려주시네요.",
      who:"비전공자 수강생OOO"
    },
    {
      content:"코테에서 떨어진 후 기출을 무작정 풀어보기만 했는데 빈출, 풀어봐야 하는 순서, 좋은 코드와 나쁜 코드를 알려줘서 다음엔 붙을 수 있을 거 같아요.",
      who:"비전공자 수강생OOO"
    },
  ]
  return (
    <>
    <section className={classes.reviewMessage}>
      <div className={cx(classes.contents, classes.columnFlex)}>
        <div className={classes.messageLarge}> 
          지금 <span>100,000명*</span>의 수강생이
          <br />슈퍼코딩 무료 강의로 취업을 준비하고 있습니다.
        </div>
      </div>
    </section>
    <section className={cx(classes.reviewSection, classes.rowFlex)}>
      <div className={classes.review}>
        <div className={cx(classes.cards, classes.rowFlex)}>
          {
            reviews.map(
              (review, index) => (
                <ReviewCard
                  key={index}
                  content={review.content}
                  who={review.who}
                />
              )
            )
          }
        </div>
      </div>
    </section>
    <section className={classes.mentorMessage}>
      <div className={cx(classes.contents, classes.columnFlex)}>
        <div className={classes.messageLarge}> 
          무료강의에 함께하는 <span>100인의 멘토진!</span>
          <br />결과물 피드백&취업 멘토링, 궁금한건 언젠든지 물어보세요.
        </div>
      </div>
    </section>
    <div className={classes.mentor}></div>
    </>
  )
}

export default BodyBottom;
