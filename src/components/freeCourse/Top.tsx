import useStyles from "./topStyle";

const Top = () => {
  const { classes, cx } = useStyles();

  return (
    <section className={classes.main}>
      <div className={cx(classes.contents, classes.columnFlex)}>
        <div className={classes.TopMessageSmall}>
          <span>슈펴코딩이 만들면 비전공자를 위한 취업 전용 0원 강의도 다릅니다.</span>
        </div>
        <div className={classes.TopMessageLarge}>
          <h2>슈퍼코딩</h2>
          <br />
          <div className={classes.rowFlex}>
            <h2>취업전용</h2>
            <span>0</span>
            <h2>원 강의</h2>
          </div>
        </div>
        {/* <div className={classes.remark}>
          *2022년 11월 1일~2022년 11월 30일 기준, youtube view 합산
        </div> */}
      </div>
    </section>
  )
}

export default Top;