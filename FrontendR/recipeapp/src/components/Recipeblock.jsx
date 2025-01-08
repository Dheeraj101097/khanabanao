import React, { useRef } from "react";
import Card from "./Card";
import { CiSearch } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";

const Recipe = () => {
  // ai part
  const [prompt, setPrompt] = useState("");
  const [results, setResults] = useState("");

  const handleChange = (e) => {
    const copysearchbox = e.target.value;
    setPrompt(copysearchbox);
    console.log(copysearchbox);
  };

  const handleaiSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5000/auth/prompt-post";
      console.log(prompt);
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      console.log(data);
      setResults(data);
    } catch (error) {
      console.log("frontend error: ", error);
    }
  };
  // parsing result
  const parsedResults = (content) => {
    const lines = content
      ? content.split("\n").filter((line) => line.trim() !== "")
      : [];
    const parsed = [];

    lines.forEach((line) => {
      if (line.startsWith("**") && line.endsWith("**")) {
        parsed.push({ type: "title", text: line.replace(/\*\*/g, "") });
      } else if (line.startsWith("*")) {
        if (line.includes("**")) {
          // Subheadings inside lists
          const match = line.match(/\*\*(.*?)\*\*/); // Match content between **
          if (match) {
            parsed.push({
              type: "list",
              bold: match[1], // Text between **
              text: line.replace(`**${match[1]}**`, "").trim(), // Remaining text after bold
            });
          } else {
            // Regular list items without bold
            parsed.push({
              type: "list",
              bold: null,
              text: line.replace(/^\*\s*/, "").trim(),
            });
          }
        } else {
          parsed.push({ type: "list", text: line.replace(/^\*\s*/, "") });
        }
      } else {
        if (line.includes("**")) {
          // in paragraphs
          parsed.push({
            type: "subheading",
            text: line
              .replace(/\*\*/g, "")
              .replace(/^\*\s*/, "")
              .trim(),
          });
        } else {
          parsed.push({ type: "paragraph", text: line });
        }
      }
    });

    return parsed;
  };

  const parsedContent = parsedResults(results);

  //
  const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

  const [loading, setLoading] = useState(false);
  const [dish, setDish] = useState("");
  const [Meals, setMeals] = useState([]);
  const handleName = (e) => {
    setDish(e.target.value);
  };

  const handleSubmit = async (e) => {
    if (dish.trim() === "") {
      alert("Please enter a dish name");
      return;
    }
    // e.preventDefault();
    setLoading(true); // Set loading to true before fetching data

    try {
      const res = await fetch(url + dish);
      const data = await res.json();
      const meals = data.meals;
      // console.log(meals);

      if (meals) {
        setMeals(meals);
      } else {
        setMeals([]);
      }
    } catch (error) {
      console.log("error fetching data", error);
    } finally {
      setLoading(false); // Set loading to false after fetching is done
    }
  };

  return (
    <>
      <div className="h-15 flex flex-row justify-center items-center p-3 m-2">
        <input
          className="h-10 w-60 rounded-xl ml-20 mr-2 content-center p-3 border-solid border-orange-200 border-2 outline-none focus:border-deep-orange-400 "
          type="text"
          placeholder="Enter item.."
          onChange={handleName}
          value={dish}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()} // Trigger search on Enter key
        />
        <CiSearch
          className="bg-white mr-20 p-1 h-10 w-8 rounded-r-xl cursor-pointer hover:text-red-500"
          type="submit"
          onClick={handleSubmit}
        />
      </div>

      <div className="flex flex-wrap justify-center">
        {Meals.length > 0 ? (
          Meals.map((elem) => <Card key={elem.idMeal} dish={elem} />)
        ) : (
          <p>Enter valid dish name</p>
        )}
      </div>
      {/* rem here () sends with a return {}->whereas this send without return if we write return then it sends */}

      {/* ai */}

      <div>
        <div className=" bg-brown-100 relative text-white mt-16 overflow-hidden flex flex-col justify-center items-center">
          <div className="m-10 relative z-10 text-center p-6 bg-opacity-80 bg-gray-800 rounded-xl shadow-lg w-full max-w-md">
            <h2 className="text-3xl font-semibold mb-6">Ask Me Anything</h2>

            <form
              method="post"
              onSubmit={handleaiSubmit}
              className="flex items-center bg-gray-700 rounded-full p-2"
            >
              <input
                type="text"
                value={prompt}
                onChange={handleChange}
                // (e) => setQuery(e.target.value)
                placeholder="Type here ..."
                className="bg-transparent text-white focus:outline-none flex-grow px-4 py-2 rounded-full"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 py-2 ml-2"
              >
                <FaSearch />
              </button>
            </form>

            {/* Stars animation */}
            {/* <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-4 animate-ping-slow w-6 h-6 bg-yellow-500 rounded-full opacity-75"></div> */}
          </div>

          {/* ans part */}

          {/* <div>{results}</div> */}
          <div className="p-4  mx-auto">
            {parsedContent.map((item, index) => {
              switch (item.type) {
                case "title":
                  return (
                    <h2
                      key={index}
                      className="text-xl font-bold text-gray-800 my-1"
                    >
                      {item.text}
                    </h2>
                  );
                case "list":
                  return (
                    <li
                      key={index}
                      className="list-disc list-outside text-gray-700 "
                    >
                      {item.bold && (
                        <span className="font-bold">{item.bold}</span>
                      )}
                      {item.text.replace("*", "")}
                    </li>
                  );
                case "paragraph":
                default:
                  return (
                    <p key={index} className="text-gray-600 mb-2">
                      {item.text.replace("*", "-")}
                    </p>
                  );
                case "subheading":
                  return (
                    <h3 key={index} className="text-lg text-red-700 mb-3">
                      {/* {item.bold && (
                        <span className="font-bold">{item.bold}: </span>
                      )} */}
                      {item.text}
                    </h3>
                  );
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Recipe;
