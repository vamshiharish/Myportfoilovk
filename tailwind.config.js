/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('tailwind-typewriter')({
        wordsets: {
            role: {
                words: ["Frontend Developer","Backend Developer","React Developer"],
                delay: 1,
                writeSpeed:0.1,
                pauseBetween:1,
            }
        }
    })
]
}