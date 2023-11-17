import clsx from "clsx";
import { utilCss } from "../../styles/utils/util_css.css";
import type { UtilCssArgs } from "../../styles/utils/util_css.css";
import { Box } from "../box";
import { flagStyles } from "./styles.css";

export function FlagCi({
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
				<path d="M341.5 0H512v512H341.5z" fill="#00cd00" />
				<path d="M0 0h170.3v512H0z" fill="#ff9a00" />
				<path d="M170.3 0h171.2v512H170.3z" fill="#fff" />
			</g>
		</Box>
	);
}
