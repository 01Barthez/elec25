/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '3rem',
        xl: '4rem',
        '2xl': '5rem',
      }
    },

    colors: {
      primary: "#3E71DF",
      dark: "#0F172A",
      secondary: "#001135",
    },
    extend: {},
  },
  plugins: [],
}