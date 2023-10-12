import clsx from "clsx";

import { getSprinkles } from "../../../styles/utils/get_sprinkles.css";
import { Box } from "../../box";
import { flagStyles } from "../styles.css";

import type { SprinklesArgs } from "../../../styles/utils/get_sprinkles.css";

export function FlagXx({
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
			<path
				d="M.5.5h511v511H.5z"
				fill="#fff"
				fillRule="evenodd"
				stroke="#adb5bd"
			/>
			<path
				d="m.5.5 511 511m0-511-511 511"
				fill="none"
				stroke="#adb5bd"
			/>
		</Box>
	);
}
