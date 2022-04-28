import React from "react";
import { HomeStyled } from "./HomeStyled";
import Hero from "../../Components/Hero/Hero";
import Navbar from "../../Components/Navbar/Navbar";
const Home = () => {
  return (
    <HomeStyled>
      <Navbar />
      <Hero />
    </HomeStyled>
  );
};

export default Home;
