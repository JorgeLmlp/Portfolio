export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '480px',   // celulares pequenos
      sm: '640px',   // tablets
      md: '768px',   // tablets grandes / laptops pequenos
      lg: '1366px',  // monitor secundário
      xl: '1920px',  // monitor principal
      '2xl': '2560px', // telas maiores (ultrawide/4K)
    },
    extend: {
      fontFamily: {
        blackFuture: ["BlackFuture"],
      },
    },
  },
  plugins: [],
}