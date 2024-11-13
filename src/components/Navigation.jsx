import { Button, Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { useCallback, useContext, useState } from "react";
import { Offcanvas, OffcanvasBody, OffcanvasHeader } from "react-bootstrap";
import { CiDark, CiLight } from "react-icons/ci";
import { Link } from "react-router-dom";
import logo from "../assets/image/jha.png";
import { ThemeContext } from "../context/ThemeContext";
import "../styles/Navigation.css";
import SocialMediaLinks from "./SocialMediaLinks";
import { Burger } from "@mantine/core";

function Demo() {
  return (
    <>
      <Drawer opened={opened} onClose={close} title="Authentication">
        {/* Drawer content */}
      </Drawer>

      <Button onClick={open}>Open Drawer</Button>
    </>
  );
}

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
    <li
      className={`nav-item ${
        activeLink === link
          ? "tw-bg-[#3b49df] tw-rounded-full tw-transition-all tw-text-white tw-font-semibold"
          : ""
      }`}
      key={link}
    >
      <a
        href={link}
        onClick={() => handleSetActiveLink(link)}
        className="tw-px-5 tw-py-3 tw-inline-block"
      >
        {label}
      </a>
    </li>
  );

  const themeButtonClass = `btn btn-floating m-1 ${
    theme === "dark-theme" ? "bg-dark text-white" : "bg-white"
  }`;

  return (
    <nav className="navbar navbar-expand-lg" id="navbar_top">
      <div className="container">
        <Link to="/">
          <img src={logo} alt="logo" width="80" className="main-logo" />
        </Link>

        {/* Navigation items for large screens */}
        <div className="collapse navbar-collapse d-none d-lg-block">
          <ul className="navbar-nav mx-auto">
            {navItems.map((item) => renderNavItem(item.link, item.label))}
          </ul>
          <section className="d-lg-block d-none">
            <SocialMediaLinks />
          </section>
        </div>
        <Burger
          className="tw-md:hidden"
          opened={openedDrawer}
          onClick={toggle}
          aria-label="Toggle navigation"
        />
        {/* Offcanvas menu for small screens */}
        <Drawer opened={openedDrawer} onClose={toggle}>
          <ul className="navbar-nav text-center">
            {navItems.map((item) => renderNavItem(item.link, item.label))}
          </ul>
          <section className="tw-md:hidden tw-items-center">
            <SocialMediaLinks />
          </section>
        </Drawer>

        {/* Theme toggle and mobile menu button */}
        <div>
          <button
            onClick={toggleTheme}
            className={themeButtonClass}
            aria-label="Toggle Theme"
          >
            {theme === "dark-theme" ? <CiDark /> : <CiLight />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
