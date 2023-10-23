import clsx from "clsx";

import { utilCss } from "../../../src/styles/utils/util_css.css";
import { Box } from "../../box";
import { flagStyles } from "../styles.css";

import type { UtilCssArgs } from "../../../src/styles/utils/util_css.css";

export function FlagGa({
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
			<g fillRule="evenodd">
				<path d="M512 512H0V0h512z" fill="#ffe700" />
				<path d="M512 170.7H0V0h512z" fill="#36a100" />
				<path d="M512 512H0V341.3h512z" fill="#006dbc" />
			</g>
		</Box>
	);
}
