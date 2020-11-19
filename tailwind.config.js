/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        america: ['america', ...defaultTheme.fontFamily.mono],
        heading: ['america-extended', ...defaultTheme.fontFamily.mono],
        subheading: ['america-condensed', ...defaultTheme.fontFamily.mono],
        mono: ['t-star-tw', ...defaultTheme.fontFamily.mono],
        maison: ['maison-neue-extended', ...defaultTheme.fontFamily.mono],
        body: ['walsheim', ...defaultTheme.fontFamily.mono],
        display: ['adieu', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        m: {
          'blue-1': '#000c1d',
          'blue-2': '#8badc1',
          'blue-3': '#bafaf8',
          'orange-1': '#ff9500',
          'orange-2': '#febd41',
          'orange-3': '#ffdab9',
        },
        'owl-charcoal': '#000c1d',
        'owl-pearl': '#001122',
        'owl-nepal': '#8badc1',
        'owl-stone': '#102a44',
        'owl-pictone': '#48BFE3',
        'owl-turq': '#00f5d4',
        'owl-org-peach': '#ffdab9',
        'owl-org-pastel': '#febd41',
        'owl-org-safety': '#ff9500',
      },
    },
    typography: {
      default: {
        css: {
          color: '#22282b',
          strong: {
            fontWeight: '800',
          },
          h1: {
            color: '#08d69f',
          },
          h2: {
            color: '#ff47c0',
            font: 'mono',
          },
        },
      },
    },
  },
  variants: {
    backgroundImage: ['responsive', 'hover'],
  },
  plugins: [require('@tailwindcss/ui'), require('@tailwindcss/typography')],
}
