import { createStyles } from '@mantine/core';

const useSuperManagementStyles = createStyles((theme) => ({

  mobile: {
    display: "none",

    [`@media (max-width: 767px)`]: {
      display: "inline-block"
    }
  },

  desktop: {
    [`@media (max-width: 767px)`]: {
      display: "none"
    }
  },

  rowFlex: {
    display: "flex",
    alignItems: "center",
  },

  columnFlex: {
    display: "flex",
    flexDirection: "column"
  },

  main: {
    marginTop: "59px",
    fontFamily: "NotoSansKR",
    fontStyle: "normal",
    color: "#363636",
    whiteSpace: "nowrap",
    backgroundColor: "#F2F2F2",
    height: "808px",

    [`@media (max-width: 767px)`]: {
      height: "900px",
    }
  },
    
  contents: {
    maxWidth: "1440px",
    width: "90%",
    height: "648px",
    margin: "0 auto",
    paddingTop: "59px",
  },
  
  contentsInner: {
    maxWidth: "1168px",
    width: "90%",
    margin: "0 auto",
    columnGap: "125.91px",

    [`@media (max-width: 767px)`]: {
      maxWidth: "766px",
      margin: "0 auto",
      alignItems: "center",
    }
  },

  leftSection: {
    rowGap: "321px",

    [`@media (max-width: 767px)`]: {
      rowGap: "50px",
      justifyContent: "center",
    }
  },

  rightSection: {

  },

  messageTop: {
    paddingTop: "7px",
    height: "auto",

    [`@media (max-width: 767px)`]: {
      paddingTop: "7px",
      alignItems: "center",
      textAlign: "center",
    },
  },

  messageBottom: {
    fontWeight: 700,
    letterSpacing: "-1px",
    
    "img": {
      width: "67px",
      height: "67px"
    },
        
    "h2": {
      margin: 0,
      fontSize: "16px",
      lineHeight: "27px",

      "span": {
        fontSize: "26px",
        lineHeight: "31px",
        color: "#0094FF",
      },
    },

    [`@media (max-width: 767px)`]: {
      alignItems: "center",

      "img": {
        width: "47px",
        height: "47px"
      },

      "h2": {
        fontSize: "12px",
        lineHeight: "24px",

        "span": {
          fontSize: "22px",
          lineHeight: "31px",
        }
      }
    }
  },

  cardArea: {
    rowGap: "9.11px",
  },

  card: {
    width: "698.94px",
    height: "72.9px",
    backgroundColor: "#FFFFFF",
    letterSpacing: "-0.911268px",
    border: "0.911268px solid #E8E8E8",
    borderRadius: "9.11268px",
    alignItems: "center",

    "#card_title": {
      width: "245.13px",
      marginLeft: "56.13px",

      "h2": {
        margin: 0,
        fontWeight: 700,
        fontSize: "16px",
        lineHeight: "107px",
      },
    },

    "#card_content": {
      width: "282.49px",
      height: "46.47px",
      justifyContent: "center",

      "li": {
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "22px",
      },
      "li::marker": {
        fontSize: "10px",
      }
    },

    "span": {
      fontFamily: "Gotham Black",
      fontStyle: "italic",
      fontWeight: 900,
      fontSize: "118.465px",
      lineHeight: "79px",
      color: "#F2F2F2",
    },

    [`@media (max-width: 767px)`]: {
      width: "450px",
      height: "52.9px",
      alignItems: "center",

      "#card_title": {
        width: "100px",
        marginLeft: "30px",

        "h2": {
          margin: 0,
          fontSize: "12px",
        },
      },

      "#card_content": {
        width: "200px",
        height: "46.47px",

        "li": {
          fontSize: "12px",
        },
        "li::marker": {
          fontSize: "10px",
        }
      },

      "span": {
        fontSize: "80px",
        lineHeight: "79px",
      },
    },

    [`@media (max-width: 470px)`]: {
      width: "380px",
      height: "46px",

      "#card_title": {
        width: "65px",
        marginLeft: "10px",

        "h2": {
          margin: 0,
          fontSize: "10px",
        },
      },

      "#card_content": {
        width: "200px",

        "li": {
          fontSize: "10px",
        },
        "li::marker": {
          fontSize: "10px",
        }
      },

      "span": {
        fontSize: "80px",
      },
    }
  },

  logoTile: {
    marginTop: "99px",
    fontFamily: "NotoSansKR",
    fontStyle: "normal",
    color: "#363636",
    whiteSpace: "nowrap",
    backgroundColor: "#F2F2F2",
    height: "808px",
    backgroundImage: "url(/image/home/logoTile.png)",

    [`@media (max-width: 376px)`]: {
      display: "none"
    }
  },

  textArea: {
    paddingTop: "128px",
    paddingLeft: "max(166px, 11.528vw)",
    height: "auto",

    [`@media (max-width: 767px)`]: {
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

    // [`@media (max-width: 1024px)`]: {
    //   alignItems: "center",
    //   textAlign: "center",
    // },

    [`@media (max-width: 767px)`]: {
      alignItems: "center",
      textAlign: "center",
      fontSize: "12px",
    }
  },

  title: {
    paddingTop: "30px",
    color: "#363636",
    fontSize: "32px",
    fontFamily: "NotoSansKR",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "44px",
    letterSpacing: "-2px",
    height: "auto",

    // [`@media (max-width: 1024px)`]: {
    //   paddingTop: "26px",
    //   paddingLeft: "0px",
      // alignItems: "center",
      // textAlign: "center",
      // wordBreak: "break-word",
      // height: "auto"
    // },

    [`@media (max-width: 767px)`]: {
      fontSize: "23px",
      lineHeight: "32px",
      letterSpacing: "-0.8px",
    }
  },

  titleMobile: {
    display: "none",
    fontFamily: "NotoSansKR",
    fontStyle: "normal",
    fontWeight: 700,
    paddingTop: "26px",
    alignItems: "center",
    textAlign: "center",
    fontSize: "23px",
    lineHeight: "32px",
    letterSpacing: "-2px",

    [`@media (max-width: 767px)`]: {
      display: "block",
    },
  },

  message: {
    position: "absolute",
    paddingTop: "140px",
    paddingLeft: "max(235px, 9.514vw)",
    color: "#FFFFFF",
    
    "& > h2": {
      margin: 0,
      fontWeight: 700,
      fontSize: "28px",
      lineHeight: "38px",
      letterSpacing: "-2px",

      [`@media (max-width: 767px)`]: {
        fontSize: "24px"
      }
    },

    // [`@media (max-width: 1024px)`]: {
    //   paddingTop: "230px",
    // },
  
    [`@media (max-width: 767px)`]: {
      paddingTop: "250px",
    },

    [`@media (max-width: 376px)`]: {
      fontSize: "18px",
      lineHeight: "25px",
      paddingTop: "370px",
      paddingLeft: "70px",
      width: "150px",
      color: "#FFFFFF",
    }
  },

  mainMobile: {
    width: "100%",
    height: "auto",
    display: "none",

    [`@media (max-width: 376px)`]: {
      display: "block",
    }
  }

}));

export default useSuperManagementStyles;
