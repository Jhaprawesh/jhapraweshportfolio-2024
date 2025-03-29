import React from "react";
import Title from "./Title";
// import "./App.css"; // Ensure you have this CSS file for any custom styles

const services = [
  {
    title: "Web Design",
    description:
      "Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development rather than software development.",
    image:
      "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/40/000000/external-customize-productivity-flaticons-lineal-color-flat-icons-2.png",
    link: "https://www.wix.com/blog/2021/05/web-design/",
  },
  {
    title: "Well Documented",
    description:
      "Code documentation is the collection of easy to understand images and written descriptions that explain what a codebase does and how it can be used.",
    image: "https://img.icons8.com/fluency/40/000000/document-header.png",
    link: "https://www.olioapps.com/blog/the-value-of-code-documentation/#:~:text=Documenting%20code%20is%20part%20of,give%20context%20to%20future%20readers",
  },
  {
    title: "Fully Customizable",
    description:
      "Customization allows users to select the content, layout, functionality or design that appeals to them.",
    image:
      "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/40/000000/external-customize-productivity-flaticons-lineal-color-flat-icons-2.png",
    link: "http://codex-themes.com/codeus/features/customization/fully-customizable/",
  },
  {
    title: "Fast & Easy",
    description:
      "If you want to move fast, you can't spend time in details when you don't even know if the base idea works, you need focus on what is important.",
    image:
      "https://img.icons8.com/external-basicons-solid-edtgraphics/40/000000/external-fast-coding-basicons-solid-edtgraphics.png",
    link: "https://www.quickandeasywebbuilder.com/",
  },
  {
    title: "Photography",
    description:
      "Photography is the art of capturing light with a camera, usually via a digital sensor or film, to create an image.",
    image:
      "https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/40/000000/external-photography-online-learning-xnimrodx-lineal-color-xnimrodx.png",
    link: "https://photographylife.com/what-is-photography",
  },
  {
    title: "UI & UX Design",
    description:
      "A user experience (UX) designer works on a team to create products that provide meaningful and enjoyable experiences for users.UI (user interface) designers build interfaces in software or other computerized devices.",
    image:
      "https://img.icons8.com/external-dygo-kerismaker/40/000000/external-UX-art-and-design-dygo-kerismaker.png",
    link: "https://careerfoundry.com/en/blog/ux-design/the-difference-between-ux-and-ui-design-a-laymans-guide/",
  },
];

const ServiceCard = ({ title, description, image, link }) => {
  return (
    <div
      className="col-md-4 mb-3 d-flex align-items-stretch"
      data-aos="fade-up"
    >
      <div className="border border-primary shadow-sm p-3 rounded tw-flex tw-flex-col">
        <div className="d-flex justify-content-center flex-column align-items-center">
          <img src={image} alt={title} />
        </div>
        <h4 className="card-title text-center mb-3">{title}</h4>
        <p className="card-text text-center">{description}</p>
        <div className="card-body d-flex flex-column p-0 mt-2">
          <a href={link} className="btn btn-primary mt-auto align-self-center">
            Learn More<i className="bi bi-box-arrow-in-up-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="container-fluid">
      <div className="container" id="service">
        <div className="service row g-2 mb-3 mt-3">
          <Title
            title="Services!"
            subTitle="Related To Services"
            titleClassName="tw-text-indigo-700"
          />
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
