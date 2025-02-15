/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgba(5, 36, 61, 1) 0%, rgba(17, 59, 83, 1) 50%, rgba(18, 103, 130, 1) 100%)',
        'custom-gradient-darker': 'linear-gradient(90deg, rgba(5, 25, 45, 1) 0%, rgba(20, 50, 80, 1) 50%, rgba(40, 90, 130, 1) 100%)',
      },
      colors:{
        'yellow-background':'#FFD42E8A',
        'yellow-text':'#FCC15A',
        'blue-text':'#05243D'
      }
    },
  },
  plugins: [],
};
