import clsx from "clsx";

import { utilCss } from "../../../styles/utils/util_css";
import { Box } from "../../box";
import { flagStyles } from "../styles.css";

import type { UtilCssArgs } from "../../../styles/utils/util_css";

export function FlagPt({
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
			<path d="M204.8 0H512v512H204.7z" fill="red" />
			<path d="M0 0h204.8v512H-.1z" fill="#060" />
			<g
				fill="#ff0"
				fillRule="evenodd"
				stroke="#000"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={0.6}
			>
				<path
					d="M293.8 326.6c-34.4-1-192-99.4-193-115.1l8.6-14.5C125 219.7 286.2 315.4 302 312l-8.2 14.6"
					strokeWidth={0.7}
				/>
				<path
					d="M107.6 195c-3.1 8.3 41.1 35.6 94.3 68 53.2 32.3 99 52.3 102.5 49.5l1.5-2.9c-.6 1-2.2 1.3-4.6.6-14.4-4.2-51.9-21.4-98.3-49.5s-86.8-54.1-93-65.1a6.7 6.7 0 0 1-.7-3.3h-.2l-1.3 2.3-.2.4zm187 132c-.6 1.1-1.7 1.1-3.7 1-12.9-1.5-52-20.5-98-48.1-53.8-32.2-98.2-61.5-93.3-69.1l1.3-2.4.2.1c-4.3 13 87.6 65.5 93 68.9 53.1 33 98 52.2 102 47.2l-1.5 2.4z"
					strokeWidth={0.7}
				/>
				<path
					d="M205 221c34.3-.3 76.8-4.7 101.2-14.4L301 198c-14.5 8-57.1 13.3-96.3 14-46.4-.4-79.1-4.7-95.5-15.7l-5 9.1c30.2 12.7 61 15.5 100.8 15.6"
					strokeWidth={0.7}
				/>
				<path
					d="M307.7 206.8c-.9 1.3-16.8 6.8-40.3 10.8a416 416 0 0 1-62.6 4.6 444.3 444.3 0 0 1-60-3.8c-24.5-3.9-37.3-9.3-42-11.2l1.2-2.3a186 186 0 0 0 41.3 11 438.9 438.9 0 0 0 59.5 3.7 417.8 417.8 0 0 0 62.1-4.6c24-3.9 37.2-8.9 39-11.2l1.8 3zM303 198c-2.6 2-15.6 6.7-38.4 10.3a414 414 0 0 1-59.5 4.2 400 400 0 0 1-57.4-3.7c-23.3-3-35.6-8.5-40-10.1l1.3-2.3c3.4 1.8 15.4 6.6 39 10a423 423 0 0 0 57.1 3.5 408.6 408.6 0 0 0 59-4.2c23-3.2 35.4-9 37.3-10.5l1.6 2.8zM92 262.4c21.2 11.4 68.1 17.2 112.6 17.6 40.5 0 93.3-6.3 113-16.8l-.6-11.4c-6.1 9.7-62.6 19-112.8 18.6-50.2-.4-96.8-8.2-112.3-18.2v10.2"
					strokeWidth={0.7}
				/>
				<path
					d="M318.7 260.8v2.7c-3 3.6-21.6 9-44.9 12.7a463.2 463.2 0 0 1-69.7 4.8c-27.4 0-49.2-2-66.2-4.6a164.8 164.8 0 0 1-47.3-12.7v-3.2c10.4 6.9 38.3 11.9 47.7 13.4 16.8 2.6 38.5 4.5 65.8 4.5 28.7 0 51.7-2 69.3-4.7 16.8-2.4 40.6-8.7 45.3-12.9zm0-9.7v2.8c-3 3.5-21.6 8.9-44.9 12.6a463.2 463.2 0 0 1-69.7 4.8c-27.4 0-49.2-2-66.1-4.5A165 165 0 0 1 90.6 254v-3.2c10.4 6.9 38.3 12 47.7 13.4 16.9 2.6 38.6 4.6 65.8 4.6 28.7 0 51.7-2 69.3-4.8 16.8-2.4 40.6-8.7 45.3-12.9zm-114.2 73.5c-48.6-.3-90.3-13.2-99.1-15.4l6.4 10c15.5 6.6 56.2 16.4 93.2 15.3s69.3-4 92-15l6.6-10.5c-15.5 7.3-68.3 15.6-99 15.6"
					strokeWidth={0.7}
				/>
				<path d="M299.5 317.1a152.6 152.6 0 0 1-3 4.4 258.9 258.9 0 0 1-34.7 8.9 315 315 0 0 1-57.2 5.2c-43.1-.6-78.4-9-95-16.2l-1.4-2.3.3-.4 2.2.9a305.5 305.5 0 0 0 94.1 15.5c20 .1 40-2.3 56.1-5.1 24.8-5 34.8-8.7 37.9-10.4l.7-.5zm5.7-9.4h.1a302 302 0 0 1-2.2 3.8c-5.7 2-21.3 6.6-44 9.8-15 2-24.3 4-54 4.6a371 371 0 0 1-100.5-15l-1.2-2.5a424.4 424.4 0 0 0 101.7 15c27.2-.6 38.8-2.6 53.6-4.7 26.5-4 39.8-8.4 43.8-9.7a3 3 0 0 0-.1-.2l2.8-1.1z" />
				<path
					d="M305.8 253.4c.2 32-16.2 60.8-29.4 73.5a106 106 0 0 1-72.3 30c-32.3.6-62.7-20.5-70.9-29.7-16-18.1-29-41-29.4-72 2-35 15.7-59.3 35.6-76a106.3 106.3 0 0 1 68.4-24.2c25.4.7 55.2 13.2 75.7 38 13.4 16.2 19.3 33.8 22.3 60.5zM204.4 143.8c62 0 113 50.5 113 112.3a113 113 0 0 1-113 112.3c-62 0-112.6-50.4-112.6-112.3s50.6-112.3 112.6-112.3"
					strokeWidth={0.7}
				/>
				<path
					d="M204.7 143.4c62 0 112.6 50.7 112.6 112.7s-50.6 112.7-112.6 112.7A113 113 0 0 1 92 256a113 113 0 0 1 112.7-112.7zM94.5 256.1c0 60.6 49.8 110.2 110.2 110.2 60.4 0 110.1-49.6 110.1-110.2S265.1 146 204.7 146A110.6 110.6 0 0 0 94.5 256.1z"
					strokeWidth={0.7}
				/>
				<path
					d="M204.8 152.8c56.5 0 103.1 46.5 103.1 103.2 0 56.8-46.6 103.2-103.1 103.2A103.6 103.6 0 0 1 101.5 256c0-56.7 46.6-103.2 103.2-103.2zM104 256c0 55.4 45.5 100.7 100.8 100.7 55.2 0 100.7-45.3 100.7-100.7 0-55.4-45.5-100.7-100.8-100.7S104 200.6 104 256z"
					strokeWidth={0.7}
				/>
				<path d="M209.3 143h-9.7v226.4h9.7z" strokeWidth={0.7} />
				<path
					d="M208.3 141.7h2.5v229h-2.5v-229zm-9.6 0h2.5v229h-2.5v-229z"
					strokeWidth={0.7}
				/>
				<path
					d="M317.4 260.5V252l-6.8-6.3-38.7-10.3-55.8-5.7-67 3.4-47.9 11.4-9.6 7.2v8.3l24.4-11 58-9h55.8l41 4.5 28.4 6.9z"
					strokeWidth={0.7}
				/>
				<path
					d="M204.7 238.7a394 394 0 0 1 72.9 6.5c21.1 4.2 36 9.5 41 15.4v3c-6-7.4-26-12.8-41.5-16-20.3-3.9-46-6.4-72.4-6.4-28 0-54 2.7-74 6.6-16 3.2-37.4 9.5-40.1 15.8v-3c1.5-4.4 17.4-10.9 39.8-15.4a405 405 0 0 1 74.3-6.5zm0-9.7a396 396 0 0 1 73 6.5c21 4.2 36 9.5 41 15.5v2.9c-6.1-7.4-26.2-12.8-41.6-15.9-20.3-4-46-6.5-72.4-6.5a402 402 0 0 0-73.8 6.6c-15.5 3-37.8 9.6-40.3 15.8v-3c1.5-4.3 17.8-11 39.8-15.3a405 405 0 0 1 74.3-6.6zm-.5-49.3c41.9-.2 78.5 5.9 95.2 14.5l6.1 10.5c-14.5-7.8-54-16-101.3-14.7-38.5.2-79.6 4.2-100.3 15.2l7.3-12.2c17-8.8 57-13.2 93-13.3"
					strokeWidth={0.7}
				/>
				<path
					d="M204.7 188.4c24 0 47 1.3 65.4 4.6 17.1 3.2 33.5 8 35.8 10.6l1.8 3.2c-5.7-3.7-19.8-7.9-38-11.3a367.2 367.2 0 0 0-65-4.5c-27 0-48 1.3-66 4.5-19 3.5-32.2 8.6-35.5 11l1.8-3.3c6.3-3.3 16.4-7.2 33.3-10.2 18.6-3.4 39.7-4.4 66.4-4.6zm0-9.6a371 371 0 0 1 63.1 4.4c13.9 2.7 27.6 6.9 32.7 10.6l2.6 4.2c-4.5-5-21.4-9.7-36.4-12.3-17.4-3-39.1-4.2-62-4.4-24 0-46.2 1.5-63.4 4.6-16.4 3.2-27 6.9-31.5 9.8l2.3-3.6c6.2-3.2 16.2-6.2 28.8-8.7 17.3-3.1 39.7-4.6 63.8-4.6zm56 124.1a293.3 293.3 0 0 0-56-4.2c-69.9.8-92.4 14.3-95.2 18.4l-5.2-8.5C122 295.7 160 288.5 205 289.2c23.3.4 43.4 2 60.4 5.2l-4.8 8.5"
					strokeWidth={0.7}
				/>
				<path d="M204.3 297.5c19.4.3 38.5 1 57 4.5l-1.4 2.4a297.6 297.6 0 0 0-55.5-4.3c-25.8-.2-52 2.2-74.6 8.7-7.2 2-19 6.6-20.3 10.4l-1.3-2.2c.4-2.2 7.6-6.9 21-10.6 26-7.5 50.3-8.7 75-9zm.9-9.8a351 351 0 0 1 61.1 5.3l-1.4 2.5a319 319 0 0 0-59.6-5.2c-25.9 0-53.3 1.9-78.3 9.1-8 2.4-22 7.4-22.4 11.4l-1.3-2.3c.3-3.6 12.3-8.4 23.2-11.6a285 285 0 0 1 78.7-9.2z" />
				<path
					d="m304.4 309.9-8.4 13-24.1-21.4-62.6-42-70.5-38.8-36.7-12.5 7.8-14.5 2.7-1.4 22.8 5.7 75 38.7 43.3 27.3 36.3 26 14.8 17.1z"
					strokeWidth={0.7}
				/>
				<path
					d="M100.8 208.5c6.5-4.3 53.7 16.7 103 46.5 49.3 29.9 96.4 63.6 92.2 70l-1.4 2.1-.7.5c.2 0 .9-1 0-3.3-2.2-6.9-35.5-33.5-91-67-54-32.2-99-51.6-103.5-46l1.4-2.8zm205.3 101.2c4-8-39.7-41-94-73.1-55.5-31.5-95.6-50-102.9-44.5l-1.6 3c0 .1 0-.2.4-.5 1.3-1.1 3.5-1 4.5-1 12.6.1 48.6 16.6 99 45.6 22.1 12.8 93.4 58.6 93.1 71.4 0 1.1.1 1.3-.3 1.9l1.8-2.8z"
					strokeWidth={0.7}
				/>
			</g>
			<g transform="translate(-68.3 28.4) scale(1.13778)">
				<path
					d="M180.6 211a58.7 58.7 0 0 0 17.5 41.7 59 59 0 0 0 41.8 17.6 59.4 59.4 0 0 0 42-17.4 59 59 0 0 0 17.4-41.8v-79.2l-118.7-.2V211z"
					fill="#fff"
					stroke="#000"
					strokeWidth={0.7}
				/>
				<path
					d="M182.8 211.1a56.4 56.4 0 0 0 16.8 40 57 57 0 0 0 40.2 16.8 56.9 56.9 0 0 0 40.2-16.6 56.4 56.4 0 0 0 16.7-40v-77H183v76.8m91-53.7v48.9l-.1 5.1a33.2 33.2 0 0 1-10 24 34 34 0 0 1-24 10c-9.4 0-17.7-4-23.9-10.2a34 34 0 0 1-10-24v-54l68 .2z"
					fill="red"
					stroke="#000"
					strokeWidth={0.5}
				/>
				<g id="pt_svg__e">
					<g
						fill="#ff0"
						id="pt_svg__d"
						stroke="#000"
						strokeWidth={0.5}
					>
						<path
							d="M190.2 154.4c.1-5.5 4-6.8 4-6.8.1 0 4.3 1.4 4.3 6.9h-8.3"
							stroke="none"
						/>
						<path d="m186.8 147.7-.7 6.3h4.2c0-5.2 4-6 4-6 .1 0 4 1.1 4.1 6h4.2l-.8-6.4h-15zm-1 6.4h17c.3 0 .6.3.6.7 0 .5-.3.8-.6.8h-17c-.3 0-.6-.3-.6-.8 0-.4.3-.7.7-.7z" />
						<path d="M192 154c0-3.3 2.3-4.2 2.3-4.2s2.3 1 2.3 4.2H192m-5.8-9h16.3c.3 0 .6.4.6.8 0 .3-.3.6-.6.6h-16.3c-.3 0-.6-.3-.6-.7 0-.3.3-.6.6-.6zm.4 1.5H202c.3 0 .6.3.6.7 0 .4-.3.7-.6.7h-15.5c-.4 0-.6-.3-.6-.7 0-.4.2-.7.6-.7zm5-10.6h1.2v.8h.9v-.8h1.3v.9h.9v-1h1.2v2c0 .4-.2.6-.5.6h-4.4c-.3 0-.6-.2-.6-.5v-2zm4.6 2.7.3 6.4h-4.3l.3-6.5h3.7" />
						<path d="M191 141.6v3.4h-4v-3.4h4z" id="pt_svg__a" />
						<use
							height="100%"
							width="100%"
							x={10.6}
							xlinkHref="#pt_svg__a"
						/>
						<path
							d="M186.3 139h1.2v1h.9v-1h1.2v1h.9v-1h1.2v2c0 .4-.2.6-.5.6h-4.3a.6.6 0 0 1-.6-.6v-2z"
							id="pt_svg__b"
						/>
						<use
							height="100%"
							width="100%"
							x={10.6}
							xlinkHref="#pt_svg__b"
						/>
						<path
							d="M193.9 140.6c0-.6.9-.6.9 0v1.6h-.9v-1.6"
							fill="#000"
							stroke="none"
						/>
						<path
							d="M188.6 142.8c0-.6.8-.6.8 0v1.2h-.8v-1.2"
							fill="#000"
							id="pt_svg__c"
							stroke="none"
						/>
						<use
							height="100%"
							width="100%"
							x={10.6}
							xlinkHref="#pt_svg__c"
						/>
					</g>
					<use
						height="100%"
						width="100%"
						xlinkHref="#pt_svg__d"
						y={46.3}
					/>
					<use
						height="100%"
						transform="rotate(-45.2 312.8 180)"
						width="100%"
						xlinkHref="#pt_svg__d"
					/>
				</g>
				<use
					height="100%"
					width="100%"
					x={45.7}
					xlinkHref="#pt_svg__d"
				/>
				<use
					height="100%"
					transform="matrix(-1 0 0 1 479.8 0)"
					width="100%"
					xlinkHref="#pt_svg__e"
				/>
				<g fill="#fff" id="pt_svg__f">
					<path
						d="M232.6 202.4a8.3 8.3 0 0 0 2.2 5.7 7.2 7.2 0 0 0 5.3 2.4c2.1 0 4-1 5.3-2.4a8.3 8.3 0 0 0 2.2-5.7v-10.8h-15v10.8"
						fill="#039"
					/>
					<circle cx={236.1} cy={195.7} r={1.5} />
					<circle cx={244.4} cy={195.7} r={1.5} />
					<circle cx={240.2} cy={199.7} r={1.5} />
					<circle cx={236.1} cy={203.9} r={1.5} />
					<circle cx={244.4} cy={203.9} r={1.5} />
				</g>
				<use
					height="100%"
					width="100%"
					xlinkHref="#pt_svg__f"
					y={-26}
				/>
				<use
					height="100%"
					width="100%"
					x={-20.8}
					xlinkHref="#pt_svg__f"
				/>
				<use
					height="100%"
					width="100%"
					x={20.8}
					xlinkHref="#pt_svg__f"
				/>
				<use
					height="100%"
					width="100%"
					xlinkHref="#pt_svg__f"
					y={25.8}
				/>
			</g>
		</Box>
	);
}
