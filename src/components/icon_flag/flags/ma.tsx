
import type { SVGProps } from "react";

function SvgMa(props: SVGProps<SVGSVGElement>) {
  return <svg
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M512 0H0v512h512z"
            fill="#c1272d"
        />
        <path
            d="m256 191.4-38 116.8 99.4-72.2H194.6l99.3 72.2z"
            fill="none"
            stroke="#006233"
            strokeWidth={12.5}
        />
    </svg>
}
export default SvgMa;
