import { createStyles } from '@mantine/core';

const useSuperCommunityStyles = createStyles((theme) => ({
  main: {
    backgroundColor: "#0094FF",
    height: "330px",
    
    [`@media (max-width: 1200px)`]: {
      height: "500px",
    }
  },
  
  content: {
    width: "1168px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "row",
    boxSizing: "border-box",
    paddingTop: "83px",
    gap: "50px",

    [`@media (max-width: 1200px)`]: {
      width: "auto",
      flexDirection: "column",
      paddingTop: "33px",
      gap: "43px",
      paddingLeft: "4vw",
      paddingRight: "4vw",
    }
  },

  contentLeft: {
    display: "flex",
    flexDirection: "column",

    [`@media (max-width: 1200px)`]: {
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
    color: "#FFFFFF",
  },

  title: {
    fontFamily: "NotoSansKR",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "32px",
    lineHeight: "43px",
    letterSpacing: "-2px",
    color: "#FFFFFF",

    [`@media (max-width: 1200px)`]: {
      textAlign: "center",
      fontSize: "23px",
      letterSpacing: "-0.802885px",
    }
  },

  contentRight: {
    marginLeft: "auto",

    [`@media (max-width: 1200px)`]: {
      marginLeft: 0,
    }
  },

  wordBalloons: {
    display: "flex",
    flexDirection: "row",
    gap: "min(23.7px, 1.646vw)",

    [`@media (max-width: 1200px)`]: {
      height: "280px",
      flexWrap: "wrap",
      justifyContent: "space-around",
      alignContent: "space-around",
    },
  },

  wordBalloon: {
    width: "198.48px",
    height: "146.76px",
    position: "relative",
    left: "0%",
    right: "0%",
    top: "0%",
    bottom: "0%",
    backgroundColor: "#FFFFFF",
    borderRadius: "8.38631px 8.38631px 0px 0px",

    [`@media (min-width: 1200px)`]: {
      "&:after" : {
        content:'""',
        position: "absolute",
        bottom: 0,
        left: "95%",
        width: 0,
        height: 0,
        border: "25px solid transparent",
        borderTopColor: "#FFFFFF",
        borderBottom: 0,
        borderRight: 0,
        marginLeft: "-15px",
        marginBottom: "-24px",
      },
    },

    [`@media (max-width: 1200px)`]: {
      width: "161.48px",
      height: "128.86px",
      backgroundColor: "#FFFFFF",
      border: "0.34943px solid #BFBFBF",
      borderRadius: "0",
    },

    [`@media (max-width: 376px)`]: {
      width: "130px",
      height: "110px",
    }
  },

  wordBallonTitle: {
    paddingTop: "17.03px",
    paddingBottom: "auto",
    paddingLeft: "18.51px",
    paddingRight: "22.22px",
    fontFamily: "NotoSansKR",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "17.03px",
    lineHeight: "23px",
    letterSpacing: "-0.740582px",
    color: "#000000",

    [`@media (max-width: 1200px)`]: {
      paddingTop: "17px",
      paddingRight: 0,
      fontSize: "16px",
      lineHeight: "22px",
    },
  
    [`@media (max-width: 376px)`]: {
      fontSize: "14px",
      lineHeight: "18px",
    }
  },

  icon: {
    paddingLeft: "20px",
    paddingTop: "11.03px",

    [`@media (max-width: 1200px)`]: {
      paddingLeft: "20px",
      paddingBottom: "11.03px",
    },

    [`@media (max-width: 376px)`]: {
      width: "28px",
      height: "28px",
    }
  }
}));

export default useSuperCommunityStyles;
