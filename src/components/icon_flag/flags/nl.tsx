
import type { SVGProps } from "react";

function SvgNl(props: SVGProps<SVGSVGElement>) {
  return <svg
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M0 0h512v512H0z"
            fill="#21468b"
        />
        <path
            d="M0 0h512v341.3H0z"
            fill="#fff"
        />
        <path
            d="M0 0h512v170.7H0z"
            fill="#ae1c28"
        />
    </svg>
}
export default SvgNl;
