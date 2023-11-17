import clsx from "clsx";
import { utilCss } from "../../index.css";
import type { UtilCssArgs } from "../../index.css";
import { Box } from "../box";
import { flagStyles } from "./styles.css";

export function FlagGg({
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
			<path d="M192 0h128v512H192z" fill="#e8112d" />
			<path d="M0 187.7h512v136.6H0z" fill="#e8112d" />
			<path
				d="m46 305.8 23.3-25h210v-49.7h-210L46 206.2z"
				fill="#f9dd16"
				id="gg_svg__a"
			/>
			<use
				height={24}
				transform="matrix(0 1.06667 -.9375 0 496 -17)"
				width={36}
				xlinkHref="#gg_svg__a"
			/>
			<use
				height={24}
				transform="matrix(0 -1.06667 .9375 0 16 529)"
				width={36}
				xlinkHref="#gg_svg__a"
			/>
			<use
				height={24}
				transform="rotate(180 256 256)"
				width={36}
				xlinkHref="#gg_svg__a"
			/>
		</Box>
	);
}
