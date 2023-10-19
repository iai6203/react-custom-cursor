'use client'

import Image from 'next/image'
import React from 'react'

import { useMediaQuery } from '@/hooks/useMediaQuery'

import alphabetE2 from '@/assets/images/homepage/alphabet-e-down.svg'
import alphabetE1 from '@/assets/images/homepage/alphabet-e-up.svg'
import man from '@/assets/images/homepage/man.svg'

const imageSizeMap = {
  alphabetE1: {
    mobile: {
      width: 325,
      height: 160,
    },
    pad: {
      width: 325,
      height: 160,
    },
    w1400: {
      width: 490,
      height: 245,
    },
    w1920: {
      width: 660,
      height: 330,
    },
  },
  alphabetE2: {
    mobile: {
      width: 325,
      height: 160,
    },
    pad: {
      width: 325,
      height: 160,
    },
    w1400: {
      width: 490,
      height: 245,
    },
    w1920: {
      width: 660,
      height: 330,
    },
  },
  man: {
    mobile: {
      width: 350,
      height: 450,
    },
    pad: {
      width: 350,
      height: 450,
    },
    w1400: {
      width: 530,
      height: 630,
    },
    w1920: {
      width: 720,
      height: 820,
    },
  },
}

const AlphabetEAndManImage = () => {
  const { size } = useMediaQuery()

  if (size === null) return null

  return (
    <div className="flex w-fit flex-col items-center">
      <Image
        src={alphabetE1}
        alt=""
        priority
        width={imageSizeMap.alphabetE1[size].width}
        height={imageSizeMap.alphabetE1[size].height}
      />
      <Image
        src={alphabetE2}
        alt=""
        priority
        width={imageSizeMap.alphabetE2[size].width}
        height={imageSizeMap.alphabetE2[size].height}
      />
      <Image
        src={man}
        alt=""
        priority
        width={imageSizeMap.man[size].width}
        height={imageSizeMap.man[size].height}
        className="-translate-y-[60px]"
      />
    </div>
  )
}

export default AlphabetEAndManImage
