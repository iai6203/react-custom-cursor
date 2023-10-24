'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { useScrollDirection } from '@/hooks/useScrollDirection'
import useScrollPosition from '@/hooks/useScrollPosition'
import { useSideNavbarStore } from '@/hooks/useSideNavbarStore'

import mockNavigation from '@/mocks/navigation.json'

import bars3SVG from '@/assets/images/bars-3.svg'
import logoSVG from '@/assets/images/logo.svg'

const variants = {
  hidden: {
    y: -50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
  },
}

const Navbar = () => {
  const { position } = useScrollPosition()
  const { direction } = useScrollDirection()
  const { openNavbar } = useSideNavbarStore((state) => ({
    openNavbar: state.openNavbar,
  }))

  const show = React.useMemo(
    () => position === 'top' || direction === 'up',
    [position, direction],
  )

  return (
    <>
      <motion.header
        variants={variants}
        animate={show ? 'show' : 'hidden'}
        className="fixed left-0 right-0 top-[30px] z-10 px-[20px]"
      >
        <nav className="mx-auto flex max-w-[374px] items-center justify-between rounded-[10px] bg-white px-[30px] py-[25px] pad:max-w-[690px] w1400:max-w-[1287px] w1920:max-w-[1800px]">
          <Image src={logoSVG} alt="Company logo" priority />

          <ul className="hidden gap-x-[100px] w1400:flex">
            {mockNavigation.map(({ label: { eng }, href }, key) => (
              <li key={key} className="text-[18px] font-bold text-black">
                <Link href={href}>{eng}</Link>
              </li>
            ))}
          </ul>

          <button onClick={openNavbar}>
            <Image src={bars3SVG} alt="Hamburger menu button icon" priority />
          </button>
        </nav>
      </motion.header>
    </>
  )
}

export default Navbar
