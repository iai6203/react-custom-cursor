/** @jsxImportSource @emotion/react */
import React from 'react'
import tw from 'twin.macro'

import Container from '@components/Container'

// Icons

const BlueCircleSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-[2096px] w-[2096px] -translate-x-[600px] -translate-y-[690px]"
    >
      <defs>
        <radialGradient
          id="radial-gradient"
          cx="0.5"
          cy="0.5"
          r="0.5"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stopColor="#003bff" />
          <stop offset="1" stopColor="#28cbfc" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle
        cx="898"
        cy="898"
        r="898"
        transform="translate(150 150)"
        opacity="0.5"
        fill="url(#radial-gradient)"
      />
    </svg>
  )
}

//

const Home = () => {
  return (
    <>
      <main className="relative h-full bg-black text-white">
        {/* Background Images */}
        <div css={[tw`absolute left-0 right-0 top-0 overflow-x-hidden`]}>
          <BlueCircleSVG />
        </div>

        {/* Contents */}
        <div className="relative z-10 pt-140pxr">
          <Container>
            <div className="font-poppins leading-56pxr text-44pxr font-bold">
              <h3>A Happy</h3>
              <h3>Virtual World for</h3>
              <h3>Everyone</h3>
            </div>
            <div className="h-20pxr" />
            <p className="leading-27pxr text-17pxr">
              지식 통섭으로 누구나 행복한 가상세계를 창조하고
              <br />
              기술을 통해 지역사회와 소통하는 것을 즐거워하는
              <br />
              AI전문기업 유클리드소프트입니다.
            </p>
          </Container>
        </div>
      </main>
    </>
  )
}

export default Home
