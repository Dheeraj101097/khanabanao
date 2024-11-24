import React from "react";
import Navbar from "../components/Navbar";
import Body from "../components/Body";
import Recipe from "../components/Recipeblock";
import RandomMeals from "../components/RandomMeals";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Home = () => {
  const [loggedInUser, setloggedInUser] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    setloggedInUser(localStorage.getItem("loggedInUser"));
  });

  const handleLogout = (e) => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");

    setTimeout(() => {
      navigate("/login");
      handleSuccess("Logged out Succesfully");
    }, 1000);
  };

  return (
    <>
      <Navbar />
      <RandomMeals />
      <Body />

      <Recipe />
    </>
  );
};

export default Home;
