import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const ViewMyRecipe = () => {
  let ID = useParams();
  const [dish, setDish] = useState({
    title: "",
    ingredients: "",
    instructions: "",
    category: "",
    image: "",
  });
  //   const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const url = `http://localhost:5000/auth/myRecipePage/${ID.id}`;
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
  return (
    <div className="flex flex-col md:flex-row bg-gray-100 p-8 rounded-lg shadow-lg">
      {/* Left Section - Image */}
      <div className="md:w-1/3 flex flex-col justify-center items-center mb-6 md:mb-0">
        <img
          src={dish.image}
          alt={dish.title}
          className="w-full h-auto rounded-lg shadow-md"
        />
        <Link to="/myRecipePage">
          <button className="text-black bg-[#20FC8F] hover:bg-[#ffa3b1] m-5 rounded-lg border-black p-2  ">
            Back to saved recipes
          </button>
        </Link>
      </div>

      {/* Right Section - Details */}
      <div className="md:w-2/3 md:pl-6">
        <h1 className="text-2xl md:text-3xl font-bold text-red-500 mb-4">
          {dish.title.replace(/^./, (char) => char.toUpperCase())}
        </h1>
        <p className="text-lg text-gray-600 mb-2">
          <strong>Category:</strong>{" "}
          {dish.category.replace(/^./, (char) => char.toUpperCase())}
        </p>
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Ingredients
          </h2>
          <p className="text-gray-600">{dish.ingredients}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Instructions
          </h2>
          <p className="text-gray-600 whitespace-pre-line">
            {dish.instructions}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewMyRecipe;
