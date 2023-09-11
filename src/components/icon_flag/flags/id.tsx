
import type { SVGProps } from "react";

function SvgId(props: SVGProps<SVGSVGElement>) {
  return <svg
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M0 0h512v256H0Z"
            fill="#e70011"
        />
        <path
            d="M0 256h512v256H0Z"
            fill="#fff"
        />
    </svg>
}
export default SvgId;
