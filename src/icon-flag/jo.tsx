import clsx from "clsx";

import { Box } from "../box";
import { type Sprinkles, sprinkles } from "../sprinkles/index.css";
import { flagStyles } from "./styles.css";

export function FlagJo({
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
				<clipPath id="jo_svg__a">
					<path d="M113.6 0H607v493.5H113.6z" fillOpacity={0.7} />
				</clipPath>
			</defs>
			<g
				clipPath="url(#jo_svg__a)"
				transform="translate(-117.8) scale(1.0375)"
			>
				<g fillRule="evenodd" strokeWidth="1pt">
					<path d="M0 0h987v164.5H0z" />
					<path d="M0 164.5h987V329H0z" fill="#fff" />
					<path d="M0 329h987v164.5H0z" fill="#090" />
					<path d="m0 493.5 493.5-246.8L0 0v493.5z" fill="red" />
					<path
						d="m164.8 244 22 10.6h-24.5l5.5 24-15.3-19.3-15.3 19.2 5.5-23.9H118l22.1-10.7-15.3-19.1 22.1 10.6 5.5-23.9 5.5 24 22-10.7z"
						fill="#fff"
					/>
				</g>
			</g>
		</Box>
	);
}
