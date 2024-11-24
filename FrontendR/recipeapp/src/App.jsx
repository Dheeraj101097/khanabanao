import { useState } from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Login from "../src/pages/Login";
import Signup from "../src/pages/Signup";
import RecipeDetails from "./pages/RecipeDetails";
import RefreshHandler from "./RefreshHandler";

function App() {
  const [count, setCount] = useState(0);
  const [Authenticated, setAuthenticated] = useState(false);

  const PrivateRoute = (element) => {
    return Authenticated ? element : <Navigate to="/login" />;
  };

  return (
    <>
      <RefreshHandler setAuthenticated={setAuthenticated} />
      <Routes>
        <Route path="/home" element={PrivateRoute(<Home />)} />
        <Route path="/" element={PrivateRoute(<Home />)} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/home" element={<Navigate to="/" />} /> */}
        <Route path="/recipeData" element={<RecipeDetails />} />
      </Routes>
    </>
  );
}

export default App;
