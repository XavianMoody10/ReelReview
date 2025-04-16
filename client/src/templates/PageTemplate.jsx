import React from "react";
import { Header } from "../layouts/Header";
import { SideNavigation } from "../layouts/SideNavigation";
import { Outlet } from "react-router-dom";

export const PageTemplate = () => {
  return (
    <>
      <Header />
      <SideNavigation />
      <main className=" min-h-screen bg-[#333333]">
        <Outlet />
      </main>
    </>
  );
};
