import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import HorizontalCard from "./HorizontalCard";

const RandomMeals = () => {
  const [meal, setMeal] = useState(null);
  const url = "https://www.themealdb.com/api/json/v1/1/random.php";
  const randomMeal = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.meals && data.meals.length > 0) {
        setMeal(data.meals[0]);
      }
      //   console.log(data.meals[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    randomMeal();

    const interval = setInterval(() => {
      randomMeal();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
  <>
  <div className="flex items-center justify-center min-h-screen  px-4">
    {meal ? (
      <HorizontalCard dish={meal} />
    ) : (
      <p className="text-lg text-gray-600">Loading...</p>
    )}
  </div>
  </>
  );
};

export default RandomMeals;
