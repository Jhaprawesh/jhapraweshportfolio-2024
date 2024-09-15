import React from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import mainImage from "../assets/image/office.png";

const Header = () => {
  const typewriterOptions = {
    strings: ["HTML", "CSS", "JavaScript", "React"],
    autoStart: true,
    loop: true,
  };
  // styles in object

  // const styles = {
  //   heading: {
  //     color: "",
  //     fontSize: "35px",
  //   },
  //   paragraph: {
  //     color: "gray",
  //   },
  //   buttonGroup: {
  //     display: "flex",
  //     gap: "10px",
  //   },
  // };

  return (
    <header className="position-relative tw-bg-hero-pattern tw-bg-no-repeat tw-object-cover tw-bg-cover tw-py-20">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="text-white d-grid gap-4">
              <h4 className="text-capitalize">
                <div className="animate-charcter fw-bold bg-white">
                  <Typewriter options={typewriterOptions} />
                </div>
              </h4>

              <div className="text-capitalize lh-sm">
                <h1 className=" tw-text-[#c2255c] tw-text-4xl">Front-end</h1>
                <span className="fs-1">developer based in India</span>
              </div>

              <p className="text-capitalize tw-text-gray-300">
                A career as a front-end web developer can flex your creativity
                and problem-solving skills. As a field that is constantly
                evolving to incorporate new technology, front-end development
                can reward those who like to learn new things and face
                challenges. The next few sections outline some of the most
                prominent skills for front-end developers.
              </p>

              <div className="tw-grid tw-gap-4 tw-grid-cols-2">
                <a
                  href="./front-end.pdf"
                  className="btn btn-primary text-white tw-no-underline"
                  download
                >
                  Resume
                </a>
                <Link
                  to="/contact"
                  className="btn btn-outline-warning text-white"
                >
                  Hire Me
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-6 text-center">
            <img src={mainImage} alt="Office workspace" className="img-fluid" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
