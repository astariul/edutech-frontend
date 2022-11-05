import { createStyles } from "@mantine/core";

const useStyles = createStyles(() => ({
  main: {
    position: "relative",
    borderRadius: "40px",
    backgroundColor: "#FFFFFF",
    boxShadow: " 0px 24px 64px rgba(0, 0, 0, 0.25)",
    width: "375px",
    height: "470px",
    margin: "201px auto",
  },
  inner: {
    padding: "30px 26px 0px 26px"
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    top: "25px"
  },
  title: {
    width: "414px"
  },
}));

export default useStyles;
