
import type { SVGProps } from "react";

function SvgSd(props: SVGProps<SVGSVGElement>) {
  return <svg
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <defs>
            <clipPath id="sd_svg__a">
                <path
                    d="M0 0h496v496H0z"
                    fillOpacity={0.7}
                />
            </clipPath>
        </defs>
        <g
            clipPath="url(#sd_svg__a)"
            fillRule="evenodd"
            strokeWidth="1pt"
            transform="scale(1.0321)"
        >
            <path d="M0 330.7h992.1v165.4H0z" />
            <path
                d="M0 165.3h992.1v165.4H0z"
                fill="#fff"
            />
            <path
                d="M0 0h992.9v165.4H0z"
                fill="red"
            />
            <path
                d="M0 0v496l330.7-248L0 0z"
                fill="#009a00"
            />
        </g>
    </svg>
}
export default SvgSd;
