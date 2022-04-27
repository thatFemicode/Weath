import styled from "styled-components";

export const CustomCursorStyled = styled.div`
  @media (hover: none) and (pointer: coarse), (max-width: 430px) {
    display: none;
  }
  .cursor {
    position: absolute;
    background-color: #333;
    mix-blend-mode: difference;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    z-index: 6;
    transition: 0.3s cubic-bezier(0.75, -1.27, 0.3, 2.33) transform,
      0.2s cubic-bezier(0.75, -0.27, 0.3, 1.33) opacity;
    user-select: none;
    pointer-events: none;
    /* z-index: 10000; */
    transform: scale(1);
  }
  .cursor.active {
    opacity: 0.5;
    transform: scale(0);
  }
  .cursor.hovered {
    opacity: 0.08;
  }
  .cursor-follower {
    position: absolute;
    /* background-color: rgba(255, 255, 255, 0.3); */
    background-color: #333;
    mix-blend-mode: difference;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    z-index: 6;
    transition: 0.6s cubic-bezier(0.75, -1.27, 0.3, 2.33) transform,
      0.2s cubic-bezier(0.75, -0.27, 0.3, 1.33) opacity;
    user-select: none;
    pointer-events: none;
    /* z-index: 10000; */
    transform: translate(5px, 5px);
  }
  .cursor-follower.active {
    opacity: 0.7;
    transform: scale(3);
  }
  .cursor-follower.hovered {
    opacity: 0.08;
  }
`;
