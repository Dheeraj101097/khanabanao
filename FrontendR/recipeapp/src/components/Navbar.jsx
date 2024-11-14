import React from "react";
import { CiSearch } from "react-icons/ci";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="h-20 max-w-7xl   flex flex-row justify-evenly items-center ">
      <div className="h-15  flex flex-row justify-center items-center  p-2 mr-20">
        <img
          className="rounded-[50%] p-1 h-16 w-16"
          src="/src/assets/nav_logo.png"
        />
        <h2 className="m-1 px-1 py-[1em] text-white">Khana</h2>
      </div>

      <div className="hidden md:flex space-x-4">
        <Link
          to="/home"
          className="text-black bg-yellow-100 px-4 py-2 rounded-lg"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-black bg-yellow-100 px-4 py-2 rounded-lg"
        >
          About
        </Link>
        <Link
          to="/recipes"
          className="text-black bg-yellow-100 px-4 py-2 rounded-lg"
        >
          More Recipe
        </Link>
        <Link
          to="/contact"
          className="text-black bg-yellow-100 px-4 py-2 rounded-lg"
        >
          Contact Us
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
        <div className="md:hidden flex flex-col space-y-4 mt-4">
          <Link
            to="/home"
            className="text-black bg-yellow-100 px-4 py-2 rounded-lg"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-black bg-yellow-100 px-4 py-2 rounded-lg"
          >
            About
          </Link>
          <Link
            to="/recipes"
            className="text-black bg-yellow-100 px-4 py-2 rounded-lg"
          >
            More Recipe
          </Link>
          <Link
            to="/contact"
            className="text-black bg-yellow-100 px-4 py-2 rounded-lg"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
