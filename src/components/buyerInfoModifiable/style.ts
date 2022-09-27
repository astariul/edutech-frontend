import { createStyles } from "@mantine/core";

const useStyles = createStyles(() => ({
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
    letterSpacing: "-.3px",
    LineHeight: 1.43,
    fontWeight: 400
  },
  buyerInfoText: {
    display: "flex",
    minWidth: "85px",
    textAlign: "center",
    alignItems: "center",
    fontSize: "15px",
  },
}));

export default useStyles;
