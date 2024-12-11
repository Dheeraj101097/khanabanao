import React, { useEffect } from "react";
import { useState } from "react";

const CategoryRecipe = () => {
  const [Dataofcategory, setDataofcategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null); // State to hold selected category
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  const openModal = (category) => {
    setSelectedCategory(category); // Set the clicked category data
    setIsModalOpen(true); // Open modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal
    setSelectedCategory(null); // Clear selected category
  };

  useEffect(() => {
    const handlechange = async () => {
      const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
      const response = await fetch(url);
      const data = await response.json();
      //   console.log(data.categories);
      setDataofcategory(data.categories);
    };
    handlechange();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center">
        <h1>Categories of food</h1>
        <div className="flex flex-wrap justify-center gap-6 p-6 m-3 ">
          {Dataofcategory.map((category) => (
            <div
              key={category.idCategory}
              className=" max-w-xs w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 bg-gradient-to-tr from-white via-red-100  to-red-400 text-black m-2 "
              onClick={() => openModal(category)}
            >
              <div className="flex flex-col items-center">
                <img
                  src={category.strCategoryThumb}
                  alt={category.strCategory}
                  className="rounded-t-lg w-full h-52 object-cover  p-2"
                />
              </div>
              <div className="py-2 px-4">
                <h3 className=" text-xl font-bold mb-2">
                  {category.strCategory}
                </h3>

                <p className="text-sm">
                  {category.strCategoryDescription.slice(0, 40)}...
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*  */}

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal} // Close the modal when clicking on the overlay
        >
          <div
            className="bg-white rounded-lg p-6 max-w-md w-full shadow-lg relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal content
          >
            {/* Close Button */}
            <button
              className="absolute top-2 right-3  bg-[#EFFBF9] px-[3px] rounded-lg border-solid border-[1px] border-blue-800 text-green-500 hover:text-red-500"
              onClick={closeModal}
            >
              ✖
            </button>

            {/* Modal Content */}
            {selectedCategory && (
              <div>
                <img
                  src={selectedCategory.strCategoryThumb}
                  alt={selectedCategory.strCategory}
                  className="rounded-lg w-full h-48 object-contain mb-3 p-2"
                />
                <h3 className="text-2xl font-bold mb-4">
                  {selectedCategory.strCategory}
                </h3>
                <p className="text-gray-700">
                  {selectedCategory.strCategoryDescription}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CategoryRecipe;
