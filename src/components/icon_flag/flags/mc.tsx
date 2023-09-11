
import type { SVGProps } from "react";

function SvgMc(props: SVGProps<SVGSVGElement>) {
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
                d="M0 0h512v256H0z"
                fill="#f31830"
            />
            <path
                d="M0 256h512v256H0z"
                fill="#fff"
            />
        </g>
    </svg>
}
export default SvgMc;
