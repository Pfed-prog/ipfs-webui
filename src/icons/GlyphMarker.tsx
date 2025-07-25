import React from 'react'

function SvgGlyphMarker (props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" {...props}>
      <path d="M69.69 20.57c-.51-.51-1.06-1-1.62-1.47l-.16-.1c-.56-.46-1.15-.9-1.76-1.32l-.5-.35c-.25-.17-.52-.32-.79-.48A28.27 28.27 0 0050 12.23h-.69a28.33 28.33 0 00-27.52 28.36c0 13.54 19.06 37.68 26 46a3.21 3.21 0 005 0c6.82-8.32 25.46-32.25 25.46-45.84a28.13 28.13 0 00-8.56-20.18zM51.07 49.51a9.12 9.12 0 119.13-9.12 9.12 9.12 0 01-9.13 9.12z" />
    </svg>
  )
}

export default SvgGlyphMarker
