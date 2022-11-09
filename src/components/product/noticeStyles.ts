import { createStyles } from '@mantine/core';

const useNoticStyles = createStyles((theme) => ({

  main: {
    maxWidth: "1440px",
    width: "90%",
    margin: "60px auto",
    backgroundColor: "#FFFFFF",
    
    [`@media (max-width: 767px)`]: {
      maxWidth: "766px",
      width: "90%",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "45px",
    },
  },
  
  contents: {
    maxWidth: "1168px",
    width: "90%",
    margin: "0 auto",
    fontFamily: 'NotoSansKR',
    fontStyle: "normal",
    fontWeight: 700,
    letterSpacing: "-0.03em",

    [`@media (max-width: 767px)`]: {
      maxWidth: "766px",
      width: "90%",
      margin: "0 auto"
    },

  },
  
  headers: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: "32px",
    lineHeight: "46px",
    borderBottom: "5px solid #363636",

    [`@media (max-width: 767px)`]: {
      fontSize: "23px",
      lineHeight: "33px",
    },
  },

}));

export default useNoticStyles;
