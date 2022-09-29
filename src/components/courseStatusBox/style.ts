import { createStyles } from '@mantine/core';


const useStyles = createStyles((theme) => ({
  main: {
    margin: "0 auto",
    maxWidth: "1160px",
    borderRadius: "15px",
    backgroundColor: "#D3D3D3",
    alignItems: "stretch",
    justifyContent:"space-between",
    flexDirection: "row",
    // "@media (min-width: 1025px) and (max-width: 1200px)": {
    //   padding: "0 24px",
    // },
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
  leftGrid: {
    flex: "1 1 30%",
  },
  middleGrid: {
    flex: "1 1 50%",
  },
  rightGrid: {
    flex: "1 1 20%",
  },
  action: {
    // padding: "24px auto",
    alignItems: "center",
    textAlign:"center",
    flexDirection: "column",
    justifyContent:"space-between",
    padding: "8px 12px",
    margin: "24px auto" 
  },
  actionItem: {
    width: "140px",
    marginTop: "4px",
    marginBottom: "4px"
  },
  chart: {
    padding: "8px 12px",
    boxSizing: "border-box",
  },
  statusComment: {
    fontSize: "17px",
    padding: "8px 12px",
    textAlign:"center",
    boxSizing: "border-box",
  },
  outcomeComment: {
    fontSize: "15px",
    padding: "8px 12px",
    color: "red",
    boxSizing: "border-box",
  },
  title: {
    margin: "24px auto",
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: "30px",
    fontWeight: 700,
    textAlign:"center",
  },
}));

export default useStyles;