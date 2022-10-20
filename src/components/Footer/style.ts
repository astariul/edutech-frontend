import { createStyles } from "@mantine/core";


const useStyles = createStyles((theme) => ({

  main: {
    marginTop: "65px",
    marginLeft: "135px",
    marginRight: "138.58px",
    marginBottom: "85px",

    [`@media (max-width: 850px)`]: {
      marginTop: "26px",
      marginLeft: "20px",
      marginRight: "20px",
    }
  },

  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 0,

    [`@media (max-width: 850px)`]: {
      flexDirection: "column",
    }
  },

  contentLeft: {

  },

  logo: {
    width: "224.75px",
    height: "32px",

    [`@media (max-width: 380px)`]: {
      width: "124px",
      height: "21px",
    }
  },

  bizInfo: {
    marginTop: "24px",

    [`@media (max-width: 770px)`]: {
      marginTop: "9px",
    }
  },

  contentRight: {
    marginBottom: "auto",

  },

  iconBox: {
    display: "flex",
    flexDirection: "row",
    gap: "37px",

    [`@media (max-width: 770px)`]: {
      marginTop: "35.29px",
    }
  },

  icon: {
    width: "32px",
    height: "32px",

    [`@media (max-width: 380px)`]: {
      width: "26.34px",
      height: "26.34px"
    }
  },

}));

export default useStyles;
