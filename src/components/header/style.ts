import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  main: {
    position: "absolute",
    width: "100%",
    height: "80px",
    left: "0px",
    top: "0px",
  },
  line: {
    position: "absolute",
    width: "1440px",
    height: "0px",
    left: "0px",
    top: "80px",
    border: "1px solid #E4E4E4",
  },
  biContainer: {
    padding: "0px",
    marginLeft: "31px",
    marginRight: "234px"
  },
  bi: {
    position: "absolute",
    width: "225px",
    height: "32px",
    left: "31px",
    top: "24px",
  },
  middleLinkGroup: {
    width: "auto",
    height: "24px",
    top: "28px",
    gap: "49px",
    alignItems: "flex-start",

    "@media (max-width: 900px)": {
      display: 'none',
    },
  },
  rightLinkGroup: {
    width: "auto",
    height: "auto",
    left: "1163px",
    top: "28px",
    alignItems: "flex-start",
    alignContent: "center",
    marginRight: "54px",
    gap: "17px",

    "@media screen and (max-width: 900px)": {
      display: "none",
    },

  },
  dropdown: {
    position: 'absolute',
    top: "80px",
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    "@media screen and (min-width: 900px)": {
      display: 'none',
    },
  },

  header: {
    margin: "0 0",
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    "@media screen and (min-width: 900px)": {
      justifyContent: 'space-between',
    },
  },

  burger: {
    display: "none",

    "@media screen and (max-width: 900px)": {
      display: "block",
      position: "absolute",
      right: "32px"
    },
  },

  middleLink: {
    display: "block",
    height: "24px",
    left: "0%",
    right: "77.66%",
    top: "calc(50% - 24px/2)",

    margin: "0px 0px",
    textDecoration: "none",
    fontFamily: "AlongSanss2",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "24px",
    textAlign: "center",
    textTransform: "uppercase",
    color: "#272727",
    boxSizing: "border-box",
    letterSpacing: "-0.699px",

    "@media screen and (max-width: 900px)": {
      borderRadius: 0,
      margin: "8px 12px",
    },
  },

  rightLink: {
    display: "block",
    height: "24px",
    left: "0%",
    right: "77.66%",
    top: "calc(50% - 24px/2)",
    
    margin: "0px",
    textDecoration: "none",
    fontFamily: "AlongSanss2",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "12px",
    lineHeight: "24px",
    textAlign: "center",
    textTransform: "uppercase",
    color: "#272727",
    boxSizing: "border-box",
    letterSpacing: "-0.699px",

    "@media screen and (max-width: 900px)": {
      borderRadius: 0,
      fontSize: "14px",
      margin: "8px 12px",
      paddingTop: 0
    },
  },

  align: {
    paddingTop: 2.5
  }

}));

export default useStyles;
