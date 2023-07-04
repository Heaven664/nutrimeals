import { JSX } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
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
      spaceBetween={50}
      slidesPerView={2}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <CarouselElement {...DummyFeedback[0]} />
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
 
