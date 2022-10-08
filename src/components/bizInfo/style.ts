import { createStyles } from "@mantine/core";

const useStyles = createStyles(() => ({
  main: {
    maxWidth: "960px",
    margin: "0 auto 24px auto",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  infoSection: {
    lineHeight: 1.5,
    fontFamily: "AlongSanss2"
  },
  header: {
    maring: "25px 0 9px 0",
    height: "18px",
    display: "flex",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: "12px"
  },
  body: {
    fontSize: "12px",
    lineHeight: 1.5,
    color: "#868e96",
    maxHeight: "54px",
  },
}));

export default useStyles;
