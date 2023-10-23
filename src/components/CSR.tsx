import React from 'react'

const CSR = ({ children }: React.PropsWithChildren) => {
  if (typeof window === undefined) return null

  return <>{children}</>
}

export default CSR
