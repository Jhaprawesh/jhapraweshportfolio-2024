import React from "react";
import { useState, useEffect } from "react";

const Header = () => {
  const words = ["HTML", "CSS", "JavaScript", "React"];
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const word = words[index];
    let timer;

    if (isTyping) {
      // Typing effect
      if (displayedText.length < word.length) {
        timer = setTimeout(() => {
          setDisplayedText(word.substring(0, displayedText.length + 1));
        }, 250);
      } else {
        // Pause before starting to delete
        setIsTyping(false);
        timer = setTimeout(() => {}, 500);
      }
    } else {
      // Deleting effect
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(word.substring(0, displayedText.length - 1));
        }, 150);
      } else {
        // Move to the next word
        setIsTyping(true);
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isTyping, index, words]);
  return (
    <div className="head position-relative">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="text-white d-grid gap-4">
              <h4 className="text-capitalize">
                <div className="animate-charcter fw-bold bg-white" id="word">
                  {displayedText}
                </div>
              </h4>
              <div className="text-capitalize lh-sm">
                <h1
                  className="fs-1"
                  style={{ color: "#c2255c", fontSize: "35px" }}
                >
                  Front-end{" "}
                </h1>
                <span className="fs-1">developer based in India</span>
              </div>
              <p className="text-capitalize" style={{ color: "gray" }}>
                A career as a front-end web developer can flex your creativity
                and problem-solving skills. As a field that is constantly
                evolving to incorporate new technology, front-end development
                can reward those who like to learn new things and face
                challenges. The next few sections outline some of the most
                prominent skills for front-end developers.
              </p>
              <div className="button g-3">
                <button type="button" className="btn btn-primary text-white">
                  <a
                    href="./front-end.pdf"
                    className="text-decoration-none text-white"
                    download
                  >
                    Resume
                  </a>
                </button>
                <button type="button" className="btn btn-outline-warning">
                  <a href="/" className="text-decoration-none text-white">
                    Hire Me
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="/src/assets/image/office.png"
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
