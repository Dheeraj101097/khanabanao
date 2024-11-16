import React from "react";
import Card from "./Card";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { useEffect } from "react";

const Recipe = () => {
  const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

  const [loading, setLoading] = useState(false);
  const [dish, setDish] = useState("");
  const [Meals, setMeals] = useState([]);
  const handleName = (e) => {
    setDish(e.target.value);
  };

  const handleSubmit = async (e) => {
    if (dish.trim() === "") {
      alert("Please enter a dish name");
      return;
    }
    // e.preventDefault();
    setLoading(true); // Set loading to true before fetching data

    try {
      const res = await fetch(url + dish);
      const data = await res.json();
      const meals = data.meals;
      // console.log(meals);

      if (meals) {
        setMeals(meals);
      } else {
        setMeals([]);
      }
    } catch (error) {
      console.log("error fetching data", error);
    } finally {
      setLoading(false); // Set loading to false after fetching is done
    }
  };

  return (
    <>
      <div className="h-15  flex flex-row justify-center items-center p-3 m-2">
        <input
          className="h-10 w-60 rounded-l-xl ml-20"
          type="text"
          placeholder="Search item ..."
          onChange={handleName}
          value={dish}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()} // Trigger search on Enter key
        />
        {/* <button className="text-white mr-20">Search</button> */}
        <CiSearch
          className="bg-white mr-20 p-1 h-10 w-8 rounded-r-xl"
          type="submit"
          onClick={handleSubmit}
        />
      </div>

      <div className="flex flex-wrap justify-center">
        {Meals.length > 0 ? (
          Meals.map((elem) => <Card key={elem.idMeal} dish={elem} />)
        ) : (
          <p>Enter dish name</p>
        )}
      </div>
      {/* rem here () sends with a return {}->whereas this send without return if we write return then it sends */}
    </>
  );
};

export default Recipe;
