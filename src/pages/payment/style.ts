import { createStyles } from "@mantine/core";

const useStyles = createStyles(() => ({

  mobile: {
    display: "none",

    [`@media (max-width: 767px)`]: {
      display: "inline-block"
    }
  },

  desktop: {
    [`@media (max-width: 767px)`]: {
      display: "none"
    }
  },

  main: {
    margin: "106px auto",
    width: "1440px",
    fontFamily: "NotoSansKR",
    fontStyle: "normal",
    
    [`@media (max-width: 767px)`]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "16px" 
    }
  },
  
  rowFlex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  
  columnFlex: {
    display: "flex",
    flexDirection: "column",
  },
  
  contents: {
    margin: "0 auto",
    flexDirection: "column",
    width: "1168px",
    display: "flex",

    "hr": {
      color: "#E4E4E4",
    },

    [`@media (max-width: 767px)`]: {
      width: "766px",
      // width: "calc(100% - (100%-766px))",
      // margin: 0,
      alignItems: "center",
      marginLeft: "calc(100% - (100%-766px))",

      "section": {
        width: "339px"
      }
    }
  },

  topSection: {
    rowGap: "40px",
    paddingBottom: "49px",
    borderBottom: "1px solid #E4E4E4",

    [`@media (max-width: 767px)`]: {
      height: "220px",
      paddingBottom: 0,
      borderBottom: 0,
      alignItems: "center",
    }
  },

  bottomSection: {
    paddingTop: "49px",
    alignItems: "flex-start",
    columnGap: "34.93px",
  
    [`@media (max-width: 767px)`]: {
      paddingTop: "28px",
      paddingBottom: 0,
      borderBottom: 0,
      alignItems: "center",
      justifyContent: "center",
    }
  },

  bottomLeftSection: {
    width: "765.01px",
    rowGap: "43px",

    ".top": {
      rowGap: "23px",
    },

    ".bottom": {
      rowGap: "29px",
    },

    [`@media (max-width: 767px)`]: {
      width: "339px",
      paddingTop: "27px",

      ".bottom": {
        backgroundColor: "#F5F5F5",
        width: "339px",
        height: "200px"
      },
    }
  },

  bottomRightSection: {
    width: "368px",
    height: "460px",

    [`@media (max-width: 767px)`]: {
      width: "339px",
      height: "auto",
      paddingBottom: 0,
      paddingTop: "28px",
      borderBottom: 0,
      alignItems: "center",
      borderTop: "6px solid #F5F5F5",
    }
  },

  pageTitle: {
    width: "92px",
    height: "43px",

    "h2": {
      margin: 0,
      fontWeight: 600,
      fontSize: "26px",
      lineHeight: "43px",
      letterSpacing: "-1.5px",
      color: "#373737",
    },

    [`@media (max-width: 767px)`]: {
      width: "63px",
      height: "25px",

      "h2": {
        fontSize: "17px",
        lineHeight: "25px",
        fontWeight: 700
      }
    }
  },

  mobileTitle: {
    display: "none",
    
    [`@media (max-width: 767px)`]: {
      width: "100%",
      justifyContent: "flex-end",
      display: "flex"
    }
  },

  sectionTitle: {
    justifyContent: "space-between",
    letterSpacing: "-0.03em",

    "h2": {
      margin: 0,
      fontWeight:  700,
      fontSize: "18px",
      lineHeight: "26px",
      color: "#373737"
    },

    "div": {
      fontWeight: 500,
      fontSize: "13px",
      lineHeight: "21px",
      color: "#111111",
    },

    [`@media (max-width: 767px)`]: {
      justifyContent: "flex-start",
      marginRight: "auto",
    }
  },

  product: {
    width: "936px",
    height: "185px",

    [`@media (max-width: 767px)`]: {
      width: "339px",
      height: "287px",
      flexDirection: "column",
      alignItems: "center"
    }

  },

  checkerArea: {
    width: "75px",
  },

  checker: {
    ".mantine-Checkbox-inner": {
      width: "18px",
      height: "18px",

      "input:checked": {
        backgroundColor: "#0094FF",
        borderColor: "#0094FF"
      },
    }
  },

  image: {
    width: "368px",
    height: "185px"
  },

  information: {
    rowGap: "12px",
    paddingLeft: "32px",

    [`@media (max-width: 767px)`]: {
      paddingLeft: 0,
      width: "339px"
    }
  },

  tags: {
    width: "auto",
    height: "24px",
    columnGap: "9px"
  },

  tag: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "13px",
    lineHeight: "18px",
    color: "#FFFFFF",
    width: "72px",
    height: "24px",

    [`@media (max-width: 767px)`]: {
      width: "40px",
    }
  },

  courseTitle: {
    width: "468px",
    height: "76px",

    "h2": {
      margin: 0,
      fontWeight: 700,
      fontSize: "26px",
      lineHeight: "38px",
      letterSpacing: "-1px",
      color: "#11142D",
    },

    [`@media (max-width: 767px)`]: {
      width: "339px",
      height: "auto",

      "h2": {
        fontSize: "15px",
        lineHeight: "22.5px",
        letterSpacing: "-0.03em",
        color: "#000000",
      },
    }
  },

  instructor: {
    width: "auto",
    height: "50px",

    "& > div": {
      justifyContent: "flex-start"
    }
  },

  methodBoxArea: {
    columnGap: "17px",
    rowGap: "9px",

    [`@media (max-width: 767px)`]: {
      justifyContent: "flex-start",
      // columnGap: "11px",
      flexFlow: "row wrap",
    }
  },

  methodBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "140px",
    height: "50px",
    border: "1px solid #E4E4E4",
    fontSize: "13px",
    lineHeight: "160%",

    [`@media (max-width: 767px)`]: {
      width: "156px",
      padding: 0
    }
  },

  activeMethod: {
    border: "3px solid #0094FF"
  },

  aggrements: {
    [`@media (max-width: 767px)`]: {
      width: "335px",
      margin: "15px auto 35px 20px",
    }
  },

  notice: {
    width: "768px",
    height: "201px",
    border: "1px solid #E8E8E8",
    
    "div[data-orientation='vertical'] .mantine-ScrollArea-scrollbar": {
      border: "1px solid #E8E8E8",
      backgroundColor: "#FAFAFA",
      height: "201px"
    },

    ".mantine-ScrollArea-thumb": {
      backgroundColor: "#C5C5C5",
      borderRadius: "4px"
    },

    "#content": {
      width: "730px",
      height: "176px",
      padding: "13px 18px 12px 20px",
      fontWeight: 400,
      fontSize: "12px",
      letterSpacing: "-0.05em",
      lineHeight: "180%",
      color: "#888888",
  
      "span": {
        fontWeight: 700,
  
      }
    },

    [`@media (max-width: 767px)`]: {
      border: 0,
      width: "315px",
      height: "46px",
      // margin: "15px 0px 14px 0px",
      justifyContent: "space-between",
      borderBottom: "1px solid #DBDBDB",

      "div": {
        // marginLeft: "20px",
        fontWeight: 700,
        fontSize: "12px",
        lineHeight: "17px",
        color: "#999999",
      },

      "img": {
        marginRight: "35px",
      }
    }
  },

  priceTable: {
    marginTop: "26px",
    width: "368px",
    height: "228px",
    border: "1px solid #E8E8E8",

    [`@media (max-width: 767px)`]: {
      width: "339px",
      borderBottom: "6px solid #F5F5F5"
    }
  },

  tableInner: {
    margin: "24px 18px 17px 19px",
    rowGap: "10px",
  },

  row: {
    justifyContent: "space-between"
  },

  bold: {
    fontWeight: 500,
    fontSize: "15px",
    lineHeight: "160%",
    letterSpacing: "-0.03em",
    color: "#333333",
  },

  thin: {
    fontWeight: 500,
    fontSize: "13px",
    lineHeight: "160%",
    letterSpacing: "-0.03em",
    color: "#888888",

    [`@media (max-width: 767px)`]: {
      fontSize: "14px",
      lineHeight: "160%",
      color: "#999999",
    }
  },

  total: {
    backgroundColor: "#F7F7F7",
    fontWeight: 700,
    fontSize: "18px",
    lineHeight: "160%",
    letterSpacing: "-0.03em",
    color: "#0094FF",
    padding: "20px 17px 21px 19px",
  },
  
  buttonArea: {
    marginTop: "14px",
    border: "1px solid #E8E8E8",
    padding: "21px 19px 19px 17px",
    rowGap: "18px"
  },

  agreementArea: {
    rowGap: "16px",
  },

  agreement: {
    color: "#111111",
    justifyContent: "flex-start",
    columnGap: "8px",

    [`@media (max-width: 767px)`]: {
      paddingTop: "23px",
      columnGap: "10px"
    }
  },

  show: {
    marginLeft: "67px",
    color: "#969696",
  },

  paymentButton: {
    width: "329px",
    height: "50px",
    backgroundColor: "#0094FF",

    "span": {
      fontFamily: "NotoSansKR",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "-0.05em",
      color: "#FFFFFF",
    },

    [`@media (max-width: 767px)`]: {
      width: "339px",
      height: "84px",
    }
  },

  closeButton: {
    marginLeft: "124px" 
  },

  modal: {
    ".mantine-Modal-modal" :{
      paddingTop: "23px",
      paddingLeft: "44px",
      paddingRight: "40px",
      paddingBottom: "27px",
      width: "600px",
      height: "460px",

      "& > div.mantine-Modal-header": {
        marginTop: "-68px",
        marginBottom: "38px",
        marginRight: "-38px",
        
        "button": {
          color: "#FFFFFF",
          "svg" : {
            width: "24px",
            height: "24px",
          }
        }
      },

      "#modalContents": {
      }
    }
  },

  paymentResultTable: {
    
  }

}));

export default useStyles;
