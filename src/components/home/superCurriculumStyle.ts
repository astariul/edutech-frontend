import { createStyles } from '@mantine/core';

export const useSuperCurriculumStyles = createStyles((theme) => ({
  main: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },

  textArea: {
    paddingTop: "83px",
    paddingLeft: "max(134px, 9.653vw)",
    paddingBottom: "31px",
    height: "auto",

    [`@media (max-width: 1024px)`]: {
      paddingTop: "46px",
      alignItems: "center",
      textAlign: "center",
      paddingLeft: "5.067vw",
      paddingRight: "5.067vw",
    },
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

    [`@media (max-width: 1024px)`]: {
      alignItems: "center",
      textAlign: "center",
    },

    [`@media (max-width: 850px)`]: {
      alignItems: "center",
      textAlign: "center",
      fontSize: "12px",
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
    height: "auto",

    [`@media (max-width: 1024px)`]: {
      paddingTop: "26px",
      paddingLeft: "0px",
      alignItems: "center",
      textAlign: "center",
      wordBreak: "break-word",
      height: "auto"
    },

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
      letterSpacing: "-2px",
    }
  },

  imageTopContainer: {
    height: "90px",
    backgroundColor: "#F2F2F2",
  },
  
  imageTop: {
    paddingTop: "17px",
    paddingBottom: "17.28px",
    width: "100vw",
    height: "55.72px",
    alignItems: "center",

    [`@media (max-width: 1440px)`]: {
      width: "auto",
    }
  },

  imageBottom: {
    marginTop: 0,
    padding: 0,
    width: "100%",
    height: "504px",
    backgroundImage: "url(/image/home/superCurriculumImage2.png)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
      
    [`@media (max-width: 400px)`]: {
      height: "227px",
    },
  
    [`@media (min-width: 400px) and (max-width: 635px)`]: {
      height: "227px",
    },
    
    [`@media (min-width: 635px) and (max-width: 840px)`]: {
      height: "300px",
    },

    [`@media (min-width: 840px) and (max-width: 900px)`]: {
      height: "380px",
    },
  
    [`@media (min-width: 900px) and (max-width: 1150px)`]: {
      height: "444px",
    }
  },

  imageBottomInner:{
    display:"flex",
  },

  imageMessage: {
    paddingTop: "67px",
    paddingLeft: "9.861vw",
    display: "column",
    color: "#FFFFFF",
    fontFamily: "NotoSansKR",
    fontStyle: "normal",
    letterSpacing: "-0.06em",
    textShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
  
    [`@media (max-width: 400px)`]: {
      paddingTop: "32px",
    },
  
    [`@media (min-width: 400px) and (max-width: 635px)`]: {
      paddingTop: "32px",
    },
    
    [`@media (min-width: 635px) and (max-width: 840px)`]: {
      paddingTop: "42px",
    },

    [`@media (min-width: 840px) and (max-width: 900px)`]: {
      paddingTop: "52px",
    },
  
    [`@media (min-width: 900px) and (max-width: 1150px)`]: {
      paddingTop: "62px",
    },
    
    "& > h3": {
      margin: 0,
      fontWeight: 500,
      fontSize: "24px",
      lineHeight: "33px",

      [`@media (max-width: 400px)`]: {
        fontWeight: 400,
        fontSize: "12px",
        lineHeight: "17px",
      },
    
      [`@media (min-width: 400px) and (max-width: 635px)`]: {
        fontWeight: 400,
        fontSize: "13px",
        lineHeight: "17px",
      },
      
      [`@media (min-width: 635px) and (max-width: 840px)`]: {
        fontWeight: 400,
        fontSize: "20px",
        lineHeight: "24px",
      },

      [`@media (min-width: 840px) and (max-width: 900px)`]: {
        fontWeight: 500,
        fontSize: "22px",
        lineHeight: "28px",
      },
    
      [`@media (min-width: 900px) and (max-width: 1150px)`]: {
        fontWeight: 500,
        fontSize: "24px",
        lineHeight: "33px",
      }
    },

    "& > h2": {
      marginTop: "4.65px",
      marginBottom: 0,
      fontWeight: 900,
      fontSize: "65px",
      lineHeight: "74px",

      [`@media (max-width: 400px)`]: {
        fontSize: "26px",
        lineHeight: "30px",
      },
    
      [`@media (min-width: 400px) and (max-width: 635px)`]: {
        fontSize: "26px",
        lineHeight: "30px",
      },
      
      [`@media (min-width: 635px) and (max-width: 840px)`]: {
        fontSize: "30px",
        lineHeight: "34px",
      },

      [`@media (min-width: 840px) and (max-width: 900px)`]: {
        fontSize: "40px",
        lineHeight: "45px",
      },
    
      [`@media (min-width: 900px) and (max-width: 1150px)`]: {
        fontSize: "55px",
        lineHeight: "62px",
      }
    }
  },

  whois: {
    display: "flex",
    marginTop: "27px",

    [`@media (max-width: 900px)`]: {
      marginTop: "20px",
      "& > div > img": {
        width:"22px",
        height: "22px",
      },
      "& > div > div": {
        fontSize: "10px",

        "& > div > img": {
          width:"10.2px",
          height: "10.2px",
        },

        "& > div: nth-of-type(1) > div": {
          lineHeight: "11px",
        },
  
        "& > div: nth-of-type(2)": {
          lineHeight: "10px",
        },
      }
    },
  },

  playButton: {
    display: "flex",
    paddingTop: "191px",
    paddingLeft: "13.667vw",
    alignItems: "center",
    justifyContent: "center",
    width: "123px",
    height: "123px",

    [`@media (max-width: 1200px)`]: {
      display: "none"
    }
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

  cardArea: {
    backgroundColor: "#F2F2F2",
    width: "100vw",
    height: "324px",
  },

  cards: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: "29px",
    paddingLeft: "9.444vw",
    paddingRight: "9.514vw",
    paddingBottom: "37.95px",
    columnGap: "20px",

    [`@media (max-width: 850px)`]: {
      paddingTop: "32px",
      paddingBottom: "30.95px",
      paddingLeft: "5.067vw",
      justifyContent: "space-between",
    }
  },

  card: {
    display: "flex",
    flexDirection: "column",
    width: "auto",
    maxWidth: "268px",
    height: "257.05px",
    backgroundColor: "#FFFFFF",
    border: "0.728261px solid #E8E8E8",

    [`@media (max-width: 850px)`]: {
      minWidth: "268px",
    }

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

    [`@media (max-width: 850px)`]: {
      paddingTop: "11px",
      paddingBottom: "18.05px",
      paddingLeft: "5.333vw",
      paddingRight: "3.989vw",
    }
  },

  cardTitle: {
    fontFamily: "NotoSansKR",
    fontStyle: "normal",
    fontSize: "13px",
    fontWeight: 500,
    lineHeight: "17px",
    letterSpacing: "-1px",
    color: "#363636",
    paddingBottom: "19px",

    [`@media (max-width: 850px)`]: {
      letterSpacing: "-0.73px",
    }
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

    [`@media (max-width: 850px)`]: {
      fontSize: "10px",
      lineHeight: "11px",
      letterSpacing: "-1px",
    }
  }
}));

export default useSuperCurriculumStyles;
