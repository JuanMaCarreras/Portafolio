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
        mainDark: '#09121c',
        second: '#d45498'
      }
    }
  },
  plugins: []
}
