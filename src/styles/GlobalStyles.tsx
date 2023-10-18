import { Global, css } from '@emotion/react'
import tw, { GlobalStyles as BaseStyles } from 'twin.macro'

import '@styles/fonts/Pretendard/web/static/pretendard.css'

const customStyles = css({
  html: {
    ...tw`h-full`,
  },
  body: {
    ...tw`h-full cursor-none overflow-hidden font-pretendard antialiased`,
  },
  'div#root': {
    ...tw`h-full`,
  },
  a: {
    ...tw`cursor-none`,
  },
})

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
)

export default GlobalStyles
