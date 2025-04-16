import React from "react";

export const ErrorMessageOverlay = ({ message }) => {
  return (
    <div className="bg-[#333333] absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center border border-gray-500 z-10">
      <p className=" text-white text-3xl font-jost">{message}</p>
    </div>
  );
};
