import type { Metadata } from 'next'

import SmoothScroll from '@/components/SmoothScroll'

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
        </main>
      </SmoothScroll>
    </>
  )
}
