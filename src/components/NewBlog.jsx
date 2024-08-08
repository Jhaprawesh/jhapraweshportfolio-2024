import React, { useEffect, useState } from "react";
import "../styles/BlogList.css";
import Breadcrumbs from "./Breadcrumbs";
import ArticleList from "./ArticleList";
import data from "../../blogs.json"; // Directly import JSON file

const NewBlog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(data);
  }, []);

  return (
    <div className="container">
      {blogs.length === 0 ? (
        <p>No blogs available</p>
      ) : (
        <>
          <Breadcrumbs />
          <ArticleList Data={blogs} />
        </>
      )}
    </div>
  );
};

export default NewBlog;
