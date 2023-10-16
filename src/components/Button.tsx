/** @jsxImportSource @emotion/react */
import React from 'react'
import tw from 'twin.macro'

export type ButtonProps = {
  color?: 'primary' | 'warn'
}

const Button = ({
  color = 'primary',
  ...props
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      css={[
        tw`
          rounded-md
          px-2.5
          py-1.5
          text-sm
          font-semibold
          shadow-sm
          transition
          focus-visible:outline
          focus-visible:outline-2
          focus-visible:outline-offset-2
        `,

        // colors
        color === 'primary' &&
          tw`bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600`,
        color === 'warn' &&
          tw`bg-orange-600 text-white hover:bg-orange-500 focus-visible:outline-orange-600`,
      ]}
      {...props}
    />
  )
}

export default Button
