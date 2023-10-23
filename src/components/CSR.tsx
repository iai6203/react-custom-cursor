'use client'

import React from 'react'

const CSR = ({ children }: React.PropsWithChildren) => {
  const [mounted, setMounted] = React.useState<boolean>(false)

  React.useEffect(() => {
    setMounted(true)

    return () => setMounted(false)
  }, [])

  if (!mounted) return null

  return <>{children}</>
}

export default CSR
