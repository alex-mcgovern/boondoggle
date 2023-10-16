import clsx from "clsx";

import { utilCss } from "../../../styles/utils/util_css.css";
import { Box } from "../../box";
import { flagStyles } from "../styles.css";

import type { UtilCssArgs } from "../../../styles/utils/util_css.css";

export function FlagLa({
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
				<clipPath id="la_svg__a">
					<path d="M177.2 0h708.6v708.7H177.2z" fillOpacity={0.7} />
				</clipPath>
			</defs>
			<g
				clipPath="url(#la_svg__a)"
				fillRule="evenodd"
				transform="translate(-128) scale(.72249)"
			>
				<path d="M0 0h1063v708.7H0z" fill="#ce1126" />
				<path d="M0 176h1063v356.6H0z" fill="#002868" />
				<path
					d="M684.2 354.3a152.7 152.7 0 1 1-305.4 0 152.7 152.7 0 0 1 305.4 0z"
					fill="#fff"
				/>
			</g>
		</Box>
	);
}
