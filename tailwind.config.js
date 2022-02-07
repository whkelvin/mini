const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ['./*.{html,js,hbs}', './partials/*.{html, js, hbs}'],
    darkMode: "class", // or 'media' or 'class'
    variants: {
        extend: {
            display: ["dark"],
        },
    },
    theme: {
        fontFamily: {
            sans: ["Rubik", defaultTheme.fontFamily.sans],
        },

        colors: {
            transparent: "transparent",
            current: "currentColor",
            red: {
                light: "#fff6f7",
                default: "#bf616a",
                dark: "#b8515b",
            },
            orange: {
                default: "#d08770",
            },
            yellow: {
                light: "#fffcf6",
                default: "#ebcb8b",
                dark: "#EAC885",
            },
            green: {
                light: "#f9fff4",
                default: "#a3be8c",
                dark: "#97B67C",
            },
            blue: {
                light: "#eceff4",
                default: "#5e81ac",
                dark: "#5376A2",
            },
            purple: {
                light: "#fff6fd",
                default: "#b48ead",
                dark: "#AD85A6",
            },
            nord: {
                light: "#4c566a",
                default: "#434c5e",
                dark: "#3b4252",
                darker: "#2e3440",
            },
            snow: {
                light: "#eceff4",
                default: "#e5e9f0",
                dark: "#d8dee9",
            },
            white: {
                default: "#ffffff",
            },
            frost: {
                teal: "#8FBCBB",
                lightBlue: "#88C0D0",
                blue: "#81A1C1",
            },
            glass:{
              default: "#F6F8FA",
              dark: "#2e3440",
            },
            grey:{
              default: "#B6B6B6",
              dark: "#717E98"
            },
            glass2:{
              default: "#d8dee9",
              dark: "#3b4252"
            }
        },
    },
    plugins: [],
};
