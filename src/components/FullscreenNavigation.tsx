'use client'

import React from 'react'

import useBodyScroll from '@/hooks/useBodyScroll'

const FullscreenNavigation = () => {
  const { setScrollable } = useBodyScroll()

  React.useEffect(() => {
    setScrollable(false)
  }, [setScrollable])

  return (
    <div className="fixed left-0 top-0 z-50 h-screen w-screen bg-white">
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" width="59" height="59">
          <circle cx="29.5" cy="29.5" r="29.5" />
          <path
            d="M4.268,28.734a.893.893,0,0,0,1.263,0L16.505,17.761,27.483,28.734a.893.893,0,0,0,1.263-1.263L17.769,16.5,28.742,5.519a.893.893,0,0,0-1.263-1.263L16.505,15.234,5.527,4.26A.893.893,0,0,0,4.268,5.519L15.242,16.5,4.268,27.475a.893.893,0,0,0,0,1.259Z"
            transform="translate(12.992 13.007)"
            fill="#fff"
          />
        </svg>
      </button>
    </div>
  )
}

export default FullscreenNavigation
