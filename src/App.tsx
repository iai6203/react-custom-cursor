import React from 'react'

import Button, { type ButtonProps } from './components/Button'
import CustomCursor from './components/CustomCursor'

function App() {
  const [color, setColor] = React.useState<ButtonProps['color']>('primary')

  const handleButtonClick = () => {
    setColor((prevColor) => (prevColor === 'primary' ? 'warn' : 'primary'))
  }

  return (
    <>
      <CustomCursor />
      <Button color={color} onClick={handleButtonClick}>
        Button Text
      </Button>
    </>
  )
}

export default App
