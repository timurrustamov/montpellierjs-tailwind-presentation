module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx,css}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        tailwind: '#06b6d4',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
