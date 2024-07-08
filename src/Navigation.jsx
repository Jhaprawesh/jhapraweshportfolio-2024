import React, { useState } from "react";
import { Offcanvas, OffcanvasHeader, OffcanvasBody } from "react-bootstrap";

const Navigation = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const handleClose = () => setShowOffcanvas(true);
  const handleShow = () => setShowOffcanvas(false);

  return (
    <nav className="navbar navbar-expand-lg" id="navbar_top">
      <div className="container">
        <img
          src="/src/assets/image/jha.png"
          alt="logo"
          width="80"
          className="main-logo"
        />
        <button className="btn d-lg-none" type="button" onClick={handleShow}>
          <i className="fa-solid fa-bars-staggered fs-1"></i>
        </button>
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
          <OffcanvasBody className="justify-content-md-center">
            <ul className="navbar-nav text-center">
              <li className="nav-item">
                <a
                  className="nav-link active text-dark"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#aboutme">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#service">
                  Service
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#blog">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#contactus">
                  Contact
                </a>
              </li>
            </ul>
          </OffcanvasBody>
        </Offcanvas>
        <div className="d-none d-lg-block">
          <section>
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
          </section>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
