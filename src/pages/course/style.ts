import { createStyles } from "@mantine/core";

const useStyles = createStyles(() => ({
  main: {
    margin: "80px auto",
    maxWidth: "1248px",
  },
  tableContainer: {
    margin: "0 auto",
    padding: "12px 100px",
  },
  table: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  }

}));

export default useStyles;
