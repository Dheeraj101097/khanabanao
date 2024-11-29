import React from "react";
import Navbar from "../components/Navbar";
import Body from "../components/Body";
import Recipe from "../components/Recipeblock";
import RandomMeals from "../components/RandomMeals";
import MyRecipe from "./MyRecipe";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <button>
        <Link to="/myRecipe">My Recipe page</Link>
      </button>

      <RandomMeals />
      <Body />

      <Recipe />
    </>
  );
};

export default Home;
