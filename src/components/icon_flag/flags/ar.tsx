import clsx from "clsx";

import { utilCss } from "../../../styles/utils/util_css";
import { Box } from "../../box";
import { flagStyles } from "../styles.css";

import type { UtilCssArgs } from "../../../styles/utils/util_css";

export function FlagAr({
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
			<path d="M0 0h512v512H0z" fill="#74acdf" />
			<path d="M0 170.7h512v170.7H0z" fill="#fff" />
			<g id="ar_svg__c" transform="translate(-153.6) scale(1.024)">
				<path
					d="m396.8 251.3 28.5 62s.5 1.2 1.3.9c.8-.4.3-1.6.3-1.6l-23.7-64m-.7 24.2c-.4 9.4 5.4 14.6 4.7 23-.8 8.5 3.8 13.2 5 16.5 1 3.3-1.2 5.2-.3 5.7 1 .5 3-2.1 2.4-6.8-.7-4.6-4.2-6-3.4-16.3.8-10.3-4.2-12.7-3-22"
					fill="#f6b40e"
					id="ar_svg__a"
					stroke="#85340a"
					strokeWidth={1.1}
				/>
				<use
					height="100%"
					transform="rotate(22.5 400 250)"
					width="100%"
					xlinkHref="#ar_svg__a"
				/>
				<use
					height="100%"
					transform="rotate(45 400 250)"
					width="100%"
					xlinkHref="#ar_svg__a"
				/>
				<use
					height="100%"
					transform="rotate(67.5 400 250)"
					width="100%"
					xlinkHref="#ar_svg__a"
				/>
				<path
					d="M404.3 274.4c.5 9 5.6 13 4.6 21.3 2.2-6.5-3.1-11.6-2.8-21.2m-7.7-23.8 19.5 42.6-16.3-43.9"
					fill="#85340a"
					id="ar_svg__b"
				/>
				<use
					height="100%"
					transform="rotate(22.5 400 250)"
					width="100%"
					xlinkHref="#ar_svg__b"
				/>
				<use
					height="100%"
					transform="rotate(45 400 250)"
					width="100%"
					xlinkHref="#ar_svg__b"
				/>
				<use
					height="100%"
					transform="rotate(67.5 400 250)"
					width="100%"
					xlinkHref="#ar_svg__b"
				/>
			</g>
			<use
				height="100%"
				transform="rotate(90 256 256)"
				width="100%"
				xlinkHref="#ar_svg__c"
			/>
			<use
				height="100%"
				transform="rotate(180 256 256)"
				width="100%"
				xlinkHref="#ar_svg__c"
			/>
			<use
				height="100%"
				transform="rotate(-90 256 256)"
				width="100%"
				xlinkHref="#ar_svg__c"
			/>
			<circle
				cx={256}
				cy={256}
				fill="#f6b40e"
				r={28.4}
				stroke="#85340a"
				strokeWidth={1.5}
			/>
			<path
				d="M265.7 250c-2 0-3.8.8-4.9 2.5 2.2 2 7 2.2 10.3-.2a7.5 7.5 0 0 0-5.4-2.4zm0 .4c1.9 0 3.6.8 3.9 1.7-2.2 2.4-5.7 2.2-7.9.4 1-1.5 2.5-2.1 4-2.1z"
				fill="#843511"
				id="ar_svg__h"
				strokeWidth={1}
			/>
			<use
				height="100%"
				transform="matrix(-1 0 0 1 512.3 0)"
				width="100%"
				xlinkHref="#ar_svg__d"
			/>
			<use
				height="100%"
				transform="matrix(-1 0 0 1 512.3 0)"
				width="100%"
				xlinkHref="#ar_svg__e"
			/>
			<use
				height="100%"
				transform="translate(19.3)"
				width="100%"
				xlinkHref="#ar_svg__f"
			/>
			<use
				height="100%"
				transform="matrix(-1 0 0 1 512.3 0)"
				width="100%"
				xlinkHref="#ar_svg__g"
			/>
			<path
				d="M251.6 260a2 2 0 1 0 2 3c.8.6 1.8.6 2.4.6h.3c.5 0 1.6 0 2.3-.6.4.5 1 .8 1.6.8a2 2 0 0 0 .4-3.9c.5.2.9.7.9 1.3a1.3 1.3 0 0 1-2.7 0 3 3 0 0 1-2.7 1.8 3.3 3.3 0 0 1-2.7-1.8c0 .7-.6 1.3-1.3 1.3a1.3 1.3 0 0 1-.4-2.6zm2.2 5.8c-2.2 0-3 2-5 3.3 1-.5 2-1.3 3.5-2.2 1.5-.9 2.8.2 3.7.2.9 0 2.2-1.1 3.7-.2 1.5.9 2.4 1.7 3.5 2.2-2-1.4-2.8-3.3-5-3.3a6 6 0 0 0-2.2.6c-1-.4-1.8-.6-2.2-.6z"
				fill="#85340a"
			/>
			<path
				d="M253 268.3c-.8 0-2 .3-3.6.8 4-1 4.8.4 6.6.4 1.7 0 2.6-1.3 6.6-.4-4.4-1.4-5.3-.5-6.6-.5-.9 0-1.5-.3-3-.3z"
				fill="#85340a"
			/>
			<path
				d="M249.6 269h-.8c4.6.5 2.4 3.1 7.2 3.1 4.8 0 2.6-2.6 7.2-3-4.8-.5-3.3 2.4-7.2 2.4-3.7 0-2.6-2.5-6.4-2.5z"
				fill="#85340a"
			/>
			<path d="M260 276.1a4 4 0 0 0-8 0 4 4 0 0 1 8 0z" fill="#85340a" />
			<path
				d="M238.3 249.9c5-4.4 11.4-5 14.9-1.8a8.6 8.6 0 0 1 1.6 3.7c.5 2.5-.3 5.2-2.3 8 .3 0 .7.1 1 .4 1.7-3.4 2.3-6.8 1.7-10l-.7-2.5c-4.8-4-11.4-4.4-16.2 2.2z"
				fill="#85340a"
				id="ar_svg__e"
				strokeWidth={1}
			/>
			<path
				d="M246.2 248.6c2.8 0 3.5.6 4.8 1.7 1.3 1.1 2 .9 2.2 1.1.2.2 0 .9-.4.7-.5-.3-1.4-.7-2.7-1.8-1.3-1-2.6-1-4-1-3.8 0-6 3.2-6.5 3-.4-.2 2.2-3.7 6.6-3.7z"
				fill="#85340a"
				id="ar_svg__d"
				strokeWidth={1}
			/>
			<use
				height="100%"
				transform="translate(-19.6)"
				width="100%"
				xlinkHref="#ar_svg__h"
			/>
			<circle
				cx={246.3}
				cy={252.1}
				fill="#85340a"
				id="ar_svg__f"
				r={2}
				strokeWidth={1}
			/>
			<path
				d="M241 253.4c3.7 2.8 7.4 2.6 9.6 1.3 2.2-1.3 2.2-1.8 1.7-1.8-.4 0-.9.5-2.6 1.4-1.8.8-4.4.8-8.8-1z"
				fill="#85340a"
				id="ar_svg__g"
				strokeWidth={1}
			/>
		</Box>
	);
}
