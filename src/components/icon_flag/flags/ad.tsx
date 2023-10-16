import clsx from "clsx";

import { utilCss } from "../../../styles/utils/util_css.css";
import { Box } from "../../box";
import { flagStyles } from "../styles.css";

import type { UtilCssArgs } from "../../../styles/utils/util_css.css";

export function FlagAd({
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
			<path d="M0 0h512v512H0z" fill="#d0103a" />
			<path d="M0 0h348.2v512H0z" fill="#fedf00" />
			<path d="M0 0h163.8v512H0z" fill="#0018a8" />
			<path
				d="M240.3 173.3c6.2 0 8.7 5.3 14.9 5.3 3.8 0 6-1.2 9.3-3.1 2.4-1.3 3.8-2 6.5-2s4.4.8 5.8 3.1a9 9 0 0 1 1 5.4 32 32 0 0 1-2.1 6.7c-.5 1.2-1 2-1 3.3 0 3.3 4.4 4.4 7.4 4.5.7 0 6.3 0 9.7-3.4-1.9 0-4-1.5-4-3.4 0-2 1.5-3.5 3.5-4.1.4-.1 1 .2 1.4 0 .5-.2.2-.8.7-1.1 1-.8 1.6-1.3 2.9-1.3a3 3 0 0 1 2 .6c.3.2.5.6.9.6 1 0 1.4-.6 2.3-.6.7 0 1.2 0 1.8.4.6.3.6 1.2 1.2 1.2.3 0 1.9-.6 2.8-.6 1.7 0 2.7.6 3.8 2 .3.3.5 1 .8 1a5 5 0 0 1 3.9 2.4c.2.3.5 1.1.9 1.3.4.1.7.1 1.3.5a4.8 4.8 0 0 1 2.3 3.9c0 .5-.3 1.2-.4 1.7-1.5 5.2-5.1 7-8.7 11.4-1.6 2-2.8 3.5-2.8 6 0 .6.8 1.7 1 2.2-.1-1.2.4-2.6 1.6-2.7 1.7 0 3 1.2 3.2 2.8 0 .4 0 1.1-.2 1.5.9-.6 2-1 3.2-1.1a9.9 9.9 0 0 1 1.5 0 13 13 0 0 1 7.4 3 16.9 16.9 0 0 1 5.9 13.4c-.7 4.3-.3 11.9-11 15 2 .8 3.3 2.3 3.3 4.1 0 2-1.5 3.8-3.5 3.8a3.5 3.5 0 0 1-2.8-1.1c-2.2 2.2-2.7 4.5-2.7 7.7 0 1.9.4 3 1.2 4.7a9 9 0 0 0 3 4.2c.8-1.2 1.6-2 3-2 1.5 0 2.7.4 3.3 1.7.1.3 0 .7.2 1 .2.5.7.6 1 1.1.3.8 0 1.4.3 2.2.2.5.7.6 1 1 .3.9.4 1.4.4 2.3 0 2.4-2.2 4-4.6 4-.8 0-1.2-.2-1.9-.1 1.4 1.3 2.4 2 3.5 3.6a14.1 14.1 0 0 1 2.3 8.2c0 3.6-.6 5.8-2.2 9a16 16 0 0 1-5.6 6.8 28 28 0 0 1-12.8 5c-3.4.7-5.3 1-8.8 1.2l-11.3.6c-5.7.4-9.7 1.2-13.8 5.3 2 1.4 3.3 2.8 3.3 5.2 0 2.4-1.5 4.2-3.9 5-.5.1-1 0-1.4.2-.6.3-.6 1-1.2 1.4a5 5 0 0 1-3 .8c-2.2 0-3.6-.5-5.2-2-1.7 1.4-2.3 2.7-4.3 3.9-.7.3-1 .8-1.7.8-1.2 0-1.8-.7-2.7-1.4a18.4 18.4 0 0 1-3.6-3.3c-1.8 1.1-2.9 2-5 2a5.2 5.2 0 0 1-3.1-.9c-.6-.3-.7-.9-1.3-1.2-.6-.4-1-.2-1.7-.5-2.4-1-4-2.8-4-5.5 0-2.3 1.5-3.8 3.6-4.7-4-4-8-4.7-13.6-5-4.4-.4-7-.4-11.3-.7-3.4-.2-5.4-.6-8.8-1.1-2.6-.4-4.1-.6-6.5-1.7-8.2-3.8-13.4-9-14.5-18v-2c0-4.7 1.8-7.5 5-10.8-.8-.2-1.3 0-2.2-.2-2-.8-3.5-2.2-3.5-4.4 0-.8 0-1.4.4-2 .3-.6.8-.7 1-1.2.1-.8 0-1.3.3-2 .2-.5.6-.5.8-1 .7-1.5 1.6-2.7 3.3-2.7 1.4 0 2.3.8 3 2 1.4-.7 1.8-1.7 2.6-3 1.3-2.2 1.8-3.7 1.8-6.2a11 11 0 0 0-.7-4.4c-.4-1.2-.5-2-1.4-3a3.5 3.5 0 0 1-2.8 1.2c-2.3 0-4-2-4-4.3 0-1.7.8-3 2.4-3.7-1.3-1-2.4-1.2-3.7-2-2.1-1.4-2.9-2.7-4.2-4.8-1-1.4-1.2-2.3-1.6-3.8a15 15 0 0 1-.9-5v-1.3c.6-3.9 1.3-6.4 3.8-9.5a11 11 0 0 1 4.6-3.9 11.6 11.6 0 0 1 6.5-1.3c1 .2 1.5.2 2.3.7.3.2.9.7.9.3l-.2-1c0-1.7 1.2-3.2 2.8-3.2 1.2 0 1.7 1 2.3 2 .4-.6.6-1 .6-1.7 0-2.8-1.5-4.2-3.2-6.3-3.7-4.7-8.4-6.9-8.4-12.8 0-1.8.9-3 2.4-4 .4-.2 1 0 1.5-.2.3-.3.3-.7.5-1.1a4 4 0 0 1 1.3-1.3c.8-.8 1.6-.5 2.5-1.2.5-.3.6-.7 1-1.2 1-1.2 2-1.8 3.6-1.8.8 0 1.3 0 2 .3.3 0 .8.5.9.4.1-.2.6-.7 1.1-1 .7-.3 1-.4 1.8-.4.9 0 1.4.5 2.3.5.4 0 .4-.3.7-.5.8-.5 1.2-.8 2.2-.8 1 0 1.4.3 2.2.8.7.4.8 1 1.6 1.5l1.2.3c2 .6 3.6 2 3.6 4.2 0 1.2-.2 2-1.1 2.8-.7.6-1.4.5-2.3.8a13 13 0 0 0 9 2.8c3.5 0 7.6-1.3 7.6-4.7 0-1.6-.9-2.4-1.5-3.8a15 15 0 0 1-1.7-6.9c0-2.2.2-3.5 1.5-5.3 1.3-1.9 3-2.3 5.2-2.3z"
				fill="#c7b37f"
			/>
			<g fill="none" stroke="#703d29">
				<path
					d="M217.9 191.2c.2.9.9 1.6 2 2a3 3 0 0 0 3-1.1c.8-1 .7-2.3.5-3.3a3.8 3.8 0 0 0-1.4-1.8l-4.1 4.2z"
					strokeLinejoin="round"
					strokeWidth={0.5}
				/>
				<path
					d="M320.8 252.9c-1-2.3-3.4-1.3-3.6 0-.3 3 2.3 3.8 4.1 3.3.9-.2 1.6-.8 2-1.5.5-.8.6-2 .3-3a4 4 0 0 0-.7-1.3 4 4 0 0 0-1-1c-.7-.4-1.5-.5-2.7-.5-4.4 0-8.3 5.3-9.6 10.8a23.6 23.6 0 0 0-.2 9.6 18 18 0 0 0 4.7 9 20 20 0 0 0 7.9 4.7c1.1.3 2.2.3 3.1 0 2.7-.5 3.9-3 2.6-5.5-1.1-2-4.3-3.2-5.8-.6a2.6 2.6 0 0 0-.4 1.3c0 .7.3 1.5.8 1.8 1.2.8 3 .6 3-1.5"
					strokeLinecap="round"
					strokeWidth={0.5}
				/>
				<path
					d="M307 283.2a9 9 0 0 1 5.3-3c2.4-.2 4.5.5 6.6 1.6a14.9 14.9 0 0 1 8.6 13.6c0 3-.8 6-1.5 7.6-.7 1.3-2.5 7.1-12.3 11.2a67.4 67.4 0 0 1-20.5 3c-8.4.4-16 .7-20.5 6.2"
					strokeWidth={0.7}
				/>
				<g strokeWidth={0.6}>
					<path d="M309.1 292.6c-.2-.9 0-1.7.7-2.7 1-1.3 2.9-1.7 4.7-.7.6.3 1.3.8 2 1.7l1 1.2.8 2c2 5.6-1.2 11.7-5.2 14.1-3.2 2-7 2.8-11.5 3.3l-5.3.3h-7.6a56.3 56.3 0 0 0-5.8 0l-6 .6-4.4.8-1.5.4-1 .3a31.9 31.9 0 0 0-7.7 3.3c-.7.4-1.5.9-2 1.4l-1.1 1c-1.5 1.4-3.1 3-3.5 5.3v1.3c0 1.4 1.1 3.4 4.3 4m4.4-136.1c.6 1.2 1 2 .6 3.1-.4 1.4-1.4 2.3-2.8 2.3-3.2 0-5-3.8-3.6-6.2 2.5-4.3 7.4-1.9 12 .2-.3-1-.7-1.4-.6-2.8 0-3.3 2.6-4.8 3.6-8 .6-1.8.8-3.4-.6-4.7-1.1-1.2-2.5-1.1-4-.5-3.1 1.2-6.8 4.6-13.3 4.7-6.5 0-10.3-3.5-13.4-4.7-1.5-.6-2.9-.7-4 .5-1.4 1.3-1.2 3-.6 4.8 1 3 3.5 4.6 3.6 8 0 1.3-.3 1.6-.6 2.7 4.6-2 9.7-4.7 12-.2 1.3 2.5-.4 6.2-3.6 6.2-1.4 0-2.4-1-2.8-2.3-.4-1.1 0-2.2.6-3.1" />
					<path
						d="M251.7 191.9c1.2 1 2 2.1 1.9 4-.1 2-.7 2.5-2.2 3.6m1.9-3c-.1 1.2-.6 2-1.8 2.5"
						strokeLinecap="round"
					/>
				</g>
				<path
					d="m221.4 186.6.5.4.6.7.4.8.2.6v1.5l-.2.7-.4.5-.4.5-.7.3-.9.2-.7.2-.8-.4-.8-.5-.4-.7-.3-.8v-.3l3.9-3.7z"
					fill="#c7b37f"
					stroke="none"
				/>
				<path
					d="M220.2 189.7c-.3-1.3-1.8-1.6-2.4-.8-1 1.2-.3 3.2 1.6 3.8a3 3 0 0 0 3-1.1c.8-1 .8-2.3.5-3.2-.2-.7-.7-1.2-1.4-1.7-2.2-1.7-5.7-1.3-6.8 1.5-1.5 3.6 1.7 6.3 4.7 8.3 3.8 2.5 8 3 11.3 3 7.3-.1 12.9-3.6 16.5-5.6.8-.5 1.7-.4 2.1.2.5.6.5 1.5-.2 2.2"
					strokeLinecap="round"
					strokeWidth={0.5}
				/>
				<path
					d="m198.4 289-1.6.5-1.7 1.3-.7 1-.9 1.6-.4 1.2-.3 1.5-.2 1m15.2-8v1.4l-.3 1-.7 1.7-1.1 1.5-1.2 1-1 .4-1.2.3"
					strokeWidth={0.5}
				/>
				<path
					d="M255.8 327.3c-.3 1.3-1.5 2.8-4.3 3.4h-.5"
					strokeWidth={0.6}
				/>
				<path
					d="M323.4 285a14.6 14.6 0 0 1 4.5 10.8c-.1 2.8-.8 6-1.6 7.5-.7 1.3-2.5 7.2-12.3 11.2a67.7 67.7 0 0 1-20.5 3.1c-8.2.4-15.8.7-20.3 6"
					strokeWidth={0.7}
				/>
				<path
					d="M310 290.3c.6-.9 2.8-1.9 4.6-1a5 5 0 0 1 2 1.7"
					strokeWidth={0.5}
				/>
				<path
					d="m321.3 283 1.1.4a5.6 5.6 0 0 0 3.2 0c2.2-.6 3.7-2.7 2.5-5.5a4.5 4.5 0 0 0-1.4-1.7"
					strokeWidth={0.7}
				/>
				<path
					d="M192.2 223.8c-1.5 1-2.6 1.2-3.8 2.5a22.5 22.5 0 0 0-2.1 5.5m36.9-41.4c0 1.4-1 2.3-2.4 2.6"
					strokeLinecap="round"
					strokeWidth={0.5}
				/>
				<path
					d="M317.7 217.6c3.8 0 14.8 2.9 14.9 15.8 0 12.8-8 14.9-11.1 15.7"
					strokeWidth={0.5}
				/>
				<path
					d="M318.7 217.6c6.5-.3 13.2 4.5 13.5 16.5.3 9.4-6.4 13.6-9.6 14.5m-7.6 14.1.2-1.2.4-2 .6-1.7.7-1.3.8-1m6.3-2.7-.1 1.2-.4.9-.5.8-.7.5-1 .3h-1.5m-11.4-42.3.3-1.3.6-1.3.7-1.2 1.4-1.7 1-1.2 1.7-1.7 1.5-1.5 1-1.1 1.2-1.5 1-1.7.7-1.3.4-1.8.1-2.1-.2-.7M310 296.7l1.3-.3 1-.5.5-.5.4-.7.2-1v-.6M187 283.3l.9.1h1.2l1.3-.5m4-29.3-.2 1.2-.2.4-.4.5-.5.4-.6.3-.8.1h-.5m8-12.5-.3 1.8-.4.7-.7 1-1 .7-.9.5-1.8.4m12.2-31.8-.3 1-.5.8-.6.9-.8.7-1 .5-.8.2h-.6m.3-5v.8"
					strokeWidth={0.5}
				/>
				<g strokeWidth={0.5}>
					<path
						d="M203.4 243.3a5.5 5.5 0 0 1-1.6 1M322.2 280l.4.2c1 .7 3.3-.2 2.7-2"
						strokeLinecap="round"
					/>
					<path d="M318.2 255.7c.8 1 2.4 1.3 3.6 1 .9-.2 1.5-.8 2-1.6.4-.8.6-1.9.3-3a4 4 0 0 0-.7-1.3 5.4 5.4 0 0 0-1.1-1.1l-.3-.2m5.2 27.2a3.1 3.1 0 0 0 0-.6c0-.9-.4-1.7-1-2.3-.2-.2-.4-.5-.7-.6m.4.3c0-1.5-1.3-2.5-2.8-2.8m-3.3 2.3c-.4-.3-.8-.5-1-.9a12.6 12.6 0 0 1-3.5-8.5c0-3.3 1.3-6.7 2.8-8M273 323.3l1.5-1.3 1-.8 1.8-1.1 1.8-.9 1.2-.3 2.5-.5 2.9-.5M262 333.4a14.1 14.1 0 0 1-6.1 5 14.1 14.1 0 0 1-6.1-5" />
					<path
						d="M251.5 330.1a8 8 0 0 1-1.7 3.3"
						strokeLinecap="round"
					/>
					<path d="m251.8 328.4-.4 1.8m-1.8 3.3-.8.8-1.4.7-1.5.5m-4.5-142.2c.2-.6.4-1.1.3-2.1 0-3.4-2.5-4.9-3.5-8-.6-1.8-.9-3.4.5-4.8 1.2-1.1 2.5-1 4-.5 3.2 1.2 6.9 4.7 13.4 4.8-6.5-.1-10.2-3.6-13.3-4.8-1.6-.6-3-.8-4.2.4-1.4 1.3-1 3-.4 5 1 3 3.3 4.5 3.4 7.9 0 1-.2 1.5-.4 2m14.9-10.7c6.4-.4 11.9-4.7 13.7-5 1.6-.3 2.4-.2 3.6.9-1.2-1.1-2.5-1-4-.5-3 1.2-6.8 4.7-13.3 4.8m63.7 90.3a12.4 12.4 0 0 1-5-9.9c0-3.3 1.3-6.7 2.9-8m-56 78a14.1 14.1 0 0 1-6 5 14 14 0 0 1-6.2-5" />
					<path
						d="m245.3 195 1.9-1c.8-.6 1.9-.5 2.3 0 .5.7.6 1.7-.1 2.3"
						strokeLinecap="round"
					/>
					<path d="M235.8 199.4c4.4-.9 8-2.9 10.6-4.4m25.9 131.4.6.7.2.7c.2 1.2-.6 2-1.5 2.1a2.7 2.7 0 0 1-2.8-1.6m-33.3-129.1c4.4-1 8-2.9 10.7-4.4m78 85.5c-.7.3-1.2.3-2.2-.2l-1.5-.8c-2-1.1-4.5-3-6.8-7.2a15 15 0 0 1-1.3-3.6c-.2-.9-.4-1.8-.4-2.7a20.5 20.5 0 0 1 .5-5 16.2 16.2 0 0 1 3.2-7.2c1-1.3 1.7-2 3.5-2m-115-31.5a5.7 5.7 0 0 1 2.1 4.6c0 2.5-2 6.5-7.2 8-2 .5-3.8 0-5-.7" />
					<path d="M205 228.5c1 .6 1.3 1.4 1.3 2.6 0 .8-.5 2-1.5 3a9.9 9.9 0 0 1-7 3.2 8.2 8.2 0 0 1-4.8-1.4 7.3 7.3 0 0 1-3-4.3" />
					<path d="M205 233.8c1 1 1.3 2.2 1.3 3.7 0 2.2-.9 3.9-3 5.7a5 5 0 0 1-1.5 1m103.6-17.6v2.9m-.3-3.6v4m.3-12.6v5.2m-.3-6.3v7m-1.5 65.7c-1 2-1.8 3-3.3 4.5a15.7 15.7 0 0 1-4.7 3.3 19.7 19.7 0 0 1-5.2 1.7c-2.1.5-3.4.6-5.5.7-2 0-3.1 0-5.1-.2-2.1 0-3.3-.4-5.4-.6-1.7-.1-2.7-.3-4.5-.3a22.8 22.8 0 0 0-8.7 1.5c-2.2.9-4.6 2.4-5.1 3-.5-.6-3-2.1-5.1-3a22.8 22.8 0 0 0-8.8-1.5c-1.7 0-2.7.2-4.4.3-2.1.2-3.3.5-5.4.6a37.3 37.3 0 0 1-10.6-.5c-2.1-.5-3.3-.8-5.3-1.8a15.7 15.7 0 0 1-5-3.7m33.6 42.7 1.5-.2m24.2-1.9 1.4-.1 1.4-.6 1-.5 1.3-1.6.3-.6.2-1.3v-.6M314 218.8c.6-2.1-.2-4.3-2.2-4.3m-105.6 37.3a6.5 6.5 0 0 1-2.9 3.7m3-37.4a5.2 5.2 0 0 1-3 3.2c-1.4.7-3.2 0-4-.6" />
					<path
						d="M195 225.9c1.3.6 2.5-.3 2.3-1.9a2.3 2.3 0 0 0-2-1.8"
						strokeLinecap="round"
					/>
					<path d="M200.1 293.3c.3.3.4.6.7.6.5.1 1 .3 1.5-.4.7-.9.3-2.2-.4-3.1a4 4 0 0 0-4.7-.7c-.5.3-1.3.7-2 1.6l-.9 1.3-.9 2c-1.6 4.6.3 9.5 3.4 12.5" />
					<path
						d="m272.2 326.3.5.6.2.7c.2 1.2-.6 2-1.6 2-1.3.2-2.2-.6-2.7-1.6"
						strokeLinecap="round"
					/>
					<path d="M311.6 187.8a6 6 0 0 1 5 5.6c0 3.6-1.2 4.9-3.1 7.4-2 2.7-8.5 7.7-8.5 13.4 0 3.4 1 5.6 3.4 6.7 1.6.7 3.5 0 4.3-.8 2-1.9 1.3-5.2-1-5.6-2.5-.4-3 3.7-.5 3.4m14.3 55.3a3 3 0 0 0-2.9-2.5 3 3 0 0 0-3 3c0 .8.4 1.5.9 2" />
					<path d="M307.1 220.1a5.7 5.7 0 0 0-2.1 4.6c0 2.5 2 6.5 7.2 8 1.9.5 3.8.4 5-.3m-124.9-8.2a7.5 7.5 0 0 0-3.8 2.7 13.5 13.5 0 0 0-1.9 4.9c-.1.7-.3 3 .1 5.3a12.7 12.7 0 0 0 1.9 4.5l.8 1 .9.7m51.2 73.6c3.9 1.8 6.7 3 9.2 6.9a8.2 8.2 0 0 1-1.7 10 6.6 6.6 0 0 1-5.4 1.6c-1.5-.2-3-1.3-3.2-2m-37.2-90a6.6 6.6 0 0 1 3.1 6c0 3-1.5 4.8-3.2 5.9" />
					<path
						d="M201.2 253.1c3.3 4.1 5 6.5 5.1 11.3.1 4.6-1.4 7.7-4 11"
						strokeLinecap="round"
					/>
					<path d="M263.8 199.5a3.3 3.3 0 0 0 1.3-1.8c.4-1.2.4-2.2-.3-3.1.8 1 .9 1.9.7 3.1-.2.8-.7 1.2-1.3 1.8m41.2 69v12.8a19.6 19.6 0 0 1-.3 3.4m0-17.5V283l-.4 2.1m.4-34.3v11.6m.3-10.7v9.4m0-21.5v7.1m-.3-7.9v8.8m.3-15.2v2.8m-.3-3.4v4m-1.4 52.2-.3.5a15 15 0 0 1-3.4 4.6 15.7 15.7 0 0 1-4.6 3.2 19.7 19.7 0 0 1-5.3 1.8c-2 .5-3.3.6-5.5.7-2 0-3 0-5-.2-2.2-.1-3.3-.4-5.4-.6-1.8-.1-2.8-.3-4.5-.3a22.9 22.9 0 0 0-8.8 1.5c-2.1.9-4.5 2.4-5 3a17 17 0 0 0-5.1-3 22.9 22.9 0 0 0-8.8-1.5c-1.7 0-2.7.2-4.5.3-2 .2-3.2.5-5.4.6a37.3 37.3 0 0 1-10.5-.5 19.8 19.8 0 0 1-10-5 17.6 17.6 0 0 1-1.9-2.3m-1.6-2.5a8 8 0 0 1-1.8 6.2c-.7.7-2.2 2-4 2-3 .1-4-2-4.1-2.5" />
					<path d="M204.5 287a8.2 8.2 0 0 1 1.5 2.1c.7 1.4.5 3.8-.1 5a3.7 3.7 0 0 1-.3.3m-16.1 14.4c1.8 2 4.5 4 8.7 5.7a67.4 67.4 0 0 0 20.5 3.1c8 .3 15.5.7 20 5.7m13.9-3.3a12 12 0 0 1 3.2 4.5m-5.9 9.2a7 7 0 0 1-.5.5 6.6 6.6 0 0 1-5.3 1.6 5 5 0 0 1-3.5-2m-4.3-2.4.3.3a6 6 0 0 0 4 2m21.6 0a14.1 14.1 0 0 1-6.1 4.9 14.1 14.1 0 0 1-6.1-5l-.2-.3m12.4.3.6.6a6.6 6.6 0 0 0 5.3 1.6 4.4 4.4 0 0 0 3.3-2l.4-.6" />
					<path d="m271.2 333.3-.6 1-.9.7-1.3.6H267" />
					<path d="M274.4 324.2a6.1 6.1 0 0 1 1.9 2.3c.2.6.4 1.3.4 2a4.7 4.7 0 0 1-1.1 3.2 6 6 0 0 1-4.4 2 4.4 4.4 0 0 1-.3 0m.1-.2a5.5 5.5 0 0 1-4.1-1.7m51-54.3a19 19 0 0 1-4-5.2 15 15 0 0 1-1.3-3.6c-.2-.9-.4-1.7-.4-2.6 0-1.6.1-3.2.5-5a16.7 16.7 0 0 1 3.3-7.3c.5-.6 1-1.4 1.6-1.8m-1-60.6c2 .2 3.8 2.3 3.8 4.5 0 3.1-1 4.4-3.5 7.4-2.1 2.7-8.5 7.3-8.3 11.7 0 .8.5 1.6 1 2.2M307 220c.4.5 1 .8 1.6 1.1a4 4 0 0 0 3.4-.2m-16.9-34.6a4.8 4.8 0 0 1 1.8 2.1c1.4 3.6-1.8 6.3-4.8 8.3a17 17 0 0 1-6.6 2.6" />
					<path d="M291.7 193.2c-.7 0-1.6-.2-2.5-1.2a2.7 2.7 0 0 1-.6-.7m-11.9 3.9a3.7 3.7 0 0 1-1-.8c-.7-.8-1.2-1.9-.7-3.5.5-1.5 3-5.8 3-8.7.3-4.5-1.5-7.2-4.2-8.2" />
					<path
						d="m277.9 181.2-.1 1.7-.5 1.7-.9 2.3-.7 1.6-.7 1.5-.3 1-.2.8.1.8m30.5 101c0 .3.4.6.4.6a6.2 6.2 0 0 0 4.4 2.5c3 0 3.7-2.1 3.8-2.6.4-2.3-.4-3-1.6-3.6 0 0-.7-.3-1.5-.2"
						strokeLinecap="round"
					/>
					<path d="M189.6 283.5a5.5 5.5 0 0 1-3 0c-2.3-.7-4-2.9-3.1-5.5m10.7-25.5c.2.2.3.6.3.8.3 3-2.2 3.8-4 3.4a4.5 4.5 0 0 1-2.5-1.9 3.8 3.8 0 0 1-.5-1.8m17.7-19c.4.5.8 1 1 1.5m-1-6.8c.5.3.8.6 1 1" />
					<path
						d="M206.3 232.4a6.8 6.8 0 0 1-1.3 2 9.9 9.9 0 0 1-7 3.1 8.2 8.2 0 0 1-4.8-1.4 7.6 7.6 0 0 1-3.3-4.4"
						strokeLinecap="round"
					/>
					<path d="M204.3 220.2a6.2 6.2 0 0 1 2 2.7" />
					<path
						d="M206.3 226.6a9.4 9.4 0 0 1-7 6.3 7 7 0 0 1-5.2-.9"
						strokeLinecap="round"
					/>
					<path d="M192 226c.2 2.1 1.7 3.7 4.3 3.8 3.8 0 6-5.4 2.7-9.3" />
					<path
						d="M183.6 244.4c.5.7 1.2 1.3 1.8 1.9a13.4 13.4 0 0 0 4.8 2.6m4.2.4c3.4-.4 5.3-2.9 4.9-5.8-.3-2.3-2.4-4-3.8-4"
						strokeLinecap="round"
					/>
					<path d="M199.9 214.5c1.4 0 2.3 1.3 2.2 2.4" />
					<path
						d="M199.5 194.5a9.2 9.2 0 0 0 4 4.6M319 224a3.7 3.7 0 0 1-3.3 5.7 4.2 4.2 0 0 1-3.5-2"
						strokeLinecap="round"
					/>
					<path d="M305.4 199.3v12.6" />
					<path
						d="M195 225.9c1.2.8 2.6-.6 2-2.1-.3-1-1.8-2.1-3.8-.8-2.1 1.5-1.5 6.3 2.7 6.3 3.7.1 6-5.4 2.7-9.2-3.2-3.7-9-2.9-13 .2a17.1 17.1 0 0 0-5.6 9.3 17 17 0 0 0 0 7.4 16.7 16.7 0 0 0 2.4 6l1 1.3 1.6 1.6a12 12 0 0 0 8.3 3c3.8-.1 6-2.8 5.5-5.9-.4-3-3.4-4.5-5.4-3-1.3.9-1.8 3.8.6 4.5 1.3.4 2.5-1.3 1.6-2.3m103.6-57.5c2.2-1.2 3.8-1 5 .7a7.9 7.9 0 0 1 1.3 5.8c-.4 2.2-1 3-2.8 4.6"
						strokeLinecap="round"
					/>
					<path
						d="M304.4 185.6c2.5-1.6 5.2-1 6.6 1.3a7.3 7.3 0 0 1 1.3 4.9 9 9 0 0 1-4.6 7.3"
						strokeLinecap="round"
					/>
					<path d="M316 191.3c2 .2 3.7 2 3.7 4.2 0 3-.8 4.4-3.3 7.4-2.1 2.6-8.4 7.2-8.3 11.7 0 1.6 1.5 3.2 2.7 3.3" />
					<path
						d="M316.3 225.9c-1.2.8-2.6-.5-2-2 .4-1 1.8-2.2 3.7-.9 2.2 1.5 1.6 6.3-2.6 6.3-3.7.1-6.3-5.2-2.7-9.2 3.3-3.7 9.4-3 13.2 0 1.6 1.4 5 5 5.6 9.6.9 5.6.7 12.6-5 16.8a13.8 13.8 0 0 1-8.5 2.4c-3.8-.1-6-2.8-5.5-5.9.4-3 3.3-4.3 5.4-3 2.2 1.1 1.8 4.3-.6 4.5-1.4.2-2.5-1.3-1.6-2.3"
						strokeLinecap="round"
					/>
					<path d="M314.3 224c.6-2.9 3-3.1 5-3.1 5.2 0 8.9 6.3 9 12.4 0 7.6-3.3 12.1-9 12.3-1.3.1-3.8-.6-3.9-2.3" />
					<path
						d="M317.5 222.7c5.6 1.2 7.6 6.2 7.6 11 0 3.9-.4 9.2-8 11"
						strokeLinecap="square"
					/>
					<path d="M326.7 276.3a3.1 3.1 0 1 0-5 1.8" />
					<path
						d="M315.6 271.5a13.3 13.3 0 0 0 5 4.8m-1 8.4c-2.7-1.7-7.7-4-12.2-1.8a6.3 6.3 0 0 0-3.4 3.5 8 8 0 0 0 1.5 7.7 6 6 0 0 0 4 2.1c3 0 3.7-2 3.8-2.5.3-2.2-1-3.1-1.6-3.3-.6-.2-2.2-.2-2.6 1-.1.4-.1 1.1.2 1.6"
						strokeLinecap="round"
					/>
					<path
						d="M272.4 326.7c.8 1.8-.1 2.6-1.3 2.7-1.7.2-2.6-1.1-2.7-2.3-.2-2 1.5-3.9 3.5-3.8a4.4 4.4 0 0 1 4 2.8c.2.6.3 1.2.3 1.9a4.7 4.7 0 0 1-1.1 3.3 6 6 0 0 1-4.3 2c-3.4.1-6-3-6-6.3 0-6.1 9.1-9.5 12.8-10.4a67 67 0 0 1 14.3-1.8c2.9-.2 5-.1 8.1-.4 2.8-.3 4.3-.5 7.2-1.1a22 22 0 0 0 10-5.2 13.7 13.7 0 0 0 3.7-17.7 11.5 11.5 0 0 0-8.2-5.3c-3-.5-5.6.8-7.2 3.8a6.2 6.2 0 0 0 .1 5c.5.9 2 2.3 3.8 2.3 3 0 3.8-2 3.9-2.5.3-2.2-1-3.1-1.6-3.3-.6-.2-2.2-.2-2.6 1-.1.4-.1 1.1.2 1.6"
						strokeLinecap="round"
					/>
					<path
						d="M269.8 317c-4 1.7-6.8 3-9.2 6.7a7.9 7.9 0 0 0-1 4c0 2.1 1 4.5 2.7 6a6.6 6.6 0 0 0 5.4 1.7c1.5-.2 3-1.3 3.2-2"
						strokeLinecap="round"
					/>
					<path d="M308 243.3c-1.7.6-3 3.4-3 6 0 3 1.4 5 3.2 6" />
					<path
						d="M310 253.1c-3.2 4.1-5 6.5-5 11.3-.1 4.6 1.3 7.7 4 11"
						strokeLinecap="round"
					/>
					<path d="m292.7 185.6.3-.4c1.3-2 3.7-2.5 5.5-1.2 2 1.6 2.6 4.3 2 7.2a7 7 0 0 1-3.2 4.4" />
					<path
						d="M212 184.7c-2-1-3.7-.8-5 .7a7.5 7.5 0 0 0-1.2 5.8c.4 2.1 1 3 2.8 4.6"
						strokeLinecap="round"
					/>
					<path d="M206.9 185.6c-2.5-1.6-5.2-1-6.6 1.3a7.3 7.3 0 0 0-1.3 4.9 9 9 0 0 0 4.6 7.3" />
					<path d="M199.7 187.8a5.5 5.5 0 0 0-4.8 5.3c0 3.6.9 5 2.9 7.7s8.5 7.7 8.5 13.4c0 3.4-1 5.6-3.4 6.7-1.6.7-3.5 0-4.3-.8-2-1.9-1.2-5.2.9-5.6 2.6-.4 3.1 3.7.6 3.4" />
					<path d="M195.2 191.3c-2 .2-4 2-4 4 0 3.1 1.2 4.5 3.7 7.6 2 2.6 8 7.2 7.9 11.6 0 1.6-1.2 3.7-2.3 3.4" />
					<path
						d="M190.5 252.9c1-2.3 3.4-1.3 3.5 0 .4 3-2.2 3.8-4 3.3-1-.2-1.6-.8-2-1.5a3.9 3.9 0 0 1 .4-4.3 4 4 0 0 1 1-1c.7-.4 1.5-.5 2.7-.5 4.4 0 8.3 5.3 9.6 10.8a23.6 23.6 0 0 1 .2 9.6 18 18 0 0 1-4.7 9 20.1 20.1 0 0 1-7.9 4.7 5.6 5.6 0 0 1-3.2 0c-2.2-.6-3.7-2.8-2.5-5.5 1-2.1 4.3-3.2 5.8-.6.1.3.3.7.3 1.3 0 .7-.3 1.5-.8 1.8-1.1.8-3 .6-2.9-1.5"
						strokeLinecap="round"
					/>
					<path d="M187 280.3c.8.3 1.3.3 2.3-.2l1.5-.8c2-1.1 4.5-3 6.7-7.2a15.1 15.1 0 0 0 1.4-3.6c.2-.9.4-1.8.4-2.7a20.5 20.5 0 0 0-.5-5 16.2 16.2 0 0 0-3.2-7.2c-1-1.3-1.7-2-3.5-2m-7.5 24.7a3.1 3.1 0 1 1 5 1.8" />
					<path d="M185.8 273.2a3 3 0 0 1 2.9-2.5 3 3 0 0 1 3 3 3 3 0 0 1-1 2" />
					<path d="M191.5 273a12.4 12.4 0 0 0 5-9.9c0-3.3-1.3-6.7-2.9-8" />
					<path
						d="M195.7 271.5a13.2 13.2 0 0 1-5 4.8"
						strokeLinecap="round"
					/>
					<path d="M203.7 283c-.8-1.8-2.2-2.6-4.6-2.9a11 11 0 0 0-6.6 1.6 14.8 14.8 0 0 0-8 9 13.7 13.7 0 0 0-.6 4.6c0 2.9.8 6 1.6 7.5.6 1.4 2.4 7.2 12.2 11.2a67.7 67.7 0 0 0 20.6 3.2c8.3.3 16 .6 20.4 6.1" />
					<path
						d="M191.7 284.7c2.7-1.7 7.6-4 12.1-1.8a7 7 0 0 1 3.5 3.5 8 8 0 0 1-1.5 7.7c-.7.7-2.1 2-4 2.1-3 0-3.7-2-3.8-2.5-.3-2.2 1-3.1 1.6-3.3.5-.2 2.2-.2 2.6 1 .1.4.1 1.1-.2 1.6"
						strokeLinecap="round"
					/>
					<path d="M202.2 292.6a2.7 2.7 0 0 0-.7-2.7 4.1 4.1 0 0 0-4.7-.7 5 5 0 0 0-2 1.7l-1 1.2-.8 2c-2 5.6 1.2 11.6 5.2 14.1a24 24 0 0 0 11.5 3.3l5.3.3h13.4l6 .6 4.4.8 1.5.4 1 .3a31.9 31.9 0 0 1 7.7 3.3c.7.4 1.5.8 2 1.4l1.1 1c1.5 1.4 3.1 3 3.5 5.3v1.3c0 1.4-1.1 3.4-4.3 4" />
					<path d="M239 326.7c-1 1.8 0 2.6 1.2 2.7 1.7.2 2.6-1.1 2.7-2.3.2-2-1.5-3.9-3.5-3.8a4.4 4.4 0 0 0-4 2.8 5.5 5.5 0 0 0-.3 1.9 4.7 4.7 0 0 0 1 3.3 6 6 0 0 0 4.4 2c3.4.1 6-3 6-6.3 0-6.1-9.1-9.5-12.8-10.4a67 67 0 0 0-14.3-1.8c-2.9-.2-5-.1-8.1-.4-2.8-.3-4.3-.5-7.2-1.1a22 22 0 0 1-10-5.2 13.7 13.7 0 0 1-3.7-17.7 11.5 11.5 0 0 1 8.2-5.3c3-.5 5.6.8 7.1 3.8.8 1.4.6 3.8 0 5a4.8 4.8 0 0 1-3.9 2.3c-3 0-3.7-2-3.8-2.5-.3-2.2 1-3.1 1.6-3.3.5-.2 2.2-.2 2.6 1 .1.4.1 1.1-.2 1.6" />
					<path
						d="M218.6 185.6a97 97 0 0 0-.3-.4c-1.3-2-3.7-2.5-5.5-1.2-2 1.6-2.6 4.3-2 7.2a7 7 0 0 0 3.2 4.4"
						strokeLinecap="round"
					/>
					<path d="M293.4 191.7c-3.2 3.5-6.5 4.6-11.3 4.8-1.5 0-4.4-.5-6-1.7-1-.8-2.3-2-1.5-4.4.5-1.5 3-5.7 3-8.7.2-4.5-1.5-7-4.2-7.9-5-1.8-10.4 3.2-13.6 4.3a11 11 0 0 1-4.1.6c-1.6 0-2.5 0-4.2-.6-3.2-1.1-8.6-6-13.6-4.3-2.7 1-4.4 3.4-4.2 8 0 2.9 2.5 7.1 3 8.6.8 2.3-.4 3.6-1.5 4.4a11.6 11.6 0 0 1-6 1.7c-4.9-.2-8-1.3-11.3-4.8" />
					<path
						d="M237.9 315.5c.6.3.1-.1 4.2 1.7 3.8 1.7 6.6 3.2 9 7a8.5 8.5 0 0 1 .7 5.9"
						strokeLinecap="round"
					/>
					<path d="M238.1 332.8a6.4 6.4 0 0 0 2.6.7c3.4.1 6-3 6-6.3 0-2.2-1.2-4-2.9-5.6" />
					<path
						d="M238.9 326.7c-.9 1.9.3 2.8 1.5 3 1.7.2 2.6-1.2 2.8-2.4a3.6 3.6 0 0 0-1.7-3.3"
						strokeLinecap="round"
					/>
					<path d="M312 187.8c2.6 0 4.9 2.9 4.9 5.8 0 3.4-1.8 5.5-3.1 7-1 1.3-2.2 2.4-3.6 3.8" />
					<path
						d="M309 185.1a5 5 0 0 1 2.3 2 7.3 7.3 0 0 1 1.2 4.9c-.1 3.4-2.5 5.7-4.7 7.1m-3.8-14 .5.6a7 7 0 0 1 1.2 5.7 6.5 6.5 0 0 1-3 4.4m-4-11.6c2 1.6 2.7 4.4 2 7.2-.5 2-1.8 3.3-3.3 4.2m8.9 32.9c.2.7.6 1 1.2 1.5a10.8 10.8 0 0 0 4.9 2.9 6.2 6.2 0 0 0 5-.7M187 275.4c1 0 2 .6 2.7 1.8a2.6 2.6 0 0 1 .3 1.2c0 .7-.3 1.4-.8 1.8-1.2.7-3.2.4-3.1-1.7"
						strokeLinecap="round"
					/>
					<path d="M193.2 249c4 .8 7.7 5.5 9 10.7a23.6 23.6 0 0 1 .2 9.6 18 18 0 0 1-4.7 9c-.5.6-1 1-1.7 1.5l-.9.6m-6.3-9.7c1.6 0 3 1.5 3 3.2a3 3 0 0 1-.8 2" />
					<path d="M187.7 272.6c1.7 0 3.3 1.6 3.3 3.3a3.1 3.1 0 0 1-1.2 2.5" />
					<path
						d="M203.2 255.6c1.5 2 2.6 3.9 3 6.2m0 6.8a13.8 13.8 0 0 1-1.2 3.2 14.2 14.2 0 0 1-2.8 3.7"
						strokeLinecap="round"
					/>
					<path d="M203.4 243.5a7.5 7.5 0 0 1 2.8 3.8" />
					<path
						d="M206.3 239.6a8.7 8.7 0 0 1-2.7 3.7m-7.3-13.8 1.7-.4 1-.8.7-1 .5-1.4.3-1.2"
						strokeLinecap="round"
					/>
					<path d="m192.8 223.4-2 .7a7 7 0 0 0-2.8 2.4 13.5 13.5 0 0 0-1.8 4.8c-.2.7-.4 3 0 5.3a12.6 12.6 0 0 0 2 4.6l.8 1c1 1 2 1.7 3.5 1.4" />
					<path
						d="M202.4 215.8c-.2 1-.8 2.3-2.4 2.2"
						strokeLinecap="round"
					/>
					<path d="M196.5 222.8c-1.5-1.5-4.8-1.9-8 .2-.5.2-.9.6-1.3 1a7 7 0 0 0-1.1 1.2l-1.2 2a10 10 0 0 0-.7 2c-.6 2.3-.6 4.5-.6 5l.3 2.2a15 15 0 0 0 1.8 5 8.2 8.2 0 0 0 6.2 4.3c1.4.1 3.9-.6 4-2.4" />
					<path
						d="M291 189.7c.2-1.4 1.8-1.6 2.4-.8 1 1.2.4 3.2-1.5 3.8a3 3 0 0 1-3-1.1c-.9-1-.8-2.2-.5-3.2.2-.7.7-1.2 1.4-1.7 2.1-1.7 5.7-1.3 6.8 1.5 1.5 3.6-1.7 6.3-4.7 8.3-3.8 2.5-8 3-11.3 3-7.3-.1-12.9-3.6-16.5-5.6-.8-.5-1.7-.4-2.1.2-.5.6-.5 1.5.2 2.1"
						strokeLinecap="round"
					/>
					<path
						d="M292.5 188.4c.8 0 1 .4 1.2.7 1 1.2.3 3.2-1.6 3.8m14.3 41.2c-2.8 3-.3 8.3 1.8 9.5.7.5 1 .2 1.6.6"
						strokeLinecap="round"
					/>
					<path d="M306.5 228.3c-1 .7-1.2 1.4-1.3 2.6a4.2 4.2 0 0 0 1.2 3.2 11.2 11.2 0 0 0 7.3 3 8.2 8.2 0 0 0 4.9-1.4 7.3 7.3 0 0 0 3-4.3M305 281v2c-.4 2.2-.7 3.5-1.7 5.5a15 15 0 0 1-3.4 4.5 15.7 15.7 0 0 1-4.7 3.3 19.7 19.7 0 0 1-5.2 1.8 33 33 0 0 1-5.5.6h-5l-5.5-.7c-1.7-.2-2.7-.3-4.4-.3a22.8 22.8 0 0 0-8.8 1.5 17 17 0 0 0-5 3c-.6-.6-3-2.2-5.2-3a17.6 17.6 0 0 0-4.1-1.2c-1.8-.3-2.8-.3-4.6-.3-1.8 0-2.7.1-4.5.3-2 .2-3.3.5-5.4.6-2 .1-3 .2-5 .1-2.2 0-3.4-.2-5.6-.6a19.7 19.7 0 0 1-5.2-1.8c-2-1-3-1.7-4.7-3.3a15 15 0 0 1-3.3-4.5 15.1 15.1 0 0 1-1.7-5.5v-83.4H305V281z" />
				</g>
				<g fill="#c7b37f" stroke="#c7b37f">
					<path
						d="M198.3 292.5a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm-12.2-14.1c0-1 .6-1.8 1.4-1.8.8 0 1.4.8 1.4 1.8s-.6 1.8-1.4 1.8c-.8 0-1.4-.8-1.4-1.8z"
						strokeWidth={0.3}
					/>
					<path
						d="M193 242.9c0-.8.7-1.5 1.4-1.5.8 0 1.4.7 1.4 1.5s-.6 1.4-1.4 1.4c-.7 0-1.3-.6-1.3-1.4zm24.6-52.5c-.1-.9.4-1.6 1-1.6.7-.1 1.4.5 1.5 1.3 0 .8-.4 1.5-1.1 1.6-.7 0-1.4-.5-1.4-1.3z"
						stroke="none"
					/>
				</g>
				<g stroke="#c7b37f" strokeLinecap="round" strokeWidth={0.5}>
					<path d="M191.4 251.2a1.8 1.8 0 0 0-.6.4l-.5.7-.2 1m3.8 21.3.7-.8.6-.8.4-.7.5-1m-1 11-1.2.6-.9.5a14 14 0 0 0-1 .7l-1 .8m12-30.3-.6-.7-.7-.7-.8-.5" />
					<path
						d="m203.3 244-1 .4a4 4 0 0 1-1.1.2"
						strokeLinecap="butt"
					/>
					<path d="M190 230.8c0 .4.1.7.3 1.1l.7 1.4a6.8 6.8 0 0 0 2.2 2.1l1.2.7m-.9-4.7 1 .5a6 6 0 0 0 2.4.5l1.5-.1m5.7-32.5-1.6-1a9.6 9.6 0 0 1-2.4-2.3l-.7-1m6-3.6.5 1.3 1.2 1.7c.7.8 1.3 1 2.2 1.6m1.1-4.7.5 1.2.7 1 1 1c.6.5 1 .6 1.6 1" />
				</g>
				<path
					d="M266.6 185.3c0-1.4-1.3-1.5-1.9-1.5-1.4 0-1.8 1-3.7 2a9.5 9.5 0 0 1-5.3 1.4 9 9 0 0 1-5.4-1.5c-1.9-1-2.2-1.9-3.6-1.9-.8 0-1.9.7-1.8 2v.7s.2 0 .2.2c0-.7.1-1 .4-1.4a1.8 1.8 0 0 1 1.3-.7c1.5 0 2 1 3.9 2a9.5 9.5 0 0 0 5.3 1.5c2 0 3.1-.3 5.4-1.5 1.9-1 2.4-2 3.9-2 .5 0 .8.3 1 .8v.7h.2c0-.1.2-.2.1-.8z"
					fill="#703d29"
					strokeWidth={0.1}
				/>
			</g>
			<g fill="#703d29">
				<path d="M211.5 299.2c.4-.4.8-.3.8-.5l-.2-.2-.7-.2-.7-.3s-.3-.2-.4 0c0 .3.9.3.5 1.1 0 .2-.1.5-.6 1l-2.1 2.3-.2.2V299l.1-1.4c.2-.4.6 0 .7-.3 0-.2 0-.2-.2-.3-.2 0-.4 0-1-.3l-.7-.3c-.1 0-.4-.2-.5 0l.1.2c.3.2.4.3.4.7v6c0 .4.1.6.2.6l.3-.2 4.2-4.6z" />
				<path d="M214 300.1c.3-.8.8-.3.9-.6l-.3-.2-1-.3-1-.4h-.3c0 .4 1 .4.7 1.3l-1.4 4.4c-.3.8-.8.4-.9.7v.1l1 .3 1.2.4h.3c.1-.3-1-.2-.6-1.3l1.4-4.3zm3 1c.1-.6.4-.6.7-.5.8.3 1 1.1.8 2-.2.5-.4 1-1.6.7-.3-.1-.6-.2-.5-.4l.6-1.9zm-2.3 3.9c-.4 1.1-1 .6-1 1l.2.1 1.3.4.7.2h.3c0-.4-.9-.2-.6-1.2l.5-1.6c0-.3 0-.4.5-.3.4.2.5.3.6.7l.3 1.7c0 .6.2 1.3.8 1.4.3.2 1 .1 1-.2v-.1h-.3l-.3-.3-.5-3 .6-.2c.3-.2.6-.4.8-1 .1-.4.3-1.7-1.5-2.3l-1.6-.4-1-.3h-.2c-.1.4.9.3.6 1.3l-1.2 4zm6.7 2c-.2 1-1 .4-1.2.7 0 .2.1.3.3.3l1.2.2 1.1.4.5-.1c0-.3-1.1-.3-.8-1.4l1-4.2c0-.5.2-.5.5-.4l.7.2c1 .2.5 1.1.8 1.2.3 0 .2-.3.3-.5v-1.1l-2.6-.6-2.5-.6c-.2 0-.2 0-.2.2l-.5 1.2v.3c.5.1.5-1.2 1.4-1l.7.2c.4.1.5.2.4.6l-1 4.3zm10.2-2.7c.3-.5.7-.4.7-.6l-.3-.2h-.7l-.7-.2c-.1 0-.4-.1-.4 0 0 .4.9.2.7 1 0 .2-.1.6-.5 1.1l-1.7 2.7-.1.2v-.3l-.6-3.2a4.3 4.3 0 0 1-.1-1.3c0-.4.5-.2.6-.5l-.3-.2-1-.1-.8-.2c-.1 0-.4-.1-.4 0l.1.2c.4.2.5.3.5.7l1.1 5.9c.1.4.2.5.3.5l.2-.2 3.4-5.3zm.5 5.4.1.4 1.4.6c1.1.2 2-.5 2.3-1.7.2-1.2-.3-1.7-1.2-2.3-1-.8-1.5-1-1.3-1.6 0-.6.5-1 1-.8 1.5.2 1.4 2 1.6 2 .1 0 .2 0 .2-.3l.1-1.3v-.3h-.5c-.3 0-.5-.4-1.2-.5-1-.2-1.8.5-2 1.6-.2 1 .2 1.4 1 1.9 1.2.9 1.7 1 1.6 1.9-.2.7-.8 1.1-1.4 1-1-.2-1.3-1.1-1.5-2l-.1-.3c-.2 0-.2.3-.2.4v1.3zm12.6-3.5c.3-.6.6-.5.7-.7 0-.2-.2-.2-.3-.2h-.8l-.7-.1-.4.1c0 .4 1 0 .8 1 0 .1 0 .5-.3 1l-1.4 2.9-.2.2v-.2l-1-3.2a4.3 4.3 0 0 1-.2-1.3c0-.4.6-.3.6-.5s0-.2-.3-.2h-1l-.8-.1c-.1 0-.4-.1-.4 0l.1.2c.4.2.5.3.6.6l1.7 5.8c.1.4.2.5.3.5l.2-.3 2.8-5.5z" />
				<path d="M246 310.8c0 1-.8.8-.8 1.2h1l1 .1.4-.1c0-.5-1.1.2-1.1-1.7v-3.4s.2 0 .3.2l4 5h.3v-.2l.1-5.3c0-1 .8-.8.8-1.1l-.2-.1h-2v.1c0 .3 1 .2 1 1v3.2l-.1.4-.3-.3-3.4-4.2c-.1-.2 0-.3-.3-.3h-1.4l-.1.2c0 .4 1-.2.9 1.7v3.6zm8.4-4.3c0-1 .6-.6.6-.9l-.3-.1h-2.3c0 .4.9.1.9 1v4.6c0 1-.6.7-.6 1v.1h2.3l.3-.1c0-.3-1 .1-1-1v-4.6zm3.6 4.4c0 1.2-1 .7-1 1 0 .3.2.3.3.3h2.4c.3 0 .5 0 .5-.2 0-.3-1.1 0-1.1-1.2v-4.3c0-.5 0-.5.3-.5h.8c1 0 .7 1 1 1 .3 0 .2-.4.2-.5l-.1-.9s0-.2-.2-.2H256c-.2 0-.2.2-.2.3l-.1 1.2.1.4c.4 0 .1-1.3 1.1-1.3h.7c.4 0 .5 0 .5.5v4.4zm5-1.8h-.3v-.4l.6-1.8h.1l1 1.7v.3l-.2.1-1.2.1zm1.5.4c.2 0 .3 0 .6.8l.2.6c0 .6-.6.6-.6.8 0 .2.2.1.3.1h1l1-.1c.3 0 .4 0 .4-.2 0-.3-.5.1-.8-.6l-2.8-5.6-.2-.3-.2.4-1.9 5.9c-.2.5-.6.5-.6.7 0 .2.2.1.3.1h1.5c.2-.1.5 0 .5-.3 0-.2-1 0-1-.7l.1-.7c.2-.7.3-.7.5-.7l1.7-.2zm6.6-4c0-.6 0-.6 1-.7 1.6-.3 1.1 1 1.5.9.2 0 .1-.4.1-.5l-.1-1h-.2l-2 .2-2.2.3c-.2 0-.2 0-.2.2 0 .3 1 0 1 .8l.6 4.4c.2 1.2-.5.7-.5 1.2h.2l1.1-.1 1-.1c.2 0 .4 0 .4-.2 0-.3-1 0-1.1-1l-.2-1.4c0-.5-.1-.6.3-.7h.6c.9-.2.8.9 1 .8.3 0 .2-.3.1-.5l-.2-1.6c0-.3-.2-.3-.2-.3-.2 0-.1 1-.8 1l-.6.1c-.4 0-.4 0-.4-.4l-.2-1.3zm3.2 2.2c.3 2 1.7 3 3.4 2.7 2.7-.5 2.8-3 2.5-4.2-.3-2-1.8-3-3.5-2.7-2 .4-2.8 2.2-2.4 4.2zm.9-.7c-.3-1.4 0-2.7 1.4-3 1-.3 2.3.6 2.7 2.7.3 1.6 0 3-1.4 3.2-1.5.3-2.4-1.5-2.7-2.9zm6.7-3.3c-.2-.6.1-.7.4-.7.8-.2 1.5.3 1.7 1.3.1.5.2 1-1 1.3-.3.1-.6.2-.7 0l-.4-2zm0 4.5c.3 1.2-.5 1-.4 1.3 0 .2.2.2.3.1l1.3-.3.7-.1c.2 0 .2-.2.2-.2 0-.4-.8.2-1-.8l-.4-1.6c-.1-.3-.2-.4.3-.5.4 0 .6 0 .9.3l1 1.3c.4.5.8 1 1.5.9.3-.1.8-.5.7-.7 0-.1 0-.2-.1-.1h-.6l-2-2.3.5-.5c.1-.3.3-.7.2-1.3-.1-.4-.6-1.7-2.5-1.2l-1.6.4-1 .2-.2.2c.1.4 1-.2 1.2.8l1 4.1zm6.9-1.5c.3 1-.8.9-.7 1.2 0 .2.2.2.3.2l1.2-.4 1.2-.3c.2 0 .4 0 .3-.2 0-.3-1 .2-1.3-.9l-1.1-4.2c-.1-.4 0-.5.3-.6l.7-.2c1-.3 1 .8 1.3.8.2 0 0-.4 0-.5l-.4-.9s0-.2-.2-.2l-2.5.7-2.5.7c-.2 0-.1.1-.1.2l.2 1.3c0 .1 0 .3.2.3.3-.1-.2-1.3.7-1.5l.7-.2c.3 0 .4 0 .6.4l1 4.3zm4.4-5.9c-.3-.9.4-.7.3-1h-.3c-.4 0-.7.2-1 .3l-1 .2s-.3 0-.2.2c0 .3 1-.2 1.2.6l1.2 4.4c.2 1-.4.8-.3 1.2l1-.2 1.3-.3c.2-.1.2-.2.2-.3 0-.3-.9.4-1.2-.7l-1.2-4.4zm1.8 2.1c.6 1.9 2.1 2.7 3.8 2.2 2.6-.9 2.3-3.3 1.9-4.5-.6-2-2.3-2.7-3.8-2.2-2 .7-2.6 2.6-1.9 4.5zm.8-.8c-.4-1.3-.4-2.7 1-3.2 1-.4 2.3.3 3 2.4.5 1.5.5 2.8-1 3.3-1.4.5-2.5-1.2-3-2.5zm6.1-4.3c-.2-.6 0-.7.4-.8.8-.3 1.5.2 1.8 1 .2.6.4 1-.8 1.6-.3 0-.6.2-.7 0l-.7-1.8zm.7 4.5c.4 1-.4 1-.2 1.3 0 .2.2.1.3 0 .4 0 .8-.3 1.2-.4l.7-.3c.2 0 .2-.1.2-.2-.1-.3-.8.3-1.2-.6l-.6-1.5c0-.4-.2-.4.3-.6.4-.1.5-.1.9.2l1.2 1.2c.5.4 1 .8 1.6.6.3-.1.7-.5.6-.8 0 0 0-.1-.1 0h-.6l-2.2-2 .3-.5c.1-.3.2-.7 0-1.3-.2-.4-.8-1.6-2.6-.9l-1.6.7-1 .3v.2c.1.3.8-.4 1.2.6l1.6 4z" />
			</g>
			<g fill="#fedf00" transform="matrix(.512 0 0 .512 0 76.8)">
				<path d="M412.7 249.3h82.1v82h-82.1z" fill="#d52b1e" />
				<path
					d="M451.2 313.8s0 3-.8 5.3c-1 2.7-1 2.7-1.9 4a13.2 13.2 0 0 1-3.8 4c-2 1.2-4 1.8-6 1.6-5.4-.4-8-6.4-9.2-11.2-1.3-5.1-5-8-7.5-6-1.4 1-1.4 2.8-.3 4.6a9 9 0 0 0 4.1 2.8l-2.9 3.7s-6.3-.8-7.5-7.4c-.5-2.5.7-7.1 4.9-8.5 5.3-1.8 8.6 2 10.3 5.2 2.2 4.4 3.2 12.4 9.4 11.2 3.4-.7 5-5.6 5-7.9l2.4-2.6 3.7 1.2h.1z"
					fill="#fff"
					id="ad_svg__a"
				/>
				<use
					height="100%"
					transform="matrix(-1 0 0 1 907.5 0)"
					width="100%"
					xlinkHref="#ad_svg__a"
				/>
				<path d="m461.1 279 10.8-11.7s1.6-1.3 1.6-3.4l-2.2.4-.5-1.2-.1-1.1 3-.7V260l.3-1.3-3.2.2.3-1.4.5-1 1.9-.4h1.9c1.8-3.4 9.2-6.4 14.4-1 3.8 4 3 11.2-2 13.2a6.3 6.3 0 0 1-6.8-1.1l2-4c2.7 1.7 5-.3 4.8-2.4-.2-2.7-2-4.3-4.3-4.5-2.3-.2-4 1-5 3-.6 1.3-.3 2.2-.5 3.6-.2 1.5 0 2.3-.5 3.8a8.8 8.8 0 0 1-2.4 3.6l-11 12-43 46.4-3.2-3 43.2-46.7z" />
				<path
					d="M429.5 283s2.7 13.4 11.9 33.5c4.7-1.7 7.4-2.8 12.4-2.8 4.9 0 7.6 1 12.3 2.8A171 171 0 0 0 478 283l-24.2-31-24.4 31z"
					fill="#fff"
				/>
				<path d="m456.1 262.4 16.8 21.7s-2.2 10.5-9 26.3c-2.7-.6-5-1.1-7.8-1.3v-46.7zm-4.7 0-16.8 21.7s2.2 10.5 9 26.3c2.7-.6 5-1.1 7.8-1.3v-46.7z" />
			</g>
			<g fill="#d52b1e">
				<path d="M257.8 204.4H300v42h-42z" fill="#fedf00" />
				<path d="M263.7 204.4h6.3v42h-6.3zm12 0h6.3v42h-6.2zm12 0h6.3v42h-6.2z" />
			</g>
			<g fill="#d52b1e" stroke="#d52b1e" strokeWidth={0.5}>
				<path
					d="M211.4 282.8c.2.8.4 2 1.1 3.4.8 1.2.5 1.2 2.2 3a13.8 13.8 0 0 0 6.7 3.6c3.4 1 5.7 1 8.5.9 2.2-.1 3.9-.4 5.3-.6 2-.2 3.4-.4 5.7-.5a32.4 32.4 0 0 1 3.1 0c1.2 0 2.4.3 3.7.5 2.8.6 5.6 1.7 5.6 1.7v-43.9h-42v30l.1 2z"
					fill="#fedf00"
					stroke="none"
				/>
				<path
					d="m216.3 290.5 2 1.2 2.7 1v-41.8h-4.7zm23.4 2v-41.6H235v42.2l4.7-.5zm9.3-41.6h-4.6v41.7a31 31 0 0 1 4.6.8V251zm-18.6 0v42.7h-4.7v-42.7z"
					strokeWidth={0.3}
				/>
			</g>
			<g transform="matrix(.512 0 0 .512 0 76.8)">
				<path
					d="M585.5 402.4a20.8 20.8 0 0 1-2.2 6.6c-1.5 2.3-1 2.3-4.3 6a26.3 26.3 0 0 1-13 7 51.8 51.8 0 0 1-16.6 1.6c-4.3-.2-7.5-.7-10.3-1-3.8-.6-6.7-.9-11-1a62.9 62.9 0 0 0-6.2 0 83.3 83.3 0 0 0-18.3 4.2V340h82.2v58.5l-.3 3.8z"
					fill="#fedf00"
				/>
				<g id="ad_svg__b">
					<path
						d="m524.6 347-.6.2-.8.8c-.4.4-.7.5-1.2.8l-.6.5c-.3.3 0 .6-.3 1-.1.4-.3.6-.6 1-.4.4-.7.5-1 1l-1.2 1-.3.1h-.6c-.4.2-.5.6-.8.8l.3.6.8 1.4c.2.3.2.7.5.8.5.2.9.2 1.3.1.8.2 1.3.2 2 .5l1.5.8c.5.3.8.4 1.3.5h1.8v.3l2 1a1.7 1.7 0 0 0-.1.4c-.1.3-.2.7-.1.8.6 1.9 1.2 3 1.5 3.2.6.2.8.9 1.1 1.5l-.3.3c-.6.6-1.2 1-1.7 1.8-.7 1.2-1.2 1.2-.3 2.8l1.5 2.4c.4.7.6 1.2.8 2 .2.7.3 1.2.3 2l1 .3.7-.6.6-1.2v-1c-.2-.1-.3-.4-.2-.7 0-.4.5-.3.7-.6.3-.5-.4-.8-.7-1.1-.6-.7-1.4-.9-1.6-1.9 0-.2 0-.4.4-.7l2-1.8c.2.1.6.2 1 .1l1.3.4c.6.2.9 0 1.2 0h.4l.1.6c.1 1-.1 3 .2 3.5l.3.6.2.6v2l-.2 1.7c0 .4-.2.7-.5 1-.2.4-.6.4-1 .7v1l1.1.5 1.3.3.7-.3.1-.6.5-.5c.4-.2.8 0 .9-.1.2-.3 0-.4 0-.8 0-.6-.2-1-.3-1.6a11.8 11.8 0 0 1-.1-2.8c0-.6 0-1 .2-1.5.1-1 .4-1.4.6-2.2.3-1 .3-1.6.4-2.5a24.4 24.4 0 0 0 10.1-.6c.8.7 1.7 1.2 2.7 1.6v1c0 .3 0 .4.2.7l.3.3c.3 0 .5 0 .7-.2.2-.2.2-.4.2-.7v-.7h1.8v1.1c.1.3.3.4.5.4a.7.7 0 0 0 .6 0c.3-.2.2-.6.3-1v-.7l1-.4a5.1 5.1 0 0 1 0 .9l-.3.9c-.2.6-.5.8-.8 1.4-.4.6-.5 1-1 1.5l-.6.7-.6.9-.9 1c-.7.6-1.2.2-2 .9l-.3 1 1.4.6 1.3.2.4-.2c0-.3 0-.6.3-.8.2-.3.4-.3.7-.4.4 0 .8 0 1-.2.4-.3.4-1 .7-1.5a12.7 12.7 0 0 1 3-3.9l1.7-1.4c.2-.4.5-.5.5-1l-.2-.6-.2-1c1.5.7 1 .7 1.2 1.4.3.6 0 1 .1 1.7.1.8.5 1.1.5 1.9.1.9-.1 1.4-.3 2.3-.1.8-.1 1.3-.5 2a3.8 3.8 0 0 1-1.1 1.5l-.6.5-.1 1 1.1.4 1.6.4.4-.3c.2-.7 0-1.7.4-1.7.4-.1.7 0 .8-.3v-.7l.7-4.5.4-1.9.4-1.7c.7-2-.2-2.3-1-3.6-.5-.7-.7-1-.7-1.5V362a42.7 42.7 0 0 1 0-2.8l.4-.2c1.2-.7 1.7-.9 2.4-2.5a3.4 3.4 0 0 0 .3-1.5v-1l-.4-1a3.2 3.2 0 0 0-.6-.8c-.7-1-1.7-1.1-2.7-1.5-1.5-.5-2.5-.4-4-.5-1.8-.2-2.7-.2-4.4 0-2 0-3.1.4-5.1.7l-4.9.4c-2.3 0-4.4-.5-5.8-.4-2.4.2-2.5.8-6.2 1.1a67 67 0 0 1-3.8.2l-2.2-.7c.9-.3 1.1-.5 1.5-1 .3-.4.2-.7.6-1.1l.7-1a2.2 2.2 0 0 0-.9-.4h-1a3 3 0 0 0-1.2.3l-.8.6-2.2-1.2a8.8 8.8 0 0 0-3-.9zm2 11.8z"
						fill="#d52b1e"
					/>
					<g fill="none" stroke="#fedf00" strokeLinecap="round">
						<path d="m568.8 359.5-.8.3c-.9.4-1.6.4-2.6.5-2.6.2-4.3-1.1-7-.9-1.4.1-2 1.2-3.5 1.6a9.3 9.3 0 0 1-1.7.2l.5-1s-1.2.3-2 .3a7.5 7.5 0 0 1-1.6-.2l1-1-1.3-.2a4 4 0 0 1-1-.7 20.5 20.5 0 0 0 1.7-.3c1.5-.4 2-1.2 3.9-1.4 1.1 0 3 0 7.6.8 3 .5 4.4.2 5.5-.3.8-.3 1-1 1.1-1.8.1-.8-.4-1.4-.8-1.8-.1 0-.5-.3-1.1-.4" />
						<path
							d="M524.8 350.6c-.5 0-.9 0-1.3.3-.5.3-.6.7-1 1.1.5.1.8.4 1.2.3.4 0 .5-.2.8-.5.3-.4.4-.7.4-1.2h-.1z"
							fill="#fcd900"
							strokeLinecap="butt"
							strokeWidth={0.5}
						/>
						<path d="M536 363.8a13.6 13.6 0 0 0 1 2.3c.2.8 0 1.2.2 2v1.6m6.8-7-.3 1.3-1 3.5v.7m-11-4c.9.2.6 3.3 1.9 4" />
						<path
							d="m560.1 369.8.4-.3a8.2 8.2 0 0 0 2.7-1.8"
							strokeLinecap="butt"
						/>
						<path d="M552.4 368c3.5-.9 5.9-2.6 7.6-2.9m-4-1.5h.8c1.5-.3 1.7.6 2.7 1.2 1.9 1 2.1 2.3 4.3 3.4l.4.1.8.4" />
						<path
							d="M517.7 354.5h.7l.8-.2c.3 0 .5 0 .7.2.2 0 .2.1.3.3 0 .2.2.3.1.5 0 .2-.3.4-.6.4-.2 0-.4 0-.5-.3a.5.5 0 0 1 0-.4 1 1 0 0 1-.9 0 1 1 0 0 1-.6-.5z"
							fill="#fcd900"
							strokeLinecap="butt"
							strokeWidth={0.5}
						/>
					</g>
					<path
						d="m525.1 364.2-2-.9c.4-.2.7-.2 1-.5.3-.4.3-.8.5-1.3s.2-1 .7-1.4c.3-.2.8-.2 1.1-.1.4 0 .8.4.9.7 0 .6-.2 1-.3 1.5 0 .6-.3.9-.2 1.4 0 .4.2.6.4 1l-2-.4zm-1 1a.6.6 0 1 1 .7.5.6.6 0 0 1-.7-.6zm-1.7-16.6h-.2c-.4-.4-.4-.8-.6-1.2a4 4 0 0 1-.3-1.2v-2c0-.3 0-.6-.2-.9 0-.2-.4-.3-.3-.4 0-.1.3 0 .4 0 .4 0 .6.1 1 .4.3.3.5.6.6 1l.4 1.5.3.8.5.6-.7.8-.9.6zm3.6 10.6 2.2 1a9.2 9.2 0 0 0 3.5-3.8c.9-1.8 1-2.7 1.4-4.4l-1.8-.5h-.4c-.5 1.8-.7 2.7-1.6 4.2-.8 1.3-1.7 2.3-2.6 3l-.7.5zm5 18.2.8-1.3 1.4-1.1h.4a8.7 8.7 0 0 1-.5 2.8l-.4 1-.5.5c-.5-.8-1.3-1.3-1.3-2zm33 1.8 1.4.6 1.5.9v.5l-1.5.2a8.4 8.4 0 0 1-1.3 0h-1l-.6-.4c.5-.7.8-1.6 1.4-1.8zm-9.8-2 1.4.5 1.5 1c0 .1.1.3 0 .4a9 9 0 0 1-2.7.3l-1-.1-.7-.3c.6-.7.9-1.7 1.5-1.8zm-17.4 2.1 1.5.5 1.5 1v.5a9 9 0 0 1-2.8.2h-1l-.6-.4c.5-.7.8-1.6 1.4-1.8zm-9-29.8c-.6-.3-1-1-.6-1.6.1-.2.4-.2.6-.4.2-.3.1-.5 0-.8l-.1-1-.2-1c0-.6 0-1 .4-1.6.2-.3.7-.6.8-.6.2.1 0 .5 0 .8 0 .5.1.7.3 1.2l.7 1.3c.2.6.4.8.4 1.4 0 .5 0 .7-.2 1.2a2 2 0 0 1-.6.8 2 2 0 0 1-.8.4 1.1 1.1 0 0 1-.6 0z"
						fill="#0065bd"
					/>
				</g>
				<use
					height="100%"
					width="100%"
					xlinkHref="#ad_svg__b"
					y={36.6}
				/>
			</g>
			<path
				d="M211.3 204.4h42v42h-42zm46.5 0H300v42h-42zm-46.4 78.4c.2.8.4 2 1.1 3.4.8 1.2.5 1.2 2.2 3a13.8 13.8 0 0 0 6.7 3.6c3.4 1 5.7 1 8.5.9 2.2-.1 3.9-.4 5.3-.6 2-.2 3.4-.4 5.7-.5a32.4 32.4 0 0 1 3.1 0c1.2 0 2.4.3 3.7.5 2.8.6 5.6 1.7 5.6 1.7v-43.9h-42v30l.1 2zm88.4 0c-.1.8-.4 2-1.1 3.4-.8 1.2-.5 1.2-2.2 3a13.8 13.8 0 0 1-6.7 3.6 26.1 26.1 0 0 1-8.5.9c-2.2-.1-3.9-.4-5.3-.6a55.6 55.6 0 0 0-5.6-.5 32.4 32.4 0 0 0-3.2 0c-1.2 0-2.4.3-3.7.5-2.8.6-5.7 1.7-5.7 1.7v-43.9H300v30l-.1 2z"
				fill="none"
				stroke="#703d29"
				strokeWidth={0.4}
			/>
		</Box>
	);
}
