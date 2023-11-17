import clsx from "clsx";
import { Box } from "../box";
import { type UtilCssArgs, utilCss } from "../index.css";
import { flagStyles } from "./styles.css";

export function FlagPe({
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
			<path d="M0 0h512v512H0z" fill="#D91023" />
			<path d="M170.7 0h170.6v512H170.7z" fill="#fff" />
		</Box>
	);
}
