import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  main: {
    position: "relative",
    backgroundImage: "url(/image/freeCourse/mainBackground.png)",
    backgroundSize: "cover",
    height: "599px",

    [`@media (max-width: 900px)`]: {
      marginTop: "0px",
      height: "564px",
    }
  },

  columnFlex: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  rowFlex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },

  contents: {
    fontFamily: "NotoSansKR",
    paddingTop: "141px",

    [`@media (max-width: 900px)`]: {
      maxWidth: "375px",
      width: "90%",
      margin: "0 auto",
      paddingTop: "183px"
    }
  },

  
  TopMessageSmall: {
    textAlign: "center",
    fontWeight: 700,
    fontSize: "24px",
    lineHeight: "35px",
    letterSpacing: "-0.04em",
    color: "#FFFFFF",
    
    span: {
    },

    [`@media (max-width: 900px)`]: {
      display: "none",
    }
  },

  TopMessageSmallMobile: {
    display: "none",
    
    [`@media (max-width: 900px)`]: {
      display: "block",
      textAlign: "center",
      fontWeight: 700,
      color: "#FFFFFF",
      fontSize: "16px",
      lineHeight: "25px",
      letterSpacing: "-0.07em",
    }
  },

  TopMessageLarge: {
    paddingTop: "43px",
    textAlign: "center",
    color: "#FFFFFF",
    
    [`@media (max-width: 900px)`]: {
      paddingTop: "13px",
    },

    "h2": {
      margin: 0,
      letterSpacing: "-0.06em",
      fontWeight: 900,
      fontSize: "77.0008px",
      lineHeight: "82px",
      
      [`@media (max-width: 900px)`]: {
        margin: 0,
        fontSize: "42px",
        lineHeight: "65px",
        letterSpacing: "-0.07em",
      }
    },

    "& > h2": {
      marginLeft: "-12px"
    },

    "span": {
      margin: 0,
      padding: 0,
      fontWeight: 900,
      textAlign: "center",
      color: "#DBFF00",
      fontSize: "128px",
      lineHeight: "37px",

      [`@media (max-width: 900px)`]: {
        fontSize: "90px",
        lineHeight: "37px",
        letterSpacing: "-2px",
      }
    }
  },

  remark: {
    marginTop: "113.86px",
    color: "#FFFFFF",
    opacity: 0.5,
    lineHeight: "37px",
    fontSize: "12px",
    fontWeight: 400,
  },

}));

export default useStyles;