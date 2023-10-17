import clsx from "clsx";

import { utilCss } from "../../../styles/utils/util_css.css";
import { Box } from "../../box/Box";
import { flagStyles } from "../styles.css";

import type { UtilCssArgs } from "../../../styles/utils/util_css.css";

export function FlagEt({
	height = "space_8",
	width = "space_8",
	...rest
}: UtilCssArgs) {
	return (
		<Box
			as="svg"
			className={clsx(flagStyles, utilCss({ height, width, ...rest }))}
			viewBox="0 0 512 512"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
		>
			<defs>
				<clipPath id="et_svg__a">
					<path d="M229.3 6.3h489.3v489.3H229.3z" fillOpacity={0.7} />
				</clipPath>
			</defs>
			<g
				clipPath="url(#et_svg__a)"
				fillRule="evenodd"
				strokeWidth="1pt"
				transform="translate(-240 -6.6) scale(1.046)"
			>
				<path d="M2 9.7h991.8v475.9H1.9z" fill="#ffc621" />
				<path d="M0 333.6h993.2v162H0z" fill="#ef2118" />
				<path d="M2 6.3h991.8v172H2z" fill="#298c08" />
				<circle
					cx={534.2}
					cy={353}
					fill="#006bc6"
					r={199.7}
					transform="matrix(.515 0 0 .515 204.7 77)"
				/>
				<path
					d="m434 186.2-6 4.3 22.4 31.6 6-3.9-22.3-32zm28.2 74.5-9.2-6.5 3.8-12-46 .6-13.3-10.2 62.7-.7 11.7-35.3L478 211l-16 49.8zm73.1-67.6-6-4.5-23.3 31 5.5 4.5 23.8-31zm-62.5 49.3 3.3-10.7h12.7L474.3 188l5.7-15.8 19.6 59.7 37.2.4-11.7 10.3-52.3-.2zm86.6 49 2.5-7.2-36.6-12.6-2.6 6.5 36.7 13.2zm-66-44.4 11.2-.2 4 12.1 37-27.2 16.7.6-50.7 37 11 35.5-13.4-8-15.9-49.8zm-19 97.5 7.6.1.3-38.7-7-.4-.8 39zm21-76.8 3.7 10.6L489 286l37.6 26.5 4.8 16-51.2-36.2-30.1 21.7 3.3-15.2 42.1-31zm-98.7 12.4 2.3 7.2 36.9-11.7-1.8-6.8-37.4 11.3zm79.6-3.8-9 6.8-10.4-7.4-13.5 44-13.8 9.5 18.7-60-30-21.8 15.5-1.6 42.5 30.5z"
					fill="#ffc621"
				/>
			</g>
		</Box>
	);
}
