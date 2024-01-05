import clsx from "clsx";
import { Box } from "../box";
import { type Sprinkles, sprinkles } from "../sprinkles/index.css";
import { flagStyles } from "./styles.css";

export function FlagXx({
	height = "space_8",
	width = "space_8",
	...rest
}: Sprinkles) {
	return (
		<Box
			as="svg"
			className={clsx(flagStyles, sprinkles({ height, width, ...rest }))}
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