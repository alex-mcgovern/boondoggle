
import type { SVGProps } from "react";

function SvgBd(props: SVGProps<SVGSVGElement>) {
  return <svg
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M0 0h512v512H0z"
            fill="#006a4e"
        />
        <circle
            cx={230}
            cy={256}
            fill="#f42a41"
            r={170.7}
        />
    </svg>
}
export default SvgBd;
