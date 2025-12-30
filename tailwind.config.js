/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'deep-cove': '#071844',
        'sail': '#AAC0FA',
        'foam': '#D0F2FC',
        // Secondary Colors
        'golden-fizz': '#F9FF2D',
        'comet': '#5F6375',
        'athens-grey': '#F7F8FA',
        'almost-black': '#0A0D14',
      },
      fontFamily: {
        'reddit-sans': ['Reddit Sans', 'sans-serif'],
        'satoshi': ['Satoshi', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
