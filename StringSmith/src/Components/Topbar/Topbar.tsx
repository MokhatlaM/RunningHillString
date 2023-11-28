import React, { useState } from "react";
import { Button, Nav, NavItem, NavbarBrand } from "reactstrap";
import { navlinks } from "../../Data/navlinks";
import "./Topbar.css";
import { Link } from "react-router-dom";
import { FaBeer } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

interface INavprops {
  name: string;
  link: string;
}

const Topbar = () => {
  const [menuShow, setShowMenu] = useState(false);
  const [activeLink, setActiveLink] = useState(false);

  const handleMenu = () => {
    setShowMenu((prevState) => !prevState);
  };
  return (
    <>
      <div className="Topbar">
        <header className="navhead">
          <NavbarBrand>STRING SMITH</NavbarBrand>
        </header>

        <div className="navlinks">
          <ul className="navlist">
            {navlinks.map((navlink: INavprops, index: number) => {
              return (
                <NavItem className="navitem" key={index}>
                  <Link to={navlink.link}>{navlink.name}</Link>
                </NavItem>
              );
            })}
          </ul>
          <div className="Menu">
            <button className="button" onClick={handleMenu}>
              <FiMenu />
            </button>
            <Drawer
              open={menuShow}
              onClose={handleMenu}
              direction="right"
              className="Drawer"
            >
              {navlinks.map((navlink: INavprops, index: number) => {
                return (
                  <NavItem className="navitem" key={index}>
                    <Link onClick={handleMenu} to={navlink.link}>
                      {navlink.name}
                    </Link>
                  </NavItem>
                );
              })}
            </Drawer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
