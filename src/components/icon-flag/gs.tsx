import clsx from "clsx";
import { utilCss } from "../../index.css";
import type { UtilCssArgs } from "../../index.css";
import { Box } from "../box";
import { flagStyles } from "./styles.css";

export function FlagGs({
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
				<linearGradient id="gs_svg__b">
					<stop offset={0} stopColor="#d5dfff" />
					<stop offset={1} stopColor="#fff" />
				</linearGradient>
				<linearGradient id="gs_svg__a">
					<stop offset={0} stopColor="#474747" />
					<stop offset={1} stopColor="#f50" />
				</linearGradient>
				<linearGradient
					gradientTransform="matrix(1.03296 0 0 .44588 300.5 79.8)"
					gradientUnits="userSpaceOnUse"
					id="gs_svg__c"
					x1={109.3}
					x2={110.9}
					xlinkHref="#gs_svg__a"
					y1={218.5}
					y2={173.4}
				/>
				<linearGradient
					gradientTransform="matrix(.84238 0 0 .54673 300.5 79.8)"
					gradientUnits="userSpaceOnUse"
					id="gs_svg__d"
					x1={125.9}
					x2={126}
					y1={316.4}
					y2={337.2}
				>
					<stop offset={0} stopColor="#b50000" />
					<stop offset={1} stopColor="#ffc500" />
				</linearGradient>
				<linearGradient
					gradientTransform="matrix(.3824 0 0 1.20437 300.5 79.8)"
					gradientUnits="userSpaceOnUse"
					id="gs_svg__e"
					x1={407.9}
					x2={456.4}
					xlinkHref="#gs_svg__b"
					y1={149.4}
					y2={147.4}
				/>
				<linearGradient
					gradientTransform="matrix(.50678 0 0 .9088 300.5 79.8)"
					gradientUnits="userSpaceOnUse"
					id="gs_svg__f"
					x1={215.8}
					x2={229}
					xlinkHref="#gs_svg__a"
					y1={103}
					y2={103}
				/>
				<linearGradient
					gradientTransform="matrix(1.75297 0 0 .26273 300.5 79.8)"
					gradientUnits="userSpaceOnUse"
					id="gs_svg__g"
					x1={117.6}
					x2={78.2}
					xlinkHref="#gs_svg__b"
					y1={1040.4}
					y2={1003.7}
				/>
				<linearGradient
					gradientTransform="matrix(.60628 0 0 .75962 300.5 79.8)"
					gradientUnits="userSpaceOnUse"
					id="gs_svg__h"
					x1={264.7}
					x2={255}
					xlinkHref="#gs_svg__b"
					y1={246}
					y2={226.4}
				/>
			</defs>
			<path d="M0 0h512v512H0Z" fill="#006" />
			<path
				d="M373.4 348.6s-2.3 6-3.6 6c-1.3 0-6-2.5-6-2.5s-3.5 5.5-5.3 5.8c-1.8.4-6.6-.8-6.6-.8s-4.5 0-4.7-.6c-.2-.7.2-2 .2-2s-6.6 5.2-8 4.9c-1.5-.3-6.4-6.5-6.4-6.5l-.8 3.2-9.3-.3-8.2-5.2s-4.6 7.5-4.8 7.3c-.1-.1-8 1.8-8 1.8l-.5-1.4-5.2-3.1s4-5.8 4-6l-1.9-.7-3 2.4-6 4-6-2.8 2.6-5 .3-3.6 4.8-7.1 58-56.4 28.6 52.8z"
				fill="#6a4c2d"
				stroke="#000"
				strokeWidth={0.9}
			/>
			<path
				d="m414.6 352 15-.5-6.3-3.2 57.5-2.2-8.1-3-7.2-9.8-29.8-2.3s-2.3-1.7-6-.8c0-2.3-2.9-5.4-2.9-5.4l-18.3-1.3-11.5 7.8 7.7 19.8z"
				fill="#fff"
				stroke="#000"
				strokeWidth={0.9}
			/>
			<path
				d="m355.8 182.9 1.5-5.2s2.7-4.5 2.7-6.5 2-4.3 2-4.3 6-1.7 7.4 2c6.5-9.9 14.2-.5 14.2-.5l2.1-2.5 4.3-5.3s6.2 5.8 6.3 6.8c0 1 1 .3 1 .3l6.7-.6a8 8 0 0 0 2.6 7.3c2.3 1.4 4.4 9.6 4.4 9.6z"
				fill="url(#gs_svg__c)"
				stroke="#000"
				strokeWidth={0.9}
			/>
			<path
				d="M414.6 244.4c1.2-.7 4.8-1.8 4.3-7.2-.4-5.3-5-5.9-7.6-5.7a9.2 9.2 0 0 0-4.9 2.4l-8.5-5.4s4.3-27 8.8-28.6c4.3-3.1 5-4.4 5-5.1 0-.8-1.5-2.5-1.5-2.5l-27.8-3.3-26.3 3s-2 3.2-1.7 4.4c.2 1.3.3 2.6 5 6.2 5.2 4 8.8 27 8.8 27s-7.4 3.6-7.8 3.2c-.5-.4-2.7-.9-3.8-.7-1.2.2-5 2.1-5 7.2 0 5 3.8 8 3.8 8s25.1-3 28.9 4c3.6-8.4 27.5-5.5 30.3-6.9z"
				fill="#656263"
				stroke="#000"
				strokeWidth={0.9}
			/>
			<path
				d="M441.6 216.5s.3-3 2.4-4.3c2-1.4 16-2.1 19.3 0 3.4 2 4.6 12.3 4.6 12.3s2 3.7 2.2 6.3l.4 4.4s11.2 14.5 11.3 27.6c1.2 8.8 1 32.6-2.5 41.6a38 38 0 0 1-4.9 18.6s1.1 2 1 4c-.1 2.2-1.2 4.1-1.2 4.1l16.2 8-6-2.2 6 5-6.8-3.2 4 4-9.8-4.4 4.3 4.2-7.4-3.5 4.3 4.5c-.1-.3-6.4-2.8-6.4-2.8l.3 2.4s-5-.3-5-4c-2.5-1.5-4.2-3.4-4.2-3.4l-11.5-2-13-39 3-66 .8-3.3z"
				stroke="#000"
				strokeLinejoin="round"
				strokeWidth={0.9}
			/>
			<path
				d="M433 427.4s-6.8-14-10.1-14.3c-3-5.7 10.5-52.6 36.5-55.3 14.3 1.2 1.2 16.5-8.2 11.8 1.1 4.1 5.8 10 5.8 10s-18.6 8-24 47.8zm-89.8 2s5.6-16 9-16.2c3.3-.2-9-53.4-35.7-53.8-14.4 1.2-1.2 16.6 8.3 11.9-1.1 4.2-5.9 10-5.9 10s18.8 8.2 24.3 48.1z"
				fill="#fb0"
				stroke="#000"
				strokeWidth={0.9}
			/>
			<path
				d="M367.7 329.4c0-.1-6.6 2-2.4 9.2.4-2.8 3.3-4.5 3.3-4.5s-4.5 5.4.3 9.9c.6-4.3 3.3-5.6 3.3-5.6s-3.4 9.8 0 11.8c.4-3.9 3-5.6 3-5.6s-3.1 8.8-.4 10.8c.3-3.4 2.6-4.8 2.6-4.8s-1.4 9 2.1 9.7c.1-3.2 2.7-6.3 2.7-6.3s-1.2 7.4 4.4 7.8c0-2.9 1-6.1 1-6.1s2.6 8 6.2 6.6v-6.7s2.3 7.6 6.7 6.2c-.6-2.2.3-4.7.3-4.7s2.3 4.7 6.5 3.2c.7-1.4-.2-4.2-.2-4.2s6 6.3 8 2.5c1.8-3.8-5-5-5-5h4.6s-1.4-4-7.6-4.8c2.1-1 4.3-.2 4.3-.2s-1.3-4.9-7.6-5.4c2.4-.8 5.1-.2 5.1-.2s-.8-4.6-7.7-5.9c1-1.2 4-.8 4-.8s-2.8-4.3-6-4c-3 .2-31.6-3-31.5-3z"
				fill="#00713d"
				stroke="#000"
				strokeWidth={0.9}
			/>
			<path
				d="M395.8 352.6s2.5 1.2 2.5 2.3m-1-4.3s3.2 2.3 3.2 4m-.4-5.1s2.6 1.6 2.7 4m1.6-3s1.3 2.8.9 3.3m1.7-1.8c.2 2.2-.2 2.3-.2 2.3m-31.5-16.2s3 2 2.8 4.7m-3-2.3s1.4 1.3 1.1 2.2m2.6-4.5s2 2.8 1.4 4.7m2-2.9s1 1.7.1 2.7m1.6-1.9s1 1.8 0 2.4m-1.3 3.4s2.9.6 3.3 2.7m-1.6-4.7s3 .2 3.3 3.4m.6-4.5c.1 0 2 3.5 1.7 4.5m2.1-4.1s.8 3.2.2 4.3m2.3-3.1v3.8m-3.8-8.9s1.9.7 1.8 2.5m0-4.2s2.4 1.4 2.1 4m.6-5.1s2.1 2.5 1.3 5.2m2.3-4.6s-.7 3-.4 4.3m2.6-2.2s-1.3 1-.6 2.3m-11.1 9.4s.5 2.4 0 2.7m-2.9-4s1.4 2.6 1 3.9m-4.2-4s1.7 1.9 1.6 3.4m-4.2-3s1.6 1.4 1.5 2.3m-2.8-.1s1.5 1.5 1.4 1.9"
				fill="none"
				stroke="#3ec26d"
				strokeLinecap="round"
				strokeWidth={0.9}
			/>
			<path
				d="m347.3 247.2 21.3-.4s14 0 15.5 4.6c2.7-6.1 14.9-5.7 14.9-5.7l22-.8.4 53.2a56.9 56.9 0 0 1-35.7 41.4 54.5 54.5 0 0 1-36.1-41.8l-2.3-50.5z"
				fill="#fff"
				stroke="#000"
				strokeWidth={0.9}
			/>
			<path
				d="m354.9 247 31 82.6 28-84.4c-8.7.6-27.4-1.4-29.7 6.6-3.6-7.1-23.2-4.3-29.3-4.8z"
				fill="#006b00"
				stroke="#000"
				strokeWidth={0.9}
			/>
			<path
				d="M376 291.7c1.2.6 1.1-22.4 2.7-23.1l1.2-4.8c-1.3-2.4-7.4-2.2-9.6-.2a61 61 0 0 0 1.5 4.3c3 4.9 2.4 24.3 4.2 23.8z"
				fill="#ffc900"
				stroke="#006b00"
				strokeLinecap="round"
				strokeWidth={0.5}
			/>
			<path
				d="M367.7 113.7s2.2-2.5 2.3-3.1c0-.6 10-1 15.8-12 3.3-5.7 0-2.4 0-2.4l-.2-2.7s4-4 2.6-6c-1.5-2.1-1 2.7-3.4 2.6-2.4-.1-1.1-5.2-1.1-5.2s-.2-.6-.9-.9c-1 .1-.7 1.9-1.6 2-.9.3-1.7-4-1.7-4s-1.5-2-2.8 4.2c.7 6.7 5 5.4 5 9.7 0 4.4-3.8 7.8-4.9 8-1 0-.7-3.8-.7-3.8s-.6-1.8-1-1.8 2.2-.4 1.8-5.3c-.9-6-1.6 1.4-3.2 1-1.6-.2-.4-5.4.2-6 .6-.6-.7-3.1-4.1 3.3-.3 3-.7-.8-1.4-.6-1.2 2.5-1 4.2.7 6.5 2.5 2.3 4 4.6 4 5.8-.2 1.2-1.5 3.9-3.2 3.9-1.8 0 0-3.3 0-4.4-.1-1-3.1-5-3.1-5s-2.1-3.4-2-3.5c.3-.1-.1-.6-1.1 2.8-1 3.5-2.2-2.2-2.2-2.2s-1.4 4.2 1.6 6.8c-2.3-.3-2.5.6-2.5.6 0 1.2 3 1.7 3.5 3.8.4 2-3.2 3.3-3.2 3.3s1.5 2 5.7-2a6.5 6.5 0 0 1-1.6 4.4c1.4.6 2.5.5 2.7 2.2z"
				fill="#cdad56"
				stroke="#000"
				strokeLinejoin="round"
				strokeWidth={0.9}
			/>
			<path
				d="m354 113.7-2-3.3c0-.6-9 .6-13.4-10.4-2.8-5.3 0-2.2 0-2.2l.2-2.5s-3-3.7-1.7-5.6c1.3-1.9.7 2.5 2.4 2.5 2 0 .9-4.7.9-4.7s.2-.6.8-.8c.8 0 1.2 2.8 2 3 .7.2 2.2-3.2 2.7-4 .7 0 .7-2.7 1.8 3-.6 6-5.6 4.9-5.6 8.8 0 4 3.2 7.1 4.1 7.2 1 0 .6-3.4.6-3.4s.5-1.6.9-1.6c.3 0-3 .6-2.6-3.9.7-4.2 2.4.3 3.8 0 1.3-.3-.2-4.5.2-5.1 0-.6 2-3.4 2.8 2.7.3 2.8 1.8-2.4 2.4-2.3 1 2.3-.4 5.3-1.9 7.4-2 2.1-3 4.4-3 5.5.1 1 .6 2.4 2.2 2.4 1.5 0 .5-1.9.6-2.9 0-1 2.6-4.2 2.6-4.2.5-.8 0-2.3.6-3 .8 0 1.1-1.1 2 2 .8 3.2 1.9-2 1.9-2s1.1 3.9-1.4 6.2c2-.3 2.1.6 2.1.6 0 1-1 1.5-1.3 3.4-.3 2 1 3 1 3s-1.2 1.9-4.8-1.8a7 7 0 0 0 1.4 4c-1.2.5-2.1.5-2.3 2z"
				fill="#cdad56"
				stroke="#000"
				strokeLinejoin="round"
				strokeWidth={0.8}
			/>
			<path
				d="M408.7 259.3c-1.9-1.7-2-.2-3-.6-.4-.1-.8-.6-1.2-1-.3-.3-.7-.4-1.2-.6l-.5 1.5c-.1.5.5 1.3.5 2-.1 1.1-.6 2-2 2.4.4-.7.6-.8.5-1.7 0-.5-1.4-1.4-1.2-1.8.2-.8.6-1.6.3-2.3-.5.4-1.3.2-1.9.4-.4.2-.5 1.1-1.1 1.5-.7.3-2.2.1-3.5-.6.8-.6 1.4-.2 2.2-.8.4-.3.3-1.5.7-1.8l1.7-.9c-.3-.4-.3-1-.6-1.4-.4-.4-2-.3-2.3-.7-.7-.8-.5-1.8-1.2-2.6 1.8.6 1.5 1.5 2 1.4.8-.4 1.6-.5 2-.3.5.2 1.4 1.3 1.8 1.5l.6-1.6c.2-.5-.7-1.4-.6-1.9.4-1 1.2-1.9 1.5-2.9l.4 2.8c.1.4 1 .7 1.1 1.2 0 .5-.5 1.6-.4 2h1.8c.5-.2.8-1.4 1.3-1.5 1-.2 1.8-.1 2.9 0-.8.8-1.4.7-1.9 1.4-.4.3.2 1.3-1 2-.4.2-1.5-.1-1.9.2l1 1.2c.4.4 2 .5 2.3 1 .7.7 1 1.7.9 2.5zm-47.7.8c1.9-1.6 2.1-.2 3-.6.5-.1.8-.6 1.2-1 .3-.3.7-.4 1.2-.6l.5 1.5c.2.5-.5 1.3-.5 2 .2 1.2.6 2 2 2.5-.4-.8-.6-.9-.5-1.8 0-.5 1.4-1.4 1.3-1.8-.3-.7-.7-1.6-.4-2.3.6.4 1.3.2 1.9.4.5.2.5 1.1 1.2 1.5.7.3 2.2.1 3.4-.6-.7-.6-1.4-.2-2.1-.7-.4-.3-.4-1.6-.8-1.9l-1.7-.9c.4-.4.3-1 .7-1.4.3-.4 1.9-.3 2.2-.7.7-.8.6-1.8 1.3-2.6-1.8.6-1.6 1.5-2 1.4-.9-.4-1.7-.5-2.2-.3-.4.2-1.3 1.3-1.7 1.5l-.6-1.6c-.2-.5.8-1.4.6-1.9-.3-1-1.2-1.8-1.5-2.8l-.4 2.7c0 .5-1 .7-1 1.2-.1.5.4 1.6.4 2h-1.8c-.5-.2-.9-1.4-1.4-1.5-1-.2-1.8-.1-2.8 0 .7.8 1.3.8 1.8 1.4.4.3-.1 1.3 1 2 .4.2 1.5-.1 1.9.2l-1 1.2c-.4.4-2 .6-2.3 1-.7.7-1 1.7-.9 2.5z"
				fill="#ffc900"
			/>
			<path
				d="M407 264.6c-1.7 1.4-12.5 4.1-12.6 13.5-.1 9.4 1.9 11.6-.1 11.8-4 0-4.5-10.5-4.4-15.1.1-4.7.2-4 .2-4s2.7.8 2.5 3c-.2 2.3 2.7-5.6 1.7-7.7 1.8 1.8 4.1 1 4.1 1 0-.2-1.3-1.6-1.9-2.7-.5-1 2 .6 2 .6s.1-1.8-2.1-1.7c-3 0 .5-1 .5-1s1.6 1.6 2.8 0c-1.3-1.4-3-2-3-2s-1.6-3-3.8-3.6c-2.4-.6-2 1-4.9.8-.5 1-.5 1.2.6 1.5-2 1.3-1 4-1 4s3.1-1.3 3 .8c-.1 2.2-1.8 1.8-3 .5-1-.6-1.3.6-1.3.6l1.6 1.6s-3 0-3.8 2a5 5 0 0 1 2.6.3s-3.5 1.6-3.8 2.4c-.4.8-.5-1-.6-1l-3.3-1.1-1.2 5.1s2.3 2.2 3.5 1.5c1.2-.7 3.5-2.8 4.8-2.2-3.9 3-7.8 7.2-10 7.8-.5-.4-2.4-2.4-3.2-1.4-.8 1-.2 2.1.8 2 1 0-3.2 1-2.3 2.8.8 1.8.7 1.6 1.5 1.2.8-.5-.7-.6 2.3-1.5 2.9-.8 2.8-1.6 2.8-1.6s-.6 1.3-2.2 1.6c-1.5.4-2.8.4-2.4.9.3.4 1 1.3.7 1.8-.2.4 3.3-2.5 4.2-.2 2.3 0 3.9-3 2.8-4.6 0 1.8 1.2 2.4.5 3.2-.6.8 5.3-2.7 2.4-4.9.8 1.8.9 3.2.9 3.2s1.3 0 1.7-.6c.3-.4-.7 1.4-.3 1.7.5.4 2.6 2.4 1.7 3.8-.5-.8-.7-2.1-1.3-2-.7.1-3.5 2.1-5.2 2.3-1.6 0 2 6.2 2 6.2s-2.5-.4-2.9-.2c-.3.3-2-2.1-2.3-.7-.6 1.8.5 1.1.5 1.1s-1.4-.7-2.2.1c-.8.9-1.6 1.7-1 2 .6.4 3 .4 3.4.3.3-.1-2.8.2-3 .6-.3.3-.7 1.7 0 2.1.6.5 2.3-.2 2.4-.6.1-.3.2 1.3.2 1.3s3 .3 3-2.7.2 2.1.2 2.1 2.9.5 3-2.5c0-3 .3 2 .3 2s2-.5 2-1-.2 6-1.5 7.8c-2.2-1.5-3.5.9-3.5.9s.1 3.5-.1 4.3c-.2.8 1.4-.5 1.5-.8.2-.4 2.2-1.4 2.3-1.6l.6-1.4s-.4 1.6-1.2 1.9c-.8.2-1.5 1-1.2 1.8.3.7 1.6 1.2 2 1.9.4.7 2-4.2 2-4.2l.1 1s2-.4 2.3-1.3c.2-1-2.2-1.8-.3-3.4 2-1.5 0 1.4 0 1.4s.7 2.3 1.2 2.3c.4 0 1.5-4.3.4-5.4l1.7 1.4s1.6-4.5-.1-5l-2.5-.9s1-1.2.5-1.3c-.5-.1 2.3 2.6 2.8 2 .4-.8 1-3-2.2-4.1-3.2-1.2 0-4.6 0-4.6s2 2.4 3.4 1.1c1.4-1.3-.1-1.3-.1-1.3s4.1-2.6 4.2-4l-2.1.2s2.3-1.6 1.8-4c-1 1.2-2.1 1.2-2.1 1.2s2-2 1.6-3.9c-1.2 1-1 1.7-1.9 1.4-.7-.2-2-7.7 1-8.2 3.2-.5 1.5 3.7 1.6 3.7.1 0 4.7-2 0-5 1.1-.4 3.5 1.8 3.5 1.8s-1-5.3-6-2c1.2-1.4 2-2.2 3-2 1 .3 4.5 0 4.5-1.1-.8-.8-2.7.3-3.8 0-1-.4 7.2-1 6.5-5z"
				fill="#ffc900"
				stroke="#006b00"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={0.5}
			/>
			<path
				d="M371.6 267.7s4.5-2.5 6.7.6m1.7 4.8s-1.5 1.6-1.8 1.6m4.9 3.4s4.1.4 6.8-4"
				fill="none"
				stroke="#006b00"
				strokeLinecap="round"
				strokeWidth={0.5}
			/>
			<path
				d="M387.6 276.8s.3 2.4 1 2.4c.6 0-1.1.6-1.8.1.8 1 1.2 3 0 3.7"
				fill="none"
				stroke="#006b00"
				strokeLinecap="round"
				strokeWidth={0.5}
			/>
			<path
				d="M385.4 306.8s-1.4 1.7-3.2 1.8"
				fill="#e80000"
				stroke="#006b00"
				strokeLinecap="round"
				strokeWidth={0.5}
			/>
			<path
				d="M387.1 299.2s-.9-4.8-.3-6c.3-1.5 1.8-2 2.9-4.1"
				fill="none"
				stroke="#006b00"
				strokeLinecap="round"
				strokeWidth={0.5}
			/>
			<path
				d="M386.7 295.8s-1.1 2.8-6 1.9m7.3-9.1s.3 3.8-4.1 2.4m-1.4-19.6s-1.8 1.7-1 4"
				fill="none"
				stroke="#006b00"
				strokeLinecap="round"
				strokeWidth={0.5}
			/>
			<path
				d="M389.2 267.3s2.4-1 2.8-1.5a7 7 0 0 0 1.5-2.1c.2-.7-1.6-1.8-.7-3.4.6-.7 1.4-.8 2.7 0 1.3.9-1.2-2.6-2.6-2.7-1.3-.1-2.2 1-2.5.7-.4-.2 0 1-.5 1s1.1 1 1 1.5c0 .6 1.8 2.6 1.7 3.1-.1.5-2.8 3.2-3.4 3.4z"
				fill="#006b00"
			/>
			<path
				d="M391 259.4c1-.3 1.1 0 1 1-.5-.3-.7-.5-1-1z"
				fill="#ffc900"
				stroke="#ffc900"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={0.5}
			/>
			<path
				d="M383.8 312.5s-.4 2.5.5 2.7c0-1 .2-1.6.4-1.9l-1-.8zm-2.1-3.1c-.8 0-2.3.7-1.9 1.6.7-.7 1.4 0 1.8-.6.2-.2.2-.7.1-1zm0-1.7s-1.3-.3-1.5.7c.9-.1 1.2-.2 1.5 0v-.7zm-5.7-14.1s.8.3 1 1.2c.7-.4 1-2.3-1-1.2zm-2 2.1c.1 0 1.7-1 2 0-.4.3-.6.6-.9.6-.2 0-.6-.6-1-.6zm-.1 3.5s1-1 1.5-.4c.3.7-.4.6-.4.6l-1.1-.2zm-1.4-19.2s-1.4-.6-2 .4c1 .1 1.3.4 1.7.8-.2-.4-.3-1 .3-1.2zm-2.5 7.2s0-1.6.7-2.3c.4.3.5.6.8 1.1-.5.2-1.3.2-1.6 1.2zm3.4-1.2s-1.4.7-1 1.5c.5-.5 1-.3 1-.4v-1z"
				fill="#e80000"
				stroke="#006b00"
				strokeLinejoin="round"
				strokeWidth={0.5}
			/>
			<path
				d="M371.3 270.5c-.5.6.7 2 1.9 1.7.3-1.4-1.6-2.2-1.9-1.7z"
				fill="#ffc900"
				stroke="#006b00"
				strokeLinejoin="round"
				strokeWidth={0.5}
			/>
			<path
				d="M371.3 267.7c-.2.7.8 1.6 1.4 1.4.2-.7-1.1-2-1.4-1.4z"
				fill="none"
			/>
			<path
				d="M372.7 269.4s.2 1.1 1.2.8c-.1-.9-.9-1.5-.9-1.5 0 .2.2.6-.3.7zm.7 3.3s.5.7 1.7-.7c-.5.2-1.5-.3-1.5-.3s0 1-.2 1z"
				fill="#e80000"
				stroke="#006b00"
				strokeLinejoin="round"
				strokeWidth={0.5}
			/>
			<path
				d="M371.3 267.9c-.5.6.2 1.4 1.4 1.2.3-1.4-1.1-1.7-1.4-1.2z"
				fill="#ffc900"
				stroke="#006b00"
				strokeLinejoin="round"
				strokeWidth={0.5}
			/>
			<path
				d="M371.8 262.1s4.8-1.3 7.3.7c2.6 2 2.6.2 2.6.2s3.7 1.4 4.8 1.1c1-.3-.8.1.7-.8s-3 .2-3.4-1.7c-.6-1.1.1-2.6-1.4-2.1-1.1-1.4.7-2.4.3-3.8-1.1.7-1.7-.3-2.6 1.6-2-.4-.3-3.2-2.5-3.5 0 2-1.7 2.2-1.8 3.3-1 .7-5.3 3.3-4 5z"
				fill="url(#gs_svg__d)"
			/>
			<path
				d="M316.4 418.8c3-.8 20 3.7 26.5 10.7-1.4-12.5-4.8-22-4.8-22s-10.1-2.9-11.5-1.5c-2 2.1-8.1 8.5-10.2 12.8zm-5.2-57.6c-1.2.2-2.4 1-3.6 3-1.4 3.3-2.3 11.8-4.3 13.8s-3.8 2.2-3.8 4c0 1.8.2 6 5.6 7.5 5.3.2 13.8-8.5 13.8-8.5s4.4-4.8 6.1-9.9c-10.2 3.6-17.6-6-13.8-9.9zM460 416.8a46.8 46.8 0 0 0-26.8 10.6 108 108 0 0 1 4.8-21.8c1.2-.4 10-2.9 11.3-1.5 2 2.1 8.5 8.5 10.6 12.7zm4.7-57.2c1.2.2 1.6 1.7 2.6 3.7 1.3 3.3 2.7 8.2 4.7 10.2s3.7 4.8 3.7 6.6c0 1.8-.4 4.2-5.7 5.7-5.3.2-13-6.6-13-6.6s-4.3-4.7-6-9.8c10.2 3.5 16.8-5.6 13.7-9.8z"
				fill="#c01500"
				stroke="#000"
				strokeWidth={0.9}
			/>
			<path
				d="M305.3 407.9s10.6 7.3 10.8 10.7c28.7-42.6 101.9-55.8 143.6-3a30.7 30.7 0 0 1 11.3-9.7c-44-57.3-131.3-50.2-165.7 2z"
				fill="#fb0"
				stroke="#000"
				strokeWidth={0.9}
			/>
			<path
				d="M414 245.2h4.2l-7.4 9.4 9 10.4-17.7 22.2 16.6 20c-1.8 4.5-4 8.6-6.8 12.3l-9.5-10.6 17.3-21.6-14.2-16.1zm-59.7 1.9-4.4.1 8.3 9-8.8 11.1 18.4 20-15.3 20.4a60 60 0 0 0 7.3 13.1l9-11.4-18.5-20.7 13.6-17.3z"
				fill="#1e5aa6"
				stroke="#000"
				strokeWidth={0.9}
			/>
			<path
				d="m375 300.8-6.5 8.8 23.4 27.2c4.2-2.1 7.4-4.5 11-7.4l-12.2-14.1 5-14.7 7.1 8.3-22.4 28.6a48.9 48.9 0 0 1-11.6-7.2l11.8-15zm-7.2-13.6 4.2 5.4-2.7-7.3zm30.6 4.8 3.5-4.6-1.3-1.8z"
				fill="#1e5aa6"
				stroke="#000"
				strokeWidth={0.9}
			/>
			<path
				d="M447.9 217.2s4.1-3.5 7-3.6"
				fill="none"
				stroke="#fff700"
				strokeLinecap="round"
				strokeWidth={0.9}
			/>
			<path
				d="M448.5 216.7s24.7-3.5 25.4-4.3m-25.3 4.6c0-.2 27.5-2.4 27.5-2.4"
				fill="none"
				stroke="#fff700"
				strokeLinecap="round"
				strokeWidth={0.9}
			/>
			<path
				d="M448.5 217s29.2-1.4 31 .1m-31.1-.1s28.6.1 29 .8m-28.9-.8 27.5 2.2m-27.8-2.1c.1 0 28 2.5 30.7 6"
				fill="none"
				stroke="#fff700"
				strokeLinecap="round"
				strokeWidth={0.9}
			/>
			<path
				d="M480.4 228.1s-9.5-11.3-32.3-11"
				fill="none"
				stroke="#fff700"
				strokeLinecap="round"
				strokeWidth={0.9}
			/>
			<path
				d="M448.2 217.2s15.8 1.1 20.8 6.6"
				fill="none"
				stroke="#fff700"
				strokeLinecap="round"
				strokeWidth={0.9}
			/>
			<path
				d="M448.5 217s10.2-2 21 11"
				fill="none"
				stroke="#fff700"
				strokeLinecap="round"
				strokeWidth={0.9}
			/>
			<path
				d="M442 228.7s14.2.6 14.2 2c0 1.3-10.5 4-10.7 9.8-.1 5.9 8 6.3 8.6 13.6.6 7.4-6.3 8.5-7.7 10.5-1.4 1-4.8 11.3-4.3 17.5.4 6 2.2 26.8 5.4 31 2.5 1.9 6.2 8.1 10.3 6.2 4-2 1.2-9 .8-11-.4-2 1.7-5.1 1.7-8 0-3-1.6-5.3-1.4-6 .1-.7 11.2 2.6 10.5 13.6-.7 11-5.1 7.6-5.1 7.6s1.4 13.5-2.1 15.3c-6.2 3.4-10.8-.7-10.8-.7l.6 2.8-4.8-2.5s-6.1-8.7-7.5-12.6a110 110 0 0 1-2.5-25c.6-3.8 1-25.7.7-26.9-.3-1-1.4-19.4-.7-22.2.7-2.8 5-15 4.9-15z"
				fill="url(#gs_svg__e)"
				stroke="#000"
				strokeWidth={0.9}
			/>
			<path
				d="M426.8 225s9.8-9.5 15.5-8.4c3 0 .2 2.1.2 2.1s5 .4 5.7 2.6c.1 1-2.4 1.3-2.4 1.3s2 .4 2.2 2.2c.2 1.8-21 .4-21.2.3z"
				fill="#ff7000"
				stroke="#000"
				strokeWidth={0.9}
			/>
			<path
				d="M427.3 224.7s10.6-1.4 15-5.9"
				fill="none"
				stroke="#000"
				strokeWidth={0.9}
			/>
			<path
				d="M438 221.8s7.8-.3 7.8.8"
				fill="none"
				stroke="#000"
				strokeWidth={0.9}
			/>
			<path
				d="M465.7 335.4s6.6-1.5 8.5-3.9c1-.8 6.9 8.8-8.5 4z"
				fill="#fff"
				stroke="#000"
				strokeLinejoin="round"
				strokeWidth={0.9}
			/>
			<path
				d="M463.9 280.3s.8 5.1-1.6 8.6c-1.2 1.4-5 3.7-5 5.4 0 1.7 1.4 3.9 1.2 5.8-.3 2-2.4 4-2.3 5.6 0 1.6 2.4 10.5 2.1 10.7m-6.6-52.8s-5.3 1.8-6.4 7"
				fill="none"
				stroke="#fff"
				strokeLinecap="round"
				strokeWidth={0.9}
			/>
			<path
				d="M449.4 221.8s1.8 5 7.7.2c-3.8-5.1-7.7-.1-7.7-.2z"
				fill="#c75b00"
				stroke="#000"
				strokeWidth={0.9}
			/>
			<path d="M453.7 221.6c0 .2-.2.4-.6.4-.3 0-.6-.2-.6-.4 0-.3.3-.5.6-.5.4 0 .6.2.6.5z" />
			<path
				d="M401.7 210.2s11 12 18.2 11.8c1.3 3.5-3.2 6.8-5 8.3-3.7-1.1-7 .3-15.4-10.2.5-6.6 2.3-9.7 2.2-10zm15-27.9c1.4-4.4 4.3-8 6.7-8.3-.6-3.4 5.3-18.4 22.3-24.1 1 7.7-7.3 15.2-7.3 15.2s25.1-4.3 30.2-10.7c-.5 2.9-5.6 20.7-32.4 20.6 10.2 9.6-3.2 17.3-9 15 10.6-8-3-13-10.5-7.7z"
				fill="#fff"
				stroke="#000"
				strokeWidth={0.9}
			/>
			<path
				d="M425.3 176c5-3.2 6.9-3.2 11-2.6-3 .4-3 .6-3 .6s-.2.4 1.6 2c-2-.5-3.9-1.6-9.6 0z"
				fill="#cccccd"
				stroke="#ccc"
				strokeWidth={0.9}
			/>
			<path
				d="M423.3 174s10-5.4 15.6-9"
				fill="none"
				stroke="#000"
				strokeWidth={0.9}
			/>
			<path
				d="M414.7 230.3s13.8 3.8 15.4-16c-3-8.6-7.2-27-.8-32.4-5.9-4-12.2.1-12.2.1-.4 1-5.6 8.4 1.4 21.4-16.7-4.4-9.9 11.3-9.9 11.3.7-2.5 9.5-4.8 11.7 7.8 1 3.1-6 8-5.6 7.8z"
				fill="#00f"
				stroke="#000"
				strokeWidth={0.9}
			/>
			<path
				d="M430.2 214.5s14.6-7.9 14.2-26.2c-12.4.2-16.8 16.3-16.8 16.3z"
				fill="#00f"
				stroke="#000"
				strokeWidth={0.9}
			/>
			<path
				d="M364.9 213.5s-10.8 9.4-17 6.4c-4.5 2.8-9.8-2-9.8-2s6.2 23 28.6 6.3a53 53 0 0 0-1.8-10.7z"
				fill="#fff"
				stroke="#000"
				strokeWidth={0.9}
			/>
			<path
				d="M347.8 219.5c1-4.8 4.7-7.1 7.7-2.6 4 .8 8-15.7-6.3-13 4-21.6-8-29.7-8-29.7s-4.3 24-2.4 28.4c2 4.4-2.8-8.2-18.3-11.7-.3 18 17.3 26.5 17.3 26.5s5 4.6 10 2.1z"
				fill="#00f"
				stroke="#000"
				strokeWidth={0.9}
			/>
			<path
				d="M349.2 203.8s-6.7 5.7-5.2 13.5m-5-14.3s-1.6 5.6 1.8 13.5"
				fill="none"
				stroke="#000"
				strokeWidth={0.9}
			/>
			<path
				d="M338 218.4s3-5.1 9.8 1.4"
				fill="none"
				stroke="#000"
				strokeWidth={0.9}
			/>
			<path
				d="M339.2 183.2c0-.1-10.3 0-4.1 10.4-4.6 1.5-14.8-5.2-7.7-14-23-.6-32.4-11.6-32.4-21.8 6.7 7 22.9 4.2 28.6 8.5-7-6.5-5.6-15.5-5.6-15.5s19.7 5.9 23.2 23.3c-1.2 3.4-1.7 9.4-2 9.1z"
				fill="#fff"
				stroke="#000"
				strokeWidth={0.9}
			/>
			<path
				d="M323.4 165.8c3.8 3.9 13.5 5 18.5 9.3"
				fill="none"
				stroke="#000"
				strokeWidth={0.9}
			/>
			<path
				d="M327.9 177.2s8-1 10.4 1.8c-3.2 0-4.2-.7-8.8 1 1.3-.7 1-1.9 1.7-1.9s-3-.9-3.3-.9z"
				fill="#cccccd"
				stroke="#ccc"
				strokeWidth={0.6}
			/>
			<path
				d="M368.1 114s4.4-3.8 9.3-.3c-2.2 6.5-10 4-10 4s.2 3.3-.6 4.8c1.6 1.2 2.9 5.1 2.9 5.1s8-2 9.8 1.6c3-.4 5.3 0 5.3 0s6.2-1.6 8.4-1.6c2.3 0 9.3 1.8 10 3.1.6 1.3 3 10 4.5 10 1.6-.2-3.8 2-5.2-.2-1.4-2.2-1 2.9-1 2.9s4.4 4.7 4.9 5.7-2.7 9.5-.3 15.4c-2.1.2-2.3 2.4-2.3 2.4-.1 2.6-3.4 3.3-3.4 3.3l-.8-3.5-2.2 1.3 1-2.8s3-7.2 3.2-9.6c.2-2.3-2.8-6.5-5.1-6.5s-4 7.4-4 7.4-1.2 5.6-.8 6.1l-1.6-1.8s-1 3.4-1.8 4.4c-.8 1-2.5 1.5-2.5 1.5s-1.1-3.4-.8-4.7c.4-1.3 6.4-6.4 6-10-.6-3.7 0-2.8-.2-2.9-.2-.1-3.1-2.7-3.3-4.2-.1-1.4-3.9 1.9-8.8.8-1.5 2.7-1.7 9.3-1.7 9.3s-.5 7.9.5 8.8c1 1-2.6 2.9-2.6 2.9l-2.6 3.5-1-2-1.7 1.2 1-2.6c0-2 2.5-7.4 2.5-12 0-4.5.4-9.3.4-9.3s-4.9-.3-4.7 4.6c.1 5-1.2 5.3-1 6.7.3 1.4 1.6 5.4 1.2 6.6-.4 1.2-2 1.6-2 1.6l-.3.6s-4.8 2.2-4.7 3.2l-.1-2.6-.3-3.8s2.9-1.8 2.9-6.4c0-4.6-.7-5.2-.5-6.2 0-1 .7-4.9.6-5.3-.1-.3-2.7 1-3.5 1-.8 0 1.4-2.6 1.7-4.6.2-2-2.6 1.8-5-.4 1.1-2.4 2.8-3.1 3-5 .3-1.8-1.8 1.6-3.6.3.1-1.7 2-3.2 2-3.2s-1.5-.2-2.1 0c-1.2-.4 1.3-2.2 1.4-4.9.1-2.6-1.4-3.6-1.4-3.7 0-.2-2.6-2.4-3-3.3-.4-.9-.4-2-.4-2s-4.3 3.2-9.4-3.4c4.6-4 9.6-1 9.6-1s1.3-3.7 7.3-3.5c6 .3 7.2 3.7 7 3.3z"
				fill="#923f00"
				stroke="#000"
				strokeWidth={0.9}
			/>
			<path
				d="M400.9 181.4s11 .3 11.1 6.2c.1 5.9-3.3 4.3-3.4 4.3l-8-1z"
				fill="#00f"
				stroke="#000"
				strokeWidth={0.9}
			/>
			<path
				d="M390.2 179.8s13.7-.1 13 5.8c-.8 6-4.3 4.8-4.3 4.8l-6.6-.5z"
				fill="#fffeff"
				stroke="#000"
				strokeWidth={0.9}
			/>
			<path
				d="m382.5 179.1 8 .7s4.7.6 4.5 5.2c-.2 4.6-4.9 4.7-4.9 4.7l-7.7-.5z"
				fill="#00f"
				stroke="#000"
				strokeWidth={0.9}
			/>
			<path
				d="M364 181.4c-.1 0-11 .3-11.2 6.2 0 5.9 3.4 4.3 3.5 4.3l8-1z"
				fill="#fff"
				stroke="#000"
				strokeWidth={0.9}
			/>
			<path
				d="M374.6 179.8s-13.6-.1-12.9 5.8c.8 6 4.3 4.8 4.3 4.8l6.6-.5z"
				fill="#00f"
				stroke="#000"
				strokeWidth={0.9}
			/>
			<path
				d="m382.3 179.1-7.9.7s-4.8.6-4.5 5.2c.2 4.6 4.8 4.7 4.8 4.7l7.7-.5z"
				fill="#fff"
				stroke="#000"
				strokeWidth={0.9}
			/>
			<path
				d="M403.5 245s5.7-8.4 8.1-7.5c2.1.7.5 7.2-.5 7.8zm-39 1.5c-1.8-2.5-4.4-9.4-6.8-7.5-2 .7-.5 7.2.5 7.8z"
				fill="#5e0043"
				stroke="#000"
				strokeWidth={0.9}
			/>
			<path
				d="M368.3 229.9s11 6.8 14.7 7c3.7.2 15.2-8.9 15.2-8.9"
				fill="none"
				stroke="#000"
				strokeWidth={0.9}
			/>
			<path
				d="m369.4 203 2-2.6 10.7 5.4L393 201l2 2.3-12 8.5z"
				fill="#5e0043"
				stroke="#000"
				strokeWidth={0.9}
			/>
			<path
				d="M360.9 203c.9 1 7.7 9.4 9 16.3 1.2 7-.7-9.5-.7-9.5s8.5 4.2 8.8 6.9c.2 2.6 4-.2 4.2-.7l-24.6-16zm42.1-.5s-9 11.8-8 24.6c-1.8-6.1-.3-16.3-.3-16.3l-2 1.3s-2 8.6-4.5 10c-.5-1-.4-1.4-.4-1.4s-2.7 3.5-3.3 3.9c-.5.3.2 12 .2 12s1 8.4 2 8.3a36 36 0 0 0-2.7 1.5l-1.1-22.5 2.5-2.5s3.4-4.1 3.6-8.1a8 8 0 0 1-3 1.6s-.5 5.7-1.8 6.5c-1.4.8-1.4 2.2-1.4 2.2l-.3-7.4z"
				fill="#474747"
				stroke="#474747"
				strokeLinejoin="round"
				strokeWidth={0.9}
			/>
			<path
				d="m382.5 216.1 1.7 35.5"
				fill="none"
				stroke="#000"
				strokeLinecap="round"
				strokeWidth={0.9}
			/>
			<path
				d="M360.7 233s4 2.5 5.5 9.7c13.4-1 17.5 3.8 17.5 3.8s11-5.3 16-4.3a39 39 0 0 1 6.8-8.5"
				fill="none"
				stroke="#000"
				strokeWidth={0.9}
			/>
			<path
				d="m355 198.3 27.5 18 24.6-16.7s5.2-2.8 4.7-4.8c-.4-2-2.2-1.3-3-1-1 .4-25.9 18-25.9 18l-26.5-16.7s-2-.6-2.3.6c-.4 1.3.7 2 1 2.6z"
				fill="#b4b6b9"
				stroke="#000"
				strokeWidth={0.9}
			/>
			<path
				d="M404 193.6s-7-3-7-.4.3 2.9 1.4 4.5c1.1 1.7-.9 2.7-.9 2.7l-.6-1.8c-.4-1.1-4.2-2-4.5-3.2-.4-1.4.8-3.5-1.5-3.7-2.2-.3-4.4.9-4.9 3.5-.4 2.5-3.3 8.6-3.3 8.6l.3-13.7c5 .3 14.2 1.4 21.2 2.2-2.1-.3.8.2.7.9-.2.6-.9.6-.8.4zm-24.7-3.4c-1.3 0-7.6.7-9.1 1.7-1.6.9 2.5 2.3 2 3.6-.5 1.2-.6 3.8-2.6 3.2-2-.5-8.6-3.8-8.8-5-.2-1-1.6-1.1-1.6-1.1s19.2-2.6 20-2.4z"
				fill="#474747"
				stroke="#474747"
				strokeLinejoin="round"
				strokeWidth={0.9}
			/>
			<path
				d="M382.3 188.6v16.8m-12.9-36.6-7.9 12.9"
				fill="none"
				stroke="#000"
				strokeWidth={0.9}
			/>
			<path
				d="M383.5 168.5s3.4 4.6 3 5.9a18 18 0 0 1 2.9 5.3"
				fill="url(#gs_svg__f)"
				stroke="#000"
				strokeWidth={0.9}
			/>
			<path
				d="M396.4 167.8s-7.2 10.1-7 10.9"
				fill="none"
				stroke="#000"
				strokeWidth={0.9}
			/>
			<path d="M359.4 119.3c-.1.6-1 .8-2 .5-1-.3-1.7-1-1.5-1.6.2-.6 1-.8 2-.5 1 .3 1.7 1 1.5 1.6zm2.9-.3c.2.7 1.1.9 2.1.6 1-.3 1.6-1 1.5-1.6-.2-.6-1.1-.8-2-.5-1 .3-1.7 1-1.6 1.6z" />
			<path
				d="M447 330.2s-2.8.5-2.7.8c.1.2-7.8.5-8 .2-.1-.2-1.1 1.4-1.1 1.4l1.2-.8s2 2 2.6 1.8c.5-.1-.3.8-.1 1 .1.1.7-.4.7-.4l13-.2zm4.8 4.1-10.7.3s-2.6 2.4-2.8 3c-.2.6 1.7.7 1.7.7l.6 2 1.4-.5s9 1.4 17.3-.5c4.2-1.4 5-3.2 2-4.3-3-1-9.5-.7-9.5-.7z"
				fill="#ff7000"
				stroke="#000"
				strokeLinejoin="round"
				strokeWidth={0.9}
			/>
			<path
				d="m415.4 356 19-.8-3.5-3 51.8-2.1-1.8-4.1-58 2.3 7 3.3-15.6.4.4 1.7-4-.2s4.5 1.8 4.7 2.6z"
				fill="url(#gs_svg__g)"
				stroke="#000"
				strokeWidth={0.9}
			/>
			<path
				d="M436.8 250.4c-1.5-.8-8.2-1.7-15.6 3.2l.3 17.1s10.9-5.9 16.2-4.5c-.3-5.3-.3-12.2-.9-15.8z"
				fill="url(#gs_svg__h)"
				stroke="#000"
				strokeWidth={0.9}
			/>
			<path
				d="m331 302.5-45 44.8m65.1-44.5-36.6 48.3m35-60.8-48.9 59.1m-1.5-.8 4.8-5.5m54.9-23.1-19 26.2m-.8 3.4.5 10m28-30.4-20.1 25.1m16.5-1.9L372 339m-5-2.6-9.8 11m6.8-21.5-6.7 8.2m-1.9-20.1s-20.5 29.9-20.1 32.3m18-36.3c-.5.4-17.7 23-17.7 23m-1 7.3-3 3.7m-4 5.8-4.7 6.2"
				fill="none"
				stroke="#000"
				strokeWidth={0.9}
			/>
			<path
				d="M328.8 233.7s-1.4 4.3 0 6.5 10 19.8 10 19.8 6-7.3 8.2-7.5c2.2-.2 1.2 19 1.2 19s-3.6 3.3-5.8 3.1c-2.1-.2 5.4 7.5 5.2 14-.2 6.6-10 39-13.5 39.6-3.5.6 1.6-6 1.4-7.7-.2-1.8-1.2-.6-2-2.6s1.2-5 .8-7c-.4-1.9-2.1-1.5-2.3-2.9-.2-1.4 1.1-1.8 1-3.3-.3-1.6-2.4-1.2-2.2-2.6.2-1.4.4-.8.2-3.4-.2-2.5-.6 1.8-2.8 2-2.2.2-4 5.2-4 5.2s-4.3 6-8.7 3.3c2.6 5.6.6 8-.4 8.1-1 .2.8 4.4-1.5 4.6-2.4.2 1.7 9.3-1 10 3 1.4.6 3.2.6 3.2s-6.9.6-5.4 9.5c-20.1-7.1-30-19.4-29.8-31.8.2-12.5 4.1-23.8 13.8-28 2.8-10.2 7.5-21.3 7.5-21.3s-.8-4.5-.2-7.5c.6-3 3.4-6 3.4-6s-.4-7-.2-10.6c.2-3.6 1.6-5.1 1.8-7.1.2-2-.6-12 1.4-13.9 2-1.7 5.7-1.5 7.7-2.7 2-1.2 4.5-3.4 7-3.2 2.7.2 4.8 2 4.8 2s9.7 0 10.3 3.7c.6 3.8-2 5.2-2 5.2s1.4 5.3-4.5 10.3z"
				fill="#8a9396"
				stroke="#2b2b2b"
				strokeWidth={0.9}
			/>
			<path
				d="M320.2 220c.3.5-.4 1.5-1.6 2.2-1.2.6-2.4.7-2.7 0-.3-.5.4-1.5 1.6-2.1 1.2-.6 2.4-.7 2.7-.1z"
				fill="#cecfcf"
				stroke="#2b2b2b"
				strokeWidth={0.9}
			/>
			<path d="M318.5 221c0 .3-.3.6-.7.6-.4 0-.7-.3-.7-.6 0-.4.3-.7.7-.7.4 0 .7.3.7.7z" />
			<path
				d="M333 227.5s2.4 10.7-.5 18.1m1.2-22.8s4.7 6.2 4.1 14m-3.6-15.3c.1 0 4 3.3 3.8 5.6m-2.9-7s2.6 1.8 3.2 3.6"
				fill="none"
				stroke="#2b2b2b"
				strokeWidth={0.4}
			/>
			<path
				d="M333.9 219s-9.2 15-8 24.4"
				fill="none"
				stroke="#000"
				strokeWidth={0.9}
			/>
			<path
				d="M334.5 218.6s-12.2 7.2-14.5 31"
				fill="none"
				stroke="#2b2b2b"
				strokeWidth={0.4}
			/>
			<path
				d="m333.1 223-4.8 3.6"
				fill="none"
				stroke="#000"
				strokeWidth={0.9}
			/>
			<path
				d="M315.5 251s6.8-28.3 18.8-32.4"
				fill="none"
				stroke="#2b2b2b"
				strokeWidth={0.4}
			/>
			<path
				d="M339 260.5s6.5-8.2 8-7.9c1.6.3 1.1 18.9 1.1 18.9s-4.8 3.6-5.9 3.5c-1-.2 5.4 8.7 5.3 12l-.3 3.4s0-2-1.5-5.2c-1.5-3.1-.6-6.8-10.4-14.8-2.5-5 4.8 3 6.3 1.8s-2.7-11.6-2.6-11.7z"
				fill="#2b2b2b"
				stroke="#2b2b2b"
				strokeWidth={0.9}
			/>
			<path
				d="M327.5 214.5s-2.8.7-3.1 1.9c-.4 1-2 2.2-2.9 1.8-.9-.4-2.5-1.7-2.5-1.7"
				fill="none"
				stroke="#2b2b2b"
				strokeWidth={0.9}
			/>
			<path
				d="M312 224s-4.1 4.2-2.2 4.7c2 .4 4.1-3.3 4.1-3.3s0 6.4 1.8 5.4c1.7-1 6.8-4.6 6.8-4.6s1.8-.2 2.1 0c.4 0 4.7 3.8 7.6 2.5-1.6 4.2-3.5 4.7-3.5 4.7s-3 3.8-6.8 3c-3.9-1-4.9-2.5-4.9-2.5s-3.2.2-4.2-1.3-1.3-2.3-1.3-2.3-1.9 1.8-2.4 1c-.5-1 0-6 2.9-7.2z"
				fill="#2b2b2b"
				stroke="#2b2b2b"
				strokeLinejoin="round"
				strokeWidth={0.9}
			/>
			<path
				d="M335.2 218.3s-7.6-2.2-10.2 1.5c-2.6 3.8-2 5.9-.6 6.2"
				fill="none"
				stroke="#2b2b2b"
				strokeWidth={0.9}
			/>
			<path d="M336.3 218.1c0 1-.6 1.6-1.4 1.6-.8 0-1.4-.7-1.4-1.6 0-.9.6-1.6 1.4-1.6.8 0 1.4.7 1.4 1.6z" />
			<path
				d="M314.3 237.5s3 4.7 6.8 6c3.7 1.3-2.6 2.5-6.3 0-2.6-3.7-2-6.3-2-6.3s.8-.7 1.5.3zm26.4 28s-8.6-12-11.1-12.7c-2.5-.7 1.9-1.2 4.5 1.4 2.7 2.5-.7-4.2-.7-4.2z"
				fill="#2b2b2b"
				stroke="#2b2b2b"
				strokeWidth={0.9}
			/>
			<path
				d="M313.5 335.2c3.3-.9 17.8 8.3 21 10.6 3.3 2.3 10.2.9 10.2.9s-3.2 1.9-5.2 2.3c-2 .5 5.9.5 5.9.5s-18.6 5.1-37.4-4.8c-1.7-7.7 4-9.4 5.5-9.5z"
				fill="#2b2b2b"
				stroke="#2b2b2b"
				strokeLinejoin="round"
				strokeWidth={0.9}
			/>
			<path
				d="M334.7 268.5s-2.5-.5-3.7-2c-1.3-1.3-3-4.9-4.9-6.3-1.8-1.5-11-6.6-14.4-6.2-3.3.3-4.3-.4-4.7-.8-.4-.4-1.8.2-1.6 2 .3 1.6-2.5 5.4-1.5 7.2 1 1.8 5.8 9 6.7 9.3 1 .2.4 4.2.4 4.2s4.2 4.3 5.3 4.5c1 .3 2.1 1 2 2-.1 1-4.7 6.6-4.7 6.6s-4.8 2.5-4.9 4c0 1.4 1.2 4.3 5 5.3a36 36 0 0 0 14.9-.7 19 19 0 0 0 1-6.8c-.4-.5-3-2.1-4.3-1.9-1.3.3-2.4 1.3-2.3 1.6 0 .2-1.9 1.2-1.9.3 0-1 3.9-5.3 4.2-5 .4.4 5.9 1 6.9 3.7s1 4.7 3.8 4.4c2.9-.3 6.9-3 7.2-8.4.4-5.4-3.2-9.1-4-9.7-1-.5-4-2.3-4.2-3.1-.2-.8-.8-3.6-.3-4.2z"
				fill="#2b2b2b"
				stroke="#2b2b2b"
				strokeWidth={0.9}
			/>
			<path
				d="M283.3 292.6s9.2-2.4 11.6-2.3c2.3 0 11.3 4.2 14 6.8 2.5 2.5 7.9 8.6 11.4 8 3.5-.5 4.5-1.2 4.5-1.2l-1.4 2.6s-2.8.8-4.2.4c-1.5-.3-4.2-1.2-7-4-2.8-2.7-11.4-10-18.8-9.5-7.3.5-11.5 7.7-11.5 7.7s0-3.5.4-4.3c.3-.8-1.6 1.7-1.6 1.7z"
				fill="#2b2b2b"
				stroke="#2b2b2b"
				strokeWidth={0.9}
			/>
			<path
				d="M317.2 299.7s2.3.7 6.1.7 5.9-1.7 5.9-1.7l-.3-1.5.6-2s3 3 2.9 3.5c-.1.6-1.2.9-1.2.9l-.4-1.5-1 1.3s-5.6 4.4-8.6 3.7c-3-.6-5.8-2.6-5-3 .7-.5 1.1-.4 1-.4zm-13.4 7.8s-3.3 0-4.8.7-2 1.6-3 1.4c-1 0-1.8-1.4-1.5-2 .4-.7 2.3-1.8 6-1.5 3.8.3 3.3 1.4 3.3 1.4zm11.6 9c0-.1-.2-4.8-2-6.7a5.6 5.6 0 0 0-5.2-1.7c-1 .2 3.8 2.3 4.3 3.7.4 1.4 2 5.2 1.6 6.1-.5 1-1.2-2.7-4.1-3.7-3-1-7-.4-6.2.9.9 1.3 4.1 0 5.8 2.9 1.7 2.8 3 5.7 3 5.7l.5-2 1.4-.4.2-3.9z"
				fill="#2b2b2b"
				stroke="#2b2b2b"
				strokeWidth={0.9}
			/>
			<path
				d="m313 331.7-3-6s-1-3.9-3.5-5c-2.5-1-6-.8-6 .5s5.5 3 5.8 3.7c.4.7.2 1.9-.3 2-.4 0-2.9-1-4.1-.7-1.3.3-2 2-3.8 1.5-1.9-.5-3.4-6.4-2.7-7 .7-.6-1.4 1-1.8-.5-.4-1.5.6-6.3 0-7-.8-.5-4.3-2.6-4.3-3 0-.4.2-23.7 19.6-4.4-8.3-9.9-11.6-8.8-13.1-8.9-1.2 0-8.7.7-10.6 10.3-2 9.6-4.2 3.6-4.2 3.6s-.4 4.2 1.6 5.4c2 1.2-1 4.6-1 4.6s-3.5-8.8-3-12.7a30 30 0 0 0 4 19.1 62.4 62.4 0 0 0 23.7 16.8c7.1-10.8 6.8-12.1 6.8-12.3z"
				fill="#2b2b2b"
				stroke="#2b2b2b"
				strokeLinejoin="round"
				strokeWidth={0.9}
			/>
			<path
				d="M300.3 331.8s4 .5 5 2.5c1.1 2 1.6 5.1 1.6 5.1.6-1.3 1-2.4 2.2-3.4 1.3-1 2.3-1 2.2-1.8 0-.7-4.1-5-6.2-5.2-2-.3-5.7 2.2-5.7 2.2s-.7 1 1 .6z"
				fill="#8a9396"
				stroke="#2b2b2b"
				strokeLinejoin="round"
				strokeWidth={0.9}
			/>
			<path
				d="M309.3 342s10.2 4.7 26.9 5"
				fill="none"
				stroke="#8a9396"
				strokeLinecap="round"
				strokeWidth={0.9}
			/>
			<path
				d="M343.2 294.9s-.9 8.5-7.4 25.3"
				fill="none"
				stroke="#2b2b2b"
				strokeLinecap="round"
				strokeWidth={0.9}
			/>
			<path
				d="M342 300.1s-2 6.1-7.5 10.7"
				fill="none"
				stroke="#2b2b2b"
				strokeWidth={0.9}
			/>
			<path d="m312.2 406 1.8-2 .5.5-.1.2-.2.2v.1l.2.2 2.3 2 .2.2h.1l.2-.1.4-.7q.1-.4 0-.8 0-.3-.3-.8l.7-.4 1 1.9-2.7 3-.6-.4.2-.2.1-.2v-.2l-.2-.2-2.3-2-.2-.2h-.2l-.1.2-.2.2-.6-.5zm3.8-4.3 3.3-3.2 1.6.8-.3.6-.8-.1h-.6l-.5.5-.6.6 1 1 .1-.2.3-.4v-.2l-.2-.3-.2-.1.5-.5 1.6 1.6-.4.5-.2-.2-.3-.2h-.2l-.3.3-.2.2.9.9.1.1h.1l.2-.1.4-.4.5-.7v-.7q0-.5-.2-.9l.7-.3 1 2-3.4 3.2-.5-.5v-.1l.3-.3v-.2l-.2-.2-2.1-2.1-.3-.2h-.1l-.2.1-.2.2-.5-.5zm6.9-6.5q1-.9 2-.8 1.2 0 2 1 .5.6.7 1.4.1.7-.2 1.4-.2.7-1 1.3-.8.7-1.8.7-1.3 0-2.1-1t-.7-2q0-1.2 1-2zm.5.6q-.4.4-.4 1 0 .7.6 1.4t1.3.9q.6 0 1-.3.5-.4.5-1 0-.7-.6-1.4l-.9-.7-.8-.2q-.4 0-.7.3zm5.4-5.4.4-.3h.1l2.6-1.7-.1-.2.4-.3 1.7 1.2-.5.6-.6-.3h-1.1v.4l1.8 2.5.2.3h.3l.4-.2.4.6-2.2 1.5-.4-.6h.1l.3-.3v-.2l-.2-.3-1.8-2.6-.1-.1h-.1q-.2.1-.3.4l-.1.6v.7l-.7.2-.5-2zm4.9-3.2 3.9-2.4 1.4 1.2-.5.6q-.3-.3-.7-.4h-.6q-.3 0-.6.3l-.7.4.7 1.2.2-.2.3-.2q.1-.1 0-.2v-.4l-.2-.2.6-.3 1.2 2-.6.3-.1-.2-.2-.3h-.2l-.4.2-.2.1.6 1 .1.3h.1l.3-.1.4-.3q.4-.2.6-.5l.3-.7v-1h.7l.4 2-4 2.4-.4-.6h.2l.2-.3q.1 0 0-.2v-.3l-1.6-2.5-.2-.3h-.1l-.3.1-.2.1-.4-.6zm5.5-3.3 3-1.5.6-.3.8-.1.6.2.5.5q.3.6 0 1.1-.2.6-.6 1l1.6.6.3.1h.4l.2-.2.4.7-1.6.8-2.6-1.3-.4.2.5 1 .2.3h.4l.2-.2.4.7-2.4 1.2-.3-.6.2-.2.2-.1v-.4l-1.5-2.8-.1-.2h-.4l-.2.2-.4-.7zm2.2-.1.6 1.2.8-.4.5-.4q.2-.1.2-.3v-.5l-.3-.2q-.2-.1-.4 0l-.6.2-.8.4zm3.9-3 3.1-1.4.7-.2h.7q.4 0 .7.2l.4.6q.2.5 0 1-.3.6-.8 1l1.6.7.3.1h.5l.2-.1.3.6-1.6.7-2.6-1.4-.4.2.5 1 .1.3h.4l.3-.1.3.7-2.5 1-.3-.7h.2l.3-.2v-.4l-1.3-2.8-.1-.3h-.4l-.2.2-.4-.7zm2.2 0 .6 1.3.7-.4.7-.3.2-.4v-.4l-.3-.3q-.2-.1-.4 0l-.6.1-.9.4zm6-3.4 1.2-.5 3 3.4.3.3h.4l.2.7-2.4.9-.2-.8h.1q.2 0 .3-.2v-.1l-.2-.3-.3-.4-1.5.6v.9h.6l.2.6-2 .7-.2-.7.3-.1v-.2l.1-.2.1-4.6zm.9 2.8 1-.4-1-1.2v1.6zm3.4-4.4 2.3-.7 1.8 3v-3.5l2.5-.7.2.7-.3.1q-.2 0-.2.2v.3l.8 3 .1.3h.7l.2.6-2.5.8-.2-.8h.2l.2-.1.1-.2v-.2l-1-3.2v4.7l-.7.2-2.4-3.9.9 3.2v.2h.7l.2.6-2.1.7-.2-.8h.2l.2-.1.1-.2v-.3l-.9-3v-.2h-.7l-.2-.7zm10.8-2.8 2.8-.5 1-.1.6.2.5.5.3.6q.1.7-.3 1.2-.5.6-1.4.8l-1 .1.3 1v.3h.7l.1.7-2.6.5-.1-.7h.2l.3-.1v-.5l-.5-3-.1-.2-.1-.1h-.5l-.2-.7zm2.1.5.3 1.5h.5l.6-.3q.2-.1.2-.3v-.5q0-.3-.3-.5h-1.3zm3.7-1.5 3.3-.5h.7l.7.1q.4.2.6.5l.2.6q.1.7-.3 1.1-.4.4-1 .6l1.3 1.2.3.2h.7v.8l-1.7.2-2-2.1h-.4v1.1l.2.4q.2.1.4 0h.2l.1.8-2.6.3-.1-.7h.2l.3-.1v-.5l-.3-3v-.2l-.2-.1h-.5l-.1-.8zm2 .6.3 1.4.8-.1.7-.2.3-.3v-.4l-.1-.4-.4-.2h-.6l-1 .2zm7.8-1.8q1.3 0 2.1.7.8.8 1 2 0 .8-.4 1.5-.3.6-1 1-.5.4-1.5.5-1.2 0-2-.6-1-.7-1-2t.7-2.1q.8-.9 2-1zm0 1q-.6 0-1 .4-.4.6-.3 1.6 0 .9.5 1.4.4.4 1 .4t1-.5q.4-.6.3-1.5 0-.7-.2-1-.2-.5-.6-.7-.3-.2-.7-.2zm4.1-1h3.8l.6.4.4.6.1.6q0 .7-.5 1.2t-1.5.5h-1v1l.1.2.1.1h.5v.8h-2.6v-.8h.5l.1-.1v-3.8h-.6v-.7zm2 .9v1.5h1.1l.3-.3.1-.5q0-.4-.3-.6l-.6-.1h-.6zm3.9-.9 3.3.2q.4 0 .7.2.4 0 .7.3l.5.5v.7q0 .6-.4 1-.5.3-1.1.4l1 1.4.2.2.2.1h.3l.2.1v.7H398l-1.6-2.5h-.4l-.1 1v.4l.1.1h.5v.8l-2.7-.2v-.7h.6l.1-.1v-.3l.3-3v-.3l-.1-.1h-.4l-.2-.1v-.8zm2 1-.2 1.5h1.6l.3-.3q.2-.1.2-.3l-.1-.4-.3-.3h-.7l-.9-.2zm4.8-.5 2.5.4v.7h-.6l-.2.4-.3 3v.4h.3l.3.1-.1.8-2.6-.4v-.7h.6l.1-.3.4-3v-.5h-.3l-.3-.1.1-.8zm5.6.8 1.2.2.9 4.5.1.4.4.1-.1.8-2.6-.5.1-.7h.5l.1-.1v-.8l-1.7-.3-.3.5-.1.2v.1l.1.1.4.1-.1.8-2.1-.4.1-.7h.3l.2-.1.2-.2 2.4-4zm-.7 2.9 1 .2-.2-1.6-.8 1.4zm5.1-2 2.4.5.1 3.5 1.8-3 2.4.6-.2.7h-.5l-.2.3-.7 3q-.1.2 0 .2v.2h.2l.3.1-.2.8-2.5-.7.2-.7h.6v-.2l.9-3.3-2.4 4-.7-.1-.2-4.6-.8 3.2v.4h.3l.3.1-.2.7-2.2-.5.2-.7h.6l.2-.3.7-3v-.4h-.2l-.3-.1.2-.8zm11 3 2.7 1q.5.1.8.4.3.2.4.5l.2.6v.7q-.3.7-1 1-.6.2-1.5-.2l-.9-.3-.3 1-.1.2v.2h.3l.2.2-.2.7-2.5-1 .3-.6h.1l.3.1h.2l.1-.3 1-2.9.1-.3v-.1l-.3-.1-.2-.1.3-.7zm1.5 1.5-.5 1.4.4.2.6.1.4-.1.3-.4v-.6q-.2-.3-.6-.4l-.6-.2zm4 .5 3 1.4.7.3.5.5.3.7-.2.7q-.2.5-.8.7-.5.2-1.1 0l.5 1.7v.3l.2.2.2.1.2.1-.3.7-1.5-.7-.7-2.9-.4-.1-.4 1-.2.3v.1l.3.2h.2l-.3.8-2.4-1.1.3-.7.2.1h.5v-.3l1.3-2.8.1-.2v-.1l-.2-.2h-.3l.3-.8zm1.5 1.6-.6 1.3.7.4.7.2.5-.1.2-.3q.1-.2 0-.4l-.1-.4-.6-.3-.8-.4zm7.5 2.6q1.1.6 1.5 1.6.3 1.1-.3 2.2-.4.7-1 1.1-.6.4-1.4.4-.7 0-1.5-.4-1-.6-1.4-1.5-.5-1.1.2-2.3.6-1.1 1.6-1.4 1.1-.4 2.3.3zm-.4.7q-.6-.3-1 0-.8.3-1.2 1.1-.4.8-.3 1.5.1.6.6.9.6.2 1.1 0 .7-.3 1-1 .4-.7.4-1.1l-.1-.8q-.2-.4-.5-.6zm4.4 1.4.5.3v.2l2.5 1.6.2-.1.4.2-.4 2-.8-.2v-.7l-.1-.6-.3-.3h-.1l-.2.1-1.6 2.7-.2.3v.1l.1.1.4.3-.4.6-2.3-1.4.4-.6h.2l.3.2h.1l.2-.3 1.7-2.7q.1-.2 0-.2v-.1l-.5-.1-.6.1-.6.4-.4-.6 1.5-1.3zm4.9 3.3 3.7 2.6-.5 1.8-.7-.2v-.8l-.2-.6-.5-.4-.7-.5-.8 1 .2.2.4.2h.2l.3-.3v-.1l.7.4-1.4 1.8-.5-.4v-.2q.2-.1.2-.3v-.2l-.3-.3-.2-.1-.7 1-.2.2v.1l.2.2.4.2.8.4q.4.1.8 0l.8-.4.4.6-1.7 1.3-3.9-2.8.5-.6.4.3h.2l.2-.3 1.7-2.4.2-.3v-.1l-.2-.2-.2-.2.4-.6zm6.1 7.8 2 1.6-.5.6h-.1l-.3-.2h-.1l-.2.2-1 1.3-.7-.5v-.4q-.4 0-.7-.2l-.7-.5q-.6-.4-.9-1.1-.2-.7 0-1.4 0-.7.6-1.4.5-.6 1.2-.8.6-.3 1.3-.2.8.1 1.3.6l.5.5.4.6h.2l.4.3-.7 1.7-.7-.3v-1l-.1-.6-.4-.4-.6-.3-.8.2-.8.6q-.4.5-.5 1-.2.5 0 1 0 .3.3.5l.5.3h.5l.3-.2v-.2l.2-.2v-.1l-.2-.3-.2-.1.5-.6zm5.8 1.7 1 .9-1.8 4.1v.5l.2.3-.5.6-2-1.8.6-.5h.1l.3.2h.1l.2-.3.2-.5-1.2-1-.6.2-.2.1v.3l.3.2-.5.6-1.5-1.5.5-.5.2.2h.2l.3-.1 4.1-2zm-2 2 .7.8.6-1.5-1.4.7zm5.6 1.2.4.4-.1.1 2 2.3.3-.1.3.3-.9 1.8-.7-.3.2-.7v-.6q0-.3-.2-.4h-.3l-2.2 2.2-.3.3v.2l.3.3-.5.6-1.8-2 .5-.5.1.1.3.3h.1l.3-.3 2.3-2.2.1-.1v-.1l-.4-.2h-.7l-.6.1-.3-.7 1.8-.8z" />
			<path d="M0 0h256v256H0Z" fill="#012169" />
			<path
				d="M256 0v32l-95 96 95 93.5V256h-33.5L127 162l-93 94H0v-34l93-93.5L0 37V0h31l96 94 93-94Z"
				fill="#fff"
			/>
			<path
				d="m92 162 5.5 17L21 256H0v-1.5zm62-6 27 4 75 73.5V256zM256 0l-96 98-2-22 75-76ZM0 .5 96.5 95 67 91 0 24.5Z"
				fill="#c8102e"
			/>
			<path d="M88 0v256h80V0ZM0 88v80h256V88Z" fill="#fff" />
			<path d="M0 104v48h256v-48zM104 0v256h48V0Z" fill="#c8102e" />
		</Box>
	);
}
