import { useState } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Login from "../src/pages/Login";
import Signup from "../src/pages/Signup";
import RecipeDetails from "./pages/RecipeDetails";
import RefreshHandler from "./RefreshHandler";
import CreateRecipe from "./pages/CreateRecipe";
import MyRecipePage from "./pages/MyRecipePage";
import EditMyRecipe from "./pages/EditMyRecipe";
import ViewMyRecipe from "./pages/ViewMyRecipe";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  // const [count, setCount] = useState(0);
  const [Authenticated, setAuthenticated] = useState(false);

  const PrivateRoute = (element) => {
    return Authenticated ? element : <Navigate to="/login" />;
  };

  return (
    <>
      <RefreshHandler setAuthenticated={setAuthenticated} />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/home" element={PrivateRoute(<Home />)} />
        <Route path="/" element={PrivateRoute(<Home />)} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/home" element={<Navigate to="/" />} /> */}
        <Route path="/recipeData" element={<RecipeDetails />} />
        <Route
          path="/CreateMyRecipe"
          element={PrivateRoute(<CreateRecipe />)}
        />
        <Route path="/myRecipePage" element={PrivateRoute(<MyRecipePage />)} />
        <Route
          path="/EditMyRecipe/:id"
          element={PrivateRoute(<EditMyRecipe />)}
        />
        <Route
          path="/ViewMyRecipe/:id"
          element={PrivateRoute(<ViewMyRecipe />)}
        />
      </Routes>
    </>
  );
}

export default App;
