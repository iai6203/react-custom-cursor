'use client'

import useMouse from '@react-hook/mouse-position'
import { AnimatePresence, motion } from 'framer-motion'
import _ from 'lodash'
import React from 'react'

type VideoProps = {
  xAxis: number | null
}

const PlayIcon = () => {
  return (
    <svg
      data-v-a1a2b520=""
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 17 20"
      className="h-auto w-[2.5rem]"
    >
      <path
        data-v-a1a2b520=""
        fillRule="evenodd"
        d="M15.527 11.955 4.081 19.434A2 2 0 0 1 .987 17.76V2.8A2 2 0 0 1 4.08 1.127l11.446 7.48a2 2 0 0 1 0 3.348Z"
        className="fill-current"
      />
    </svg>
  )
}

const Video = ({ xAxis = 0 }: VideoProps) => {
  const video = React.useRef<HTMLVideoElement>(null)
  const [viewportW, setViewportW] = React.useState<number>(0)
  const mouseX = React.useMemo(() => xAxis || 0, [xAxis])
  const [videoW, setVideoW] = React.useState<number>(0)

  const [open, setOpen] = React.useState<boolean>(false)

  React.useLayoutEffect(() => {
    if (!video.current) return

    setViewportW(window.innerWidth)
    setVideoW(video.current.width)
  }, [video])

  const variants = {
    animate: {
      x: _.clamp(mouseX, 60, viewportW - (videoW + 60)),
      transition: {
        type: 'spring',
        damping: 25,
        mass: 1,
        stiffness: 100,
      },
    },
  }

  return (
    <>
      <AnimatePresence>
        {open ? (
          <motion.div
            layoutId="video"
            className="group absolute left-0 top-0 cursor-pointer"
            variants={variants}
            animate="animate"
            onClick={() => setOpen(true)}
          >
            <video
              ref={video}
              src="https://download-video.akamaized.net/v2-1/playback/7b5f11b5-19b7-4096-b971-b1422ff988cb/6992667f-4e6b67a3?__token__=st=1698133851~exp=1698148251~acl=%2Fv2-1%2Fplayback%2F7b5f11b5-19b7-4096-b971-b1422ff988cb%2F6992667f-4e6b67a3%2A~hmac=f9c4f1816dc45039e1318d9f7252ee0ba1b3919ef43d1e11ac82e9fe748e8730&r=dXMtd2VzdDE%3D"
              width={514}
              autoPlay
              loop
              muted
              className="rounded-3xl"
            />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 mix-blend-difference transition duration-500 group-hover:opacity-100">
              <PlayIcon />
            </div>
          </motion.div>
        ) : (
          <motion.div
            layoutId="video"
            className="group fixed inset-0 cursor-pointer"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => setOpen(true)}
          >
            <video
              src="https://download-video.akamaized.net/v2-1/playback/7b5f11b5-19b7-4096-b971-b1422ff988cb/6992667f-4e6b67a3?__token__=st=1698133851~exp=1698148251~acl=%2Fv2-1%2Fplayback%2F7b5f11b5-19b7-4096-b971-b1422ff988cb%2F6992667f-4e6b67a3%2A~hmac=f9c4f1816dc45039e1318d9f7252ee0ba1b3919ef43d1e11ac82e9fe748e8730&r=dXMtd2VzdDE%3D"
              width={514}
              autoPlay
              loop
              muted
              className="rounded-3xl"
            />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 mix-blend-difference transition duration-500 group-hover:opacity-100">
              <PlayIcon />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

const HeroSection = () => {
  const section = React.useRef<HTMLElement>(null)
  const { x } = useMouse(section)

  return (
    <section ref={section} className="relative h-full">
      <div className="container mx-auto">
        <Video xAxis={x} />
      </div>
    </section>
  )
}

export default HeroSection
