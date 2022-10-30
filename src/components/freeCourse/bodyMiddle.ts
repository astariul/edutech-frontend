import { createStyles } from '@mantine/core';

export const useCardStyle = createStyles(() =>  ({

  main: {
    width: "368px",
    fontFamily: "NotoSansKR",
    fontStyle: "normal",
    letterSpacing: "-1px",
    boxShadow: "0px 10px 24px rgba(0, 0, 0, 0.1)",
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
  },
}));

export const useStyles = createStyles((theme) => ({
  main: {
    width: "1441px",
    margin: "124px auto 154px auto",

    // [`@media (max-width: 376px)`]: {
    //   marginTop: "37px",
    //   height: "564px",
    // }
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
      margin: "0 auto",
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
    }
  },

  cards: {
    marginTop: "69px",
    width: "1168px",
    columnGap: "31px",
    rowGap: "90px",
    flexFlow: "column wrap",
  },

  card: {
    width: "368px",
    rowGap: "27px",
  },

  title: {
    fontWeight: 700,
    lineHeight: "32px",
    fontSize: "26px",
    color: "#363636",
    wordBreak: "break-word",
  },

  
}));
