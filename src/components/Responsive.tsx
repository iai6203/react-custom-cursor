'use client'

import React from 'react'

import { useMediaQuery } from '@/hooks/useMediaQuery'

import type { ScreenSize } from '@/types/size'

export type ResponsiveProps = {
  sizes: ScreenSize[]
  children: React.ReactNode
}

const Responsive = ({ sizes, children }: ResponsiveProps) => {
  const { size } = useMediaQuery()

  if (sizes.includes('mobile') && size === 'mobile') return children
  else if (sizes.includes('pad') && size === 'pad') return children
  else if (sizes.includes('w1400') && size === 'w1400') return children
  else if (sizes.includes('w1920') && size === 'w1920') return children
  else return null
}

export default Responsive
