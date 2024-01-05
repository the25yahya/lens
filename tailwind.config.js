/** @type {import('tailwindcss').Config} */
export default {
  content: [    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      spacing: {
        '128': '15rem',
        '135': '16rem',
        '140':'17rem',
        '100' : '12rem',
        '80' : '10rem',
        '50' : '8rem',
        '30' : '20%'
      },
      transform: {
      
      },
      colors: {
        'custom-color': '#0F141E',
        'custom-color2': '#D9C3B0',
      },
      width: {
        1000:'1000px',
        900:'900px',
        800:"800px",
        700:"700px",
        600:"600px",
        500: '500px',
        420: '420px',
        410: '410px',
        400: '400px',
        380:'380px',
        350: '350px',
        320: '320px',
        300: '300px',
        200: '200px',
        250: '250px',
        180: "180px",
        150: "150px",
        100: '100px',
        60: '60px',
        50: '50px',
        40: '40px',
        30: '30px',
      },
      height: {
        800:"800px",
        700:"700px",
        600:"600px",
        560:'560px',
        555:"555px",
        500: '500px',
        420: '420px',
        410: '410px',
        400: '400px',
        300: '300px',
        200: '200px',
        250: '250px',
        180: "180px",
        100: '100px',
        60: '60px',
        50: '50px',
        40: '40px',
        30: '30px',
      },
    },
  },
  plugins: [],
}