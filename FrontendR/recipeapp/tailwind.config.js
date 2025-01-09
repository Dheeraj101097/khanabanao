/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        path: {
          "0%, 34%, 71%, 100%": { transform: "scale(1)" },
          "17%": { transform: "scale(1.2)" },
          "49%": { transform: "scale(1.2)" },
          "83%": { transform: "scale(1.2)" },
        },
      },
      animation: {
        spin: "spin 2s linear infinite",
        path: "path 1.5s linear 0.5s infinite",
      },
    },
  },
  plugins: [],
};

import withMT from "@material-tailwind/react/utils/withMT";

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
});

// const withMT = require("@material-tailwind/react/utils/withMT");

// module.exports = withMT({
//   content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// });

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

// tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       keyframes: {
//         spin: {
//           "0%": { transform: "rotate(0deg)" },
//           "100%": { transform: "rotate(360deg)" },
//         },
//         path: {
//           "0%, 34%, 71%, 100%": { transform: "scale(1)" },
//           "17%": { transform: "scale(1.2)" },
//           "49%": { transform: "scale(1.2)" },
//           "83%": { transform: "scale(1.2)" },
//         },
//       },
//       animation: {
//         spin: "spin 2s linear infinite",
//         path: "path 1.5s linear 0.5s infinite",
//       },
//     },
//   },
// };
