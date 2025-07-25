import React from 'react'

function SvgStrokePencil (props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" {...props}>
      <path d="M82.89 25.64l-6.53-6.53a7.79 7.79 0 00-11 .35L23.72 61.1l-4.6 17.19a3.8 3.8 0 001 3.61 3.74 3.74 0 002.64 1.1 3.87 3.87 0 00.95-.12l17.19-4.6 41.64-41.64a7.79 7.79 0 00.35-11zM58 31l13 13-2.28 2.28-12.98-12.96zM26 64.21L37.79 76l-11.16 3L23 75.23zM23 80a.8.8 0 01-.77-.19A.75.75 0 0122 79l.41-1.54 2 2.09zm16.78-4.8L26.83 62.23l27.49-27.49 12.94 12.94zm40.64-40.68l-8 8-12.99-12.89 8.05-8a4.8 4.8 0 016.76-.35l6.53 6.53a4.8 4.8 0 01-.35 6.71z" />
    </svg>
  )
}

export default SvgStrokePencil
