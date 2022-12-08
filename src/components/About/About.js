import React from "react";
import "./About.css";
import Card from "./Cards/Card";

const About = () => {
  return (
    <div className="about-container">
      <div className="title-container">
        <p className="about-title">
          Security Your Mobile Applications Made Easy with Aquila
        </p>
      </div>
      <Card />

      <div className="sides about-background">
        <div className="about-text">
          <p className="why-aquila">Why Aquila?</p>
          <p className="aquila-text">
            We can rapidly and confidently discover critical vulnerabilities in
            your mobile applications thanks to Aquila, freeing up analyst time
            that would be better spent leading and educating the development
            team. Additionally, Aquila offers a strong encryption shell around
            your application to deter hackers from accessing it and the data it
            controls. This enables your apps to work as intended while guarding
            against unauthorized access to them.
          </p>
        </div>
        <div className="free-trial-container">
          <div className="free-trial">
            <p className="trial-text">
              TRY OUR FREE MOBILE APP VULNERABILITY SCANNER TODAY
            </p>
            <button className="trial-btn">TRY NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
