import { createStyles } from '@mantine/core';

const useBodyManagementStyles = createStyles((theme) => ({
  main: {
    paddingLeft: "max(137px, 9.514vw)",
    paddingRight: "max(135px, 9.375vw)",
    fontFamily: "NotoSansKR",
    fontStyle: "normal",
    color: "#363636",
    whiteSpace: "nowrap",
  },

  logoTile: {
    marginTop: "233px",
    fontFamily: "NotoSansKR",
    fontStyle: "normal",
    color: "#363636",
    whiteSpace: "nowrap",
    
    height: "562px",
    backgroundImage: "url(/image/product/logoTile.png)",
  },
  
  management: {
    position: "absolute",
    top: "5380px",
    paddingLeft: "max(235px, 9.514vw)",
    color: "#FFFFFF",
    
    "& > h2": {
      margin: 0
    },
    "& > h2: nth-of-type(2)" : {
      fontWeight: 500,
      fontSize: "20px",
      lineHeight: "38px"
    }
  },

  message: {
    position: "absolute",
    top: "5100px",
    paddingLeft: "max(137px, 9.514vw)",

    "& > h2:nth-of-type(1)" : {
      margin: 0,
      whiteSpace: "nowrap",
      fontWeight: 700,
      fontSize: "32px",
      lineHeight: "44px",
      letterSpacing: "-2px",

      "& > span": {
        color: "#0094FF",
      }
    },

    "& > h2:nth-of-type(2)" : {
      margin: 0,
      marginTop: "7px",
      whiteSpace: "nowrap",
      fontWeight: 700,
      fontSize: "21px",
      lineHeight: "38px",
      letterSpacing: "-1px",    
  },
  

  resume: {
    backgroundColor: "#F2F2F2",
    fontFamily: "NotoSansKR",
    fontStyle: "normal",
    color: "#363636",
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

  image: {
    paddingTop: "57px",
  },
  }

}));

export default useBodyManagementStyles;
