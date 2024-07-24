import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/ArticleList.css";
import adminLogo from "../assets/image/adminLogo.png";

const ArticleList = ({ Data }) => {
  const [visibleCount, setVisibleCount] = useState(6);

  const loadMore = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 6, Data.length));
  };

  const loadLess = () => {
    setVisibleCount((prevCount) => Math.max(prevCount - 6, 6));
  };

  return (
    <>
      <div className="row">
        <div className="container mt-4 mb-5" id="blog">
          <h2 className="text-capitalize text-center mt-2">My Blog</h2>
        </div>
        {Data.slice(0, visibleCount).map((article, key) => (
          <div className="col-md-4 mb-5" key={key}>
            <div className="newcard">
              <Link className="newcard" to={`/blog/${article.name}`}>
                <div className="newcard-header">
                  <img
                    className="img-fluid"
                    alt="{article.title}"
                    src={article.img}
                  />
                </div>
                <div className="newcard-body">
                  <span className="tag tag-blue">Technology</span>
                  <h4>{article.title}</h4>
                  <div className="user">
                    <img src={adminLogo} alt="Admin Logo" />
                    <div className="user-info">
                      <h5>
                        <Link
                          href={article.authorlink}
                          className="text-decoration-none"
                        >
                          {article.author}
                        </Link>
                      </h5>
                      <small>{article.date}</small>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="mb-5">
        {(visibleCount < Data.length || visibleCount > 6) && (
          <div className="text-center">
            {visibleCount < Data.length && (
              <Link to="/Blog">
                <button className="btn btn-primary mr-2" onClick={loadMore}>
                  Load More
                </button>
              </Link>
            )}
            {visibleCount > 6 && (
              <button className="btn btn-secondary" onClick={loadLess}>
                Load Less
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default ArticleList;
