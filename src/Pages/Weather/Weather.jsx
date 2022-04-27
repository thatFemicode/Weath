import React, { useEffect, useRef } from "react";
import { WeatherStyled } from "./WeatherStyled";
import { useGlobalContext } from "../../Context/Context";
import day from "../../images/day.jpg";
import night from "../../images/night.jpg";
import Time from "../../Components/CurrentTime/Time";
import { OuterLayout } from "../../Styling/Layout/Layout";
import WeatherDetails from "../../Components/WeatherDetails/WeatherDetails";
import gsap from "gsap";
const Weather = () => {
  const { backgroundImage } = useGlobalContext();
  let time = useRef(null);
  let weather = useRef(null);
  const showBgImage = () => {
    let bgImage;
    // backgroundImage === "daylight" ? (bgImage = day) : (bgImage = night);
    if (backgroundImage === "daylight") {
      bgImage = day;
    } else if (backgroundImage === "starlight") {
      bgImage = night;
    }
    return bgImage;
  };
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.6 });
    tl.from(time, {
      duration: 1.2,
      opacity: 0,
      y: 200,
    }).from(weather, { duration: 1, opacity: 0, y: 200 });
  }, []);
  return (
    <WeatherStyled background={showBgImage}>
      <OuterLayout>
        <div className="content">
          <div
            className="time"
            ref={(el) => {
              time = el;
            }}
          >
            <Time />
          </div>
          <div
            className="weather"
            ref={(el) => {
              weather = el;
            }}
          >
            <WeatherDetails />
          </div>
        </div>
      </OuterLayout>
    </WeatherStyled>
  );
};

export default Weather;
