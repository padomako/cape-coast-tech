/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", "system-ui", "sans-serif"],
                heading: ["Poppins", "system-ui", "sans-serif"],
            },
            colors: {
                primary: "#0d0d0d",
                accent: "#F5C400",
                flame: "#CC2200",
                teal: "#F5C400",
            },
        },
    },
    plugins: [],
}
