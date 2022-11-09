import { createStyles } from '@mantine/core';

export const useSuperCurriculumStyles = createStyles((theme) => ({
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
    display: "flex",
    flexDirection: "column",
  },

  messageArea: {
    width: "1440px",
    margin: "0 auto",
    paddingTop: "83px",
    paddingBottom: "31px",
    height: "auto",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    "& > div": {
      width: "1168px",
      justifyContent: "center"
    },
    
    [`@media (max-width: 767px)`]: {
      paddingTop: "46px",
      width: "100%",
      margin: "0 auto",
    },
  },

  category: {
    color: "#0094FF",
    fontWeight: 700,
    fontFamily: "AlongSanss2",
    fontStyle: "normal",
    fontSize: "14px",
    letterSpacing: "-0.886023px",
    textTransform: "uppercase",
    lineHeight: "41.35px",

    [`@media (max-width: 767px)`]: {
      alignItems: "center",
      textAlign: "center",
      fontSize: "12px",
    },
  },

  title: {
    paddingTop: "30px",
    paddingLeft: "5px",
    color: "#363636",
    fontSize: "32px",
    fontFamily: "NotoSansKR",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "44px",
    letterSpacing: "-2px",
    height: "auto",

    [`@media (max-width: 767px)`]: {
      display: "none",
    }
  },

  titleMobile: {
    display: "none",

    [`@media (max-width: 767px)`]: {
      display: "block",
      fontFamily: "NotoSansKR",
      fontStyle: "normal",
      fontWeight: 700,
      paddingTop: "26px",
      alignItems: "center",
      textAlign: "center",
      fontSize: "23px",
      lineHeight: "32px",
      letterSpacing: "-2px",
    },

    [`@media (max-width: 376px)`]: {
      whiteSpace: "nowrap",
    }
  },

  imageTopContainer: {
    height: "90px",
    backgroundColor: "#F2F2F2",
  },
  
  imageTop: {
    paddingTop: "17px",
    paddingBottom: "17.28px",
    width: "100%",
    height: "55.72px",
    alignItems: "center",

    [`@media (max-width: 1440px)`]: {
      width: "auto",
    }
  },

  imageBottom: {
    marginTop: 0,
    padding: 0,
    width: "100%",
    height: "654px",
    backgroundImage: "url(/image/home/superCurriculumMentorImage.png)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",

    [`@media (max-width: 767px)`]: {
      // background: "linear-gradient(0deg, #1D1D1D, #1D1D1D), linear-gradient(180deg, #414042 0%, #575D60 100%), url(/image/home/superCurriculumMentorImageMobileN.png)",
      // background: "url(/image/home/superCurriculumMentorImageMobileN.png)",
      // filter: "drop-shadow(-28px 4px 54px rgba(0, 0, 0, 0.25)) drop-shadow(20px 4px 24px rgba(0, 0, 0, 0.45))",
      height: "503px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },

  imageBottomMobile: {
    [`@media (max-width: 767px)`]: {
      maxWidth: "766x",
      margin: "0 auto",
      height: "503px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },

  imageBottomInner:{
    display:"flex",
    width: "1440px",
    margin: "0 auto",

    "& > div": {
      display: "flex",
      width: "1168px",
      margin: "0 auto",
    },

    [`@media (max-width: 767px)`]: {
      maxWidth: "766px",
      width: "90%",
      alignItems: "center",
  
      "& > div": {
        width: "335px",
      }
    },
  },
  
  imageMessage: {
    display: "flex",
    width: "874px",
    height: "654px",
    justifyContent: "center",
    flexDirection: "column",
    color: "#525252",
    fontFamily: "NotoSansKR",
    fontStyle: "normal",
    letterSpacing: "-0.06em",
    textShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",

    "span": {
      color: "#0065FD",
    },

    [`@media (max-width: 767px)`]: {
      height: "503px",

    },

    "& > h2": {
      width: "724px",
      marginTop: 0,
      marginBottom: 0,
      fontWeight: 900,
      fontSize: "60px",
      lineHeight: "69px",
      textShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",

      [`@media (max-width: 767px)`]: {
        fontSize: "22px",
        lineHeight: "29.8px",
        letterSpacing: "-6%"
      }

    }
  },

  whois: {
    display: "flex",
    marginTop: "18px",
    width: "235px",
    height: "50.88px",
  },

  mentorComment: {
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    justifyContent: "center",
    width: "353px",
    marginTop: "120px", 
    marginLeft: "110px",
    fontStyle: "normal",
    textShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
    color: "#FFFFFF",

    "h2": {
      margin: 0,
      fontFamily: 'NotoSansKR',
      fontWeight: 700,
      fontSize: "17px",
      lineHeight: "28px",
      letterSpacing: "-0.04em",
    },

    "h1":{
      margin: 0,
      height: "0px",
      fontFamily: "AlongSanss2",
      fontWeight: 900,
      fontSize: "90px",
      lineHeight: "69px",
      letterSpacing: "-0.06em",
    },

    [`@media (max-width: 767px)`]: {
      marginTop: "50px",
      marginLeft: "0px"

    },

  },

  cardArea: {
    backgroundColor: "#F2F2F2",
    width: "100%",
    height: "420px",
  },
  
  cards: {
    maxWidth: "1202px",
    height: "305px",
    margin: "0 auto",
    marginTop: "46px",
  
    [`@media (max-width: 1054px)`]: {
      display: "none",
      maxWidth: "766px",
      width: "90%",
      marginLeft: "10px",
      columnGap: "10px",
    }
  },

  cardsMobile: {
    display: "none",
  
    [`@media (max-width: 1054px)`]: {
      display: "block",
      maxWidth: "766px",
      width: "90%",
      marginLeft: "10px",
      marginTop: "46px",
      columnGap: "10px",
    }
  },

  card: {
    display: "flex",
    width: "368",
    maxWidth: "368px",
    height: "305px",

    [`@media (max-width: 767px)`]: {
      maxWidth: "368px",
    }

  },

  cardImage: {
    width: "auto",
    height: "162px",
  },

  cardTextArea: {
    paddingTop: "15px",
    paddingBottom: "22.17px",
    paddingLeft: "20px",
    paddingRight: "14.96px",

    [`@media (max-width: 767px)`]: {
      paddingTop: "11px",
      paddingBottom: "18.05px",
      paddingLeft: "5.333vw",
      paddingRight: "3.989vw",
    }
  },

  cardTitle: {
    fontFamily: "NotoSansKR",
    fontStyle: "normal",
    fontSize: "13px",
    fontWeight: 500,
    lineHeight: "17px",
    letterSpacing: "-1px",
    color: "#363636",
    paddingBottom: "19px",

    [`@media (max-width: 767px)`]: {
      letterSpacing: "-0.73px",
    }
  },

  cardFooter: {
    display: "flex",
    flexDirection: "row",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontSize: "12px",
    fontWeight: 500,
    lineHeight: "13px",
    color: "#363636",
  },

  footerName: {
    width: "auto",
    height: "20.92px",
  },

  checkCircleSmall: {
    paddingLeft: "2px",
    width: "11px",
    height: "11px",
  },

  footerDescription: {
    paddingLeft: "8px",
    width: "auto",
    height: "18.83px",

    [`@media (max-width: 767px)`]: {
      fontSize: "10px",
      lineHeight: "11px",
      letterSpacing: "-1px",
    }
  }
}));

export default useSuperCurriculumStyles;
