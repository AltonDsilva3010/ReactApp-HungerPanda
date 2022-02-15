import React from "react";
import "./LandingPage.css";
import BackGroundImage from "../Images/background.png";
import Categories from "./Categories";

const LandingPage = () => {
  return (
    <div className="landingpage-container">
      <div className="title-container">
        <img id="clip" src={BackGroundImage} alt="title image" />
        <div className="search-container">
          <h1>HungerPanda</h1>
          <p>One Solution for all your Hunger</p>
          <div className="search-bars">
            <select className="select-city">
              <option value="" disabled selected>
                Select City
              </option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
              <option value="Banglore">Banglore</option>
              <option value="Lucknow">Lucknow</option>
            </select>
            <input
              className="select-restaurant"
              placeholder="Select Restaurant"
            ></input>
          </div>
        </div>
      </div>
      <div className="categories-container">
        <Categories />
      </div>
    </div>
  );
};

export default LandingPage;
