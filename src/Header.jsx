import React from "react";

const Header = () => {
  return (
    <div className="head position-relative">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="text-white d-grid gap-4">
              <h4 className="text-capitalize">
                <div className="animate-charcter" id="word"></div>
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
