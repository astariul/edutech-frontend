import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  main: {
    margin: "66px auto",

    [`@media (max-width: 767px)`]: {
      marginTop: "37px",
      marginBottom: 0,
    }
  },

  columnFlex: {
    display: "flex",
    flexDirection: "column",
  },

  rowFlex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },

  contents: {
    maxWidth: "1441px",
    width: "90%",
    alignItems: "center",
    fontFamily: "NotoSansKR",
    margin: "0 auto",
    
    [`@media (max-width: 767px)`]: {
      margin: "0 auto",
      maxWidth: "766px",
    },
    
    "& > div": {
      maxWidth: "1168px",
      width: "90%",
      margin: "0 auto",

      [`@media (max-width: 767px)`]: {
      }
    },
  },

  messageSmall: {
    textAlign: "center",
    fontWeight: 500,
    fontSize: "22px",
    lineHeight: "28px",
    letterSpacing: "-1px",
    color: "#626262",

    "& > span": {
      color: "#0094FF",
      fontSize: "24px",
      fontWeight: 700,
    },

    [`@media (max-width: 767px)`]: {
      textAlign: "center",
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "25px",
      letterSpacing: "-1.5px",
      color: "#626262",

      "& > span": {
        fontSize: "14px",
        fontWeight: 700,
        color: "#0094FF",
      }
    }
  },

  messageMiddle: {
    textAlign: "center",
    fontWeight: 500,
    fontSize: "22px",
    lineHeight: "36px",
    letterSpacing: "-1px",
    color: "#626262",

    "& > span": {
      color: "#0094FF",
      fontSize: "22px",
      fontWeight: 900,
    },

    [`@media (max-width: 767px)`]: {
      textAlign: "center",
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "27px",
      letterSpacing: "-1px",
      color: "#626262",

      "& > span": {
        fontSize: "16px",
        fontWeight: 900,
        color: "#0094FF",
      }
    }
  },

  messageLarge: {
    [`@media (max-width: 767px)`]: {
      textAlign: "center",
      fontWeight: 700,
      fontSize: "23px",
      lineHeight: "32px",
      letterSpacing: "-2px",
      color: "#363636",
    },

    textAlign: "center",
    fontWeight: 700,
    fontSize: "32px",
    lineHeight: "44px",
    letterSpacing: "-0.04em",
    color: "#363636",

    "& > span": {
      color: "#0094FF",
    },
  },

  hashTag: {
    color: "#000000",
    fontWeight: 700,
    fontSize: "24px",
    lineHeight: "28px",
    letterSpacing: "-1px",

    [`@media (max-width: 767px)`]: {
      letterSpacing: "-1.5px",
      fontSize: "14px",
      lineHeight: "25px",
    }
  },

  emphasizer: {
    fontWeight: 700,
    color: "#0094FF"
  },

  featureMessageArea: {
    width: "1168px",
    background: "#F2F2F2",
    marginTop: "39px",

    [`@media (max-width: 767px)`]: {
      display: "none"
    }
  },

  featureMessageAreaMobile: {
    display: "none",

    [`@media (max-width: 767px)`]: {
      display: "flex",
      marginTop: "25px",
      background: "#F2F2F2",
      width: "336px",
      margin: "25px auto",
      justifyContent: "center",
    }
  },
  
  featureMessage: {
    paddingLeft: "49px",
    paddingTop: "49px",
    paddingBottom: "49px",
    width: "859px",
    display: "flex",
    flexDirection: "column",
    rowGap: "26px",
    fontSize: "24px",
    lineHeight: "28px",
    
    "& > li": {
      color: "#626262",
      fontWeight: 500,
      fontSize: "22px",
      lineHeight: "28px",
  
      "& > .emphazier": {
        fontSize: "24px"
      }
    },

    [`@media (max-width: 767px)`]: {
      textAlign: "center",
      paddingLeft: "0",
      paddingTop: "18px",
      paddingBottom: "22px",
      width: "auto",
      rowGap: "0",

      "& > p": {
        color: "#626262",
        fontWeight: 700,
        fontSize: "13px",
        lineHeight: "25px",
      }
    }
  },

  tagArea: {
    background: "#F2F2F2",
    // width: "1168px",
    height: "428px",
    marginTop: "31px",
    marginBottom: "84px",
    
    [`@media (max-width: 767px)`]: {
      width: "335px",
      height: "250px",
      marginTop: "25px",
      marginBottom: "53px",
      marginLeft: "auto",
      marginRight: "auto",
    }
  },
  
  tagAreaInner: {
    rowGap: "49.49px",
    width: "1017px",
    margin: "38px 75px 53.03px 76px",
    height: "336.97px",
    
    [`@media (max-width: 767px)`]: {
      rowGap: "25.96px",
      width: "335px",
      margin: "21px 0",
    },

    "& > div": {
      display: "flex",
      flexDirection: "column",
      height: "89.99px",
      justifyContent: "space-between",

      [`@media (max-width: 767px)`]: {
        height: "46.92px",
        justifyContent: "center",
      },
    },

  },

  tags: {
    width: "auto",
    columnGap: "31.99px",
    justifyContent: "center",
    margin: "0 auto",
  },

  tag: {
    color: "#000000",
    fontSize: "22pxx",
    fontWeight: 500,
    lineHeight: "22px",
    letterSpacing: "-0.78px",

    [`@media (max-width: 767px)`]: {
      fontSize: "10px",
      lineHeight: "10px",
      letterSpacing: "-0.372555px",
    },
  },

  bottomArea: {
    rowGap: "46px",
    marginTop: "38px",
    width: "100%",
    backgroundColor: "#0223D0",

    [`@media (max-width: 767px)`]: {
      rowGap: "22.45px"
    }
  },

  bottomMessage: {
    paddingTop: "53px",
    paddingBottom: "54px",
    fontFamily: 'NotoSansKR',
    fontStyle: "normal",
    
    alignItems: "center",
    textAlign: "center",
    letterSpacing: "-2px",
    color: "#FFFFFF",
    
    ".bottomMessageLarge": {
     fontWeight: 700,
     fontSize: "32px",
     lineHeight: "44px",
   },
  
   "div.bottomMessageSmall": {
     fontWeight: 500,
     fontSize: "22px",
     lineHeight: "36px",
   },
  },

  mobile: {
    display: "none",

    [`@media (max-width: 767px)`]: {
      display: "block",
    }
  },

  desktop: {

    [`@media (max-width: 767px)`]: {
      display: "none",
    }
  }
}));

export default useStyles;
