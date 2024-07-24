import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import "../styles/BlogList.css"; // Create a CSS file for styling
import Breadcrumbs from "./Breadcrumbs";
import ArticleList from "./ArticleList";

const data = "../blogs.json";
const NewBlog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(data)
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error fetching blog list:", error));
  }, []);

  return (
    <>
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
    </>
    // <div className="blog-list">
    //   <Breadcrumbs />
    //   <h1>Blog List</h1>
    //   <div className="blog-list-container">
    //     {blogs.map((blog) => (
    //       <div key={blog.id} className="blog-item">
    //         <img src={blog.img} alt={blog.title} className="blog-image" />
    //         <h2 className="blog-title">
    //           <Link to={`/blog/${blog.name}`}>{blog.title}</Link>
    //         </h2>
    //         <p className="blog-date">{blog.date}</p>
    //         <p className="blog-desc">{blog.desc}</p>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
};

export default NewBlog;
