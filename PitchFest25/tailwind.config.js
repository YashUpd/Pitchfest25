/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgba(5, 36, 61, 1) 0%, rgba(17, 59, 83, 1) 50%, rgba(18, 103, 130, 1) 100%)',
      },
    },
  },
  plugins: [],
};
