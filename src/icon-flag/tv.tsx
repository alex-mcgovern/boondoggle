import clsx from "clsx";
import { Box } from "../__DONE__box";
import { type Sprinkles, sprinkles } from "../sprinkles/index.css";
import { flagStyles } from "./styles.css";

export function FlagTv({
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
			<path d="M0 0h512v512H0z" fill="#009fca" />
			<path
				d="m478 226.3 7.1 20.4-18.4-12.6-18.5 12.6 7.1-20.4-18.5-12.6h22.9l7-20.4 7 20.4h22.8zm-57.2 162.8 7 20.4-18.4-12.7-18.4 12.7 7-20.4-18.4-12.7h22.8l7-20.4 7 20.5h22.9zm57.3-36.9 7 20.4-18.4-12.6-18.5 12.6 7.1-20.4-18.5-12.6h22.9l7-20.4 7 20.4h22.8zm-246.2 118 7.1 20.5-18.4-12.7-18.5 12.7 7.1-20.4-18.5-12.6h22.8l7-20.4 7.1 20.4h22.8zm43.1-88.4-7-20.4 18.4 12.6 18.4-12.6-7 20.4 18.4 12.6h-22.8l-7 20.4-7-20.4h-22.8zm67.3-93-7.1-20.4 18.4 12.6 18.5-12.6-7 20.4 18.4 12.6h-22.8l-7 20.4-7-20.4h-22.9zm56.5-19.3-7-20.4 18.4 12.6 18.4-12.6-7 20.4 18.4 12.6h-22.8l-7 20.4-7-20.4h-22.9zm-56.5 161-7.1-20.4 18.4 12.6 18.5-12.6-7 20.4 18.4 12.6h-22.8l-7 20.4-7-20.4h-22.9zM275 446.9l-7-20.4 18.4 12.6 18.4-12.6-7 20.4 18.4 12.6h-22.8l-7 20.4-7-20.4h-22.8z"
				fill="#fff40d"
				fillRule="evenodd"
			/>
			<path d="M0 0h256v256H0z" fill="#012169" />
			<path
				d="M256 0v32l-95 96 95 93.5V256h-33.5L127 162l-93 94H0v-34l93-93.5L0 37V0h31l96 94 93-94z"
				fill="#FFF"
			/>
			<path
				d="m92 162 5.5 17L21 256H0v-1.5zm62-6 27 4 75 73.5V256zM256 0l-96 98-2-22 75-76zM0 .5 96.5 95 67 91 0 24.5z"
				fill="#C8102E"
			/>
			<path d="M88 0v256h80V0zM0 88v80h256V88z" fill="#FFF" />
			<path d="M0 104v48h256v-48zM104 0v256h48V0z" fill="#C8102E" />
		</Box>
	);
}
