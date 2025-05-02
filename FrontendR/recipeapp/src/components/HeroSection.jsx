import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="pt-32 pb-24 bg-gradient-to-br from-green-50 to-orange-50 overflow-hidden"
    >
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center mx-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 mb-12 lg:mb-0"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Discover Delicious
              <span className="text-primary-500"> Recipes</span> with AI
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Find, save, and cook amazing recipes personalized just for you.
              Your AI food assistant is just a click away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="https://foodzone-woad.vercel.app/home"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-2 text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore More <ArrowRight size={16} />
              </motion.a>
              <motion.a
                href="#features"
                className="btn-secondary flex items-center justify-center gap-2 text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative">
              <motion.img
                src="https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Delicious Food"
                className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto object-cover h-[400px]"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />

              <motion.div
                className="absolute -bottom-8 -left-8 bg-white p-4 rounded-lg shadow-lg z-10 hidden md:block"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                    AI
                  </div>
                  <div>
                    <p className="font-semibold">AI Powered</p>
                    <p className="text-sm text-gray-600">Smart Suggestions</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -top-8 -right-8 bg-white p-4 rounded-lg shadow-lg z-10 hidden md:block"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-secondary-500 rounded-full flex items-center justify-center text-white font-bold">
                    200+
                  </div>
                  <div>
                    <p className="font-semibold">Recipes</p>
                    <p className="text-sm text-gray-600">And Counting</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
