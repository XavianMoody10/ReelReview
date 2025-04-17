import React from "react";
import Pagination from "@mui/material/Pagination";

export const MediaPagination = ({ onChange, currentPage, amountOfPages }) => {
  return (
    <Pagination
      count={amountOfPages}
      page={Number(currentPage)}
      onChange={onChange}
      size="large"
      sx={{
        "& .MuiPaginationItem-root": {
          color: "#fff",
        },

        "& .Mui-selected": {
          bgcolor: "#ff9966 !Important",
          color: "white !Important",
        },
      }}
    />
  );
};
