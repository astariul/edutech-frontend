import { createStyles } from '@mantine/core';

export const useCardStyle = createStyles(() =>  ({

  main: {
    width: "368px",
    fontFamily: "NotoSansKR",
    fontStyle: "normal",
    letterSpacing: "-1px",
    boxShadow: "0px 10px 24px rgba(0, 0, 0, 0.1)",

    [`@media (max-width: 376px)`]: {
      width: "318px",
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

  cardImage: {
    width: "368px",
    height: "208.12px",

    [`@media (max-width: 376px)`]: {
      width: "318px",
      height: "179.88px",

      "& > img": {
        width: "318px",
        height: "179.88px"
      }
    }
  },

  cardBody: {

    "& > div.titleArea": {
      margin: "17.88px 18.77px 0px 29.02px",
      height: "125.88px",
  
      "& > div.bodyTitle": {
        fontWeight: 700,
        fontSize: "18px",
        lineHeight: "24px",
        letterSpacing: "-0.99px",
        color: "#000000"
      },
  
      "& > div.bodyTag": {
        fontWeight: 500,
        fontSize: "14px",
        lineHeight: "20px",
        letterSpacing: "-0.05em",
        color: "#000000"
      },
    },

    "& > div.courseMeta": {
      height: "39px",
      borderTop: "0.946622px solid #E2E2E2",
      borderBottom: "0.946622px solid #E2E2E2",
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "20px",
      color: "#363636",
      display: "flex",
      alignItems: "center",

      "div.durationAndStudent": {
        paddingLeft: "29.67px",
        width: "301px",
        height: "26.91px",     
        columnGap: "36.67px",

        "img": {
          width: "16.67px",
          height: "16.67px",
        },
  
        "div.duration": {
          columnGap: "6.67px",
          width: "120px",
        },

        "div.student": {
          columnGap: "6.67px",
          width: "146px",
        }
      }
    },

    "& > div.recommendation": {
      marginTop: "11px",
      paddingLeft: "28.02px",
      height: "138px",
      fontSize: "12px",
      lineHeight: "20px",
      letterSpacing: "-0.95px",
      color: "#000000",
      borderBottom: "0.946622px solid #E2E2E2",

      "div": {
        fontWeight: 700,
      },

      "li": {
        fontWeight: 500,
      },

      "li::marker": {
        fontSize: "8px",
      }
    },

    "& > div.priceArea": {
      margin: "8px 24px 23px 24px",
      height: "137px",
      rowGap: "19px",

      "& > div.price":{

        "& > div: nth-of-type(1)": {
          fontWeight: 700,
          fontSize: "12px",
          lineHeight: "20px",
          letterSpacing: "-0.95px",
          color: "#000000",
          paddingRight: "11.38px",
        },
  
        "& > div.origin": {
          fontWeight: 500,
          fontSize: "12px",
          lineHeight: "15px",
          letterSpacing: "-0.52px",
          color: "#000000",
          textDecorationLine: "line-through",
          paddingRight: "9px"
        },
  
        "& > div.discounted": {
          fontWeight: 900,
          fontSize: "22px",
          lineHeight: "27px",
          letterSpacing: "-0.95px",
          color: "#0094FF",
        },
      },

      "& > button": {
        backgroundColor: "#000000",
        width: "320px",
        height: "60px",

        "& > div >span": {
          fontFamily: "NotoSansKR",
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "16px",
          lineHeight: "37px",
          letterSpacing: "-1px",
          color: "#FFFFFF",
        }
      },
    },

    [`@media (max-width: 376px)`]: {
      "& > div.titleArea": {
        margin: "13.12px 16.22px 0px 25.08px",
        height: "117.12px",
        rowGap: "2.15px",

        "& > div.bodyTitle": {
          fontWeight: 700,
          fontSize: "16px",
          lineHeight: "22px",
          letterSpacing: "-0.94px",
          color: "#000000"
        },
    
        "& > div.bodyTag": {
          fontWeight: 500,
          fontSize: "13px",
          lineHeight: "19px",
          letterSpacing: "-0.05em",
          color: "#000000"
        },
      },

      "& > div.courseMeta": {
        fontSize: "12px",
        lineHeight: "17px",

        "div.durationAndStudent": {
          paddingLeft: "26.44px",
          width: "301px",
          height: "39px",     
          columnGap: "43.67px",

          "img": {
            width: "14.41px",
            height: "14.41px",
          },
    
          "div.duration": {
            columnGap: "5.76px",
            width: "103.72px",
          },

          "div.student": {
            columnGap: "5.71px",
            width: "125.6px",
          }
        }
      },

      "& > div.recommendation": {
        height: "128px",
      },

      "& > div.priceArea": {
        margin: "8px 20.75px 0px 20.75px",
        height: "122.22px",
        rowGap: "18.26px",

      "& > div.price":{

        "& > div: nth-of-type(1)": {
          color: "#000000",
          paddingRight: "17.38px",
        },
  
        "& > div.origin": {
          paddingRight: "3px"
        },
      },

      "& > button": {
        width: "276.58px",
        height: "51.86px",

        "& > div >span": {
          lineHeight: "35px",
        }
      },
      }
    },

  },
}));

export const useStyles = createStyles((theme) => ({
  main: {
    width: "1441px",
    margin: "124px auto 154px auto",

    [`@media (max-width: 376px)`]: {
      width: "375px",
      marginTop: "53px",
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
    fontFamily: "NotoSansKR",
    width: "1168px",
    margin: "0 auto",

    [`@media (max-width: 376px)`]: {

      width: "375px",
      alignItems: "center",

      "& > div": {
        width: "335px",
      }
    }
  },

  messageSmall: {
    textAlign: "center",
    fontWeight: 800,
    fontSize: "22px",
    lineHeight: "28px",
    letterSpacing: "-1px",
    color: "#626262",

    "& > span": {
      color: "#0094FF",
    }
  },

  messageLarge: {
    textAlign: "center",
    fontWeight: 700,
    fontSize: "32px",
    lineHeight: "44px",
    letterSpacing: "-0.04em",
    color: "#363636",

    "& > span": {
      color: "#0094FF",
    },

    [`@media (max-width: 376px)`]: {
      fontSize: "23px",
      lineHeight: "32px",
      letterSpacing: "-2px",
    }
  },

  cards: {
    marginTop: "69px",
    width: "1168px",
    columnGap: "31px",
    rowGap: "90px",
    flexFlow: "column wrap",

    [`@media (max-width: 376px)`]: {
      marginTop: "47px",
      width: "318px",
      columnGap: "9px",
      rowGap: 0,
      flexFlow: "nowrap",
    }
  },

  card: {
    width: "368px",
    rowGap: "27px",

    [`@media (max-width: 376px)`]: {
      width: "318px",
      alignItems: "center",
      justifyContent: "center",
    }
  },

  title: {
    fontWeight: 700,
    lineHeight: "32px",
    fontSize: "26px",
    color: "#363636",
    wordBreak: "break-word",

    [`@media (max-width: 376px)`]: {      
      textAlign: "center",
      fontSize: "18px",
      lineHeight: "27px",
    }
  },

  mobile: {
    display: "none",

    [`@media (max-width: 376px)`]: {
      display: "block",
    }
  },

  desktop: {

    [`@media (max-width: 376px)`]: {
      display: "none",
    }
  }
}));
