import styled from "styled-components";

export const HeroStyled = styled.section`
  .main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 1.5rem;
    .left {
      height: 100%;
      width: 50%;
    }

    .right {
      width: 50%;
      /* padding: 1.5rem; */
      position: relative;
      .card {
        position: relative;
        display: flex;
        justify-content: center;

        &-main {
          min-width: 240px;
          width: 100%;
          height: 100%;
          background: #222;
          /* box-shadow: rgb(24 32 79 / 25%) 0px 40px 80px,
          rgb(255 255 255 / 50%) 0px 0px 0px 0.5px inset; */
          padding: 50px 20px;
          max-width: 320px;
          height: 600px;
          border-radius: 60px;
          z-index: 2;
          /* transform: skewY(-10deg); */
        }
      }
    }
  }
`;
