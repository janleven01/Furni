/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
    fontFamily: {
      fontF: ['Font_1', 'sans-serif']
    },  
    colors: {
      "primary": "#3B5D50",
      "secondary": "#EFF2F1",
      "pcColor": "#DCE5E4",
      "subtextColor": "#6A6A6A"
    },},
  },
  plugins: [],
}

//rgb(248,223,182)