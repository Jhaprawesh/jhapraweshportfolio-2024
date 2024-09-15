import React, { useCallback, useContext, useState } from "react";
import { Offcanvas, OffcanvasBody, OffcanvasHeader } from "react-bootstrap";
import { CiDark, CiLight } from "react-icons/ci";
import logo from "../assets/image/jha.png";
import { ThemeContext } from "../context/ThemeContext";
import "../styles/Navigation.css";
import SocialMediaLinks from "./SocialMediaLinks";

const Navigation = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  const handleClose = useCallback(() => setShowOffcanvas(false), []);
  const handleShow = useCallback(() => setShowOffcanvas(true), []);

  const handleSetActiveLink = useCallback((link) => {
    setActiveLink(link);
    setShowOffcanvas(false);
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
      className={`nav-item ${activeLink === link ? "active" : ""}`}
      key={link}
    >
      <a href={link} onClick={() => handleSetActiveLink(link)}>
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
        <img src={logo} alt="logo" width="80" className="main-logo" />

        {/* Navigation items for large screens */}
        <div className="collapse navbar-collapse d-none d-lg-block">
          <ul className="navbar-nav mx-auto">
            {navItems.map((item) => renderNavItem(item.link, item.label))}
          </ul>
          <section className="d-lg-block d-none">
            <SocialMediaLinks />
          </section>
        </div>

        {/* Offcanvas menu for small screens */}
        <Offcanvas
          show={showOffcanvas}
          onHide={handleClose}
          placement="end"
          className="w-50"
        >
          <OffcanvasHeader className="justify-content-end">
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={handleClose}
            />
          </OffcanvasHeader>
          <OffcanvasBody className="justify-content-md-center container">
            <ul className="navbar-nav text-center">
              {navItems.map((item) => renderNavItem(item.link, item.label))}
            </ul>
            <div>
              <SocialMediaLinks />
            </div>
          </OffcanvasBody>
        </Offcanvas>

        {/* Theme toggle and mobile menu button */}
        <div>
          <button
            onClick={toggleTheme}
            className={themeButtonClass}
            aria-label="Toggle Theme"
          >
            {theme === "dark-theme" ? <CiDark /> : <CiLight />}
          </button>
          <button className="btn d-lg-none" type="button" onClick={handleShow}>
            <i
              className="fa-solid fa-bars-staggered fs-1"
              aria-hidden="true"
            ></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
