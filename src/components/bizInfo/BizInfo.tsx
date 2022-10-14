import useStyles from './style';

const BizInfo = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.main}>
      <section className={classes.infoSection}>
        <h4 className={classes.header}>슈퍼러닝(주) 사업자정보</h4>
        <div className={classes.body}>
          <span>대표자: 서지원 | </span>
          <span>사업자 등록번호: 311-86-02881 | </span>
          <span>통신판매업 신고번호: 2022-서울강남-05580 </span>
          <br></br>
          <span>주소: 서울특별시 강남구 역삼동 837-24 프린스타워 9층 | </span>
          <span>전화: 070-8808-6020</span>

        </div>
      </section>
    </div>
  )
}

export default BizInfo;
