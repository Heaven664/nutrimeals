import { JSX } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import CarouselElement from "./CarouselElement";

const DummyFeedback = [
  {
    clientName: "Jared",
    feedback:
      "Convenience - having dinner available without buying groceries, prepping and cooking.",
    orders: 21,
  },
  {
    clientName: "Paula",
    feedback:
      "Good portion of food and good quality clean meals. Selection is great too. Customer service has also been awesome.",
    orders: 12,
  },
  {
    clientName: "Fillip",
    feedback:
      "Convenience - having dinner available without buying groceries, prepping and cooking.",
    orders: 31,
  },
];

const Carousel = (): JSX.Element => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation
      loop={true}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <CarouselElement {...DummyFeedback[0]} />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselElement {...DummyFeedback[1]} />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselElement {...DummyFeedback[2]} />
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
