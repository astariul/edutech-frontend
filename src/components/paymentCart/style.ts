import { createStyles } from "@mantine/core";

const useStyles = createStyles(() => ({
  cart: {
    width: "100%",
    marginRight: "32px",
    marginBottom: "120px",
  },
  title: {
    fontWeight: 700,
    color: "#1b1c1d",
    paddingTop: "32px",
    paddingBottom: "16px",
    fontSize: "24px",
  },
  body: {
    display: "block",
  },
  control: {

  },
  list: {
    //position: "absolute",
    width: "868px",
    height: "185px",
    left: "236px",
    top: "189px",

    
    //minHeight: "465px",
  },
  courseCard: {
    display: "flex",
    padding: "16px 0",
    alignItems: "stretch",
  },
  checker: {
    // alignItems: "flex-start"
    // marginLeft: "10px",
    // position: "absolute",
    // left: "12.5%",
    // right: "12.5%",
    // top: "12.5%",
    // bottom: "12.5%",


    marginTop: "-10px",
    marginRight: "16px"
  },
  courseCardImage: {
    marginRight: "16px",
    width: "100%",
    maxWidth: "120px",
    minWidth: "120px",
  },
  image: {
    height: "100%",
    width: "100%"
  },
  courseThumbnail: {
    overflow: "hidden",
    boxSizing: "border-box",
    borderRadius: "4px",
    margin: "0"
  },
  courseCardInfo: {
    display: "flex",
    width: "100%",
    wordBreak: "break-all",
    flexDirection: "column"
  },
  courseCardTitle: {
    textAlign: "left",
    fontSize: "18px",
    wordBreak: "break-all",
    margin: 0
  },
  courseCardPrice: {
    lineHeight: 1.4,
    letterSpacing: "-.3px",
    fontSize: "18px",
    fontWeight: 700,
    minWidth: "150px",
    textAlign: "right"
  },
  close: {

  }
}));

export default useStyles;
