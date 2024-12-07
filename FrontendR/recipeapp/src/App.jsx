import { useState } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Login from "../src/pages/Login";
import Signup from "../src/pages/Signup";
import RecipeDetails from "./pages/RecipeDetails";
import RefreshHandler from "./RefreshHandler";
import CreateRecipe from "./pages/CreateRecipe";
import MyRecipePage from "./pages/MyRecipePage";

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
        <Route
          path="/CreateMyRecipe"
          element={PrivateRoute(<CreateRecipe />)}
        />
        <Route path="/myRecipePage" element={PrivateRoute(<MyRecipePage />)} />
      </Routes>
    </>
  );
}

export default App;
