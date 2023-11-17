import clsx from "clsx";
import { Box } from "../box";
import { type UtilCssArgs, utilCss } from "../index.css";
import { flagStyles } from "./styles.css";

export function FlagMu({
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
				<path d="M0 384h512v128H0z" fill="#009f4d" />
				<path d="M0 128h512v128H0z" fill="#151f6d" />
				<path d="M0 0h512v128H0z" fill="#ee2737" />
				<path d="M0 256h512v128H0z" fill="#ffcd00" />
			</g>
		</Box>
	);
}
