
// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
    purge: false,
    theme: {},
    variants: {
      borderColor: ["hover", "focus"],
      Text: ['responsive', 'hover', 'focus', 'active']
    },
    plugins: [],
  };