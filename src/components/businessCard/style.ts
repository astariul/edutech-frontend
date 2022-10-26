import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  main: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "16.17px",
    fontFamily: "NotoSansKR",
    fontStyle: "normal",

    "& > img":{
      width: "49px",
      height:"49px",
    }
  },
  
  nameAndPosition: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    fontWeight: 500,
    fontSize: "14px",
    color: "#FFFFFF"
  },

  name: {
    display: "flex",
    justifyContent: "center",
    lineHeight: "25px",
    columnGap: "4.24px",

    "& > img": {
      width: "22.61px",
      height: "22.61px",
    }
  },

  position: {
    fontWeight: 500,
    lineHeight: "22px",
  },

}));


export default useStyles;
