import React from "react";
import Topbar from "../Components/Topbar/Topbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

const Layout = () => {
  return (
    <>
      <Topbar />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
