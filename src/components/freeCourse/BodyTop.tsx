import useStyles from './bodyTopStyle';

const Upper = () => {
  const {classes, cx} = useStyles();
  return (
    <div className={cx(classes.contents, classes.columnFlex)}>
      <div className={cx(classes.messageLarge, classes.desktop)}>
        개발자로 취업하고 싶은데, 고민이 많으시죠?
        <br />
        그래서 <span>슈퍼코딩이 무료로 준비</span>했습니다.
      </div>
      <div className={cx(classes.messageLarge, classes.mobile)}>
        개발자로 취업하고 싶은데,
        <br />고민이 많으시죠?
        <br />
        그래서 <span>슈퍼코딩이 무료로 <br />준비</span>했습니다.
      </div>
      <section className={classes.featureMessageArea}>
        <div className={classes.featureMessage}>
          <li>
            <span className={classes.emphasizer}>비전공자</span>인데 정말 쉽게 배워서 개발자가 될 수 있을까? <span className={classes.hashTag}>#세상에서가장쉬운 #슈퍼개념</span>
          </li>
          <li><span className={classes.emphasizer}>합격</span>하는 이력서와 포트폴리오를 만들수 있을까? <span className={classes.hashTag}>#단계별프로젝트 #슈퍼해커</span></li>
          <li>개발자로 취업하기 어렵다던데 <span className={classes.emphasizer}>코딩테스트는</span> 어떻게 통과하지? <span className={classes.hashTag}>#000대 기업 취업기출</span></li>
          <li>두렵기만한 <span className={classes.emphasizer}>기술면접</span> 어떻게 준비하지? <span className={classes.hashTag}>#면접기출 #합격비법</span></li>
          <li>어렵기만한 <span className={classes.emphasizer}>채용공고</span> 어떤 회사가 내 수준에 맞을까? <span className={classes.hashTag}>#나에게맞는 회사고르는 팁 #취업코칭</span></li>
        </div>
      </section>
      <section className={classes.featureMessageAreaMobile}>
        <div className={classes.featureMessage}>
          <p>
            <span className={classes.emphasizer}>비전공자</span>인데 정말 쉽게 배워서 개발자가 될 수 있을까?
            <br/>
            <span className={classes.hashTag}>#세상에서가장쉬운 #슈퍼개념</span>
          </p>
          <p>
            <span className={classes.emphasizer}>합격</span>하는 이력서와 포트폴리오를 만들수 있을까?
            <br/>
            <span className={classes.hashTag}>#단계별프로젝트 #슈퍼해커</span>
          </p>
          <p>
            개발자로 취업하기 어렵다던데 <span className={classes.emphasizer}>코딩테스트는</span> 어떻게 통과하지?
            <br/>
            <span className={classes.hashTag}>#000대 기업 취업기출</span>
          </p>
          <p>
            두렵기만한 <span className={classes.emphasizer}>기술면접</span> 어떻게 준비하지?
            <br/>
            <span className={classes.hashTag}>#면접기출 #합격비법</span>
          </p>
          <p>
            어렵기만한 <span className={classes.emphasizer}>채용공고</span> 어떤 회사가 내 수준에 맞을까?
            <br/>
            <span className={classes.hashTag}>#나에게맞는 회사고르는 팁 #취업코칭</span>
          </p>
        </div>
      </section>
    </div>
  )
}

const Bottom = () => {
  const {classes, cx} = useStyles();
  return (
    <div className={cx(classes.columnFlex, classes.bottomArea, classes.bottomMessage)}>
      <div className={cx(classes.rowFlex, "bottomMessageLarge", classes.desktop,)}>
        슈퍼코딩이 만들면 비전공자를 위한
        <br />취업 전용 0원 강의도 다릅니다.
      </div>
      <div className={cx(classes.rowFlex, "bottomMessageLarge", classes.mobile)}>
        슈퍼코딩이 만들면
        <br />비전공자를 위한 취업전용
        <br />0원 강의도 다릅니다.
      </div>
      <div className={cx(classes.columnFlex, "bottomMessageSmall", classes.desktop)}>
        <span>
          최소 수백만 원에서 수천만 원의 비용, 수백월 시간의 시행착오는 없어야 합니다.
          <br />비용을 지불하기 전에 <strong>취업 전용 최신 강의를 무료</strong>로 체험해보세요.
        </span>
      </div>
      <div className={cx(classes.columnFlex, "bottomMessageSamll", classes.mobile)}>
        최소 수백만 원에서 수천만 원의 비용,
        <br />수백월 시간의 시행착오는 없어야 합니다.
        <br />비용을 지불하기 전에 <strong>취업 전용 최신 강의를</strong>
        <br /><strong>무료</strong>로 체험해보세요.
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
