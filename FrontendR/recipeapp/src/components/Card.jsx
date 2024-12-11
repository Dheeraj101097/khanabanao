import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import RecipeDetails from "../pages/RecipeDetails";

const Card = ({ dish }) => {
  // Function to handle the navigation to the RecipeDetails page when the card is clicked
  const navigate = useNavigate({
    dish,
  });
  const handleClick = () => {
    // Pass the data object to the next page
    navigate("/recipeData", {
      state: { dish },
    });
  };

  return (
    <div className="max-w-60 bg-white border border-gray-200 rounded-lg shadow transition-transform transform hover:scale-105 hover:bg-opacity-10  dark:bg-gray-800 dark:border-gray-700 m-6 hover:bg-gradient-to-tl hover:from-yellow-100  hover:to-amber-300  ">
      <a href={dish.strYoutube}>
        <img className="rounded-[50%] px-4 pt-4 " src={dish.strMealThumb} />
      </a>
      <div className=" p-4 flex flex-col items-center justify-center ">
        <h5 className="m-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {dish.strMeal}
        </h5>

        <span
          className="m-2 font-normal text-gray-700 dark:text-gray-400 cursor-pointer "
          onClick={handleClick}
        >
          How to Cook ?
        </span>

        <a
          href={dish.strYoutube}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#51344D] rounded-lg hover:bg-[#a06a97] "
        >
          Watch video
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Card;
