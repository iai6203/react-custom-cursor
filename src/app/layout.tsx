import type { Metadata } from 'next'
import React from 'react'
import { Toaster } from 'sonner'

import CSR from '@/components/CSR'
import CustomCursor from '@/components/CustomCursor'
import Navbar from '@/components/Navbar'
import SideNavbar from '@/components/SideNavbar'

import StyledComponentsRegistry from '@/lib/registry'

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
          <Toaster closeButton />
          <CSR>
            <CustomCursor />
          </CSR>
          <Navbar />
          <SideNavbar />
          {children}

          <div id="portal" />
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
