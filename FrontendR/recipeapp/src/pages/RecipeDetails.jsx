import React from "react";
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

      <p className="text-white">Ingredients</p>
      <div className="text-white">
        <Ingredients ingredients={dish} />
      </div>
      {/* instructioins in component of ingredients */}
    </div>
  );
};

export default RecipeDetails;
