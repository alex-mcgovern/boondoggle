import clsx from "clsx";
import { Box } from "../box";
import { type Sprinkles, sprinkles } from "../sprinkles/index.css";
import { flagStyles } from "./styles.css";

export function FlagNr({
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
				<clipPath id="nr_svg__a">
					<path d="M135.6 0h496.1v496h-496z" fillOpacity={0.7} />
				</clipPath>
			</defs>
			<g
				clipPath="url(#nr_svg__a)"
				fillRule="evenodd"
				strokeWidth="1pt"
				transform="translate(-140) scale(1.0321)"
			>
				<path d="M0 0h992.1v496H0z" fill="#002170" />
				<path d="M0 226.8h992.1v42.4H0z" fill="#ffb20d" />
				<path
					d="m292.4 424.4-31.9-32-10.2 44-11.7-43.7-30.9 33 11.8-43.6-43.2 13 32-31.8-44-10.3 43.6-11.6-33-31 43.6 11.8-13-43.2 31.8 32 10.3-44 11.7 43.6 30.8-32.9-11.7 43.6 43.2-13-32 31.8 44 10.3L290 362l33 30.9-43.7-11.7z"
					fill="#fff"
				/>
			</g>
		</Box>
	);
}
