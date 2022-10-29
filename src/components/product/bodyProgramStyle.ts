import { createStyles } from '@mantine/core';

const useBodyProgramStyles = createStyles((theme) => ({
  main: {
    paddingTop: "102px",
    width: "1441px",
    margin: "0 auto",
    fontFamily: "NotoSansKR",
    fontStyle: "normal",
    whiteSpace: "nowrap",

    [`@media (max-width: 376px)`]: {
      paddingTop: "0px",
      width: "375px",
    },
  },

  contents: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    
    [`@media (max-width: 376px)`]: {
      display: "none",
    },

    "& > div": {
      width: "1168px",
      alignItems: "flex-start",
    },

    "& > div: nth-of-type(2)":{
      paddingTop: "66.78px",
    },

    "& > div: nth-of-type(3)":{
      marginTop: "45px",

      "& > div: nth-of-type(1)": {
        marginBottom: "68px"
      }
    },

    "& > div: nth-of-type(4)":{
      paddingTop: "88px",
    },

    "& > section": {
      marginTop: "37.97px",
    }
  },

  contentsMobile: {
    display: "none",

    [`@media (max-width: 376px)`]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",

      "& > div": {
        width: "336px",
        marginTop: "45px",
      },

      "& > div: nth-of-type(2)":{
        marginTop: "45px",
      },

      "& > div: nth-of-type(3)":{
        marginTop: "45px",
      },

      "& > div > div.withoutSideBlank":{
        width: "375.5px",
        marginBottom: "45px",
      },

      "& > section": {
        marginTop: "37.97px",
      }
    },
  },

  message: {
    [`@media (max-width: 376px)`]: {
      display: "none"
    },

    backgroundImage: "url(/image/product/why.png)",
    backgroundSize: "cover",
    marginTop: "106px",
    width: "100%",
    height: "166px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",


    "& > div: nth-of-type(1)": { 
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
    },
  },

  messageMobile: {
    display: "none",
    
    [`@media (max-width: 376px)`]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      backgroundImage: "url(/image/product/whyMobile.png)",
      marginTop: "45px",
      width: "375px",
      height: "166px",

      "& > div: nth-of-type(1)": { 
        margin: "0 auto",
        width: "336px",
      },
  
      "& > div": { 
        width: "336px",
      },

      "& > div > h2" : {
        color: "#FFFFFF",
        letterSpacing: "-2px",
        fontFamily: "NotoSansKR",
        textAlign: "center",
        lineHeight: "32px",
        fontWeight: 700,
        fontSize: "23px",
        margin: 0,
      }
    },
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

    [`@media (max-width: 376px)`]: {
      display: "none"
    }
  },

  answerMobile: {
    display: "none",

    [`@media (max-width: 376px)`]: {
      display: "block",
      textAlign: "center",

      "& > h2": {
        margin: 0,
        fontWeight: 700,
        fontSize: "23px",
        lineHeight: "32px",
        letterSpacing: "-2px",
        color: "#363636",
  
        "& > span": {
          color: "#0094FF",
        },
      },
    }
  },

  super: {
    display: "flex",
    flexDirection: "row",
    columnGap: "34px",
    marginBottom: "40px",

    [`@media (max-width: 376px)`]: {
      display: "none",

    },

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

  superMobile: {
    display: "none",
    
    [`@media (max-width: 376px)`]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      rowGap: "10.5px",
      marginBottom: "20px",

      "& > div": {
        display: "block",
        width: "46px",
        fontFamily: "AlongSanss2",
        fontWeight: 800,
        fontSize: "14.27px",
        lineHeight: "16px",
        letterSpacing: "-0.51px",
        color: "#363636",
        borderBottom: "2.79px solid #363636",
      },
  
      "& > h2": { 
        display: "block",
        margin: 0,
        fontWeight: 700,
        fontSize: "18px",
        lineHeight: "27px",
        letterSpacing: "-1px",
        color: "#363636",
      }
    },
  },

  program: {

    [`@media max-width(376px)`]: {
      display: "none",
    },

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

  programMobile: {
    display: "none",

    [`@media (max-width: 376px)`]: {
      display: "block",

      "& > button": {
        fontFamily: "NotoSansKR",
        fontWeight: 700,
        fontSize: "13px",
        lineHeight: "37px",
        background: "linear-gradient(0deg, #0094FF, #0094FF), #363636",
        width: "336px",
        height: "60px",
  
        "& > div > span": {
          columnGap: "7px",
        }
      },
  
      "& > div": {
        width: "336px",
        background: "linear-gradient(0deg, #0094FF, #0094FF), #363636",
        height: "560px",
        marginTop: "-10px",
        border: 0,
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
      },
    }
  },

  programImage: {
    paddingLeft: "130px",
    paddingRight: "100px",
    display: "flex",
    flexDirection: "column",

    [`@media (max-width: 376px)`]: {
      paddingLeft: "15px",
      paddingRight: "0px",
      justifyContent: "center",
      alignItems: "center"
    },

    "& > img: nth-of-type(1)": {
      width: "968px",
      height: "600px",

      [`@media (max-width: 376px)`]: {
        width: "300px",
        height: "300px",
      }
    },
  
    "& > img: nth-of-type(2)": {
      width: "968px",
      height: "524px",
      marginTop: "-71px",
      
      [`@media (max-width: 376px)`]: {
        width: "300px",
        height: "300px",
      marginTop: "-37px",
      }
    }
  },

}));

export default useBodyProgramStyles;
