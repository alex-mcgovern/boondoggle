
import type { SVGProps } from "react";

function SvgSn(props: SVGProps<SVGSVGElement>) {
  return <svg
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <g
            fillRule="evenodd"
            strokeWidth="1pt"
        >
            <path
                d="M0 0h170.7v512H0z"
                fill="#0b7226"
            />
            <path
                d="M170.7 0h170.6v512H170.7z"
                fill="#ff0"
            />
            <path
                d="M341.3 0H512v512H341.3z"
                fill="#bc0000"
            />
        </g>
        <path
            d="m197 351.7 22-71.7-60.4-46.5h74.5l24.2-76 22.1 76H356L295.6 280l22.1 74-60.3-46.5z"
            fill="#0b7226"
        />
    </svg>
}
export default SvgSn;
