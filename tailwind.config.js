/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'primary': '#3E97FF',
        'primary-active': '#2884EF',
        'secondary': '#EEF6FF'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

