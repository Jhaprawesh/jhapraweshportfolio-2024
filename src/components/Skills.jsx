import React from "react";
import cssIcon from "../assets/image/svg/css-svgrepo-com.svg";
import figmaIcon from "../assets/image/svg/figma-svgrepo-com.svg";
import htmlIcon from "../assets/image/svg/html-5-svgrepo-com.svg";
import javascriptIcon from "../assets/image/svg/javascript-svgrepo-com.svg";
import mongoIcon from "../assets/image/svg/mongo-svgrepo-com.svg";
import nodeIcon from "../assets/image/svg/node-svgrepo-com.svg";
import routerIcon from "../assets/image/svg/react-router-svgrepo-com.svg";
import reactIcon from "../assets/image/svg/react-svgrepo-com.svg";
import tailwindIcon from "../assets/image/svg/tailwind-svgrepo-com.svg";
import expressIcon from "../assets/image/svg/icons8-express-js.svg";
import gitIcon from "../assets/image/svg/github-142-svgrepo-com.svg";

const skillComponent = [
  {
    id: "0",
    title: "Figma",
    Images: figmaIcon,
  },
  {
    id: "1",
    title: "HTML",
    Images: htmlIcon,
  },
  {
    id: "2",
    title: "CSS",
    Images: cssIcon,
  },
  {
    id: "3",
    title: "JavaScript",
    Images: javascriptIcon,
  },
  {
    id: "4",
    title: "React",
    Images: reactIcon,
  },
  {
    id: "5",
    title: "React Router",
    Images: routerIcon,
  },
  {
    id: "6",
    title: "Tailwind",
    Images: tailwindIcon,
  },
  {
    id: "7",
    title: "Node.js",
    Images: nodeIcon,
  },
  {
    id: "8",
    title: "ExpressJS",
    Images: expressIcon,
  },
  {
    id: "9",
    title: "MongoDB",
    Images: mongoIcon,
  },
  {
    id: "10",
    title: "GitHub",
    Images: gitIcon,
  },
  // Add more unique skills here
];

function Skills() {
  return (
    <div
      className="tw-mt-8 tw-grid tw-grid-cols-2 tw-gap-6 md:tw-grid-cols-4 lg:tw-grid-cols-5"
      id="frameworks-integration"
    >
      {skillComponent.map((item) => (
        <div
          key={item.id}
          className="tw-grid tw-w-full tw-min-w-[3rem] tw-transform tw-cursor-pointer tw-place-items-center tw-rounded-xl tw-border tw-border-blue-gray-50 tw-bg-white tw-px-3 tw-py-2 tw-transition-all hover:tw-scale-105 hover:tw-border-blue-gray-100 hover:tw-bg-blue-gray-50 hover:tw-bg-opacity-25"
        >
          <span className="tw-my-6 tw-grid tw-h-24 tw-w-24 tw-place-items-center">
            <img src={item.Images} alt={`${item.title} logo`} />
          </span>
        </div>
      ))}
    </div>
  );
}

export default Skills;
