import clsx from "clsx";
import { css } from "../../../src/styles/utils/util_css.css"; import { Box } from "../../box/Box"; import { flagStyles } from "../styles.css";
import type { UtilCssArgs } from "../../../src/styles/utils/util_css.css";

export function FlagDj({
	height = "space_8",
	width = "space_8",
	...rest
}: UtilCssArgs) {
	return (
		<Box
			as="svg"
			className={clsx(flagStyles, css({ height, width, ...rest }))}
			viewBox="0 0 512 512"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
		>
			<defs>
				<clipPath id="dj_svg__a">
					<path d="M55.4 0H764v708.7H55.4z" fillOpacity={0.7} />
				</clipPath>
			</defs>
			<g
				clipPath="url(#dj_svg__a)"
				fillRule="evenodd"
				transform="translate(-40) scale(.722)"
			>
				<path d="M0 0h1063v708.7H0z" fill="#0c0" />
				<path d="M0 0h1063v354.3H0z" fill="#69f" />
				<path d="m0 0 529.7 353.9L0 707.3V0z" fill="#fffefe" />
				<path
					d="m221.2 404.3-42.7-30.8-42.4 31 15.8-50.3-42.4-31.2 52.4-.4 16.3-50.2 16.6 50 52.4.2-42.1 31.4 16 50.3z"
					fill="red"
				/>
			</g>
		</Box>
	);
}
