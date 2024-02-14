import * as React from "react"
import { SVGProps } from "react"

const LinkedInIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={45}
    height={45}
    fill="none"
    {...props}
  >
    <rect width={45} height={45} fill="#474747" rx={8} />
    <path
      fill="#FAFAFA"
      d="M15.809 34.615h-5.024V18.438h5.024v16.177Zm-2.515-18.384c-1.606 0-2.91-1.33-2.91-2.937a2.91 2.91 0 1 1 5.82 0c0 1.607-1.304 2.937-2.91 2.937ZM34.61 34.615h-5.013V26.74c0-1.877-.038-4.283-2.612-4.283-2.611 0-3.011 2.039-3.011 4.148v8.01h-5.019V18.438h4.818v2.207h.07c.671-1.271 2.31-2.613 4.754-2.613 5.084 0 6.018 3.348 6.018 7.697v8.886h-.005Z"
    />
  </svg>
)
export default LinkedInIcon
