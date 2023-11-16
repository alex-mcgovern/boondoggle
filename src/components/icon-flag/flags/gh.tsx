import clsx from "clsx";

import { utilCss } from "../../../styles/utils/util_css.css";
import { Box } from "../../box/_components/Box";
import { flagStyles } from "../styles.css";

import type { UtilCssArgs } from "../../../styles/utils/util_css.css";

export function FlagGh({
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
			<path d="M0 0h512v512H0z" fill="#006b3f" />
			<path d="M0 0h512v341.3H0z" fill="#fcd116" />
			<path d="M0 0h512v170.7H0z" fill="#ce1126" />
			<path d="m256 170.7 55.5 170.6L166.3 236h179.4L200.6 341.3z" />
		</Box>
	);
}
