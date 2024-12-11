import React from "react";
import { useLocation } from "react-router-dom";
import Ingredients from "../components/Ingredients";

const RecipeDetails = () => {
  const { state } = useLocation();
  const { dish } = state;
  // console.log(dish);
  return (
    <div className="bg-gradient-to-tr from-gray-600 via-gray-100 to-white flex flex-col items-center justify-center min-h-screen p-6 text-center">
      <img
        className="rounded-lg border-black h-64 w-64 object-cover shadow-lg mb-6"
        src={dish.strMealThumb}
        alt="Dish"
      />
      <h1 className="mb-2 text-3xl font-bold tracking-tight text-gray-800">
        {dish.strMeal}
      </h1>
      <h2 className="mb-1 text-lg font-semibold text-gray-600">
        <span className="font-bold">Area:</span> {dish.strArea}
      </h2>
      <h2 className="mb-6 text-lg font-semibold text-gray-600">
        <span className="font-bold">Category:</span> {dish.strCategory}
      </h2>
      <a
        className="mb-6 text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg px-4 py-2 shadow-md transition-colors"
        href={dish.strYoutube}
        target="_blank"
        rel="noopener noreferrer"
      >
        Watch Video Tutorial
      </a>

      <div className="text-gray-800 w-full max-w-2xl">
        <Ingredients ingredients={dish} />
      </div>
    </div>
  );
};

export default RecipeDetails;
