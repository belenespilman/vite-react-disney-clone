/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      md: '968px',
    },
    extend: {},
  },
  //eslint-disable-next-line
  plugins: [require('tailwindcss-no-scrollbar')],
}
