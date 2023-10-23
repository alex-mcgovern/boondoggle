import clsx from "clsx";

import { utilCss } from "../../../src/styles/utils/util_css.css";
import { Box } from "../../box";
import { flagStyles } from "../styles.css";

import type { UtilCssArgs } from "../../../src/styles/utils/util_css.css";

export function FlagSc({
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
			<path d="M0 0h512v512H0Z" fill="#fff" />
			<path d="M0 512V0h512v170.7z" fill="#d92223" />
			<path d="M0 512V0h341.3z" fill="#fcd955" />
			<path d="M0 512V0h170.7z" fill="#003d88" />
			<path d="m0 512 512-170.7V512Z" fill="#007a39" />
		</Box>
	);
}
