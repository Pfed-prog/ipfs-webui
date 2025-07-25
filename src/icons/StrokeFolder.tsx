import React from 'react'

function SvgStrokeFolder (props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" {...props}>
      <path d="M72.53 32.38H55.08a3.76 3.76 0 01-3.44-2.25l-2.28-4.83a6 6 0 00-5.57-3.8H31.47c-6.37 0-11.56 5.5-11.56 12.18v32.64c0 6.68 5.19 12.18 11.56 12.18h41.06c6.37 0 11.56-5.46 11.56-12.18V44.56c0-6.72-5.19-12.18-11.56-12.18zM31.47 24.1h12.32A3.45 3.45 0 0147 26.35l2.34 4.95a6.33 6.33 0 005.74 3.7h17.45a9.22 9.22 0 018.9 8.5H22.51v-9.8c0-5.3 4.02-9.6 8.96-9.6zm41.06 51.8H31.47c-4.94 0-9-4.3-9-9.58V45h59v21.32c.02 5.28-4 9.58-8.94 9.58z" />
    </svg>
  )
}

export default SvgStrokeFolder
