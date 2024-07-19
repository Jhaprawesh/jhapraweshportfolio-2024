import React from "react";
import { useLocation } from "react-router-dom";
import BreadComponent from "./BreadComponent";
// Assuming you use React Router

const Breadcrumbs = () => {
  const location = useLocation();

  // Define your condition based on the location pathname
  const shouldRenderBreadcrumbs = location.pathname === "/blog";

  // Return null if the condition is false, otherwise render the breadcrumbs
  return shouldRenderBreadcrumbs ? <BreadComponent /> : null;
};

export default Breadcrumbs;
