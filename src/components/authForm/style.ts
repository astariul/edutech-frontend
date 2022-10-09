import { createStyles } from "@mantine/core";


const useStyles = createStyles(() => ({
  inner: {
    padding: "12px 24px 24px 24px"
  },
  inputContainer: {
    position: "relative",
    boxSizing: "border-box",
    width: "364px",
    height: "52px",
    backgroundColor: "rgba(228, 228, 228, 0.5)",
    borderRadius: "6px",
    borderStyle: "none",
  },
  input: {
    position: "absolute",
    width: "312px",
    height: "20px",
    top: "16px",
    left: "20px",
    fontWeight: 500,
    fontStyle: "normal",
    fontFamily: "NotoSansKR",
    fontSize: "12px",
    lineHeight: "20px",
    backgroundColor: "transparent",
    borderStyle: "none",
    border: 0,
    outline: 0
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
  formContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "14px",
    marginTop: 34
  },
  submitButtonWrapper: {
    marginTop: "27px" 
  },
  submitButton: {
    width: "364px",
    height: "62px",
    backgroundColor: "#0094FF",
    border: "1px solid #DDDDDD",
    borderRadius: "6px",
    borderStyle: "none",
    color: "#FFFFFF",
    fontFamily: "NotoSansKR",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "18px",
    lineHeight: "26px",
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
