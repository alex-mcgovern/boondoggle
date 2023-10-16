import clsx from "clsx";

import { utilCss } from "../../../styles/utils/util_css";
import { Box } from "../../box";
import { flagStyles } from "../styles.css";

import type { UtilCssArgs } from "../../../styles/utils/util_css";

export function FlagEu({
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
				<g id="eu_svg__d">
					<g id="eu_svg__b">
						<path d="m0-1-.3 1 .5.1z" id="eu_svg__a" />
						<use transform="scale(-1 1)" xlinkHref="#eu_svg__a" />
					</g>
					<g id="eu_svg__c">
						<use transform="rotate(72)" xlinkHref="#eu_svg__b" />
						<use transform="rotate(144)" xlinkHref="#eu_svg__b" />
					</g>
					<use transform="scale(-1 1)" xlinkHref="#eu_svg__c" />
				</g>
			</defs>
			<path d="M0 0h512v512H0z" fill="#039" />
			<g fill="#fc0" transform="translate(256 258.4) scale(25.28395)">
				<use height="100%" width="100%" xlinkHref="#eu_svg__d" y={-6} />
				<use height="100%" width="100%" xlinkHref="#eu_svg__d" y={6} />
				<g id="eu_svg__e">
					<use
						height="100%"
						width="100%"
						x={-6}
						xlinkHref="#eu_svg__d"
					/>
					<use
						height="100%"
						transform="rotate(-144 -2.3 -2.1)"
						width="100%"
						xlinkHref="#eu_svg__d"
					/>
					<use
						height="100%"
						transform="rotate(144 -2.1 -2.3)"
						width="100%"
						xlinkHref="#eu_svg__d"
					/>
					<use
						height="100%"
						transform="rotate(72 -4.7 -2)"
						width="100%"
						xlinkHref="#eu_svg__d"
					/>
					<use
						height="100%"
						transform="rotate(72 -5 .5)"
						width="100%"
						xlinkHref="#eu_svg__d"
					/>
				</g>
				<use
					height="100%"
					transform="scale(-1 1)"
					width="100%"
					xlinkHref="#eu_svg__e"
				/>
			</g>
		</Box>
	);
}
