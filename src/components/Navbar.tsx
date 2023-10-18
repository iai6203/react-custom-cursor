/** @jsxImportSource @emotion/react */
import React from 'react'
import { Link } from 'react-router-dom'
import tw from 'twin.macro'

import { useCustomCursorStore } from '@hooks/useCustomCursorStore'

// Types

type ILink = {
  label: string
  href: string
}

// Icons

const LogoSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="144"
      height="20"
      viewBox="0 0 144 20"
    >
      <defs>
        <clipPath id="clip-path">
          <path
            d="M0,.875v19.51H13.093V16.11H4.734V12.685h7.141V8.411H4.734V5.149h8.359V.875Z"
            transform="translate(0 -0.875)"
            fill="#0d0d0d"
          />
        </clipPath>
        <clipPath id="clip-path-2">
          <path
            d="M88.343.875V13.429a2.945,2.945,0,0,1-.7,2.109,2.489,2.489,0,0,1-1.893.741,2.374,2.374,0,0,1-1.88-.754,3.068,3.068,0,0,1-.663-2.1V.875H78.469V13.538a6.654,6.654,0,0,0,2.137,5.126,7.306,7.306,0,0,0,5.14,1.89,7.419,7.419,0,0,0,5.207-1.946,6.558,6.558,0,0,0,2.124-5.07V.875Z"
            transform="translate(-78.469 -0.875)"
            fill="#0d0d0d"
          />
        </clipPath>
        <clipPath id="clip-path-3">
          <path
            d="M171.718,0a7.6,7.6,0,0,0-2.962.561,7.306,7.306,0,0,0-2.394,1.631A6.5,6.5,0,0,0,164.6,5.729a29.216,29.216,0,0,0-.19,4.194,27.283,27.283,0,0,0,.218,4.2,6.465,6.465,0,0,0,1.731,3.537,7.817,7.817,0,0,0,10.118.63,7.53,7.53,0,0,0,2.542-4.8h-4.815a3.315,3.315,0,0,1-.757,1.452,2.288,2.288,0,0,1-1.7.631,2.186,2.186,0,0,1-1.865-.823,3.412,3.412,0,0,1-.57-1.439,22.936,22.936,0,0,1-.162-3.386,20.4,20.4,0,0,1,.189-3.384,3.649,3.649,0,0,1,.513-1.413,1.974,1.974,0,0,1,.785-.643,2.707,2.707,0,0,1,1.109-.206,2.318,2.318,0,0,1,1.731.632,3.279,3.279,0,0,1,.73,1.452h4.815a7.53,7.53,0,0,0-2.542-4.8A7.3,7.3,0,0,0,171.718,0Z"
            transform="translate(-164.413)"
            fill="#0d0d0d"
          />
        </clipPath>
        <clipPath id="clip-path-4">
          <path
            d="M247.968.875v19.51H260.79V16.11H252.7V.875Z"
            transform="translate(-247.968 -0.875)"
            fill="#0d0d0d"
          />
        </clipPath>
        <clipPath id="clip-path-5">
          <rect width="4.734" height="19.51" fill="#0d0d0d" />
        </clipPath>
        <clipPath id="clip-path-6">
          <path
            d="M367.721,5.149H369.8a3.024,3.024,0,0,1,1.394.275,2.252,2.252,0,0,1,.852.766,3.07,3.07,0,0,1,.432,1.274,28.649,28.649,0,0,1,.109,3.165q0,2.412-.095,3.167a2.785,2.785,0,0,1-.433,1.245,2.421,2.421,0,0,1-.879.781,2.934,2.934,0,0,1-1.381.287h-2.083ZM362.987.875v19.51h7.142a8.611,8.611,0,0,0,2.9-.478,6,6,0,0,0,2.3-1.44,6.411,6.411,0,0,0,1.733-3.015,15.568,15.568,0,0,0,.269-3.4V9.233a12.393,12.393,0,0,0-.5-4.124,6.656,6.656,0,0,0-1.489-2.3,6,6,0,0,0-2.3-1.466,8.631,8.631,0,0,0-2.908-.467Z"
            transform="translate(-362.987 -0.875)"
            fill="#0d0d0d"
          />
        </clipPath>
        <clipPath id="clip-path-7">
          <rect
            width="144"
            height="20"
            transform="translate(-0.057 -0.077)"
            fill="#0d0d0d"
          />
        </clipPath>
      </defs>
      <g transform="translate(0.057 0.077)">
        <g transform="translate(0 0.168)">
          <g clipPath="url(#clip-path)">
            <rect
              width="13.093"
              height="19.51"
              transform="translate(0 0)"
              fill="#0d0d0d"
            />
          </g>
        </g>
        <g transform="translate(15.041 0.168)">
          <g clipPath="url(#clip-path-2)">
            <rect
              width="14.609"
              height="19.679"
              transform="translate(0 0)"
              fill="#0d0d0d"
            />
          </g>
        </g>
        <g transform="translate(31.324)">
          <g clipPath="url(#clip-path-3)">
            <rect
              width="14.608"
              height="19.846"
              transform="translate(0 0)"
              fill="#0d0d0d"
            />
          </g>
        </g>
        <g transform="translate(47.247 0.168)">
          <g clipPath="url(#clip-path-4)">
            <rect
              width="12.822"
              height="19.51"
              transform="translate(0 0)"
              fill="#0d0d0d"
            />
          </g>
        </g>
        <g transform="translate(61.683 0.168)">
          <g clipPath="url(#clip-path-5)">
            <rect
              width="4.734"
              height="19.51"
              transform="translate(0)"
              fill="#0d0d0d"
            />
          </g>
        </g>
        <g transform="translate(69.157 0.168)">
          <g clipPath="url(#clip-path-6)">
            <rect
              width="14.337"
              height="19.51"
              transform="translate(0 0)"
              fill="#0d0d0d"
            />
          </g>
        </g>
        <g transform="translate(0 0)">
          <g clipPath="url(#clip-path-7)">
            <path
              d="M461.363,10.444a4.808,4.808,0,0,0-1.4-.863,9.453,9.453,0,0,0-2.1-.508l-2.1-.327a7.3,7.3,0,0,1-1.453-.425,4.35,4.35,0,0,1-1.13-.646,2.846,2.846,0,0,1-.861-2.247,3.4,3.4,0,0,1,1.063-2.644,4.234,4.234,0,0,1,2.972-.973,6.778,6.778,0,0,1,2.516.424,6.355,6.355,0,0,1,1.952,1.247l1.317-1.343a8.117,8.117,0,0,0-2.57-1.644A8.865,8.865,0,0,0,456.439,0a6.4,6.4,0,0,0-4.48,1.507,5.153,5.153,0,0,0-1.655,4,4.67,4.67,0,0,0,1.453,3.646,6.94,6.94,0,0,0,3.526,1.48l2.233.357a8.9,8.9,0,0,1,1.548.357,2.957,2.957,0,0,1,.955.575,3.117,3.117,0,0,1,.914,2.44,3.2,3.2,0,0,1-1.211,2.659,5.19,5.19,0,0,1-3.311.959,7.671,7.671,0,0,1-2.864-.48,7,7,0,0,1-2.355-1.658l-1.4,1.425a8.313,8.313,0,0,0,2.878,2,10.229,10.229,0,0,0,3.686.576,7.3,7.3,0,0,0,4.829-1.494,4.993,4.993,0,0,0,1.791-4.043,4.845,4.845,0,0,0-1.615-3.866"
              transform="translate(-364.046 0)"
              fill="#0d0d0d"
            />
            <path
              d="M538.778,2.029a6.926,6.926,0,0,0-9.794,0,6.5,6.5,0,0,0-1.722,4.085q-.08.9-.08,3.81A31.84,31.84,0,0,0,527.464,15a5.354,5.354,0,0,0,1.52,2.824,6.926,6.926,0,0,0,9.794,0,6.5,6.5,0,0,0,1.722-4.085q.081-.9.08-3.81a31.415,31.415,0,0,0-.242-4.824,5.71,5.71,0,0,0-1.56-3.071m-.471,12.377a4.2,4.2,0,0,1-1.116,2.18,4.619,4.619,0,0,1-6.618,0,4.066,4.066,0,0,1-1.118-2.18,29.579,29.579,0,0,1-.228-4.482,29.269,29.269,0,0,1,.228-4.483,4.2,4.2,0,0,1,1.118-2.179,4.616,4.616,0,0,1,6.618,0,4.064,4.064,0,0,1,1.116,2.179,29.407,29.407,0,0,1,.229,4.483,29.067,29.067,0,0,1-.229,4.482"
              transform="translate(-426.68 -0.001)"
              fill="#0d0d0d"
            />
            <path
              d="M612.334,20.275h2.045V11.667h8.395V9.8h-8.395V2.594h9.848V.729H612.334Z"
              transform="translate(-495.6 -0.592)"
              fill="#0d0d0d"
            />
            <path
              d="M685.89.729V2.593h5.542V20.274h2.047V2.593h5.542V.729Z"
              transform="translate(-555.133 -0.592)"
              fill="#0d0d0d"
            />
          </g>
        </g>
      </g>
    </svg>
  )
}
const HamburgerSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="18"
      viewBox="0 0 25 18"
    >
      <g transform="translate(0)">
        <path
          d="M148.74,19.057A1.265,1.265,0,0,0,147.5,18H125.056a1.27,1.27,0,0,0-.182,2.529.663.663,0,0,0,.182.03H147.5a1.188,1.188,0,0,0,.372-.072,1.252,1.252,0,0,0,.832-.834l.006-.018a1.184,1.184,0,0,0,.065-.355.824.824,0,0,0-.04-.221"
          transform="translate(-123.78 -2.557)"
          fill="#222"
        />
        <path
          d="M148.74,12.065a1.265,1.265,0,0,0-1.236-1.058H125.056a1.27,1.27,0,0,0-.182,2.529.664.664,0,0,0,.182.03H147.5a1.188,1.188,0,0,0,.372-.072,1.252,1.252,0,0,0,.832-.834l.006-.018a1.184,1.184,0,0,0,.065-.355.824.824,0,0,0-.04-.221"
          transform="translate(-123.78 -3.286)"
          fill="#222"
        />
        <path
          d="M148.74,5.073A1.265,1.265,0,0,0,147.5,4.015H125.056a1.27,1.27,0,0,0-.182,2.529.664.664,0,0,0,.182.03H147.5a1.188,1.188,0,0,0,.372-.072,1.252,1.252,0,0,0,.832-.834l.006-.018a1.184,1.184,0,0,0,.065-.355.824.824,0,0,0-.04-.221"
          transform="translate(-123.78 -4.015)"
          fill="#222"
        />
      </g>
    </svg>
  )
}

// Components

const LinkItem = ({ label, href }: ILink) => {
  const setCustomCursorStatus = useCustomCursorStore((state) => state.setStatus)

  return (
    <li>
      <Link
        to={href}
        className="text-inherit transition hover:text-black"
        onMouseEnter={() => setCustomCursorStatus('highlight')}
        onMouseLeave={() => setCustomCursorStatus('navbar')}
      >
        {label}
      </Link>
    </li>
  )
}
const Links = () => {
  const links = React.useRef<ILink[]>([
    { label: 'About', href: '#' },
    { label: 'Business', href: '#' },
    { label: 'Product', href: '#' },
    { label: 'Research', href: '#' },
    { label: 'Community', href: '#' },
  ])

  return (
    <>
      <ul
        css={[
          tw`hidden gap-x-[100px] text-[18px] font-bold text-black hover:text-black/60`,
          tw`desktop:(flex)`,
        ]}
      >
        {links.current.map((props, i) => (
          <LinkItem key={i} {...props} />
        ))}
      </ul>
    </>
  )
}

//

const Navbar = () => {
  const setCustomCursorStatus = useCustomCursorStore((state) => state.setStatus)

  return (
    <header
      css={[
        tw`fixed left-0 right-0 top-0 z-40 mx-auto mt-[30px] flex max-w-[374px] items-center justify-between rounded-[10px] bg-white px-[30px] py-[25px]`,
        tw`pad:(max-w-[690px] px-[60px])`,
        tw`desktop:(max-w-[1287px])`,
        tw`wide:(px-[60px] max-w-[1800px])`,
      ]}
      onMouseEnter={() => setCustomCursorStatus('navbar')}
      onMouseLeave={() => setCustomCursorStatus('default')}
    >
      <Link to="/">
        <LogoSVG />
      </Link>

      <Links />

      <button>
        <HamburgerSVG />
      </button>
    </header>
  )
}

export default Navbar
