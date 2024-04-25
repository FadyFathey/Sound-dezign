import React from "react";
import "./testimonials.css";
import testimonial1 from "../../assets/testimonial1.png";
import testimonial2 from "../../assets/testimonial2.png";
import testimonial3 from "../../assets/testimonial3.png";
const Testimonials = () => {
  return (
    <section id="testimonials" className="dark-gray">
      <div className="wrapper">
        <h2>What our students say?</h2>
        <div>
          <div className="content-container">
            <div className="box">
              <img
                style={{ width: "100px", height: "100px" }}
                src={testimonial1}
                alt="testimonial1"
                loading="lazy"
              />
              <div className="reviewer-details">
                <span className="t-name">Peter Adams</span>
                <p className="t-desc">
                  This is a great course. I got to learn a lot.
                </p>
              </div>
            </div>
            <div className="box">
              <img
                style={{ width: "100px", height: "100px" }}
                src={testimonial2}
                alt="testimonial1"
                loading="lazy"
              />
              <div className="reviewer-details">
                <span className="t-name">Robert Fox</span>
                <p className="t-desc">
                  This is a great course. I got to learn a lot.
                </p>
              </div>
            </div>
            <div className="box">
              <img
                style={{ width: "100px", height: "100px" }}
                src={testimonial3}
                alt="testimonial1"
                loading="lazy"
              />
              <div className="reviewer-details">
                <span className="t-name">Emily Smith</span>
                <p className="t-desc">Awesome! Great job!!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
