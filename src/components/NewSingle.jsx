import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import matter from "gray-matter";
import blogData from "../../blogs.json";
import BreadComponent from "./BreadComponent";
import "../styles/MarkdownStyles.css";
import ScrollIndicator from "./ScrollIndicator";

const imageStyle = {
  maxWidth: "100%",
  height: "285px",
  marginBottom: "20px",
  width: "100%",
};

const headingStyle = {
  marginTop: "20px",
  fontSize: "2rem",
};

const SinglePage = () => {
  const { name } = useParams();
  const [content, setContent] = useState("");
  const [metadata, setMetadata] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMarkdown = async () => {
      try {
        console.log(`Importing file from path: ../../blogs/${name}.md`);
        const markdown = await import(`../../blogs/${name}.md`);
        const response = await fetch(markdown.default);
        const text = await response.text();

        const { content } = matter(text);
        setContent(content);

        const blogMetadata = blogData.find((blog) => blog.name === name);
        if (blogMetadata) {
          setMetadata(blogMetadata);
        } else {
          throw new Error("Blog metadata not found");
        }
      } catch (err) {
        console.error("Error loading markdown:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadMarkdown();
  }, [name]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading blog post: {error}</div>;
  }

  return (
    <>
      <ScrollIndicator />
      <div>
        <div
          className="py-2 px-2 py-lg-5 px-lg-5"
          style={{ background: "#E6E6FA" }}
        >
          <div className="d-flex align-items-center container flex-column flex-md-row gap-md-5">
            <div className="col-12 col-md-7 col-lg-6 text-center">
              <div>
                <img
                  style={imageStyle}
                  className="img-fluid card object-fit-cover"
                  alt={metadata.title}
                  src={metadata.img}
                />
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-6">
              <BreadComponent />
              <h1 style={headingStyle}>{metadata.title}</h1>
              <p className="date">
                <a href={metadata.authorlink} className="text-decoration-none">
                  {metadata.author}
                </a>{" "}
                {metadata.date}
              </p>
              <p className="dotted" />
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <ReactMarkdown className="markdown-body">{content}</ReactMarkdown>
      </div>
    </>
  );
};

export default SinglePage;
