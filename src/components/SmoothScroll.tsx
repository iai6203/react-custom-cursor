'use client'

import { ReactLenis } from '@studio-freight/react-lenis'
import React from 'react'

const SmoothScroll = ({ children }: React.PropsWithChildren) => {
  return <ReactLenis root>{children}</ReactLenis>
}

export default SmoothScroll
