import React from "react";
import { Link } from "react-router-dom";
import "./blog.css";
import blog1 from "../../assets/blog1.jpg";
import blog2 from "../../assets/blog2.jpg";
import blog3 from "../../assets/blog3.jpg";
import blog4 from "../../assets/blog4.jpg";
import blog5 from "../../assets/blog5.jpg";
import blog6 from "../../assets/blog6.jpg";
import blog7 from "../../assets/blog7.jpg";
import blog8 from "../../assets/blog8.jpg";
import blog9 from "../../assets/blog9.jpg";
import blog10 from "../../assets/blog10.jpg";
import blog11 from "../../assets/blog11.jpg";
import blog12 from "../../assets/blog12.jpg";
import blog13 from "../../assets/blog13.jpg";
import blog14 from "../../assets/blog14.jpg";
import blog15 from "../../assets/blog15.jpg";

const AllBlogs = () => {
  return (
    <section id="blog" className="pink allBlogs">
      <div className="wrapper">
        <div className="allBlogs-btn">
          <h2 className="light">All Posts</h2>
          <Link id="allBlogs-home-btn" to="/">
            <h2 className="light">Home</h2>
          </Link>
        </div>
        <div className="content-container">
          <div className="post">
            <div className="tag">DAW</div>
            <Link>
              <img
                src={blog1}
                alt="art"
                style={{ width: "100%", height: "159px" }}
                loading="lazy"
              />
            </Link>

            <Link>
              <h3 className="post-title">
                How To Use Drum Machine in Logic Pro X
              </h3>
            </Link>
          </div>

          <div className="post">
            <div className="tag">Mixing</div>
            <Link>
              <img
                src={blog2}
                alt="art"
                style={{ width: "100%", height: "159px" }}
                loading="lazy"
              />
            </Link>

            <Link>
              <h3 className="post-title">How To Mix Guitars Effectively</h3>
            </Link>
          </div>

          <div className="post">
            <div className="tag">Vox</div>
            <Link>
              <img
                src={blog3}
                alt="art"
                style={{ width: "100%", height: "159px" }}
                loading="lazy"
              />
            </Link>

            <Link>
              <h3 className="post-title">
                The Real Power of Harmonies in Music Production
              </h3>
            </Link>
          </div>

          <div className="post">
            <div class="tag">Mixing</div>
            <Link>
              <img
                src={blog4}
                alt="art"
                style={{ width: "100%", height: "159px" }}
                loading="lazy"
              />
            </Link>

            <Link>
              <h3 className="post-title">
                Recognize scales and key signatures
              </h3>
            </Link>
          </div>

          <div className="post">
            <div class="tag">Daw</div>
            <Link>
              <img
                src={blog5}
                alt="art"
                style={{ width: "100%", height: "159px" }}
                loading="lazy"
              />
            </Link>

            <Link>
              <h3 className="post-title">
                Curled Knuckle Technique - To Help With Chord Playing
              </h3>
            </Link>
          </div>

          <div className="post">
            <div class="tag">Vox</div>
            <Link>
              <img
                src={blog6}
                alt="art"
                style={{ width: "100%", height: "159px" }}
                loading="lazy"
              />
            </Link>

            <Link>
              <h3 className="post-title">
                Play Your Chords On Time When Moving From One Chord To The Next
              </h3>
            </Link>
          </div>

          <div className="post">
            <div class="tag">Mixing</div>
            <Link>
              <img
                src={blog7}
                alt="art"
                style={{ width: "100%", height: "159px" }}
                loading="lazy"
              />
            </Link>

            <Link>
              <h3 class="post-title">Basic Strum Technique and Exercises</h3>
            </Link>
          </div>

        
          <div class="post">
            <div class="tag">Daw</div>
            <Link>
              <img
                src={blog8}
                alt="art"
                style={{ width: "100%", height: "159px" }}
                loading="lazy"
              />
            </Link>

            <Link>
              <h3 class="post-title">
                Basic Music Reading For The Guitar - Musical Notation
              </h3>
            </Link>
          </div>
          <div className="post">
            <div class="tag">Daw</div>
            <Link>
              <img
                src={blog9}
                alt="art"
                style={{ width: "100%", height: "159px" }}
                loading="lazy"
              />
            </Link>

            <Link>
              <h3 class="post-title">How To Read Chord Charts</h3>
            </Link>
          </div>

          <div className="post">
            <div class="tag">Vox</div>
            <Link>
              <img
                src={blog10}
                alt="art"
                style={{ width: "100%", height: "159px" }}
                loading="lazy"
              />
            </Link>

            <Link>
              <h3 class="post-title">
                How To Learn & Practice a Song Step-By-Step - Amazing Grace
              </h3>
            </Link>
          </div>

          <div className="post">
            <div class="tag">Mixing</div>
            <Link>
              <img
                src={blog11}
                alt="art"
                style={{ width: "100%", height: "159px" }}
                loading="lazy"
              />
            </Link>

            <Link>
              <h3 class="post-title">
                Basic Music Reading For The Guitar - Musical Notation
              </h3>
            </Link>
          </div>

          <div className="post">
            <div class="tag">Daw</div>
            <Link>
              <img
                src={blog12}
                alt="art"
                style={{ width: "100%", height: "159px" }}
                loading="lazy"
              />
            </Link>

            <Link>
              <h3 class="post-title">Inversions You Will Use A Lot</h3>
            </Link>
          </div>

          <div className="post">
            <div class="tag">Daw</div>
            <Link>
              <img
                src={blog13}
                alt="art"
                style={{ width: "100%", height: "159px" }}
                loading="lazy"
              />
            </Link>

            <Link>
              <h3 class="post-title">Practice Schedule - How To Practice</h3>
            </Link>
          </div>

          <div className="post">
            <div class="tag">Voc</div>
            <Link>
              <img
                src={blog14}
                alt="art"
                style={{ width: "100%", height: "159px" }}
                loading="lazy"
              />
            </Link>

            <Link>
              <h3 class="post-title">
                "Big Strumming" To Sharpen Your Strumming Skills
              </h3>
            </Link>
          </div>

          <div className="post">
            <div class="tag">Mixing</div>
            <Link>
              <img
                src={blog15}
                alt="art"
                style={{ width: "100%", height: "159px" }}
                loading="lazy"
              />
            </Link>

            <Link>
              <h3 class="post-title">Using The Thumb For Muting and Playing</h3>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllBlogs;
