import React, { useEffect, useState } from "react";
import Title from "./Title";
import Skills from "./Skills";
const Skill = ({ name, percent, color }) => {
  const [width, setWidth] = useState("0%");
  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(percent);
    }, 1000); // Delay to ensure smooth transition

    return () => clearTimeout(timer);
  }, [percent]);

  return (
    <>
      <dt className="skill-name">{name}</dt>
      <dd
        className="skill-percent"
        style={{ width, backgroundColor: color }}
        data-percent={percent}
      ></dd>
    </>
  );
};

const AboutMe = () => {
  return (
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
                problems, but to develop truly inspiring ideas and bring them to
                life with the best team possible.
              </p>
            </div>
          </div>
        </div>
        <Skills />
        <div className="row mt-3" data-aos="fade-down">
          <div className="new-skill-design">
            <div className="container-fluid" id="skills">
              <div className="row">
                <div className="col-lg-12">
                  <div className="skills-text">
                    <h2 className="skills-title underline text-center d-block">
                      Skills
                    </h2>
                    <dl className="skills-list">
                      <Skill name="HTML" percent="90%" color="#e34c26" />
                      <Skill name="CSS" percent="82%" color="#264de4" />
                      <Skill name="jQuery" percent="28%" color="#0769ad" />
                      <Skill name="SCSS" percent="22%" color="#c6538c" />
                      <Skill name="JavaScript" percent="25%" color="#f7df1e" />
                      <Skill name="WordPress" percent="77%" color="#21759b" />
                      <Skill name="PHP" percent="20%" color="#787cb5" />
                      <Skill name="GIT" percent="30%" color="#f34f29" />
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
