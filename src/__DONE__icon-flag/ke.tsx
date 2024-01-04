import clsx from "clsx";
import { Box } from "../__DONE__box";
import { type Sprinkles, sprinkles } from "../__DONE__sprinkles/index.css";
import { flagStyles } from "./styles.css";

export function FlagKe({
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
				<path
					d="m-28.6 47.5 1.8 1 46.7-81c2.7-.6 4.2-3.2 5.7-5.8 1-1.8 5-8.7 6.7-17.7a58 58 0 0 0-11.9 14.7c-1.5 2.6-3 5.2-2.3 7.9z"
					id="ke_svg__a"
					strokeMiterlimit={10}
				/>
			</defs>
			<path d="M0 0h512v512H0z" fill="#fff" />
			<path d="M0 0h512v153.6H0z" />
			<path d="M0 358.4h512V512H0z" fill="#060" />
			<g id="ke_svg__b" transform="matrix(3.2 0 0 3.2 255.8 256)">
				<use
					height="100%"
					stroke="#000"
					width="100%"
					xlinkHref="#ke_svg__a"
				/>
				<use
					fill="#fff"
					height="100%"
					width="100%"
					xlinkHref="#ke_svg__a"
				/>
			</g>
			<use
				height="100%"
				transform="matrix(-1 0 0 1 511.7 0)"
				width="100%"
				xlinkHref="#ke_svg__b"
			/>
			<path
				d="M255.8 102.4c-19.2 0-51.2 51.2-60.8 76.8H0v153.6h195c9.7 25.6 41.7 76.8 60.9 76.8 19.2 0 51.2-51.2 60.8-76.8H512V179.2H316.6c-9.6-25.6-41.6-76.8-60.8-76.8z"
				fill="#b00"
			/>
			<path
				d="M316.6 332.8a220 220 0 0 0 16-76.8 220 220 0 0 0-16-76.8 220 220 0 0 0-16 76.8 220 220 0 0 0 16 76.8"
				id="ke_svg__c"
			/>
			<use
				height="100%"
				transform="matrix(-1 0 0 1 511.7 0)"
				width="100%"
				xlinkHref="#ke_svg__c"
			/>
			<g fill="#fff" transform="matrix(3.2 0 0 3.2 255.8 256)">
				<ellipse rx={4} ry={6} />
				<path d="M1 5.8s4 8 4 21-4 21-4 21z" id="ke_svg__d" />
				<use
					height="100%"
					transform="scale(-1)"
					width="100%"
					xlinkHref="#ke_svg__d"
				/>
				<use
					height="100%"
					transform="scale(-1 1)"
					width="100%"
					xlinkHref="#ke_svg__d"
				/>
				<use
					height="100%"
					transform="scale(1 -1)"
					width="100%"
					xlinkHref="#ke_svg__d"
				/>
			</g>
		</Box>
	);
}
