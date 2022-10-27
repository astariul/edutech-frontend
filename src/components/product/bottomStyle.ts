import { createStyles } from '@mantine/core';

const useBottomStyles = createStyles((theme) => ({
  main: {
    fontFamily: "NotoSansKR",
    fontStyle: "normal",
    whiteSpace: "nowrap",
    background: "#F2F2F2",
  },
  
  contents: {
    width: "1440px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "80px",

    "& > div": {
      width: "1168px",
      alignItems: "flex-start",
    },
  },

  message: {
    backgroundImage: "url(/image/product/supercodingband.png)",
    backgroundSize: "cover",
    marginTop: "100px",
    width: "100%",
    height: "250px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",

    "& > div": { 
      width: "1168px",
      margin: "0 auto",
    },
    
    "& > div > h2" : {
      fontFamily: "NotoSansKR",
      letterSpacing: "-2px",
      color: "#FFFFFF",
      whiteSpace: "nowrap",
      textAlign: "center",
      lineHeight: "50px",
      fontWeight: 700,
      fontSize: "40px",
      margin: 0,
    }
  },

  emphasizer: {
    fontWeight: 700,
    color: "#0094FF"
  },

  tableSection: {
    marginTop: "78px",

    "& > div": {
      color: "#363636",
      fontWeight: 700,
      fontSize: "32px",
      lineHeight: "44px",
      letterSpacing: "-2px"
    }
  },

  tableArea: {
    marginTop: "37px",
    marginRight: 0,
  },

  table: {
    width: "1168px",
    borderCollapse:"collapse",
    borderSpacing:0,
    cellSpacing: 0,
    background: "#FFFFFF",

    "& > thead > tr": {
      borderTop: "6px solid #000000",

      display: "flex",
      flexDirection: "row",
    },

    "& > thead > tr > th": {
      padding: 0
    },
    
    // row:0 col:1
    "& > thead > tr > th:nth-of-type(1)": {
      display: "flex",
      alignItems: "flex-end",
      width: "318px",
      height: "198px",
      marginTop: "-15px",
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
        marginBottom: "5px",
        paddingLeft: "35px",
        width: "66px",
        height: "42.76px",
      },
    },
    
    // row:0 col:2
    "& > thead > tr > th:nth-of-type(2)": {
      borderLeft: "1px solid #D6D6D6",
      width: "423px",
      height: "198px",
      background: "linear-gradient(180deg, #F7F7F7 0.3%, #EFEFEF 100.72%)",

      "& > div": {
        display: "flex",
        flexDirection: "column",
        color: "#000000",
        letterSpacing: "-1px",
        paddingTop: "30px",

        "& > div:nth-of-type(1)": {
          fontSize: "24px",
          lineHeight: "31px",
          fontWeight: 700,
        },

        "& > div:nth-of-type(2)": {
          backgroundColor: "#000000",
          color: "#FFFFFF",
          marginTop: "19px",
          paddingTop: "12px",
          paddingBottom: "18px",

          "& > div: nth-of-type(1)": {
            lineHeight: "30px",
            fontWeight: 500,
            fontSize: "18px",
          },

          "& > div:nth-of-type(2)": {
            fontWeight: 900,
            fontSize: "38px",
            lineHeight: "28px",
          },
        },

      },
    },
    
    // row:0 col:3
    "& > thead > tr > th:nth-of-type(3)": {
      width: "425px",
      height: "198px",
      background: "linear-gradient(180deg, #F7F7F7 0.3%, #EFEFEF 100.72%)",
      borderLeft: "1px solid #D6D6D6",
      borderRight: "1px solid #D6D6D6",

      "& > div": {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        color: "#000000",
        letterSpacing: "-1px",

        "& > div:nth-of-type(1)": {
          width: "425px",
          height: "30px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          background: "#00CD6B",
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
          backgroundColor: "#000000",
          marginTop: "19px",
          paddingTop: "12px",
          paddingBottom: "18px",

          "& > div:nth-of-type(1)": {
            lineHeight: "30px",
            fontWeight: 500,
            fontSize: "18px",
            color: "#FFFFFF",
  
            "& > span": {
              textDecorationLine: "line-through",
            }
          },

          "& > div:nth-of-type(2)": {
            lineHeight: "28px",
            fontWeight: 900,
            fontSize: "38px",
            color: "#0094FF",
            letterSpacing: "-1px",
          },
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
          width: "425px",
          padding: 0,
          borderTop: "1px solid #D6D6D6",
          borderRight: "1px solid #D6D6D6",
          borderLeft: "1px solid #D6D6D6",
          
          // borderLeft: "15px solid #000000",
          // borderRight: "15px solid #000000",
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

    "& > label": {
      color: "#626262",
      fontFamily: "NotoSansKR",
      fontWeight: 700,
      fontSize: "20px",
      lineHeight: "32px",
      letterSpacing: "-1px"
    }
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
    
    "& > div": {
      fontFamily: "NotoSansKR",
      fontWeight: 900,
      fontSize: "28px",
      lineHeight: "37px",
      letterSpacing: "-2px",
      marginLeft: "auto",
      marginRight: "auto"
    }
  },

}));

export default useBottomStyles;
