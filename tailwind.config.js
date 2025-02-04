// tailwind.config.js (v3.x)
module.exports = {
  content: [
    "./index.html", // Adjust these paths according to your project structure
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwind-scrollbar-hide"), // Your plugins
  ],
};
