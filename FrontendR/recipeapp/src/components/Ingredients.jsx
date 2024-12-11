import React from "react";

const Ingredients = ({ ingredients }) => {
  const ingredientsList = [];
  for (let i = 1; i <= 20; i++) {
    try {
      const ingredient = ingredients[`strIngredient${i}`];
      const measure = ingredients[`strMeasure${i}`];
      // console.log(ingredient, measure);
      if (ingredient && ingredient.trim() !== "") {
        ingredientsList.push({ ingredient, measure });
      }
    } catch (error) {
      console.log("here error ", error);
    }
  }
  // instructions();
  // console.log(ingredients.strInstructions);
  // console.log({ ingredients });
  return (
    <div className="container mx-auto p-4 bg-gray-100 rounded-lg shadow-lg">
      {/* Ingredients Section */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2 bg-gray-200 p-4 rounded-lg">
          <p className="text-xl font-semibold text-black mb-4">Ingredients</p>
          <ol className="list-disc list-inside space-y-2">
            {ingredientsList.map((item, index) => (
              <li className="text-gray-800" key={index}>
                <span className="font-medium text-black">
                  {item.ingredient}
                </span>
                : {item.measure}
              </li>
            ))}
          </ol>
        </div>

        {/* Instructions Section */}
        <div className="md:w-1/2 bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-4">
            Instructions
          </h2>
          <ol className="list-decimal list-inside space-y-2">
            {ingredients.strInstructions
              .split(/\d\.\s+/)
              .filter(Boolean)
              .map((item, index) => (
                <li className="text-gray-300" key={index}>
                  {item}
                </li>
              ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Ingredients;

// Splitting the String:

// The split(/\d\.\s+/) uses a regular expression to match any digit (\d) followed by a dot (\.) and a space (\s+). This splits the string at those points.
// .filter(Boolean) ensures that empty entries are removed from the resulting array.
