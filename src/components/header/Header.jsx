import React from "react";
import "./header.css";
import HeaderNav from "../navbar/HeaderNav";
const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <HeaderNav />
        <div className="cta">
          <p className="course-name">Sound Design MasterClass</p>
          <h1>Learn the art of sound design</h1>
          <a className="demo-btn" href="#">
            Demo Lesson
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
