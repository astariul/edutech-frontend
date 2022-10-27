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
    flexDirection: "row",
    paddingTop: "59px",
    paddingLeft: "9.375vw",
    paddingRight: "9.514vw",
    justifyContent: "center",
    columnGap: "32px",

    [`@media (max-width: 1224px)`]: {
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
    [`@media (max-width: 1224px)`]: {
      display: "none"
    }
  },

  cardLeftMobile: {
    display: "none",

    [`@media (max-width: 1224px)`]: {
      display: "block",
      width: "339px",
      height: "274px"
    }
  },

  cardMiddle: {
    width: "268px",
    height: "268px",

    [`@media (max-width: 1224px)`]: {
      display: "none"
    }
  },
  
  cardMiddleMobile: {
    display: "none",

    [`@media (max-width: 1224px)`]: {
      display: "block",
      width: "339px",
      height: "275.8px"
    }
  },

  cardRight: {
    width: "568px",
    height: "268px",

    [`@media (max-width: 1224px)`]: {
      display: "none"
    }
  },

  cardRightMobile: {
    display: "none",

    [`@media (max-width: 1224px)`]: {
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
