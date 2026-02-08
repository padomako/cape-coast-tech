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
                primary: "#0f2a44",   // deep academic blue
                accent: "#1e88e5",    // lighter blue for links & actions
            },
        },
    },
    plugins: [],
}
