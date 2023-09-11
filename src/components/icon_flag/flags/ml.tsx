
import type { SVGProps } from "react";

function SvgMl(props: SVGProps<SVGSVGElement>) {
  return <svg
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <g fillRule="evenodd">
            <path
                d="M340.6 0H512v512H340.6z"
                fill="red"
            />
            <path
                d="M0 0h170.3v512H0z"
                fill="#009a00"
            />
            <path
                d="M170.3 0h171.2v512H170.3z"
                fill="#ff0"
            />
        </g>
    </svg>
}
export default SvgMl;
