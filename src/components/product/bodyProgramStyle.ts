import { createStyles } from '@mantine/core';

const useBodyProgramStyles = createStyles((theme) => ({
  main: {
    paddingTop: "102px",
    width: "1441px",
    margin: "0 auto",
    fontFamily: "NotoSansKR",
    fontStyle: "normal",
    whiteSpace: "nowrap",
  },

  contents: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    
    "& > div": {
      width: "1168px",
      alignItems: "flex-start",
    },

    "& > div: nth-of-type(2)":{
      paddingTop: "66.78px",
    },

    "& > div: nth-of-type(3)":{
      paddingTop: "88px",
    },

    "& > section": {
      marginTop: "37.97px",
    }
  },

  message: {
    backgroundImage: "url(/image/product/why.png)",
    backgroundSize: "cover",
    marginTop: "106px",
    width: "100%",
    height: "166px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    
    "& > div": { 
      width: "1168px",
      margin: "0 auto",
    },
    
    "& > div > h2" : {
      color: "#FFFFFF",
      letterSpacing: "-2px",
      fontFamily: "NotoSansKR",
      whiteSpace: "nowrap",
      textAlign: "center",
      lineHeight: "50px",
      fontWeight: 700,
      fontSize: "30px",
      margin: 0,
    }
  },

  answer: {
    "& > h2": {  
      margin: 0,
      fontWeight: 700,
      fontSize: "32px",
      lineHeight: "44px",
      letterSpacing: "-2px",
      color: "#363636",

      "& > span": {
        color: "#0094FF",
      },
    },
  },

  super: {
    // paddingTop: "66.78px",
    display: "flex",
    flexDirection: "row",
    columnGap: "34px",

    "& > div": {
      width: "66px",
      fontFamily: "AlongSanss2",
      fontWeight: 800,
      fontSize: "20.4836px",
      lineHeight: "23px",
      letterSpacing: "-0.731557px",
      color: "#363636",
      borderBottom: "4px solid #363636",
    },

    "& > h2": {  
      margin: 0,
      fontWeight: 700,
      fontSize: "26px",
      lineHeight: "32px",
      letterSpacing: "-1px",
      color: "#363636",
    }
  },

  program: {    
    "& > button": {
      fontFamily: "NotoSansKR",
      fontWeight: 700,
      fontSize: "17px",
      lineHeight: "37px",
      background: "linear-gradient(0deg, #0094FF, #0094FF), #363636",
      width: "1168px",
      height: "66px",

      "& > div > span": {
        columnGap: "7px",
      }
    },

    "& > div": {
      width: "1168px",
      background: "linear-gradient(0deg, #0094FF, #0094FF), #363636",
      height: "1060px",
      marginTop: "-10px",
      border: 0,
      borderBottomLeftRadius: "10px",
      borderBottomRightRadius: "10px",
    },
  },

  programImage: {
    paddingLeft: "130px",
    paddingRight: "100px",
    display: "flex",
    flexDirection: "column",

    "& > img: nth-of-type(1)": {
      width: "968px",
      height: "600px",
    },
  
    "& > img: nth-of-type(2)": {
      width: "968px",
      height: "524px",
      marginTop: "-71px"
    }
  },

}));

export default useBodyProgramStyles;
