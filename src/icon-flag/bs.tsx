import clsx from "clsx";

import { Box } from "../box";
import { type Sprinkles, sprinkles } from "../sprinkles/index.css";
import { flagStyles } from "./styles.css";

export function FlagBs({
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
				<clipPath id="bs_svg__a">
					<path d="M56.6 26.4H537v480.3H56.6z" fillOpacity={0.7} />
				</clipPath>
			</defs>
			<g
				clipPath="url(#bs_svg__a)"
				fillRule="evenodd"
				transform="matrix(1.066 0 0 1.067 -60.4 -28.1)"
			>
				<path d="M990 506.2H9.4V27.6H990z" fill="#fff" />
				<path d="M990 370.6H9.4V169.2H990z" fill="#ffe900" />
				<path
					d="M990 506.2H9.4V346.7H990zm0-319H9.4V27.9H990z"
					fill="#08ced6"
				/>
				<path d="M9 25.9c2.1 0 392.3 237 392.3 237L7.8 505.3 9 25.9z" />
			</g>
		</Box>
	);
}
