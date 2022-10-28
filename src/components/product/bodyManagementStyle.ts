import { createStyles } from '@mantine/core';

const useBodyManagementStyles = createStyles((theme) => ({
  logoTile: {
    marginTop: "233px",
    fontFamily: "NotoSansKR",
    fontStyle: "normal",
    color: "#363636",
    whiteSpace: "nowrap",
    
    height: "562px",
    backgroundImage: "url(/image/product/logoTile.png)",

    [`@media (max-width: 376px)`]: {
      display: "none"
    }
  },
  
  logoTileMobile: {
    display: "none",

    [`@media (max-width: 376px)`]: {
      height: "716.4px",
      fontFamily: "NotoSansKR",
      fontStyle: "normal",
      display: "block",
      backgroundImage: "url(/image/product/logoTileMobile.png)",
    }
  },

  management: {

    [`@media (max-width: 376px)`]: {
      display: "none"
    },

    paddingTop: "190px",
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

  managementMobile: {
    display: "none",

    [`@media (max-width: 376px)`]: {
      display: "block",
      paddingTop: "156px",
      // position: "absolute",
      // top: "6080px",
      color: "#FFFFFF",
      marginLeft: "66px",

      "& > h2": {
        margin: 0,
        fontSize: "18px",
        lineHeight: "25px",
        letterSpacing: "-1.05px",
      },

      "& > h2: nth-of-type(2)" : {
        marginTop: "58px",
        fontWeight: 500,
        fontSize: "12px",
        lineHeight: "18px",
        letterSpacing: "-1px",
      }
    },
  },

  message: {
    position: "absolute",
    top: "6120px",
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
},

  messageMobile: {
    display: "none",

    [`@media (max-width: 376px)`]: {
      width: "375px",
      display: "block",
      paddingTop: "28px",
      textAlign: "center",
  
      "& > h2:nth-of-type(1)" : {
        margin: 0,
        whiteSpace: "nowrap",
        fontWeight: 700,
        fontSize: "23px",
        lineHeight: "32px",
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
        fontSize: "15px",
        lineHeight: "23px",
        letterSpacing: "-1px"    
    },
    }
}

}));

export default useBodyManagementStyles;
