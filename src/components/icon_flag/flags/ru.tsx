import clsx from "clsx";

import { utilCss } from "../../../styles/utils/util_css.css";
import { Box } from "../../box/Box";
import { flagStyles } from "../styles.css";

import type { UtilCssArgs } from "../../../styles/utils/util_css.css";

export function FlagRu({
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
			<g fillRule="evenodd" strokeWidth="1pt">
				<path d="M0 0h512v512H0z" fill="#fff" />
				<path d="M0 170.7h512V512H0z" fill="#0039a6" />
				<path d="M0 341.3h512V512H0z" fill="#d52b1e" />
			</g>
		</Box>
	);
}
