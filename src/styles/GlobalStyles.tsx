import { Global, css } from '@emotion/react'
import tw, { GlobalStyles as BaseStyles } from 'twin.macro'

import '@styles/fonts/Pretendard/web/static/pretendard.css'

const customStyles = css({
  html: {
    ...tw`h-full`,
  },
  body: {
    ...tw`font-pretendard h-full overflow-hidden antialiased`,
  },
  'div#root': {
    ...tw`h-full`,
  },
})

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
)

export default GlobalStyles
