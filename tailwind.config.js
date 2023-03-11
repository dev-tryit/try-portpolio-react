module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      padding: {
        "50px": "50px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
