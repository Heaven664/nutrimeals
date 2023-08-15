import React, { JSX, useRef } from "react";
import { Swiper as SwiperType } from "swiper";
import { useRouter } from "next/router";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";

import CarouselElement from "./CarouselElement";

import styles from "./Feedback.module.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";

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
    orders: 32,
  },
  {
    clientName: "Robyn",
    feedback:
      "A wide variety of balanced meals that are perfect for my busy schedule. The free delivery is always professional and superior to most other delivery services.",
    orders: 24,
  },
];

const FeedbackCarousel = (): JSX.Element => {
  const swiperRef = useRef<SwiperType | null>(null);
  const router = useRouter();

  return (
    <div className={styles.feedbackLayout}>
      <div className={styles.feedbackContainer}>
        <div className={styles.feedbackTitleContainer}>
          <h3>Healthy meal prep Loved by Locals</h3>
        </div>
        <div className={styles.feedbackBodyContainer}>
          <p>Read what our customers have to say</p>
        </div>
        <div className={styles.feedbackCarousel}>
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={5}
            slidesPerView={1}
            speed={1200}
            pagination={{ clickable: true }}
            autoplay
            loop={true}
            loopPreventsSliding={false}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
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
          <div
            className={styles.prevSlide}
            onClick={() => {
              if (swiperRef.current) {
                swiperRef.current.slidePrev();
              }
            }}
          >
            <div className={styles.arrow}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 20 20"
              >
                <path
                  fill="currentColor"
                  d="M13.891 17.418a.697.697 0 0 1 0 .979a.68.68 0 0 1-.969 0l-7.83-7.908a.697.697 0 0 1 0-.979l7.83-7.908a.68.68 0 0 1 .969 0a.697.697 0 0 1 0 .979L6.75 10l7.141 7.418z"
                />
              </svg>
            </div>
          </div>
          <div
            className={styles.nextSlide}
            onClick={() => {
              if (swiperRef.current) {
                swiperRef.current.slideNext();
              }
            }}
          >
            <div className={styles.arrow}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 20 20"
              >
                <g transform="translate(20 0) scale(-1 1)">
                  <path
                    fill="currentColor"
                    d="M13.891 17.418a.697.697 0 0 1 0 .979a.68.68 0 0 1-.969 0l-7.83-7.908a.697.697 0 0 1 0-.979l7.83-7.908a.68.68 0 0 1 .969 0a.697.697 0 0 1 0 .979L6.75 10l7.141 7.418z"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className={styles.feedbackButton}>
          <button onClick={() => router.push('/products/lunch-&-dinner-box')} >Perfect, I want it</button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCarousel;
