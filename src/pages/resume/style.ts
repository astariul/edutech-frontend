import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme, _, getRef) => ({
  bgSection: {
    position: "relative",

    backgroundSize: "cover",

    [`@media (min-width: 481px)`]: {
      backgroundImage: "url(/image/resume/resumeBG.png)",
      height: "599px ",
      // height: "50vh",
      //To-do 배경 이미지 사이즈 좀더 조절 하면 좋을것 같음
      width: "100vw",
    },

    [`@media (max-width: 480px)`]: {
      backgroundImage: "url(/image/resume/resumeBGMobile.png)",
      marginTop: "0px",
      height: "564px",
    },
  },

  mainMessage: {
    fontFamily: "Noto Snas KR",

    fontWeight: "bolder",
    lineHeight: "90px",
    letterSpacing: "-0.06em",

    alignItems: "center",
    textAlign: "center",
    color: "white",
    [`@media (min-width: 1024 px)`]: {
      fontSize: "77px",
      paddingTop: "270px",
    },
    [`@media (min-width: 501px) and (max-width: 1023px)`]: {
      fontSize: "48px",
      paddingTop: "220px",
    },
    [`@media (min-width: 401px) and (max-width: 500px)`]: {
      fontSize: "33px",
      paddingTop: "200px",
    },
    [`@media (max-width: 400px)`]: {
      fontSize: "28px",
      paddingTop: "170px",
    },
  },
  card: {
    width: "368px",
  },

  cardTitle: {
    fontFamily: "Noto Snas KR",
    fontSize: "32px",
    lineHeight: "41px",
    fontWeight: "bolder",
    // letterSpacing: "-0.06em",
    // paddingTop: "270px",
    alignItems: "center",
    textAlign: "center",
    // color: "white",
  },
  cardBody: {
    fontFamily: "Noto Snas KR",
    fontSize: "18px",
    lineHeight: "29px",
    // letterSpacing: "-0.06em",
    // paddingTop: "270px",
    width: "312px",
    alignItems: "center",
    textAlign: "center",
    // color: "white",
  },
  cardIcon: {
    // position: "absolute",
    width: "50px",
    height: "50px",
    margin: "auto",
    display: "block",
    // left: "294px",
    // top: "565px",
  },
}));
