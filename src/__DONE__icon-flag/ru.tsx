import clsx from "clsx";
import { Box } from "../__DONE__box";
import { type Sprinkles, sprinkles } from "../__DONE__sprinkles/index.css";
import { flagStyles } from "./styles.css";

export function FlagRu({
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
				<path d="M0 0h512v512H0z" fill="#fff" />
				<path d="M0 170.7h512V512H0z" fill="#0039a6" />
				<path d="M0 341.3h512V512H0z" fill="#d52b1e" />
			</g>
		</Box>
	);
}
