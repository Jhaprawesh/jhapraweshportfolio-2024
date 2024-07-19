import React from "react";
import { RiArrowRightSFill } from "react-icons/ri";

function BreadComponent() {
  return (
    <ol className="breadcrumb font-weight-bold mt-3 align-items-center ">
      <li className="breadcrumb-item">
        <i className="fa fa-home color-danger"></i>{" "}
        <a href="/" className="text-decoration-none">
          Home
        </a>
      </li>
      <RiArrowRightSFill className="fs-4" />
      <li className="breadcrumb-item">
        <a href="/blog" className="text-decoration-none">
          Blog
        </a>
      </li>
    </ol>
  );
}

export default BreadComponent;
