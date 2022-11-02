import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  swiper: {

    "& > div.swiper": {
      overflow: "visible !important",
      listStyle: "inside !important"
    },

    "& > div.swiper > div.swiper-pagination": {
      bottom: "-32px",

      "& > span": {
        background: "#000000",
        width: "12px",
        height: "12px",
        marginLeft: "1px",
        marginRight: "1px",
      }
    }
  }

}));

export default useStyles;
