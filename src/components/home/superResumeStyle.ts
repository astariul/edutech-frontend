import { createStyles } from '@mantine/core';

const useSuperResumeStyles = createStyles((theme) => ({
  main: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "619px",
    [`@media (max-width: 850px)`]: {
      height: "auto"
    },
  },

  textArea: {
    height: "279px",
    paddingTop: "71px",
    paddingLeft: "9.444vw",

    [`@media (max-width: 850px)`]: {
      paddingTop: "46px",
      paddingLeft: "5.067vw",
      paddingRight: "5.067vw",
      height: "auto"
    }
  },

  category: {
    color: "#0094FF",
    fontWeight: 700,
    fontFamily: "AlongSanss2",
    fontStyle: "normal",
    fontSize: "14px",
    letterSpacing: "-0.886023px",
    textTransform: "uppercase",
    lineHeight: "41.35px",

    [`@media (max-width: 850px)`]: {
      alignItems: "center",
      textAlign: "center",
      fontSize: "12px",
      letterSpacing: "-0.886023px",
    }
  },

  title: {
    paddingTop: "30px",
    paddingLeft: "5px",
    color: "#363636",
    fontSize: "32px",
    fontFamily: "NotoSansKR",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "44px",
    letterSpacing: "-2px",
    height: "92px",

    [`@media (max-width: 850px)`]: {
      display: "none",
    }
  },

  titleMobile: {
    display: "none",

    [`@media (max-width: 850px)`]: {
      display: "block",
      fontFamily: "NotoSansKR",
      fontStyle: "normal",
      fontWeight: 700,
      paddingTop: "26px",
      alignItems: "center",
      textAlign: "center",
      fontSize: "23px",
      lineHeight: "32px",
      letterSpacing: "-0.8px",
    }
  },
  
  cardArea: {
    display: "flex",
    flexDirection: "row",
    paddingTop: "59px",
    paddingLeft: "9.375vw",
    paddingRight: "9.514vw",
    paddingBottom: "99px",
    justifyContent: "space-between",

    [`@media (max-width: 850px)`]: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: "28px",
      paddingLeft: "4.8vw",
      paddingRight: "4.8vw"
    },
  },

  cardLeft: {
    width: "268px",
    height: "268px",
    [`@media (max-width: 850px)`]: {
      display: "none"
    }
  },

  cardLeftMobile: {
    display: "none",

    [`@media (max-width: 850px)`]: {
      display: "block",
      width: "339px",
      height: "274px"
    }
  },

  cardMiddle: {
    width: "268px",
    height: "268px",

    [`@media (max-width: 850px)`]: {
      display: "none"
    }
  },
  
  cardMiddleMobile: {
    display: "none",

    [`@media (max-width: 850px)`]: {
      display: "block",
      width: "339px",
      height: "275.8px"
    }
  },

  cardRight: {
    width: "568px",
    height: "268px",

    [`@media (max-width: 850px)`]: {
      display: "none"
    }
  },

  cardRightMobile: {
    display: "none",

    [`@media (max-width: 850px)`]: {
      display: "block",
      width: "339px",
      height: "327px"
    }
  },

  imageTopContainer: {
    width: "100vw",
    height: "90px"
  },

  imageTop: {
    width: "auto",
    height: "55.72px",
    backgroundColor: "#F2F2F2"
  },

  imageBottom: {
    position: "relative",
    width: "100vw",
    height: "504px",
    backgroundImage: "url(/image/home/superCurriculumImage2.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundBlendMode: "normal, multiply, normal"
  },

  titleArea: {
    width: "536.78px",
    paddingTop: "67px",
    paddingLeft: "9.856vw",
    paddingRight: "auto",
    fontFamily: "NotoSansKR",
    fontStyle: "normal",
    color: "#FFFFFF",
    textShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
    letterSpacing: "-0.06em",
  },

  subTitle: {
    height: "70.7px",
    fontSize: "22px",
    fontWeight: 500,
    lineHeight: "33px",
    textShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
  },

  mainTitle: {
    paddingTop: "4.65px",
    height: "231.65px",
    fontSize: "65px",
    fontWeight: 900,
    lineHeight: "74px",
    textShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
  },

  modelInfo: {
    display: "flex",
    flexDirection: "row",
    paddingTop:"26px",
    paddingLeft:"10vw",
  },

  logo: {
    width: "49px",
    height: "49px"
  },

  modelInfoTextArea: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: "15px",
    fontFamily: "NotoSansKR",
    fontStyle: "normal",
    fontSize: "14px",
    fontWeight: 500,
    color: "#FFFFFF",
  },

  nameAndCheckCircle: {
    display:"flex",
  },

  name: {
    width: "37px",
    height: "26px",
    lineHeight: "25px"
  },  

  checkCircleLarge: {
    paddingLeft: "4.24px",
    width: "22.61px",
    height: "22.61px",
  },

  postition: {
    lineHeight: "22px",
    width: "95px",
    height: "22px",
  },

  cards: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: "29px",
    paddingLeft: "9.444vw",
    paddingRight: "9.514vw",
    paddingBottom: "37.95px",
  },

  card: {
    display: "flex",
    flexDirection: "column",
    width: "auto",
    maxWidth: "268px",
    height: "257.05px",
    backgroundColor: "#FFFFFF",
    border: "0.728261px solid #E8E8E8",
  },

  cardImage: {
    width: "auto",
    height: "162px",
  },

  cardTextArea: {
    paddingTop: "15px",
    paddingBottom: "22.17px",
    paddingLeft: "20px",
    paddingRight: "14.96px",
  },

  cardTitle: {
    fontFamily: "NotoSansKR",
    fontStyle: "normal",
    fontSize: "13px",
    fontWeight: 500,
    lineHeight: "17px",
    letterSpacing: "-1px",
    color: "#363636",
    paddingBottom: "19px"
  },

  cardFooter: {
    display: "flex",
    flexDirection: "row",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontSize: "12px",
    fontWeight: 500,
    lineHeight: "13px",
    color: "#363636",
  },

  footerName: {
    width: "auto",
    height: "20.92px",
  },

  checkCircleSmall: {
    paddingLeft: "2px",
    width: "11px",
    height: "11px",
  },

  footerDescription: {
    paddingLeft: "8px",
    width: "auto",
    height: "18.83px",
  }
}));

export default useSuperResumeStyles;
