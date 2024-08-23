/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      borderRadius: {
        '2.5xl': '20px'    
      },
      colors: {
        'primary': '#3E97FF',
        'primary-active': '#2884EF',
        'gray-600': '#7E8299',
        'secondary': '#EEF6FF'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

