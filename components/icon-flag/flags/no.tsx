import clsx from "clsx";

import { css } from "../../../src/styles/utils/util_css.css";
import { Box } from "../../box/Box";
import { flagStyles } from "../styles.css";

import type { UtilCssArgs } from "../../../src/styles/utils/util_css.css";

export function FlagNo({
	height = "space_8",
	width = "space_8",
	...rest
}: UtilCssArgs) {
	return (
		<Box
			as="svg"
			className={clsx(flagStyles, css({ height, width, ...rest }))}
			viewBox="0 0 512 512"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
		>
			<path d="M0 0h512v512H0z" fill="#ed2939" />
			<path d="M128 0h128v512H128z" fill="#fff" />
			<path d="M0 192h512v128H0z" fill="#fff" />
			<path d="M160 0h64v512h-64z" fill="#002664" />
			<path d="M0 224h512v64H0z" fill="#002664" />
		</Box>
	);
}
