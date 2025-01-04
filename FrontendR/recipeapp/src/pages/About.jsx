import React from "react";

const About = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center px-4 py-8 text-center"
      
      style={{
        backgroundImage:
          "url('https://img.freepik.com/premium-photo/creamy-fish-soup-with-salmon-trout-potatoes-parsley-top-view_89816-6163.jpg?semt=ais_hybrid')",
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content Section */}
      <div className="relative z-10">
        {/* Quote Section */}
        <div className="mb-12">
          <span className="block text-3xl md:text-5xl lg:text-6xl font-bold text-white italic">
            “A recipe has no soul. You, as the cook, must bring soul to the recipe.”
          </span>
          <h2 className="mt-4 text-xl md:text-2xl font-medium text-yellow-200">
            - Thomas Keller
          </h2>
        </div>

        {/* About Section with Glassmorphism Effect */}
        <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-lg p-8 max-w w-full">
          <h1 className="text-3xl md:text-4xl font-bold text-[#EEE0CB] underline mb-6">
            About This Website
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-4">
            This website is a one-stop solution for all food enthusiasts! Whether you're a novice or a professional chef, our platform offers a range of features to make your culinary journey exciting and productive.
          </p>
          <ul className="list-disc list-inside text-left text-gray-100 text-lg md:text-xl">
            <li>Search for recipes based on your favorite cuisines or ingredients.</li>
            <li>Discover random meals with detailed instructions, categories, and areas of origin.</li>
            <li>Watch recipe videos to guide you through the cooking process.</li>
            <li>Save and manage your own recipes.</li>
            <li>View, edit and save your personal recipes.</li>
            <li>Explore visually appealing and responsive designs across all devices.</li>
            <li>Seamless integration with external APIs like TheMealDB for updated recipe information.</li>
            <li>Dynamic features such as searching, sorting, and pagination in recipe listings.</li>
          </ul>
        </div>
      </div>
    </div>

  )
};

export default About;


