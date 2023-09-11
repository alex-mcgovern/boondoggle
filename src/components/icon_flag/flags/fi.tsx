
import type { SVGProps } from "react";

function SvgFi(props: SVGProps<SVGSVGElement>) {
  return <svg
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M0 0h512v512H0z"
            fill="#fff"
        />
        <path
            d="M0 186.2h512v139.6H0z"
            fill="#002f6c"
        />
        <path
            d="M123.2 0h139.6v512H123.1z"
            fill="#002f6c"
        />
    </svg>
}
export default SvgFi;
