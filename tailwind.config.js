/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#111827",
        secondary: "#c5fcfc" // Tailwind's gray-900 hex value
      },
    },
  },
  plugins: [
    require("daisyui"), // DaisyUI plugin for Tailwind
  ],
  darkMode:"class",
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#111827", // Set primary color to gray-900
          secondary: "#1F2937", // Optional: Customize other theme colors
          accent: "#4B5563",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
        },
      },
    ],
  },
};
