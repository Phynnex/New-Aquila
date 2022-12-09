import React from "react";
import "./Card.css";
import Search from "../../../assets/search.png";
import { Link } from "react-router-dom";
import Activity from "../../../assets/activity.png";
import Shield from "../../../assets/shield.png";

const process = [
  {
    id: "1",
    title: "SCAN",
    image: Search,
    text: "Ensure comprehensive coverage of your assets’ vulnerability with:",
    link1: "Static vulnerability assessment",
    link2: "Dynamic vulnerability assessment",
  },
  {
    id: "2",
    title: "MONITOR",
    image: Activity,
    text: "hasten the creation of your mobile applications or make your code commercially viable with:",
    link1: "App License",
    link2: "User Analytics",
  },
  {
    id: "3",
    title: "PROTECT",
    image: Shield,
    text: "Ensure comprehensive coverage of your assets’ vulnerability with:",
    link1: "Static vulnerability assessment",
    link2: "Dynamic vulnerability assessment",
  },
];

const Card = () => {
  return (
    <>
      <div className="sides main-container">
        {process.map((info) => (
          <div className="card-container">
            <div key={info} className="card-content">
              <div className="card-roof"></div>

              <img src={info.image} alt="search" className="icon-styles" />
              <p className="card-title">{info.title}</p>
              <div style={{ margin: "0 auto", width: "250px" }}>
                <p>{info.text}</p>
                <p>
                  <Link to="/" className="link">
                    {info.link1}
                  </Link>
                </p>
                <p>
                  <Link to="/" className="link">
                    {info.link2}
                  </Link>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
