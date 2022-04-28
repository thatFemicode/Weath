import React, { useEffect, useRef } from "react";
import { NavbarStyled } from "./NavbarStyled";
import logo from "./img/slack.svg";
import { OuterLayout } from "../../Styling/Layout/Layout";
import { gsap } from "gsap";
const Navbar = () => {
  const tl = gsap.timeline({ delay: 0.5 });
  let navbar = useRef(null);
  let nav = useRef(null);
  useEffect(() => {
    tl.to(navbar, {
      opacity: 1,
      duration: 0.6,
    }).from(nav, {
      y: -200,
      duration: 0.4,
    });
  });
  return (
    <NavbarStyled ref={(el) => (navbar = el)}>
      <OuterLayout>
        <div ref={(el) => (nav = el)} className="navigation">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="hashtag">#ExpressWeather</div>
        </div>
      </OuterLayout>
    </NavbarStyled>
  );
};

export default Navbar;
