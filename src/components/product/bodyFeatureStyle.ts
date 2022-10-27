import { createStyles } from '@mantine/core';

const useBodyFeatureStyles = createStyles((theme) => ({
  main: {
    marginTop: "45.11px",
    fontFamily: "NotoSansKR",
    fontStyle: "normal",
    color: "#363636",
    whiteSpace: "nowrap",
    backgroundColor: "#F2F2F2",
  },

  contents: {
    width: "1441px",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    fontFamily: "NotoSansKR",
    fontStyle: "normal",
    color: "#363636",

    "& > div": {      
      width: "1168px",

      "& > div": {
        alignItems: "flex-start",
      }
    }
  },

  message: {
    paddingTop: "88px",
    paddingBottom: "48px",
    
    "& > h2" : {
      margin: 0,
      whiteSpace: "nowrap",
      fontWeight: 700,
      fontSize: "32px",
      lineHeight: "44px",
      letterSpacing: "-2px",

      "& > span": {
        color: "#0094FF",
      }
    }
  },
  

  super: {
    paddingTop: "45.11px",
    display: "flex",
    flexDirection: "row",
    columnGap: "34px",

    "& > div > h2 > span": {
      color: "#0094FF",
    },

    "& > div > img": {
      width: "28px",
      height: "31.99px",
    },

    "& > div > h2": {  
      margin: 0,
      fontWeight: 700,
      fontSize: "26px",
      lineHeight: "32px",
      letterSpacing: "-1px",
      color: "#363636",
    },

    "& > div: nth-of-type(1)": {
      width: "66px",
      height: "28px",
      fontFamily: "AlongSanss2",
      fontWeight: 800,
      fontSize: "20.4836px",
      lineHeight: "23px",
      letterSpacing: "-0.731557px",
      color: "#363636",
      borderBottom: "4px solid #363636",
    },

    "& > div: nth-of-type(2)": {
      display: "flex",
      justifyContent: "flex-start",
      fontFamily: "NotoSansKR",
      fontWeight: 700,
      fontSize: "26px",
      lineHeight: "32px",
      letterSpacing: "-1px",
    }
  },

  image: {
    paddingTop: "57px",

  },

}));

export default useBodyFeatureStyles;
