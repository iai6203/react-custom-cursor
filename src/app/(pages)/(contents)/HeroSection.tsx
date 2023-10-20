import React from 'react'

import Responsive from '@/components/Responsive'

import AlphabetEAndManImage from '../(components)/AlphabetEAndManImage'
import LargeBlueCircleImage from '../(components)/LargeBlueCircleImage'
import ScrollDown from '../(components)/ScrollDown'

const HeroSection = () => {
  return (
    <section className="relative">
      <div className="absolute left-0 top-0 -z-10 w-full overflow-x-hidden">
        <div className="-translate-x-[600px] -translate-y-[690px] w1400:-translate-x-[450px] w1920:-translate-x-[450px]">
          <LargeBlueCircleImage />
        </div>
      </div>

      <div className="container mx-auto w1400:flex">
        <div className="w1400:flex-1">
          <div className="pt-[140px] font-poppins text-[44px] font-bold leading-[49px] pad:pt-[170px] pad:text-[60px] pad:leading-[66px] w1400:pt-[250px] w1920:pt-[280px] w1920:text-[88px] w1920:leading-[96px]">
            <h3>A Happy</h3>
            <h3>Virtual World for</h3>
            <h3>Everyone</h3>
          </div>
          <div className="mt-[20px]">
            <p className="text-[17px] leading-[27px] pad:text-[20px] pad:leading-[34px] w1920:text-[22px] w1920:leading-[36px]">
              지식 통섭으로 누구나 행복한 가상세계를 창조하고
              <br />
              기술을 통해 지역사회와 소통하는 것을 즐거워하는
              <br />
              AI전문기업 유클리드소프트입니다.
            </p>
          </div>
          <Responsive sizes={['mobile', 'w1400', 'w1920']}>
            <div className="mt-[70px] w1400:mt-[120px] w1920:mt-[140px]">
              <ScrollDown />
            </div>
          </Responsive>
        </div>

        <div className="pad:flex pad:justify-between pad:max-w1400:mt-[30px]">
          <Responsive sizes={['pad']}>
            <div className="pad:pt-[130px]">
              <ScrollDown />
            </div>
          </Responsive>
          <div className="w1400:pt-[210px] w1920:pt-[230px]">
            <AlphabetEAndManImage />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
