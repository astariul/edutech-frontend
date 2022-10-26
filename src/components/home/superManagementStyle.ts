import { createStyles } from '@mantine/core';

const useSuperManagementStyles = createStyles((theme) => ({

  logoTile: {
    marginTop: "99px",
    fontFamily: "NotoSansKR",
    fontStyle: "normal",
    color: "#363636",
    whiteSpace: "nowrap",
    backgroundColor: "#F2F2F2",
    height: "808px",
    backgroundImage: "url(/image/home/logoTile.png)",

    [`@media (max-width: 375px)`]: {
      display: "none"
    }
  },

  textArea: {
    paddingTop: "128px",
    paddingLeft: "max(166px, 11.528vw)",
    height: "auto",

    [`@media (max-width: 1024px)`]: {
      paddingTop: "46px",
      alignItems: "center",
      textAlign: "center",
      paddingLeft: "5.067vw",
      paddingRight: "5.067vw",
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

    [`@media (max-width: 1024px)`]: {
      alignItems: "center",
      textAlign: "center",
    },

    [`@media (max-width: 850px)`]: {
      alignItems: "center",
      textAlign: "center",
      fontSize: "12px",
    }
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
    height: "auto",

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
    fontFamily: "NotoSansKR",
    fontStyle: "normal",
    fontWeight: 700,
    paddingTop: "26px",
    alignItems: "center",
    textAlign: "center",
    fontSize: "23px",
    lineHeight: "32px",
    letterSpacing: "-2px",

    [`@media (max-width: 850px)`]: {
      display: "block",
    },
  },

  message: {
    position: "absolute",
    paddingTop: "140px",
    paddingLeft: "max(235px, 9.514vw)",
    color: "#FFFFFF",
    
    "& > h2": {
      margin: 0,
      fontWeight: 700,
      fontSize: "28px",
      lineHeight: "38px",
      letterSpacing: "-2px",

      [`@media (max-width: 850px)`]: {
        fontSize: "24px"
      }
    },

    [`@media (max-width: 1024px)`]: {
      paddingTop: "230px",
    },
  
    [`@media (max-width: 850px)`]: {
      paddingTop: "250px",
    },

    [`@media (max-width: 375px)`]: {
      fontSize: "18px",
      lineHeight: "25px",
      paddingTop: "370px",
      paddingLeft: "70px",
      width: "150px",
      color: "#FFFFFF",
    }

  },

  mainMobile: {
    width: "100%",
    height: "auto",
    display: "none",

    [`@media (max-width: 375px)`]: {
      display: "block",
    }
  }

}));

export default useSuperManagementStyles;
