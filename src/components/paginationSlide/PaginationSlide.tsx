import { ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import useStyles from "./paginationSlide";
import "swiper/css";
import "swiper/css/pagination";

interface PaginationSlideProps {
  perView: number;
  columnGap: number;
  items: ReactNode[];
};

const PaginationSlide = (
  {perView, columnGap, items}: PaginationSlideProps
) => {
  const {classes} = useStyles();
  return (
    <div className={classes.swiper}>
      <Swiper
        slidesPerView={perView}
        spaceBetween={columnGap}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {
          items.map(
            (item, index) => (
              <SwiperSlide key={index}>{item}</SwiperSlide>
            )
          )
        }
      </Swiper>
    </div>
  )
}

export default PaginationSlide;
