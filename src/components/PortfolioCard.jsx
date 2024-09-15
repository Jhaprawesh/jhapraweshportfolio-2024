import React from "react";
import { Link } from "react-router-dom";
import { VscPreview } from "react-icons/vsc";

const PortfolioCard = ({ project, index }) => {
  return (
    <>
      <div
        key={index}
        className="tw-group tw-portfolio-item tw-relative hover:tw-shadow-lg tw-shadow-md tw-rounded-lg tw-overflow-hidden"
      >
        <Link to={project.href}>
          <img
            className="tw-w-full tw-h-60 tw-object-cover"
            src={project.img}
            alt={project.alt}
          />
          <div className="tw-absolute tw-top-0 tw-left-0 tw-right-0 tw-bottom-0 tw-bg-gradient-to-r tw-from-indigo-500 tw-to-pink-500 tw-opacity-0 tw-transition tw-duration-300 tw-ease-in-out group-hover:tw-opacity-70 tw-shadow-md">
            <div className="tw-p-4 tw-flex tw-flex-col tw-items-center tw-justify-between tw-relative tw-z-10">
              <h3 className="tw-text-lg tw-font-medium tw-text-txt tw-group-hover:tw-text-black-dark">
                {project.title}
              </h3>
              <div className="tw-rounded-md tw-bg-slate-100 tw-py-0.5 tw-px-2.5 tw-border tw-border-transparent tw-text-sm tw-text-slate-600 tw-transition-all tw-shadow-sm">
                <span className="tw-text-sm tw-text-pink-500 tw-group-hover:tw-text-indigo-500">
                  {project.category}
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default PortfolioCard;
