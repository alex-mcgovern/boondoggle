import clsx from "clsx";

import { utilCss } from "../../../styles/utils/util_css.css";
import { Box } from "../../box";
import { flagStyles } from "../styles.css";

import type { UtilCssArgs } from "../../../styles/utils/util_css.css";

export function FlagPn({
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
			<path d="M0 0h512v512H0z" fill="#00247d" />
			<path
				d="M332.2 268.1a57.1 57.1 0 0 0-15.7 27.4c-4.7 26.8-11 32.8-20.7 27 0 14.5 10.7 15.6 15.3 7.2 0 13.5 4.1 25.2 13.4 35.2 4 4.3 4.7 1.4 2.8-3.3-1.8-4.7-1.8-19.7-5.6-28.4 6 5.1 14.8 2.2 14-11.8-7.6 5.4-15.2 5.2-16-7.5-1-14.9 4-36.5 12.5-45.8zm-9.1-106.9c.5-5.3-.4-10.8-3.7-14.2-6.3-6.7-12.5-4.5-17.1.9-6.9-4.5-10.5 11.3-18.4 8.6 1.3 5.1 3.4 7.3 7.3 5.6-4.1 4.4 0 9.7-4.8 15 8.7 3.4 13.4-2.4 13-12.4a7 7 0 0 0 11.3-.7c-4.6-1.7-4.6-6.5-2.8-11 2.8-6.7 16-6.4 15.2 8.2z"
				fill="#f7e017"
				stroke="#000"
				strokeWidth={0.4}
			/>
			<path
				d="M343.3 238.4c-9.9 6.2-28 3.6-29.6-11.7-1.7-15.4 10.8-22.2 14.2-24.2 5.2-3.1 9.3 2.4 7.6 8.9 5.8-2.5 7-10.5 4.3-15.1 7.6.7 14.7-6.2 17.7-16-2.7 3-10 1-16 .5 1.8-2.4 1.8-7.1 1.2-9.6-6.3 7.7-15.4 4.2-27.5 26.6a1165.6 1165.6 0 0 0 8-36.6c.7-14.6-12.4-15-15.2-8.2 3 4 1.4 8.9.3 16.2-1.3 8.6-4 28.6-6.5 35.3-.7-10.5-6.5-11.2-7.6-16.2-1.7 1.3-2.6 4.8-2.3 7.3-2-2.7-9.1.6-11.7-3.4-2.8 6.7 1.7 13.3 6.3 16.2-2.7.2-3.3 4.1-6.3 4.1 4 5.6 8.1 7.8 12.8 8.3 4.8.4 8.3 2.5 11.2 9.4 4.7 11.1 22.4 18.3 39.1 8.2z"
				fill="#337321"
				stroke="#000"
				strokeWidth={0.4}
			/>
			<path
				d="M367.9 224.9c-5.6 18.4-20.9 31.5-27.8 33.5a134.2 134.2 0 0 0-42 24.4c-1-.3-2-.7-2.6-1.3-3.2-2.7-5.8-11.3-.2-18.7 17.5-19.5 36.3-11 48-24.4-9.8 6.2-27.9 3.6-29.6-11.8 10.6 3.4 29.8 3.6 45-16 2.1 2.7 8 11.2 9.2 14.3z"
				fill="#f7e017"
				stroke="#000"
				strokeWidth={0.4}
			/>
			<path
				d="M332.2 268.1c-8.9 9-13.5 31-12.5 45.8.3 4.1 1.2 7 2.7 8.6.6-8.4 5.6-30.2 18.1-40A103.5 103.5 0 0 0 374 235c-1.2-3.8-3-6.5-6.6-9.1-6 19.9-22.4 29.4-35.1 42.3z"
				fill="#337321"
				stroke="#000"
				strokeWidth={0.4}
			/>
			<path
				d="M362.2 216.3A44 44 0 0 1 345 233c1.5-2 2-4.6 2-6.7-8.7 4-26.2 3.6-33.3.5 10.6 3.3 29.8 3.5 45-16 1.5 2 2.8 3.7 3.5 5.6z"
				fill="#316d3a"
				stroke="#000"
				strokeWidth={0.4}
			/>
			<path
				d="M295.3 262.8c-14.2 15.9-4.8 29.8.7 32.9-1.5 11 7.3 9.7 7.1 19 3.5-2.4 4.5-8.8 4-14 4.4 5.8 15.7-.6 18.2 10 1.5-11.7-6.2-23.5-15.7-22.4 4-4.2 1.7-11-2-12.8-.7 8.6-9 8.6-12.1 6-3.2-2.7-5.8-11.3-.2-18.7z"
				fill="#337321"
				stroke="#000"
				strokeWidth={0.4}
			/>
			<path
				d="M326 363.8c-1.5 1-1.3 3.5-.4 5 2 3.1-1.4 10.2 5 11.7 1.8.4 3.2-1 4-3.5 1.9-7-4.3-7.7-4.9-11-.5-3.4-2.3-3-3.6-2.2z"
				fill="#f7e017"
				stroke="#000"
				strokeWidth={0.4}
			/>
			<path
				d="M331.4 377c-2 1-4 2.7-3 10.7.3 3.3.1 11.3-2.3 11.4 1.5.9 4.6 1.8 6-.2 1.2 2.5 4 1.8 5.2-1.3 1.4 1.4 3.5-1 3.5-3.1 1.3 1 4-.5 3.2-5.2 1.6.6 3.7-.7 4.4-2-2.3-.5-8.2-4.3-9.6-7.3-1.4-3-5-4.4-7.4-3z"
				fill="#f7e017"
				stroke="#000"
				strokeWidth={0.4}
			/>
			<path
				d="M299.1 152.4c1-1.6 2-3.2 3.2-4.5m32.3 33.9c1.6-1.1 4-1.2 6.9-1M332 398.9c-.6-1.1-.9-5.8-.4-8.6m5.7 7.3c-1-1-3-4.2-3.4-7m6.9 3.9a20 20 0 0 1-5.2-8.8m8.4 3.5c-1.5-.4-6.2-4-8.2-7.9"
				fill="none"
				stroke="#000"
				strokeWidth={0.4}
			/>
			<path
				d="M429.9 263c22.9 23 24.3 41.1 20.8 51.8-1.8-10-11.3-25.5-21.2-29.5z"
				fill="#f7e017"
				stroke="#000"
				strokeWidth={0.4}
			/>
			<path
				d="M389 250.2h42.4V310c0 51-23.9 81.2-48 97.2-24.3-16-48.1-46.2-48.1-97.2v-60H365c0 3.2.3 7.8 3.3 12.5 7-.8 15-7 20.5-12.4z"
				fill="#337321"
				stroke="#000"
				strokeWidth={0.4}
			/>
			<path
				d="M431.4 250.2V310c0 15.4-2.2 29-5.9 40.7l-42.1-92.2-42.2 92.2a135.6 135.6 0 0 1-5.9-40.7v-60z"
				fill="#006ec7"
				stroke="#000"
				strokeWidth={0.4}
			/>
			<path
				d="M426.8 346.4c-.8 2.7-2.1 7.1-3.2 9.8L383.4 267 343 356.2c-1-2.7-2.4-7-3.2-9.8l43.5-96z"
				fill="#f7e017"
			/>
			<path
				d="m402.5 379.2 4 2.4a42 42 0 0 0 2-19.5c-2.5 7.3-10.7 7-12.9 11.5 1.4.8 2.6 1.9 3.7 2.8a42 42 0 0 1-13 10.3V339c0-3.4-1-6.2-1-9v-9.8c0-2.2-.3-5.4-2-5.4s-2 3.2-2 5.4v9.9c0 2.7-1 6-1 8.9v47.6c-2-7.1-10-4.7-13.8-11.8 1.5-.4 3-.6 4.5-.2-2.8-11.3-10.4-12.2-11.9-15.6 0 4.7-1.7 15.6 1 20.3.5-.9 1.4-1.8 2.5-2.5 3.1 8.2 17.4 8.2 20.7 21.8 2.7-5 12.4-10.8 19.2-19.5z"
				fill="#f7e017"
				stroke="#000"
				strokeWidth={0.4}
			/>
			<path
				d="M383.3 339.6c3.2 0 13.2-1.2 16.9-1.2 1 0 1.7-1.7 1.7-3.8 0-2-.8-3.7-1.7-3.7-3.6 0-13.7-1.2-16.9-1.2-3.1 0-13.2 1.2-16.8 1.2-1 0-1.8 1.7-1.8 3.7 0 2.1.8 3.8 1.8 3.8 3.6 0 13.7 1.2 16.8 1.2zm-2-19.5a4 4 0 0 0-2.5-1c-2.1 0-3.9 1.9-3.9 4.1 0 2.3 1.7 4.2 3.9 4.2 2 0 3.8-1.9 3.8-4.2 0-1.7 2.1-1.7 2.1 0 0 3.7-2.6 6.6-6 6.6-3.3 0-6-3-6-6.6 0-3.6 2.8-6.5 6-6.5 1 0 2 .3 2.8.8l-.2 2.6z"
				fill="#f7e017"
				stroke="#000"
				strokeWidth={0.4}
			/>
			<path
				d="M366.5 338.4c1 0 1.7-1.7 1.7-3.8 0-2-.8-3.7-1.7-3.7"
				fill="#f7e017"
				stroke="#000"
				strokeWidth={0.4}
			/>
			<path
				d="M367.9 338.4c1 0 1.7-1.7 1.7-3.8 0-2-.8-3.7-1.7-3.7m9.1 8.3c1.2 0 2.1-2 2.1-4.6 0-2.5-.9-4.5-2-4.5m2.1 9.3c1.2 0 2.2-2.2 2.2-4.8 0-2.6-1-4.7-2.2-4.7m7.2 9.5c1.2 0 2.1-2.1 2.1-4.8 0-2.6-1-4.8-2.1-4.8m2.2 9.5c1.2 0 2.2-2 2.2-4.7 0-2.5-1-4.6-2.2-4.6m10 8.5c1 0 1.8-1.7 1.8-3.9 0-2.1-.8-3.8-1.8-3.8m-36 46.1c1.1-.8 2.5-1.6 4-2m33.9 2.5-1.1-1m3.1 2.8a32 32 0 0 0 6-11.4"
				fill="#f7e017"
				stroke="#000"
				strokeWidth={0.4}
			/>
			<path
				d="M374.8 292.6c0-1.1.7-1.6 1.6-2.4 1-.9 1.5-1.4 2.4-1.4h12.3c.8 0 1 .3 1 1.3V310c0 1-.1 1.3-1 1.3h-16.3v-18.9"
				fill="#fff"
				stroke="#000"
				strokeWidth={0.4}
			/>
			<path
				d="M388 313c1.6 0 1.4-.1 2.5-1.5 1.2-1.4 1-1.2 1-2.5v-18.2c0-.9-.2-1.2-1-1.2h-11.3c-.9 0-1.3.5-2.2 1.4-.8.7-1.5 1.1-1.5 2.1V313z"
				fill="#e5e5e5"
				stroke="#000"
				strokeWidth={0.4}
			/>
			<path
				d="M389.2 312.5c0 1-.2 1.3-1 1.3h-12.3c-1 0-1.1-.3-1.1-1.3v-19.8c0-1 .2-1.3 1.1-1.3h12.2c1 0 1.1.3 1.1 1.3z"
				fill="#fff"
				stroke="#000"
				strokeWidth={0.4}
			/>
			<path
				d="M413 238.6c2.3 3.1 3 7.4 1.8 11.5h-3.6c1.5-5.3.6-10.4-5.7-11-9.5-1-20.5 20.8-37 23.5-5-6.9-4.7-20 1.5-26.2-3.2-11-9.9-23-14.5-28.1-3-.6-6.6-1-8.9-.8a33.2 33.2 0 0 1 15-15.4c.8-1.6 1.8-3 2.7-4.4.6-8.6 34.7-4.6 42 .7 0 9.6 3 41.5 6.6 50.2z"
				fill="#96877d"
				stroke="#000"
				strokeWidth={0.4}
			/>
			<path d="M371.6 244.4c-.8-14.8-5.8-27-12.8-35.3a16.7 16.7 0 0 0 14.9-2.9c6-4.8 22.1-13.4 28-9.7.5 1.2.7 4 .4 5.7-1.4-4.4-16.9 2.5-21.3 4.6-4.1 2.3-6 5.4-4.5 12.4-2.4-2.4-1.6-4.8-4.1-6.5 1 2.9 1.8 8 2.1 12.3-1-3-2.6-9.4-6.2-13.2a86.6 86.6 0 0 1 4.6 34.2c2.5 0 8-3 10.2-5-1.9 3.3-7.5 5.6-11.2 6.5a25.4 25.4 0 0 0-2.6 11.7c-.3-4.1.8-14.2 2.5-14.8zm41.4-5.8c-3.2-4.1-9-6.3-16.3-4 1.2-.6 3.6-1.7 5.7-2.2-.2-2.3-2-12.3-2.3-14.7l2-1c1 6 2.4 12.8 3.2 15.6.7.2 2.2.6 3.5 1.4-.6-2.4-3.8-19.1-3.7-21l2.8-1.7a153 153 0 0 0 5 27.6z" />
			<path
				d="M411.3 250.2c1.4-5.4.5-10.4-5.8-11.1-5-.5-10.2 5.2-16.5 11zm-41.2-47.9c-2.8.5-9-.2-12.2-1.4.2-1 .5-2 1-3.1-2 1.5-5.7 4.5-7.1 6.7 4.4 1 13.7 1.6 18.3-2.2z"
				fill="#96877d"
				stroke="#000"
				strokeWidth={0.4}
			/>
			<path
				d="M370 236.4c1 3.6 1.7 7 1.8 10m-10.2-54.3c-1.7 3-3.2 6.1-3.7 8.8 3.2 1.2 9.4 1.9 12.2 1.4"
				fill="none"
				stroke="#000"
				strokeWidth={0.4}
			/>
			<path
				d="m355.5 208.3 3.3.8a16.7 16.7 0 0 0 14.9-2.9c4.6-4 17.3-16.4 31.6-17.7"
				fill="none"
				stroke="#000"
				strokeWidth={0.4}
			/>
			<path
				d="M351.8 204.5c4.5 1 13.7 1.6 18.3-2.2a57.2 57.2 0 0 1 31.7-14.5"
				fill="none"
				stroke="#000"
				strokeWidth={0.4}
			/>
			<path
				d="M429.9 263c15.6 13 27.1 25.4 30.5 45.3 3.4 20 9.7 25.3 17.5 20-1.9 11.5-11.5 12.9-19.7 4 .7 13.3-3.7 29.3-15.3 35-.7-8 3.7-14.2 2.4-20.8-.5-2.9-.7-9.6 2.5-12.7-6.2 2.5-15.9-2.2-16.8-13 7 4 16.2 4.6 19.7-6 3.5-10.7 2-28.9-20.8-51.7zm19.7-103.8c4.8-15 17.5-13.5 21.8-7.1 12.5-8.4 14.1 10.6 24.8 6.9a7.4 7.4 0 0 1-7.7 6.6c4.1 4.4-1.7 11.1 7 15.1-7.4 4.4-17.8-.2-20.6-12.4-2.4 5.7-11.1 5.7-14.7 1 7.7-2.3 7.1-10.8 2.8-14.1-4.3-3.4-12-2-13.4 4zm-37.8 33.2a83.9 83.9 0 0 0 18.4 34.3c9 9.7 22.5 7.3 30-2 .2 18.5-16 20-25 14.2-3.9-2.6-7-1.3-3.3 2.8 5.8 6.3 18.4 10.9 33.3 14.7 26 6.6 16.8 31.3 9.2 31 2.2 0 4-2.7.8-6.1-22.6-24.3-68.6-14.7-67.9-68.9-4.8 14.2-24.7 8.7-15.4-8.2 3 2.9 8.2 3.1 9.7-1.3 1.2-3.5.4-9.5-4.8-14.6.8-.1 2.7 0 2.5-2.6.2 1.5 1.4 3.7 4.3 3 .8 1.5 1.7 2.6 2.9 2 .2-.1 1-.5.6-2.1.3 3 3.2 4 4.7 3.8z"
				fill="#337321"
				stroke="#000"
				strokeWidth={0.4}
			/>
			<path
				d="M435.3 238.9c10.8 8.4 23 8.4 34.2-7.1 3.5-5 9.1-9.1 13-9.6 4-.5 3.8-4.9 6.7-5.8-1.8-.6-2.6-3.3-5.4-3 7-2.8 5-9.5 8.4-12.7-2.8 1.2-7.2-3.8-11.2 2.6 1-3-.3-6.4-1.3-7.7.3 3.3-5.5 4-6.7 12.4-.6 4.8-2.7 4.5-3.1-2.9-.3-5.3-2.4-20.2-5-27.7s-3.2-17.9.3-19.4c-.5-1.1-1.3-2-2.2-2.8-4.3-3.3-11.9-2-13.4 4-4.8 15.1 8.8 23.8 7.6 40.2-2-12.2-18.6-15.3-18.4-27.3-5.4 2.9-4.6 8.2-2.6 12.4-3.3-6.2-11 4-17.5-4.4-.7 11.1 7.5 15.3 14.2 15.8a11.1 11.1 0 0 0 5.5 15c.2-12.4 21.6-7.3 21.8 14 .2 18.2-16.2 19.7-25 14zm29.9 17.5c26 6.6 16.8 31.3 9.2 31-4.9 0-9.5-5-9.8-9.1-5.6 3.5-4.1 10.5.2 13.3-11.8-1.7-16.7 7.5-17 17.6 2.2-4.7 8.7-5 11.1-4 2.4 1 8.7 1.6 11.2-1.8-2 2.1 1.3 7-1.6 10.8 9.8-.5 14-11.3 12.4-16.1 12.6-13.7 10.2-36.2-15.7-41.7zm-19.8 105.4c1.7 1.3 1.5 4 .3 5.6-2.3 3.4 1.2 11.4-5.9 12.8-2.1.4-3.6-1.2-4.3-4-2-8 5-8.5 5.8-12.2.7-3.7 2.7-3.2 4.1-2.2z"
				fill="#f7e017"
				stroke="#000"
				strokeWidth={0.4}
			/>
			<path
				d="M439 376.2c2.3 1.4 4.3 3.3 3 12.1-.5 3.7-.6 12.7 2.1 13-1.7.8-5.2 1.7-6.6-.6-1.5 2.7-4.7 1.7-5.8-1.8-1.7 1.5-4-1.3-3.8-3.7-1.5 1-4.4-.7-3.5-6-1.8.7-4-.9-4.8-2.3 2.6-.5 9.3-4.4 11-7.7 1.6-3.2 5.7-4.6 8.4-3z"
				fill="#f7e017"
				stroke="#000"
				strokeWidth={0.4}
			/>
			<path
				d="M437.5 400.7c.7-1.2 1.2-6.4.7-9.6m-6.5 7.9c1.2-1 3.5-4.6 4-7.7m-7.8 4c1.4-.8 5.1-6 6-9.6m-9.5 3.6a21 21 0 0 0 9.4-8.5"
				fill="none"
				stroke="#000"
				strokeWidth={0.4}
			/>
			<path
				d="M407.3 212.5c-.3 22.7 7.7 34.2 18.7 41.7-4.1-3-2.4-12.9-7.9-16.1 1.3-.1 3.4 2 6.6 1.2-1.5-4.2-4.1-10.6-10.2-11.5 1.6-.2 5 .4 7.3-.6-3.2-5.8-11.6-3-14.5-14.7zm-1.9-21.7c-.7-.3-1.3-1-1.8-2-3 .7-4-1.6-4.3-3 .2 2.5-1.7 2.4-2.5 2.5 5.2 5.2 6 11.2 4.8 14.6-1.5 4.4-6.7 4.2-9.7 1.3-.4 9.5 9.9 12.6 13.6.7 0 2 2.1 1.8 2.7 4.4 2.6-5 .6-12.4-2.8-18.5z"
				fill="#f7e017"
				stroke="#000"
				strokeWidth={0.4}
			/>
			<path
				d="M389 145.8a29.3 29.3 0 0 1-6.6-18.6c.2-4.8 1.9-10.2 7.8-8-1.8 0-.5 4.5-2.5 5 1.6.6 3.7-1 4-2 .4 1.6 2.8 1.2 3 3 1-1 0-5.3-1.5-6.2 1-.6 1.6-4 1.1-5.7-.9.2-2.3 1.7-2.6 4 .5-1.8 0-6.3-2.7-7-.7 1.3-.9 4.3.1 6-2.4-.7-6 1.2-6.8 3.6.2-3 .6-7.1 2-9.8.6-.9-.7-2.4-1.6-.3-1.9-4.2-6.7-6.4-8.8-4.3-2.2 2-5-1-6.8 2.3-1.8 3.3-7.8 3.7-7.5 7.2.2 2.1-.2 5.4-1.1 6.6-2.1 2.8 1 5 1.6 7.5-.4-8.4 10.9-24.8 22.2-18.4-1 2.1-2 6.3-2.3 11.4-.5 7.6.5 18.2 6.6 24.4z"
				fill="#337321"
				stroke="#000"
				strokeWidth={0.4}
			/>
			<path
				d="M392.4 119.3c-.1-2 2.8-4.6 6.7-4.5 4.7 0 8.3 5.2 12 4.7 3.8-.5 2 2 1.2 2.6a3 3 0 0 0-1 3c.3 1.2-.2 2-1.7.8-3.4-2.5-6.7 1-11.1-1-3.8-1.6-6-2.6-6.1-5.6z"
				fill="#c8102e"
				stroke="#000"
				strokeWidth={0.4}
			/>
			<path
				d="M373.2 171.7c-1.9-7-9-14.6-12.4-16.4l-.2-3.7c1.9-1 6.4-5.1 8.4-7.5 14 8 33-3.3 41.7-15l3.4 2.4-1.7 2.6-1.8-1.1c-2.1 3.1-10.1 12-12.5 14a38 38 0 0 0 8.9 1.5c7.8-6.6 14-12.6 17-13l2.4 4-2.2 1.8-1.8-1.2a110 110 0 0 0-21.6 38.2c-5.2-1.4-23.8-.5-27.6-6.6z"
				fill="#96877d"
				stroke="#000"
				strokeWidth={0.4}
			/>
			<path
				d="M398 147c-1.2-.4-2.2-.8-2.8-1.2-1.5 1.6-5.2 3-10 3.3"
				fill="none"
				stroke="#000"
				strokeWidth={0.4}
			/>
			<path
				d="M374 169.3c-1.3-8.3.7-17.5 4.2-20.2a24 24 0 0 0 28.8-.6"
				fill="none"
				stroke="#000"
				strokeWidth={0.4}
			/>
			<path
				d="M374 165c5.9-.3 18.8 1 22 1.5 3.1.6 8.4 2.1 7.7 4m-27-6.7 1.7-2-1.7-2-1.7 2z"
				fill="none"
				stroke="#000"
				strokeWidth={0.4}
			/>
			<path
				d="M380.7 122.5c-2.1-3.6-8-4.7-9.3 0-.5 2.2-1.4 4.4-2.8 5.4s-1 4-.4 5.3c1.4 3.3.1 6.4 3 8.5 0-2.6 3.2-5.2 5.9-5.9 2.7-.7 6.8-3.5 7.3-6.8.6-3.2 1.5-5.9-3.7-6.5z"
				fill="#337321"
				stroke="#000"
				strokeWidth={0.4}
			/>
			<path
				d="M367.3 154.4h.8v6l.4.3 4.4-3 .4.8-4.4 3v.6l4.4 3-.4.8-4.4-3a1 1 0 0 1-.4.3v6h-.8v-6l-.4-.3-4.4 3-.4-.7 4.4-3v-.6l-4.4-3 .4-.8 4.4 3 .4-.3z"
				fill="#96877d"
				stroke="#000"
				strokeWidth={0.4}
			/>
			<path
				d="M374 169.2a8.1 8.1 0 0 1-6.3 3.1c-4.9 0-8.8-4.7-8.8-10.5s3.9-10.5 8.8-10.5c2.8 0 5.4 1.6 7 4.1-.5 1.4-1 4.3-1 5.7-.4-3.6-3-6.5-6-6.5-3.4 0-6 3.3-6 7.2 0 4 2.6 7.2 6 7.2 2.7 0 5.2-2.3 5.8-5.4 0 1.4.1 4.6.4 5.6z"
				fill="#96877d"
				stroke="#000"
				strokeWidth={0.4}
			/>
			<path
				d="M364 179.3a8.4 8.4 0 0 1-1.5-4.5c.8 0 2.4.6 3.1 1.5 0-1.2-.4-3.6-.2-4.7 1 .5 3.1 1.9 3.9 3.5-.2-1-.6-4-.2-5.7 1.1.8 3 2.9 3.4 4.3 0-2.2.7-5.9 1.3-6.8.8 1 2.1 2 3 3.3.1-1.8.9-4 2-4.5a15 15 0 0 1 2.4 6.6c.8-.4 2-2 2.4-3 .5 1 1 2.5.7 4.4a10 10 0 0 0 2.5-4c.7.7 2.1 2.3 2.5 4.1-.2-1.4-.1-4-.5-5.4 1.4.8 2.5 2.4 2.8 4 .4-1.5 1.2-4.2 2-5a14 14 0 0 1 1.3 5.7c.5-1 1.3-3 2-3.5.6 1.2.6 3.9.4 5.3a9.8 9.8 0 0 1 2.6-2.8c0 .6.2 2 0 3 .8-.6 2.2-3.6 2.7-5.2 1.3.8 2.6 3.5 2.7 4.8a11 11 0 0 0 3.3-3.5c0 .7.3 2.9 0 4.5.5-.7 1-2 1.3-2.6.4 1.2.1 3.8-.2 5.2.8-.8 2-1.4 2.8-1.4 0 1.9-1 5.2-2.1 7.7-9-3-27.6-4.1-46.4-5.3z"
				fill="#337321"
				stroke="#000"
				strokeWidth={0.4}
			/>
			<path
				d="M395.1 120.5c0-.8 1.5-2.7 4.3-2.7 3.2 0 6.3 3 9 2.7 2.6-.2 1.3.9.7 1.1-.6.3-.9.7-.7 1.2.2.5-.1.8-1.2.4-2.4-1-4.7.4-7.8-.4-2.7-.7-4.2-1-4.3-2.3z"
				fill="#f7e017"
			/>
			<path
				d="M366.9 186c-2.8 4-5.6 3.3-6.2.7-.5-2.6 1.5-3.8.8-6-.8-2.2 1.2-3.2 2.1-2.2 1 1 4-2.2 5.2 1.1 1.3 3.3 2.4 5.7 1.6 7-.7 1.3-3 .7-3.5-.7zm12-6c-.6-1.5 2.3-4.3 3.8-2.3s3.9-2.2 5.2 1l2.3 6.5c.7 1.8-3.5 2.8-4.8 1.2.2 1-3.6 1.9-4.7-1.1l-1.8-5.4zm19.3 1.8c-.7-1.6 2.7-3.8 4.5-1 .5-1.1 3.8-1.4 4 2l.5 6.8c0 1.3-2 2.5-3.6-.9-2.8.7-4-1.1-4.3-3l-1-4z"
				fill="#f7e017"
				stroke="#000"
				strokeWidth={0.4}
			/>
			<path
				d="M368.7 179.6c-.5-1.2 2.3-3.4 4.2-1.7 2 1.7 4.6-1.4 5.7 1.5 2.3 6.1 2.4 6.5 1.8 7.7-.7 1.2-3.7.7-4.5-.9-.1 1.1-2.7 1-4 0-1.6-1-2.6-4.6-3.2-6.6zm19.6.2c-.7-1.7 3.7-3.2 5.6-.2 1-1 3.1-1.1 4.3 2.2 1.2 3.2 1.4 5 .5 5.9-.6.6-2.9 1-3.6-.5-1 .8-4.2.1-4.9-2-.7-2-1.3-3.9-2-5.4zm18.5 3.3c-.1-1.5 2.3-2.3 3.1 0 1 2.3 3.8.2 4 4 0 .7-.3 3.5-1.2 4.8-.9 1.4-5.2 0-5.5-2.8-.3-2.9-.4-4.5-.4-6z"
				fill="#337321"
				stroke="#000"
				strokeWidth={0.4}
			/>
			<path
				d="M366.9 186c-1-1.7-2.5-4.4-4.2-1.5m13.3 1.7a14 14 0 0 1-1.7-3.7m11.1 3.9a8.8 8.8 0 0 1-2.2-2.8m1.3-3c1.7.2 2.8 2 3.3 2.9.5.8 1.6 2.3 2.4 2.5m4.9 1.3c-.6-1.1-1.1-2-1.2-2.8m0-4.9c.6 1 1 1.7 1.3 2.6m8.4 6.5a8.8 8.8 0 0 0-3-3.8m2.6-2.3c.1 3.3 3.8 3.5 4 5.8m2.8-5.3c.3.8.5 1.7.5 3"
				fill="none"
				stroke="#000"
				strokeWidth={0.4}
			/>
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
