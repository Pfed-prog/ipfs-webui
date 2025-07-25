import React from 'react'

function SvgStrokeChart (props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" {...props}>
      <path d="M50 16.39a33.68 33.68 0 00-33 27.07 34 34 0 00-.61 6.54A33.61 33.61 0 1050 16.39zm-28.83 23.3a31 31 0 012.88-5.47v7.18l-3.11-1.06c.06-.21.15-.43.23-.65zm4.88-8.16A31.47 31.47 0 0129.5 28v15.3l-3.45-1.18zm5.45-5.18A32.66 32.66 0 0135.17 24v21.19l-3.67-1.25zM37.17 23A31.54 31.54 0 0141 21.56v25.61l-3.8-1.3zm5.8.42l5.68 26.38L43 47.85zm7 57.2A30.64 30.64 0 0120 44c.12-.6.26-1.19.41-1.77l31 10.55-7.14-32.85a31 31 0 015.73-.54 30.61 30.61 0 010 61.22z" />
    </svg>
  )
}

export default SvgStrokeChart
