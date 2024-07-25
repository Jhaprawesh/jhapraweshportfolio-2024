import React, { useState } from "react";
import { Offcanvas, OffcanvasHeader, OffcanvasBody } from "react-bootstrap";
import "../styles/Navigation.css";
import logo from "../assets/image/jha.png";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";

// The Navigation component
const Navigation = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  // State to manage the visibility of the Offcanvas menu
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  // State to keep track of the currently active link
  const [activeLink, setActiveLink] = useState("/");
  // Function to close the Offcanvas menu
  const handleClose = () => setShowOffcanvas(false);
  // Function to show the Offcanvas menu
  const handleShow = () => setShowOffcanvas(true);

  // Function to set the active link and close the Offcanvas menu
  const handleSetActiveLink = (link) => {
    setActiveLink(link);
    setShowOffcanvas(false); // Close the Offcanvas menu when a link is clicked
  };

  // Navigation items
  const navItems = [
    { link: "/", label: "Home" },
    { link: "#aboutme", label: "About" },
    { link: "#service", label: "Service" },
    { link: "#portfolio", label: "Portfolio" },
    { link: "#blog", label: "Blog" },
    { link: "#contactus", label: "Contact" },
  ];

  // Helper function to render a navigation item
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

  return (
    <nav className="navbar navbar-expand-lg" id="navbar_top">
      <div className="container">
        {/* Logo */}
        <img src={logo} alt="logo" width="80" className="main-logo" />
        {/* Button to show Offcanvas menu on small screens */}

        {/* Navigation items for large screens */}
        <div className="collapse navbar-collapse d-none d-lg-block container">
          <ul className="navbar-nav mx-auto">
            {navItems.map((item) => renderNavItem(item.link, item.label))}
          </ul>

          {/* Social media links */}

          <section className="d-lg-block d-none">
            <div className="d-lg-block d-none">
              <a
                className="btn text-white btn-floating m-1"
                style={{ backgroundColor: "#ac2bac" }}
                href="https://www.instagram.com/jha_prawesh/"
                role="button"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                className="btn text-white btn-floating m-1"
                style={{ backgroundColor: "#0082ca" }}
                href="https://www.linkedin.com/in/prawesh-jha-54ab98215/"
                role="button"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                className="btn text-white btn-floating m-1"
                style={{ backgroundColor: "#333333" }}
                href="https://github.com/Jhaprawesh"
                role="button"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
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
            ></button>
          </OffcanvasHeader>
          <OffcanvasBody className="justify-content-md-center container">
            <ul className="navbar-nav text-center">
              {navItems.map((item) => renderNavItem(item.link, item.label))}
            </ul>
          </OffcanvasBody>
        </Offcanvas>
        <div>
          <button
            onClick={() => toggleTheme()}
            className={`btn btn-floating m-1 ${
              theme === "dark-theme" ? "bg-dark text-white" : "bg-white"
            }`}
          >
            {theme === "dark-theme" ? <CiDark /> : <CiLight />}
          </button>
          <button className="btn d-lg-none" type="button" onClick={handleShow}>
            <i className="fa-solid fa-bars-staggered fs-1"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
