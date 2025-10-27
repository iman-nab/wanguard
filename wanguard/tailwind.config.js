/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "inner-glow": "0 0 40px rgba(99,102,241,0.4)"
      },
    },
  },
  plugins: [],
}
