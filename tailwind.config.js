/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        main: '#0d1a26',
        text: '#b0bec5',
        mainDark: '#0a1622',
        mainSecond: '#011627',
        second: '#d45498',
        H: '#f06529',
        C: '#2965f1',
        J: '#f0db4f',
        R: '#61dbfb',
        RD: '#764abc',
        T: '#4dc0b5',
        N: '#58ab51',
        E: '#b3afa9',
        S: '#3490dc',
        P: '#004c99',
        MY: '#f29111',
        G: '#f1502f',
        GH: '#c7d1db', // '#5e5d5d',
        I: '#ba68c8'
      }
    }
  },
  plugins: []
}
