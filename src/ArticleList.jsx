import React from "react";
import { Link } from "react-router-dom";
import "./ArticleList.css";

const ArticleList = ({ articles }) => (
  <>
    <div className="row app">
      <div className="container mt-4 mb-5" id="blog">
        <h2 className="text-capitalize text-center mt-2">My Blog</h2>
      </div>
      {articles.map((article, key) => (
        <div className="col-md-4 mb-5">
          <div className="newcard">
            <Link className="newcard" key={key} to={`/blog/${article.name}`}>
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
                <p>{article.content[0].substring(0, 100)}...</p>
                <div className="user">
                  <img src="/src/assets/image/loginimg.png" alt="" />
                  <div className="user-info">
                    <h5>
                      <a href={article.authorlink} class="text-decoration-none">
                        {article.author}
                      </a>
                    </h5>
                    <small> {article.date}</small>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  </>
);

export default ArticleList;
