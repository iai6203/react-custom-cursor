/** @jsxImportSource @emotion/react */
import React from 'react'
import tw from 'twin.macro'

const Container = ({ children }: React.PropsWithChildren) => {
  return <div css={[tw`mx-auto max-w-[374px]`]}>{children}</div>
}

export default Container
