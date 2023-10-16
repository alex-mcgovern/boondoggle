import clsx from "clsx";

import { utilCss } from "../../../styles/utils/util_css.css";
import { Box } from "../../box";
import { flagStyles } from "../styles.css";

import type { UtilCssArgs } from "../../../styles/utils/util_css.css";

export function FlagNz({
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
				<g id="nz_svg__b">
					<g id="nz_svg__a">
						<path d="M0-.3v.5l1-.5z" />
						<path d="M.2.3 0-.1l1-.2z" />
					</g>
					<use transform="scale(-1 1)" xlinkHref="#nz_svg__a" />
					<use transform="rotate(72 0 0)" xlinkHref="#nz_svg__a" />
					<use transform="rotate(-72 0 0)" xlinkHref="#nz_svg__a" />
					<use
						transform="scale(-1 1) rotate(72)"
						xlinkHref="#nz_svg__a"
					/>
				</g>
			</defs>
			<path d="M0 0h512v512H0z" fill="#00247d" fillRule="evenodd" />
			<g transform="translate(-148.7 90.5) scale(.60566)">
				<use
					fill="#fff"
					height="100%"
					transform="matrix(45.4 0 0 45.4 900 120)"
					width="100%"
					xlinkHref="#nz_svg__b"
				/>
				<use
					fill="#cc142b"
					height="100%"
					transform="matrix(30 0 0 30 900 120)"
					width="100%"
					xlinkHref="#nz_svg__b"
				/>
			</g>
			<g transform="rotate(82 418.7 105.1) scale(.60566)">
				<use
					fill="#fff"
					height="100%"
					transform="rotate(-82 519 -457.7) scale(40.4)"
					width="100%"
					xlinkHref="#nz_svg__b"
				/>
				<use
					fill="#cc142b"
					height="100%"
					transform="rotate(-82 519 -457.7) scale(25)"
					width="100%"
					xlinkHref="#nz_svg__b"
				/>
			</g>
			<g transform="rotate(82 418.7 105.1) scale(.60566)">
				<use
					fill="#fff"
					height="100%"
					transform="rotate(-82 668.6 -327.7) scale(45.4)"
					width="100%"
					xlinkHref="#nz_svg__b"
				/>
				<use
					fill="#cc142b"
					height="100%"
					transform="rotate(-82 668.6 -327.7) scale(30)"
					width="100%"
					xlinkHref="#nz_svg__b"
				/>
			</g>
			<g transform="translate(-148.7 90.5) scale(.60566)">
				<use
					fill="#fff"
					height="100%"
					transform="matrix(50.4 0 0 50.4 900 480)"
					width="100%"
					xlinkHref="#nz_svg__b"
				/>
				<use
					fill="#cc142b"
					height="100%"
					transform="matrix(35 0 0 35 900 480)"
					width="100%"
					xlinkHref="#nz_svg__b"
				/>
			</g>
			<path d="M0 0h256v256H0z" fill="#012169" />
			<path
				d="M256 0v32l-95 96 95 93.5V256h-33.5L127 162l-93 94H0v-34l93-93.5L0 37V0h31l96 94 93-94z"
				fill="#fff"
			/>
			<path
				d="m92 162 5.5 17L21 256H0v-1.5zm62-6 27 4 75 73.5V256zM256 0l-96 98-2-22 75-76zM0 .5 96.5 95 67 91 0 24.5z"
				fill="#c8102e"
			/>
			<path d="M88 0v256h80V0zM0 88v80h256V88z" fill="#fff" />
			<path d="M0 104v48h256v-48zM104 0v256h48V0z" fill="#c8102e" />
		</Box>
	);
}
