/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                vietam: ['Vietam', 'sans-serif'],
            },
            colors: {
                darkCustom: '#121826',
                greyCustom: '#6C727F',
                lightGreyCustom: '#E5E7EB',
                white: '#FFFFFF',
                bgLinkDark : "#212936",
                outlineBottom : "#3c414d"
            },

        },
    },
    plugins: [],
}
