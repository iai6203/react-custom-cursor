'use client'

import useMouse from '@react-hook/mouse-position'
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'framer-motion'
import React from 'react'
import tw from 'twin.macro'

const getWidth = ({ open, viewportW, scrollW }: any) => {
  if (open) return viewportW

  return scrollW
}

const HeroSection = () => {
  const baseW = React.useRef(320)
  const baseH = React.useRef(240)

  const [open, setOpen] = React.useState(false)
  const toggleOpen = () => setOpen((prev) => !prev)

  const [viewportW, setViewportW] = React.useState(0)
  const [viewportH, setViewportH] = React.useState(0)
  React.useLayoutEffect(() => {
    setViewportW(window.innerWidth)
    setViewportH(window.innerHeight)
  }, [])

  const section = React.useRef<HTMLElement>(null)
  const { x } = useMouse(section)

  const container = React.useRef<HTMLDivElement>(null)
  const [containerW, setContainerW] = React.useState<number>(0)
  React.useLayoutEffect(() => {
    if (!container.current) return

    const computedStyle = window.getComputedStyle(container.current)
    const paddingLeft = parseFloat(computedStyle.paddingLeft)
    const paddingRight = parseFloat(computedStyle.paddingRight)
    setContainerW(container.current.clientWidth - paddingLeft - paddingRight)
  }, [container])

  const [scrollW, setScrollW] = React.useState(baseW.current)
  const { scrollYProgress } = useScroll({ target: section })
  const scrollMotionValueW = useTransform(
    scrollYProgress,
    [0, 1],
    [baseW.current, containerW],
  )
  useMotionValueEvent(scrollMotionValueW, 'change', setScrollW)

  const variants = {
    default: {
      width: baseW.current,
      height: baseH.current,
    },
    expand: {
      width: viewportW,
      height: viewportH,
    },
  }

  return (
    <>
      <section className="relative h-[200vh]">
        <div ref={container} className="container mx-auto h-full">
          <motion.button
            variants={variants}
            animate={open ? 'expand' : 'default'}
            css={[
              tw`origin-center rounded-md bg-orange-500`,
              open ? tw`fixed inset-0 z-10` : tw`sticky top-48`,
            ]}
            onClick={toggleOpen}
          />
        </div>
      </section>
    </>
  )
}

export default HeroSection
