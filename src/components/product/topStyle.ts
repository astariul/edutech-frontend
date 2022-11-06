import { createStyles } from '@mantine/core';

const useTopStyles = createStyles((theme) => ({
  topSection: {
    position: "relative",
    backgroundImage: "url(/image/product/mainBackground.png)",
    backgroundSize: "cover",
    height: "599px",

    [`@media (max-width: 900px)`]: {
      marginTop: "0px",
      height: "564px",
    }
  },
  
  topInner: {
    fontFamily: "NotoSansKR",
    display: "flex",
    flexDirection: "column",
    paddingTop: "80px",
    paddingBottom: "58px",

    [`@media (max-width: 900px)`]: {
      width: "375px",
      margin: "0 auto",
      paddingTop: "181px"
    }

  },

  messageArea : {
    paddingTop: "58px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    fontStyle: "normal",
    fontWeight: 700,
    letterSpacing: "-0.886023px",
    textTransform: "uppercase",

    [`@media (max-width: 900px)`]: {
      paddingTop: 0
    }
  },
  
  message: {
    lineHeight: "50px",
    fontSize: "20px",
    color: "#FFFFFF",
    letterSpacing: "-0.04em",
    display: "flex",
    alignItems: "center",
    textAlign: "center",

    [`@media (max-width: 900px)`]: {
      fontSize: "12.07px",
      lineHeight: "31px",
      letterSpacing: "-0.07em",
    }
  },

  titleArea: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "20px",
    fontStyle: "normal",
    fontWeight: 900,
    letterSpacing: "-0.06em",
    textTransform: "uppercase",
    textAlign: "center",
    fontSize: "77px",
    color: "#FFFFFF",

    [`@media (max-width: 900px)`]: {
      paddingTop: "11.55px",
    }
  },

  titleTop: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "535px",
    lineHeight: "81.53px",
    
    [`@media (max-width: 900px)`]: {
      display: "none",
    },
  },

  titleTopMobile: {
    display: "none",
    
    [`@media (max-width: 900px)`]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "535px",
      lineHeight: "81.53px",
      flexDirection: "column"
    },

    "& > span: nth-of-type(1)": {
      [`@media (max-width: 900px)`]: {
        display: "block",
        width: "180px",
        fontSize: "48px",
        fontWeight: 700,
        lineHeight: "65px",
        letterSpacing: "-0.07em",
      }
    },

    "& > span: nth-of-type(2)": {
      [`@media (max-width: 900px)`]: {
        display: "block",
        fontSize: "48px",
        fontWeight: 700,
        lineHeight: "65px",
        letterSpacing: "-0.07em",
      }
    }
  },

  hookArea: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "30px",
    lineHeight: "21px",
    letterSpacing: "-2px",
    color: "#85B6FF",
    paddingTop: "19px",
    height: "35px",
    columnGap: "19px",

    [`@media (min-width: 900px) and (max-width: 1350px)`]: {
      gap: "20px",
      fontSize: "21px",
      lineHeight: "26px",
      letterSpacing: "-1px",
      height: "auto",
      paddingTop: "21px",
    },

    [`@media (max-width: 900px)`]: {
      display: "none"
    },

    "& > div:nth-of-type(1)": {
      marginLeft: "-190px",
    },

    "& > div:nth-of-type(5)": {
      marginRight: "-190px",
    }
  },

  hookAreaMobile: {
    display: "none",

    [`@media (max-width: 900px)`]: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "19px",
      lineHeight: "21px",
      letterSpacing: "-1px",
      color: "#85B6FF",
      paddingTop: "26px",
      height: "35px",
      columnGap: "20px",
      textAlign: "center",
   },
  },

  hookLeft: {
    fontSize: "20px",
    color: "#85B6FF",
    opacity: 0.5,

    [`@media (max-width: 900px)`]: {
      display: "none",
      visibility: "hidden",
      marginLeft: "-90px"
    }
  },
  
  hookLeftMobile: {
    fontSize: "20px",
    color: "#85B6FF",
    opacity: 0.5,
    display: "none",

    [`@media (max-width: 900px)`]: {
      display: "block",      
      marginLeft: "-120px",
      wordBreak: "keep-all",
    }
  },

  hookMiddle: {
    color: "#43FF4A",

    [`@media (max-width: 900px)`]: {
      display: "none"
    }
  },

  hookMiddleMobile: {
    color: "#43FF4A",
    display: "none",

    [`@media (max-width: 900px)`]: {
      display: "hidden",
      wordBreak: "keep-all",
    }
  },

  hookRight: {
    fontSize: "20px",
    color: "#85B6FF",
    opacity: 0.5,

    [`@media (max-width: 900px)`]: {
      display: "none",
    }
  },

  hookRightMobile: {
    display: "none",

    [`@media (max-width: 900px)`]: {
      display: "block",
      fontSize: "20px",
      color: "#85B6FF",
      opacity: 0.5,
      wordBreak: "keep-all",
      marginRight: "-90px"
    }
  },

  bottomMessageArea: {
    paddingTop: "44.22px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    [`@media (max-width: 900px)`]: {
      paddingTop: "54px",
    },
  },
  
  bottomMessage: {
    width: "454.71px",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    [`@media (max-width: 900px)`]: {
      width: "270px",
    },
    
    "& > img": {
      width:"32.75px",

      [`@media (max-width: 900px)`]: {
        width: "20.75px",
        height: "28.75px",
      },
    },

    "& > div": {
      fontFamily: "NotoSansKR",
      fontStyle: "normal",
      fontWeight: 900,
      fontSize: "28px",
      lineHeight: "37px",
      letterSpacing: "-2px",
      color: "#FFFFFF",

      [`@media (max-width: 900px)`]: {
        fontSize: "16px",
      },
    },
  },

  box: {
    width: "596px",
    height: "70px",
    background: "#FFFFFF",
    borderRadius: "13px",

    [`@media (max-width: 900px)`]: {
      width: "336px"
    }
  },
  
  boxInner: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 52.12px 15px 50px",
    fontFamily: "NotoSansKR",
    fontStyle: "normal",

    [`@media (max-width: 900px)`]: {
      paddingLeft: "29px",
      paddingRight: "6px",
    }
  },

  boxLeft: {
    width: "162px",
    height: "45px",
    lineHeight: "37px",
    color: "#0065FD",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    fontSize: "28px",
    fontWeight: 900,
    letterSpacing: "-2px",

    [`@media (max-width: 900px)`]: {
      fontSize: "20px",
    }
  },
  
  boxRightContainer: {
    width: "191px",
    height: "45px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    color: "#0065FD",

    [`@media (max-width: 900px)`]: {
      width: "169px",
    }
  },

  boxRightLeft: {
    fontSize: "18px",
    letterSpacing: "-1px",
    fontWeight: 700,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    [`@media (max-width: 900px)`]: {
      fontSize: "17px",
    }
  },

  boxRightRight: {
    width: "26px",
    height: "22.75px",
  },

  mainBottom: {
    height: "180px",
    backgroundColor: "#002B7C",
  },

  ticketArea: {
    paddingTop: "30px",
    paddingLeft: "9.375vw",
    paddingRight: "9.463vw",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "31.27px",
    height: "120.24px",

    [`@media (max-width: 1024px)`]: {
        display: "none",
    },
  },

  ticketAreaMobile: {
    display: "none",

    [`@media (max-width: 1024px)`]: {
        paddingTop: "30px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: "120.24px",
    },

    [`@media (max-width: 900px)`]: {
    },
  },

  ticket: {
    width: "368.73px",
    height: "120.24px",
    fontFamily: "NotoSansKR",
    fontStyle: "normal",
    backgroundImage: "url(/image/home/superCourseTicketBackground.png)",
    borderRadius: "9.91px"
  },

  ticketInner: {
    paddingTop: "20px",
    paddingLeft: "30px",
    paddingBottom: "17.24px",
    paddingRight: "auto",
    display: "flex",
    flexDirection: "column",

    [`@media (min-width: 900px) and (max-width: 1350px)`]: {
      paddingTop: "18.21px",
      paddingLeft: "29.13px",

    },

    [`@media (max-width: 900px)`]: {
      paddingTop: "18.21px",
      paddingLeft: "29.13",
    },
  },

  ticketSubTitle: {
    fontWeight: 700,
    fontSize: "12.0239px",
    lineHeight: "20px",
    letterSpacing: "-1.00199px",
    color: "rgba(255, 255, 255, 0.6)",

    [`@media (min-width: 900px) and (max-width: 1350px)`]: {
      fontSize: "10.92px",
      lineHeight: "18px",
      letterSpacing: "-0.91px",
    },

    [`@media (max-width: 900px)`]: {
      fontSize: "10.92px",
      lineHeight: "18px",
      letterSpacing: "-0.91px",
    },
  },

  ticketTitle: {
    fontWeight: 900,
    fontSize: "24.047px",
    lineHeight: "36px",
    letterSpacing: "-0.05em",
    color: "#FFFFFF",

    [`@media (min-width: 900px) and (max-width: 1350px)`]: {
      fontSize: "21.85px",
      lineHeight: "32.77px",
      letterSpacing: "-0.05em",
    },

    [`@media (max-width: 900px)`]: {
      fontSize: "21.85px",
      lineHeight: "32.77px",
      letterSpacing: "-0.05em",
    },
  },

  ticketFooter: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "",
    height: "20px",
    paddingTop: "8.01px",
  },

  ticketFooterLeft: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    width: "auto",
    height: "20px",
    fontSize: "14.03px",
    fontWeight: 700,
    lineHeight: "20px",
    letterSpacing: "-0.05em",
    color: "rgba(255, 255, 255, 0.6)",
    paddingRight: "5.1px",

    [`@media (min-width: 900px) and (max-width: 1350px)`]: {
      fontSize: "12.74px",
      lineHeight: "18px",
      letterSpacing: "-0.05em",
      paddingRight: "4.58px"
    },

    [`@media (max-width: 900px)`]: {
      fontSize: "12.74px",
      lineHeight: "18px",
      letterSpacing: "-0.05em",
      paddingRight: "4.58px"
    },
  },

  ticketFooterRight: {
    width: "16px",
    height: "16px",

    [`@media (min-width: 900px) and (max-width: 1350px)`]: {
      width: "14.57px",
      height: "14.57px",
    },
  
    [`@media (max-width: 900px)`]: {
      width: "14.57px",
      height: "14.57px",

    },
  }
}));

export default useTopStyles;
