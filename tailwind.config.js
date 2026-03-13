/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#3c83f6", // Primary Blue
        "accent-green": "#4ade80",
        "accent-blue": "#00f2ff", // Cyber Blue from Splash
        "background-dark": "#0a0f16", // Deep Dark
        "background-card": "rgba(255, 255, 255, 0.03)",
      },
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
      },
    },
  },
  plugins: [],
};
