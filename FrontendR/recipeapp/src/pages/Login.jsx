import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleFailure, handleSuccess } from "../utils.js";
import "react-toastify/dist/ReactToastify.css";
import { Slide } from "react-toastify";

function Login() {
  const [loginInfo, setLoginInfo] = useState({
    // name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target; //what w etype  we r getting
    const copyLoginInfo = { ...loginInfo };
    copyLoginInfo[name] = value;
    setLoginInfo(copyLoginInfo);
    // console.log(name, value);
  };
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    // day2
    // extract info from signupinfo
    const { email, password } = loginInfo;
    if (!email || !password) {
      return handleFailure("email and password are required");
    }
    //do try catch if name email pass entered
    try {
      const url = "https://khanabanao-backendr.onrender.com/auth/login";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      }); //diwali did
      const result = await response.json();
      // console.log(result);

      // we add jwttoken and name check
      const { success, message, jwtToken, name, error, userId } = result;
      if (success) {
        handleSuccess(message);
        // before going
        localStorage.setItem("token", jwtToken);
        localStorage.setItem("loggedInUser", name);
        localStorage.setItem("userId", userId);
        setTimeout(() => {
          navigate("/home");
        }, 1500);
      } else if (error) {
        const details = error?.details[0].message;
        handleFailure(details);
      } else if (!success) {
        handleFailure(message);
      }
    } catch (error) {
      console.log(error);
      handleFailure(error);
    }
  };
  return (
    // bg-green-100 background-image: linear-gradient(to right, var(--tw-gradient-stops))
    <div
      className=" flex items-center justify-center min-h-screen bg-background-pattern1 bg-cover h-screen"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/top-close-up-view-vegetables-tomatoes-with-pedicels-garlic-bell-peppers-lemon-oil-onion_140725-72203.jpg?t=st=1738149687~exp=1738153287~hmac=1b6a040e5835f6cda42ad4fe812e0d7dda34c95e4257f21d2218a2d9d879a099&w=996')",
      }}
    >
      <div className=" bg-white/25 backdrop-blur-sm border border-black drop-shadow-lg  flex flex-col items-center justify-center h-fit px-10 py-6 rounded-2xl ">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>
        <form method="post" action="#" onSubmit={handleLogin}>
          {/* <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 "
              >
                Username
              </label>
              <input
                onChange={handleChange}
                type="text"
                autoFocus
                placeholder="Enter Username"
                name="name"
                value={loginInfo.name}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mb-3"
              />
            </div> */}
          <div>
            <label
              className="block text-sm font-medium text-black"
              htmlFor="email"
            >
              Email
            </label>
            <input
              onChange={handleChange}
              type="email"
              autoFocus
              placeholder="Enter email"
              name="email"
              value={loginInfo.email}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm  mb-3"
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-black"
              htmlFor="password"
            >
              Password
            </label>
            <input
              onChange={handleChange}
              type="password"
              placeholder="Enter password"
              name="password"
              value={loginInfo.password}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm  mb-3"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 text-white p-1 rounded-md shadow-sm hover:bg-green-600 focus:outline-none  mt-6 text-center align-middle justify-center"
          >
            Login
          </button>
          <div className="m-2">
            <span>
              Don't have an account ?{" "}
              <Link
                className="text-blue hover:underline hover:text-cyan-300"
                to="/signup"
              >
                Signup
              </Link>
            </span>
          </div>
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
    </div>
  );
}

export default Login;
