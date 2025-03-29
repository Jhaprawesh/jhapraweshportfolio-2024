import { Burger, Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { useCallback, useContext, useState } from "react";
import { CiDark, CiLight } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/image/jha.png";
import { ThemeContext } from "../context/ThemeContext";
import "../styles/Navigation.css";
import SocialMediaLinks from "./SocialMediaLinks";

const Navigation = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const [activeLink, setActiveLink] = useState("/");
  const [openedDrawer, { toggle }] = useDisclosure();

  const handleSetActiveLink = useCallback((link) => {
    setActiveLink(link);
  }, []);

  const navItems = [
    { link: "/", label: "Home" },
    { link: "#aboutme", label: "About" },
    { link: "#service", label: "Service" },
    { link: "#portfolio", label: "Portfolio" },
    { link: "#blog", label: "Blog" },
    { link: "#contactus", label: "Contact" },
  ];

  const renderNavItem = (link, label) => (
    <li key={link} className="nav-item">
      <NavLink
        reloadDocument
        to={link}
        onClick={() => handleSetActiveLink(link)}
        className={({ isActive }) =>
          `tw-px-5 tw-py-3 tw-inline-block ${
            isActive && activeLink === link
              ? "tw-bg-[#3b49df] tw-rounded-full tw-transition-all tw-text-white tw-font-semibold"
              : ""
          }`
        }
      >
        {label}
      </NavLink>
    </li>
  );

  const themeButtonClass = `btn btn-floating m-1 ${
    theme === "dark-theme" ? "bg-dark text-white" : "bg-white"
  }`;

  return (
    <nav className="navbar navbar-expand-lg" id="navbar_top">
      <div className="container">
        {/* Logo */}
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="logo" width="80" className="main-logo" />
        </Link>

        {/* Navigation for large screens */}
        <div className="collapse navbar-collapse d-none d-lg-block">
          <ul className="navbar-nav mx-auto">
            {navItems.map((item) => renderNavItem(item.link, item.label))}
          </ul>
          <SocialMediaLinks />
        </div>

        {/* Mobile Menu Burger */}
        <Burger
          className="d-lg-none"
          opened={openedDrawer}
          onClick={toggle}
          aria-label="Toggle navigation menu"
        />

        {/* Offcanvas Drawer for small screens */}
        <Drawer
          opened={openedDrawer}
          onClose={toggle}
          title="Menu"
          aria-labelledby="navigation-drawer"
        >
          <ul className="navbar-nav text-center">
            {navItems.map((item) => renderNavItem(item.link, item.label))}
          </ul>
          <SocialMediaLinks />
        </Drawer>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className={themeButtonClass}
          aria-label="Toggle Theme"
        >
          {theme === "dark-theme" ? (
            <CiDark size={24} />
          ) : (
            <CiLight size={24} />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
