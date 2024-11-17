import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const HorizontalCard = ({ dish }) => {
  if (!dish) return null;
  // console.log(dish);

  const navigate = useNavigate({ dish });

  const handleNavigate = () => {
    // window.location.href = `https://www.themealdb.com/meal.php?i=${dish.idMeal}`;
    // For simplicity, we're just opening the link in a new tab. You can replace this with your preferred navigation method.
    // window.open(`https://www.themealdb.com/meal.php?i=${dish.idMeal}`);
    // try doing this with id of meal
    navigate("/recipeData", { state: { dish } });
  };

  return (
    <Card className="w-full max-w-[50rem] mx-60 my-10  flex-row">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <img src={dish.strMealThumb} className="h-full w-full object-cover" />
      </CardHeader>
      <CardBody>
        <Typography variant="h3" color="gray" className="mb-4 uppercase">
          {dish.strMeal}
        </Typography>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          <strong>Area:</strong> {dish.strArea}
        </Typography>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          <strong>Category:</strong>
          {dish.strCategory}
        </Typography>
        <Typography color="gray" className="mb-8 font-normal">
          Instructions :{dish.strInstructions.slice(0, 150)}...
        </Typography>
        <a className="inline-block">
          <Button
            onClick={handleNavigate}
            variant="text"
            className="flex items-center gap-2"
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
        <a href={dish.strYoutube}>
          <Button>Watch Video</Button>
        </a>
      </CardBody>
    </Card>
  );
};

export default HorizontalCard;

// dishPic={elem.strMealThumb}
// dishname={elem.strMeal}
// dishInst={elem.strInstructions}
// dishlink={elem.strYoutube}
// dishArea={elem.strArea}
// dishCategory={elem.strCategory}
// dishIngredients={elem.strIngredient1}
