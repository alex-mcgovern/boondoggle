import clsx from "clsx";
import { utilCss } from "../../index.css";
import type { UtilCssArgs } from "../../index.css";
import { Box } from "../box";
import { flagStyles } from "./styles.css";

export function FlagMo({
	height = "space_8",
	width = "space_8",
	...rest
}: UtilCssArgs) {
	return (
		<Box
			as="svg"
			className={clsx(flagStyles, utilCss({ height, width, ...rest }))}
			viewBox="0 0 512 512"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
		>
			<path d="M0 0h512v512H0z" fill="#00785e" />
			<path
				d="M272.5 147.4 256 96.5l-16.5 51 43.3-31.5h-53.6z"
				fill="#fbd116"
			/>
			<g id="mo_svg__a">
				<path
					d="M256 353.7H146.7a156 156 0 0 1-4-4.2H256a2.3 2.3 0 0 1 1.5 2c0 1-.6 1.9-1.5 2.2zm0-33.4c.6-1.3 1.9-4.3 1.3-8a13.2 13.2 0 0 0-1.3-4.1 87.4 87.4 0 0 1-34.7 20.2 86.4 86.4 0 0 1-25 3.7h-67.4a154 154 0 0 0 6.3 8.6h65a86.2 86.2 0 0 0 55.8-20.4zM139.1 294a34.4 34.4 0 0 1-10.3 2.2 86.3 86.3 0 0 0 64.8 29.3 86.3 86.3 0 0 0 62.4-26.6 470.3 470.3 0 0 0 4.8-62.9 470.3 470.3 0 0 0-4.8-72.2c-7 6.3-20.2 20-26.4 40.9a86.5 86.5 0 0 0-3.6 24.6 86.1 86.1 0 0 0 14.6 48.1 86.1 86.1 0 0 1-18-52.9 86.1 86.1 0 0 1 8.2-37 34.7 34.7 0 0 1-8-13.8 86 86 0 0 0-11.2 42.6 86.1 86.1 0 0 0 17 51.4 101.4 101.4 0 0 0-78.3-31.5 34.8 34.8 0 0 1 7.2 9.5 101.4 101.4 0 0 1 73.3 31.4 101.3 101.3 0 0 0-65.2-23.6c-13.8 0-27 2.7-39 7.8a86.6 86.6 0 0 0 88 55.6 87 87 0 0 1-15.4 1.4 86.2 86.2 0 0 1-60.1-24.3zM256 388.7h-56.6a153 153 0 0 0 56.6 10.8 11.6 11.6 0 0 0 1.3-5.3 11.7 11.7 0 0 0-1.3-5.5zm0-26.2h-99.9a154 154 0 0 0 8.4 6.7H256a4.9 4.9 0 0 0 1.4-3.3c0-2-1.2-3.1-1.4-3.4zm0 13.4h-81.8a153.2 153.2 0 0 0 15.4 8.5H256a8 8 0 0 0 1.2-4.5 8 8 0 0 0-1.2-4z"
					fill="#fff"
				/>
				<path
					d="m155.6 211.7-7-36.4-15.7 33.6 32.4-18-36.8-4.5zm49.3-58.8-29.6-22.3 10.8 35.4 12.1-35-30.3 21.3z"
					fill="#fbd116"
				/>
			</g>
			<use
				height="100%"
				transform="matrix(-1 0 0 1 512 0)"
				width="100%"
				xlinkHref="#mo_svg__a"
			/>
		</Box>
	);
}
