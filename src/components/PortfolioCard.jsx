import React from "react";
import { Link } from "react-router-dom";
import { VscPreview } from "react-icons/vsc";
import "../styles/Card.css";

const PortfolioCard = ({ project }) => {
  return (
    <div className="card-list hover:tw-scale-105 tw-transition-all">
      <Link to={project.href} className="card-item" target="_blank">
        <img
          src={project.img}
          alt={project.alt || `Image of ${project.title}`}
          className="card-image"
        />
        <span className="tw-text-sm tw-text-pink-500 group-hover:tw-text-indigo-500">
          {project.category}
        </span>
        <h3 className="card-title">{project.title}</h3>
        <div className="arrow">
          <VscPreview size={20} className="card-icon" />
        </div>
      </Link>
    </div>
  );
};

export default PortfolioCard;
