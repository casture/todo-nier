const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'internal/templates/**/*.templ',
  ],
  theme: {
    extend: {
      colors: {
        light: '#d2ccb4',
        lighter: '#d6d0b8',
        dark: '#48453d',
        neutral: '#c9c4ad',
        background: '#d5d0b7'
      },
      backgroundImage: {
        grid: 'linear-gradient(to right, rgba(0,0,0,.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,.05) 1px, transparent 1px)',
        grid2: 'linear-gradient(to right, #aea784 1px, transparent 1px), linear-gradient(to bottom, #aea784 1px, transparent 1px)'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    plugin(function({ addVariant }) {
      addVariant('hocus', ['&:hover', '&:focus', '&:active'])
    })
  ]
}
