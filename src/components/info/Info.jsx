import React from "react";
import "./info.css";
import studentIcon from "../../assets/student-icon.svg";
import videoIcon from "../../assets/video-icon.svg";
import bgElement2 from "../../assets/bg-element-2.svg";
const Info = () => {
  return (
    <section id="info" className="dark-gray">
      <div className="wrapper">
        <div className="content-container">
          <div className="info-content">
            <img
              style={{ width: "100px", height: "100px" }}
              src={studentIcon}
              alt="student-icon"
              loading="lazy"
            />
            <div className="amount">23,000+</div>
            <div className="students">Students</div>
          </div>
          <div className="info-content">
            <img
              style={{ width: "100px", height: "100px" }}
              src={videoIcon}
              alt="videoIcon"
              loading="lazy"
            />
            <div className="amount">26 HRS</div>
            <div className="students">Video Content</div>
          </div>
        </div>
        <img
          style={{ width: "88px", height: "60px" }}
          src={bgElement2}
          alt="bg-element-2"
          className="bg-element-2"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Info;
