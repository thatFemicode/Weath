import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { bounce } from "./animtion";
const ButtonStyled = styled.button`
  font-size: 0.8rem;
  padding: 0.15rem 0.35rem;
  border-radius: 50%;
  border-color: transparent;
  color: #fff;
  /* background: rgb(230, 245, 255); */
  background: #ea4c89;
  cursor: none;
  text-transform: capitalize;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  width: 80px;
  height: 80px;
  @media (max-width: ${({ theme }) => theme.images}) {
    width: 50px;
    height: 50px;
    font-size: 0.5rem;
    padding: 0.15rem 0.2rem;
  }
`;
const ItemButton = ({ name }) => {
  let icon = useRef(null);
  useEffect(() => {
    bounce(icon);
  }, []);
  return (
    <Link to="/weather">
      <ButtonStyled
        ref={(el) => {
          icon = el;
        }}
      >
        {name}
      </ButtonStyled>
    </Link>
  );
};

export default ItemButton;
