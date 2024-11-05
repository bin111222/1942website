module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
      },
      colors: {
        dark: {
          50: '#EAEAEA',
          100: '#BEBEBF',
          200: '#929293',
          300: '#666667',
          400: '#3D3D3E',
          500: '#131314',
          600: '#111112',
          700: '#0E0E0F',
          800: '#0B0B0C',
          900: '#080809',
        },
        accent: {
          primary: '#00D4FF',   // Bright cyan
          secondary: '#FF3DFF', // Bright magenta
          tertiary: '#7000FF',  // Deep purple
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'dark-grid': 'linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)',
      },
      maxWidth: {
        'screen-2xl': '90rem', // 1440px
        'screen-3xl': '100rem', // 1600px
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
} 