/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const defaultTheme = require('tailwindcss/defaultTheme')
// const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        body: ['tiempos', ...defaultTheme.fontFamily.serif],
        code: ['dank-mono', ...defaultTheme.fontFamily.mono],
        display: ['adieu', ...defaultTheme.fontFamily.sans],
        heading: ['america-extended', ...defaultTheme.fontFamily.sans],
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
        // gray: colors.coolGray,
        // red: colors.red,
        // yellow: colors.amber,
        // green: colors.emerald,
        // blue: colors.blue,
        // indigo: colors.indigo,
        // purple: colors.violet,
        // pink: colors.pink,
      },
    },
  },
  variants: {
    backgroundImage: ['responsive', 'hover'],
    backgroundColor: ['hover'],
  },
  plugins: [],
  purge: {
    content: ['app/prismic/html-serializer.js'],
    // options: {
    //   // whitelist: ['list-decimal', 'list-disc', 'list-inside'],
    //   // whitelistPatterns: [/^p[x,y]-/, /^p-/],
    // },
  },
}
