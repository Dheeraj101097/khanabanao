import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { LoadingEffect } from "./LoadingEffect";

const MyRecipeCard = ({ myDish, refreshRecipePage }) => {
  const [reload, setReload] = useState(0);
  const dish = myDish;
  const handleDelete = async (ID) => {
    const url = `https://khanabanao-backendr.onrender.com/auth/myRecipePage/${ID}`;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    if (result.success || response.ok) {
      console.log("success deleted");
      refreshRecipePage();
    } else {
      console.log(result.error);
    }
  };

  // const handleEditClick = async (ID) => {
  //   const url = `http://localhost:5000/auth/myRecipePage/${ID}`;
  //   const response = await fetch(url, {
  //     method: "PUT",
  //     headers: { "content-type": "application/json" },
  //     body: JSON.stringify(dish),
  //   });
  //   console.log("edit clicked");
  // };

  return (
    <>
      {myDish ? (
      <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 max-w-xs mx-auto mb-4 transition-transform transform hover:scale-105 hover:bg-opacity-10  hover:bg-gradient-to-t hover:from-yellow-100  hover:to-amber-300  ">
        <img
          className="h-48 w-full object-cover rounded-[2.5rem] p-2 "
          src={myDish.image}
          alt={myDish.title || "Recipe Image"}
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800">
            {myDish.title.replace(/^./, (char) => char.toUpperCase()) ||
              "Untitled Recipe"}
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            <strong>Category:</strong>{" "}
            {myDish.category.replace(/^./, (char) => char.toUpperCase()) ||
              "No Category"}
          </p>
          <p className="text-sm text-gray-600 mt-1">
            <strong>Ingredients:</strong>{" "}
            {myDish.ingredients.slice(0, 40) || "No Ingredients"}....
          </p>
          <p className="text-sm text-gray-600 mt-1">
            <strong>Instructions:</strong>{" "}
            {myDish.instructions.slice(0, 30) || "No Instructions"}....
          </p>
          <div className="flex mt-4">
            <button className=" bg-[#1fd77b] text-white px-3 py-1 rounded-lg hover:bg-green-600 transition mr-2">
              <Link to={`/ViewMyRecipe/${myDish._id}`}>View</Link>
            </button>
            <button className=" bg-[#3561ff] text-white px-3 py-1 rounded-lg hover:bg-blue-900 transition mr-2">
              <Link to={`/EditMyRecipe/${myDish._id}`}>Edit</Link>
            </button>
            <button
              className="bg-[#F00808] text-white px-3 py-1 rounded-lg hover:bg-red-900 transition"
              onClick={() => {
                handleDelete(myDish._id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      ) : (
        <LoadingEffect />
      )}
    </>
  );
};

export default MyRecipeCard;
