import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme, {messageColor}: {messageColor: string}) => ({

  mobile: {
    display: "none",

    [`@media (max-width: 767px)`]: {
      display: "flex",
    },
  },

  desktop: {
    [`@media (max-width: 767px)`]: {
      display: "none",
    },
  },

  main: {
    position: "fixed",
    bottom : 0,
    width: "100%",
    fontFamily: "NotoSansKR",
    fontStyle: "normal",
    whiteSpace: "nowrap",
    background: "linear-gradient(180deg, #1F1F1F 0%, #000000 100%)",
    boxShadow: "0px -8px 20px rgba(0, 0, 0, 0.3)",
    borderRadius: "0px",
    height: "100px",

    [`@media (max-width:767px)`]: {
      height: "80px"
    }

  },
  
  contents: {
    maxWidth: "1440px",
    width: "100%",
    height: "100px",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    columnGap: "30px",

    [`@media (max-width:767px)`]: {
      maxWidth: "766px",
      width: "90%",
      margin: "0 auto",
      columnGap: "17px",
      height: "80px",
    }
  },

  leftSection: {
    display: "flex",
    flexDirection: "column",
    width: "207px",
    height: "37px",
    justifyContent: "center",
    // rowGap: "8px",
    // marginBottom: "21px",
  },

  message: {
    letterSpacing: "-1px",
    fontStyle: "normal",
    fontWeight: 900,
    lineHeight: "30px",
    
    "& > h2": {
      fontSize: "30px",
      margin: 0,
      color: messageColor,
    },

    [`@media (max-width:767px)`]: {
      fontWeight: 500,
      lineHeight: "8x",
      letterSpacing: "-0.26px",
  
      "& > h2": {
        fontSize: "17px",
        margin: 0,
        color: messageColor,
      },

    }

  },

  paymentButton: {
    background: "linear-gradient(180deg, #FFFFFF 51.04%, #E2E2E2 87.64%)",
    width: "268px",
    height: "80px",

    "& > div > span": {
      fontFamily: "NotoSansKR",
      fontStyle: "normal",
      fontWeight: 900,
      fontSize: "26px",
      lineHeight: "24px",
      color: "#000000",
      letterSpacing: "-1.29577px",
    },

    [`@media (max-width: 767px)`]: {
      borderRadius: "1.68137px",
      width: "107px",
      height: "50px",
      paddingLeft: "11.89px",
      paddingRight: "11.89px",
  
      "& > div > span": {
        fontSize: "14px",
        lineHeight: "6px",
        letterSpacing: "-1.34px",
      },
    }
  }
}));

export default useStyles;
