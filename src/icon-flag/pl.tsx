import clsx from "clsx";
import { Box } from "../__DONE__box";
import { type Sprinkles, sprinkles } from "../sprinkles/index.css";
import { flagStyles } from "./styles.css";

export function FlagPl({
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
				<path d="M512 512H0V0h512z" fill="#fff" />
				<path d="M512 512H0V256h512z" fill="#dc143c" />
			</g>
		</Box>
	);
}
