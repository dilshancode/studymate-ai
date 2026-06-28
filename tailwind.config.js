export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0A0E1A', // Midnight Navy background / lowest
          800: '#171B28', // Surface low
          700: '#1B1F2C', // Surface container
          600: '#262A37', // Surface container high
          500: '#313442', // Surface container highest
        },
        brand: {
          primary: '#ADC6FF',
          secondary: '#D0BCFF',
          tertiary: '#4CD7F6',
          surface: '#0F131F',
          'on-surface': '#DFE2F3',
          'on-surface-variant': '#C2C6D6',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Geist', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
