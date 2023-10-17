import clsx from "clsx";

import { utilCss } from "../../../styles/utils/util_css.css";
import { Box } from "../../box/Box";
import { flagStyles } from "../styles.css";

import type { UtilCssArgs } from "../../../styles/utils/util_css.css";

export function FlagFm({
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
				<clipPath id="fm_svg__a">
					<path d="M244.2 0h496v496h-496z" fillOpacity={0.7} />
				</clipPath>
			</defs>
			<g
				clipPath="url(#fm_svg__a)"
				fillRule="evenodd"
				strokeWidth="1pt"
				transform="translate(-252) scale(1.032)"
			>
				<path d="M0 0h992.1v496H0z" fill="#6797d6" />
				<path
					d="M507.9 84.5h38.8l-31.5 21.4 12 34.8-31.3-21.5-31.5 21.5 12-34.8L445 84.4h39l12-34.7m12 363h38.8l-31.5-21.5 12-34.8-31.3 21.5-31.5-21.5 12 34.8-31.4 21.5H484l12 34.7M346 230.1l37.2-11.4-23.9 29.8 21.7 29.7-36.3-11.4-23.8 29.8 1.4-36.8-36.4-11.4 37.2-11.3 1.3-36.8m321 29.8-37.1-11.4 23.8 29.7-21.7 29.8 36.4-11.4 23.7 29.8-1.3-36.8 36.4-11.4-37.2-11.3-1.3-36.8"
					fill="#fff"
				/>
			</g>
		</Box>
	);
}
