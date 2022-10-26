/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        // Bounces 5 times 1s equals 5 seconds
        'bounce-short': 'bounce 0.6s ease-in-out 1',
        'bounce-shorter': 'bounce 1.5s ease-in-out 1.5',
      },
  },
  plugins: [],
}}
