import type { Metadata } from 'next'

import SmoothScroll from '@/components/SmoothScroll'

import prisma from '@/lib/prisma'

import HeroSection from './(contents)/HeroSection'

export const metadata: Metadata = {
  title: 'HOME',
  description: '',
}

const getUsers = async () => {
  return prisma.user.findMany()
}

export default async function Home() {
  const users = await getUsers()

  console.log('users', { users })

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
