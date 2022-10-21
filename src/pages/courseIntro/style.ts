import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  descriptionHeader: {
    marginTop: "80px",
    padding: "40px 0",
    background: "#002333",

    "@media screen and (max-width: 900px)": {
      marginTop: "200px",
    }
  },

  descriptionContainer: {
    boxSizing: "border-box",
    margin: "0 auto",
    padding: "0 9.375vw",
    maxWidth: "1440px",

    "@media screen and (max-width: 550px)": {
      padding: "0",
    }
  },

  courseHeader: {
    padding: "0 24px",
    paddingRight: "",
    width: "auto",
    maxWidth: "55.3%",
    color: "#D0EBFF",

    "@media screen and (max-width: 1200px)": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      maxWidth: "100%",
    }
  },

  courseTitle: {
    marginBottom: "20px",
  },

  courseInfo: {
    display: "flex",
    flexWrap: "wrap",
    fontWeight: 400,
    lineHeight: 1.43,
    fontSize: "14px",
    marginBottom: "8px",
    letterSpacing: "-.3px",
    alignItems: "center",
    flexDirection: "row"
  },

  courseStar: {
    marginRight: "10px"
  },

  learningCurve: {
    display: "inline-flex",
    justifyContent: "center",
    boxSizing: "border-box",
    padding: 0,
    overflow: "hidden",

    "@media screen and (max-width: 1200px)": {
      paddingTop: "20px",
    },
  },

  courseInfoBox: {
    display:"flex",
    flex:"0 1 auto",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    padding: "12px",
    maxHeight: "100%",

    "@media screen and (max-width: 1200px)": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }
  },

  courses: {
    paddingTop: "24px",
    paddingBottom: "24px",
  },

  coursesContainer: {
    maxWidth: "1200px",
    padding: "0 10px",
    margin: "0 auto",
    position: "relative",
    width: "auto",
    flexGrow: 1,
  
    "@media screen and (min-width: 1200px)": {
      maxWidth: "1100px"
    }
  },

  coursesHeader: {
    color: "#1e1e1e",
    lineHeight: 1.5,
    fontSize: "1.5rem"
  },

  coursesSubtext: {
    marginTop: "4px",
    color: "#757575",
    lineHeight: 1.6,
    margin: 0
  },

  coursesCards: {
    display: "flex",
    padding: "6px 0",
  },

  card: {
    width: "290.5px",
    marginRight: "6px",
    "@media screen and (min-width: 1080px)": {
      maxWidth: "calc((100% - 8px)/4)",
    }
  },

  button: {
    fontSize: "15px", 
    letterSpacing: "0.5px",
    marginTop: "15px",
    marginLeft: "auto",
    marginRight: "auto",
    height: "55px",
    width: "276px",
    backgroundColor: "transparent",
    border: "1px solid #D0EBFF",

    "&:hover": {
      backgroundColor: "transparent"
    }
  }
}));

export default useStyles;