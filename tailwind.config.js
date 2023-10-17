const _ = require('lodash')
const { pxToRem } = require('./src/utils/rem')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      mobile: { max: '749px' }, // @media (max-width: 749px)
      pad: '750px', // @media (min-width: 750px)
      desktop: '1400px', // @media (min-width: 1400px)
      wide: '1920px', // @media (min-width: 1920px)
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      pretendard: ['Pretendard'],
    },
    extend: {
      fontSize: {
        ..._.range(1, 64).reduce((acc, px) => {
          acc[`${px}pxr`] = pxToRem(px)

          return acc
        }, {}),
      },
      lineHeight: {
        ..._.range(1, 64).reduce((acc, px) => {
          acc[`${px}pxr`] = pxToRem(px)

          return acc
        }, {}),
      },
      spacing: {
        ..._.range(1, 1000).reduce((acc, px) => {
          acc[`${px}pxr`] = pxToRem(px)

          return acc
        }, {}),
      },
    },
  },
  plugins: [],
}
