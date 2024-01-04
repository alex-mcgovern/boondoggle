import clsx from "clsx";
import { Box } from "../__DONE__box";
import { type Sprinkles, sprinkles } from "../sprinkles/index.css";
import { flagStyles } from "./styles.css";

export function FlagBj({
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
				<clipPath id="bj_svg__a">
					<path d="M67.6-154h666v666h-666z" fill="gray" />
				</clipPath>
			</defs>
			<g
				clipPath="url(#bj_svg__a)"
				transform="translate(-52 118.4) scale(.7688)"
			>
				<g fillRule="evenodd" strokeWidth="1pt">
					<path d="M0-154h333v666H0z" fill="#319400" />
					<path d="M333-154h666v333H333z" fill="#ffd600" />
					<path d="M333 179h666v333H333z" fill="#de2110" />
				</g>
			</g>
		</Box>
	);
}
