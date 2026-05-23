/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

 
  darkMode: "class",

  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        secondary: "#0f172a",
        accent: "#14b8a6",
      },

      animation: {
        float: "float 6s ease-in-out infinite",
      },

      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },

          "50%": {
            transform: "translateY(-12px)",
          },
        },
      },
    },
  },

  plugins: [],
};

module.exports = config;