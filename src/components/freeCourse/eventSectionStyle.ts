import { createStyles } from '@mantine/core';


export const useStyles = createStyles((theme) => ({
  main: {
    backgroundColor: "#0094FF",
    height: "786px",
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

  contentsWrapper: {
    width: "1441px",
    margin: "0 auto",
    paddingTop: "67px",
  },

  contents: {
    fontFamily: "NotoSansKR",
    fontStyle: "normal",
    color: "#FFFFFF",
    alignItems: "center",
  },
  
  title: {
    textAlign: "center",
    fontWeight: 700,
    fontSize: "32px",
    lineHeight: "44px",

    "span": {
      color: "#DBFF00",
    }
  },

  body: {
    paddingTop: "37px",
    paddingBottom: "67px",
    columnGap: "68px",
  },

  ticket: {
    boxShadow: "0px 0px 70px #007DD8",
    width: "599px",
    height: "255px"
  },

  description: {
    rowGap: "27px",
    justifyContent: "flex-start",
  },

  bullet: {
    fontSize: "17px",
    letterSpacing: "-0.99px",
    
    "div": {
      fontWeight: 700,
      lineHeight: "25px",
      color: "#DBFF00"
    },
    "li": {
      fontWeight: 500,
      lineHeight: "33px",
      color: "#FFFFFF",

      "&::marker": {
        fontSize: "10px",
      }
    }
  },

  button: {
    background: "#000000",
    width: "568px",
    height: "90px",

    "& > div > span": {
      color: "#DBFF00",
      fontWeight: 900,
      fontSize: "28px",
      lineHeight: "37px",
      letterSpacing: "-2px",
    },

    "&: hover": {
      background: "#000000"
    }
  }
}));