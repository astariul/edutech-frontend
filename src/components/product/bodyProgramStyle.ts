import { createStyles } from '@mantine/core';

const useBodyProgramStyles = createStyles((theme) => ({

  mobile: {
    display: "none",

    [`@media (max-width: 767px)`]: {
      display: "block"
    }
  },

  desktop: {
    [`@media (max-width: 767px)`]: {
      display: "none"
    }
  },

  rowFlex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  
  columnFlex: {
    display: "flex",
    flexDirection: "column",
  },

  main: {
    paddingTop: "102px",
    maxWidth: "1441px",
    width: "90%",
    margin: "0 auto",
    fontFamily: "NotoSansKR",
    fontStyle: "normal",
    whiteSpace: "nowrap",

    [`@media (max-width: 767px)`]: {

      paddingTop: "0px",
      // width: "375px",
    },
  },

  contents: {
    maxWidth: "1168px",
    width: "90%",
    margin: "0 auto",
    display: "flex",
    // alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    paddingBottom: "83px",
    alignItems: "flex-start",

    [`@media (max-width: 767px)`]: {
      alignItems: "center",
      maxWidth: "766px",
      margin: "0 auto",
      paddingBottom: "5px",

      "& > section": {
        maxWidth: "766px",
        width: "90%",

        "div": {
          alignItems: "center",
        }
      }
      // display: "none",
    },

    // "& > div": {
    //   width: "1168px",
    // },

    // "& > section": {
    //   marginTop: "37.97px",
    // }
  },

  contentsMobile: {
    display: "none",

    [`@media (max-width: 767px)`]: {
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
    [`@media (max-width: 767px)`]: {
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

    [`@media (max-width: 767px)`]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      // backgroundImage: "url(/image/product/whyMobile.png)",
      backgroundImage: "url(/image/product/why.png)",
      backgroundRepeat: "no-repeat",
      marginTop: "45px",
      maxWidth: "766px",
      width: "100%",
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

    [`@media (max-width: 767px)`]: {
      textAlign: "center",

      "& > h2": {
        marginTop: "45px",
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

  answerMobile: {
    display: "none",

    [`@media (max-width: 767px)`]: {
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
    fontFamily: "NotoSansKR",

      "div#super": {
      width: "66px",
      height: "28px",
      fontWeight: 700,
      fontSize: "20.4836px",
      lineHeight: "23px",
      letterSpacing: "-0.731557px",
      color: "#363636",
      borderBottom: "4px solid #363636",
    },

    "div#message": {
      rowGap: "17px"
    },

    "& > div > h2: nth-of-type(1)": {  
      margin: 0,
      fontWeight: 700,
      fontSize: "26px",
      lineHeight: "32px",
      letterSpacing: "-1px",
      color: "#363636",
    },

    "& > div > h2: nth-of-type(2)": {  
      margin: 0,
      fontWeight: 500,
      fontSize: "26px",
      lineHeight: "32px",
      letterSpacing: "-1px",
      color: "#363636",
    }, 

    [`@media (max-width: 767px)`]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      rowGap: "10.5px",
      marginBottom: "20px",

      "div#super": {
        width: "66px",
        height: "28px",
        fontWeight: 700,
        fontSize: "20.4836px",
        lineHeight: "23px",
        letterSpacing: "-0.731557px",
        color: "#363636",
        borderBottom: "4px solid #363636",
      },

      "div#message": {
        rowGap: "17px"
      },

      "& > div > h2: nth-of-type(1)": {  
        margin: 0,
        fontWeight: 700,
        fontSize: "23px",
        lineHeight: "32px",
        letterSpacing: "-1px",
        color: "#363636",
      },

      "& > div > h2: nth-of-type(2)": {  
        margin: 0,
        fontWeight: 500,
        fontSize: "23px",
        lineHeight: "32px",
        letterSpacing: "-1px",
        color: "#363636",
      }
    },
  },

  superMobile: {
    display: "none",
    
    [`@media (max-width: 767px)`]: {
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

  quotes: {
    marginTop: "55.3px",

    "h2": {
      margin: 0,
      fontFamily: "NotoSansKR",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "26px",
      lineHeight: "32px",
      letterSpacing: "-1px",
      color: "#363636",
      textAlign: "center",
    },

    [`@media (max-width: 767px)`]: {
      "h2": {
        fontSize: "23px"
      }
    },
  },

  program: {
    [`@media (max-width: 767px)`]: {
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
      height: "1230px",
      marginTop: "-10px",
      border: 0,
      borderBottomLeftRadius: "10px",
      borderBottomRightRadius: "10px",
    },
  },

  programMobile: {
    display: "none",

    [`@media (max-width: 767px)`]: {
      display: "block",

      "& > button": {
        fontFamily: "NotoSansKR",
        fontWeight: 700,
        fontSize: "13px",
        lineHeight: "37px",
        background: "linear-gradient(0deg, #0094FF, #0094FF), #363636",
        maxWidth: "375px",
        width: "375px",
        height: "60px",
  
        "& > div > span": {
          columnGap: "7px",
        }
      },
  
      "& > div": {
        maxWidth: "766px",
        width: "375px",
        background: "linear-gradient(0deg, #0094FF, #0094FF), #363636",
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

    [`@media (max-width: 767px)`]: {
      paddingLeft: "15px",
      paddingRight: "0px",
      justifyContent: "center",
      alignItems: "center",

      margin: "0 auto",
      maxWidth: "766px",
      width: "90%",
    },

    "& > img": {
      width: "968px",
      height: "1178px",
      
      [`@media (max-width: 767px)`]: {
        width: "375px",
      },
    },
  },

  cardArea: {
    columnGap: "31px",
  },

  mentorCard: {
    width: "569px",
    height: "160px",
    border: "0.994145px solid #E8E8E8",
    background: "#FFFFFF",

    [`@media (max-width: 767px)`]: {
      maxWidth: "375px",
      height: "300px"
    }
  },

  mentorCardInner: {
    margin: "20px 24px 0px 33px",
    width: "512px",
    height: "138px",
    columnGap: "14px",
    alignItems: "center",

    "div.mentorCardMentorImage": {
      width: "95px",
      height: "138px",

      "img": {
        width: "95px",
        height: "94px",
      }
    },

    "div.mentorCardMentorInfo": {
      height: "138px",
      rowGap: "13px",
      fontFamily: "NotoSansKR",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "12px",
      lineHeight: "30px",
      color: "#000000",
  
      ".mentorCardMentorNameAndPosition": {
        width: "154px",
        height: "34px",
        lineHeight: "18px"
      },

      ".mentorCardMentorComment": {
        letterSpacing: "-0.99px",
        fontSize: "14px",
        lineHeight: "26px",
        fontWeight: 400,
        
        "p": {
          margin: 0,
          lineHeight: "22px"
        }
      }
    },

    [`@media (max-width: 767px)`]: {
      maxWidth: "375px",
      height: "300px",

      "div.mentorCardMentorImage": {
        width: "95px",
        height: "258px",

        "img": {
          width: "95px",
          height: "94px",
        }
      },

      "div.mentorCardMentorInfo": {
        height: "258px",
        rowGap: "13px",
        fontFamily: "NotoSansKR",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "12px",
        lineHeight: "30px",
        color: "#000000",
    
        ".mentorCardMentorNameAndPosition": {
          width: "154px",
          height: "34px",
          lineHeight: "18px"
        },
  
        ".mentorCardMentorComment": {
          letterSpacing: "-0.99px",
          fontSize: "14px",
          lineHeight: "26px",
          fontWeight: 400,
          
          "p": {
            margin: 0,
            lineHeight: "22px"
          }
        }
      },
    },


  }

}));

export default useBodyProgramStyles;
