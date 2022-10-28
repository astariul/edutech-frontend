import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  main: {
    fontFamily: "NotoSansKR",
    fontStyle: "normal",
    whiteSpace: "nowrap",
    background: "linear-gradient(180deg, #1F1F1F 0%, #000000 100%)",
    boxShadow: "0px -8px 20px rgba(0, 0, 0, 0.3)",
    borderRadius: "0px",
    height: "100px",

    [`@media (max-width:376px)`]: {
      display: "none"
    }
  },

  contents: {
    width: "1440px",
    height: "100px",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    columnGap: "36px",
  },

  message: {
    letterSpacing: "-1px",
    fontStyle: "normal",
    fontWeight: 900,
    lineHeight: "30px",
    
    "& > h2": {
      fontSize: "30px",
      margin: 0,
      color: "#0094FF",
    }
  },

  paymentButton: {
    background: "linear-gradient(180deg, #FFFFFF 51.04%, #E2E2E2 87.64%)",
    width: "268px",
    height: "88px",

    "& > div > span": {
      fontFamily: "NotoSansKR",
      fontStyle: "normal",
      fontWeight: 900,
      fontSize: "26px",
      lineHeight: "24px",
      color: "#000000",
      letterSpacing: "-1.29577px",
    }
  }
}));

export default useStyles;
