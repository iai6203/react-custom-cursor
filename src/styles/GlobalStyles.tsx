'use client'

import React from 'react'
import { createGlobalStyle } from 'styled-components'
import tw, { GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle({
  html: {
    ...tw`h-full w-full`,
  },
  body: {
    ...tw`h-full w-full bg-black font-pretendard text-white antialiased scrollbar-hide`,
  },
})

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyles
