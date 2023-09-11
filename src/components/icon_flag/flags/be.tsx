
import type { SVGProps } from "react";

function SvgBe(props: SVGProps<SVGSVGElement>) {
  return <svg
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <g
            fillRule="evenodd"
            strokeWidth="1pt"
        >
            <path d="M0 0h170.7v512H0z" />
            <path
                d="M170.7 0h170.6v512H170.7z"
                fill="#ffd90c"
            />
            <path
                d="M341.3 0H512v512H341.3z"
                fill="#f31830"
            />
        </g>
    </svg>
}
export default SvgBe;
