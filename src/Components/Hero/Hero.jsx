import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { OuterLayout } from "../../Styling/Layout/Layout";
import { HeroStyled } from "./HeroStyled";
import { gsap, Power1 } from "gsap";
import ItemButton from "../Button/ItemButton";
import cloud from "../../images/cloud.svg";
import rain from "../../images/rain.svg";
import sun from "../../images/sun.svg";
const Hero = () => {
  let clouds = useRef(null);
  let suns = useRef(null);
  let rains = useRef(null);
  function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
  }
  // How much the icons 'bounce' up and down
  const BOUNCE_HEIGHT = 25;
  // Time to move from highest to lowest bounce point (s)
  const BOUNCE_TIME = 4;

  useEffect(() => {
    let bounce = gsap.timeline({ repeat: -1, yoyo: true });
    bounce.to([clouds, rains, suns], {
      duration: BOUNCE_TIME,
      y: -BOUNCE_HEIGHT,
      ease: Power1.easeInOut,
      stagger: 1,
    });
    bounce.timeScale(randomBetween(0.7, 1.3));
    return bounce;
  });
  return (
    <HeroStyled>
      <OuterLayout>
        <div className="main">
          <div className="left">
            <div
              className="cloud"
              ref={(el) => {
                clouds = el;
              }}
            >
              <img src={cloud} alt="" />
            </div>
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
              <div
                ref={(el) => {
                  suns = el;
                }}
                className="sun"
              >
                <img src={sun} alt="" />
              </div>
              <div
                ref={(el) => {
                  rains = el;
                }}
                className="rain"
              >
                <img src={rain} alt="" />
              </div>
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
