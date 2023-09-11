
import type { SVGProps } from "react";

function SvgPe(props: SVGProps<SVGSVGElement>) {
  return <svg
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M0 0h512v512H0z"
            fill="#D91023"
        />
        <path
            d="M170.7 0h170.6v512H170.7z"
            fill="#fff"
        />
    </svg>
}
export default SvgPe;
