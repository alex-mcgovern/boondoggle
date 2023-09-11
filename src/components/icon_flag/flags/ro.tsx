
import type { SVGProps } from "react";

function SvgRo(props: SVGProps<SVGSVGElement>) {
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
                fill="#00319c"
            />
            <path
                d="M170.7 0h170.6v512H170.7z"
                fill="#ffde00"
            />
            <path
                d="M341.3 0H512v512H341.3z"
                fill="#de2110"
            />
        </g>
    </svg>
}
export default SvgRo;
