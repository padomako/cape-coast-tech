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
                primary: "#0a1628",
                accent: "#d4a024",
                teal: "#1a9e8f",
            },
        },
    },
    plugins: [],
}
