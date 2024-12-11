import React from "react";
import Navbar from "../components/Navbar";
import Recipe from "../components/Recipeblock";
import RandomMeals from "../components/RandomMeals";
import CategoryRecipe from "../components/CategoryRecipe";

const Home = () => {
  return (
    <>
      <Navbar />
      <RandomMeals />
      <Recipe />
      <CategoryRecipe />
    </>
  );
};

export default Home;
