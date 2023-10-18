import React from 'react'
import { Outlet } from 'react-router-dom'

import CustomCursor from '@components/CustomCursor'
import Navbar from '@components/Navbar'

const BaseLayout = () => {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <Outlet />
    </>
  )
}

export default BaseLayout
