import React from "react";
import { useState } from "react";
import { handleFailure, handleSuccess } from "../utils";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

const CreateRecipe = () => {
  const [dish, setDish] = useState({
    title: "",
    ingredients: "",
    instructions: "",
    category: "",
    image: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    const copyDishData = { ...dish }; //not [...dish] check array obj
    copyDishData[name] = value;
    setDish(copyDishData);
    console.log(name, value);
  };
  const navigate = useNavigate();
  //
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "https://khanabanao-backendr.onrender.com/auth/CreateMyRecipe";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(dish),
      });
      const result = await response.json();
      // console.log(response);

      // console.log(result);

      const { success, message, error } = result;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/myRecipePage");
        }, 1200);
      } else if (error) {
        const details = error?.details[0].message;
        handleFailure(details);
      } else if (!success) {
        handleFailure(message);
      }
    } catch (error) {
      console.log(error);
      handleFailure(error);
    }
  };
  return (
    <>
      <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Create Recipe
        </h2>
        <form
          className="space-y-6"
          method="post"
          action="#"
          onSubmit={handleSubmit}
        >
          {/* Title */}
          <div>
            <label
              htmlFor="title"
              className="block text-gray-700 font-medium mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={dish.title}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter recipe title"
              onChange={handleChange}
            />
          </div>

          {/* Description */}
          {/* <div>
            <label
              htmlFor="description"
              className="block text-gray-700 font-medium mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              rows="3"
              placeholder="Enter recipe description"
            />
          </div> */}

          {/* Ingredients */}
          <div>
            <label
              htmlFor="ingredients"
              className="block text-gray-700 font-medium mb-2"
            >
              Ingredients (comma-separated)
            </label>
            <textarea
              id="ingredients"
              name="ingredients"
              value={dish.ingredients}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              rows="3"
              placeholder="Enter ingredients, separated by commas"
              onChange={handleChange}
            />
          </div>

          {/* Instructions */}
          <div>
            <label
              htmlFor="instructions"
              className="block text-gray-700 font-medium mb-2"
            >
              Instructions (comma-separated)
            </label>
            <textarea
              id="instructions"
              name="instructions"
              value={dish.instructions}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              rows="3"
              placeholder="Enter instructions, separated by commas"
              onChange={handleChange}
            />
          </div>

          {/* Category */}
          <div>
            <label
              htmlFor="category"
              className="block text-gray-700 font-medium mb-2"
            >
              Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              value={dish.category}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter recipe category"
              onChange={handleChange}
            />
          </div>

          {/* Image */}
          <div>
            <label
              htmlFor="image"
              className="block text-gray-700 font-medium mb-2"
            >
              Image URL
            </label>
            <input
              type="text"
              id="image"
              name="image"
              value={dish.image}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter image URL"
              onChange={handleChange}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-medium py-3 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-200"
          >
            Save
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateRecipe;
