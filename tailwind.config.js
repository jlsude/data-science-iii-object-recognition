/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#D8F7FD',
        'background': '#010C0E',
        'primary': '#6FE4F6',
        'secondary': '#0A0E8F',
        'accent': '#4B19F0',
      }
    },
  },
  plugins: [],
}

