import styled from "styled-components";

export const WeatherStyled = styled.div`
  color: #fff;
  height: 100vh;
  overflow: hidden;
  width: 100%;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  padding: 3rem;
  background-image: url(${(props) => props.background});
  &::before {
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-color: rgba(0, 0, 0, 0.35);
  }
  .content {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    color: #fff;
    height: 100%;
    width: 100%;
  }
`;
