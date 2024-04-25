import React from "react";
import "./footer.css";
import instagramLogo from "../../assets/instagram-logo.svg";
import twitterLogo from "../../assets/twitter-logo.svg";
import facebookLogo from "../../assets/facebook-logo.svg";
const Footer = () => {
  return (
    <footer className="black">
      <div className="wrapper">
        <div className="content-container">
          <div className="links">
            <a href="#" className="logo">
              Sound<span className="red">DZign</span>
            </a>

            <div className="social-icons">
              <a href="#">
                <img
                  style={{ width: "32px", height: "33px" }}
                  src={facebookLogo}
                  alt="facebook"
                  loading="lazy"
                />
              </a>

              <a href="#">
                <img
                  style={{ width: "32px", height: "33px" }}
                  src={twitterLogo}
                  alt="twitter"
                  loading="lazy"
                />
              </a>

              <a href="#">
                <img
                  style={{ width: "32px", height: "33px" }}
                  src={instagramLogo}
                  alt="instagramLogo"
                  loading="lazy"
                />
              </a>
            </div>

            <div className="copyright">
              This website is developed by fady fathey Ⓒ 2024
            </div>
          </div>

          <div className="links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#">Blog</a>
              </li>

              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div className="links">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <a href="#">contact@email.com</a>
              </li>

              <li>
                <a href="#">+1 146 456 789</a>
              </li>
            </ul>
          </div>

          <div className="copyright mobile">
            This website is developed by fady fathey Ⓒ 2024
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
