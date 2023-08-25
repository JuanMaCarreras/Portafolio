/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',

  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      screens: {
        phone: { min: '330px', max: '768px' },
        tablet: { min: '769px', max: '1069px' }

      },
      colors: {
        bg: '#fffff',
        title: '#ea580c',
        text: '#030712',
        shadow: '#cbcde3',
        shadow2: '#edecec',
        mainLight: '#f2f2f2',
        footer: '#f0f0f0',
        // -------------------
        dark: '#0d1a26',
        textDark: '#94a3b8',
        mainDark: '#0a1622',
        mainSecond: '#011627',
        shadow3: '#0e1e2e',
        shadowB: '#102336',
        second: '#f43f5e',
        // -------------------
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
        I: '#ba68c8',
        TRE: '#2979ff'
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0%'
          },
          '100%': {
            opacity: '100%'
          }
        }

      },
      animation: {
        'fade-in': 'fade-in 1s'
      }

    }
  },
  plugins: [require('tailwindcss-animated')]
}
