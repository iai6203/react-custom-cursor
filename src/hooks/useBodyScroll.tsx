import React from 'react'

const useBodyScroll = () => {
  const [scrollable, setScrollable] = React.useState<boolean>(true)

  React.useEffect(() => {
    window.document.body.style.overflow = scrollable ? 'auto' : 'hidden'

    return () => {
      window.document.body.style.overflow = 'auto'
    }
  }, [scrollable])

  return {
    setScrollable,
  }
}

export default useBodyScroll
