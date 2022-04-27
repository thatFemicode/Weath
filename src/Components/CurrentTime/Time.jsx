import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../../Context/Context";
import { TimeStyled } from "./TimeStyled";
import sun from "../../images/icon-sun.svg";
import moon from "../../images/icon-moon.svg";
import { gsap } from "gsap";
import CircularButton from "../Button/CircularButton";

const Time = () => {
  const { currentHour, currentMinute, city, greeting, icon, region } =
    useGlobalContext();
  const hour = currentHour === 0 ? 12 : currentHour;
  const minute = currentMinute < 10 ? `0${currentMinute}` : currentMinute;
  const iconDisplay = icon === "sun" ? sun : moon;
  let img = useRef(null);
  useEffect(() => {
    let tl = gsap.timeline({ repeat: -1, ease: "easeInOut" });
    tl.fromTo(
      img,
      {
        duration: 3,
        scale: 0.2,
        transformOrigin: "center left",
        ease: "easeIn",
      },
      { scale: 1, ease: "easeInOut", duration: 3 }
    );
  });
  return (
    <TimeStyled>
      <div className="greeting-container">
        {greeting && <img src={iconDisplay} alt="" ref={(el) => (img = el)} />}
        <h3>
          {greeting},<span> it's currently</span>
        </h3>
      </div>
      {hour && minute && (
        <div className="time-container">
          <h2>
            {hour}:{minute}
          </h2>
        </div>
      )}
      <h3>
        in {city ? city : "LAGOS"}, {region ? region : "LAG"}
      </h3>
      <div className="button">
        <CircularButton name={"home"} />
      </div>
    </TimeStyled>
  );
};

export default Time;
