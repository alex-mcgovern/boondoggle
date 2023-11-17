import clsx from "clsx";
import { utilCss, type UtilCssArgs } from "../../index.css";
import { Box } from "../box";
import { flagStyles } from "./styles.css";

export function FlagMf({
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
			<path d="M0 0h170.7v512H0z" fill="#002654" />
			<path d="M341.3 0H512v512H341.3z" fill="#ce1126" />
		</Box>
	);
}
