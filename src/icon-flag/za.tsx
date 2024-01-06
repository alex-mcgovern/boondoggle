import clsx from "clsx";

import { Box } from "../box";
import { type Sprinkles, sprinkles } from "../sprinkles/index.css";
import { flagStyles } from "./styles.css";

export function FlagZa({
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
			<defs>
				<clipPath id="za_svg__a">
					<path d="M70.1 0h499.6v499.6H70.1z" fillOpacity={0.7} />
				</clipPath>
			</defs>
			<g
				clipPath="url(#za_svg__a)"
				transform="translate(-71.9) scale(1.0248)"
			>
				<g fillRule="evenodd" strokeWidth="1pt">
					<path d="M0 397.9v-296l220.4 147.9L0 397.9z" />
					<path
						d="m150.4 499.7 247.4-166.5h351.6v166.5h-599z"
						fill="#000c8a"
					/>
					<path
						d="M134.5 0h615v166.6H397.7S137.8-1.6 134.5 0z"
						fill="#e1392d"
					/>
					<path
						d="M0 62.5v39.3l220.4 148L0 397.8v39.4l277.6-187.4L0 62.5z"
						fill="#ffb915"
					/>
					<path
						d="M0 62.5V0h92.6l294 199h362.8v101.7H386.6l-294 198.9H0v-62.4l277.6-187.4L0 62.5z"
						fill="#007847"
					/>
					<path
						d="M92.6 0h57.8l247.4 166.6h351.6V199H386.6L92.6 0zm0 499.7h57.8l247.4-166.5h351.6v-32.4H386.6l-294 198.8z"
						fill="#fff"
					/>
				</g>
			</g>
		</Box>
	);
}
