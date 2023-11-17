import clsx from "clsx";
import { utilCss } from "../../index.css";
import type { UtilCssArgs } from "../../index.css";
import { Box } from "../box";
import { flagStyles } from "./styles.css";

export function FlagBh({
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
			<path d="M0 0h512v512H0" fill="#fff" />
			<path
				d="M512 0H102.4l83.4 51.2-83.4 51.2 83.4 51.2-83.4 51.2 83.4 51.2-83.4 51.2 83.4 51.2-83.4 51.2 83.4 51.2-83.4 51.2H512"
				fill="#ce1126"
			/>
		</Box>
	);
}
