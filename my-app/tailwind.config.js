/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./app/components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        greenDark: "#2f4b3a",      // page dark green
        greenDeep: "#1f2a23",      // very deep for footer blocks
        cream: "#f6efe6",          // background cream
        mustard: "#f2a922",        // accent yellow
        burnt: "#c56b2f",          // burnt orange accent
        blackPanel: "#0d0d0d"
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["Inter", "sans-serif"]
      }
    }
  },
  plugins: []
}
