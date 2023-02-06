/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}",
    "./index.js/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Component/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",],
  // content: [
  //   './pages/**/*.{html,js}',
  //   './components/**/*.{html,js}',
  // ],
  theme: {
    extend: {},
  },
  plugins: [],
}
