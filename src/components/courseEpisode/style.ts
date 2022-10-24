import { createStyles } from '@mantine/core';

interface props {
  backgroundImage: string;
}


const useStyles = createStyles((theme, {backgroundImage}: props) => ({
  main: {
    display: "flex",
    flexDirection: "row",

    // "@media screen and (max-width: 900px)": {
    //   marginTop: "200px",
    // }
  },

  information: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    lineHeight: "160%",
    letterSpacing: "-0.04em",
    color: "#111111",
    paddingLeft: "36px"
  },

  image: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: `url(${backgroundImage})`,
  },

  title: {
    fontWeight: 700,
    fontSize: "16px",
  },

  subTitle: {
    fontWeight: 500,
    fontSize: "12px",
  },
  
  progressBar: {
    width: "46.111vw",
  },

  duration: {
    display: "flex",
    alignItems: "flex-end",
    paddingLeft: "32px",
  },

  time: {
    color: "#969696",
    letterSpacing: "-0.03em",
    fontWeight: 700,
    fontSize: "11px",
  },
}));

export default useStyles;
