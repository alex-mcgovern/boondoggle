import clsx from "clsx";

import { getSprinkles } from "../../../styles/utils/get_sprinkles.css";
import { Box } from "../../box";
import { flagStyles } from "../styles.css";

import type { SprinklesArgs } from "../../../styles/utils/get_sprinkles.css";

export function FlagGe({
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
			<path d="M0 0h512v512H0z" fill="#fff" />
			<path d="M205 0h102v512H205z" fill="red" />
			<path d="M0 205h512v102H0z" fill="red" />
			<path
				d="M114.1 397.9c1.1-18 4.3-33.4 4.3-33.4s-10.6 1-15.9 1c-5.3 0-15.9-1-15.9-1s3.2 15.3 4.3 33.4c-18-1.1-33.4-4.3-33.4-4.3s1 8 1 15.9-1 15.9-1 15.9 15.3-3.2 33.4-4.3c-1.1 18-4.3 33.4-4.3 33.4s8-1 15.9-1c8 0 15.9 1 15.9 1s-3.2-15.3-4.3-33.4c18 1.1 33.4 4.3 33.4 4.3s-1-10.6-1-15.9c0-5.3 1-15.9 1-15.9s-15.3 3.2-33.4 4.3zm307-307c1.1-18 4.3-33.4 4.3-33.4s-10.6 1-15.9 1c-5.3 0-15.9-1-15.9-1s3.2 15.4 4.3 33.4c-18-1.1-33.4-4.3-33.4-4.3s1 8 1 15.9c0 8-1 15.9-1 15.9s15.3-3.2 33.4-4.3c-1.1 18-4.3 33.4-4.3 33.4s8-1 15.9-1 15.9 1 15.9 1-3.2-15.3-4.3-33.4c18 1.1 33.4 4.3 33.4 4.3s-1-10.6-1-15.9c0-5.2 1-15.9 1-15.9s-15.4 3.2-33.4 4.3zm-307 0c1.1-18 4.3-33.4 4.3-33.4s-10.6 1-15.9 1c-5.3 0-15.9-1-15.9-1s3.2 15.4 4.3 33.4c-18-1.1-33.4-4.3-33.4-4.3s1 8 1 15.9c0 8-1 15.9-1 15.9s15.3-3.2 33.4-4.3c-1.1 18-4.3 33.4-4.3 33.4s8-1 15.9-1c8 0 15.9 1 15.9 1s-3.2-15.3-4.3-33.4c18 1.1 33.4 4.3 33.4 4.3s-1-10.6-1-15.9c0-5.2 1-15.9 1-15.9s-15.3 3.2-33.4 4.3zm307 307c1.1-18 4.3-33.4 4.3-33.4s-10.6 1-15.9 1c-5.3 0-15.9-1-15.9-1s3.2 15.3 4.3 33.4c-18-1.1-33.4-4.3-33.4-4.3s1 8 1 15.9-1 15.9-1 15.9 15.3-3.2 33.4-4.3c-1.1 18-4.3 33.4-4.3 33.4s8-1 15.9-1 15.9 1 15.9 1-3.2-15.3-4.3-33.4c18 1.1 33.4 4.3 33.4 4.3s-1-10.6-1-15.9c0-5.3 1-15.9 1-15.9s-15.4 3.2-33.4 4.3z"
				fill="red"
				fillRule="evenodd"
			/>
		</Box>
	);
}
