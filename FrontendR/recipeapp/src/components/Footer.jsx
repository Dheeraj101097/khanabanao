import React from "react";
import {
  Utensils,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  ChevronRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Utensils className="text-primary-500" />
              <span className="text-xl font-bold">FoodZone</span>
            </div>
            <p className="text-gray-400 mb-4">
              Discover and save AI-powered food suggestions and recipes tailored
              to your taste.
            </p>
            {/* <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Youtube size={20} />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
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
                    className="text-gray-400 hover:text-green-300 transition-colors duration-200 flex items-center gap-1"
                  >
                    <ChevronRight size={16} />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Features</h3>
            <ul className="space-y-2">
              {[
                "AI-Powered Suggestions",
                "Recipe Categories",
                "Personal Recipe Book",
                "Secure Login",
                "Recipe Management",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#features"
                    className="text-gray-400 hover:text-green-300 transition-colors duration-200 flex items-center gap-1"
                  >
                    <ChevronRight size={16} />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {[
                "Privacy Policy",
                "Terms of Service",
                "Cookie Policy",
                "GDPR",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-green-300 transition-colors duration-200 flex items-center gap-1"
                  >
                    <ChevronRight size={16} />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} FoodZone. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Designed and developed with <span className="text-red-500">♥</span>{" "}
            for food lovers everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
