import React from 'react'

function SvgStrokeMarker (props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" {...props}>
      <path d="M53 31.27a8.93 8.93 0 108.93 8.93A8.95 8.95 0 0053 31.27zm0 16.36a7.43 7.43 0 117.43-7.43A7.43 7.43 0 0153 47.63z" />
      <path d="M70.72 21.37c-.45-.45-1-.91-1.58-1.43l-.14-.11c-.5-.41-1-.82-1.68-1.26l-.16-.11-.32-.23c-.18-.12-.37-.23-.56-.34l-.18-.11A26.61 26.61 0 0052 13.46a5.58 5.58 0 00-.65 0 27 27 0 00-26.14 26.92c0 15.24 24.86 43.67 25.91 44.88l1.14 1.28 1.12-1.29c1-1.2 25.41-29.42 25.41-44.73a26.59 26.59 0 00-8.07-19.15zM52.24 82c-4.9-5.8-24-29.2-24-41.57a24 24 0 0123.18-23.94v-1.25l.09 1.24h.48a23.65 23.65 0 0112.55 3.88l.22.13.43.26.21.15.22.16c.56.39 1.05.75 1.5 1.12l.11.1c.53.44 1 .85 1.37 1.25a23.59 23.59 0 017.18 17C75.79 52.94 57.07 76.17 52.24 82z" />
    </svg>
  )
}

export default SvgStrokeMarker
