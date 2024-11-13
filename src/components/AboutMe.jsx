import Title from "./Title";
import Skills from "./Skills";

const AboutMe = () => {
  return (
    <>
      <div className="about text-light pb-5" id="aboutme">
        <div className="container pt-4" data-aos="fade-up">
          <Title
            title="About Me"
            subTitle="Know More About"
            titleClassName="tw-text-indigo-500"
          />
          <div className="row bg-black main p-3 rounded-3 d-flex align-items-center flex-column justify-content-center">
            <div className="col-12 col-md-6 text-center md-w-100">
              <div className="fs-2 text-capitalize mt-2 text-center">
                <p>
                  Hi, I am <span className="text-danger">Prawesh</span>, nice to
                  meet you!
                </p>
              </div>
              <div className="moreabout text-center">
                <p>
                  In recent years my focus has been on{" "}
                  <span className="fs-3 text-capitalize">
                    front-end technology
                  </span>{" "}
                  and
                  <span className="fs-3 text-capitalize">photography</span> for
                  web-development. My goal is not only to solve my clients'
                  problems, but to develop truly inspiring ideas and bring them
                  to life with the best team possible.
                </p>
              </div>
            </div>
          </div>
          <Skills />
        </div>
      </div>
    </>
  );
};

export default AboutMe;
