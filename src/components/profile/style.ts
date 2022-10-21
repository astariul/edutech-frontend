import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  main: {
    gap: "7px",

    "@media screen and (max-width: 900px)": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "14px",
      marginBottom: "17px",
    },

  },

  circle: {
    height: "30px",
    width: "30px",
    backgroundColor: "#000000",
    borderRadius: "50%",
    display: "inline-block",

    "@media screen and (max-width: 900px)": {
      backgroundColor: "#FFFFFF",
    },

  },

  circleText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontFamily: "AlongSanss2",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "20px",
    textTransform: "uppercase",
    lineHeight: 1.6,

    "@media screen and (max-width: 900px)": {
      color: "#000000"
    },
  },

  profileText: {
    fontSize: "12px",
    fontFamily: "AlongSanss2",
    fontWeight: 600,
    cursor: "pointer",

    "@media screen and (max-width: 900px)": {
      fontSize: "14px",
      color: "#FFFFFF",
    },
  }
}));

export default useStyles;

