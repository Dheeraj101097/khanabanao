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

  // console.log({ ingredients });
  return (
    <div>
      <ol>
        {ingredientsList.map((item, index) => (
          <li className="text-white" key={index}>
            {item.ingredient}: {item.measure}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Ingredients;
