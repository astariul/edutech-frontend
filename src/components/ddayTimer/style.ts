import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  main: {
    fontFamily: "NotoSansKR",
    fontStyle: "normal",
    whiteSpace: "nowrap",
    background: "linear-gradient(180deg, #1F1F1F 0%, #000000 100%)",
    boxShadow: "0px -8px 20px rgba(0, 0, 0, 0.3)",
    borderRadius: "0px",
    lineHeight: "170%",
    letterSpacing: "0.02em",
    color: "#FFFFFF",
    fontSize: "40px",
    width :"465px",
    height: "83px",
  },

  boxStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(180deg, #4D4D4D 19.27%, #000000 100%)",
    border: "1px solid #000000",
    borderRadius: "6px",
    width: "54px",

    "& > div.timeLeftNumber": {
      height: "65px"
    },

    "& > div.timeLeftNumberTag": {
      fontFamily: "NotoSansKR",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "12px",
      lineHeight: "30px",
      display: "flex",
      alignItems: "center",
      letterSpacing: "-1px",
      color: "#5C5C5C",
      height: "0px",
      paddingBottom: "5px"
    }
  },
  
  boxStyleWithTag: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  contents: {
    display: "flex",
    justifyContent: "space-between"
  },
  
  D: {
    width: "96px",
    columnGap: "7px",

    "& > div: nth-of-type(2)": {
      fontSize: "56.1767px",
      letterSpacing: "0.02em",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingBottom: "10px"
    }
  },

  colon: {
    color: "#FFFFFF",
    fontSize: "40px",
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: "10px",
    width: "21px",
  },

  day: {
    display: "flex",
    width: "auto"
  },

  hour: {
    display: "flex",
  },

  minutes: {
    display: "flex",
  },
}));

export default useStyles;