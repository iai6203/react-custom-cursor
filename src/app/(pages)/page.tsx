import type { Metadata } from 'next'

import SmoothScroll from '@/components/SmoothScroll'

import BusinessSection from './(contents)/BusinessSection'
import HeroSection from './(contents)/HeroSection'

export const metadata: Metadata = {
  title: 'HOME',
  description: '',
}

export default function Home() {
  return (
    <>
      <SmoothScroll>
        <main>
          <HeroSection />
          <BusinessSection />
        </main>
      </SmoothScroll>
    </>
  )
}
