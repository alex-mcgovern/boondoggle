import clsx from "clsx";

import { utilCss } from "../../../styles/utils/util_css.css";
import { Box } from "../../box";
import { flagStyles } from "../styles.css";

import type { UtilCssArgs } from "../../../styles/utils/util_css.css";

export function FlagTg({
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
				<clipPath id="tg_svg__a">
					<path d="M0-.2h496.3V496H0z" fillOpacity={0.7} />
				</clipPath>
			</defs>
			<g
				clipPath="url(#tg_svg__a)"
				fillRule="evenodd"
				transform="translate(0 .3) scale(1.0316)"
			>
				<path d="M0-.2h744V496H0z" fill="#ffe300" />
				<path d="M0 201.5h744v99.7H0zM0 0h744v99.7H0z" fill="#118600" />
				<path d="M0 0h297.1v301.2H0z" fill="#d80000" />
				<path
					d="M130.3 124.3c0-.9 18.3-51.5 18.3-51.5l16.6 50.6s55.6 1.7 55.6.8-44 33.2-44 33.2 20.7 58.1 19.9 56.5c-.8-1.7-48.1-34.9-48.1-34.9s-48.2 33.2-47.3 33.2 18.2-54.7 18.2-54.7L76.4 125l53.9-.8z"
					fill="#fff"
				/>
				<path d="M0 396.4h744v99.7H0z" fill="#118600" />
			</g>
		</Box>
	);
}
