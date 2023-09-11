
import type { SVGProps } from "react";

function SvgGbSct(props: SVGProps<SVGSVGElement>) {
  return <svg
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M0 0h512v512H0z"
            fill="#0065bd"
        />
        <path
            d="m0 0 5 3M0 3l5-3"
            stroke="#fff"
            strokeWidth={0.6}
            transform="scale(102.4 170.66667)"
        />
    </svg>
}
export default SvgGbSct;
