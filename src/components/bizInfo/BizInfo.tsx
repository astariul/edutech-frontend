import useStyles from './style';

const BizInfo = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.main}>
      <section className={classes.infoSection}>
        <h4 className={classes.header}>슈퍼코딩(주) 사업자정보</h4>
        <div className={classes.body}>
          <span>대표자: 서지원 | </span>
          <span>사업자 등록번호: 311-86-02881</span>
          <br></br>
          <span>주: 서울특별시 강남구 역삼동 837-24 프린스타워 9층</span>
        </div>
      </section>
    </div>
  )
}

export default BizInfo;
