module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}', './public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        yellow: {
          primary: "#CFAA01",
          secondary: "#7B6B0C",
        },
        grey: {
          primary: "#D2CACA",
          secondary: "#CCCBC4",
        },
      },
      fontSize: {
        "12px": "12px",
        "14px": "14px",
        "30px": "30px",
        "20px": "20px",
      },
      padding: {
        "30px": "30px",
        "50px": "50px",
      },
      spacing: {
        "30px": "30px",
        "7px": "7px",
        "300px": "300px",
        "350px": "350px",
      },
    },
  },
  variants: {
    extend: {
      borderColor: ["hover", "focus", "group-hover", "responsive"],
      backgroundColor: [
        "hover",
        "odd",
        "even",
        "focus",
        "group-hover",
        "responsive",
      ],
      opacity: ["group-hover", "responsive", "hover"],
      borderStyle: ["group-hover", "responsive", "hover", "odd", "even"],
      screens: ["odd", "even", "responsive"],
      inset: ["odd", "even", "responsive"],
      margin: ["odd", "even", "responsive"],
      minWidth: ["odd", "even", "responsive"],
      desktop: ["odd", "even", "responsive"],
      maxWidth: ["odd", "even", "responsive"],
      spacing: ["odd", "even", "responsive"],
      width: ["odd", "even", "responsive"],
      visibility: ["group-hover", "responsive"],
      textOverflow: [""],
    },
  },
  plugins: [],
};
