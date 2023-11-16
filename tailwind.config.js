/** @type {import('tailwindcss').Config} */
export default {
  content: ['./pages/**/*.html', './layout/**/*.ejs', './main.js'],
  theme: {
    container: {
      center: true, 
      padding: "12px"
    },
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1296px',
    },
    fontSize: {
      'xs': '12px',
      's': '14px',
      'base': '1rem',
      'md': '18px',
      'lg': '20px',
      'xl': '22px',
      '2xl': '24px',
      '3xl': '25px',
      '4xl': '30px',
      '5xl': '40px',
      '6xl': '60px'
    },
    borderRadius: {
      'none': '0',
      'lg': '10px',
      'xl': '14px',
      'full': '9999px',
    },
    extend: {
      colors: {
        primary: {
          300: '#E4DD87',
          500: '#CDCF84',
          700: '#B4C081',
          900: '#6F7B20'
        },
        secondary: {
          100: '#FCFCFC',
          200: '#E1E0D4',
          300: '#F2EEE5',
          500: '#E9CB9E',
          700: '#CABD9E',
          900: '#DAB071'
        },
        accent: '#0F2F33',
      },
      spacing: {
        '5.5': '1.375rem',
        '9.5': '2.375rem',
        '15.5': '3.875rem',
        '34': '8.5rem',
        '55': '13.75rem',
        '100': '25rem',
        '172': '43rem',
        '204': '51rem'
      }
    },
  },
  plugins: [],
}

