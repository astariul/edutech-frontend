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
    // position: "absolute",
    height: "185px",
    left: "236px",
    right: "836px",
    top: "189px",
    // marginRight: "16px",
    // width: "100%",
    // maxWidth: "120px",
    // minWidth: "120px",
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
    display: "block",
    width: "468px",
    wordBreak: "break-all",
    flexDirection: "column"
  },
  courseCardTitle: {
    textAlign: "left",
    fontSize: "24px",
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
  courseContainer:{
    // display: "block",
    // display: "inline",
    display: "flex",
    wordBreak: "keep-all",
    padding: 0,
  },
  container2:{
    display: "flex",
    wordBreak: "keep-all",
  },
  
  courseTagBoxGreen:{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00A607",
    width: "72px",
    height: "24px",
  },
  courseTagBoxGray:{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#515151",
    width: "72px",
    height: "24px",
  },
  courseTagBoxBlue:{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2895E3",
    width: "72px",
    height: "24px",
  },
  courseTagBoxGrape:{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#862E9C",
    width: "72px",
    height: "24px",
  },
  courseTagItem:{
    textAlign: "center",
    color: "white",
    margin: "auto",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "13px",
    lineHeight: "18px",

  },

  close: {

  }
}));

export default useStyles;
