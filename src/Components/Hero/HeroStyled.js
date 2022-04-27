import styled from "styled-components";

export const HeroStyled = styled.section`
  padding: 3rem;
  .main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 1.5rem;
    .left {
      height: 100%;
      flex: 2 0 60%;
      width: 100%;
      position: relative;
      color: #222;
      h1 {
        font-size: 4.5rem;
      }
      p {
        line-height: 1.6;
        max-width: 450px;
        font-size: 1rem;
        font-weight: 400;
        margin-bottom: 1rem;
      }
      .button {
        position: absolute;
        right: 100px;
        top: 350px;
      }
    }

    .right {
      flex: 1 0 40%;
      width: 100%;
      /* padding: 1.5rem; */
      position: relative;
      position: relative;
      display: flex;
      justify-content: center;
      color: #444;
      .card {
        /* min-width: 240px; */
        width: 100%;
        height: 100%;
        /* background: rgb(250, 235, 215); */
        background: rgb(230, 245, 255);
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        align-items: center;
        /* box-shadow: rgb(24 32 79 / 25%) 0px 40px 80px,
          rgb(255 255 255 / 50%) 0px 0px 0px 0.5px inset; */
        padding: 50px 20px;
        max-width: 540px;
        height: 550px;
        border-radius: 20px;
        z-index: 2;
        h1 {
          font-size: 4rem;
        }
        p {
          font-size: 5rem;
        }
        &-details {
          width: 100%;
          display: flex;
          justify-content: space-around;

          p {
            font-size: 2rem;
          }
        }
      }
    }
  }
`;
