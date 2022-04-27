import React from "react";
import { HomeStyled } from "./HomeStyled";
import { Link } from "react-router-dom";

import Hero from "../../Components/Hero/Hero";

const Home = () => {
  return (
    <HomeStyled>
      <Hero />
    </HomeStyled>
  );
};

export default Home;
