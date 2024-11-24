import React from "react";
import Navbar from "../components/Navbar";
import Body from "../components/Body";
import Recipe from "../components/Recipeblock";
import RandomMeals from "../components/RandomMeals";

const Home = () => {
  return (
    <>
      <Navbar />

      <RandomMeals />
      <Body />

      <Recipe />
    </>
  );
};

export default Home;
