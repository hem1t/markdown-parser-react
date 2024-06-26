/** @type {import('tailwindcss').Config} */
export default {
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        code: [
          '"Fira Code"',
          '"Source Code Pro"',
        ]
      },
      boxShadow: {
        float: "0px 0px 10px rgba(0, 0, 0, 0.5)"
      }
    },
  },
  plugins: [],
}

