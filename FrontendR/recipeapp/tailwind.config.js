/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // backgroundImage: {
      //   "homebkg-pattern": "url('/src/assets/bkg.png')",
      //   "footer-texture": "url('/img/footer-texture.png')",
      // },
    },
  },
  plugins: [],
};

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
});

// Include this in your Tailwind configuration if necessary
// module.exports = {
//   theme: {
//     extend: {
//       colors: {
//         gray: {
//           900: "#1A202C",
//           800: "#2D3748",
//           300: "#E2E8F0",
//         },
//       },
//     },
//   },
// };
