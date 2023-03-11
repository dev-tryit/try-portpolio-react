module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      padding: {
        "40px": "40px",
        "50px": "50px",
      },
      margin: {
        "40px": "40px",
        "50px": "50px",
      },
      letterSpacing: {
        "2px": "2px",
        "5px": "5px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
