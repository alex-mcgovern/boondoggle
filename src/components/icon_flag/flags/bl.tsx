
import type { SVGProps } from "react";

function SvgBl(props: SVGProps<SVGSVGElement>) {
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
                d="M0 0h512v512H0z"
                fill="#fff"
            />
            <path
                d="M0 0h170.7v512H0z"
                fill="#00267f"
            />
            <path
                d="M341.3 0H512v512H341.3z"
                fill="#f31830"
            />
        </g>
    </svg>
}
export default SvgBl;
