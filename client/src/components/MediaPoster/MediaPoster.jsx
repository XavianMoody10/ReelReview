import React, { useState } from "react";
import { LoadingOverlay } from "../LoadingOverlay/LoadingOverlay";
import { motion } from "motion/react";
import { MediaDetailsButton } from "../MediaDetailsButton/MediaDetailsButton";

export const MediaPoster = ({ id, title, poster_path }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const imageURL = `https://image.tmdb.org/t/p/original/${poster_path}`;
  const placeHolder = "https://placehold.co/600x900"; // https://placehold.co/

  return (
    <div className=" relative">
      <LoadingOverlay isLoading={!isLoaded} delay={1.5} />

      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className=" absolute top-0 left-0 bottom-0 right-0 bg-black/65"
      >
        <div className=" absolute bottom-5 left-5 flex flex-col gap-4 w-[90%]">
          <h2 className=" text-white text-2xl font-jost font-bold">{title}</h2>

          <MediaDetailsButton id={id} />
        </div>
      </motion.div>

      <div>
        <img
          src={failed ? placeHolder : imageURL}
          alt=""
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={() => {
            setIsLoaded(false);
            setFailed(true);
          }}
        />
      </div>
    </div>
  );
};
