// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         "fresh-mint": "var(--fresh-mint)",
//         "sky-blue": "var(--sky-blue)",
//         "light-cream": "var(--light-cream)",
//         "soft-peach": "var(--soft-peach)",
//         lavender: "var(--lavender)",
//         primary: {
//           50: "#e8f5e9",
//           100: "#c8e6c9",
//           200: "#a5d6a7",
//           300: "#81c784",
//           400: "#66bb6a",
//           500: "#4CAF50",
//           600: "#43a047",
//           700: "#388e3c",
//           800: "#2e7d32",
//           900: "#1b5e20",
//         },
//         secondary: {
//           50: "#fff3e0",
//           100: "#ffe0b2",
//           200: "#ffcc80",
//           300: "#ffb74d",
//           400: "#ffa726",
//           500: "#ff9800",
//           600: "#fb8c00",
//           700: "#f57c00",
//           800: "#ef6c00",
//           900: "#e65100",
//         },
//         accent: {
//           50: "#e8f5fe",
//           100: "#b3e5fc",
//           200: "#81d4fa",
//           300: "#4fc3f7",
//           400: "#29b6f6",
//           500: "#03a9f4",
//           600: "#039be5",
//           700: "#0288d1",
//           800: "#0277bd",
//           900: "#01579b",
//         },
//         tertiary: {
//           50: "#f3e5f5",
//           100: "#e1bee7",
//           200: "#ce93d8",
//           300: "#ba68c8",
//           400: "#ab47bc",
//           500: "#9c27b0",
//           600: "#8e24aa",
//           700: "#7b1fa2",
//           800: "#6a1b9a",
//           900: "#4a148c",
//         },
//       },
//       fontFamily: {
//         sans: ["Poppins", "sans-serif"],
//       },
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
//         float: {
//           "0%, 100%": { transform: "translateY(0)" },
//           "50%": { transform: "translateY(-20px)" },
//         },
//       },
//       animation: {
//         spin: "spin 2s linear infinite",
//         path: "path 1.5s linear 0.5s infinite",
//         float: "float 3s ease-in-out infinite",
//         "pulse-slow": "pulse 4s ease-in-out infinite",
//       },
//     },
//   },
//   plugins: [],
// };

// import withMT from "@material-tailwind/react/utils/withMT";

// module.exports = withMT({
//   content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// });

// tailwind.config.js
import withMT from "@material-tailwind/react/utils/withMT";
import colors from "tailwindcss/colors.js";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ...colors,
        "fresh-mint": "var(--fresh-mint)",
        "sky-blue": "var(--sky-blue)",
        "light-cream": "var(--light-cream)",
        "soft-peach": "var(--soft-peach)",
        lavender: "var(--lavender)",
        primary: {
          50: "#e8f5e9",
          100: "#c8e6c9",
          200: "#a5d6a7",
          300: "#81c784",
          400: "#66bb6a",
          500: "#4CAF50",
          600: "#43a047",
          700: "#388e3c",
          800: "#2e7d32",
          900: "#1b5e20",
        },
        secondary: {
          50: "#fff3e0",
          100: "#ffe0b2",
          200: "#ffcc80",
          300: "#ffb74d",
          400: "#ffa726",
          500: "#ff9800",
          600: "#fb8c00",
          700: "#f57c00",
          800: "#ef6c00",
          900: "#e65100",
        },
        accent: {
          50: "#e8f5fe",
          100: "#b3e5fc",
          200: "#81d4fa",
          300: "#4fc3f7",
          400: "#29b6f6",
          500: "#03a9f4",
          600: "#039be5",
          700: "#0288d1",
          800: "#0277bd",
          900: "#01579b",
        },
        tertiary: {
          50: "#f3e5f5",
          100: "#e1bee7",
          200: "#ce93d8",
          300: "#ba68c8",
          400: "#ab47bc",
          500: "#9c27b0",
          600: "#8e24aa",
          700: "#7b1fa2",
          800: "#6a1b9a",
          900: "#4a148c",
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
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
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      animation: {
        spin: "spin 2s linear infinite",
        path: "path 1.5s linear 0.5s infinite",
        float: "float 3s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
});
