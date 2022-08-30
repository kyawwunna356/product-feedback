/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
        }
  },
  plugins: [],
}
