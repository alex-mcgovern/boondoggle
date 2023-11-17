import clsx from "clsx";
import { Box } from "../box";
import { type UtilCssArgs, utilCss } from "../index.css";
import { flagStyles } from "./styles.css";

export function FlagKr({
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
			<path d="M0 0h512v512H0Z" fill="#fff" fillRule="evenodd" />
			<g
				fillRule="evenodd"
				transform="rotate(-56.3 367.2 -111.2) scale(9.375)"
			>
				<g id="kr_svg__b">
					<path
						d="M-6-26H6v2H-6Zm0 3H6v2H-6Zm0 3H6v2H-6Z"
						id="kr_svg__a"
					/>
					<use
						height="100%"
						width="100%"
						xlinkHref="#kr_svg__a"
						y={44}
					/>
				</g>
				<path d="M0 17v10" stroke="#fff" />
				<path d="M0-12a12 12 0 0 1 0 24Z" fill="#cd2e3a" />
				<path
					d="M0-12a12 12 0 0 0 0 24A6 6 0 0 0 0 0Z"
					fill="#0047a0"
				/>
				<circle cy={-6} fill="#cd2e3a" r={6} />
			</g>
			<g
				fillRule="evenodd"
				transform="rotate(-123.7 196.5 59.5) scale(9.375)"
			>
				<use height="100%" width="100%" xlinkHref="#kr_svg__b" />
				<path d="M0-23.5v3M0 17v3.5m0 3v3" stroke="#fff" />
			</g>
		</Box>
	);
}
