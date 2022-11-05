import { createStyles } from "@mantine/core";


const useStyles = createStyles((theme, {hidden}: {hidden: boolean}) => ({

  main: {
    width: "100%",
    paddingTop: "40px",
    borderTop: "1px solid #E4E4E4",
    marginBottom: "145px",
    display: hidden ? "none" : "block",
    
    [`@media (max-width: 767px)`]: {
      width: "100%",
    }
  },
  
  content: {
    maxWidth: "1440px",
    width: "90%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,

    [`@media (max-width: 767px)`]: {
      flexDirection: "column",
    },

    "& > div":{      
      [`@media (max-width: 767px)`]: {
        width: "336px",
        flexDirection: "column",
      }
    }
  },

  contentLeft: {
    width: "953px",
  },

  logo: {
    width: "224.75px",
    height: "32px",

    [`@media (max-width: 376px)`]: {
      width: "144.34px",
      height: "21px",
    }
  },

  bizInfo: {
    marginTop: "24px",

    [`@media (max-width: 767px)`]: {
      marginTop: "9px",
    }
  },

  contentRight: {
    width: "215px",
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "auto",

    [`@media (max-width: 767px)`]: {
      alignItems: "center",
      marginTop: "32px",
    }
  },

  iconBox: {
    display: "flex",
    flexDirection: "row",
    width: "215px",
    justifyContent: "space-between",

    [`@media (max-width: 767px)`]: {
      width: "177px",
      alignItems: "center",
      justifyContent: "space-between",
    }
  },

  icon: {
    width: "32px",
    height: "32px",

    [`@media (max-width: 376px)`]: {
      width: "26.34px",
      height: "26.34px"
    }
  },

}));

export default useStyles;
