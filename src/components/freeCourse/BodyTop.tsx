import useStyles from './bodyTopStyle';

const Upper = () => {
  const {classes, cx} = useStyles();
  return (
    <div className={cx(classes.contents, classes.columnFlex)}>
      <div className={classes.messageLarge}>
        개발자로 취업하고 싶은데, 고민이 많으시죠?
        <br />
        그래서 <span>슈퍼코딩이 무료로 준비</span>했습니다.
      </div>
      <div className={cx(classes.tagArea)}>
        <div className={cx(classes.tagAreaInner, classes.columnFlex)}>
          <div>
            <div className={classes.messageSmall}><span>비전공자</span>인데 나도 개발자가 되고 싶다면?</div>
            <div className={cx(classes.tags, classes.rowFlex)}>
              <div className={classes.tag}>#취업코딩</div>
              <div className={classes.tag}>#취업프로젝트</div>
            </div>
          </div>
          <div>
            <div className={classes.messageSmall}>개발자 많이 뽑는다는데,<span>원하는 기업에 취업</span>하기를 원한다면?</div>
            <div className={cx(classes.tags, classes.rowFlex)}>
              <div className={classes.tag}>#네카라쿠배 개발자체험</div>
              <div className={classes.tag}>#000대기업코딩기출</div>
              <div className={classes.tag}>#IT 기업 첫취업</div>
            </div>
          </div>
          <div>
            <div className={classes.messageSmall}>오랜시간 너튜브, 인터넷 검색하며 정보를 취득하려하였으나<span>정확한 정보</span>보다는 홍보에 노출되어, 결정장애가 생겼다면?</div>
            <div className={cx(classes.tags, classes.rowFlex)}>
              <div className={classes.tag}>#개발자 검색단계</div>
              <div className={classes.tag}>#타사 수강생</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Bottom = () => {
  const {classes, cx} = useStyles();
  return (
    <div className={cx(classes.contents, classes.columnFlex, classes.bottomArea)}>
      <div className={classes.messageLarge}>
        슈퍼코딩이 만들면 비전공자를 위한
        <br />
        <span>취업 전용 0원 강의</span>도 다릅니다.
      </div>
      <div className={classes.messageSmall}>
        최소 수백만 원에서 수천만 원의 비용, 수백월 시간의 시행착오는 없어야 합니다.
        <br />
        비용을 지불하기 전에 <span>취업 전용 최신 강의를 무료</span>로 체험해보세요.
      </div>
    </div>
  )
}

const BodyTop = () => {
  const {classes} = useStyles();
  return (
    <section className={classes.main}>
      <Upper />
      <Bottom />
    </section>
  )
}

export default BodyTop;
