import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { handleFailure, handleSuccess } from "../utils.js";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loggedInUser, setloggedInUser] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    setloggedInUser(localStorage.getItem("loggedInUser"));
  });

  const handleLogout = (e) => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("userId");

    setTimeout(() => {
      navigate("/login");
      handleSuccess("Logged out Succesfully");
    }, 1000);
  };

  return (
    <>
      <div className="justify-center  items-center flex flex-col ">
        <nav className="h-20 w-full bg-[#2D2D2A] flex flex-row justify-evenly items-center ">
          <div className="h-15  flex flex-row justify-center items-center  p-2 mr-20">
            <img
              className="rounded-[50%] p-1 h-16 w-16"
              src="https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148978453.jpg?ga=GA1.1.1340196312.1735653782&semt=ais_hybrid"
            />
            <h2 className="m-1 px-1 py-[1em] text-white">Recipe App</h2>
          </div>

          <div className="hidden md:flex space-x-4">
            <Link
              to="/login"
              className="text-black bg-[#20FC8F] hover:bg-[#03DD70] px-4 py-2 rounded-lg"
            >
              {/* bg-[#FFD972] */}
              <button onClick={handleLogout}>Logout</button>
            </Link>
            <Link
              to="/home"
              className="text-black bg-[#20FC8F] hover:bg-[#03DD70] px-4 py-2 rounded-lg"
            >
              Home
            </Link>
            <Link
              to="/myRecipePage"
              className="text-black bg-[#20FC8F] hover:bg-[#03DD70] px-4 py-2 rounded-lg"
            >
              View my Recipes
            </Link>
            <Link
              to="/about"
              className="text-black bg-[#20FC8F] hover:bg-[#03DD70] px-4 py-2 rounded-lg"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-black bg-[#20FC8F] hover:bg-[#03DD70] px-4 py-2 rounded-lg"
            >
              Contact Me
            </Link>
          </div>

          {/*  */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden flex flex-col  space-y-0 mt-32 z-20 ">
              <Link
                to="/home"
                className="text-black rounded-t-2xl bg-yellow-100 px-4 py-2 "
              >
                Home
              </Link>

              <Link
                to="/myRecipePage"
                className="text-black bg-yellow-100 px-4 py-2 "
              >
                Saved Recipes
              </Link>

              <Link to="/login" className="text-black bg-yellow-100 px-4 py-2 ">
                <button onClick={handleLogout}>Logout</button>
              </Link>
              <Link
                to="/about"
                className="text-black rounded-b-2xl bg-yellow-100 px-4 py-2"
              >
                About
              </Link>
            </div>
          )}
        </nav>
        <div className=" min-w-full pb-6">
          <div className="mt-4 md:mt-10 sm:mt-10 text-center ">
            <h1 className="font-medium text-4xl text-red-600">
              Welcome Chef ! ..{" "}
              {loggedInUser
                ? loggedInUser.replace(/^./, (char) => char.toUpperCase())
                : "Guest"}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
