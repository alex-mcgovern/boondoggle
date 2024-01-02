import clsx from "clsx";
import { Box } from "../../v1/box";
import { type Sprinkles, sprinkles } from "../../v1/sprinkles/index.css";
import { flagStyles } from "./styles.css";

export function FlagMq({
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
			<path d="M0 0h512v512H0z" fill="#231f1e" />
			<path d="M0 0h512v256H0z" fill="#00a650" />
			<path d="M256 256 0 512V0z" fill="#ef1923" />
		</Box>
	);
}
