import React from "react";
import { Link } from "react-router-dom";
import "./blog.css";
import blog1 from "../../assets/blog1.jpg";
import blog2 from "../../assets/blog2.jpg";
import blog3 from "../../assets/blog3.jpg";

const Blog = () => {
  return (
    <section id="blog" className="pink">
      <div className="wrapper">
        <h2 className="light">Latest Posts</h2>
        <div className="content-container">
          <div className="post">
            <div className="tag">DAW</div>
            <Link to="/allBlogs">
              <img
                style={{ width: "100%", height: "159px" }}
                src={blog1}
                alt="art"
                loading="lazy"
              />
            </Link>

            <Link to="/allBlogs">
              <h3 className="post-title">
                How To Use Drum Machine in Logic Pro X
              </h3>
            </Link>
          </div>

          <div className="post">
            <div className="tag">Mixing</div>
            <Link to="/allBlogs">
              <img
                style={{ width: "100%", height: "159px" }}
                src={blog2}
                alt="art"
                loading="lazy"
              />
            </Link>

            <Link to="/allBlogs">
              <h3 className="post-title">How To Mix Guitars Effectively</h3>
            </Link>
          </div>

          <div className="post">
            <div class="tag">Vox</div>
            <Link to="/allBlogs">
              <img
                style={{ width: "100%", height: "159px" }}
                src={blog3}
                alt="art"
                loading="lazy"
              />
            </Link>

            <Link to="/allBlogs">
              <h3 className="post-title">
                The Real Power of Harmonies in Music Production
              </h3>
            </Link>
          </div>
        </div>

        <div className="btn-container">
          <Link to="/allBlogs">
            <div className="all-posts-btn">All Posts</div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
