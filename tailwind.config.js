/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],

  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // ✅ Add custom font
      },
    },
  },
  plugins: [],
};
