import clsx from "clsx";

import { utilCss } from "../../../src/styles/utils/util_css.css";
import { Box } from "../../box";
import { flagStyles } from "../styles.css";

import type { UtilCssArgs } from "../../../src/styles/utils/util_css.css";

export function FlagGbEng({
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
			<path d="M0 0h512v512H0z" fill="#fff" />
			<path d="M215 0h82v512h-82z" fill="#ce1124" />
			<path d="M0 215h512v82H0z" fill="#ce1124" />
		</Box>
	);
}
