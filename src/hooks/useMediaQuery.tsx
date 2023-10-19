'use client'

import React from 'react'
import { useMediaQuery as useReactResponsiveMediaQuery } from 'react-responsive'

import type { ScreenSize } from '@/types/size'

export const useMediaQuery = () => {
  const [size, setSize] = React.useState<ScreenSize | null>(null)

  const isMobile = useReactResponsiveMediaQuery({
    maxWidth: '749px',
  })
  const isPad = useReactResponsiveMediaQuery({
    minWidth: '750px',
    maxWidth: '1399px',
  })
  const is1400 = useReactResponsiveMediaQuery({
    minWidth: '1400px',
    maxWidth: '1919px',
  })
  const is1920 = useReactResponsiveMediaQuery({
    minWidth: '1920px',
  })

  React.useEffect(() => {
    if (isMobile) return setSize('mobile')
    else if (isPad) return setSize('pad')
    else if (is1400) return setSize('w1400')
    else if (is1920) return setSize('w1920')
    else return setSize(null)
  }, [isMobile, isPad, is1400, is1920])

  return {
    size,
    isMobile,
    isPad,
    is1400,
    is1920,
  }
}
