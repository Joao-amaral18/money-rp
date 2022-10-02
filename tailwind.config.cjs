/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          300: '#00B37E',
          500: '#33CC95',
          700: '#015F43',
        },
        purple: {
          300: '#6933FF',
          500: '#5429CC',
        },
        orange: {
          500: '#FBA94C',
        },
        red: {
          500: '#E52e54',
        },
        gray: {
          100: '#f0f2f5',
          200: '#C4C4CC',
          300: '#8D8D99',
          500: '#323238',
          600: '#29292E',
          700: '#121214',
          900: '#09090A'
        }
      }
    },
  },
  plugins: [
  ],
}
