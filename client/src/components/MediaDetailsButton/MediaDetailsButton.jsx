import React from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Link } from "react-router-dom";

export const MediaDetailsButton = ({ id }) => {
  return (
    <Link
      to={`/details/${id}`}
      className=" bg-white px-10 py-3 w-fit rounded-sm font-bold flex items-center gap-2 text-custom-orange hover:bg-custom-orange hover:text-white duration-150"
    >
      <span>Details</span>

      <InfoOutlinedIcon />
    </Link>
  );
};
