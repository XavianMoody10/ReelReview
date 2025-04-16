import React, { useContext } from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import LocalMoviesOutlinedIcon from "@mui/icons-material/LocalMoviesOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { SideNavigationContext } from "../contexts/SideNavigationContext";

export const SideNavigation = () => {
  const { isSideNavigationOpen } = useContext(SideNavigationContext);

  return (
    <motion.aside
      className=" bg-white absolute top-5 left-[5%] rounded-sm"
      initial={{ x: "-300%" }}
      animate={{ x: isSideNavigationOpen ? 0 : "-300%" }}
      transition={{ stiffness: 0 }}
    >
      <nav className=" p-2">
        <ul className=" flex flex-col gap-3">
          <li>
            <Link
              to={"/"}
              className=" block p-2 rounded-sm text-custom-orange hover:bg-custom-orange hover:text-white duration-150"
            >
              <TrendingUpIcon sx={{ fontSize: 35 }} />
            </Link>
          </li>

          <li>
            <Link
              to={"/movies"}
              className=" block p-2 rounded-sm text-custom-orange hover:bg-custom-orange hover:text-white duration-150"
            >
              <LocalMoviesOutlinedIcon sx={{ fontSize: 35 }} />
            </Link>
          </li>

          <li>
            <Link
              to={"/tv_shows"}
              className=" block p-2 rounded-sm text-custom-orange hover:bg-custom-orange hover:text-white duration-150"
            >
              <LiveTvOutlinedIcon sx={{ fontSize: 35 }} />
            </Link>
          </li>
        </ul>
      </nav>
    </motion.aside>
  );
};
