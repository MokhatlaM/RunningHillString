import React from "react";
import Topbar from "../Components/Topbar/Topbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import "./Layout.css";
const Layout = () => {
  return (
    <>
      <div className="content-container">
        <Topbar />

        <div className="content">
          <Outlet />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Layout;
