/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        lg: '3rem',
        xl: '4rem',
        '2xl': '5rem',
      }
    },

    colors: {
      primary: "#3E71DF",
      dark: "#0F172A",
      secondary: "#001135",
      white: "#fff",
    },
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        scroll: 'scroll 18s linear infinite',
    },
  },
  plugins: [],
}
}