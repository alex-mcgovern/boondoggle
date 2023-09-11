
import type { SVGProps } from "react";

function SvgLu(props: SVGProps<SVGSVGElement>) {
  return <svg
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M0 256h512v256H0z"
            fill="#00a1de"
        />
        <path
            d="M0 0h512v256H0z"
            fill="#ed2939"
        />
        <path
            d="M0 170.7h512v170.6H0z"
            fill="#fff"
        />
    </svg>
}
export default SvgLu;
