import clsx from "clsx";
import { utilCss } from "../../styles/utils/util_css.css";
import type { UtilCssArgs } from "../../styles/utils/util_css.css";
import { Box } from "../box";
import { flagStyles } from "./styles.css";

export function FlagGy({
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
				<path d="M2 0h510v512H2z" fill="#399408" />
				<path
					d="M.1 0c-.6 0 495.7 257.6 495.7 257.6L0 511.7.1 0z"
					fill="#fff"
				/>
				<path
					d="M.2 21.5C3 21.5 447.5 254 445 256.2L1.5 494.2.2 21.4z"
					fill="#ffde08"
				/>
				<path d="M1.5.8c1.5 0 232.8 257 232.8 257L1.5 508.8V.8z" />
				<path
					d="M.2 36.2C1.6 20.2 209 258.5 209 258.5L.2 481.8V36.2z"
					fill="#de2110"
				/>
			</g>
		</Box>
	);
}
