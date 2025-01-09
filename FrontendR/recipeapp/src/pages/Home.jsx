import React from "react";
import Navbar from "../components/Navbar";
import Recipe from "../components/Recipeblock";
import RandomMeals from "../components/RandomMeals";
import CategoryRecipe from "../components/CategoryRecipe";

const Home = () => {
  return (
    <>
      <div className="bg-gradient-to-tr from-[#F5F6F3] to-[#edfdf7]">
        <Navbar />
        <RandomMeals />
        <Recipe />
        <CategoryRecipe />
      </div>
    </>
  );
};
// #ECF8FE
export default Home;
