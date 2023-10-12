import clsx from "clsx";

import { getSprinkles } from "../../../styles/utils/get_sprinkles.css";
import { Box } from "../../box";
import { flagStyles } from "../styles.css";

import type { SprinklesArgs } from "../../../styles/utils/get_sprinkles.css";

export function FlagSj({
	height = "space_8",
	width = "space_8",
	...rest
}: SprinklesArgs) {
	return (
		<Box
			as="svg"
			className={clsx(
				flagStyles,
				getSprinkles({ height, width, ...rest }),
			)}
			viewBox="0 0 512 512"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
		>
			<path d="M0 0h512v512H0z" fill="#ef2b2d" />
			<path d="M128 0h128v512H128z" fill="#fff" />
			<path d="M0 192h512v128H0z" fill="#fff" />
			<path d="M160 0h64v512h-64z" fill="#002868" />
			<path d="M0 224h512v64H0z" fill="#002868" />
		</Box>
	);
}
