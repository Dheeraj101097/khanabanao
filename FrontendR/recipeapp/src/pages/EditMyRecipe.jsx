import React from "react";
import { useState, useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const EditMyRecipe = () => {
  let ID = useParams();
  const [dish, setDish] = useState({
    title: "",
    ingredients: "",
    instructions: "",
    category: "",
    image: "",
    userId: localStorage.getItem("userId"),
  });
  const navigate = useNavigate();

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     const copyDishData = { ...dish }; //not [...dish] check array obj
  //     copyDishData[name] = value;
  //     setDish(copyDishData);
  //     console.log(name, value);
  //   };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDish((prevDish) => ({
      ...prevDish,
      [name]: value,
    }));
  };
  //   const handleChnage = (e) => {
  //     setDish({ ...dish, [e.target.name]: e.target.value });
  //   };

  //   console.log(ID.id);
  useEffect(() => {
    const fetchData = async () => {
      const url = `https://khanabanao-backendr.onrender.com/auth/myRecipePage/${ID.id}`;
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const result = await response.json();
          //   console.log(result);
          setDish(result);
        } else {
          console.error("Failed to fetch recipe data:", result.error);
        }
      } catch (error) {
        console.log(error, "here error in edit");
      }
    };
    fetchData();
  }, [ID.id]);

  //
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `http://localhost:5000/auth/myRecipePage/${ID.id}`;
    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dish),
      });

      if (response.ok) {
        // console.log("Recipe updated successfully!");
        setTimeout(() => {
          navigate("/myRecipePage");
        }, 800);
      } else {
        const result = await response.json();
        console.error("Failed to update recipe:", result.error);
      }
    } catch (error) {
      console.error("Error updating recipe:", error);
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

export default EditMyRecipe;
