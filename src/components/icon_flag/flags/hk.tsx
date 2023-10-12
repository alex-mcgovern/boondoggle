import clsx from "clsx";

import { getSprinkles } from "../../../styles/utils/get_sprinkles.css";
import { Box } from "../../box";
import { flagStyles } from "../styles.css";

import type { SprinklesArgs } from "../../../styles/utils/get_sprinkles.css";

export function FlagHk({
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
			<path d="M0 0h512v512H0" fill="#EC1B2E" />
			<path
				d="M282.3 119.2C203 114 166.6 218 241.6 256.4 215.6 234 221 201 231.5 184l1.9 1c-13.8 23.6-11.2 52.8 11 71-12.6-12.2-9.4-39 12.2-48.8s23.6-39.3 16.4-49.1q-14.7-25.6 9.3-39zM243.9 180l-4.7 7.4-1.8-8.6-8.6-2.3 7.8-4.3-.6-9 6.5 6.2 8.3-3.3-3.7 8 5.6 6.9z"
				fill="#fff"
				id="hk_svg__a"
			/>
			<use transform="rotate(72 248.5 259.5)" xlinkHref="#hk_svg__a" />
			<use transform="rotate(144 248.5 259.5)" xlinkHref="#hk_svg__a" />
			<use transform="rotate(216 248.5 259.5)" xlinkHref="#hk_svg__a" />
			<use transform="rotate(288 248.5 259.5)" xlinkHref="#hk_svg__a" />
		</Box>
	);
}
