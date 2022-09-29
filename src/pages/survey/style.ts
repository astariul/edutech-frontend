import { BackgroundImage, createStyles } from "@mantine/core";

const useStyles = createStyles(() => ({
  main: {
    margin: "100px auto"
  },
  questionContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#DEE2E6",
  },
  question: {
    margin: "24px auto",
  },
  title: {
    margin: "8px auto",
    fontSize: "32px"
  },
  answer: { 
    border: "none",
    height: "auto",
    minWidth: "1024px",
    wordWrap: "break-word",
    padding: 0,
  },
  button: {
    margin: "10px auto",
    fontSize: "16px",
    height: "45px",
    width: "240px",
  }
}));

export default useStyles;
