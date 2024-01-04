import clsx from "clsx";
import { Box } from "../__DONE__box";
import { type Sprinkles, sprinkles } from "../sprinkles/index.css";
import { flagStyles } from "./styles.css";

export function FlagCg({
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
				<clipPath id="cg_svg__a">
					<path d="M115.7 0h496.1v496h-496z" fillOpacity={0.7} />
				</clipPath>
			</defs>
			<g
				clipPath="url(#cg_svg__a)"
				fillRule="evenodd"
				strokeWidth="1pt"
				transform="translate(-119.5) scale(1.032)"
			>
				<path d="M0 0h744v496H0z" fill="#ff0" />
				<path d="M0 0v496L496 0H0z" fill="#00ca00" />
				<path d="M248 496h496V0L248 496z" fill="red" />
			</g>
		</Box>
	);
}
