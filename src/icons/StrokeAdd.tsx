import React from 'react'

function SvgStrokeAdd (props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" {...props}>
      <path d="M50 22.6c7.3 0 14.2 2.8 19.4 8 5.2 5.2 8 12 8 19.4 0 7.3-2.9 14.2-8 19.3-5.2 5.2-12 8-19.4 8s-14.2-2.8-19.4-8c-10.7-10.7-10.7-28 0-38.7 5.2-5.1 12.1-8 19.4-8m0-2.5c-7.6 0-15.3 2.9-21.1 8.8-11.7 11.7-11.7 30.6 0 42.3C34.7 77 42.4 80 50 80s15.3-2.9 21.1-8.8c11.7-11.7 11.7-30.6 0-42.2-5.8-6-13.5-8.9-21.1-8.9z" />
      <path d="M53.5 67.2h-7V53.5H32.8v-7h13.7V32.8h7v13.7h13.7v7H53.5v13.7zM48 65.7h4V52h13.7v-4H52V34.3h-4V48H34.3v4H48v13.7z" />
    </svg>
  )
}

export default SvgStrokeAdd
