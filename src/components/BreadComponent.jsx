import React from "react";
import { RiArrowRightSFill } from "react-icons/ri";
import { Link } from "react-router-dom";

function BreadComponent() {
  return (
    <ol className="breadcrumb font-weight-bold mt-3 align-items-center ">
      <li className="breadcrumb-item">
        <i className="fa fa-home color-danger"></i>{" "}
        <Link to="/" className="text-decoration-none">
          Home
        </Link>
      </li>
      <RiArrowRightSFill className="fs-4" />
      <li className="breadcrumb-item">
        <Link to="/blog" className="text-decoration-none">
          Blog
        </Link>
      </li>
    </ol>
  );
}

export default BreadComponent;
