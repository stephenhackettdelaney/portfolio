import * as React from "react"
import { SVGProps } from "react"

const SleepingIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={25}
        height={15}
        fill="none"
        {...props}
    >
        <path
            fill="currentColor"
            d="M6.875 7.5A3.129 3.129 0 0 0 10 4.375 3.129 3.129 0 0 0 6.875 1.25 3.129 3.129 0 0 0 3.75 4.375 3.129 3.129 0 0 0 6.875 7.5Zm13.75-5h-8.75a.625.625 0 0 0-.625.625V8.75H2.5V.625A.625.625 0 0 0 1.875 0H.625A.625.625 0 0 0 0 .625v13.75c0 .345.28.625.625.625h1.25c.345 0 .625-.28.625-.625V12.5h20v1.875c0 .345.28.625.625.625h1.25c.345 0 .625-.28.625-.625v-7.5A4.375 4.375 0 0 0 20.625 2.5Z"
        />
    </svg>
)
export default SleepingIcon
