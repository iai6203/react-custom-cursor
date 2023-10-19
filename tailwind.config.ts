import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      mobile: '414px',
      pad: '750px',
      w1400: '1400px',
      w1920: '1920px',
    },
    fontFamily: {
      poppins: ['Poppins'],
      pretendard: ['Pretendard'],
    },
    container: {
      padding: {
        DEFAULT: '20px',
        mobile: '20px',
        pad: '60px',
        w1400: '130px',
        w1920: '195px',
      },
    },
    extend: {
      colors: {
        shark: {
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          '200': '#d1d1d1',
          '300': '#b0b0b0',
          '400': '#888888',
          '500': '#6d6d6d',
          '600': '#5d5d5d',
          '700': '#4f4f4f',
          '800': '#454545',
          '900': '#3d3d3d',
          '950': '#222222',
        },
      },
    },
  },
  plugins: [require('./plugins/scrollbar-hide')],
}
export default config
