/** @jsxImportSource @emotion/react */
import useMouse from '@react-hook/mouse-position';
import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import tw from 'twin.macro';


const CustomCursor = () => {
  const body = window.document.body
  const target = useRef(body)
  const {x, y} = useMouse(target, {
    enterDelay: 0,
    leaveDelay: 500,
  })

  const mouseXPosition = x || 0
  const mouseYPosition = y || 0

  const variants = {
    default: {
      opacity: 1,
      height: 10,
      width: 10,
      fontSize: '16px',
      backgroundColor: '#1e91d6',
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
      animate="default"
      transition={spring}
      css={[
        tw`
          rounded-full
        `,
      ]}
    />
  )
}

export default CustomCursor
