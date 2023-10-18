/** @jsxImportSource @emotion/react */
import React from 'react'
import tw from 'twin.macro'

export type ContainerProps = {
  children?: React.ReactNode
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div css={[tw`mx-auto max-w-[374px]`, tw`wide:(max-w-[1520px])`]}>
      {children}
    </div>
  )
}

export default Container
