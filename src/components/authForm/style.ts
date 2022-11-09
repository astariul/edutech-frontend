import { createStyles } from "@mantine/core";


const useStyles = createStyles(() => ({
  rowFlex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  
  columnFlex: {
    display: "flex",
    flexDirection: "column",
  },

  mobile: {
    display: "none",

    [`@media (max-width: 767px)`]: {
      display: "inline-block"
    }
  },

  desktop: {
    [`@media (max-width: 767px)`]: {
      display: "none"
    }
  },

  mainMobile: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "112px auto",
    maxWidth: "1440px",
    width: "90%",
    fontFamily: "NotoSansKR",
    fontStyle: "normal",
  },

  contents: {
    margin: "0 auto",
    flexDirection: "column",
    maxWidth: "1168px",
    display: "flex",

    "hr": {
      color: "#E4E4E4",
    },

    [`@media (max-width: 767px)`]: {
      maxWidth: "766px",
      width: "90%",
      alignItems: "center",
    }
  },

  biLogo: {
    width: "335px",
    justifyContent: "center",

    "img": {
        margin: "0 auto",
        width: "224.75px",
        height: "32px",
    },
  },

  pageTitle: {
    paddingTop: "40px",
    width: "335px",
    height: "24px",
    justifyContent: "center",

    "h2": {
      margin: 0,
      fontWeight: 700,
      fontSize: "16px",
      lineHeight: "150%",
      letterSpacing: "-1.5px",
      color: "#373737",
    },
  },

  formBoxArea: {
    paddingTop: "45px",
    maxWidth: "337px",
    maxHeight: "385px",
    rowGap: "25px",
  },

  formInputMobile: {
    width: "337px",
    height: "52px",
  },

  authNumber: {
    width: "239px",
    height: "52px",
  },

  checkBoxArea: {
    marginTop: "17px",
    width: "337px",
    marginBottom: "31px"
  },

  agreements: {
    fontWeight: 500,
    fontSize: "12px",
    lineHeight: "150%",
    letterSpacing: "-1px",
    
    "#agreement_content": {
      width: "294px",
      paddingLeft: "10px",
      display: "flex",
      justifyContent: "space-between"
    },

    "#agreement_name": {
      color: "#757575",
    },

    "#agreement_modalBtn": {
      color: "#CCCCCC",
      textDecorationLine: "underline",
    }
  },

  checker: {
    paddingLeft: "13px",

    ".mantine-Checkbox-inner": {
      width: "20px",
      height: "20px",

      "input:checked": {
        backgroundColor: "#000000",
        borderColor: "#000000"
      },
    }
  },

  signupButton: {
    width: "337px",
    height: "50px",
    backgroundColor: "#0094FF",
    border: "1px solid #DDDDDD",
    borderRadius: "6px",

    "span": {
      fontFamily: "NotoSansKR",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "-0.05em",
      color: "#FFFFFF",
    },

  },

  inner: {
    padding: "12px 24px 24px 24px"
  },

  formInputBox: {
    position: "relative",
    boxSizing: "border-box",
    width: "337px",
    height: "52px",
    borderRadius: "6px",
    borderStyle: "none",

    "input": {
      backgroundColor: "rgba(228, 228, 228, 0.5)",
      fontWeight: 500,
      fontStyle: "normal",
      fontFamily: "NotoSansKR",
      fontSize: "12px",
      lineHeight: "20px",
      border: "none",
      height: "52px",
      color: "#000000"
    },

    ".mantine-PasswordInput-input": {
      border: "none",
      height: "52px",
    },

    ".mantine-PasswordInput-rightSection": {
      backgroundColor: "rgba(228, 228, 228, 0.5)",
      height: "52px"
    }
  },

  input: {
    position: "absolute",
    width: "80%",
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
  },

  emailVerification: {
    display: "flex",
    columnGap: "11px",
  },

  verificationButton: {
    border: "none",
    backgroundColor: "#B5B5B5",
    color: "#FFFFFF",
    fontFamily: "NotoSansKR",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "13px",
    lineHeight: "20px",
    letterSpacing: "-0.5px",
    borderRadius: "6px",
  },


}));

export default useStyles;
