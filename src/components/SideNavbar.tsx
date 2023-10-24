'use client'

import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import ReactDOM from 'react-dom'

import CSR from '@/components/CSR'

import { useSideNavbarStore } from '@/hooks/useSideNavbarStore'

const SideNavbar = () => {
  const element = document.getElementById('portal')
  const { open, closeNavbar } = useSideNavbarStore((state) => ({
    open: state.open,
    closeNavbar: state.closeNavbar,
  }))

  if (!element) return null

  return ReactDOM.createPortal(
    <AnimatePresence>
      {open && (
        <div className="relative z-10">
          <motion.div
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="fixed inset-0 bg-black bg-opacity-25"
          />

          <div className="fixed inset-0" onClick={closeNavbar}>
            <motion.div
              variants={{
                hidden: { x: '100%' },
                show: { x: 0, transition: { type: 'tween', delay: 0.2 } },
              }}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="absolute right-0 top-0 h-full w-full max-w-screen-mobile bg-white"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </AnimatePresence>,
    element,
  )
}

const SideNavbarContainer = () => {
  return (
    <CSR>
      <SideNavbar />
    </CSR>
  )
}

export default SideNavbarContainer
