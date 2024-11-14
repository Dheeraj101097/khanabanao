import React from "react";
import Navbar from "../components/Navbar";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Recipe from "../components/Recipeblock";

const Home = () => {
  return (
    <>
      <Navbar />
      <Body />

      <Recipe />
      <Footer />
    </>
  );
};

export default Home;
