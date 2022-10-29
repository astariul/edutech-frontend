import { createStyles } from '@mantine/core';

const useBodyFeatureStyles = createStyles((theme) => ({
  main: {
    marginTop: "45.11px",
    fontFamily: "NotoSansKR",
    fontStyle: "normal",
    color: "#363636",
    whiteSpace: "nowrap",
    backgroundColor: "#F2F2F2",
    
    [`@media (max-width: 376px)`]: {
      paddingTop: "0px",
      width: "375px",
    },
  },

  contents: {
    
    width: "1441px",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    fontFamily: "NotoSansKR",
    fontStyle: "normal",
    color: "#363636",
    
    [`@media (max-width: 376px)`]: {
      display: "none",
    },

    "& > div": {      
      width: "1168px",

      "& > div": {
        alignItems: "flex-start",
      }
    },
    
  },

  contentsMobile: {
    display: "none",

    [`@media (max-width: 376px)`]: {
      width: "335px",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      fontFamily: "NotoSansKR",
      fontStyle: "normal",
      color: "#363636",
    
      "& > div": {      
        width: "335px",
      },

      "& > div.withoutSideBlank": {
        width: "375.5px",
      }
    },
  },

  message: {
    paddingTop: "88px",
    paddingBottom: "48px",
    
    "& > h2" : {
      margin: 0,
      whiteSpace: "nowrap",
      fontWeight: 700,
      fontSize: "32px",
      lineHeight: "44px",
      letterSpacing: "-2px",

      "& > span": {
        color: "#0094FF",
      }
    }
  },

  super: {
    paddingTop: "45.11px",
    display: "flex",
    flexDirection: "row",
    columnGap: "34px",

    "& > div > h2 > span": {
      color: "#0094FF",
    },

    "& > div > img": {
      width: "28px",
      height: "31.99px",
    },

    "& > div > h2": {  
      margin: 0,
      fontWeight: 700,
      fontSize: "26px",
      lineHeight: "32px",
      letterSpacing: "-1px",
      color: "#363636",
    },

    "& > div: nth-of-type(1)": {
      width: "66px",
      height: "28px",
      fontFamily: "AlongSanss2",
      fontWeight: 800,
      fontSize: "20.4836px",
      lineHeight: "23px",
      letterSpacing: "-0.731557px",
      color: "#363636",
      borderBottom: "4px solid #363636",
    },

    "& > div: nth-of-type(2)": {
      display: "flex",
      justifyContent: "flex-start",
      fontFamily: "NotoSansKR",
      fontWeight: 700,
      fontSize: "26px",
      lineHeight: "32px",
      letterSpacing: "-1px",
    }
  },

  superMobile: {
    display: "none",
    
    [`@media (max-width: 376px)`]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      rowGap: "14.88px",

      "& > div.superTagMobile": {
        display: "block",
        width: "46px",
        fontFamily: "NotoSansKR",
        fontWeight: 800,
        fontSize: "14.27px",
        lineHeight: "16px",
        letterSpacing: "-0.51px",
        color: "#363636",
        borderBottom: "2.79px solid #363636",

      },
      "& > div > h2 > span": {
        color: "#0094FF",
      },
      
      
      "& > div.messageMobile": {
        display: "flex",
        flexDirection: "column",
        
        "& > div": {
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        },
        
        "& > div > h2 > span": {
          color: "#0094FF",
        },

        "& > div > img": {
          height: "16.97px",
        },

        "& > div > h2": { 
          display: "block",
          margin: 0,
          fontFamily: "NotoSansKR",
          fontWeight: 700,
          fontSize: "18px",
          lineHeight: "27px",
          letterSpacing: "-1px",
          color: "#363636",
        }
      },
      
      "& > div > h2": { 
          textAlign: "center", 
          display: "block",
          margin: 0,
          fontFamily: "NotoSansKR",
          fontWeight: 700,
          fontSize: "18px",
          lineHeight: "27px",
          letterSpacing: "-1px",
          color: "#363636",
        }
    },
  },

  image: {
    marginTop: "20px",
    marginBottom: "20px",
  },

  whiteBackground: {
    [`@media (max-width: 376px)`]: {
      background: "#FFFFFF"
    }
  }

}));

export default useBodyFeatureStyles;
