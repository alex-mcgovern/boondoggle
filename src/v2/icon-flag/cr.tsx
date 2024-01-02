import clsx from "clsx";
import { Box } from "../../v1/box";
import { type Sprinkles, sprinkles } from "../../v1/sprinkles/index.css";
import { flagStyles } from "./styles.css";

export function FlagCr({
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
			<g fillRule="evenodd" strokeWidth="1pt">
				<path d="M0 0h512v512H0z" fill="#0000b4" />
				<path d="M0 80.5h512v343.7H0z" fill="#fff" />
				<path d="M0 168.2h512v168.2H0z" fill="#d90000" />
			</g>
		</Box>
	);
}
