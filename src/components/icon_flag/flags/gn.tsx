
import type { SVGProps } from "react";

function SvgGn(props: SVGProps<SVGSVGElement>) {
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
                fill="red"
            />
            <path
                d="M170.7 0h170.6v512H170.7z"
                fill="#ff0"
            />
            <path
                d="M341.3 0H512v512H341.3z"
                fill="#090"
            />
        </g>
    </svg>
}
export default SvgGn;
