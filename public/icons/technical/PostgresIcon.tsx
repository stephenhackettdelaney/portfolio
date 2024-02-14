import * as React from "react"
import { SVGProps } from "react"

const PostgresIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={55}
        height={56}
        fill="none"
        {...props}
    >
        <path
            fill="#000"
            d="M53.88 33.364c-.325-.983-1.175-1.668-2.276-1.833-.518-.077-1.112-.044-1.815.1-1.226.253-2.134.35-2.798.368 2.504-4.227 4.54-9.048 5.712-13.586 1.895-7.338.883-10.68-.3-12.193C49.27 2.218 44.7.068 39.186.002c-2.94-.037-5.523.544-6.87.962A25.578 25.578 0 0 0 28.3.596c-2.651-.042-4.994.536-6.996 1.724a31.98 31.98 0 0 0-4.942-1.24C11.53.285 7.636.904 4.787 2.916 1.338 5.353-.261 9.587.035 15.5c.094 1.877 1.144 7.589 2.797 13.005.95 3.114 1.963 5.699 3.012 7.685 1.486 2.817 3.076 4.475 4.862 5.071 1.001.334 2.819.567 4.732-1.026.242.294.565.586.995.857a6.613 6.613 0 0 0 1.877.79c2.4.6 4.646.45 6.563-.39l.029.948.041 1.322c.114 2.83.307 5.03.877 6.568.031.085.073.214.118.35.284.871.76 2.33 1.97 3.473 1.253 1.182 2.77 1.545 4.158 1.545.696 0 1.36-.091 1.943-.216 2.078-.445 4.437-1.124 6.144-3.554 1.613-2.297 2.397-5.757 2.54-11.21l.05-.44.034-.289.38.033.099.007c2.115.096 4.703-.352 6.291-1.09 1.256-.583 5.279-2.707 4.331-5.574"
        />
        <path
            fill="#336791"
            d="M50.262 33.921c-6.291 1.298-6.723-.832-6.723-.832 6.642-9.856 9.419-22.366 7.022-25.428-6.537-8.353-17.853-4.402-18.042-4.3l-.06.011c-1.243-.258-2.634-.411-4.198-.437-2.847-.047-5.006.746-6.644 1.989 0 0-20.187-8.316-19.248 10.459.2 3.994 5.725 30.222 12.315 22.3 2.409-2.897 4.736-5.346 4.736-5.346 1.156.768 2.54 1.16 3.99 1.018l.113-.095c-.034.36-.018.712.046 1.128-1.698 1.897-1.2 2.23-4.593 2.928-3.434.708-1.417 1.967-.1 2.297 1.597.4 5.291.965 7.787-2.53l-.1.4c.666.532 1.133 3.465 1.055 6.124-.078 2.659-.131 4.484.393 5.91.524 1.426 1.047 4.634 5.509 3.677 3.728-.799 5.66-2.869 5.928-6.322.191-2.455.623-2.092.65-4.287l.346-1.04c.399-3.327.063-4.4 2.36-3.902l.558.049c1.69.077 3.903-.272 5.202-.875 2.796-1.298 4.454-3.464 1.697-2.895"
        />
        <path
            fill="#fff"
            d="M22.798 17.169c-.566-.079-1.08-.006-1.34.19a.489.489 0 0 0-.203.328c-.033.233.13.492.232.625.284.377.7.637 1.112.694.06.008.119.012.178.012.687 0 1.311-.534 1.366-.929.07-.494-.65-.824-1.345-.92Zm18.781.015c-.054-.387-.743-.498-1.397-.407-.654.092-1.287.386-1.234.774.042.303.588.818 1.233.818.054 0 .11-.004.165-.011.431-.06.747-.334.897-.491.229-.24.36-.508.337-.682m10.775 16.589c-.24-.726-1.012-.959-2.295-.694-3.809.786-5.173.241-5.62-.089 2.96-4.51 5.395-9.961 6.709-15.047.622-2.41.966-4.648.994-6.471.032-2.002-.31-3.473-1.013-4.371-2.835-3.623-6.995-5.566-12.032-5.619-3.462-.039-6.388.847-6.955 1.097a17.312 17.312 0 0 0-3.914-.503c-2.6-.042-4.847.58-6.707 1.848a29.95 29.95 0 0 0-5.45-1.428c-4.415-.711-7.923-.173-10.427 1.601-2.988 2.117-4.367 5.9-4.1 11.245.09 1.799 1.115 7.33 2.731 12.629 2.129 6.973 4.442 10.92 6.877 11.732.314.106.644.16.976.161.888 0 1.976-.4 3.11-1.762a112.066 112.066 0 0 1 4.285-4.85 6.9 6.9 0 0 0 3.084.83l.006.084c-.215.256-.392.48-.543.672-.745.945-.9 1.142-3.299 1.637-.682.14-2.494.514-2.52 1.784-.029 1.388 2.141 1.97 2.389 2.032a10.23 10.23 0 0 0 2.484.323c1.925 0 3.62-.633 4.974-1.858-.042 4.947.164 9.822.758 11.307.487 1.216 1.675 4.187 5.43 4.187.55 0 1.156-.064 1.823-.207 3.918-.84 5.62-2.571 6.277-6.389.352-2.04.957-6.912 1.24-9.525.6.187 1.373.273 2.208.273 1.74 0 3.75-.37 5.01-.955 1.416-.658 3.97-2.27 3.507-3.672l.003-.002Zm-9.33-17.659c-.013.772-.119 1.472-.232 2.203-.121.786-.246 1.6-.278 2.586-.03.96.09 1.96.205 2.924.235 1.95.475 3.958-.456 5.94a7.706 7.706 0 0 1-.412-.848c-.116-.28-.367-.731-.715-1.355-1.354-2.428-4.523-8.112-2.901-10.432.483-.69 1.71-1.4 4.789-1.018Zm-3.732-13.07c4.513.1 8.082 1.788 10.61 5.018 1.938 2.477-.197 13.75-6.376 23.473l-.187-.236-.078-.097c1.597-2.637 1.284-5.247 1.006-7.56-.114-.95-.222-1.847-.194-2.688.028-.894.146-1.659.26-2.4.14-.912.283-1.856.243-2.969a1.23 1.23 0 0 0 .026-.418c-.1-1.067-1.318-4.261-3.802-7.152-1.359-1.581-3.34-3.351-6.045-4.544a20.398 20.398 0 0 1 4.537-.427ZM14.04 37.106c-1.248 1.5-2.11 1.213-2.393 1.12-1.848-.617-3.99-4.52-5.88-10.71-1.634-5.356-2.59-10.74-2.665-12.25-.239-4.777.919-8.105 3.441-9.894 4.105-2.91 10.853-1.169 13.565-.285l-.118.114c-4.45 4.494-4.344 12.172-4.333 12.64.005.264.016.528.035.791.077 1.291.22 3.695-.161 6.417-.354 2.53.426 5.005 2.138 6.792.178.185.363.359.554.522a114.198 114.198 0 0 0-4.183 4.743Zm4.755-6.344c-1.38-1.44-2.008-3.444-1.72-5.497.402-2.876.253-5.38.174-6.725l-.027-.483c.65-.576 3.662-2.19 5.81-1.698.98.225 1.578.892 1.826 2.04 1.285 5.945.17 8.423-.726 10.414-.184.41-.36.797-.508 1.199l-.116.31c-.292.783-.564 1.512-.733 2.204-1.467-.004-2.894-.631-3.98-1.764Zm.226 8.017a3.464 3.464 0 0 1-1.04-.447c.188-.089.524-.21 1.107-.33 2.821-.58 3.257-.99 4.209-2.198.218-.277.465-.591.807-.973.51-.572.744-.475 1.167-.3.343.142.677.572.813 1.045.064.224.135.648-.1.978-1.988 2.782-4.884 2.747-6.964 2.226Zm14.764 13.74c-3.451.74-4.674-1.021-5.478-3.035-.52-1.3-.775-7.16-.594-13.633a.788.788 0 0 0-.034-.248 3.215 3.215 0 0 0-.096-.457c-.27-.942-.927-1.73-1.714-2.056-.314-.13-.888-.368-1.579-.19.148-.607.403-1.292.68-2.034l.116-.312c.13-.352.295-.717.469-1.102.937-2.083 2.222-4.937.828-11.383-.522-2.415-2.265-3.593-4.908-3.32-1.585.164-3.034.804-3.757 1.17-.155.079-.298.154-.43.229.202-2.432.964-6.979 3.816-9.855 1.795-1.811 4.187-2.706 7.1-2.658 5.741.094 9.423 3.04 11.5 5.495 1.79 2.116 2.76 4.247 3.147 5.396-2.91-.295-4.889.279-5.892 1.713-2.183 3.12 1.194 9.175 2.817 12.085.297.533.554.994.635 1.19.528 1.28 1.213 2.135 1.712 2.76.153.19.301.376.415.538-.882.254-2.464.841-2.32 3.775-.116 1.473-.944 8.366-1.364 10.801-.555 3.217-1.738 4.416-5.068 5.13l-.001.001Zm14.407-16.486c-.901.418-2.41.732-3.842.8-1.583.074-2.388-.178-2.578-.333-.089-1.828.592-2.02 1.312-2.221.114-.033.224-.063.33-.1.07.056.143.11.218.16 1.272.839 3.54.93 6.743.268l.035-.007c-.432.404-1.17.946-2.218 1.433Z"
        />
    </svg>
)
export default PostgresIcon
