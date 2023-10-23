'use client'

import React from 'react'

const Item = () => {
  return (
    <div>
      <div className="container mx-auto flex h-full max-w-none items-center bg-[#00108e] pb-[70px] pt-[120px]">
        <div>
          <h3 className="text-[46px] font-extrabold leading-[31px]">
            AI 학습데이터
          </h3>
          <p className="mt-[22.4px] text-[19px] font-medium leading-[29px]">
            인공지능이 학습할 수 있도록 원본데이터에
            <br />
            라벨링한 데이터로 인공지능 학습데이터 구축
          </p>
          <div className="mt-[36px]">
            <button className="flex items-center gap-x-[34px] rounded-[32px] border border-white px-[30px] py-[15px] text-[15px] font-medium">
              <span>VIEW MORE</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20.802"
                height="6.278"
              >
                <path
                  d="M-12234.452,5602.087h19l-4.965-5"
                  transform="translate(12234.452 -5596.559)"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="1.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const BusinessSection = () => {
  return (
    <>
      <section className="relative h-[500vh]">
        <Item />
      </section>
    </>
  )
}

export default BusinessSection
