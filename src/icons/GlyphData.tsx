import React from 'react'

function SvgGlyphData (props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" {...props}>
      <path d="M50 68c-9.95 0-20.38-1.7-25-4.93v8.74c.68 3.54 11.58 7.32 24.92 7.32s24.23-3.78 24.91-7.32v-8.66C70.2 66.32 59.88 68 50 68z" />
      <ellipse cx={50} cy={42.11} rx={1.51} ry={1.7} />
      <ellipse cx={50} cy={56.65} rx={1.61} ry={1.7} />
      <ellipse cx={50} cy={70.22} rx={1.61} ry={1.7} />
      <ellipse cx={50} cy={28.59} rx={24.35} ry={7.72} />
      <path d="M50 51.69c13.5 0 22.53-2.85 24.93-5.43L75 33s-.13-.93-.13-1.4a3.42 3.42 0 000-.45c-.74 4.06-11.61 7.28-24.91 7.28-12.57 0-23-2.87-24.7-6.61 0 .48-.12 1.18-.12 1.18v13.26c2.3 2.57 11.35 5.43 24.86 5.43z" />
      <path d="M50 53.63c-9.93 0-20.32-1.7-24.95-4.91v11.86c2.33 2.6 11.4 5.49 25 5.49 13.37 0 22.37-2.8 24.87-5.36l.05-12c-4.68 3.22-15.04 4.92-24.97 4.92z" />
    </svg>
  )
}

export default SvgGlyphData
