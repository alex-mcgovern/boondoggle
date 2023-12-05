import clsx from "clsx";
import { Box } from "../box";
import { type Sprinkles, sprinkles } from "../sprinkles/index.css";
import { flagStyles } from "./styles.css";

export function FlagLy({
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
				<clipPath id="ly_svg__a">
					<path d="M250 12h500v500H250z" />
				</clipPath>
			</defs>
			<g
				clipPath="url(#ly_svg__a)"
				transform="translate(-256 -12.3) scale(1.024)"
			>
				<path d="M0 12h1000v500H0z" fill="#239e46" />
				<path d="M0 12h1000v375H0z" />
				<path d="M0 12h1000v125H0z" fill="#e70013" />
				<path
					d="M544.2 217.8a54.3 54.3 0 1 0 0 88.4 62.5 62.5 0 1 1 0-88.4M530.4 262l84.1-27.3-52 71.5v-88.4l52 71.5z"
					fill="#fff"
				/>
			</g>
		</Box>
	);
}
