import { createStyles } from "@mantine/core";

export const useStylesPeriodYearMonth = createStyles(() => ({
  layout: {
    position: "relative"
  },
  from: {
    display: "inline-block",
    marginTop: 0,
  },
  to: {
    display: "inline-block",
  },
  year: {
    width: "36px",
  },
  month: {
    width: "26px",
    marginLeft: "4px"
  },
  input: {
    height: "auto",
    padding: 0,
    border: "none",
    borderRadius: 0,
    fontSize: "14px",
    fontWeight: 250,
    backgroundColor: "transparent",
    "::placeholder": {
      opacity: 0.5
    }
  }
}));

export const useStylesResumeBody = createStyles(() => ({
  input: {
    width: "100%",
    height: "auto",
    padding: 0,
    border: "none",
    borderRadius: 0,
    fontWeight: 800,
    backgroundColor: "transparent",
    wordWrap: "break-word",
    "::placeholder": {
      opacity: 0.5
    },
    autocomplete: "off"
  },
  input1: {
    fontSize: "18px"
  },
  input2: {
    fontSize: "16px",
  },
  textarea: {
    position: "relative",
    overflowX: "hidden",
    boxShadow: "none !important",
    overflow: "hidden",
    overflowWrap: "break-word",
    whiteSpace: "pre-wrap",
    wordBreak: "break-all",
    appearance: "none",
  },
  input3: {
    margin: "0px",
    height: "34px",
    lineHeight: 1.6,
    fontSize: "14px",
    resize: "none",
  },
  bodyHeader: {
  },
  bodyAddButton: {
    width: "100%",
    alignItem: "right"
  },
  listItem: {
    display: "flex",
    flexDirection: "row",
  },
  period: {
    flex: "3 1",
    display: "flex",
    flexDirection: "column",
    width: "100%"
  },
  checkbox: {
    margin: "16px 0 30px",
    fontSize: "14px",
    fontWeight: 600,
    opacity: 0.5
  },
  content: {
    flex: "9 1",
    display: "flex",
    flexDirection: "column",
    width: "100%"
  },
  "ol ul":{
    listStyle: "none",
    margin: 0,
    padding: 0,
    border: 0,
  },

}));

export const useStyles = createStyles(() => ({
  background: {
    margin: "0 auto",
    padding: "0",
    maxWidth: "1060px",
    "@media (min-width: 1025px) and (max-width: 1200px)": {
      width: "90%"
    },
    "input:focus, textarea:focus, select:focus":{
        outline: "none",
    },
    "input.text": {
    }
  },
  basicInfo: {
    marginTop: "100px",
    marginBottom: "50px"
  },
  title: {
    marginBottom: "50px",
    fontSize: "30px"
  },
  input: { 
    border: "none",
    height: "auto",
    width: "100%",
    wordWrap: "break-word",
    padding: 0,
  },
  name: {
    fontSize: "18px",
    marginTop: "12px"
  },
  email: {
    fontSize: "16px",
    marginTop: "12px"
  },
  tel: {
    fontSize: "16px",
    marginTop: "12px"
  },
}));

