/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'nightMode' : "url('assets/Bg-Calendar-Night.svg')",
        'dayMode' : "url('/assets/Bg-Calendar-Day.svg')",
      }
    },
  },
  plugins: [],
};
