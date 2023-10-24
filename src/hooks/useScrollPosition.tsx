import { useMotionValueEvent, useScroll } from 'framer-motion'
import React from 'react'

import type { ScrollPosition } from '@/types/scroll'

const useScrollPosition = () => {
  const [position, setPosition] = React.useState<ScrollPosition>('top')
  const scroll = useScroll()

  const [scrollY, setScrollY] = React.useState<number>(0)
  const [scrollYProgress, setScrollYProgress] = React.useState<number>(0)

  useMotionValueEvent(scroll.scrollY, 'change', (latest) => setScrollY(latest))
  useMotionValueEvent(scroll.scrollY, 'change', (latest) =>
    setScrollYProgress(latest),
  )

  React.useEffect(() => {
    if (scrollY === 0) setPosition('top')
    else if (scrollYProgress > 1) setPosition('bottom')
    else setPosition('middle')
  }, [scrollY, scrollYProgress])

  return { position }
}

export default useScrollPosition
