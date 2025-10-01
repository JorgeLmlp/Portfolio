export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class', // ✅ Enables class-based dark mode
    theme: {
        screens: {
            xs: '480px', // small phones
            sm: '640px', // tablets
            md: '768px', // large tablets / small laptops
            lg: '1366px', // secondary monitor
            xl: '1920px', // primary monitor
            '2xl': '2560px', // ultrawide / 4K
        },
        extend: {
            fontFamily: {
                blackFuture: ["BlackFuture"],
            },
        },
    },
    plugins: [],
}