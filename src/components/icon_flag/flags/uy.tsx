import clsx from "clsx";

import { utilCss } from "../../../styles/utils/util_css";
import { Box } from "../../box";
import { flagStyles } from "../styles.css";

import type { UtilCssArgs } from "../../../styles/utils/util_css";

export function FlagUy({
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
			<path d="M0 0h512v512H0z" fill="#fff" />
			<path
				d="M284 56.9h228v56.9H284zm0 113.8h228v56.9H284zM0 284.4h512v57H0zm0 113.8h512v57H0z"
				fill="#0038a8"
			/>
			<g
				fill="#fcd116"
				stroke="#000"
				strokeMiterlimit={20}
				strokeWidth={0.6}
				transform="translate(142.2 142.2) scale(3.12889)"
			>
				<g id="uy_svg__c">
					<g id="uy_svg__b">
						<g id="uy_svg__a">
							<path
								d="m-2 8.9 3 4.5c-12.4 9-4.9 14.2-13.6 17 5.4-5.2-.9-5.7 3.7-16.8"
								strokeLinecap="square"
							/>
							<path
								d="M-4.2 10.2c-6.8 11.2-2.4 17.4-8.4 20.3"
								fill="none"
							/>
							<path d="M0 0h6L0 33-6 0h6v33" />
						</g>
						<use
							height="100%"
							transform="rotate(45)"
							width="100%"
							xlinkHref="#uy_svg__a"
						/>
					</g>
					<use
						height="100%"
						transform="rotate(90)"
						width="100%"
						xlinkHref="#uy_svg__b"
					/>
				</g>
				<use
					height="100%"
					transform="scale(-1)"
					width="100%"
					xlinkHref="#uy_svg__c"
				/>
				<circle r={11} />
			</g>
			<g transform="translate(142.2 142.2) scale(.31289)">
				<g id="uy_svg__d">
					<path d="M81-44c-7 8-11-6-36-6S16-35 12-38s21-21 29-22 31 7 40 16m-29 9c7 6 1 19-6 19S26-28 32-36" />
					<path d="M19-26c1-12 11-14 27-14s23 12 29 15c-7 0-13-10-29-10s-16 0-27 10m3 2c4-6 9 6 20 6s17-3 24-8-10 12-21 12-26-6-23-10" />
					<path d="M56-17c13-7 5-17 0-19 2 2 10 12 0 19M0 43c6 0 8-2 16-2s27 11 38 7c-23 9-14 3-54 3h-5m63 6c-4-7-3-5-11-16 8 6 10 9 11 16M0 67c25 0 21-5 54-19-24 3-29 11-54 11h-5m5-29c7 0 9-5 17-5s19 3 24 7c1 1-3-8-11-9S25 9 16 7c0 4 3 3 4 9 0 5-9 5-11 0 2 8-4 8-9 8" />
				</g>
				<use
					height="100%"
					transform="scale(-1 1)"
					width="100%"
					xlinkHref="#uy_svg__d"
				/>
				<path d="M0 76c-5 0-18 3 0 3s5-3 0-3" />
			</g>
		</Box>
	);
}
