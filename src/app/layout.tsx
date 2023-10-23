import StyledComponentsRegistry from '@/lib/registry'
import type { Metadata } from 'next'
import React from 'react'

import CustomCursorCSR from '@/components/CustomCursor'
import Navbar from '@/components/Navbar'
import SidebarNavigation from '@/components/SidebarNavigation'

import GlobalStyles from '@/styles/GlobalStyles'
import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s | EUCLIDSOFT',
    default: 'EUCLIDSOFT',
  },
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <CustomCursorCSR />
          <Navbar />
          <SidebarNavigation />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
