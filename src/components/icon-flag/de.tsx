import clsx from "clsx";
import { utilCss } from "../../styles/utils/util_css.css";
import { Box } from "../box/_components/Box";
import { flagStyles } from "./styles.css";
import type { UtilCssArgs } from "../../styles/utils/util_css.css";

export function FlagDe({
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
			<path d="M0 341.3h512V512H0z" fill="#ffce00" />
			<path d="M0 0h512v170.7H0z" />
			<path d="M0 170.7h512v170.6H0z" fill="#d00" />
		</Box>
	);
}
