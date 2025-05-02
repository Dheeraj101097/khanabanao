import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img2 from "../assets/img2.jpg";
import img4 from "../assets/img4.jpg";

const screenshots = [
  {
    id: 1,
    // url: 'https://images.pexels.com/photos/6941026/pexels-photo-6941026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    url: img2,
    title: "Recipe Discovery",
    description: "Browse through hundreds of recipes",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/4551832/pexels-photo-4551832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

    title: "Meal Planning",
    description: "Plan your meals for the week",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/4259140/pexels-photo-4259140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "User Profile",
    description: "Manage your saved recipes",
  },
  {
    id: 3,
    // url: "https://images.pexels.com/photos/8472874/pexels-photo-8472874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    url: img4,
    title: "Recipe Details",
    description: "Get detailed cooking instructions",
  },
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === screenshots.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? screenshots.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">App Preview</h2>
          <p className="section-subtitle">
            Take a sneak peek at the FoodZone app interface and experience the
            intuitive design.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Mobile view - Carousel */}
          <div className="lg:hidden relative">
            <div className="overflow-hidden rounded-xl shadow-2xl">
              <motion.img
                key={currentIndex}
                src={screenshots[currentIndex].url}
                alt={screenshots[currentIndex].title}
                className="w-full h-[500px] object-cover"
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                <h3 className="text-xl font-semibold">
                  {screenshots[currentIndex].title}
                </h3>
                <p>{screenshots[currentIndex].description}</p>
              </div>
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm hover:bg-white/50 p-2 rounded-full text-white"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm hover:bg-white/50 p-2 rounded-full text-white"
            >
              <ChevronRight size={24} />
            </button>

            <div className="flex justify-center mt-4 gap-2">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary-500" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Desktop view - Grid */}
          <div className="hidden lg:grid grid-cols-2 gap-6">
            {screenshots.map((screenshot, index) => (
              <motion.div
                key={screenshot.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="rounded-xl overflow-hidden shadow-lg group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={screenshot.url}
                    alt={screenshot.title}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <h3 className="text-xl font-semibold">
                      {screenshot.title}
                    </h3>
                    <p>{screenshot.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
