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
      '5xl': '35px',
      '6xl': '40px',
      '7xl': '45px',
      '8xl': '60px',
      '9xl': '90px'
    },
    borderRadius: {
      'none': '0',
      DEFAULT: '4px',
      'lg': '10px',
      'xl': '14px',
      '3xl': '24px',
      'full': '9999px',
    },
    extend: {
      colors: {
        primary: {
          200: '#FAF292',
          300: '#EAE088',
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
        accent: {
          1: '#0F2F33',
          2: '#051A1D;'
        },
        dark: '#3D3D3D'
      },
      spacing: {
        '4.5': '1.125rem',
        '5.5': '1.375rem',
        '7.5': '1.875rem',
        '9.5': '2.375rem',
        '10.5': '2.625rem',
        '13': '3.25rem',
        '13.5': '3.375rerm',
        '15.5': '3.875rem',
        '15': '3.75rem',
        '17.5': '4.375rem',
        '18': '4.5rem',
        '22.5': '5.625rem',
        '23': '5.75rem',
        '27': '6.75rem',
        '34': '8.5rem',
        '41': '10.25rem',
        '41.5': '10.375rem',
        '47': '11.75rem',
        '50': '12.5rem',
        '55': '13.75rem',
        '56.5': '14.125rem',
        '100': '25rem',
        '112': '28rem',
        '172': '43rem',
        '204': '51rem'
      },
      scale: {
        '175': '1.75',
      },
      aspectRatio: {
        '40/51': '40 / 51',
      },
      borderWidth: {
        '3': '3px'
      },
      backgroundSize: {
        50: '50%',
        272: '272%'
      },
    },
  },
  plugins: [],
}

