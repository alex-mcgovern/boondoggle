
import type { SVGProps } from "react";

function SvgDe(props: SVGProps<SVGSVGElement>) {
  return <svg
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M0 341.3h512V512H0z"
            fill="#ffce00"
        />
        <path d="M0 0h512v170.7H0z" />
        <path
            d="M0 170.7h512v170.6H0z"
            fill="#d00"
        />
    </svg>
}
export default SvgDe;
