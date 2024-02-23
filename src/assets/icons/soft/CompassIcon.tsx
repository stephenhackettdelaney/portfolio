import * as React from "react"
import { SVGProps } from "react"

const CompassIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={35}
    height={35}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M17.5 35C7.835 35 0 27.165 0 17.5S7.835 0 17.5 0 35 7.835 35 17.5 27.165 35 17.5 35Zm0-3.5c7.732 0 14-6.268 14-14s-6.268-14-14-14-14 6.268-14 14 6.268 14 14 14Zm6.125-20.125-3.5 8.75-8.75 3.5 3.5-8.75 8.75-3.5Z"
    />
  </svg>
)
export default CompassIcon
