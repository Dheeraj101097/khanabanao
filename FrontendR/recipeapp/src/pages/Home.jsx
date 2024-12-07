import React from "react";
import Navbar from "../components/Navbar";
import Body from "../components/Body";
import Recipe from "../components/Recipeblock";
import RandomMeals from "../components/RandomMeals";
import CreateRecipe from "./CreateRecipe";
import { Link } from "react-router-dom";

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
