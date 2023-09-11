
import type { SVGProps } from "react";

function SvgSe(props: SVGProps<SVGSVGElement>) {
  return <svg
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M0 0h512v512H0z"
            fill="#005293"
        />
        <path
            d="M134 0v204.8H0v102.4h134V512h102.4V307.2H512V204.8H236.4V0H134z"
            fill="#fecb00"
        />
    </svg>
}
export default SvgSe;
