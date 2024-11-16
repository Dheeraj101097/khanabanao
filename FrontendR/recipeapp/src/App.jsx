import { useState } from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Login from "../src/pages/Login";
import Signup from "../src/pages/Signup";
import RecipeDetails from "./pages/RecipeDetails";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      {/* <Route path="/home" element={<Navigate to="/" />} /> */}
      <Route path="/recipeData" element={<RecipeDetails />} />
    </Routes>
  );
}

export default App;
