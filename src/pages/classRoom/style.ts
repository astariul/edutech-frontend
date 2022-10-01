import { createStyles } from "@mantine/core";


const useStyles = createStyles(() => ({
  classRoom: {
    justifyContent: "space-between",
    alignItems: "start",
    maxWidth: "100%",
    flexDirection: "row",
    marginLeft: "0px"
  },
  sidebar: {
    margin: '2.4rem 1rem 1rem',
    flex: "1 1 20%",
  },
  sidebarContent: {
    flexDirection: "column",
    alignItems: "center",
  },
  videoContainer : {
    flex: "1 1 70%",
    margin: '2.4rem',
    padding: 0,
  },
  buttonContainer: {
    display: "flex",
  },
  seasonText: {
    flex: "0 0 70%",
    paddingLeft: "105px",
    fontSize: "20px",
    boxSizing: "border-box",
  },
  iconTriangle: {
    fill: "#101113",
    flex: "0 0 30%",
    boxSizing: "border-box",
    justifyContent: "center",
    paddingTop: "6px",
    paddingLeft: "30px"
  }
}));

export default useStyles;
