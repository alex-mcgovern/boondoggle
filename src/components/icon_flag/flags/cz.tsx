
import type { SVGProps } from "react";

function SvgCz(props: SVGProps<SVGSVGElement>) {
  return <svg
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M0 0h512v256H0z"
            fill="#fff"
        />
        <path
            d="M0 256h512v256H0z"
            fill="#d7141a"
        />
        <path
            d="M300 256 0 56v400z"
            fill="#11457e"
        />
    </svg>
}
export default SvgCz;
