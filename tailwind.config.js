module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  theme: {
    extend: {},
    screens: {
      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }
      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }
      'md': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
      'sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
    },
  },
  variants: {},
  plugins: [],
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
}
