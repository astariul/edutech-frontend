import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  main: {
    marginTop: "106px",
    marginBottom: "106px",
    paddingLeft: "9.375vw",
    paddingRight: "9.375vw",
    fontFamily: "NotoSansKR",
    fontStyle: "normal",

    // "@media screen and (max-width: 900px)": {
    //   marginTop: "200px",
    // }
  },

  contents: {
    display: "flex",
    flexDirection: "column",
  },

  title: {
    width: "auto",
    height: "43px",
    fontWeight: 600,
    fontSize: "26px",
    lineHeight: "43px",
    letterSpacing: "-1.5px",
    color: "#272727",
  },

  headerSection: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: "35px",
    height: "58px"
  },

  initialCircle: {
    width: "50px",
    height: "50px",
    paddingRight: "18px",
  },

  message: {
    width: "438px",
    fontWeight: 400,
    fontSize: "20px",
    lineHeight: "29.2px",
    letterSpacing: "-0.03em",
    color: "#000000",
  },

  buttonGroupRows: {
    width: "514px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: "auto",
    gap: "5px",

    "& > button": {
      height: "42px",
      paddingLeft: "24px",
    },

    "& > button > div": {
      justifyContent: "space-between"
    }
  },

  button: {
    width: "168px",
    color: "#333333",
    background: "#FFFFFF",
    border: "1px solid #E8E8E8",
    borderRadius: 0,

    "&:hover": {
      background: "#FFFFFF",
    },
  },

  tabSection: {
    fontWeight: 700,
    fontSize: "18px",
    lineHeight: "26px",
    letterSpacing: "-0.03em",
    color: "#BDBDBD",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",      
    paddingTop: "57px",
    width: "402px",
    height: "26px",

    "& > div": {
      columnGap: "43px",
      display: "flex",
      flexDirection: "row",
    },

    "& > div:last-child > div:last-child": {
      display: "none"
    }
    
  },
  
  tabTitle: {
    cursor: "pointer"
  },
  
  activeTabTitle: {
    "&": {
      color: "#272727",
    }
  },
  
  tableHeaderSection: {
    paddingTop: "33px",
    display: "flex",
    flexDirection: "column",
    width: "81.111vw",
  },

  tableHeader: {
    margin: 0,
    display: "flex",
    flexDirection: "row",
    height: "168px",
    border: 0,
    borderTopWidth: "5px",
    borderTopColor: "#040404",
    borderTopStyle: "solid",
    borderBottomWidth: "1px",
    borderBottomColor: "#E4E4E4",
    borderBottomStyle: "solid",

    "& > img": {
      width: "168px",
      height: "168px"
    }
  },

  courseTitleAndInstructor: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "32.222vw",

    paddingTop: "15px",
    paddingLeft: "2.5vw",
    paddingBottom: "21.17px"
  },

  courseTitle: {
    fontWeight: 700,
    fontSize: "26px",
    lineHeight: "38px",
    letterSpacing: "-1px",
    color: "#11142D",
  },

  instructor: {
    display: "flex",
    flexDirection: "row",
    paddingTop: "5px",
  },

  courseDurationAndPeriod: {
    paddingTop: "84px",
    display: "flex",
    flexDirection: "row",
    columnGap: "51px",
    paddingBottom: "34px"
  },

  keyValueTable: {
    display: "flex",
    flexDirection: "column",
    height: "50px",
    rowGap: "15px"
  },

  keyName: {
    fontWeight: 700,
    fontSize: "13px",
    lineHeight: "160%",
    letterSpacing: "-0.05em",
    color: "#333333",
  },

  value: {
    fontWeight: 500,
    fontSize: "13px",
    lineHeight: "160%",
    letterSpacing: "-0.05em",
    color: "#969696",
  },

  buttonGroupColumns: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "auto",
    paddingTop: "5px",
    paddingLeft: "54px",
    width: "168px",
    rowGap: "5px",

    "& > button": {
      height: "41px",
    },

    "& > button > div > span": {
      fontFamily: "NotoSansKR",
      fontWeight: 500,
      fontSize: "12px",
      lineHeight: "160%",
      letterSpacing: "-0.03em",
      color: "#333333",
    },
  },

  // instructorDescription: {
  //   "& > div:nth-child(2) > div:nth-child(2)": {
  //     color: "#11142D"
  //   }
  // },

  videoList: {
    display: "flex",
    flexDirection: "column",
    paddingTop: "18px",
    rowGap: "14px",
  },

  video: {
    display: "flex",
    justifyItems: "space-between"
  },

  latestDateAndBookmark: {
    display: "flex",
    alignItems: "flex-end",
    columnGap: "23px",
    marginLeft: "auto",
  },
  
  bookMark: {
    marginTop: "auto",
    marginBottom: "auto",
    width: "0",
    height: "20px",
    border: "10px solid #0094FF",
    backgroundColor: "#0094FF",
    borderTop: 0,
    borderBottom: "10px solid #FFFFFF",
    cursor: "pointer",
  },

  pagination: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "39px",

    "& > div": {
      gap: 0
    },

    "& > div > button": {
      fontFamily: "NotoSansKR",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "11px",
      lineHeight: "160%",
      padding: 0,
    },

    "& > div > button.mantine-Pagination-active": {
      backgroundColor: "#B5B5B5",
    }
  },

}));

export default useStyles;
