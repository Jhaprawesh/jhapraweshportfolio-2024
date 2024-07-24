import React from "react";
import first from "../assets/image/bb.jpg";
import sec from "../assets/image/calculator.jpg";
import the from "../assets/image/Tech-Business-2.webp";
import four from "../assets/image/new--.jpg";
import five from "../assets/image/main-image.jpg";
import six from "../assets/image/wheather.jpg";

const portfolioItems = [
  {
    title: "1. Breaking Bad Character",
    description: "",
    image: first,
    link: "https://jhabreakingbad.netlify.app",
  },
  {
    title: "2. Calculator App",
    description: "",
    image: sec,
    link: "https://jhapraweshcalculator.netlify.app",
  },
  {
    title: "3. Quiz App",
    description: "",
    image: the,
    link: "https://jhapraweshquizapp.netlify.app",
  },
  {
    title: "4. Portfolio App",
    description: "",
    image: four,
    link: "https://jhaprawesh.netlify.app",
  },
  {
    title: "5. ID Generator App",
    description: "",
    image: five,
    link: "https://jhapraweshapi.netlify.app",
  },
  {
    title: "6. Weather App",
    description: "",
    image: six,
    link: "https://jhaweather.netlify.app",
  },
];

const PortfolioCard = ({ title, image, link }) => {
  return (
    <div className="mycard col-md-4 position-relative overflow-hidden ">
      <img
        src={image}
        alt={title}
        className="img-thumbnail"
        style={{ objectFit: "cover" }}
      />
      <div className="overlay position-absolute top-0 start-0 bottom-0 end-0 text-white text-center w-100 h-100">
        <div className="position-absolute top-50 start-50 translate-middle">
          <h3 className="text-capitalize">{title}</h3>
          <div className="d-flex justify-content-center align-content-center">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <button type="button" className="btn btn-primary">
                <i className="bi bi-window-fullscreen"></i> Live Preview
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  return (
    <div className="container">
      <div className="portfolio mb-4" id="portfolio">
        <div className="text-center mb-5">
          <h2>Project's</h2>
        </div>
        <div className="row h-50 row-gap-5" data-aos="fade-up">
          {portfolioItems.map((item, index) => (
            <PortfolioCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
