import { createStyles } from '@mantine/core';

const useSuperReivewStyles = createStyles((theme) => ({

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
    flexDirection: "row",
    alignItems: "center",
  },
  
  columnFlex: {
    display: "flex",
    flexDirection: "column",
  },

  main: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "1440px",
    width: "90%",
    margin: "88px auto",

    [`@media (max-width: 767px)`]: {
      marginTop: "0px"
    }
  },

  contents: {  
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    maxWidth: "1168px",
    width: "90%",
    margin: "0 auto",

    [`@media (max-width: 767px)`]: {
      maxWidth: "766px",
      margin: "0 auto",
      alignItems: "center",
    }

  },

  category: {
    fontFamily: "AlongSanss2",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "14px",
    lineHeight: "41px",
    letterSpacing: "-0.886023px",
    textTransform: "uppercase",
    color: "#0094FF",

    [`@media (max-width: 767px)`]: {
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

    [`@media (max-width: 767px)`]: {
      display: "none",
    }
  },

  titleMobile: {
    display: "none",

    [`@media (max-width: 767px)`]: {
      display: "block",
      fontFamily: "NotoSansKR",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "23px",
      lineHeight: "32px",
      letterSpacing: "-2px",
    },

    "span": {
      color: "#0094FF",
    },
  },

  cardArea: {
    marginTop: "64px",
    marginLeft: "auto",
    marginRight: "auto",
    width: "1168px",
    columnGap: "32px",

    [`@media (max-width: 767px)`]: {
      marginTop: "32px",
      flexFlow: "nowrap",
    }
  },

  card: {
    width: "568px",
    height: "315px",
    backgroundImage: "url(/image/home/superReviewCard.png)",

    [`@media (max-width: 767px)`]: {
      width: "318px",
      height: "180px",
      backgroundImage: "url(/image/freeCourse/reviewCardMobile.png)",
    }
  },

  cardInner: {
    margin: "32.75px 28px 27px 32.5px",
    width: "510px",
    height: "258px",
    fontFamily: "NotoSansKR",
    fontWeight: 500,
    fontSize: "18px",
    lineHeight: "30px",
    letterSpacing: "-0.994145px",
    color: "#000000",
    justifyContent: "space-between",

    ".fiveStar": {
      "& > img" : {
        width: "142px",
        height: "30px",
      }
    },

    ".content": {
      height: "145px",
    },

    ".who": {
      fontSize: "14px",
      height: "33px"
    },

    [`@media (max-width: 767px)`]: {
      margin: "10px 10px 0px 10px",
      width: "290px",
      height: "150.04px",
      fontSize: "10px",
      lineHeight: "22px",
      letterSpacing: "-0.90px",

      ".fiveStar": {
        "& > img": {
          width: "90px",
          height: "19.01px",
        }
      },

      ".who": {
        fontSize: "10px",
        height: "27px"
      },
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

    [`@media (max-width: 767px)`]: {
      paddingTop: "10.93px",
      paddingBottom: "17.83px",
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

    [`@media (max-width: 767px)`]: {
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

    [`@media (max-width: 767px)`]: {
      gap: "9px",
    }
  },
  
  footerName: {
    width: "auto",
    height: "20.92px",

    [`@media (max-width: 767px)`]: {
      fontSize: "12px",
      lineHeight: "13px",
    }
  },

  footerDescription: {
    width: "auto",
    height: "18.83px",

    [`@media (max-width: 7670px)`]: {
      fontSize: "10px",
      lineHeight: "11px",
      letterSpacing: "-1px",
    }
  }

}));

export default useSuperReivewStyles;
