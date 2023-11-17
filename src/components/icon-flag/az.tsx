import clsx from "clsx";
import { utilCss } from "../../styles/utils/util_css.css";
import type { UtilCssArgs } from "../../styles/utils/util_css.css";
import { Box } from "../box";
import { flagStyles } from "./styles.css";

export function FlagAz({
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
			<path d="M0 0h512v512H0z" fill="#3f9c35" />
			<path d="M0 0h512v341.3H0z" fill="#ed2939" />
			<path d="M0 0h512v170.7H0z" fill="#00b9e4" />
			<circle cx={238.8} cy={256} fill="#fff" r={76.8} />
			<circle cx={255.9} cy={256} fill="#ed2939" r={64} />
			<path
				d="m324.2 213.3 8.1 23 22-10.5-10.4 22 23 8.2-23 8.2 10.4 22-22-10.5-8.1 23-8.2-23-22 10.5 10.5-22-23-8.2 23-8.2-10.5-22 22 10.5 8.2-23z"
				fill="#fff"
			/>
		</Box>
	);
}
