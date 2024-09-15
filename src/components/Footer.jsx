import React, { useState, useEffect } from "react";
import SocialMediaLinks from "./SocialMediaLinks";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-end my-5">
        {isVisible && (
          <button
            type="button"
            className="btn btn-floating btn-lg"
            style={{ backgroundColor: "#1c7ed6" }}
            onClick={scrollToTop}
          >
            <i className="fas fa-arrow-up" style={{ color: "white" }}></i>
          </button>
        )}
      </div>
      <footer className="bg-light text-center text-white">
        <div className="container-fluid p-4 pb-0">
          <section className="mb-4">
            <SocialMediaLinks />
          </section>
        </div>

        <div className="text-center p-3 bg-black">
          © 2022 Copyright:
          <a className="text-white" href="https://praweshjha.netlify.app/">
            praweshjha.netlify.app
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
