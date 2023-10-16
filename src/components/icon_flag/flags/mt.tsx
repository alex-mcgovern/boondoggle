import clsx from "clsx";

import { utilCss } from "../../../styles/utils/util_css.css";
import { Box } from "../../box";
import { flagStyles } from "../styles.css";

import type { UtilCssArgs } from "../../../styles/utils/util_css.css";

export function FlagMt({
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
			<g fillRule="evenodd" strokeWidth="1pt">
				<path d="M256 0h256v512H256z" fill="#ce0000" />
				<path d="M0 0h256v512H0z" fill="#fff" />
			</g>
			<g transform="matrix(.35005 0 0 .35003 40.7 -25.5)">
				<path
					d="M183.1 381.7c0 2.3-2.6 4.2-5.8 4.2-3.3 0-5.9-2-5.9-4.2 0-2.3 2.6-4.2 5.8-4.2s6 1.9 6 4.2z"
					fill="#f1eeee"
					fillRule="evenodd"
				/>
				<path
					d="M0 361.4v106.3h106.4a38.1 38.1 0 0 0 35.4 35.5v106.3h106.3V503.2a38.1 38.1 0 0 0 35.4-35.5h106.3V361.4H283.5a38.1 38.1 0 0 0-35.4-35.4V219.7H141.8V326a38.1 38.1 0 0 0-35.4 35.4H0z"
					fill="#c00"
					fillRule="evenodd"
				/>
				<path
					d="M3.6 365v99.2h106.3a38.1 38.1 0 0 0 35.4 35.4V606h99.2V499.6a38.1 38.1 0 0 0 35.5-35.4h106.3V365H280a38.1 38.1 0 0 0-35.5-35.5V223.2h-99.2v106.3A38.1 38.1 0 0 0 110 365H3.6z"
					fill="#ffe600"
					fillRule="evenodd"
				/>
				<path
					d="M7 368.5v92.1h106.3a38.1 38.1 0 0 0 35.5 35.5v106.3h92.1V496a38.1 38.1 0 0 0 35.4-35.5h106.3v-92H276.3A38.1 38.1 0 0 0 241 333V226.8h-92.1V333a38.1 38.1 0 0 0-35.5 35.4H7z"
					fill="#707070"
					fillRule="evenodd"
				/>
				<path
					d="M10.6 372v85h106.3a38.1 38.1 0 0 0 35.4 35.5v106.3h85V492.5a38.1 38.1 0 0 0 35.5-35.4H379v-85H272.8a38.1 38.1 0 0 0-35.4-35.5V230.3h-85v106.3a38.1 38.1 0 0 0-35.5 35.4H10.6z"
					fill="#a0a0a0"
					fillRule="evenodd"
				/>
				<g fillRule="evenodd">
					<path
						d="M153.2 327.8c6.3 6.3 1.2 21.4-11.2 33.9s-27.6 17.5-33.9 11.2c-6.2-6.2-1.1-21.3 11.3-33.8s27.6-17.5 33.8-11.3z"
						fill="#d0d0d0"
					/>
					<path
						d="M145.7 335.3c6.3 6.3 4.6 18-3.7 26.3s-20.1 10-26.3 3.8c-6.3-6.2-4.6-18 3.7-26.3s20.1-10 26.3-3.8z"
						fill="gray"
					/>
					<path
						d="m114.4 354.1 2.5-2.5 10 5-5-10 2.5-2.5 10 20-20-10zm15-15 2.5-2.5 15 15-2.4 2.5z"
						fill="#d0d0d0"
					/>
				</g>
				<g fillRule="evenodd">
					<path
						d="M281.6 373c-6.2 6.2-21.4 1.1-33.8-11.3s-17.5-27.6-11.3-33.9c6.3-6.2 21.4-1.1 33.8 11.3s17.5 27.6 11.3 33.8z"
						fill="#d0d0d0"
					/>
					<path
						d="M274.1 365.4c-6.2 6.2-18 4.6-26.3-3.7s-10-20.1-3.8-26.3 18-4.6 26.3 3.7 10 20 3.8 26.3z"
						fill="gray"
					/>
					<path
						d="m255.3 334 2.5 2.6-5 10 10-5 2.5 2.5-20 10 10-20zm15 15.1 2.5 2.5-15 15-2.5-2.4z"
						fill="#d0d0d0"
					/>
				</g>
				<g fillRule="evenodd">
					<path
						d="M236.5 501.3c-6.2-6.2-1.1-21.4 11.3-33.8s27.6-17.5 33.8-11.3c6.2 6.2 1.2 21.4-11.3 33.8s-27.5 17.5-33.8 11.3z"
						fill="#d0d0d0"
					/>
					<path
						d="M244 493.8c-6.2-6.2-4.5-18 3.8-26.3s20-10 26.3-3.8c6.2 6.3 4.5 18-3.8 26.3s-20 10-26.3 3.8z"
						fill="gray"
					/>
					<path
						d="m275.4 475-2.5 2.5-10-5 5 10-2.6 2.5-10-20 20 10zm-15 15-2.6 2.5-15-15 2.5-2.5z"
						fill="#d0d0d0"
					/>
				</g>
				<g fillRule="evenodd">
					<path
						d="M108.2 456.2c6.2-6.2 21.3-1.2 33.8 11.3s17.5 27.6 11.3 33.8c-6.3 6.2-21.4 1.2-33.9-11.3s-17.5-27.6-11.2-33.8z"
						fill="#d0d0d0"
					/>
					<path
						d="M115.7 463.7c6.2-6.2 18-4.5 26.3 3.8s10 20 3.7 26.3c-6.2 6.2-18 4.5-26.3-3.8s-10-20-3.7-26.3z"
						fill="gray"
					/>
					<path
						d="m134.4 495-2.5-2.5 5-10-10 5-2.5-2.5 20-10-10 20zm-15-15-2.5-2.5 15-15 2.5 2.5z"
						fill="#d0d0d0"
					/>
				</g>
				<path
					d="M269.3 414.6c0 41-34.1 74.4-76.2 74.4S117 455.7 117 414.6s34.1-74.4 76.2-74.4 76.2 33.3 76.2 74.4z"
					fill="none"
					stroke="#707070"
					strokeWidth="1pt"
					transform="matrix(.97674 0 0 1 6.3 0)"
				/>
				<path
					d="M269.3 414.6c0 41-34.1 74.4-76.2 74.4S117 455.7 117 414.6s34.1-74.4 76.2-74.4 76.2 33.3 76.2 74.4z"
					fill="none"
					stroke="#707070"
					strokeWidth="1pt"
					transform="matrix(.74419 0 0 .7619 51.2 98.7)"
				/>
				<path
					d="M170 474.8a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0zm56.8 0a3.5 3.5 0 1 1-7.1 0 3.5 3.5 0 0 1 7 0zm-34.3 0v3.7h-4.7c-4.7 0-4.7 3.7 0 3.7h4.7v3.7c0 3.8 4.2 4.3 4.5.3l.3-4h4.7c4.7 0 4.7-3.7 0-3.7h-4.7v-3.7c0-3.7-4.8-3.7-4.8 0z"
					fill="#d0d0d0"
					fillRule="evenodd"
				/>
				<path
					d="M180.7 163v7s-3.3 5.5-24.8 7.2-24.8 0-24.8 0c.6 6.1 4.7 17.9 3.5 31.9.9 16.2-4 31-4 31 .5.8-2 1.3-6.6.8 3.6-3.5 3.1-13.8 3.6-28.3.4-14.6-13.6-36.5-10.7-42.5s63.8-7.1 63.8-7.1z"
					fill="#d0d0d0"
					fillRule="evenodd"
					stroke="#707070"
					strokeWidth="1pt"
					transform="matrix(.33032 0 0 .29556 117.6 374.3)"
				/>
				<path
					d="M272.8 162.3c20.9-1.1 55.9-.9 55.9-.9s8.3 18.5 7.9 28.7-3.2 19-7 14.6 1.7-3.5 2.4-14.6c.7-11-6.6-22.4-6.6-22.4s-15 7.3-37.5 5.8-12.5-10.8-15-11.2z"
					fill="#d0d0d0"
					fillRule="evenodd"
					stroke="#707070"
					strokeWidth="1pt"
					transform="matrix(.33032 0 0 .29556 115.2 366.9)"
				/>
				<path
					d="M312.2 274c20.9-1.2 34.6 2.4 34.6 2.4s8.2 18.5 7.9 28.7-3.2 19-7.1 14.6 1.8-3.5 2.5-14.6c.7-11-6.7-22.5-6.7-22.5s-15 7.3-37.4 5.9c-22.5-1.5-16.1-3-18.6-3.4s-3.2 7-37.2 8-51.4-8-51.4-8-3.4 5.4-24.8 7-24.8 0-24.8 0c.5 6.2 4.7 18 3.5 32 .8 16.2-4 31-4 31 .5.8-2.1 1.3-6.6.8 3.5-3.5 3.1-13.8 3.5-28.3C146 313 132.1 291 135 285s18.3-.4 21.3-3.6c2.9-3.1-13.8-25.3-10.7-46 3.2-20.8 20.8-15 42.6-14.2 21.7.7 69.8 7 81.5 0 11.6-7 6.5-33 17.6-49.6a32.2 32.2 0 0 1 28.4-14.2c7 0 17.7 28.4 17.7 35.4l-3.5 3.6h-3.6v3.5c-8 1-9.2-7.7-14.1-14.1-2.2 10 7 42.5 7 63.7 0 17.8-6.6 25.6-7 24.3z"
					fill="#d0d0d0"
					fillRule="evenodd"
					stroke="#707070"
					strokeWidth="1pt"
					transform="matrix(.33032 0 0 .29556 104.6 339.3)"
				/>
				<path
					d="M209 131.1c.4 7-27.3 22.9-29.6 29.2s7 9.7 4.2 13.3c-2.9 3.6-5.2 2.2-5.8 2.9-.6.7-10.4-24.6-10.4-24.6s26-13 25-18.7-19.2-9-22.6-23.3c-3.3-14.2-1.4-41.7-4.1-47.5C163 56.7 131 51.2 131 42.5s33-32.5 36.4-36c3.5-3.6 7 3.5 3.5 7-3.5 3.6-29.2 25.5-29.2 29 0 3.6 21.3 7.1 28.4 7.1 7 0 10.6-3.5 10.6-7 0-3.1-7-3.6-7-10.7s3.5-10.6 10.6-10.6c3.5 0 10.3 4.5 10.6 10.6.3 6-6.3 6.6-7.1 10.6-.8 4 7 7.1 14.2 7.1 7 0 31.3 20.6 34.8 24.2 3.5 3.5 7 3.5 3.5 7-3.5 3.6-1.4 7.8-5 4.2-3-3.4-3.5-7-3.5-7-.3-3.3-26.3-17.8-29.8-14.2-3.6 3.5 0 46 0 49.6 0 7 7.3 7 7 17.7z"
					fill="#d0d0d0"
					fillRule="evenodd"
					stroke="#707070"
					strokeWidth="1pt"
					transform="matrix(.33032 0 0 .29556 116.1 372.4)"
				/>
				<path
					d="M170.2 386.9h14v14.7h-14z"
					fill="#a7a7a7"
					fillRule="evenodd"
				/>
				<rect
					fill="gray"
					fillRule="evenodd"
					height={1.1}
					rx={1.3}
					ry={0.6}
					transform="matrix(.5544 .83225 -.88236 .47057 0 0)"
					width={87.5}
					x={405.6}
					y={64.6}
				/>
				<path
					d="M180.7 42.5a7 7 0 1 1-14.2 0 7 7 0 0 1 14.2 0z"
					fill="#d0d0d0"
					fillRule="evenodd"
					stroke="#707070"
					strokeWidth="1pt"
					transform="matrix(.33032 0 0 .29556 114 362.8)"
				/>
				<path
					d="M214.7 394.4c0 1-5.4 2-11.7 2s-11.7-1-11.7-2c0-.8 5.4 1.3 11.7 1.3s11.7-2.1 11.7-1.3z"
					fill="gray"
					fillRule="evenodd"
				/>
				<path
					d="M171.4 401.6h11.7v4.1h-11.7z"
					fill="#a7a7a7"
					fillRule="evenodd"
				/>
				<path
					d="M209.4 391.2c-1 2.2-2.2 3.7-2.4 3.4-.2-.2.6-2.2 1.7-4.3 1.2-2.1 2.3-3.6 2.4-3.4.2.3-.5 2.2-1.7 4.3zm3 5.5c-1.3 1.2-2.3 2-2.4 1.7 0-.2 1-1.3 2.3-2.5 1.3-1.1 2.4-1.9 2.4-1.6 0 .2-1 1.3-2.3 2.4z"
					fill="gray"
					fillRule="evenodd"
				/>
				<path
					d="M211 394c.9 1.8 1.5 3.3 1.3 3.4-.1 0-1-1.3-2-3-1-1.8-1.6-3.2-1.4-3.3.2 0 1 1.3 2 3zm-1 9.1c0 .3-3.6.5-8.2.5s-8.2-.2-8.2-.5 3.7-.5 8.2-.5c4.6 0 8.2.2 8.2.5zm-26.9-1c0 .3-2.6.5-5.8.5-3.3 0-5.9-.2-5.9-.5s2.6-.5 5.8-.5 6 .2 6 .5z"
					fill="gray"
					fillRule="evenodd"
				/>
				<path
					d="M375.5 172s9 36 47 36.5 51.3-10.8 35.8-30-44-13.1-40.3 3.4-10.8 22-14.2 10.4c-3.4-11.6-17-46 7.5-48.3 24.5-2.3 76.5-14.8 89.5 9.2S486 198.9 507 204c21 5 24-5.8 60-9.1s49.7 11 62 9c12.3-2 10.6-37.2.8-46.1-9.7-9-28.5-10.6-33.3-20.4-4.8-9.8-17.8-1.9-16.6-13s18.5 7.7 18.7 2c0-.2 2.9-3.9 3.5-4.9-2.2-.8-3.5.6-5.1 2 1.8-2.4 1.7-3.5 2.3-5.4-.3-.7-2.5 2.8-2.9 2s2.5-5.6 1.2-3.8c-.4.5-3.8 3.3-3.9 1.4 0-.8 1.8-2.8 1.2-4-.5-.9-3 1.1-3.4 1.3 1.5-3.3 1.4-3.2 0-5.7-1.3-2.4-2.2-2.4-4.3.4.9-4 1.1-4.8-1-6.3-1.6-1.6-1.7-3-3.8 4.1.8-7.6-1.3-8-.4-11.5.5-3.3 3.3-4.7 7.9-4 9 .1 13.7 18 16.6 17.9 3 0 6.2-18.9 18.8-11.3 12.5 7.7 14 9.2 20.4 13.8 6.3 4.5-4.5 11.4-.9 20.4 3.6 9 28.3 38.8 21.3 70-7 31-25 36-26.7 49.5-1.6 13.4 57 8 72 12.5s24.4 23 25 26.2-26.2 2.9-26.2 2.9-13.8-11.8-46.6-13c-32.9-1-45.4-23-57.7-25.8s-38.5 4.7-53.1 3.6c-14.7-1.1-29.5-5-39-7.1-9.5-2.2-56.7 35.4-56.5 44.2-9.9-.7-33-2.7-32.1-1.7 1 1 4.2-17 22.2-20.2 18-3.2 35.7-17.6 35-27-.5-9.5 3.6-42 5-55.8s8.3-20.6 6.7-28c-1.6-7.2-22.2-14.7-42-14.5-19.8.2-41.8 2-45 10-3.2 8-.7 31 3.4 28.3 4-2.6-1-17.7 3.3-20.8a57.3 57.3 0 0 1 25.8-6.2c10.4-.4 28.5 14.7 28.3 19.5-.2 4.9 5.8 21-2.5 27-8.3 6.2-25.3 9-41.6 7.6a71.4 71.4 0 0 1-38.7-16.7c-6-6-9.6-24.1-9.6-25.4z"
					fill="#d0d0d0"
					fillRule="evenodd"
					stroke="gray"
					strokeWidth="1pt"
					transform="matrix(.21598 0 0 .12989 76.3 416.2)"
				/>
				<path
					d="M209.5 431.6a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
					fillRule="evenodd"
				/>
				<path
					d="m253.6 418 4.6 1 7.6-5.3-.6 2.8-4 2.6-2.2 1.4 1.5 2.2 2.5 4-.6 2.6-4.7-8.1-4.6-1 .5-2.2zm-7.7-33.5 8.8-4.1-2.4-5.2 1.2-.5 5.7 12.5-1.2.5-2.4-5.2-8.8 4-1-2zm-13.7-16.7 8.1-7.4 1.6 1.8-.2 12.5 6.4-5.8 1.5 1.6-8.2 7.4-1.6-1.7.3-12.6-6.4 5.9-1.5-1.7zm-35.5-14.3 1.4-11 2.2.4-1.1 9.6 8.5 1-.2 1.3-10.8-1.3zm-17.4 1.6-2-10.8 2.3-.4 1.7 9.5 8.4-1.5.3 1.3-10.7 1.9zM147 371l-.8-1 5.8-4.6 2.5 3.2a16.3 16.3 0 0 1-2 3.2 16 16 0 0 1-2.5 2.6 14.8 14.8 0 0 1-4.1 2.4c-1.4.5-2.6.6-3.7.4s-2-.8-2.7-1.6a4.9 4.9 0 0 1-1-3 6.3 6.3 0 0 1 1-3.6 14.3 14.3 0 0 1 3.2-3.4 13.7 13.7 0 0 1 3-1.8c.9-.4 1.7-.7 2.5-.7s1.4.2 2.1.6l-1.4 1.6a3.7 3.7 0 0 0-1.6-.4c-.5 0-1 .1-1.7.4a9.2 9.2 0 0 0-2.1 1.3c-.8.6-1.5 1.3-2 2l-.9 1.7a4 4 0 0 0 .7 3.7 3.8 3.8 0 0 0 2.2 1.4c.8.2 1.7.1 2.7-.3 1-.4 2-1 2.9-1.6a11.8 11.8 0 0 0 2-2.1c.6-.8 1-1.5 1.2-2l-1.3-1.6-4 3.2zm-.3 79.1-9 6.4-6.8-9.6 1-.7 5.5 7.7 2.8-2-4.7-6.7 1-.7 4.8 6.6 4-2.9 1.4 2zm-13.2-14.3a3.6 3.6 0 0 0 2.5-2.5c.4-1.3.4-2.7 0-4.4a7.3 7.3 0 0 0-2.3-3.8 3.8 3.8 0 0 0-3.6-.7 3.9 3.9 0 0 0-2 1.3 4.5 4.5 0 0 0-1 2.5c-.1 1 0 2 .3 3.1a8 8 0 0 0 2.2 3.8c1 1 2.3 1.1 3.9.7zm.6 2.3c-1.8.5-3.4.1-4.8-1-1.4-1.3-2.4-3-3.1-5.4-.4-1.6-.6-3-.5-4.4s.5-2.5 1.2-3.4a4.7 4.7 0 0 1 2.5-1.8 4.7 4.7 0 0 1 3.2.2 6.5 6.5 0 0 1 2.8 2.4 12.8 12.8 0 0 1 1.8 3.9c.4 1.6.6 3 .4 4.4a6.6 6.6 0 0 1-1.2 3.4 4.4 4.4 0 0 1-2.3 1.7zm.9-22.4-11-.2.2-7.7c0-1.6.1-2.7.3-3.5.3-.8.6-1.5 1.1-2 .5-.4 1.1-.6 1.7-.6.8 0 1.4.4 2 1.2s.8 2 .9 3.7l.6-1.3a9.8 9.8 0 0 1 1.5-2l3-2.9v3l-2.4 2.2-1.5 1.6c-.4.4-.6.8-.8 1.2a4.6 4.6 0 0 0-.3 1v1.3l-.1 2.6 4.8.2v2.3zm-6.1-2.4.1-5-.1-2.4a2.8 2.8 0 0 0-.7-1.4 2 2 0 0 0-1-.5c-.5 0-1 .3-1.2 1a6 6 0 0 0-.6 2.7l-.1 5.5 3.6.1zm30.6-48.4V352l2.2-1.3 11.7 5.9-2.2 1.3-3.5-1.8-6.2 3.7v3.8l-2 1.3zm2-6.5 5-3-3.1-1.7-2.2-1.3.2 2.3v3.7zm53.1-3.4 11.9-5 2 1.5-.7 13-2.2-1.5.4-3.9-6-4.2-3.4 1.5-2-1.4zm6.7-.7 4.8 3.5.3-3.6c.1-1 .2-1.9.4-2.5l-2 1.1-3.5 1.5zm29.5 41 10.7-2.6 1.8 7.5c.3 1.5.5 2.7.5 3.5a4 4 0 0 1-.6 2.1c-.4.6-.8 1-1.4 1.1-.8.2-1.5 0-2.2-.7a8.2 8.2 0 0 1-1.9-3.3c0 .6 0 1-.2 1.4a9.8 9.8 0 0 1-1 2.2l-2.2 3.7-.7-2.8 1.7-2.8 1.1-2c.3-.5.4-1 .5-1.3a4.6 4.6 0 0 0 0-1l-.2-1.3-.7-2.6-4.7 1.1-.5-2.2zm6.5.8 1.1 4.8c.3 1 .5 1.8.8 2.3.3.6.6 1 1 1.2.3.2.7.3 1 .2.5-.1.9-.5 1-1.1a6 6 0 0 0-.1-3l-1.3-5.3-3.5.9z"
					fill="#d0d0d0"
				/>
			</g>
		</Box>
	);
}
