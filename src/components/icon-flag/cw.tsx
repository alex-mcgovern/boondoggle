import clsx from "clsx";
import { utilCss } from "../../styles/utils/util_css.css";
import { Box } from "../box/_components/Box";
import { flagStyles } from "./styles.css";
import type { UtilCssArgs } from "../../styles/utils/util_css.css";

export function FlagCw({
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
				<clipPath id="cw_svg__a">
					<path d="M0 0h9000v9000H0z" fillOpacity={0.7} />
				</clipPath>
				<path
					d="m0-1 .2.7H1L.3 0l.2.7L0 .4l-.6.4.2-.7-.5-.4h.7z"
					id="cw_svg__b"
				/>
			</defs>
			<g clipPath="url(#cw_svg__a)" transform="scale(.057)">
				<path d="M0 0h13500v9000H0z" fill="#002b7f" />
				<path d="M0 5625h13500v1125H0z" fill="#f9e814" />
				<use
					fill="#fff"
					height={9000}
					transform="scale(750)"
					width={13500}
					x={2}
					xlinkHref="#cw_svg__b"
					y={2}
				/>
				<use
					fill="#fff"
					height={9000}
					transform="scale(1000)"
					width={13500}
					x={3}
					xlinkHref="#cw_svg__b"
					y={3}
				/>
			</g>
		</Box>
	);
}
