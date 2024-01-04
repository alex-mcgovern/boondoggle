import clsx from "clsx";
import { Box } from "../__DONE__box";
import { type Sprinkles, sprinkles } from "../sprinkles/index.css";
import { flagStyles } from "./styles.css";

export function FlagIo({
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
			<path d="M0 0h512v512H0z" fill="#fff" />
			<path
				d="M512 444c-5.7 7-10.6 23.4-25.9 23.4-30.5 0-38.1-34.6-61-34.6-15.2 0-22.8 34.7-38 34.7-30.6 0-38.2-34.7-61-34.7-15.3 0-22.9 34.7-38 34.7-30.6 0-38.2-34.7-61-34.7-15.3 0-22.9 34.7-38.1 34.7-30.5 0-38.1-34.7-61-34.7-15.3 0-22.9 34.7-38.1 34.7-30.5 0-38.1-34.7-61-34.7-15.2 0-19.7 24.7-28.9 24.7V502c9.2 0 13.7-24.7 29-24.7 22.8 0 30.5 34.7 60.9 34.7 15.3 0 22.9-34.7 38.1-34.7 22.9 0 30.5 34.7 61 34.7 15.2 0 22.8-34.7 38-34.7 22.9 0 30.6 34.7 61 34.7 15.3 0 22.9-34.7 38.1-34.7 22.9 0 30.5 34.7 61 34.7 15.2 0 22.8-34.7 38-34.7 22.9 0 30.6 34.7 61 34.7 15.3 0 20.2-9.8 25.9-16.8zm0-86.6c-5.7 7.1-10.6 23.4-25.9 23.4-30.5 0-38.1-34.6-61-34.6-15.2 0-22.8 34.6-38 34.6-30.6 0-38.2-34.6-61-34.6-15.3 0-22.9 34.6-38 34.6-30.6 0-38.2-34.6-61-34.6-15.3 0-22.9 34.6-38.1 34.6-30.5 0-38.1-34.6-61-34.6-15.3 0-22.9 34.6-38.1 34.6-30.5 0-38.1-34.6-61-34.6-15.2 0-19.7 24.7-28.9 24.7v44.6c9.2 0 13.7-24.7 29-24.7 22.8 0 30.5 34.7 60.9 34.7 15.3 0 22.9-34.7 38.1-34.7 22.9 0 30.5 34.7 61 34.7 15.2 0 22.8-34.7 38-34.7 22.9 0 30.6 34.7 61 34.7 15.3 0 22.9-34.7 38.1-34.7 22.9 0 30.5 34.7 61 34.7 15.2 0 22.8-34.7 38-34.7 22.9 0 30.6 34.7 61 34.7 15.3 0 20.2-9.8 25.9-16.9zm0-86.6c-5.7 7.2-10.6 23.5-25.9 23.5-30.5 0-38.1-34.7-61-34.7-15.2 0-22.8 34.7-38 34.7-30.6 0-38.2-34.7-61-34.7-15.3 0-22.9 34.7-38 34.7-30.6 0-38.2-34.7-61-34.7-15.3 0-22.9 34.7-38.1 34.7-30.5 0-38.1-34.7-61-34.7-15.3 0-22.9 34.7-38.1 34.7-30.5 0-38.1-34.7-61-34.7-15.2 0-19.7 24.8-28.9 24.8v44.5c9.2 0 13.7-24.6 29-24.6 22.8 0 30.5 34.6 60.9 34.6 15.3 0 22.9-34.6 38.1-34.6 22.9 0 30.5 34.6 61 34.6 15.2 0 22.8-34.6 38-34.6 22.9 0 30.6 34.6 61 34.6 15.3 0 22.9-34.6 38.1-34.6 22.9 0 30.5 34.6 61 34.6 15.2 0 22.8-34.6 38-34.6 22.9 0 30.6 34.6 61 34.6 15.3 0 20.2-9.9 25.9-16.9zm0-86.5c-5.7 7-10.6 23.4-25.9 23.4-30.5 0-38.1-34.6-61-34.6-15.2 0-22.8 34.6-38 34.6-30.6 0-38.2-34.6-61-34.6-15.3 0-22.9 34.6-38 34.6-30.6 0-38.2-34.6-61-34.6-15.3 0-22.9 34.6-38.1 34.6-30.5 0-38.1-34.6-61-34.6-15.3 0-22.9 34.6-38.1 34.6-30.5 0-38.1-34.6-61-34.6-15.2 0-19.7 24.7-28.9 24.7v44.6c9.2 0 13.7-24.7 29-24.7 22.8 0 30.5 34.7 60.9 34.7 15.3 0 22.9-34.7 38.1-34.7 22.9 0 30.5 34.7 61 34.7 15.2 0 22.8-34.7 38-34.7 22.9 0 30.6 34.7 61 34.7 15.3 0 22.9-34.7 38.1-34.7 22.9 0 30.5 34.7 61 34.7 15.2 0 22.8-34.7 38-34.7 22.9 0 30.6 34.7 61 34.7 15.3 0 20.2-10 25.9-17zm0-86.6c-5.7 7-10.6 23.5-25.9 23.5-30.5 0-38.1-34.7-61-34.7-15.2 0-22.8 34.7-38 34.7-30.6 0-38.2-34.7-61-34.7-15.3 0-22.9 34.7-38 34.7-30.6 0-38.2-34.7-61-34.7-15.3 0-22.9 34.7-38.1 34.7-30.5 0-38.1-34.7-61-34.7-15.3 0-22.9 34.7-38.1 34.7-30.5 0-38.1-34.7-61-34.7-15.2.1-19.8 25-28.9 25V156c9.2 0 13.7-24.7 29-24.7 22.8 0 30.4 34.6 61 34.6 15.2 0 22.8-34.6 38-34.6 22.9 0 30.5 34.6 61 34.6 15.2 0 22.8-34.6 38-34.6 22.9 0 30.5 34.6 61 34.6 15.3 0 22.9-34.6 38.1-34.6 22.9 0 30.5 34.6 61 34.6 15.2 0 22.8-34.6 38-34.6 22.9 0 30.6 34.6 61 34.6 15.2 0 20.2-9.8 25.9-16.9V98Zm0-86.5c-5.7 7-10.6 23.5-25.9 23.5-30.5 0-38.1-34.7-61-34.7-15.2 0-22.8 34.7-38 34.7-30.6 0-38.2-34.7-61-34.7-15.3 0-22.9 34.7-38 34.7-30.6 0-38.2-34.7-61-34.7-15.3 0-22.9 34.7-38.2 34.7C158.4 34.7 151 0 128 0c-15.3 0-22.8 34.7-38.1 34.7C59.4 34.7 51.8 0 28.9 0 13.8 0 9.2 24.8 0 24.8v44.6c9.2 0 13.7-24.7 29-24.7 22.8 0 30.4 34.7 61 34.7 15.2 0 22.8-34.7 38-34.7 22.9 0 30.5 34.7 61 34.7 15.2 0 22.8-34.7 38-34.7 22.9 0 30.5 34.7 61 34.7 15.3 0 22.9-34.7 38.1-34.7 22.9 0 30.5 34.7 61 34.7 15.2 0 22.8-34.7 38-34.7 22.9 0 30.6 34.7 61 34.7 15.2 0 20.2-9.9 25.9-17z"
				fill="#000063"
				fillRule="evenodd"
			/>
			<path
				d="M377.3 169 374 470.2c0 15.9 14.3 15.9 15.8 0l-3.1-301z"
				fill="#a24300"
				fillRule="evenodd"
				stroke="#fff"
				strokeWidth={1.9}
			/>
			<path
				d="m410.1 281-10-11-2.4 11.1-4.4-16-4 8-.7-17-4 8.1-.8-17-4 8-2.4-20-4 8-2.3-20-4 8-2.4-20-1.1-10 2-4 5.2 2 8.4 7.9 16.7 15.9-10.4-4 16.8 16-10.4-4 16.8 16-10.4-4 15.1 13-10.4-4 15.2 12.9-10.4-4 11.5 14-12-7 2.8 13.1z"
				fill="#006d00"
				fillRule="evenodd"
				stroke="#fff"
				strokeWidth={1.7}
			/>
			<path
				d="m410.1 281-44.5-83.8M396 223l-24-13.8-4.9 22"
				fill="none"
				stroke="#000"
				strokeWidth={0.3}
			/>
			<path
				d="m402.3 235-24-13.9-4.9 22.2"
				fill="none"
				stroke="#000"
				strokeWidth={0.3}
			/>
			<path
				d="m408.7 247-24-13.9-5 22.1"
				fill="none"
				stroke="#000"
				strokeWidth={0.3}
			/>
			<path
				d="M413.4 256 391 245l-6.5 19.1"
				fill="none"
				stroke="#000"
				strokeWidth={0.3}
			/>
			<path
				d="m418.2 265-22.4-11-6.5 19.2"
				fill="none"
				stroke="#000"
				strokeWidth={0.3}
			/>
			<path
				d="M419.3 275 399 260l-1.4 21.1"
				fill="none"
				stroke="#000"
				strokeWidth={0.3}
			/>
			<path
				d="m293.2 138 16.3 6.3-4.7-12.4 14.2 14-1.3-10 11.5 16.8-1.4-10 11.6 16.8-1.4-10.1 15 19-1.4-10 14.9 19-1.4-10 15 19 7.4 9.6.7 5-6.1.5-13-4-25.7-7.9 12.2-1-25.8-8 12.3-1-25.8-8 12.2-1-22.4-5.7 12.2-1-22.4-5.7 12.2-1.1-19.6-8.5 15.6 1.2-10.8-11.8z"
				fill="#006d00"
				fillRule="evenodd"
				stroke="#fff"
				strokeWidth={1.8}
			/>
			<path
				d="m293.2 138 95 63m-44.8-11.4 31.2 2.4-9.5-24.6"
				fill="none"
				stroke="#000"
				strokeWidth={0.3}
			/>
			<path
				d="M329.8 180.6 361 183l-9.4-24.6"
				fill="none"
				stroke="#000"
				strokeWidth={0.3}
			/>
			<path
				d="m316.3 171.7 31.2 2.3-9.5-24.6"
				fill="none"
				stroke="#000"
				strokeWidth={0.3}
			/>
			<path
				d="M306.1 165h27.8l-6-22.4"
				fill="none"
				stroke="#000"
				strokeWidth={0.3}
			/>
			<path
				d="M296 158.2h27.8l-6.1-22.3"
				fill="none"
				stroke="#000"
				strokeWidth={0.3}
			/>
			<path
				d="m288.5 148.6 28.5 5.2-12.2-21.9"
				fill="none"
				stroke="#000"
				strokeWidth={0.3}
			/>
			<path
				d="M482.5 159 469 169l15 1.7-21 5 11.2 3.2-22.6 1.7 11.1 3.3-22.6 1.6 11.1 3.3-26.4 3.3 11.1 3.3-26.4 3.3 11.1 3.4-26.4 3.3L381 207l-5.6-1.6 2-5 9.8-8.3 19.5-16.5-4.2 9.9L422 169l-4.2 9.9 19.5-16.5-4.2 9.9 15.7-14.9-4.2 10 15.6-15-4.1 10 17.4-11.6-8 11.6 17-3.3z"
				fill="#006d00"
				fillRule="evenodd"
				stroke="#fff"
				strokeWidth={1.8}
			/>
			<path
				d="m482.5 159-107 46.3m31.2-29.7-16 23.1 30 3.4"
				fill="none"
				stroke="#000"
				strokeWidth={0.3}
			/>
			<path
				d="m422 169-16 23 30 3.3"
				fill="none"
				stroke="#000"
				strokeWidth={0.3}
			/>
			<path
				d="m437.3 162.4-16 23.1 30 3.3"
				fill="none"
				stroke="#000"
				strokeWidth={0.3}
			/>
			<path
				d="m448.8 157.4-12.2 21.5 26.1 5"
				fill="none"
				stroke="#000"
				strokeWidth={0.3}
			/>
			<path
				d="M460.3 152.4 448 174l26 5"
				fill="none"
				stroke="#000"
				strokeWidth={0.3}
			/>
			<path
				d="m473.5 150.8-17.8 19.8H484"
				fill="none"
				stroke="#000"
				strokeWidth={0.3}
			/>
			<path
				d="m480.4 259.3-17-5 6.1 12-15.7-12.9 2.4 10-13.2-15.9 2.4 10-13.3-15.9 2.4 10-16.8-17.9 2.4 10-16.9-17.8 2.4 9.9-16.9-17.8-8.4-9-1.2-4.9 6-1 13.3 3 26.5 5.8-12 2 26.4 5.9-12 2 26.5 5.8-12 2 22.9 4-12 2 22.8 3.8-12 2 20.4 7h-15.6l12 10.9z"
				fill="#006d00"
				fillRule="evenodd"
				stroke="#fff"
				strokeWidth={1.8}
			/>
			<path
				d="M480.4 259.3 379 204m45.8 7.8-31.4.1 12.1 23.8"
				fill="none"
				stroke="#000"
				strokeWidth={0.3}
			/>
			<path
				d="M439.3 219.8H408l12 23.8"
				fill="none"
				stroke="#000"
				strokeWidth={0.3}
			/>
			<path
				d="m453.8 227.6-31.3.2 12 23.7"
				fill="none"
				stroke="#000"
				strokeWidth={0.3}
			/>
			<path
				d="m464.7 233.5-27.8 2.1 8.5 21.8"
				fill="none"
				stroke="#000"
				strokeWidth={0.3}
			/>
			<path
				d="m475.5 239.4-27.7 2.1 8.4 21.8"
				fill="none"
				stroke="#000"
				strokeWidth={0.3}
			/>
			<path
				d="m484 248.3-29-2.8 14.5 20.8"
				fill="none"
				stroke="#000"
				strokeWidth={0.3}
			/>
			<path
				d="m304.4 265 8.5-11.8-13 1.9 16-9-10.2-.5 18.4-6.6-10.2-.4 18.3-6.5-10.2-.5 21-8.8-10.1-.5 21-8.8-10.2-.4 21.1-8.9 10.5-4.4 5.1.2-.3 5-5.7 9.4-11.6 19 .7-9.7-11.5 19 .6-9.7-11.5 19 .7-9.7L333 259l.6-9.7-8.8 16.7.7-9.8-11.2 14.2 3.4-12.1-13.3 6.7z"
				fill="#006d00"
				fillRule="evenodd"
				stroke="#fff"
				strokeWidth={1.7}
			/>
			<path
				d="m304.4 265 76-65M363 233.5l6.7-24-25.9 3.7"
				fill="none"
				stroke="#000"
				strokeWidth={0.3}
			/>
			<path
				d="m352 242.8 6.7-24.2-25.8 3.7"
				fill="none"
				stroke="#000"
				strokeWidth={0.3}
			/>
			<path
				d="m341.1 252 6.9-24-25.9 3.7"
				fill="none"
				stroke="#000"
				strokeWidth={0.3}
			/>
			<path
				d="m333 259 4-21.8-23.1 1.4"
				fill="none"
				stroke="#000"
				strokeWidth={0.3}
			/>
			<path
				d="m324.8 266 4-21.9-23 1.5"
				fill="none"
				stroke="#000"
				strokeWidth={0.3}
			/>
			<path
				d="m314.3 270.4 9.1-21.6-23.4 6.3"
				fill="none"
				stroke="#000"
				strokeWidth={0.3}
			/>
			<path
				d="m458 109-16.4 11-2.6-11.7-9.7 16.2-1.8-7.8-7.8 16.7-1.1-7.7-6.2 17.1-3.5-8.2-6.1 20.8-3.5-8.3-6.1 20.8-3.5-8.2-6.2 20.7-3 10.4 1.7 4.2 6.6-2.2 11.4-8.4 22.7-16.9-13 4.3 22.7-16.8-13.2 4.3 22.8-16.9-13.1 4.3 22.8-13.1-15.6 3.7 24.6-12.7-15 3.9 18-14.3-15.5 7.4z"
				fill="#006d00"
				fillRule="evenodd"
				stroke="#fff"
				strokeWidth={1.8}
			/>
			<path
				d="M451.7 115 428 135.3 382.2 195"
				fill="none"
				stroke="#000"
				strokeWidth={0.3}
			/>
			<path
				d="m418 170-26.2 12.4-2.2-19"
				fill="none"
				stroke="#000"
				strokeWidth={0.3}
			/>
			<path
				d="m428 157.6-26.5 12.3-2.2-19"
				fill="none"
				stroke="#000"
				strokeWidth={0.3}
			/>
			<path
				d="m437.4 145-26.3 12.3-2-19"
				fill="none"
				stroke="#000"
				strokeWidth={0.3}
			/>
			<path
				d="m445.3 135.7-24.5 9-2.9-15.4"
				fill="none"
				stroke="#000"
				strokeWidth={0.3}
			/>
			<path
				d="m454.3 126.7-26.3 8.7-1-15.1"
				fill="none"
				stroke="#000"
				strokeWidth={0.3}
			/>
			<path
				d="m457.8 118.2-24.3 12.5 4.7-18.9"
				fill="none"
				stroke="#000"
				strokeWidth={0.3}
			/>
			<path
				d="m369.3 88.5 7.4 16.7 9.4-8.8-1.7 18.2 6.3-5.9-3.4 17.8 5.6-6.1-5.2 17.3 8-5.4-7.3 20.5 8-5.5-7.4 20.5 8-5.5-7.4 20.5-3.7 10.3-4 2.7-4.3-4.8-4.6-12.3-9.2-24.6 8.6 9.6-9.2-24.6 8.6 9.5-9.2-24.6 8.5 9.6-11.4-21.4 11 10.1-13.2-21.8 10.4 10-6.7-20.3 8.7 13.4z"
				fill="#006d00"
				fillRule="evenodd"
				stroke="#fff"
				strokeWidth={1.8}
			/>
			<path
				d="m371.2 96.4 7.8 28 2.9 71.4"
				fill="none"
				stroke="#000"
				strokeWidth={0.3}
			/>
			<path
				d="m366.5 158.5 14.8 22.3 13.4-15.3"
				fill="none"
				stroke="#000"
				strokeWidth={0.3}
			/>
			<path
				d="m365.5 143.4 15.2 22.3 13.4-15.2"
				fill="none"
				stroke="#000"
				strokeWidth={0.3}
			/>
			<path
				d="m365.1 128.4 15 22.3 13.2-15.3"
				fill="none"
				stroke="#000"
				strokeWidth={0.3}
			/>
			<path
				d="m364 117 15.5 18.7 11.8-12"
				fill="none"
				stroke="#000"
				strokeWidth={0.3}
			/>
			<path
				d="m361.8 105.3 17.2 19.1 10-12.4"
				fill="none"
				stroke="#000"
				strokeWidth={0.3}
			/>
			<path
				d="m364 96.4 13.2 21.6 7.4-18.3"
				fill="none"
				stroke="#000"
				strokeWidth={0.3}
			/>
			<path
				d="m271.2 211.3 21.4-14.8-10.7-5.5 18.7 3.2-6.4-8.5 18.2 6.8-6.5-8.5 18.3 6.8-6.5-8.4 22 7.4-6.4-8.5 21.4 11-6.5-8.4 22 7.4 10.7 5.5 3.2 4.3-4.3 3-11.7 1.6-19 7.8 3.5-6.7L329 210l8.6-5.9-24.1 7 8.5-6-20.3 7.7 9.1-9.6-20.9 11.2 9.1-9.5-17 11.9 9.5-13.2z"
				fill="#006d00"
				fillRule="evenodd"
				stroke="#fff"
				strokeWidth={1.7}
			/>
			<path
				d="m278 207.3 22-9.5 12-1.8 9.8-.1 17 1 15.2.7 30 3.4"
				fill="none"
				stroke="#000"
				strokeWidth={0.3}
			/>
			<path
				d="m352 210.4 17-10.4-17.3-13.5"
				fill="none"
				stroke="#000"
				strokeWidth={0.3}
			/>
			<path
				d="m333 208.8 20.9-11.1-17.2-13.5"
				fill="none"
				stroke="#000"
				strokeWidth={0.3}
			/>
			<path
				d="m319.5 208.5 19.1-11.5-17.3-12.5m-27 27 17.6-15.4-14.3-7.8"
				fill="none"
				stroke="#000"
				strokeWidth={0.3}
			/>
			<path
				d="m286.4 212.6 13.7-14.8-11-4m16.9 16 17.4-13.8-14-9.5"
				fill="none"
				stroke="#000"
				strokeWidth={0.3}
			/>
			<g fillRule="evenodd">
				<path
					d="m541.5 1173.3-1.7-229.1-61.1-107c-15.3-52.6-7.8-78 17-79.8 24.7-1.6 49.2 13.6 84.8 15.3 35.6 1.7 28.9-59.4 81.5-57.7 52.6 1.7 144.3 32.3 222.3 37.4 78.1 5 118.8-27.2 208.8-30.6 90-3.4 113.7 42.4 118.8 42.4 5.1 0 30.6-18.6 56-22 25.5-3.4 34 10.2 34 10.2s-1.7 57.7-13.6 91.6c-11.9 34-54.3 90-56 90-1.7 0-15.3 249.5-15.3 251.2 0 1.7-675.5-6.8-675.5-11.9z"
					fill="#c00"
					stroke="#000"
					strokeWidth="1pt"
					transform="matrix(.11838 0 0 .10897 279 245.7)"
				/>
				<g stroke="#000" strokeWidth="1pt">
					<path
						d="M531.5 584.6s-68-52-69.8-177.1c-1-72 34.4-124 123-124 124 0 301.1 53.1 301.1 53.1v17.7s-141.7-53.1-301.2-53.1c-70.8 0-106.3 52-106.3 105.2 0 88.6 71 178.3 71 178.3v141.7h-17.8z"
						fill="#fff100"
						transform="matrix(-.11838 0 0 .10897 488.7 284.3)"
					/>
					<path
						d="M478.4 549.2a17.8 17.8 0 1 1-35.5 0 17.8 17.8 0 0 1 35.5 0z"
						fill="#fff"
						transform="matrix(-.11838 0 0 .10897 486.8 284.1)"
					/>
					<path
						d="M478.4 549.2a17.8 17.8 0 1 1-35.5 0 17.8 17.8 0 0 1 35.5 0z"
						fill="#fff"
						transform="matrix(-.11838 0 0 .10897 488.9 279.7)"
					/>
					<path
						d="M478.4 549.2a17.8 17.8 0 1 1-35.5 0 17.8 17.8 0 0 1 35.5 0z"
						fill="#fff"
						transform="matrix(-.11838 0 0 .10897 490 275.2)"
					/>
					<path
						d="M478.4 549.2a17.8 17.8 0 1 1-35.5 0 17.8 17.8 0 0 1 35.5 0z"
						fill="#fff"
						transform="matrix(-.11838 0 0 .10897 490.8 270.4)"
					/>
					<path
						d="M478.4 549.2a17.8 17.8 0 1 1-35.5 0 17.8 17.8 0 0 1 35.5 0z"
						fill="#fff"
						transform="matrix(-.11838 0 0 .10897 490.6 265.2)"
					/>
					<path
						d="M478.4 549.2a17.8 17.8 0 1 1-35.5 0 17.8 17.8 0 0 1 35.5 0z"
						fill="#fff"
						transform="matrix(-.11838 0 0 .10897 483.8 288)"
					/>
					<path
						d="M478.4 549.2a17.8 17.8 0 1 1-35.5 0 17.8 17.8 0 0 1 35.5 0z"
						fill="#fff"
						transform="matrix(-.11838 0 0 .10897 488.8 260.3)"
					/>
					<path
						d="M478.4 549.2a17.8 17.8 0 1 1-35.5 0 17.8 17.8 0 0 1 35.5 0z"
						fill="#fff"
						transform="matrix(-.11838 0 0 .10897 484.9 256.4)"
					/>
					<path
						d="M478.4 549.2a17.8 17.8 0 1 1-35.5 0 17.8 17.8 0 0 1 35.5 0z"
						fill="#fff"
						transform="matrix(-.11838 0 0 .10897 479.7 253.8)"
					/>
					<path
						d="M478.4 549.2a17.8 17.8 0 1 1-35.5 0 17.8 17.8 0 0 1 35.5 0z"
						fill="#fff"
						transform="matrix(-.11838 0 0 .10897 474.5 253.5)"
					/>
					<path
						d="M478.4 549.2a17.8 17.8 0 1 1-35.5 0 17.8 17.8 0 0 1 35.5 0z"
						fill="#fff"
						transform="matrix(-.11838 0 0 .10897 468.9 253.6)"
					/>
					<path
						d="M478.4 549.2a17.8 17.8 0 1 1-35.5 0 17.8 17.8 0 0 1 35.5 0z"
						fill="#fff"
						transform="matrix(-.11838 0 0 .10897 463.2 254.4)"
					/>
					<path
						d="M478.4 549.2a17.8 17.8 0 1 1-35.5 0 17.8 17.8 0 0 1 35.5 0z"
						fill="#fff"
						transform="matrix(-.11838 0 0 .10897 457.7 255.1)"
					/>
					<path
						d="M478.4 549.2a17.8 17.8 0 1 1-35.5 0 17.8 17.8 0 0 1 35.5 0z"
						fill="#fff"
						transform="matrix(-.11838 0 0 .10897 451.6 256)"
					/>
					<path
						d="M478.4 549.2a17.8 17.8 0 1 1-35.5 0 17.8 17.8 0 0 1 35.5 0z"
						fill="#fff"
						transform="matrix(-.11838 0 0 .10897 446.4 257.4)"
					/>
				</g>
				<path
					d="M478.4 549.2a17.8 17.8 0 1 1-35.5 0 17.8 17.8 0 0 1 35.5 0z"
					fill="#fff"
					stroke="#000"
					strokeWidth="1pt"
					transform="matrix(.11838 0 0 .10897 280.9 284.1)"
				/>
				<path
					d="M478.4 549.2a17.8 17.8 0 1 1-35.5 0 17.8 17.8 0 0 1 35.5 0z"
					fill="#fff"
					stroke="#000"
					strokeWidth="1pt"
					transform="matrix(.11838 0 0 .10897 278.7 279.7)"
				/>
				<path
					d="M478.4 549.2a17.8 17.8 0 1 1-35.5 0 17.8 17.8 0 0 1 35.5 0z"
					fill="#fff"
					stroke="#000"
					strokeWidth="1pt"
					transform="matrix(.11838 0 0 .10897 277.7 275.2)"
				/>
				<path
					d="M478.4 549.2a17.8 17.8 0 1 1-35.5 0 17.8 17.8 0 0 1 35.5 0z"
					fill="#fff"
					stroke="#000"
					strokeWidth="1pt"
					transform="matrix(.11838 0 0 .10897 276.9 270.4)"
				/>
				<path
					d="M478.4 549.2a17.8 17.8 0 1 1-35.5 0 17.8 17.8 0 0 1 35.5 0z"
					fill="#fff"
					stroke="#000"
					strokeWidth="1pt"
					transform="matrix(.11838 0 0 .10897 277 265.2)"
				/>
				<path
					d="M478.4 549.2a17.8 17.8 0 1 1-35.5 0 17.8 17.8 0 0 1 35.5 0z"
					fill="#fff"
					stroke="#000"
					strokeWidth="1pt"
					transform="matrix(.11838 0 0 .10897 278.8 260.3)"
				/>
				<path
					d="M478.4 549.2a17.8 17.8 0 1 1-35.5 0 17.8 17.8 0 0 1 35.5 0z"
					fill="#fff"
					stroke="#000"
					strokeWidth="1pt"
					transform="matrix(.11838 0 0 .10897 282.6 256.4)"
				/>
				<path
					d="M478.4 549.2a17.8 17.8 0 1 1-35.5 0 17.8 17.8 0 0 1 35.5 0z"
					fill="#fff"
					stroke="#000"
					strokeWidth="1pt"
					transform="matrix(.11838 0 0 .10897 288 253.8)"
				/>
				<path
					d="M478.4 549.2a17.8 17.8 0 1 1-35.5 0 17.8 17.8 0 0 1 35.5 0z"
					fill="#fff"
					stroke="#000"
					strokeWidth="1pt"
					transform="matrix(.11838 0 0 .10897 293.1 253.5)"
				/>
				<path
					d="M478.4 549.2a17.8 17.8 0 1 1-35.5 0 17.8 17.8 0 0 1 35.5 0z"
					fill="#fff"
					stroke="#000"
					strokeWidth="1pt"
					transform="matrix(.11838 0 0 .10897 298.7 253.6)"
				/>
				<path
					d="M478.4 549.2a17.8 17.8 0 1 1-35.5 0 17.8 17.8 0 0 1 35.5 0z"
					fill="#fff"
					stroke="#000"
					strokeWidth="1pt"
					transform="matrix(.11838 0 0 .10897 304.4 254.4)"
				/>
				<path
					d="M478.4 549.2a17.8 17.8 0 1 1-35.5 0 17.8 17.8 0 0 1 35.5 0z"
					fill="#fff"
					stroke="#000"
					strokeWidth="1pt"
					transform="matrix(.11838 0 0 .10897 310 255.1)"
				/>
				<path
					d="M478.4 549.2a17.8 17.8 0 1 1-35.5 0 17.8 17.8 0 0 1 35.5 0z"
					fill="#fff"
					stroke="#000"
					strokeWidth="1pt"
					transform="matrix(.11838 0 0 .10897 316 256)"
				/>
				<path
					d="M478.4 549.2a17.8 17.8 0 1 1-35.5 0 17.8 17.8 0 0 1 35.5 0z"
					fill="#fff"
					stroke="#000"
					strokeWidth="1pt"
					transform="matrix(.11838 0 0 .10897 321.2 257.4)"
				/>
				<path
					d="M478.4 549.2a17.8 17.8 0 1 1-35.5 0 17.8 17.8 0 0 1 35.5 0z"
					fill="#fff"
					stroke="#000"
					strokeWidth="1pt"
					transform="matrix(.11838 0 0 .10897 283.8 288)"
				/>
				<path
					d="M531.5 584.6s-68-52-69.8-177.1c-1-72 34.4-124 123-124 124 0 301.1 53.1 301.1 53.1v17.7s-141.7-53.1-301.2-53.1c-70.8 0-106.3 52-106.3 105.2 0 88.6 71 178.3 71 178.3v141.7h-17.8z"
					fill="#fff100"
					stroke="#000"
					strokeWidth="1pt"
					transform="matrix(.11838 0 0 .10897 279 284.3)"
				/>
				<path
					d="M1240.2 531.5s15.3-35.4 70.9-35.4c37.8 0 70.8 35.4 70.8 70.8v70.9h35.5v-70.9c0-35.4 35.4-70.8 70.8-70.8 53.2 0 70.9 35.4 70.9 35.4s0-106.3-70.9-106.3c-53.1 0-70.8 35.4-70.8 35.4s17.7-53.1 17.7-106.3c0-53.2-35.4-88.6-35.4-88.6 0 6.8-35.5 35.5-35.5 88.6 0 53.1 17.7 106.3 17.7 106.3s-17.7-35.4-70.8-35.4c-70.9 0-70.9 106.3-70.9 106.3z"
					fill="#fff100"
					stroke="#000"
					strokeWidth={3}
					transform="matrix(.03946 0 0 .04151 307.6 333.1)"
				/>
				<path
					d="M1240.2 531.5s15.3-35.4 70.9-35.4c37.8 0 70.8 35.4 70.8 70.8v70.9h35.5v-70.9c0-35.4 35.4-70.8 70.8-70.8 53.2 0 70.9 35.4 70.9 35.4s0-106.3-70.9-106.3c-53.1 0-70.8 35.4-70.8 35.4s17.7-53.1 17.7-106.3c0-53.2-35.4-88.6-35.4-88.6 0 6.8-35.5 35.5-35.5 88.6 0 53.1 17.7 106.3 17.7 106.3s-17.7-35.4-70.8-35.4c-70.9 0-70.9 106.3-70.9 106.3z"
					fill="#fff100"
					stroke="#000"
					strokeWidth={3}
					transform="matrix(.03946 0 0 .04151 349.5 333.1)"
				/>
				<path
					d="M531.5 832.7V673.2s35.4 53.2 88.6 53.2c43.5 0 88.6-70.9 88.6-70.9s41.5 53.2 88.6 53.2c42 0 88.5-68.6 88.5-68.6s43.2 68.6 88.6 68.6c45.5 0 88.6-53.2 88.6-53.2s46.3 70.9 106.3 70.9c53.1 0 70.9-53.2 70.9-53.2v159.5z"
					fill="#fff100"
					stroke="#000"
					strokeWidth="1pt"
					transform="matrix(.11838 0 0 .10897 279 284.3)"
				/>
				<path
					d="M708.7 832.7v-124S815 744 815 832.7z"
					fill="#fff100"
					stroke="#000"
					strokeWidth="1pt"
					transform="matrix(.11838 0 0 .10897 258 284.3)"
				/>
				<path
					d="M708.7 832.7v-124S815 744 815 832.7z"
					fill="#fff100"
					stroke="#000"
					strokeWidth="1pt"
					transform="matrix(-.11838 0 0 .10897 509.6 284.3)"
				/>
				<path
					d="M602.4 832.7C602.4 744 708.7 688 708.7 688S815 744 815 832.7z"
					fill="#fff100"
					stroke="#000"
					strokeWidth="1pt"
					transform="matrix(.11838 0 0 .10897 279 284.3)"
				/>
				<path
					d="M602.4 832.7C602.4 744 708.7 688 708.7 688S815 744 815 832.7z"
					fill="#fff100"
					stroke="#000"
					strokeWidth="1pt"
					transform="matrix(.11838 0 0 .10897 321 284.3)"
				/>
				<path
					d="M584.6 847.5c0-88.6 124.1-159.4 124.1-159.4s124 70.8 124 159.4h-248z"
					fill="#fff100"
					stroke="#000"
					strokeWidth="1pt"
					transform="matrix(.11838 0 0 .10897 300 282.7)"
				/>
				<path
					d="M1275.6 655.5c-35.4-17.7-166-35.4-376.3-35.4s-350 17.7-385.5 35.4c-35.4 17.7-35.4 53.2 0 70.9 35.4 17.7 175.3 35.4 385.5 35.4s340.9-17.7 376.3-35.4c35.4-17.7 35.4-53.2 0-70.9z"
					fill="#fff"
					stroke="#000"
					strokeWidth="1pt"
					transform="matrix(.11704 0 0 .10897 278.5 303.6)"
				/>
				<path
					d="M425.8 382.8c0 3.9-35 3.9-42 3.9-7.6 0-41.9 1-41.9-4 0-3.8 34.6-3.8 42-3.8 7.2 0 41.9.8 41.9 3.9z"
					fill="gray"
				/>
				<path
					d="M346 368.9c0 1.3-.8 2.3-2 2.3s-2.1-1-2.1-2.3c0-1.3.9-2.3 2-2.3 1.2 0 2.2 1 2.2 2.3zm79.8 0c0 1.3-1 2.3-2.2 2.3-1.1 0-2-1-2-2.3 0-1.3.9-2.3 2-2.3 1.2 0 2.1 1 2.1 2.3z"
					fill="#c00"
				/>
				<path d="M388 367.8c0 1.2-1.9 2.2-4.2 2.2-2.2 0-4.2-1-4.2-2.3 0-1.3 2-2.3 4.2-2.3s4.2 1 4.2 2.3z" />
				<path
					d="M408.1 367.8c0 1.2-1.4 2.2-3.1 2.2s-3.1-1-3.1-2.3c0-1.3 1.4-2.3 3-2.3s3.2 1 3.2 2.3zm-43.1 0c0 1.2-1.4 2.2-3.2 2.2s-3.2-1-3.2-2.3c0-1.3 1.4-2.3 3.2-2.3 1.8 0 3.2 1 3.2 2.3z"
					fill="#006300"
				/>
				<path
					d="M1257.9 496s35.4-53 70.9-53h35.4v35.3c0 53.2-53.1 71-53.1 71h141.7s-53.2-17.8-53.2-71V443h35.5c35.4 0 70.8 53.2 70.8 53.2V354.3s-35.4 53.2-70.8 53.2h-35.5V372c0-53.1 53.2-70.8 53.2-70.8H1311s53.1 17.7 53.1 70.8v35.5h-35.4c-35.5 0-70.9-53.2-70.9-53.2v141.8z"
					fill="#fff100"
					stroke="#000"
					strokeWidth={2.2}
					transform="matrix(.06764 0 0 .06227 290.3 323.6)"
				/>
				<path
					d="M1381.9 549.2h70.9s-53.2-17.7-53.2-70.9V443h35.4c35.5 0 71 53.2 71 53.2V354.3s-35.5 53.2-71 53.2h-35.4V372c0-53.1 53.2-70.8 53.2-70.8h-70.9z"
					fill="#fff100"
					stroke="#000"
					strokeWidth={3.3}
					transform="matrix(.03383 0 0 .05449 295.1 331.6)"
				/>
				<path
					d="M1381.9 549.2h70.9s-53.2-17.7-53.2-70.9V443h35.4c35.5 0 71 53.2 71 53.2V354.3s-35.5 53.2-71 53.2h-35.4V372c0-53.1 53.2-70.8 53.2-70.8h-70.9z"
					fill="#fff100"
					stroke="#000"
					strokeWidth={3.3}
					transform="matrix(-.03383 0 0 .05449 472.5 331.6)"
				/>
				<path
					d="M903.5 602.4a17.7 17.7 0 1 1-35.4 0 17.7 17.7 0 0 1 35.4 0z"
					fill="#fff"
					stroke="#000"
					strokeWidth="1pt"
					transform="matrix(.11838 0 0 .10897 279 284.3)"
				/>
				<path
					d="M1257.9 496s35.4-53 70.9-53h35.4v35.3c0 53.2-53.1 71-53.1 71h141.7s-53.2-17.8-53.2-71V443h35.5c35.4 0 70.8 53.2 70.8 53.2V354.3s-35.4 53.2-70.8 53.2h-35.5V372c0-53.1 53.2-70.8 53.2-70.8H1311s53.1 17.7 53.1 70.8v35.5h-35.4c-35.5 0-70.9-53.2-70.9-53.2v141.8z"
					fill="#fff100"
					stroke="#000"
					strokeWidth={2.2}
					transform="matrix(.06764 0 0 .06227 290.3 283)"
				/>
				<path
					d="M903.5 602.4a17.7 17.7 0 1 1-35.4 0 17.7 17.7 0 0 1 35.4 0z"
					fill="#fff"
					stroke="#000"
					strokeWidth="1pt"
					transform="matrix(.11838 0 0 .10897 279.2 244)"
				/>
				<path
					d="M850.4 655.5h70.9v53.2h-71z"
					fill="#fff100"
					stroke="#000"
					strokeWidth="1pt"
					transform="matrix(.11838 0 0 .10897 279 245.7)"
				/>
				<path
					d="M850.4 683.3h70.9v202.5h-71z"
					fill="#fff100"
					stroke="#000"
					strokeWidth="1pt"
					transform="matrix(.11838 0 0 .10897 279 245.7)"
				/>
				<path
					d="M478.4 549.2a17.8 17.8 0 1 1-35.5 0 17.8 17.8 0 0 1 35.5 0z"
					fill="#fff"
					stroke="#000"
					strokeWidth="1pt"
					transform="matrix(.11838 0 0 .10897 329.2 278.5)"
				/>
				<path
					d="M478.4 549.2a17.8 17.8 0 1 1-35.5 0 17.8 17.8 0 0 1 35.5 0z"
					fill="#fff"
					stroke="#000"
					strokeWidth="1pt"
					transform="matrix(.11838 0 0 .10897 329.2 273.6)"
				/>
				<path
					d="M478.4 549.2a17.8 17.8 0 1 1-35.5 0 17.8 17.8 0 0 1 35.5 0z"
					fill="#fff"
					stroke="#000"
					strokeWidth="1pt"
					transform="matrix(.11838 0 0 .10897 329.2 269)"
				/>
				<path
					d="M478.4 549.2a17.8 17.8 0 1 1-35.5 0 17.8 17.8 0 0 1 35.5 0z"
					fill="#fff"
					stroke="#000"
					strokeWidth="1pt"
					transform="matrix(.11838 0 0 .10897 329.2 264.1)"
				/>
				<path d="M388.3 375.1c0 .9-2 1.6-4.4 1.6s-4.1-.7-4.1-1.6 1.9-1.5 4.2-1.5 4.3.7 4.3 1.5zm38.6 3.8c-.2.7-2.3.7-4.7.1-2.3-.5-4-1.4-3.8-2 .3-.6 2.4-.7 4.7 0 2.3.5 4 1.3 3.8 2zm-16.2-2.6c0 .8-2 1.3-4.5 1.2-2.3-.2-4.2-1-4.2-1.8.1-.7 2.2-1.2 4.6-1 2.4.2 4.3.9 4.1 1.6zm-70.9 2.6c.2.7 2.3.7 4.6.1 2.4-.5 4-1.4 3.8-2-.2-.6-2.3-.7-4.7 0-2.2.5-4 1.3-3.7 2zm17-2.9c0 .8 2 1.2 4.4 1 2.5-.1 4.4-.8 4.2-1.7 0-.7-2-1.2-4.5-1-2.4.1-4.3.8-4.2 1.7z" />
			</g>
			<path d="M0 0h256v256H0Z" fill="#012169" />
			<path
				d="M256 0v32l-95 96 95 93.5V256h-33.5L127 162l-93 94H0v-34l93-93.5L0 37V0h31l96 94 93-94z"
				fill="#fff"
			/>
			<path
				d="m92 162 5.5 17L21 256H0v-1.5zm62-6 27 4 75 73.5V256ZM256 0l-96 98-2-22 75-76ZM0 .5 96.5 95 67 91 0 24.5Z"
				fill="#c8102e"
			/>
			<path d="M88 0v256h80V0ZM0 88v80h256V88Z" fill="#fff" />
			<path d="M0 104v48h256v-48ZM104 0v256h48V0Z" fill="#c8102e" />
		</Box>
	);
}
