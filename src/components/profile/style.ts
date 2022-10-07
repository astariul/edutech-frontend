import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  main: {
    gap: "7px",
  },
  circle: {
    height: "30px",
    width: "30px",
    backgroundColor: "#000000",
    borderRadius: "50%",
    display: "inline-block",
  },
  circleText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontFamily: "AlongSanss2",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "20px",
    textTransform: "uppercase",
    lineHeight: 1.6
  },
  profileText: {
    fontSize: "12px",
    fontFamily: "AlongSanss2",
    fontWeight: 600,
  }
}));

export default useStyles;

