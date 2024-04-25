import React, { useState } from "react";
import "./topics.css";
import frequencies from "../../assets/frequencies.png";
import daw from "../../assets/daw.png";
import vocalsProcessing from "../../assets/vocals-processing.png";
import mixing from "../../assets/mixing.png";
import mixingConsole from "../../assets/mixing-console.png";
import mastering from "../../assets/mastering.png";
import bgElement1 from "../../assets/bg-element-1.svg";
const Topics = () => {
  const [currentImage, setCurrentImage] = useState(frequencies);
  return (
    <section id="topics" className="black">
      <div className="wrapper">
        <h2>What will you learn ?</h2>
        <div className="content-container">
          <ul className="topics-list">
            <li onMouseEnter={() => setCurrentImage(frequencies)}>
              <a href="#">What are frequencies?</a>
            </li>
            <li onMouseEnter={() => setCurrentImage(daw)}>
              <a href="#">Using DAW</a>
            </li>
            <li onMouseEnter={() => setCurrentImage(vocalsProcessing)}>
              <a href="#">Vocals Processing</a>
            </li>

            <li onMouseEnter={() => setCurrentImage(mixing)}>
              <a href="#">Mixing</a>
            </li>
            <li onMouseEnter={() => setCurrentImage(mixingConsole)}>
              <a href="#">Mixing Console</a>
            </li>
            <li onMouseEnter={() => setCurrentImage(mastering)}>
              <a href="#">Mastering</a>
            </li>
          </ul>
          <div className="topics-images">
            <img
              src={currentImage}
              style={{ width: "550px", height: "100%" }}
              alt="current-image"
              loading="lazy"
            />
          </div>
        </div>
        <img
          style={{ width: "88px", height: "60px" }}
          src={bgElement1}
          className="bg-element1"
          alt="bg-element1"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Topics;
