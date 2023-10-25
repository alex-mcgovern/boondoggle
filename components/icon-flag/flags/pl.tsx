import clsx from "clsx";
import { css } from "../../../src/styles/utils/util_css.css"; import { Box } from "../../box/Box"; import { flagStyles } from "../styles.css";
import type { UtilCssArgs } from "../../../src/styles/utils/util_css.css";

export function FlagPl({
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
			<g fillRule="evenodd">
				<path d="M512 512H0V0h512z" fill="#fff" />
				<path d="M512 512H0V256h512z" fill="#dc143c" />
			</g>
		</Box>
	);
}
