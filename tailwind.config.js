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
      //mobile phone
      'xs': { 'max': '480px' },

      //tablet
      'md': { 'min': '481px', 'max': '1023px' },

      //laptop, desktop
      'xl': { 'min': '1024px' },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
