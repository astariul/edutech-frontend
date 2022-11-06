import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme, _, getRef) => ({
  topSection: {
    position: "relative",
    backgroundImage: "url(/image/resume/resumeMain.png)",
    backgroundSize: "cover",
    height: "599px ",
    // height: "50vh",
    //To-do 배경 이미지 사이즈 좀더 조절 하면 좋을것 같음
    width: "100vw",

    [`@media (max-width: 900px)`]: {
      marginTop: "0px",
      height: "564px",
    },
  },
  mainMessage: {
    fontFamily: "Noto Snas KR",
    fontSize: "77px",
    fontWeight: "bolder",
    lineHeight: "90px",
    letterSpacing: "-0.06em",
    paddingTop: "270px",
    alignItems: "center",
    textAlign: "center",
    color: "white",
  },
  card: {
    width: "368px",
    [`@media (max-width: 400px)`]: {
      fontSize: "16px",
      width: "260px",
    },
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

    lineHeight: "29px",
    // letterSpacing: "-0.06em",
    // paddingTop: "270px",

    alignItems: "center",
    textAlign: "center",
    // color: "white",
    [`@media (min-width: 401px)`]: {
      fontSize: "18px",
      width: "312px",
    },

    [`@media (max-width: 400px)`]: {
      fontSize: "16px",
      width: "240px",
    },
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
