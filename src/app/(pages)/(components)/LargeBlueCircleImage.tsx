import Image from 'next/image'
import React from 'react'

import largeBlueCircle from '@/assets/images/homepage/large-blue-circle.svg'

const LargeBlueCircleImage = () => {
  return (
    <Image
      src={largeBlueCircle}
      alt=""
      width={1796}
      height={1796}
      className="max-w-none"
    />
  )
}

export default LargeBlueCircleImage
