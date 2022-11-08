import { createStyles } from "@mantine/core";

const useSuperResumeStyles = createStyles((theme) => ({
  mobile: {
    display: "none",

    [`@media (max-width: 767px)`]: {
      display: "inline-block",
    },
  },

  desktop: {
    [`@media (max-width: 767px)`]: {
      display: "none",
    },
  },

  main: {
    display: "flex",
    flexDirection: "column",
  },

  contents: {
    paddingTop: "71px",
    width: "1440px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    "& > div": {
      width: "1168px",
    },

    [`@media (max-width: 767px)`]: {
      paddingTop: "46px",
      margin: "0 auto",
      maxWidth: "766px",
      width: "90%",
      alignItems: "center",
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

    [`@media (max-width: 767px)`]: {
      alignItems: "center",
      textAlign: "center",
      fontSize: "12px",
      letterSpacing: "-0.886023px",
    },
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
    height: "92px",

    [`@media (max-width: 767px)`]: {
      display: "none",
    },
  },

  titleMobile: {
    display: "none",

    [`@media (max-width: 767px)`]: {
      display: "block",
      fontFamily: "NotoSansKR",
      fontStyle: "normal",
      fontWeight: 700,
      paddingTop: "26px",
      alignItems: "center",
      textAlign: "center",
      fontSize: "23px",
      lineHeight: "32px",
      letterSpacing: "-0.8px",
    },

    [`@media (max-width: 376px)`]: {
      whiteSpace: "nowrap",
    },
  },

  cardArea: {
    display: "flex",
    flexDirection: "row",
    paddingTop: "55px",
    columnGap: "32px",
    fontFamily: "NotoSansKR",
    color: "#FFFFFF",
    letterSpacing: "-1px",
    alignItems: "center",

    [`@media (max-width: 767px)`]: {
      flexDirection: "column",
      justifyContent: "center",
      paddingTop: "28px",

      "& > img": {
        transform: "rotate(90deg)",
      },
    },
  },

  caret: {
    width: "32.77px",
    height: "44.96px",
  },

  cardLeft: {
    img: {
      width: "298.58px",
      height: "311px",
    },
  },

  cardLeftMobile: {
    display: "none",

    [`@media (max-width: 767px)`]: {
      display: "block",
      width: "336px",
      height: "268px",
    },
  },

  cardMiddle: {
    img: {
      width: "367px",
      height: "289px",
    },
  },

  cardMiddleMobile: {
    display: "none",

    [`@media (max-width: 767px)`]: {
      display: "block",
      width: "336px",
      height: "268px",
    },
  },

  cardRight: {
    img: {
      width: "289px",
      height: "289px",
    },
  },

  cardRightMobile: {
    display: "none",

    [`@media (max-width: 767px)`]: {
      display: "block",
      width: "336px",
      height: "327px",
    },
  },

  bottomTitle: {
    fontWeight: 700,
    fontSize: "23px",
    lineHeight: "37px",
    display: "flex",
    alignItems: "center",
    letterSpacing: "-2px",
    color: "#363636",
    fontFamily: "NotoSansKR",

    span: {
      color: "#109BFF",
    },

    [`@media (max-width: 767px)`]: {
      justifyContent: "center",
      fontSize: "18px",
      textAlign: "center",
    },
  },
}));

export default useSuperResumeStyles;
