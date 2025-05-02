import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Utensils } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <Utensils className="w-8 h-8 text-primary-500" />
          <span className="text-xl font-bold text-gray-800">FoodZone</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {["Home", "Features", "How It Works", "Gallery", "Testimonials"].map(
            (item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className={`font-medium transition-colors duration-200 ${
                    isScrolled
                      ? "text-gray-700 hover:text-primary-600"
                      : "text-gray-800 hover:text-primary-500"
                  }`}
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>

        {/* CTA Button */}
        <a
          href="https://foodzone-woad.vercel.app/home"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block btn-primary"
        >
          Explore More
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="container-custom py-4">
            <ul className="space-y-4">
              {[
                "Home",
                "Features",
                "How It Works",
                "Gallery",
                "Testimonials",
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block py-2 text-gray-700 hover:text-primary-600 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://foodzone-woad.vercel.app/home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-2 text-primary-600 font-bold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Explore More
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
