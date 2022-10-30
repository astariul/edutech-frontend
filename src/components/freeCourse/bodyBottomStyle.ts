import { createStyles } from '@mantine/core';


export const useStyles = createStyles((theme) => ({
  reviewMessage: {
    width: "1441px",
    margin: "154px auto 39px auto",

    // [`@media (max-width: 376px)`]: {
    //   marginTop: "37px",
    //   height: "564px",
    // }
  },

  mentorMessage: {
    width: "1441px",
    margin: "124px auto 65.74px auto",

    // [`@media (max-width: 376px)`]: {
    //   marginTop: "37px",
    //   height: "564px",
    // }
  },

  columnFlex: {
    display: "flex",
    flexDirection: "column",
  },

  rowFlex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },

  contents: {
    fontFamily: "NotoSansKR",
    width: "1168px",
    margin: "0 auto",

    [`@media (max-width: 376px)`]: {
      width: "375px",
      margin: "0 auto",
    }
  },

  messageSmall: {
    textAlign: "center",
    fontWeight: 800,
    fontSize: "22px",
    lineHeight: "28px",
    letterSpacing: "-1px",
    color: "#626262",

    "& > span": {
      color: "#0094FF",
    }
  },

  messageLarge: {
    textAlign: "center",
    fontWeight: 700,
    fontSize: "32px",
    lineHeight: "44px",
    letterSpacing: "-0.04em",
    color: "#363636",

    "& > span": {
      color: "#0094FF",
    }
  },

  reviewSection: {
    backgroundColor: "#F2F2F2",
    height: "681px",
  },

  review: {
    width: "1440px",
    marginLeft: "auto",
    marginRight: "auto",
  },

  cards: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "1168px",
    height: "580px",
    flexFlow: "column wrap",
    columnGap: "32px",
    rowGap: "20px",
  },

  card: {
    width: "368px",
    height: "280px",
    backgroundImage: "url(/image/freeCourse/reviewCard.png)",
  },

  cardInner: {
    margin: "32.75px 28px 27px 32.5px",
    width: "310px",
    height: "224px",
    fontFamily: "NotoSansKR",
    fontWeight: 500,
    fontSize: "18px",
    lineHeight: "30px",
    letterSpacing: "-0.994145px",
    color: "#000000",
    justifyContent: "space-between",

    ".fiveStar": {
      width: "142px",
      height: "30px",
    },

    ".content": {
      height: "89px",
    },

    ".who": {
      fontSize: "14px",
      height: "33px"
    },
  },

  mentor: {
    backgroundImage: "url(/image/freeCourse/mentorBackground.png)",
    width: "100%",
    height: "384.88px",
  },
}));

