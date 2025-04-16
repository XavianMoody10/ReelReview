import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { MediaPoster } from "../MediaPoster/MediaPoster";

export const MediaPosterSlider = ({ results }) => {
  const slides = results.map((s) => {
    return (
      <SwiperSlide key={s.id}>
        <MediaPoster
          id={s.id}
          title={s.title || s.name || s.original_name}
          poster_path={s.poster_path}
        />
      </SwiperSlide>
    );
  });

  return (
    <Swiper
      slidesPerView={1.1}
      spaceBetween={10}
      breakpoints={{
        500: {
          slidesPerView: 2.1,
        },

        800: {
          slidesPerView: 3.1,
        },

        1280: {
          slidesPerView: 4.1,
        },
      }}
    >
      {slides}
    </Swiper>
  );
};
