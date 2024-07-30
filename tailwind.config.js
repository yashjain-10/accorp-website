/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary:'#027787',
        secondary: '#BD8D3C',
        black: '#000000',
        white: '#F7F7F7',
        gray: {
            100: '#f7fafc',
            200: '#edf2f7',
            300: '#e2e8f0',
            400: '#cbd5e0',
            500: '#a0aec0',
            600: '#718096',
            700: '#4a5568',
            800: '#2d3748',
            900: '#1a202c',
        },

    },

    extend: {
        transitionProperty: {
            'width': 'width,height',

        },


    },
  },
  plugins: [],
}