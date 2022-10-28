import { createStyles } from "@mantine/core";


const useStyles = createStyles((theme) => ({

  main: {
    width: "1440px",
    margin: "0 auto",
    paddingTop: "40px",
    borderTop: "1px solid #E4E4E4",
    marginBottom: "58.36px",

    [`@media (max-width: 850px)`]: {
      width: "375px",
    }
  },
  
  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,

    [`@media (max-width: 850px)`]: {
      flexDirection: "column",
    },

    "& > div":{      
      [`@media (max-width: 850px)`]: {
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

    [`@media (max-width: 770px)`]: {
      marginTop: "9px",
    }
  },

  contentRight: {
    width: "215px",
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "auto",

    [`@media (max-width: 770px)`]: {
      alignItems: "center",
      marginTop: "32px",
    }
  },

  iconBox: {
    display: "flex",
    flexDirection: "row",
    width: "215px",
    justifyContent: "space-between",

    [`@media (max-width: 770px)`]: {
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
