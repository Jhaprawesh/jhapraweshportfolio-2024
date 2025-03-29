import React from "react";
import ArticleContent from "./ArticleContent";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../styles/Select.css";
import { height, width } from "@fortawesome/free-solid-svg-icons/fa0";
import BreadComponent from "./BreadComponent";
import ScrollIndicator from "./ScrollIndicator";

const imageStyle = {
  width: "100%",
  height: "350px",
  objectFit: "cover",
};

const headingStyle = {
  fontWeight: "700",
  fontSize: "36px",
  lineHeight: "50px",
  margin: "20px 0 25px",
};

const SinglePage = () => {
  const { name } = useParams();
  const blog = ArticleContent.find((blogs) => blogs.name === name);
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{blog.title}</title>
        <meta content={blog.desc} name="description" />
        <meta content={blog.title} property="og:title" />
        <meta content={blog.desc} property="og:description" />
        <meta content={blog.img} property="og:image" />
        <meta content="" property="og:author" />
        <meta content={blog.title} name="facebook:title" />
        <meta content="website" property="og:type" />
        <meta content="" property="facebook:author" />
        <meta content={blog.img} name="facebook:image" />
        <meta content={blog.title} property="og:site_name" />
        <meta content={blog.desc} property="facebook:description" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="" property="twitter:author" />
        <link rel="apple-touch-icon" href={blog.img} />
        <link href={blog.img} rel="icon" type="image/x-icon" />
        <meta content="@hockeycomp" name="twitter:site" />
        <meta content={blog.img} name="twitter:image" />
        <meta content={blog.desc} name="twitter:description" />
        <meta content={blog.title} name="twitter:title" />
      </Helmet>

      <div className="py-5" style={{ background: "#E6E6FA" }}>
        <div className="d-flex align-items-center flex-column-reverse">
          <div className="col-lg-6 text-center">
            <div>
              <img
                style={imageStyle}
                className="img-fluid card"
                alt="{blog.title}"
                src={blog.img}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <BreadComponent />
            <h1 style={headingStyle}>{blog.title}</h1>
            <h3>{blog.desc}</h3>
            <p className="date">
              <a href={blog.authorlink} className="text-decoration-none">
                {blog.author}
              </a>{" "}
              {blog.date}
            </p>
            <p className="dotted" />
          </div>
        </div>
      </div>
      <div className="p-1">
        <div className="card p-1">
          <main className="card-content p-3 p-md-5">
            {blog.content.map((paragraph, key) => (
              <p key={key}>{paragraph}</p>
            ))}
          </main>
        </div>
      </div>
    </>
  );
};
export default SinglePage;
