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

  const navigate = useNavigate({ dish });

  const handleNavigate = () => {
    // window.location.href = `https://www.themealdb.com/meal.php?i=${dish.idMeal}`;
    // For simplicity, we're just opening the link in a new tab. You can replace this with your preferred navigation method.
    // window.open(`https://www.themealdb.com/meal.php?i=${dish.idMeal}`);
    // try doing this with id of meal
    navigate("/recipeData", { state: { dish } });
  };

  return (
    // <Card className="w-full max-w-[50rem] mx-60 my-10  flex-row">
    //   <CardHeader
    //     shadow={false}
    //     floated={false}
    //     className="m-0 w-2/5 shrink-0 rounded-r-none"
    //   >
    //     <img src={dish.strMealThumb} className="h-full w-full object-cover" />
    //   </CardHeader>
    //   <CardBody>
    //     <Typography variant="h3" color="gray" className="mb-4 uppercase">
    //       {dish.strMeal}
    //     </Typography>
    //     <Typography variant="h5" color="blue-gray" className="mb-2">
    //       <strong>Area:</strong> {dish.strArea}
    //     </Typography>
    //     <Typography variant="h5" color="blue-gray" className="mb-2">
    //       <strong>Category:</strong> {dish.strCategory}
    //     </Typography>
    //     <Typography color="gray" className="mb-8 font-normal">
    //       <h2 className="text-black">Instructions :-</h2>
    //       {dish.strInstructions.slice(0, 150)}...
    //     </Typography>
    //     <a className="inline-block">
    //       <Button
    //         onClick={handleNavigate}
    //         variant="text"
    //         className="flex items-center gap-2"
    //       >
    //         Learn More
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //           strokeWidth={2}
    //           className="h-4 w-4"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
    //           />
    //         </svg>
    //       </Button>
    //     </a>
    //     <a className="ml-2" href={dish.strYoutube}>
    //       <Button>Watch Video</Button>
    //     </a>
    //   </CardBody>
    // </Card>

    //

    <Card className="w-full max-w-[50rem] mx-auto my-4 flex flex-col lg:flex-row">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-full lg:w-2/5 shrink-0 rounded-b-none lg:rounded-r-none"
      >
        <img src={dish.strMealThumb} className="h-full w-full object-cover" />
      </CardHeader>
      <CardBody className="p-4 lg:p-6">
        <Typography
          variant="h3"
          color="gray"
          className="mb-4 text-lg lg:text-2xl uppercase"
        >
          {dish.strMeal}
        </Typography>
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-2 text-sm lg:text-lg"
        >
          <strong>Area:</strong> {dish.strArea}
        </Typography>
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-2 text-sm lg:text-lg"
        >
          <strong>Category:</strong> {dish.strCategory}
        </Typography>
        <Typography
          color="gray"
          className="mb-8 text-sm lg:text-base font-normal"
        >
          <h2 className="text-black text-base lg:text-lg">Instructions :-</h2>
          {dish.strInstructions.slice(0, 150)}...
        </Typography>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
          <a className="inline-block">
            <Button
              onClick={handleNavigate}
              variant="text"
              className="flex items-center gap-2 text-sm lg:text-base"
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
          <a className="ml-0 sm:ml-2" href={dish.strYoutube}>
            <Button className="text-sm lg:text-base">Watch Video</Button>
          </a>
        </div>
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
