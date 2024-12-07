import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import MyRecipeCard from "../components/MyRecipeCard";
// here this page show all saved one and button for delte and write news once
const MyRecipePage = () => {
  // const savedRecipe = useSelector((state) => state.recipe.savedRecipe); check what this does
  const [savedDish, setSavedDish] = useState([]);
  const [loggedInUser, setloggedInUser] = useState("");

  const MyRecipeData = async () => {
    try {
      const res = await fetch("http://localhost:5000/auth/myRecipePage");
      const data = await res.json();

      setSavedDish(data);
    } catch (error) {
      console.log("Error fetching recipe data:", error);
    }
  };

  useEffect(() => {
    setloggedInUser(localStorage.getItem("loggedInUser"));
    MyRecipeData();
  }, []);

  const refreshPage = async () => {
    MyRecipeData();
  };

  return (
    <>
      <div>
        <h1 className="flex flex-row items-center justify-center">
          My Recipe Page, welcome {loggedInUser}
        </h1>
        <button className=" text-cyan-400 flex flex-row items-center justify-center ml-96">
          <Link to="/CreateMyRecipe">Write New Recipe</Link>
        </button>
        <h1 className="flex flex-row items-center justify-center text-4xl pt-10">
          My Saved Recipe
        </h1>
        <div className="grid  grid-cols-4 gap-8 m-8 px-20 pt-6">
          {savedDish.length > 0 ? (
            savedDish.map((elem, index) => (
              <MyRecipeCard
                myDish={elem}
                key={index}
                refreshRecipePage={refreshPage}
              /> //send refresh to card explict refresh to avoid loop
            ))
          ) : (
            <p>no saved save now</p>
          )}
        </div>
      </div>
    </>
  );
};

export default MyRecipePage;

// <button onClick={() => handleDelete(elem._id)}>Delete</button>line42
