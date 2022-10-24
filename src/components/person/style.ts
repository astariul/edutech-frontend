import { createStyles } from '@mantine/core';

interface styleProps {
  indicator: boolean; 
}
const useStyles = createStyles((theme, {indicator}: styleProps) => ({
  main: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "16.17px"
  },
  
  indicator: {
    "& > div.mantine-Indicator-indicator" : {
      display: !indicator ? "none" : "",
      padding: 0,
      bottom: 7,
      right: 7
    },
  },

  nameAndDescription: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center"
  },

  name: {
    fontWeight: 700,
    fontSize: "14px",
    lineHeight: "18px",
    color: "#11142D"
  },

  description: {
    fontWeight: 500,
    fontSize: "12px",
    lineHeight: "16px",
    color: "#808191",
    textAlign: "center"
  },

}));


export default useStyles;
