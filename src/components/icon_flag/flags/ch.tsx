
import type { SVGProps } from "react";

function SvgCh(props: SVGProps<SVGSVGElement>) {
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
                fill="red"
            />
            <g fill="#fff">
                <path d="M96 208h320v96H96z" />
                <path d="M208 96h96v320h-96z" />
            </g>
        </g>
    </svg>
}
export default SvgCh;
