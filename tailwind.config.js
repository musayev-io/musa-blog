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
        inter: ['Inter', ...defaultTheme.fontFamily.sans],
        sans: ['nunito-sans', ...defaultTheme.fontFamily.sans],
        termina: ['termina', ...defaultTheme.fontFamily.sans],
        acumin: ['acumin-pro', ...defaultTheme.fontFamily.sans],
        gothic: ['acme-gothic', ...defaultTheme.fontFamily.sans],
        degular: ['degular', ...defaultTheme.fontFamily.sans],
        neue: ['neue-haas-grotesk-text', ...defaultTheme.fontFamily.sans],
        oswald: ['oswalrd', ...defaultTheme.fontFamily.sans],
      },
      colors: {
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
      fontSize: {
        xxs: '.5rem',
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
  variants: {},
  plugins: [require('@tailwindcss/ui'), require('@tailwindcss/typography')],
}
