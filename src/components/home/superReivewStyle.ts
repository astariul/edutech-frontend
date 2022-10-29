import { createStyles } from '@mantine/core';

const useSuperReivewStyles = createStyles((theme) => ({

  main: {
    width: "1440px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",

    [`@media (max-width: 850px)`]: {
      width: "100%",
    }
  },

  contents: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    "& > div": {
      width: "1168px",
      alignItems: "flex-start",
    },

  },

  category: {
    paddingTop: "137px",
    fontFamily: "AlongSanss2",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "14px",
    lineHeight: "41px",
    letterSpacing: "-0.886023px",
    textTransform: "uppercase",
    color: "#0094FF",

    [`@media (max-width: 1024px)`]: {
      alignItems: "center",
      textAlign: "center",
    },

    [`@media (max-width: 850px)`]: {
      alignItems: "center",
      textAlign: "center",
      paddingTop: "31.6px",
      fontSize: "12px",
    }
  },

  title: {
    paddingTop: "30px",
    fontFamily: "NotoSansKR",
    fontStyle: "normal",
    fontSize: "32px",
    fontWeight: 700,
    lineHeight: "43px",
    letterSpacing: "-2px",
    color: "#363636",

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
      paddingTop: "26.08px",
      alignItems: "center",
      textAlign: "center",
      fontSize: "23px",
      lineHeight: "32px",
      letterSpacing: "-2px",
    }
  },

  cardArea: {

    [`@media (max-width: 750px)`]: {
      maxWidth: "500px",
    },

    [`@media (max-width: 400px)`]: {
      maxWidth: "300px",
    }

  },

  cards: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: "53px",
    paddingBottom: "67px",
    columnGap: "19.95px",

    [`@media (max-width: 850px)`]: {
      paddingTop: "36.98px",
      paddingLeft: "5.607vw",
      alignItems: "flex-start",
      justifyContent: "space-between",
    }
  },

  card: {
    display: "flex",
    flexDirection: "column",
    width: "auto",
    maxWidth: "368px",
    height: "332px",
    backgroundColor: "#FFFFFF",
    border: "1px solid #E8E8E8",

    [`@media (max-width: 850px)`]: {
      width: "270px",
      minWidth: "268.05px",
      height: "241.83px",
    }
  },

  cardImage: {
    width: "auto",
    height: "208px",
  },

  cardTextArea: {
    paddingTop: "15px",
    paddingBottom: "22.17px",
    paddingLeft: "25px",
    paddingRight: "23px",

    [`@media (max-width: 850px)`]: {
      paddingTop: "10.93px",
      paddingBottom: "17.83px",
      paddingLeft: "4.800vw",
      paddingRight: "4.467vw",
    }
  },

  cardTitle: {
    fontFamily: "NotoSansKR",
    fontStyle: "normal",
    fontSize: "18px",
    fontWeight: 500,
    lineHeight: "24px",
    letterSpacing: "-1px",
    color: "#363636",
    paddingBottom: "19px",

    [`@media (max-width: 850px)`]: {
      fontSize: "13px",
      lineHeight: "17px",
      letterSpacing: "-0.728389px",
    }
  },

  cardFooter: {
    display: "flex",
    flexDirection: "row",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontSize: "14.3669px",
    fontWeight: 500,
    lineHeight: "20px",
    color: "#363636",
    gap: "10px",

    [`@media (max-width: 850px)`]: {
      gap: "9px",
    }
  },
  
  footerName: {
    width: "auto",
    height: "20.92px",

    [`@media (max-width: 850px)`]: {
      fontSize: "12px",
      lineHeight: "13px",
    }
  },

  footerDescription: {
    width: "auto",
    height: "18.83px",

    [`@media (max-width: 850px)`]: {
      fontSize: "10px",
      lineHeight: "11px",
      letterSpacing: "-1px",
    }
  }

}));

export default useSuperReivewStyles;
