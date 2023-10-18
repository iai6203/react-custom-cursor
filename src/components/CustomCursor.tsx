/** @jsxImportSource @emotion/react */
import useMouse from '@react-hook/mouse-position'
import { motion } from 'framer-motion'
import React, { useRef } from 'react'
import tw from 'twin.macro'

import { useCustomCursorStore } from '@hooks/useCustomCursorStore'

const CustomCursor = () => {
  const body = window.document.body
  const target = useRef(body)
  const { x, y } = useMouse(target, {
    enterDelay: 0,
    leaveDelay: 500,
  })

  const mouseXPosition = x || 0
  const mouseYPosition = y || 0

  const status = useCustomCursorStore((state) => state.status)
  const variants = {
    default: {
      opacity: 1,
      height: 10,
      top: -5,
      left: -5,
      width: 10,
      fontSize: '16px',
      border: '1px solid #fff',
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        type: 'spring',
        mass: 0.6,
      },
    },
    navbar: {
      opacity: 1,
      height: 10,
      top: -5,
      left: -5,
      width: 10,
      fontSize: '16px',
      border: '1px solid #000',
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        type: 'spring',
        mass: 0.6,
      },
    },
    highlight: {
      top: -25,
      left: -25,
      opacity: 1,
      height: 50,
      width: 50,
      fontSize: '16px',
      border: '2px solid #000',
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        type: 'spring',
        mass: 0.6,
      },
    },
  }
  const spring = {
    type: 'spring',
    stiffness: 500,
    damping: 28,
  }

  return (
    <motion.div
      variants={variants}
      animate={status}
      transition={spring}
      css={[
        tw`
          pointer-events-none
          absolute
          z-50
          rounded-full
        `,
      ]}
    />
  )
}

export default CustomCursor
