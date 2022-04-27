import React from "react";
import { Link } from "react-router-dom";
import { OuterLayout } from "../../Styling/Layout/Layout";
import { HeroStyled } from "./HeroStyled";
import CircularButton from "../Button/CircularButton";
import ItemButton from "../Button/ItemButton";

const Hero = () => {
  return (
    <HeroStyled>
      <OuterLayout>
        <div className="main">
          <div className="left">
            <h1>Express Weather Application</h1>
            <p>
              Use Express weather application and get weather information about
              your current location. Click on the button below to use web
              application
            </p>
            <div className="button">
              <ItemButton name={"Get Weather"} />
            </div>
          </div>
          <div className="right">
            <div className="card">
              <h1>Lagos</h1>
              <p>28&deg;F</p>
              <div className="card-details">
                <div className="feels">
                  <p>38&deg;F</p>
                </div>
                <div className="wind">
                  <p>9MPH</p>
                </div>
                <div className="humidity">
                  <p>50%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </OuterLayout>
    </HeroStyled>
  );
};

export default Hero;
