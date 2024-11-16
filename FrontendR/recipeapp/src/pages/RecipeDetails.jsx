import React from "react";
import Recipe from "../components/Recipeblock";
import { useLocation } from "react-router-dom";
import Ingredients from "../components/Ingredients";

const RecipeDetails = () => {
  const { state } = useLocation();
  const { dish } = state;
  // console.log(dish);
  return (
    <div className="bg-black flex flex-col items-center justify-center min-h-screen text-center ">
      <img
        className="rounded-[50%] border-black h-1/4 w-1/4 border-2 "
        src={dish.strMealThumb}
      />
      <h1 className="m-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {dish.strMeal}
      </h1>
      <h2 className="m-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Area : {dish.strArea}
      </h2>
      <h2 className="m-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Category : {dish.strCategory}
      </h2>
      <a className="text-white" href={dish.strYoutube}>
        Click here to watch video
      </a>

      {/* <video className="text-white" width="320" height="240" controls>
        <source src={dish.strYoutube} />
        No video available
      </video> */}
      {/* <iframe width="420" height="315" src={dish.strYoutube}></iframe> */}

      <p className="text-white">Ingredients</p>
      <div className="text-white">
        <Ingredients ingredients={dish} />
      </div>
      <p className="text-white">{dish.strInstructions}</p>
    </div>
  );
};

export default RecipeDetails;
