import { createStyles } from '@mantine/core';


export const useStyles = createStyles((theme) => ({
  main: {
    backgroundColor: "#0094FF",
    height: "786px",

    [`@media (max-width: 767px)`]: {
      height: "881px",
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

  contentsWrapper: {
    width: "1441px",
    margin: "0 auto",
    paddingTop: "67px",

    [`@media (max-width: 767px)`]: {
      width: "375px",
      paddingTop: "49px",
    }
  },

  contents: {
    fontFamily: "NotoSansKR",
    fontStyle: "normal",
    color: "#FFFFFF",
    alignItems: "center",

    [`@media (max-width: 767px)`]: {
      width: "335px",
      margin: "0 auto",

      "& > div": {
        width: "335px",
      }
    }
  },
  
  title: {
    textAlign: "center",
    fontWeight: 700,
    fontSize: "32px",
    lineHeight: "44px",

    "span": {
      color: "#DBFF00",
    },

    [`@media (max-width: 767px)`]: {
      letterSpacing: "-2px",
      fontSize: "23px",
      lineHeight: "32px",
    }
  },

  body: {
    paddingTop: "37px",
    paddingBottom: "67px",
    columnGap: "68px",

    [`@media (max-width: 767px)`]: {
      paddingTop: "27px",
      paddingBottom: "27px",
      flexDirection: "column",
      rowGap: "35.24px",
    }
  },

  ticket: {
    boxShadow: "0px 0px 70px #007DD8",
    width: "599px",
    height: "255px",

    [`@media (max-width: 767px)`]: {
      width: "333px",
      height: "141.76px",
    
      "& > img": {
        width: "333px",
        height: "141.76px",
      }
    }
  },

  description: {
    rowGap: "27px",
    justifyContent: "flex-start",

    [`@media (max-width: 767px)`]: {
      rowGap: "27px",
      width: "335px",
    }
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
    },
  
    [`@media (max-width: 767px)`]: {
      fontSize: "14px",
      lineHeight: "25px",
      
      "div": {
        paddingBottom: "10px"
      },

      "li": {
        fontWeight: 500,
        lineHeight: "23px",
        color: "#FFFFFF",

        "&::marker": {
          fontSize: "10px",
        }
      },
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
    },

    [`@media (max-width: 767px)`]: {
      width: "337px",
      height: "70px",
  
      "& > div > span": {
        fontSize: "18px",
        lineHeight: "37px",
        letterSpacing: "-2px",
      },
    }
  },

  mobile: {
    display: "none",

    [`@media (max-width: 767px)`]: {
      display: "block",
    }
  },

  desktop: {

    [`@media (max-width: 767px)`]: {
      display: "none",
    }
  }
}));