import React, { useEffect, useRef } from "react";
import { CustomCursorStyled } from "./CustomCursorStyled";
import { gsap } from "gsap";

const CustomCursor = () => {
  let cursor = useRef(null);
  let cursorFollower = useRef(null);
  let posX1 = useRef(null);
  let posY1 = useRef(null);
  let mouseX1 = useRef(null);
  let mouseY1 = useRef(null);
  let tl = gsap.timeline();
  useEffect(() => {
    let posX = posX1.current;
    let posY = posY1.current;
    let mouseX = mouseX1.current;
    let mouseY = mouseY1.current;
    tl.to(
      {},
      {
        duration: 0.016,
        repeat: -1,
        onRepeat: function () {
          posX += (mouseX - posX) / 9;
          posY += (mouseY - posY) / 9;

          gsap.set(cursorFollower.current, {
            left: posX - 12,
            top: posY - 12,
          });

          gsap.set(cursor.current, {
            left: mouseX,
            top: mouseY,
          });
        },
      }
    );

    document.addEventListener("mousemove", function (e) {
      // var mouseX = 0;
      // mouseY = 0;

      mouseX = e.pageX;
      mouseY = e.pageY;

      // console.log("POS", posX, posY);
      // console.log("Mouse", mouseX, mouseY);
      // posX = 0;
      // posY = 0;
    });

    document.addEventListener("mousemove", function (e) {});
  }, [tl]);
  return (
    <CustomCursorStyled>
      <div ref={cursor} className="cursor" />
      <div ref={cursorFollower} className="cursor-follower" />
    </CustomCursorStyled>
  );
};

export default CustomCursor;
