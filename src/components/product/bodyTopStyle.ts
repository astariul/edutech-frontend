import { createStyles } from '@mantine/core';

const useBodyTopStyles = createStyles((theme) => ({
  main: {
    paddingTop: "64px",
    width: "1441px",
    margin: "0 auto",
    whiteSpace: "nowrap",

    [`@media (max-width: 376px)`]: {
      paddingTop: "45px",
      width: "375px",
    }
  },

  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: 700,
    fontSize: "32px",
    lineHeight: "44px",
    letterSpacing: "-2px",
    fontFamily: "NotoSansKR",
    
    "& > div": {
      width: "1168px",
      alignItems: "flex-start",

      [`@media (max-width: 376px)`]: {
        width: "336px"
      }
    },

  },

  message: {
    color: "#363636",
    fontWeight: 700,
    fontSize: "32px",
    lineHeight: "44px",
    letterSpacing: "-2px",

    [`@media (max-width: 376px)`]: {
      display: "none"
    }
  },

  messageMobile: {
    display: "none",

    [`@media (max-width: 376px)`]: {
      display: "block",
      textAlign: "center",
      fontSize: "23px",
      lineHeight: "32px",
    }
  },

  emphasizer: {
    fontWeight: 700,
    color: "#0094FF"
  },

  hashTag: {
    color: "#000000",
    fontWeight: 700,
    fontSize: "24px",
    lineHeight: "28px",
    letterSpacing: "-1px",

    [`@media (max-width: 376px)`]: {
      letterSpacing: "-1.5px",
      fontSize: "14px",
      lineHeight: "25px",
    }
  },

  featureMessageArea: {
    width: "1168px",
    background: "#F2F2F2",
    marginTop: "39px",

    [`@media (max-width: 376px)`]: {
      display: "none"
    }
  },

  featureMessageAreaMobile: {
    display: "none",

    [`@media (max-width: 376px)`]: {
      display: "flex",
      marginTop: "25px",
      background: "#F2F2F2",
      width: "336px",
      margin: "25px auto",
      justifyContent: "center",
    }
  },
  
  featureMessage: {
    paddingLeft: "49px",
    paddingTop: "49px",
    paddingBottom: "49px",
    width: "859px",
    display: "flex",
    flexDirection: "column",
    rowGap: "26px",
    fontSize: "24px",
    lineHeight: "28px",
    
    "& > li": {
      color: "#626262",
      fontWeight: 500,
      fontSize: "22px",
      lineHeight: "28px",
  
      "& > .emphazier": {
        fontSize: "24px"
      }
    },

    [`@media (max-width: 376px)`]: {
      textAlign: "center",
      paddingLeft: "0",
      paddingTop: "18px",
      paddingBottom: "22px",
      width: "auto",
      rowGap: "0",

      "& > p": {
        color: "#626262",
        fontWeight: 700,
        fontSize: "14px",
        lineHeight: "25px",
      }
    }
  },

  tableSection: {
    marginTop: "78px",
    
    [`@media (max-width: 376px)`]: {
      marginTop: "45px",
      width: "336px"
    },

    // "& > div": {
    //   color: "#363636",
    //   fontWeight: 700,
    //   fontSize: "32px",
    //   lineHeight: "44px",
    //   letterSpacing: "-2px"
    // }
  },

  tableArea: {
    marginTop: "37px",
    marginRight: 0,

    [`@media (max-width: 376px)`]: {
      display: "none"
    }
  },

  tableAreaMobile: {
    display: "none",

    [`@media (max-width: 376px)`]: {
      marginTop: "35px",
      display: "block"
    }
  },

  table: {
    width: "1168px",
    borderCollapse:"collapse",
    borderSpacing:0,
    cellSpacing: 0,

    "& > thead > tr": {
      borderTop: "6px solid #000000",

      display: "flex",
      flexDirection: "row",
    },

    "& > thead > tr > th": {
      padding: 0
    },
    
    "& > thead > tr > th:nth-of-type(1)": {
      display: "flex",
      alignItems: "flex-start",
      width: "318px",
      paddingTop: "78px",
      borderLeft: "1px solid #D6D6D6",
  
      "& > div": {
        paddingLeft: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        color: "#363636",
        fontWeight: 400,
        fontSize: "21px",
        lineHeight: "29px",
        letterSpacing: "-1px",
      },
      
      "& > img": {
        marginTop: "9px",
        paddingLeft: "35px",
        width: "66px",
        height: "42.76px",
      },
    },
    
    "& > thead > tr > th:nth-of-type(2)": {
      borderLeft: "1px solid #D6D6D6",
      paddingTop: "28px",
      width: "423px",
      background: "linear-gradient(180deg, #F7F7F7 0.3%, #EFEFEF 100.72%)",

      "& > div": {
        display: "flex",
        flexDirection: "column",
        color: "#000000",
        letterSpacing: "-1px",
        
        "& > div:nth-of-type(1)": {
          fontSize: "24px",
          lineHeight: "31px",
          fontWeight: 700,
        },

        "& > div:nth-of-type(2)": {
          paddingTop: "16px",
          lineHeight: "30px",
          fontWeight: 500,
          fontSize: "18px"
        },

        "& > div:nth-of-type(3)": {
          fontWeight: 900,
          fontSize: "38px",
          lineHeight: "28px",
          paddingBottom: "9px",
        },
      },
    },
    
    "& > thead > tr > th:nth-of-type(3)": {
      width: "395px",
      height: "204px",
      background: "linear-gradient(180deg, #F7F7F7 0.3%, #EFEFEF 100.72%)",
      borderLeft: "15px solid #000000",
      borderRight: "15px solid #000000",

      "& > div": {
        display: "flex",
        flexDirection: "column",
        color: "#000000",
        letterSpacing: "-1px",
        
        "& > div:nth-of-type(1)": {
          // marginTop: "-1px",
          marginLeft: "-1px",
          width: "397px",
          height: "30px",
          display:"flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          background: "#000000",
          fontWeight: 700,
          fontSize: "14px",
          lineHeight: "15px",
          color: "#FFFFFF",
          letterSpacing: "-0.553476px"
        },
  
        "& > div:nth-of-type(2)": {
          fontSize: "24px",
          lineHeight: "31px",
          fontWeight: 700,
        },
        
        "& > div:nth-of-type(3)": {
          paddingTop: "19px",
          lineHeight: "30px",
          fontWeight: 500,
          fontSize: "18px",

          "& > span": {
            textDecorationLine: "line-through",
          }
        },

        "& > div:nth-of-type(4)": {
          lineHeight: "28px",
          fontWeight: 900,
          fontSize: "38px",
          color: "#0094FF",
          letterSpacing: "-1px",
          paddingBottom: "9px",

        },
      },
    },

    "& > tbody": {
      width: "81.111vw",
      "& > tr": {
        
        display: "flex",
        flexDirection: "row",
        
        // row: 1-4, col: 1
        "& > td: nth-of-type(1)": {
          width: "318px",
          padding: 0,
          borderTop: "1px solid #D6D6D6",
          borderLeft: "1px solid #D6D6D6",
          display: "flex",
          columnGap: "38px",
          fontWeight: 400,
          fontSize: "18px",
          lineHeight: "27px",
        },
        
        // row: 1-4, col: 2
        "& > td: nth-of-type(2)": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "423px",
          padding: 0,
          borderTop: "1px solid #D6D6D6",
          borderLeft: "1px solid #D6D6D6",
          fontWeight: 400,
          fontSize: "18px",
          lineHeight: "27px",
          color: "#C5C5C5",
        },

        // row: 1-4, col: 3
        "& > td: nth-of-type(3)": {
          width: "395px",
          padding: 0,
          borderTop: "1px solid #D6D6D6",
          borderLeft: "15px solid #000000",
          borderRight: "15px solid #000000",
        },        
      },
      

      "& > tr > td": {
        display: "flex",
        flexDirection: "row",
        columnGap: "30px"
      }
    },

    //row: 1
    "& > tbody > tr: nth-of-type(1)": {
      //col: 1
      "& > td: nth-of-type(1)": {
        "& > img": {
          paddingTop: "31px",
          paddingLeft: "36px",
          width: "56px",
          height: "23px",
        },
        
        "& > div": {
          paddingTop: "20px",
          display: "flex",
          flexDirection: "column",
          fontWeight: 400,
          lineHeight: "30px",
          letterSpacing: "-1px",
          
          "& > div: nth-of-type(1)": {
            color: "#0094FF",
            fontSize: "20px",
          },

          "& > div: nth-of-type(2)": {
            color: "#737373",
            fontSize: "12px",
          }
        }
      },

      //col: 3
      "& > td: nth-of-type(3)": {
        color: "#FF0000",
        paddingTop: "18px",
        paddingBottom: "24px",
        fontWeight: 400,
        fontSize: "18px",
        lineHeight: "27px",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      },
    },
    
    // row: 2
    "& > tbody > tr: nth-of-type(2)": {
      //col: 1
      "& > td: nth-of-type(1)": {
        "& > div: nth-of-type(1)": {
          paddingTop: "16px",
          paddingLeft: "41px",
          fontSize: "14px",
          lineHeight: "30px",
          color: "#626262", 
        },
  
        "& > div: nth-of-type(2)": {
          paddingTop: "16px",
          display: "flex",
          flexDirection: "column",
          fontWeight: 400,
          lineHeight: "27px",
          fontSize: "18px",
          letterSpacing: "-1px",
        }
      },
  
      "& > td: nth-of-type(2)": {
        color: "#000000",
      },

      //col: 3
      "& > td: nth-of-type(3)": {
        paddingTop: "18px",
        paddingBottom: "24px",
        fontWeight: 400,
        fontSize: "18px",
        lineHeight: "27px",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      },
    },

    //row: 3
    "& > tbody > tr: nth-of-type(3)": {
      //col: 1
      "& > td: nth-of-type(1)": {
        "& > div: nth-of-type(1)": {
          paddingTop: "16px",
          paddingLeft: "41px",
          fontSize: "14px",
          lineHeight: "30px",
          color: "#626262", 
        },
  
        "& > div: nth-of-type(2)": {
          paddingTop: "16px",
          display: "flex",
          flexDirection: "column",
          fontWeight: 400,
          lineHeight: "27px",
          fontSize: "18px",
          letterSpacing: "-1px",
        }
      },
  
      //col: 3
      "& > td: nth-of-type(3)": {
        paddingTop: "18px",
        paddingBottom: "24px",
        fontWeight: 400,
        fontSize: "18px",
        lineHeight: "27px",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      },
    },

    //row: 4
    "& > tbody > tr: nth-of-type(4)": {
      //col: 1
      borderBottom: "6px solid #000000",

      "& > td: nth-of-type(1)": {
        "& > div: nth-of-type(1)": {
          paddingTop: "45px",
          paddingLeft: "41px",
          fontSize: "14px",
          lineHeight: "30px",
          color: "#626262", 
        },
  
        "& > div: nth-of-type(2)": {
          paddingTop: "45px",
          display: "flex",
          flexDirection: "column",
          fontWeight: 400,
          lineHeight: "27px",
          fontSize: "18px",
          letterSpacing: "-1px",
        }
      },

      //col: 3
      "& > td: nth-of-type(3)": {
        paddingTop: "18px",
        paddingBottom: "24px",
        fontWeight: 400,
        fontSize: "18px",
        lineHeight: "27px",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      },
    },
  },

  checkbox: {
    paddingTop: "28px",
    justifyContent: "center",
    
    [`@media (max-width: 376px)`]: {
      paddingTop: "0",

    },

    "& > label": {
      color: "#626262",
      fontFamily: "NotoSansKR",
      fontWeight: 700,
      fontSize: "20px",
      lineHeight: "32px",
      letterSpacing: "-1px",

      [`@media (max-width: 376px)`]: {
        fontSize: "12px",
        lineHeight: "24px",
      },
    },
  },

  button: {
    marginTop: "33px",
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    width: "568px",
    height: "90px",
    background: "#000000",
    borderRadius: "10px",
    
    [`@media (max-width: 376px)`]: {
      lineHeight: "24px",
      width: "335px",
      height: "60px",
      borderRadius: "12px",

    },

    "& > div": {
      fontFamily: "NotoSansKR",
      fontWeight: 900,
      fontSize: "28px",
      lineHeight: "37px",
      letterSpacing: "-2px",
      marginLeft: "auto",
      marginRight: "auto",

      [`@media (max-width: 376px)`]: {
        fontSize: "19px",
      },
    }
  },
}));

export default useBodyTopStyles;
