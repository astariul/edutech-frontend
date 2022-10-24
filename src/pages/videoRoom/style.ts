import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  main: {
    marginTop: "115px",
    marginBottom: "188px",
    paddingLeft: "9.375vw",
    paddingRight: "12.500vw",
    fontFamily: "NotoSansKR",
    fontStyle: "normal",
  },

  contents: {
    display: "flex",
    flexDirection: "row",
    columnGap: "32px",
  },

  leftSection: {
    display: "flex",
    flexDirection: "column",
    width: "868px",
  },

  rightSection: {
    display: "flex",
    flexDirection: "column",
    width: "267px",
  },

  videoSection: {
    width: "868px",
    height: "483.32px",
  },

  questionSection: {
    display: "flex",
    flexDirection: "column",
    flexShrink: 0,
    width: "267px",
    background: "#FFFFFF",
    border: "1px solid #E4E4E4",

    "& > div": {
      height: "70px",
      display: "flex",
      alignItems: "center",
      paddingLeft: "20px",
      fontWeight: 700,
      fontSize: "14px",
      lineHeight: "134%",
      letterSpacing: "-0.04em",
      color: "#111111",
    },
    
    "& > div:nth-of-type(2)": {
      display: "flex",
      alignItems: "center",
      columnGap: "14px",
      height: "96px",
      paddingLeft: "14px",
      borderTop: "1px solid #E4E4E4",
      
      "& > img": {
        width: "64px",
        height: "64px",
      },

      "& > div": {
        display: "flex",
        flexDirection: "column",
        rowGap: "4px",
      },
  
      "& > div > #instructorName": {
        fontSize: "11px",
        lineHeight: "134%",
        letterSpacing: "-0.03em",
        color: "#888888",
      }
    },
    
    "& > div:nth-of-type(3)": {
      borderTop: "1px solid #E4E4E4",
      height: "61px",
  
      "& > div > input": {
        padding: 0,
        border: 0,
        fontFamily: "NotoSansKR",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "16px",
        lineHeight: "150%",
        display: "flex",
        alignItems: "center",
        letterSpacing: "-0.05em",
        color: "#969696",
      }
    },

    "& > div:nth-of-type(4)": {
      borderTop: "1px solid #E4E4E4",
      height: "203px",
      
      "& > div > textarea": {
        paddingTop: "14px",
        paddingLeft: "0px",
        paddingRight: "0px",
        width: "227px",
        height: "204px",
        border: 0,
        fontFamily: "NotoSansKR",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "13px",
        lineHeight: "150%",
        letterSpacing: "-0.05em",
        color: "#969696",
      }
    },

    "& > button": {
      height: "49px",
      backgroundColor: "#0094FF",
      border: 0,
    }
  },

  videoTitle: {
    paddingTop: "19.68px",
    display: "flex",
    flexDirection: "column",
    rowGap: "21px",
    lineHeight: "160%",
    letterSpacing: "-0.04em",
    color: "#111111",
    paddingBottom: "38px"
  },

  title: {
    fontWeight: 700,
    fontSize: "20px",
  },

  subtitle: {
    fontWeight: 500,
    fontSize: "16px",
  },

  tableHeader: {
    margin: 0,
    display: "flex",
    flexDirection: "row",
    height: "137px",
    border: 0,
    borderTopWidth: "1px",
    borderTopColor: "#E4E4E4",
    borderTopStyle: "solid",
    borderBottomWidth: "1px",
    borderBottomColor: "#E4E4E4",
    borderBottomStyle: "solid",
    paddingTop: "21px",
    
    "& > img": {
      width: "100px",
      height: "100px"
    }
  },
  
  courseTable: {
    paddingTop: "33px",
    display: "flex",
    flexDirection: "column",
    width: "81.111vw",
  },
  
  courseTitleAndInstructor: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100px",
    
    paddingLeft: "38.29px",
    paddingBottom: "24.56px"
  },
  
  courseTitle: {
    fontWeight: 700,
    fontSize: "19.32px",
    lineHeight: "28.24px",
    letterSpacing: "-0.74px",
    color: "#11142D",
  },
  
  instructor: {
    display: "flex",
    flexDirection: "row",
    paddingTop: "5px",
  },
  
  progressBar: {
    maxWidth: "628px",
    width: "43.611vw",
  },
  
  progressText: {
    display: "flex",
    paddingLeft: "47px",
    alignItems: "flex-end",
    height: "100px",
    color: "#969696",
    lineHeight: "160%",
    letterSpacing: "-0.03em",
    fontWeight: 700,
    fontSize: "11px",
  },
  
  videoList: {
    display: "flex",
    flexDirection: "column",
    paddingTop: "0",
    rowGap: "10px",
  },
  
  courseEpisode: {
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: "15px",
    borderBottomWidth: "0.862062px",
    borderBottomColor: "#E4E4E4",
    borderBottomStyle: "solid",

    "& > div": {
      height: "57px"
    },

    "& > div > div:nth-of-type(2)": {
      paddingLeft: "37px",
    },

    "& > div > div > div:nth-of-type(3)": {
      maxWidth: "628px",
      width: "43.611vw"
    },

    "& > div > div:nth-of-type(3)": {
      paddingLeft: "44px",
    }
  },

  banner: {
    paddingTop: "21px",
    width: "268px",
    height: "296px"
  },

  courseReview: {
    width: "268px",
    display: "felx",
    flexDirection: "column",
    
    "& > div:nth-of-type(1)": {
      paddingLeft: "20px",
      display: "flex",
      alignItems: "center",
      height: "70px",
      fontWeight: 700,
      fontSize: "14px",
      lineHeight: "134%",
      letterSpacing: "-0.04em",
      color: "#111111",
    },
  },

  reviewCard: {
    display: "flex",
    flexDirection: "column",
    background: "#F9F9F9",
    height: "330px",
    border: "1px solid #E8E8E8",
  },

  reviewPerson: {
    display: "flex",
    alignItems: "center",
    background: "#F9F9F9",
    paddingLeft: "20px",
    height: "83px",

    "& > div > div:nth-of-type(2)": {
      rowGap: "7px",
      
      "& > div:nth-of-type(1)": {
        fontWeight: 500,
        color: "#111111",
        lineHeight: "150%",
        fontSize: "16px",
      },

      "& > div:nth-of-type(2)": {
        fontWeight: 500,
        color: "#111111",
        lineHeight: "150%",
      },

    }
  },

  review: {
    paddingTop: "16px",
    paddingBottom: "16px",
    paddingLeft: "19.52px",
    paddingRight: "21px",
    display: "flex",
    height: "175px",
    
    "& > span": {
      fontFamily: "NotoSansKR",
      fontStyle: "normal",
      alignItems: "center",
      fontWeight: 500,
      fontSize: "13px",
      lineHeight: "190%",
      letterSpacing: "-0.05em",
      color: "#111111",
      height: "175px",
    }
  },

  tags: {
    paddingLeft: "19.52px",
    width: "161px",
    display: "flex",
    justifyContent: "space-between",
    fontFamily: "NotoSansKR",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "13px",
    lineHeight: "190%",
    letterSpacing: "-0.05em",
    color: "#969696",
  },

  courseDurationAndPeriod: {
    paddingTop: "84px",
    display: "flex",
    flexDirection: "row",
    columnGap: "51px",
    paddingBottom: "34px"
  },

  pagination: {
    width: "868px",
    paddingTop: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

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
