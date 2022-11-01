import { createStyles } from '@mantine/core';

const useSuperResumeStyles = createStyles((theme) => ({
  main: {
    display: "flex",
    flexDirection: "column",
    width: "1440px",
    margin: "0 auto",

    [`@media (max-width: 850px)`]: {
      width: "100%",
      height: "auto"
    },

  },

  textArea: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "71px",

    "& > div": {
      width: "1168px",
      alignItems: "flex-start",
    },

    [`@media (max-width: 1224px)`]: {
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

    [`@media (max-width: 1224px)`]: {
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

    [`@media (max-width: 1224px)`]: {
      display: "none",
    }
  },

  titleMobile: {
    display: "none",

    [`@media (max-width: 1224px)`]: {
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
    width: "1168px",
    margin: "0 auto",
    flexDirection: "row",
    paddingTop: "59px",
    // alignItems: "center",
    // justifyContent: "space-between",
    columnGap: "32px",
    fontFamily: "NotoSansKR",
    color: "#FFFFFF",
    letterSpacing: "-1px",

    [`@media (max-width: 1224px)`]: {
      width: "375px",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: "28px",
    },
  },

  cardInner: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "28px 28px 22px 28px",
    height: "218px",

    "& > h2": {
      marginTop: 0,
      fontWeight: 900,
      fontSize: "27px",
      lineHeight: "31px",
    },

    "& > p": {
      marginBottom: 0,
      fontWeight: 700,
      fontSize: "18px",
      lineHeight: "25px",
    },

    "& > div": {
      display: "flex",
      columnGap: "15.37px"
    }
  },

  numAndText: {
    display: "flex",
    fontFamily: "AlongSansS2",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "15px",
    letterSpacing: "-0.69px",
    textTransform: "uppercase",
    alignItems: "center",
    columnGap: "5px",

    "& > div: nth-of-type(1)": {
      color: "#0081DF",
      letterSpacing: "-0.69px",
      fontSize: "83.11px",
      lineHeight: "21px",
      fontWeight: 900,

      [`@media (max-width: 1224px)`]: {
        fontSize: "74px",
      }
    },
    
    "& > div: nth-of-type(2)": {
      height: "65px",
      display: "flex",
      alignItems: "flex-end"
    }
  },

  cardLeft: {
    width: "268px",
    height: "268px",
    backgroundImage: "url(/image/home/superResumeLeft.png)",

    [`@media (max-width: 1224px)`]: {
      display: "none"
    }
  },

  cardLeftMobile: {
    display: "none",

    [`@media (max-width: 1224px)`]: {
      display: "block",
      width: "336px",
      height: "268px",
      backgroundImage: "url(/image/home/superResumeLeftMobile.png)",
    }
  },

  cardMiddle: {
    width: "268px",
    height: "268px",
    backgroundImage: "url(/image/home/superResumeMiddle.png)",

    [`@media (max-width: 1224px)`]: {
      display: "none"
    }
  },
  
  cardMiddleMobile: {
    display: "none",

    [`@media (max-width: 1224px)`]: {
      display: "block",
      width: "336px",
      height: "268px",
      backgroundImage: "url(/image/home/superResumeMiddleMobile.png)",

    }
  },

  cardRight: {
    width: "568px",
    height: "268px",
    backgroundImage: "url(/image/home/superResumeRight.png)",

    [`@media (max-width: 1224px)`]: {
      display: "none"
    }
  },

  cardRightMobile: {
    display: "none",

    [`@media (max-width: 1224px)`]: {
      display: "block",
      width: "336px",
      height: "327px",
      backgroundImage: "url(/image/home/superResumeRightMobile.png)",

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
}));

export default useSuperResumeStyles;
