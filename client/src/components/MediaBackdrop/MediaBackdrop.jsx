import React from "react";
import { MediaDetailsButton } from "../MediaDetailsButton/MediaDetailsButton";

export const MediaBackdrop = ({ id, backdrop_path, title, overview }) => {
  const imageURL = `https://image.tmdb.org/t/p/original/${backdrop_path}`;

  return (
    <div
      className=" h-[750px] bg-cover bg-top"
      style={{ backgroundImage: `url(${imageURL})` }}
    >
      <div className=" absolute top-0 left-0 bottom-0 right-0 bg-black/65">
        <div className=" absolute bottom-5 left-5 flex flex-col gap-4 w-[90%] max-w-[700px]">
          <h2 className=" text-white text-3xl font-jost font-bold">{title}</h2>

          <p className=" text-white text-lg">{overview}</p>

          <MediaDetailsButton id={id} />
        </div>
      </div>
    </div>
  );
};
