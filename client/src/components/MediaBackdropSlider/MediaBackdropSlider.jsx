import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { MediaBackdrop } from "../MediaBackdrop/MediaBackdrop";

export const MediaBackdropSlider = ({ results }) => {
  const slides = results.map((s) => {
    return (
      <SwiperSlide>
        <MediaBackdrop
          key={s.id}
          id={s.id}
          title={s.title || s.name || s.original_name}
          backdrop_path={s.backdrop_path}
          overview={s.overview}
        />
      </SwiperSlide>
    );
  });

  return <Swiper>{slides}</Swiper>;
};
