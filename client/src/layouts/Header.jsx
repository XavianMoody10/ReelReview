import React, { useContext } from "react";
import logo from "../assets/logo.png";
import { Squash as Hamburger } from "hamburger-react";
import { SideNavigationContext } from "../contexts/SideNavigationContext";
import { Link } from "react-router-dom";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export const Header = () => {
  const { isSideNavigationOpen, setIsSideNavigationOpen } = useContext(
    SideNavigationContext
  );

  return (
    <header className=" bg-[#333333] py-5 space-y-4 z-10">
      <div className=" bg-white flex justify-between items-center pl-3 py-1 rounded-sm w-[90%] max-w-[1500px] mx-auto">
        <img src={logo} alt="logo" width={130} className=" lg:w-[150px]" />

        <Hamburger
          size={28}
          color="#FF9966"
          toggle={setIsSideNavigationOpen}
          toggled={isSideNavigationOpen}
        />
      </div>

      <div className=" w-[90%] max-w-[1500px] mx-auto flex justify-between items-center gap-4">
        <div className=" bg-white px-2 rounded-sm flex items-center w-full max-w-[400px]">
          <input
            type="text"
            className=" bg-white p-2 w-full outline-none"
            placeholder="Search"
          />

          <SearchOutlinedIcon sx={{ color: "#ff9966", fontSize: 32 }} />
        </div>

        <Link to={"/login"} className="">
          <AccountCircleOutlinedIcon sx={{ color: "#ff9966", fontSize: 32 }} />
        </Link>

        {/* <p className=" text-white font-jost font-medium">Xavian10</p> */}
      </div>
    </header>
  );
};
