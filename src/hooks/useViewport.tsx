import React from 'react'

const useViewport = () => {
  const [screenX, setScreenX] = React.useState<number>(0)
  const [screenY, setScreenY] = React.useState<number>(0)

  React.useEffect(() => {
    const onResize = () => {
      setScreenX(window.innerWidth)
      setScreenY(window.innerHeight)
    }

    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return {
    screenX,
    screenY,
  }
}

export default useViewport
