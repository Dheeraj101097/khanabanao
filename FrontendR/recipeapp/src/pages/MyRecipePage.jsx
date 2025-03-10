import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import MyRecipeCard from "../components/MyRecipeCard";
import Navbar from "../components/Navbar";
import { LoadingEffect, LoadingEffect2 } from "../components/LoadingEffect";
// here this page show all saved one and button for delte and write news once
const MyRecipePage = () => {
  // const savedRecipe = useSelector((state) => state.recipe.savedRecipe); check what this does
  const [savedDish, setSavedDish] = useState([]);
  const [loggedInUser, setloggedInUser] = useState("");

  const MyRecipeData = async () => {
    try {
      const userId = localStorage.getItem("userId");
      const res = await fetch("https://khanabanao-backendr.onrender.com/auth/myRecipePage", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          userId: userId,
        },
      });

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
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        {/* <h1 className="flex flex-row items-center justify-center">
          Hi !.. Chef {loggedInUser}
        </h1> */}
        <div className=" m-4 ">
          Came across new Recipe Write and save here to cook later{" "}
          <Link className="text-cyan-400 " to="/CreateMyRecipe">
            Write Here{" "}
          </Link>
        </div>
        <div>
          <h1 className="flex flex-row items-center justify-center text-4xl p-2 rounded-md bg-orange-100">
            My Saved Recipes
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 m-4 sm:m-6 lg:m-8 px-4 sm:px-8 lg:px-20 pt-4 sm:pt-6 lg:pt-8 ">
          {savedDish.length > 0 ? (
            savedDish.map((elem, index) => (
              <MyRecipeCard
                myDish={elem}
                key={index}
                refreshRecipePage={refreshPage}
              />

              //send refresh to card explict refresh to avoid loop
            ))
          ) : (
            <div className="flex flex-row bg-blue-gray-100 p-8 rounded-xl items-center justify-center">
              <p>No Saved Recipes. Save one to view it here.</p>
            </div>>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MyRecipePage;

// <button onClick={() => handleDelete(elem._id)}>Delete</button>line42
