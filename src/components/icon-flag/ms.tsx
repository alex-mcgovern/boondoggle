import clsx from "clsx";
import { utilCss } from "../../styles/utils/util_css.css";
import type { UtilCssArgs } from "../../styles/utils/util_css.css";
import { Box } from "../box";
import { flagStyles } from "./styles.css";

export function FlagMs({
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
			<path d="M.2 0h512v512H.2z" fill="#012169" />
			<path
				d="M281.6 127H487l-.3 146.3c1.7 58.7-35 95.2-102.3 111.7-47.9-12-103.1-36.5-103.2-110l.3-148z"
				fill="#fff"
			/>
			<path
				d="M286.1 131.4h196.4l-.2 140.2c1.6 56.3-33.4 91.2-97.8 107-45.8-11.4-98.6-35-98.6-105.4l.2-141.8z"
				fill="#00a2bd"
				stroke="#000"
				strokeWidth={1.8}
			/>
			<path
				d="M481 288.2c-7.2 53.7-48.6 77.2-96.6 89.7-42.4-11.4-88-29.6-97-89.5l193.6-.2z"
				fill="#a53d08"
			/>
			<path d="m376.7 157.5-.3-17.6 14 .1.1 17.5h38.2l.1 13.7-38.3.2-.3 161.4-13.6.1-.2-161.7-38 .2v-14z" />
			<path
				d="m345.8 294.8 35 36.3c12-13.3 3.6-63-12.3-72.1-1.9 5.9-5.1 13-8.6 15.2-7.6 5.2-26.1 11.2-20 15 1.5-1.9 5.2-3.7 7 .6 2 6.9-7.8 7.3-7.8 7.3s-6.2-.8-7.3-7c-1-6.4 9.3-12.2 10.1-12.6 1-.3 14.4-4 16.7-15.9 2.8-11.8 5.8-10 6.3-10.2 17.7 1.7 29.2 33.3 29.9 55.5.6 22.2-9 37-10.8 38-1.8.9-42-47.9-42-47.9l3.8-2.2z"
				fill="#ff9a08"
				fillRule="evenodd"
				stroke="#000"
				strokeWidth={0.8}
			/>
			<path
				d="m371.2 261 .3 65.5m-4.2-64.2.2 59.4m-4.5-50.8.3 47.2m-3.7-43.9.2 39.1m-3.9-37.3v33m-4-30.4v26.1m-3.5-24v20"
				fill="#ff9a08"
				stroke="#000"
				strokeWidth={0.8}
			/>
			<path
				d="m345.2 299 36 41.2"
				fill="none"
				stroke="#ffdf00"
				strokeLinecap="round"
			/>
			<path
				d="M383 273s16.3 35.7 1.2 65M341 291.4s1.2-3.1 2.7-1.8m-5.6-7.3s-6.5 5.8-3 9.5"
				fill="none"
				stroke="#ffdf00"
				strokeLinecap="round"
				strokeWidth={1.4}
			/>
			<path
				d="M390.6 191.4c2.4-2 3.7-3.3 5.2-3 1.5.2 3.5 0 5-.4a31 31 0 0 1 12-.4c1 .2 2.4.7 4.6 2.5 2.1 1.8 5.2 5 4.2 13.6s-.7 12.3-1.2 17.2c-.8 8.5-2.7 15.5-6 15 4.5 8 5 15 8 20.5s4.8 16.8 3.7 29c-1.2 12.3-4.4 39.7 5.3 58.2-1.6 1.1-5.5 0-9-3.7s-5-3.6-7.9-1.4c-8.7 6.7-17 14.8-29 6.7-2.8-1.8-3.7-4-1.6-9.7 5-14 7.5-33.4 6.7-42.4V191.4z"
				fill="#008021"
				stroke="#000"
				strokeWidth={0.3}
			/>
			<path
				d="M399 182.8c.6 2 .9 4.5-.1 6.8s-1.3 5 .4 8.4c2.8-3.9 6.7-3 9-5.4 2.3-2.3 2.8-4.5 4.5-5-1.7-1.5-4.4-3-3.8-7.5.6-4.3 6.7-8 1.2-14.6a8.1 8.1 0 0 0-11-1.4 8 8 0 0 0-2.4 2.6c-.3.8.1 2.5-.7 3.5l-2 2c-.6.3-1 .8-.4 1.5.2.2.7.3 1.1.4a9 9 0 0 1-.8 1.5c-.3.3-.2.6.1 1-.4 1.3.4 1.5-.1 2.5-.5.9-1.2 2 .6 3 .6.3 3 .9 4.3.7zm-22.5 22.9c-3.2.9-8.4-.5-12.4 0-1.7.1-3-.8-2.8-2.5.2-1.7.4-4.4 0-6.8-.5-3.8 1.3-9 3.9-14.8A33 33 0 0 0 369 170c0-1.8.2-3.8 1.8-4.8 1.2-.8 1.4-1.5 1.8-2.1 1-1.5 2-1.8 2-1 .1.5 0 1-.5 1.7 1-.9 2.8-1.9 3.2-2.2.4-.2 2.4-1.7 2.5-.3.8-.4 1.4-.4 1.6 0 .2.5 0 .7-.3 1 .5 0 1.2 1 0 1.8.7-.2 1.3.8.2 1.8-1.1.9-2.4 1.6-2.8 2.3-.4.8-3.1 2.9-4.2 3.3-1.1.5-1.2 1.1-1.2 2.7 0 17.8-2.1 16.4-2.1 20.6 0 1.2-.2 2.2 1 1.9 1-.4 2.8-.9 4.5-.9v10zm.7 38.3c5.2-2.6 11.2-3.5 14.3-4.3 3-.8 8-3.3 10.5-4.5 2.4-1.3 4.4-3 5.7-3.5 1.4-.5 3-1.4 3.8-3.1 4.5-8.8 7-15.8 7-22 0-4-1-8.5-5-5.2-3.7 3-7.7 8.9-8.8 13.1-1.6 6.5-3 7.9-3.3 9.1-.4 1.3-1.7 1.3-3.2 1.6a26.7 26.7 0 0 0-13.5 6.4 136 136 0 0 1-14.3 9.2c-3.7 2-4.4 2.3-5.2 4a16 16 0 0 1-2.3 3.7 3 3 0 0 0-.7 2.5l-.3 5.4c0 1.1.2 1.4.7 1.5.4 0 1-.2 1.3-1.6-.2 1.4 1.7 1 1.8 0 0 1.4 2 .5 2-.8 0 1 1.6.3 1.7-.2l1.1-3.4c.7-1.3 1.4-3 2.8-4 1.5-1 .8-2.3 3.9-3.9zm37.3 94.5 1.3 3.6c.2.9-.2 1.1-.4 1.6a32.8 32.8 0 0 0-2.8 8.8c0 1.2-1 2.5-1.3 3.2-.5.8-.3 1.5.7 2.3.5.3 2-.2 2.3-1 .5.6 1.6.4 2-.5.6.5 1.4.2 2-.7.5.4 1.3-.3 1.6-.8.8.4 1.6 0 1.7-1.7l.4-1.2c.2-.4.3-1.1.3-1.7 0-.7.4-2 .9-2.8.5-1 1.5-2.5 1-4-.3-1.4-.9-1.3-1.4-3.3-1.3-1.3-3-3.2-4.8-3.3-1.8-.1-2.8 1.1-3.5 1.5zm-32.8 9.9c1.6 1.6 5.3 1.7 7.8-1-1-.4-3-1.3-3.8-2-1.3 1.2-2.8 2.6-4 3z"
				fill="#ffe1cf"
				stroke="#000"
				strokeWidth={0.3}
			/>
			<path
				d="M398 165c.7-4 3.6-4 5.4-3.5.8.1 2.6.3 4.3-.2 3.5-.9 6 .3 5.7 3.6 1 .7 1.9 2.3 1.7 3.7-.2 1.4.1 2 1.4 2.1 1.3.2 4 1.8 2.2 4 1.7 1 3 3.7 2.1 5.4-.9 1.8-3.7 2.1-4.8.5-1.3.6-3.4.7-4.6-.6-.9 1-3 .9-3.5 0-.4-1-1-1.4-1.9-1.7-1-.3-1-2.8.4-3.1-.2-.8-.1-1.6.2-2 .4-.4.1-1.2-.7-1.8-.8-.7-1.5-3-.7-4.4-1.4.5-4.4-.9-5-1.8-.7-1-1.6-1-2.1-.2z"
				fill="#870f00"
				stroke="#000"
				strokeWidth={0.3}
			/>
			<path
				d="M399 182.8c2.2-.3 3-1.7 4.6-1.6m-9.5-4.7.6.4c.4.2 1 .3 1.4.3m-1.3-3.1 1 .6m4.2-9.7c-1.3-1.2 2.3-3.8 6-.1.7.6 2.5.7 3 .5m-3.8 1.6c1.7-.4 4.3-.4 5 1.5.8 2 2.3.7 3.5 3 1.2 2.4 3.2 5 5 3.2m-7.3 5.3a4 4 0 0 1-.4-3.3c-.7-.8-.4-2.4 0-3.2m-4.6 1.7c0 .7 1 2 2.4 2.2m7.2 3.2c-.8-1-.7-2-.5-3.2"
				fill="none"
				stroke="#000"
				strokeWidth={0.3}
			/>
			<path
				d="M407.6 169.1c0 1 .5 2.4 1.6 3 .3.5 1.4 2.1 3.7 1.9m.5-9a11 11 0 0 0-5.3-2.6m-8.8 35.6c-2 2.7-3.2 6.4-2.3 11.6 1 5.1 2.4 12.8-1.4 16.2m18.7 10.1c-2.6-.6-6.4-.6-8.5.9a8.2 8.2 0 0 1-7.9.4"
				fill="none"
				stroke="#000"
				strokeWidth={0.3}
			/>
			<path
				d="M408.7 235.7c-2.3.4-3.4 2-3.4 6.3 0 4.2-.9 10.5-.1 16.6m-.7-21.1c-1.5.4-3 .4-2.8 4.5m-5 0c0-2.4 1-4.7 2.6-4.3m14 4.8c.2-5.4-1-7-2.7-7 2.2.1 3.7.4 4.6 9.4.7 6.6 2.1 9 3.7 14.3 4.2 13.6 2.1 34.6 4.2 42m-12.9-57a71.6 71.6 0 0 1-.5 49.3c4.8 13.4 9.7 23.1 10.6 28.6m-24-48c.8-2.8-2-3.2.5-13.3 1-4.4 1.3-7 .6-8.5"
				fill="none"
				stroke="#000"
				strokeWidth={0.3}
			/>
			<path
				d="M397.4 258.3c-1 4.5 3.3 13 1.1 19m-5.5 1.2c0 4 1 9 .8 13-.2 3.9 1.4 5.7 3.2 9.4 6.7 13.4 11.3 23 10.6 35.5 0 2.3.7 7.2-1.7 8.6m-12.6 3.4c.7 0 1.4-.3 2.3-2.4.8-2 3.6-14.5 2.5-23m1.3 9.6a27 27 0 0 1-1.3 12.4"
				fill="none"
				stroke="#000"
				strokeWidth={0.3}
			/>
			<path
				d="M403.8 324.7c1 5.6 1 10.7.1 14.3m-2.4 0c.1 2.3 1.2 8-.6 8.5m9.3-35.3c4.2 6.7 7.6 23.2 11.1 26.7m-7.4-2.7c-.2-1.8-.3-4.4-1.3-5.5m-44.8-75.2c0-1.3-.2-2.5 1.2-4.5m-3.3 5.2c.2-4.4.1-4.8 1.4-6m-3.1 6.1c0-3.1-.4-4.2.8-6.3m15-88.8-4.6 3.4m5.8-2.4c-.5.1-2 1.4-4.9 3.6m5.1-1.8c-1 .4-2.6 2-4.2 3.2m-3-3.5-1.6 1.6M414.3 357c-.3-.3-.3-1.3.2-2.4m1.8 1.9c-.3-.3 0-1.7.4-2.6m1.6 1.9c-.4-.2-.5-1 0-2m1.6 1.2c-.3 0-.4-.5 0-1.8"
				fill="none"
				stroke="#000"
				strokeWidth={0.3}
			/>
			<path d="M397.2 168.7c.8 1 1.7 1 1.8 1.7l.4 1h-.6l-1.4-.1c-.4 0-.9-.5-.6-.6.3 0 .3-.1.2-.3l.3-.6c.2-.1 0 0 0-.4-.2-.3-.3-1-.1-.7zm.5-1a6 6 0 0 1 3.4 1.5c.7.8.1.6-.2.6-.4 0-1-.2-1.4-.6-.3-.4-1.4-1-2-1.1-.2-.1-.5-.5.2-.4z" />
			<path d="M.2 0h256v256H.2z" fill="#012169" />
			<path
				d="M256.2 0v32l-95 96 95 93.5V256h-33.5l-95.5-94-93 94H.2v-34l93-93.5L.2 37V0h31l96 94 93-94z"
				fill="#FFF"
			/>
			<path
				d="m92.2 162 5.5 17-76.5 77H.2v-1.5zm62-6 27 4 75 73.5V256zm102-156-96 98-2-22 75-76zM.2.5 96.7 95l-29.5-4-67-66.5z"
				fill="#C8102E"
			/>
			<path d="M88.2 0v256h80V0zM.2 88v80h256V88z" fill="#FFF" />
			<path d="M.2 104v48h256v-48zm104-104v256h48V0z" fill="#C8102E" />
		</Box>
	);
}
