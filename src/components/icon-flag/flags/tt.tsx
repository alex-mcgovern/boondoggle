import clsx from "clsx";

import { utilCss } from "../../../styles/utils/util_css.css";
import { Box } from "../../box/_components/Box";
import { flagStyles } from "../styles.css";

import type { UtilCssArgs } from "../../../styles/utils/util_css.css";

export function FlagTt({
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
			<path
				d="M0 0h512v512H0z"
				fill="#fff"
				style={{
					width: 0,
				}}
			/>
			<g fillRule="evenodd">
				<path
					d="M371 512 0 1v510.7l371 .3zM141 0l371 511V.2L141 0z"
					fill="#e00000"
				/>
				<path d="M22.2.2h94.9l374.5 511.3h-97.9L22.2.2z" />
			</g>
		</Box>
	);
}
