import { createStyles } from "@mantine/core";


const useStyles = createStyles(() => ({
  inner: {
    padding: "12px 24px 24px 24px"
  },
  title: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: "7px",
    gap: "7px"
  },
  logo: {
    width: "36px",
    height: "23px",
    top: "66px",
    left: "20.75px",
    boxSizing: "border-box",
    maringTop: "9.43%",
  },
  titleText: {
    color: "#373737",
    weight: 500,
    fontFamily: "NotoSansKR",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "30px",
    lineHeight: "43px",
    letterSpacing: "-2px",
  },
  methodContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "10px",
    marginTop: 34
  },
  methodBox: {
    display: "flex",
    border: "1px solid #DDDDDD",
    borderRadius: "6px",
    width: "364px",
    height: "53px",
    alignItems: "center",
    backgroundColor: "#FFFFFF"
  },
  method: {
    display: "flex",
    flexDirection: "row",
    gap: "22px",
    alignItems: "center",
    marginLeft: "44px",
  },
  methodTitle: {
    fontFamily: "NotoSansKR",
    fontWeight: 500,
    fontStyle: "normal",
    fontSize: "13px",
    LineHeight: "19px",
    color: "#000000"
  },
  divideLine: {
    width: "100%",
    textAlign: "center",
    borderBottom: "1px solid #DDDDDD",
    lineHeight: "0.1em",
    margin: "23px 0 20px",
  },
  idpwFinder: {
    position: "absolute",
    width: "112px",
    height: "19px",
    Top: "611px",
    bottom: "37px",
    right: "178px",
    left: "178px",
    display: "flex",
    justifyContent: "center",
    color: "#0094FF",
    fontSize: "12px",
    fontWeight: 500,
    fontFamily: "NotoSansKR",
    fontStyle: "normal",
  }
}));

export default useStyles;
