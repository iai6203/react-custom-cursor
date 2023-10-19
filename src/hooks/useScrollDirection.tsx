'use client'

import { useMotionValueEvent, useScroll } from 'framer-motion'
import React from 'react'

import type { ScrollDirection } from '@/types/scroll'

export const useScrollDirection = () => {
  const { scrollYProgress } = useScroll()

  const [direction, setDirection] = React.useState<ScrollDirection>('neutral')
  const [previousLatest, setPreviousLatest] = React.useState<number>(0)

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest > previousLatest) setDirection('down')
    else if (latest < previousLatest) setDirection('up')
    else setDirection('neutral')

    setPreviousLatest(latest)
  })

  return { direction }
}
