import clsx from "clsx";
import { Box } from "../box";
import { type UtilCssArgs, utilCss } from "../index.css";
import { flagStyles } from "./styles.css";

export function FlagPr({
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
			<defs>
				<clipPath id="pr_svg__a">
					<path d="M51.6 0h708.7v708.7H51.6z" fillOpacity={0.7} />
				</clipPath>
			</defs>
			<g
				clipPath="url(#pr_svg__a)"
				fillRule="evenodd"
				transform="translate(-37.3) scale(.72249)"
			>
				<path d="M0 0h1063v708.7H0z" fill="#ed0000" />
				<path
					d="M0 141.7h1063v141.8H0zm0 283.5h1063v141.7H0z"
					fill="#fff"
				/>
				<path d="m0 0 610 353.9L0 707.3V0z" fill="#0050f0" />
				<path
					d="m268.2 450.5-65.7-49-65.3 49.5 24.3-80.5-65.3-49.7 80.7-.7 25-80.2 25.6 80 80.7.1-64.9 50.2 24.9 80.3z"
					fill="#fff"
				/>
			</g>
		</Box>
	);
}
