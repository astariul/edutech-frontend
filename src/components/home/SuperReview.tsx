import useSuperReivewStyles from "./superReivewStyle";

interface reviewCardProps {
  content: string,
  who: string,
  key?: any
}
const ReviewCard = ({content, who, key}: reviewCardProps) => {
  const {classes, cx} = useSuperReivewStyles();

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

const SuperReivew = () => {
  const {classes, cx} = useSuperReivewStyles();
  return (
    <section className={classes.main}>
      <div className={classes.contents}>
        <div className={classes.category}>
          SUPER REIVEW
        </div>
        <div className={classes.title}>
          슈퍼코딩 취업 사례와 수강 후기.
          <br />
          여러분도 할 수 있습니다.
        </div>
        <div className={classes.titleMobile}>
          슈퍼코딩의 <span>수강후기</span>.
          <br />
          여러분도 할 수 있습니다.
        </div>
        <div className={cx(classes.rowFlex, classes.cardArea)}>
          <ReviewCard
            content="
              복잡하고 어려운 프론트엔드를 쉽게 정리해주셨어요. 꼼꼼하게 부족한 부분을 짚어주신 후 개선점을 제시해주십니다. 강의만 해주시는 게 아니라, 학생의 커리어 등 다각도로 케어해주세요. 보통 다른 강의는 가르쳐주고 나머지는 알아서 하라는 식인데, 이경엽 선생님은 학생을 끝까지 책임지신다는 느낌을 강하게 받았습니다. 프론트엔드를 배우고 싶은 분에게 강추합니다!
            "
            who="장대응 수강생"
          />
          <ReviewCard
            content="
              주먹구구식의 교육이 아닌 배우는 사람의 입장에서 이루어지는 교육이어서 정말 좋았습니다! 현재 부족한 부분이 어떤 것인지 파악해주시고 정말 필요한 내용을 이해하기 쉽게 강의해 주셨습니다. 또 진심을 다해서 같이 고민해주시고 열정적으로 대해주시는 모습을 보고 더 힘이 나기도 했습니다. 아주 좋은 강의와 멘토링이었습니다 :)
            "
            who="신상윤 수강생"
          />
        </div>
      </div>
    </section>
  )
}

export default SuperReivew;
