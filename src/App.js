import React, { useRef } from "react";
import { ThemeProvider } from "styled-components";
import { MainStyled } from "./Styling/MainStyled";
import { theme } from "./Styling/theme";
import { useLocation } from "react-router-dom";
import { TransitionGroup, Transition } from "react-transition-group";
import { gsap } from "gsap";

import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Weather from "./Pages/Weather/Weather";
function App() {
  const completeCall = (target, parent) => {
    gsap.set(target, { clearProps: "position, width" });
    parent && gsap.set(parent, { clearProps: "overflow" });
  };
  const parentNode = useRef(null);
  let location = useLocation();
  const nodeRef = useRef(null);
  const onEnterHandler = (node) => {
    gsap.killTweensOf(node);
    // Set initial position and styles
    gsap.set(node, {
      x: 1000,
      autoAlpha: 0,
    });
    gsap.set(parentNode.current, { overflow: "hidden" });
    // Create the animation for the incoming component
    gsap.to(node, {
      duration: 0.4,
      autoAlpha: 1,
      x: 0,
      onComplete: completeCall,
      onCompleteParams: [node, parentNode.current],
    });
  };
  const onExitHandler = (node) => {
    gsap.killTweensOf(node);
    // Set initial position and styles
    gsap.set(node, {
      x: 1000,
    });
    // Create the animation for the incoming component
    gsap.to(node, {
      duration: 0.4,
      autoAlpha: 0,
      x: -100,
    });
  };
  return (
    <ThemeProvider theme={theme}>
      <MainStyled ref={parentNode}>
        <TransitionGroup component={null}>
          <Transition
            timeout={500}
            key={location.pathname}
            onEnter={(el) => {
              onEnterHandler(el);
            }}
            onExit={(el) => {
              onExitHandler(el);
            }}
            nodeRef={nodeRef.current}
          >
            <Routes ref={nodeRef.current} location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/weather" element={<Weather />} />
            </Routes>
          </Transition>
        </TransitionGroup>
      </MainStyled>
    </ThemeProvider>
  );
}

export default App;
