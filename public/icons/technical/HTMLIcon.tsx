import * as React from "react"
import { SVGProps } from "react"

const HTMLIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={50}
        height={64}
        fill="none"
        {...props}
    >
        <path
            fill="#009688"
            fillRule="evenodd"
            d="M50 20 30 0H5a4.99 4.99 0 0 0-5 5v54a4.99 4.99 0 0 0 5 5h40a4.99 4.99 0 0 0 5-5V20Z"
            clipRule="evenodd"
        />
        <path
            fill="#4DB6AC"
            fillRule="evenodd"
            d="m30 0 20 20H35a4.99 4.99 0 0 1-5-5V0Z"
            clipRule="evenodd"
        />
        <path
            fill="#fff"
            fillRule="evenodd"
            d="m19.434 33.918-6.68 2.402 6.68 2.355v3.281L9.344 37.68v-2.766l10.09-4.277v3.281ZM29.57 26.5 23.29 45.027h-2.52L27.05 26.5h2.52Zm1.722 12.199 6.809-2.414-6.81-2.379v-3.258L41.5 34.925v2.754l-10.207 4.289v-3.269Z"
            clipRule="evenodd"
        />
    </svg>
)
export default HTMLIcon
