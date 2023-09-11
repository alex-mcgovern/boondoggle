
import type { SVGProps } from "react";

function SvgPl(props: SVGProps<SVGSVGElement>) {
  return <svg
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <g fillRule="evenodd">
            <path
                d="M512 512H0V0h512z"
                fill="#fff"
            />
            <path
                d="M512 512H0V256h512z"
                fill="#dc143c"
            />
        </g>
    </svg>
}
export default SvgPl;
