/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'customBold': ['NokiaPureBold, inter, sans-serif'],
      'customLight': ['NokiaPureLight, inter, sans-serif'],
    }
  },
  plugins: [],
}

