import clsx from "clsx";

import { utilCss } from "../../../styles/utils/util_css";
import { Box } from "../../box";
import { flagStyles } from "../styles.css";

import type { UtilCssArgs } from "../../../styles/utils/util_css";

export function FlagTj({
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
			<path d="M0 0h512v512H0z" fill="#060" />
			<path d="M0 0h512v365.7H0z" fill="#fff" />
			<path d="M0 0h512v146.3H0z" fill="#c00" />
			<g fill="#f8c300" transform="translate(-256) scale(.73143)">
				<path d="M672 340.7a12.5 12.5 0 0 1 23.3 5.9v50h9.4v-50a12.5 12.5 0 0 1 23.3-5.9 29.5 29.5 0 1 0-56 0" />
				<path
					d="M678.7 327.6a20 20 0 0 1 21.3 9.6 20 20 0 0 1 21.3-9.6 21.5 21.5 0 0 0-42.6 0"
					fill="#fff"
				/>
				<path
					d="M695.3 376.6a38 38 0 0 1-63.8 24.3 39.5 39.5 0 0 1-59.8 17.5c3.7 36.4 58.3 29 62.3-6.4 17.2 30.1 55 21.5 66-15.4z"
					id="tj_svg__a"
				/>
				<use
					height="100%"
					transform="matrix(-1 0 0 1 1400 0)"
					width="100%"
					xlinkHref="#tj_svg__a"
				/>
				<path
					d="M658.8 441.3c-7.6 16.5-22.8 19.3-36.1 6 0 0 5.3-3.8 11-4.8a18 18 0 0 1 4.3-14.3 22 22 0 0 1 9 11.8c8-1 11.8 1.3 11.8 1.3z"
					id="tj_svg__b"
				/>
				<use
					height="100%"
					transform="rotate(9.4 700 804)"
					width="100%"
					xlinkHref="#tj_svg__b"
				/>
				<use
					height="100%"
					transform="rotate(18.7 700 804)"
					width="100%"
					xlinkHref="#tj_svg__b"
				/>
				<path
					d="M603 478a340 340 0 0 1 194 0"
					fill="none"
					stroke="#f8c300"
					strokeWidth={16}
				/>
				<g transform="translate(700 380)">
					<g transform="translate(0 -140)">
						<path
							d="m488533-158734-790463 574305L0-513674l301930 929245-790463-574305z"
							id="tj_svg__c"
							transform="scale(.00005)"
						/>
					</g>
					<g id="tj_svg__d">
						<use
							height="100%"
							transform="translate(-70 -121.2)"
							width="100%"
							xlinkHref="#tj_svg__c"
						/>
						<use
							height="100%"
							transform="translate(-121.2 -70)"
							width="100%"
							xlinkHref="#tj_svg__c"
						/>
						<use
							height="100%"
							transform="translate(-140)"
							width="100%"
							xlinkHref="#tj_svg__c"
						/>
					</g>
					<use
						height="100%"
						transform="scale(-1 1)"
						width="100%"
						xlinkHref="#tj_svg__d"
					/>
				</g>
			</g>
		</Box>
	);
}
