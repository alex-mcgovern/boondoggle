
import type { SVGProps } from "react";

function SvgJp(props: SVGProps<SVGSVGElement>) {
  return <svg
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <defs>
            <clipPath id="jp_svg__a">
                <path
                    d="M177.2 0h708.6v708.7H177.2z"
                    fillOpacity={0.7}
                />
            </clipPath>
        </defs>
        <g
            clipPath="url(#jp_svg__a)"
            fillRule="evenodd"
            strokeWidth="1pt"
            transform="translate(-128) scale(.72249)"
        >
            <path
                d="M0 0h1063v708.7H0z"
                fill="#fff"
            />
            <circle
                cx={523.1}
                cy={344.1}
                fill="#bc002d"
                r={194.9}
                transform="translate(-59.7 -34.5) scale(1.1302)"
            />
        </g>
    </svg>
}
export default SvgJp;
