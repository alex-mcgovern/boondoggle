import clsx from "clsx";

import { utilCss } from "../../../src/styles/utils/util_css.css";
import { Box } from "../../box/Box";
import { flagStyles } from "../styles.css";

import type { UtilCssArgs } from "../../../src/styles/utils/util_css.css";

export function FlagCu({
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
				<clipPath id="cu_svg__a">
					<path d="M0 0h512v512H0z" fillOpacity={0.7} />
				</clipPath>
			</defs>
			<g clipPath="url(#cu_svg__a)" fillRule="evenodd">
				<path d="M-32 0h768v512H-32z" fill="#002a8f" />
				<path
					d="M-32 102.4h768v102.4H-32zm0 204.8h768v102.4H-32z"
					fill="#fff"
				/>
				<path d="m-32 0 440.7 255.7L-32 511V0z" fill="#cb1515" />
				<path
					d="M161.8 325.5 114.3 290l-47.2 35.8 17.6-58.1-47.2-36 58.3-.4 18.1-58 18.5 57.8 58.3.1-46.9 36.3 18 58z"
					fill="#fff"
				/>
			</g>
		</Box>
	);
}
