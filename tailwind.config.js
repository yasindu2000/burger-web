/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [

    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors:{
        primary: "#f8981f",
        secondary: "#e54416",
        tertiary: "#f5ede3",
      },
      container:{
        center: true,
        padding:{

          DEFAULT:"1rem",
          sm: "3rem"
        }
      }
    },
  },
  plugins: [],
}

