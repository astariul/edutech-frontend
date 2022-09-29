import { createStyles } from "@mantine/core";

const useStyles = createStyles(() => ({
  layout: {
    margin: "0 auto",
    display: "flex",
    flexGrow: 1,
    position: "relative",
    width: "auto",
    "@media (min-width: 1025px) and (max-width: 1200px)": {
      padding: "0 24px",
    },
    "@media screen and (min-width: 1366px)": {
      width: "1160px",
    },
    "@media (min-width: 1200px)": {
      maxWidth: "1160px",
    },
    "@media screen and (max-width: 1024px)": {
      flexDirection: "column",
      boxSizing: "border-box",
    },
  },
  cart: {
    display: "block",
    padding: 0,
    width: "100%",
    marginTop: "30px",
    marginLeft: "120px",
    marginRight: "32px",
    boxSizing: "inherit",
    "@media screen and (max-width: 1024px)": {
      minWidth: "100%",
      width: "100%",
      maxWidth: "100%",
      marginLeft: "0",
      marginRight: "0",
      padding: "24px"
    }
  },
  cartAside: {
    display: "block",
    position: "relative",
    width: "300px",
    minWidth: "300px",
    maxWidth: "300px",
    paddingTop: "30px",
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    boxSizing: "inherit",
    "@media screen and (max-width: 1024px)": {
      minWidth: "100%",
      width: "100%",
      maxWidth: "100%",
      padding: "24px",
    }
  },
  sectionBuyerInfo: {
    display: "block"
  },
  sectionPayment: {
    display: "block"
  }
}));

export default useStyles;
