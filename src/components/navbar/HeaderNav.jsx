import React, { useState } from "react";
import "./headerNav.css";
import menuIcon from "../../assets/menu-icon.svg";
import closeIcon from "../../assets/close-icon.svg";

import { Link } from "react-router-dom";
const HeaderNav = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <nav>
        <a href="#" className="logo">
          Sound<span className="red">DZign</span>
        </a>
        <ul>
          <li>
            <a href="#info">About</a>
          </li>
          <li>
            <a href="#topics">Course Details</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <Link to="/sign-up">
            <li>
              <a style={{ color: "#fff", fontWeight: "800", fontSize: "16px" }}>
                Sign Up
              </a>
            </li>
          </Link>
          <Link to="/login">
            <a style={{ color: "#fff", fontWeight: "800", fontSize: "16px" }}>
              Login
            </a>
          </Link>
          <Link to="/dash-board">
            <a style={{ color: "#fff", fontWeight: "800", fontSize: "16px" }}>
              Profile
            </a>
          </Link>
        </ul>
        <div onClick={() => setIsActive(!isActive)} className="menu-icon">
          <img
            style={{ cursor: "pointer", width: "100%", height: "100%" }}
            src={menuIcon}
            alt="menu-icon"
            loading="lazy"
          />
        </div>
      </nav>
      <div className={`mobile-menu-container ${isActive ? "active" : ""} `}>
        <div onClick={() => setIsActive(!isActive)} className="close-icon">
          <img
            style={{ cursor: "pointer", width: "100%", height: "100%" }}
            src={closeIcon}
            alt="close"
            loading="lazy"
          />
        </div>
        <ul className="menu-items">
          <li>
            <a onClick={() => setIsActive(!isActive)} href="#info">
              About
            </a>
          </li>
          <li>
            <a onClick={() => setIsActive(!isActive)} href="#topics">
              Course Details
            </a>
          </li>
          <li>
            <a onClick={() => setIsActive(!isActive)} href="#blog">
              Blog
            </a>
          </li>
          <li>
            <a onClick={() => setIsActive(!isActive)} href="#testimonials">
              Testimonials
            </a>
          </li>
          <li>
            <Link to="/sign-up">
              <a onClick={() => setIsActive(!isActive)}>sign Up</a>
            </Link>
          </li>
          <li>
            <Link to="/login">
              <a onClick={() => setIsActive(!isActive)}>Login</a>
            </Link>
          </li>
          <li>
            <Link to="/dash-board">
              <a onClick={() => setIsActive(!isActive)}>Profile</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HeaderNav;
