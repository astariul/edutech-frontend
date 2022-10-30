import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  main: {
    width: "1441px",
    margin: "66px auto",

    // [`@media (max-width: 376px)`]: {
    //   marginTop: "37px",
    //   height: "564px",
    // }
  },

  columnFlex: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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

  tagArea: {
    background: "#F2F2F2",
    width: "1168px",
    height: "428px",
    marginTop: "31px",
    marginBottom: "84px",
  },
  
  tagAreaInner: {
    rowGap: "49.49px",
    width: "1017px",
    margin: "38px 75px 53.03px 76px",
    height: "336.97px",

    "& > div": {
      display: "flex",
      flexDirection: "column",
      height: "89.99px",
      justifyContent: "space-between",
    }
  },

  tags: {
    width: "auto",
    columnGap: "31.99px",
    justifyContent: "center",
    margin: "0 auto",
  },

  tag: {
    color: "#000000",
    fontSize: "22pxx",
    fontWeight: 500,
    lineHeight: "22px",
    letterSpacing: "-0.78px"
  },

  bottomArea: {
    rowGap: "48px"
  }

}));

export default useStyles;
