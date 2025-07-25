import React from 'react'

function SvgGlyphPen (props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" {...props}>
      <path d="M25.9 64.8l11.9 11.9 43.4-43.3-7-7 1.8-1.8 7 7 .4-.4c3.2-3.2 3.3-8.4.1-11.6l-.4-.4c-2.2-2.2-5.5-2.9-8.4-1.9-2.2-1.7-4.9-1.8-6.6-.2l-23 23c-1.5 1.5-1.5 3.8-.3 5.8L25.9 64.8zm21.4-22.6l23-23c.2-.2.5-.3.8-.3.8.1 1.6.5 2.2 1.1 1.1 1.1 1.3 2.5.8 3l-23 23c-.5.5-2 .3-3-.8s-1.3-2.5-.8-3zM24.2 66.6c-.1.1-.2.3-.2.4l-5.8 15c-.3.8.1 1.6.9 1.9.2.1.3.1.5.1h.4l15.7-5.3c.2 0 .3-.1.4-.2L24.2 66.6z" />
    </svg>
  )
}

export default SvgGlyphPen
