/** @jsxImportSource @emotion/react */
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import tw from 'twin.macro'

import StretchText from '@components/Animation/StretchText'
import Container from '@components/Container'

// Icons

const BlueCircleSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-[2096px] w-[2096px] -translate-x-[450px] -translate-y-[690px]"
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

const ScrollDownSVG = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" css={[tw`h-[50px] w-[2px]`]}>
      <g>
        <line y2="50" fill="none" stroke="#707070" strokeWidth="2" />
        <motion.line
          y2="20"
          initial={{ y: 0 }}
          animate={{ y: 30 }}
          transition={{
            type: 'spring',
            duration: 1,
            repeat: Infinity,
            repeatDelay: 0.5,
          }}
          className="fill-none stroke-white stroke-[2px]"
        />
      </g>
    </svg>
  )
}

// Components

const ScrollDown = () => {
  return (
    <>
      <div className="flex w-fit flex-col items-center">
        <span css={[tw`font-poppins text-[16px] font-medium`]}>
          Scroll down
        </span>
        <div css={[tw`h-[15px]`]} />
        <ScrollDownSVG />
      </div>
    </>
  )
}

//

const Home = () => {
  const [selectedId, setSelectedId] = React.useState<string | null>(null)

  return (
    <>
      <main className="relative h-full overflow-y-auto bg-black text-white">
        {/* Background Images */}
        <div css={[tw`absolute left-0 right-0 top-0 overflow-x-hidden`]}>
          <BlueCircleSVG />
        </div>

        {/* Contents */}
        <div className="relative z-10">
          <Container>
            <section className="flex gap-x-[35px]">
              <div className="pt-[283px]">
                <div className="min-w-[762.05px] font-poppins text-[88px] font-bold leading-[96px] transition">
                  <StretchText>
                    <h3>A Happy</h3>
                  </StretchText>
                  <StretchText>
                    <h3>Virtual World for</h3>
                  </StretchText>
                  <StretchText>
                    <h3>Everyone</h3>
                  </StretchText>
                </div>
                <div className="h-[20px]" />
                <StretchText>
                  <p className="text-[22px] leading-[36px]">
                    지식 통섭으로 누구나 행복한 가상세계를 창조하고
                    <br />
                    기술을 통해 지역사회와 소통하는 것을 즐거워하는
                    <br />
                    AI전문기업 유클리드소프트입니다.
                  </p>
                </StretchText>
                <div className="h-[140px]" />
                <ScrollDown />
              </div>
              <div className="flex flex-col items-center pt-[228px]">
                <img src="/assets/images/alphabet_e_up.svg" alt="" />
                <img src="/assets/images/alphabet_e_down.svg" alt="" />
                <img
                  src="/assets/images/think_man.svg"
                  alt=""
                  className="-translate-y-[50px]"
                />
              </div>
            </section>

            <section className="relative pb-[1090px]">
              <img
                src="/assets/images/alphabet_c.svg"
                alt=""
                className="absolute top-0 -z-10 -translate-y-[470px]"
              />

              <StretchText whileInView once>
                <h3 className="text-center font-poppins text-[60px] font-bold">
                  A company that creates a feasible virtual world
                  <br />
                  through knowledge consilience
                </h3>
              </StretchText>
              <div className="h-[50px]" />
              <StretchText whileInView once>
                <h6 className="text-center text-[22px] font-medium">
                  유클리드소프트는 AI 모델링, AI 학습데이터 구축, 빅데이터분석,
                  공공기관 IT 서비스, 교육사업을 합니다.
                  <br />
                  보다 행복한 삶의 위한 기술, EUCLID SOFT 가 함께 합니다.
                </h6>
              </StretchText>
            </section>

            <section>
              <ul className="grid grid-cols-2">
                {[
                  '/assets/images/product01.svg',
                  '/assets/images/product02.svg',
                  '/assets/images/product03.svg',
                  '/assets/images/product04.svg',
                  '/assets/images/product05.svg',
                ].map((src, key) => (
                  <li key={key} onClick={() => setSelectedId(src)}>
                    <motion.div
                      layoutId={src}
                      className="relative h-[500px] w-[420px]"
                    >
                      <img
                        src={src}
                        alt=""
                        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full object-cover"
                      />
                    </motion.div>
                  </li>
                ))}
              </ul>

              <AnimatePresence>
                {selectedId && (
                  <motion.div layoutId={selectedId}>
                    <motion.h5>{selectedId}</motion.h5>
                    <motion.button onClick={() => setSelectedId(null)}>
                      CLOSE
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </section>
          </Container>
        </div>
      </main>
    </>
  )
}

export default Home
