
import type { SVGProps } from "react";

function SvgMq(props: SVGProps<SVGSVGElement>) {
  return <svg
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M0 0h512v512H0z"
            fill="#231f1e"
        />
        <path
            d="M0 0h512v256H0z"
            fill="#00a650"
        />
        <path
            d="M256 256 0 512V0z"
            fill="#ef1923"
        />
    </svg>
}
export default SvgMq;
