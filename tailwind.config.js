module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      //small mobile phone
      'xs': { 'max': '384px' },

      //large mobile phone
      'sm': { 'min': '385px', 'max': '640px' },

      //tablet
      'md': { 'min': '641px', 'max': '768px' },

      //large table, notebook
      'lg': { 'min': '769px', 'max': '1024px' },

      //laptop, desktop
      'xl': { 'min': '1025px' },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
