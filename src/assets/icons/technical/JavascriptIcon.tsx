import * as React from "react"
import { SVGProps } from "react"

const JavascriptIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={55}
        height={55}
        fill="none"
        {...props}
    >
        <rect width={55} height={55} fill="#FCDE00" rx={4} />
        <path
            fill="#F7DF1E"
            fillRule="evenodd"
            d="M1.617 1.618h51.765v51.764H1.617V1.618Z"
            clipRule="evenodd"
        />
        <path
            fill="#323232"
            fillRule="evenodd"
            d="M24.911 42.382V25.56h4.53v16.823c0 6.471-9.06 10.353-14.236 2.589l3.882-2.589c1.942 3.883 5.824 2.589 5.824 0Zm19.412-11c-2.589-3.559-5.824-1.94-5.824.324 0 3.559 10.677 2.912 10.677 10.676-.324 9.06-12.942 8.736-16.824 1.942l3.883-2.265c2.911 4.53 8.088 2.912 8.088.323-.324-4.529-10.353-2.264-10.353-10.676-.324-6.47 9.382-10.03 13.912-2.588l-3.56 2.264Z"
            clipRule="evenodd"
        />
    </svg>
)
export default JavascriptIcon
