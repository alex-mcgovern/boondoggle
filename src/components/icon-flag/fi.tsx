import clsx from "clsx";
import { type UtilCssArgs, utilCss } from "../../index.css";
import { Box } from "../box";
import { flagStyles } from "./styles.css";

export function FlagFi({
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
			<path d="M0 0h512v512H0z" fill="#fff" />
			<path d="M0 186.2h512v139.6H0z" fill="#002f6c" />
			<path d="M123.2 0h139.6v512H123.1z" fill="#002f6c" />
		</Box>
	);
}