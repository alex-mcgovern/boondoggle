import clsx from "clsx";

import { utilCss } from "../../../styles/utils/util_css";
import { Box } from "../../box";
import { flagStyles } from "../styles.css";

import type { UtilCssArgs } from "../../../styles/utils/util_css";

export function FlagBw({
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
				<path d="M0 0h512v512H0z" fill="#00cbff" />
				<path d="M0 192h512v128H0z" fill="#fff" />
				<path d="M0 212.7h512V299H0z" />
			</g>
		</Box>
	);
}
