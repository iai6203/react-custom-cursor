'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

import useBodyScroll from '@/hooks/useBodyScroll'
import { useSidebarNavigationStore } from '@/hooks/useSidebarNavigationStore'

import mockNavigation from '@/mocks/navigation.json'

const CloseButton = () => {
  const [tap, setTap] = React.useState<boolean>(false)
  const [hover, setHover] = React.useState<boolean>(false)

  const status = React.useMemo(() => {
    if (tap) return 'tap'
    else if (hover) return 'hover'
    else return 'default'
  }, [tap, hover])

  const closeSidebarNavigation = useSidebarNavigationStore(
    (state) => state.closeSidebarNavigation,
  )

  return (
    <button
      className="absolute right-[40px] top-[40px] flex items-center gap-x-[20px] font-poppins text-[15px] font-semibold text-shark-950"
      onMouseDown={() => setTap(true)}
      onMouseUp={() => setTap(false)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={closeSidebarNavigation}
    >
      <span>CLOSE</span>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="70"
        height="70"
        variants={{
          default: {
            scale: 1,
          },
          tap: {
            scale: 0.95,
          },
          hover: {
            scale: 1.1,
          },
        }}
        initial="default"
        animate={status}
      >
        <g>
          <rect width="70" height="70" fill="#222" />
          <path
            d="M4.258,27.745a.857.857,0,0,0,1.213,0L16.005,17.21,26.544,27.745a.858.858,0,0,0,1.213-1.213L17.218,16,27.753,5.458A.858.858,0,0,0,26.54,4.245L16.005,14.784,5.466,4.249A.857.857,0,0,0,4.258,5.458L14.792,16,4.258,26.536a.857.857,0,0,0,0,1.209Z"
            transform="translate(18 18)"
            fill="#fff"
          />
        </g>
      </motion.svg>
    </button>
  )
}

const SidebarNavigation = () => {
  const open = useSidebarNavigationStore((state) => state.open)
  const { setScrollable } = useBodyScroll()

  React.useEffect(() => {
    setScrollable(!open)
  }, [open, setScrollable])

  return (
    <>
      {/* Container */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed left-0 top-0 z-50 h-screen w-screen bg-black/80"
          >
            {/* Sidebar */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{
                type: 'easeInOut',
              }}
              className="absolute right-0 top-0 h-full w-full max-w-[414px] bg-white"
            >
              {/* Close button */}
              <CloseButton />

              {/* Navigation */}
              <div className="scrollbar-hide h-full space-y-[40px] overflow-y-auto px-[40px] pb-[40px] pt-[60px]">
                {mockNavigation.map((parent, parentKey) => (
                  <ul key={parentKey}>
                    <li>
                      <h3 className="text-[24px] font-bold text-shark-950">
                        {parent.label.ko}
                      </h3>
                      <ul className="mt-[20px] space-y-[10px]">
                        {parent.children.map((child, childKey) => (
                          <li key={childKey}>
                            <Link
                              href={child.href}
                              className="text-[16px] font-medium text-[#666] transition hover:text-[#0b11af] hover:underline"
                            >
                              {child.label.ko}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  </ul>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default SidebarNavigation
