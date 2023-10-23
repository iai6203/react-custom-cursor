'use client'

import useMouse from '@react-hook/mouse-position'
import { AnimatePresence, motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import React from 'react'
import tw from 'twin.macro'

import Responsive from '@/components/Responsive'

import { useCustomCursorStore } from '@/hooks/useCustomCursorStore'

const CustomCursor = () => {
  const body = window.document.body
  const { x, y } = useMouse(body)

  const mouseX = x || window.innerWidth / 2
  const mouseY = y || window.innerHeight / 2

  const status = useCustomCursorStore((state) => state.status)
  const variants = {
    default: {
      x: mouseX - 16,
      y: mouseY - 16,
      width: 32,
      height: 32,
      borderWidth: 2,
      borderColor: '#a855f7',
      backgroundColor: 'transparent',
    },
    view: {
      x: mouseX - 64,
      y: mouseY - 64,
      width: 128,
      height: 128,
      borderWidth: 2,
      borderColor: '#fff',
      backgroundColor: '#fff',
    },
  }

  return (
    <Responsive sizes={['w1400', 'w1920']}>
      <motion.div
        variants={variants}
        animate={status}
        css={[
          tw`pointer-events-none absolute left-0 top-0 z-50 flex items-center justify-center rounded-full`,
        ]}
      >
        <AnimatePresence>
          {status === 'view' && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.1 } }}
              exit={{ opacity: 0 }}
              css={[tw`font-poppins text-xs font-medium text-gray-800`]}
            >
              VIEW
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </Responsive>
  )
}

const CustomCursorCSR = dynamic(Promise.resolve(CustomCursor), {
  ssr: false,
})

export default CustomCursorCSR
