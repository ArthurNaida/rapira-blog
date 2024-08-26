// import test from 'node:test';

/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  rules: [
    {
      test: /\.sass$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }
  ],
  darkMode: false,
  theme: {
    extend: {
      boxShadow: {
        'input-primary': '0px 0px 0px 2px rgba(62, 151, 255, 0.32)',
        'input-danger': '0px 0px 0px 2px #F1416C52'
      },
      fontSize: {
        '22': ['1.375rem', '1.375rem'],
        '24': ['1.5rem', '1.5rem'],
        '14': ['0.875rem', '0.875rem']
      },
      borderRadius: {
        '2.5xl': '1.25rem'    
      },
      colors: {
        'primary': '#3E97FF',
        'primary-active': '#2884EF',
        'gray-600': '#7E8299',
        'secondary': '#EEF6FF',
        'danger': '#F1416C'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

