import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaBold, FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";
import { LoadingEffect4 } from "./LoadingEffect";

const AiBlock = () => {
  // ai part
  const [prompt, setPrompt] = useState("");
  const [results, setResults] = useState("");
  const [loadingAI, setLoadingAI] = useState(false); // AI loading state

  const handleChange = (e) => {
    const copysearchbox = e.target.value;
    setPrompt(copysearchbox);
    console.log(copysearchbox);
  };

  const handleaiSubmit = async (e) => {
    e.preventDefault();
    setLoadingAI(true); // AI loading state
    try {
      const url = "https://khanabanao-backendr.onrender.com/auth/prompt-post";
      // console.log(prompt);
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      // console.log(data); // JSON.stringify try or parse
      setResults(data);
    } catch (error) {
      console.log("frontend error: ", error);
    } 
      setLoadingAI(false); // AI loading state false make it
    
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
            type: "list",
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
  return (
    <>
      {" "}
      {/* ai */}
      <div>
        <div className="  text-white mt-16 overflow-hidden flex flex-col justify-center items-center">
          <div className="m-10   z-10 text-center p-6 bg-opacity-80 bg-white rounded-xl shadow-lg ">
            <div className="  flex flex-row w-52 h-20 items-center justify-center align-middle content-center">
              <span className="text-[#333333] font-serif text-2xl mx-2 mb-6 drop-shadow-md ">
                Jarsh AI
              </span>
              <div className="h-20 w-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 40 40"
                  class="sparkle  animate-pulse "
                >
                  <path
                    className="path"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke="#FFF07C"
                    fill="#FFE733"
                    d="M14.187 8.096L15 5.25L15.813 8.096C16.0231 8.83114 16.4171 9.50062 16.9577 10.0413C17.4984 10.5819 18.1679 10.9759 18.903 11.186L21.75 12L18.904 12.813C18.1689 13.0231 17.4994 13.4171 16.9587 13.9577C16.4181 14.4984 16.0241 15.1679 15.814 15.903L15 18.75L14.187 15.904C13.9769 15.1689 13.5829 14.4994 13.0423 13.9587C12.5016 13.4181 11.8321 13.0241 11.097 12.814L8.25 12L11.096 11.187C11.8311 10.9769 12.5006 10.5829 13.0413 10.0423C13.5819 9.50162 13.9759 8.83214 14.186 8.097L14.187 8.096Z"
                  ></path>
                  <path
                    className="path"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke="#F9D48B"
                    fill="#F6BF51"
                    d="M6 14.25L5.741 15.285C5.59267 15.8785 5.28579 16.4206 4.85319 16.8532C4.42059 17.2858 3.87853 17.5927 3.285 17.741L2.25 18L3.285 18.259C3.87853 18.4073 4.42059 18.7142 4.85319 19.1468C5.28579 19.5794 5.59267 20.1215 5.741 20.715L6 21.75L6.259 20.715C6.40725 20.1216 6.71398 19.5796 7.14639 19.147C7.5788 18.7144 8.12065 18.4075 8.714 18.259L9.75 18L8.714 17.741C8.12065 17.5925 7.5788 17.2856 7.14639 16.853C6.71398 16.4204 6.40725 15.8784 6.259 15.285L6 14.25Z"
                  ></path>
                  <path
                    className="path"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke="#80FF72"
                    fill="#5AFF47"
                    d="M6.5 4L6.303 4.5915C6.24777 4.75718 6.15472 4.90774 6.03123 5.03123C5.90774 5.15472 5.75718 5.24777 5.5915 5.303L5 5.5L5.5915 5.697C5.75718 5.75223 5.90774 5.84528 6.03123 5.96877C6.15472 6.09226 6.24777 6.24282 6.303 6.4085L6.5 7L6.697 6.4085C6.75223 6.24282 6.84528 6.09226 6.96877 5.96877C7.09226 5.84528 7.24282 5.75223 7.4085 5.697L8 5.5L7.4085 5.303C7.24282 5.24777 7.09226 5.15472 6.96877 5.03123C6.84528 4.90774 6.75223 4.75718 6.697 4.5915L6.5 4Z"
                  ></path>
                </svg>
              </div>
            </div>

            <div className="text-black p-4  rounded-md shadow-md mb-7 ">
              <h2 className="text-xl font-bold mb-1">
                Welcome to the Jarsh Model - Your Recipe Assistant!
              </h2>
              <p className="mb-2">
                The Jarsh model is designed to answer all your recipe-related
                queries, including:
              </p>
              <ul className="list-disc list-inside mb-2">
                <li>How to prepare specific dishes.</li>
                <li>Creative recipe ideas.</li>
                <li>Information on nutritional value.</li>
                <li>Storage tips, Benefits and drawbacks of certain foods.</li>
                <li>Specific Dietary Information.</li>
              </ul>

              <p className="text-sm text-gray-600">
                Note: The model declines any requests that fall outside the
                scope of food-related queries.
              </p>
            </div>

            <form
              method="post"
              onSubmit={handleaiSubmit}
              className="flex items-center mx-6 mb-8 shadow-lg bg-[#ebfeffdd] rounded-3xl p-2"
            >
              <input
                type="text"
                value={prompt}
                onChange={handleChange}
                // (e) => setQuery(e.target.value)
                placeholder="Type here ..."
                className="bg-transparent w-40  text-[#213e6b] focus:outline-none flex-grow px-4 py-2 rounded-3xl"
              />
              <button
                type="submit"
                className="bg-[#1ec6cf] hover:bg-[#ebfeffdd] text-white hover:text-red-500  rounded-[6rem] px-4 py-2 ml-2"
              >
                <FaSearch />
              </button>
            </form>

            {/* <div className="text-black p  rounded-md shadow-sm">
              <h2 className="text-xl font-bold mb-2">
                Recipe Suggestions and Queries
              </h2>
              <ul className="list-disc list-inside">
                <li className="mb-1">How to cook Paneer Butter Masala?</li>
                <li className="mb-1">How to cook Biriyani?</li>
                <li className="mb-1">
                  I have chicken and some bell peppers. What can I make?
                </li>
                <li>Tell me about the nutritional value of quinoa.</li>
              </ul>
            </div> */}
          </div>

          {/* ans part */}
          <div className="">
            {loadingAI ? ( //loading while ai doing
              <LoadingEffect4 />
            ) : parsedContent && parsedContent.length > 0 ? (
              <div className="p-4  mx-auto">
                {parsedContent.map((item, index) => {
                  switch (item.type) {
                    case "title":
                      return (
                        <h2
                          key={index}
                          className="text-2xl  font-sans font-semibold text-[#134e2b] my-1"
                        >
                          {item.text}
                        </h2>
                      );
                    case "list":
                      return (
                        <li
                          key={index}
                          className="list-disc list-outside text-gray-800 mb-1"
                        >
                          {item.bold && (
                            <span className=" font-semibold text-[#ff7162]">
                              {item.bold}
                            </span>
                          )}
                          {item.text.replace("*", "")}
                        </li>
                      );
                    case "paragraph":
                    default:
                      return (
                        <p key={index} className="text-gray-900 mb-2">
                          {item.text.replace("*", "-")}
                        </p>
                      );
                    case "subheading":
                      return (
                        <h3 key={index} className="text-lg text-gray-800 mb-2">
                          {item.bold && (
                            <span className="font-bold">
                              {item.bold.replace("*", "-")}:{" "}
                            </span>
                          )}
                          {item.text.replace("*", "-")}
                        </h3>
                      );
                  }
                })}
              </div>
            ) : (
              <p></p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AiBlock;
