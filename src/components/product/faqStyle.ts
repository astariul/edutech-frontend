import { createStyles } from '@mantine/core';

export const useFAQStyles = createStyles((theme) => ({
  main: {
    width: "1440px",
    margin: "92px auto",
    backgroundColor: "#FFFFFF",
    
    [`@media (max-width: 767px)`]: {
      marginTop: "45px",
      width: "375px",
    },
  },

  table: {
    width: "1168px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto",
  
    [`@media (max-width: 767px)`]: {
      width: "336px",
      margin: "0 auto"
    },
  },
}));


export const useTransitionTableStyle = createStyles((theme) => ({

  main: {
    width: "100%",
    fontFamily: 'NotoSansKR',
    fontStyle: "normal",
    fontWeight: 700,
    letterSpacing: "-0.03em",
  },
  
  headers: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: "32px",
    lineHeight: "46px",
    borderBottom: "5px solid #363636",

    [`@media (max-width: 376px)`]: {
      fontSize: "23px",
      lineHeight: "33px",
    },
  },

  rows: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  
  row: {
    width: "100%",
    maxWidth: "1168px",
    display: "flex",
    flexDirection: "column",
    fontSize: "18px",
    lineHeight: "160%",
    borderBottom: "1px solid #E4E4E4",
    padding: "0",
    margin: 0,
    color: "#121212",

    [`@media (max-width: 376px)`]: {
      fontSize: "14px",
      maxWidth: "336px"
    },

  },

  transitioned: {
    padding: "16px 32px 23px 32px",
    fontSize: "14px",
    lineHeight: "165%",
    fontWeight: 500,
    letterSpacing: "-0.03em",
    color: "#333333",
    borderTop: "1px solid #E4E4E4",

    [`@media (max-width: 376px)`]: {
      padding: "16px 0px 22px 0px",
      fontSize: "12px",
      lineHeight: "165%",
      fontWeight: 500,
      letterSpacing: "-0.03em",
      color: "#333333",
      borderTop: "1px solid #E4E4E4",
    },
  },

  arrow: {
    width: "34px",
    height: "34px",
  },

  title: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "26px 30px 19px 30px",

    [`@media (max-width: 376px)`]: {
      padding: "26px 0px",
    }
  }
}));

