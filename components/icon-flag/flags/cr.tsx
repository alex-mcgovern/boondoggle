import clsx from "clsx";
import { css } from "../../../src/styles/utils/util_css.css"; import { Box } from "../../box/Box"; import { flagStyles } from "../styles.css";
import type { UtilCssArgs } from "../../../src/styles/utils/util_css.css";

export function FlagCr({
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
			<g fillRule="evenodd" strokeWidth="1pt">
				<path d="M0 0h512v512H0z" fill="#0000b4" />
				<path d="M0 80.5h512v343.7H0z" fill="#fff" />
				<path d="M0 168.2h512v168.2H0z" fill="#d90000" />
			</g>
		</Box>
	);
}
