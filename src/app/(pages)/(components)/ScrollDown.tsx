'use client'

import { motion } from 'framer-motion'
import React from 'react'

const ScrollDown = () => {
  return (
    <div className="flex w-fit flex-col items-center space-y-[15px]">
      <span className="font-poppins text-[16px] font-medium">Scroll down</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="2" height="50">
        <line y2="50" fill="none" stroke="#707070" strokeWidth="2" />
        <motion.line
          y2="20"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
          initial={{ y: 0 }}
          animate={{ y: 30 }}
          transition={{
            type: 'spring',
            duration: 1,
            repeat: Infinity,
            repeatDelay: 0.5,
          }}
        />
      </svg>
    </div>
  )
}

export default ScrollDown
