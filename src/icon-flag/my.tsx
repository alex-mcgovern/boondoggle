import clsx from "clsx";
import { Box } from "../__DONE__box";
import { type Sprinkles, sprinkles } from "../sprinkles/index.css";
import { flagStyles } from "./styles.css";

export function FlagMy({
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
			<path d="M0 0h512v36.6H0z" fill="#C00" />
			<path d="M0 36.6h512V73H0z" fill="#fff" />
			<path d="M0 73.1h512v36.6H0z" fill="#C00" />
			<path d="M0 109.7h512v36.6H0z" fill="#fff" />
			<path d="M0 146.3h512v36.6H0z" fill="#C00" />
			<path d="M0 182.9h512v36.5H0z" fill="#fff" />
			<path d="M0 219.4h512V256H0z" fill="#C00" />
			<path d="M0 256h512v36.6H0z" fill="#fff" />
			<path d="M0 292.6h512V329H0z" fill="#C00" />
			<path d="M0 329.1h512v36.6H0z" fill="#fff" />
			<path d="M0 365.7h512v36.6H0z" fill="#C00" />
			<path d="M0 402.3h512v36.6H0z" fill="#fff" />
			<path d="M0 438.9h512v36.5H0z" fill="#C00" />
			<path d="M0 475.4h512V512H0z" fill="#fff" />
			<path d="M0 0h256v292.6H0V0Z" fill="#006" />
			<path
				d="m166 93 4.8 32.5 18.4-27.2-10 31.3 28.5-16.6-22.5 24 32.8-2.6-30.7 11.9L218 158l-32.8-2.5 22.5 24-28.4-16.7 9.8 31.5-18.4-27.3-4.8 32.5-4.7-32.5-18.4 27.2 9.9-31.4-28.4 16.7 22.4-24-32.8 2.5 30.7-11.8-30.6-11.9 32.8 2.6-22.5-24 28.4 16.6-10-31.4 18.5 27.3 4.8-32.6Zm-26.7 1.3a56.9 56.9 0 0 0-73 24.9 56.9 56.9 0 0 0 45.5 83.8 56.9 56.9 0 0 0 27.5-4.7 64 64 0 1 1 0-104Z"
				fill="#FC0"
			/>
		</Box>
	);
}
