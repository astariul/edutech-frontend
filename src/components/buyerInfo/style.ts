import { createStyles } from "@mantine/core";

const useStyles = createStyles(() => ({
  buyerInfoSection: {
  },
  buyerInfoHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px"
  },
  buyerInfo: {
    display: "block",
    marginBlockStart: "1em",
    marginBlockEnd: "1em",
    marginInlineStart: "0px",
    marginInlineEnd: "0px",
    fontSize: "14px",
    letterSpacing: "-.3px",
    LineHeight: 1.43,
    fontWeight: 400
  },
  buyerInfoDt: {
    display: "block",
    minWidth: "80px"
  },
  buyerInfoDD: {
    display: "block",
    margin: "0px",
    // marginInlineStart: "40px",
    maxWidth: "calc(100% - 80px)",
    wordBreak: "break-all",
  }
}));

export default useStyles;
