import clsx from "clsx";
import { Box } from "../box";
import { type Sprinkles, sprinkles } from "../sprinkles/index.css";
import { flagStyles } from "./styles.css";

export function FlagLv({
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
			<g fillRule="evenodd">
				<path d="M0 0h512v512H0z" fill="#fff" />
				<path d="M0 0h512v204.8H0zm0 307.2h512V512H0z" fill="#981e32" />
			</g>
		</Box>
	);
}