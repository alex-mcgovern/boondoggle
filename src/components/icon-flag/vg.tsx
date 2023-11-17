import clsx from "clsx";
import { utilCss, type UtilCssArgs } from "../../index.css";
import { Box } from "../box";
import { flagStyles } from "./styles.css";

export function FlagVg({
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
				<linearGradient
					gradientTransform="matrix(.99614 0 0 2.25255 703.8 -75)"
					gradientUnits="userSpaceOnUse"
					id="vg_svg__a"
					x1={103.1}
					x2={92.6}
					y1={111.3}
					y2={107.8}
				>
					<stop offset={0} stopColor="red" />
					<stop offset={1} stopColor="#ff0" />
				</linearGradient>
			</defs>
			<path d="M0 0h512v512H0Z" fill="#006" />
			<g transform="translate(-282.6 18.3) scale(.73883)">
				<path
					d="m776.3 144 250.4-.9-.5 223s8.8 34-105 85.5c40.9-4.2 85.5-47.8 85.5-47.8s18.1-23.3 27-10.3c8.8 13 17.1 19.6 23.6 24.7 6.5 5 11.6 19 1.9 29.2-9.8 10.3-25.1 11.6-29.3-.9-6.5 3.3-46.4 51.6-128.2 53.9C818.5 499 773 446 773 446s-11.1 17.7-27 3.8c-15.3-18.2-3.7-29.8-3.7-29.8s13-7.4 16.8-12.5c6-7 7.9-16.3 18-16.3 12.2 1 16.8 10.7 16.8 10.7s41.8 44.1 86.9 49.7c-101.7-48.8-105.5-79-105-86.4l.5-221.1z"
					fill="#fff"
				/>
				<path
					d="m782.3 150.1 238.8-1.4v214.6c.5 28-46.5 56.3-119.9 92.5-75.7-39-119.4-62.7-119.8-93l.9-212.7z"
					fill="#006129"
					stroke="#000"
					strokeWidth={1.9}
				/>
				<g
					fill="#ffc72c"
					id="vg_svg__b"
					stroke="#000"
					strokeWidth={0.9}
				>
					<path
						d="m814.8 181.8 14-20.7 14.3 20.8"
						fill="none"
						stroke="#ffc72c"
						strokeWidth={1.9}
					/>
					<path d="M831.7 174a2.8 2.8 0 1 1-5.6 0 2.8 2.8 0 0 1 5.6 0z" />
					<path d="M817.4 197.1h21.9s.3-2.8-2.3-4.5c11.5-1.6 8.5-11.6 18-12.2 2 .3-5 4.3-5 4.3s-5.7 4-3 6.1c2 1.7 3-1 3.2-3 .3-2 9.3-3.3 8-9-2.1-4.7-14.7 3.2-14.7 3.2l-9-.1c-.6-1-3-5-5.6-5-3 0-5.2 5-5.2 5h-20.3s-.7 5.3 9.6 6.3c2.3 3 4.1 3.8 6.2 4.6-1.4 1.1-1.8 2.5-1.8 4.3zm1.6-4.4h18.2" />
					<path d="M810.7 182s1.4 8.5 8.2 10.5" />
					<path
						d="M809.6 181.8c.6-3.2 1.9-3.8 3.2-8 .2-4-3.2-3.5-2.2-6 1.8-2.9.9-5.6-2.5-7.7.7 3.7-4.4 7.2-4.4 10.2 0 3 2.6 2.4 2.3 7 .2 2.6-.7 2-1 4.5h4.6z"
						fill="url(#vg_svg__a)"
					/>
					<path d="M831.5 161.7a2.6 2.6 0 1 1-5.2 0 2.6 2.6 0 0 1 5.2 0z" />
				</g>
				<use
					height="100%"
					width="100%"
					x={-0.8}
					xlinkHref="#vg_svg__b"
					y={41.3}
				/>
				<use
					height="100%"
					width="100%"
					x={-1.1}
					xlinkHref="#vg_svg__b"
					y={82}
				/>
				<use
					height="100%"
					width="100%"
					x={25.6}
					xlinkHref="#vg_svg__b"
					y={126.1}
				/>
				<use
					height="100%"
					width="100%"
					x={-4.6}
					xlinkHref="#vg_svg__b"
					y={162.2}
				/>
				<use
					height="100%"
					width="100%"
					x={-3.8}
					xlinkHref="#vg_svg__b"
					y={204.8}
				/>
				<use
					height="100%"
					width="100%"
					x={146.3}
					xlinkHref="#vg_svg__b"
					y={0.7}
				/>
				<use
					height="100%"
					width="100%"
					x={144.9}
					xlinkHref="#vg_svg__b"
					y={41.2}
				/>
				<use
					height="100%"
					width="100%"
					x={143.1}
					xlinkHref="#vg_svg__b"
					y={82.7}
				/>
				<use
					height="100%"
					width="100%"
					x={145.2}
					xlinkHref="#vg_svg__b"
					y={123.4}
				/>
				<use
					height="100%"
					width="100%"
					x={144.7}
					xlinkHref="#vg_svg__b"
					y={164.2}
				/>
				<use
					height="100%"
					width="100%"
					x={144.9}
					xlinkHref="#vg_svg__b"
					y={205.2}
				/>
				<g fill="#ffc6b5" stroke="#000" strokeWidth={0.9}>
					<path
						d="M915.8 406.3s5.7 13.2 12.2 5c6.5-8 4.2-11.5 4.2-11.5l-14.6-7.9-4.3 9 2.5 5.4z"
						fill="#ffc72c"
					/>
					<path d="M928.4 404.6s1 .1 1.7-1.3c.8-1.4-1.7-2-2.9-3.6l-1.2 2.5zm-33-3.6-12.8 7s-6.4 1.3-6.8 0c-.5-1.2.1-2.3 3.5-2.5 3.3-.1 12.3-8.4 12.3-8.4l3.8 4zm.2-227.9.4 4.6c.2 1.6-2.5 5-2.6 4.8-.2-.2-1.5.2-1.3 1.1.1 1 2 1.3 2 1.3s-.7 3.3 0 3.5c.8.1-2 4.2 0 5.3 2.1 1.1 5.6 2.6 7.2 2.3 1.6-.4 0 6.1 0 6.1l-4.5 9.5 24.4-2.5-5-8s-2.4-1.7-1.8-6.3c.7-4.5-.3-25.3-.3-25.3l-17.4-2.4-1.1 6zm-4.5 36.2s-7.9 3.6-7.6 13.4c-2 9.5-3.1 19-3.1 19s-9.4 10.6-12.2 14.5c-2.9 3.8-7.2 11.5-8.7 13.6-1.6 2-7.8 8.8-7.7 11.4.2 2.5-1.4 13.8 4.8 15 1.6.7 6.7-13 6.7-13s.3-5.8-1.5-7c-1.7-1 3.8-4.8 3.8-4.8l13-9.7c2.4-2 8.9-9.2 8.9-9.2l3.6-43.2z" />
					<path
						d="M900.2 201.8s2 5.6 6.6 4.6 10-5.2 10-5.2 4.3-.2 4.9.5c.6.6 11.6 11.2 11.2 14.5-.3 3.4-5 2.4-6.8 4.6-1.7 2.2-4.6 7.8-3.8 12 .8 4 3.2 9.4 2.9 11.5-.3 2-2 2.7-2 3.8 0 1 1.4 3 1.4 5 0 2.1-2 5.1-1.6 7.2.3 2 .4 8 .4 8l-.4 28s1.6.9 1.7 2.5c.2 1.5 10.8 47.6 10.8 47.6s-.5 1.5-1.6 1.3c-1.1-.2 4.3 7.1 4.4 9.2.2 2 5.6 18.2 5.4 20.4-.1 2.2-1 7.2-1.4 7.3-.5.2 3.5 10.2 2.8 11.7-.6 1.6-7 1.5-7 1.5l-1.8-.4s.1 2.1-1.1 2.3c-1.3.1-10.6-.5-10.6-.5s-2.7 4.1-4.3 4c-1.6-.2-3.7-3-4.1-2.6-.5.5 1.4 3.2 1 4-.6.8-8.6 2.5-10.2-1.3-1.6-3.8 1-2.8.4-3.6-.4-.8-4-2.9-5.2-2.3-1 .7 2.9 1.6 2.7 3.2-.1 1.6-3.5 4-4.7 4-1.3 0-4.3-5.9-8.8-5.3-4.4.7-7.2 1.8-7.2 1.8s-5.3 2.2-7.5 1.7c-2.2-.4-3.2-2.2-3.2-3.1 0-1 1.6-5.1 1.5-6.4-.2-1.2-1.5-2.5-1.5-4.4 0-2 3.7-8.4 3.7-8.4l-.2-29.2s-3.3 0-3.5-2c-.1-2 5.1-46.1 6-49l2.8-13s-2.4 1.2-2.6 0c-.1-1 7.2-26.2 7.2-26.2s1.2-12.6 1.2-15.9c0-3.3-.6-7.9-.6-7.9s-6.5-2.8-6.7-7c-.6-6.7 6.2-10.4 7-12.6l3.2-9s3.5-6 9.2-6.9z"
						fill="#fff"
					/>
					<path
						d="M897.8 403s-15.4 8-17.6 8.7c-2.2.6-3.6-2.7-1.4-3.3 2.2-.7 5.7-1 5.7-1s-5.2-4.1-5-4.3l7.2-2.6c.2 0 2.2 4 3.6 3.8a31 31 0 0 0 5.6-3.5l1.9 2.2z"
						fill="#ffc72c"
					/>
					<path d="M919.4 407.4c1.5 1.9 2 5.1 5.4 3.2 3.3-1.9-1.7-5.4-1.7-5.4z" />
					<path d="M925.5 407.1s1.6 1.3 3-.2c1.4-1.4-2.8-4.4-2.8-4.4l-2.1 2.4zm6.8-190.1c.2 0 5.2 15.6 5.9 19.6.6 4 2.7 19.8 1.9 22-.8 2.2-8.9 12.8-9.8 15.5-1 2.7-6.7 13-6.7 13s-1.4 10.2-2 10.6c-.7.5 1.6 3 1.4 3.8-.3 1-4.6 5.4-6.5 5-2-.5-5-2.7-5-4.8-.3-2 0-8.9 1.5-10.6 1.4-1.8 8.9-19.3 9.3-20.4.5-1.2 6.8-15 7-17.3.2-2.4-2-7.9-4.2-9.9-5-14.7-3-23.5 7.2-26.5z" />
					<path
						d="M895 172.2s3.6.5 5.5-.6 4.1-1.6 5.7.6c1.6 2.2 2.7 2 2.7 2s-2.4 6 0 6.6c2.3.6 3.5.6 3.6 1.4.2.8-2 2.5-1.4 3.3.6.8 1.7 1.7 1.9 2.4.1.6-1.4 3.3-1 4 .5.6 2 3.1 2.9 3.1 1 0 .3 4 3.2 3 2.8-1 2.7-3.5 2.7-3.5s3-.4 3.8-3.1c.7-2.7 2.6-3.4 2.6-3.4s3.8-2-1.2-5.2c0-22.2-14.6-19.8-14.6-19.8s-1.7-4-4.6-3.5c-2.8.5-3 3.8-5 3.5-2.1-.3-2.6-1.7-2.7-1.6-.2.2-2 3.4-2 4.1 0 .8-5.5-1-5 3 .5 4.2 3.2 4 3 3.7z"
						fill="#9c5100"
					/>
					<g fill="none">
						<path d="M920.8 208s-14.1 9-13.8 12.2m17-10.6s-3.2 3.5-3.4 3.5m7.6.3s-7 5.7-5.9 9.3m-27-15.5s-2.1 4.3-1.6 5.7c.4 1.4 4 6.8 4.4 10.1.5 3.4 0 5.7 0 5.7m-6.5-13.6s.6 5 1.6 6 3.5 5.3 3.8 7m-6.7 8.1s4.2 2 8-5.9m6.1-5.5c-.1 0-3 7.7 2.1 10.6 5 2.9 8.9 2.5 11 1.7 2.3-.7 4.7-2.2 4.7-2.2m-20-.6s.3 10.4 15.7 20.7m-15-10.9s-.2 9.2 5.8 13.3m-9-24.1s-4.6 13.7-8.3 15m6.9-5s-.2 9.8-1.5 13.3m-1.2 2.4s3.1 4 6.6 3.6c3.5-.3 5-4.4 7.3-3.8 2.4.7 4.6 2.6 10.1 2.1m-7.9 4.1s0 8.1 1.5 8.9c1.4.8.7 8.2.7 8.2m-21.5-20.9s-.2 7.6-1.1 10.3c-1 2.7-2.9 7.3-2.5 11.3m-6.1 4.4c.8-.3 3.5-2.7 3.5-2.7m1.4 1.7s-6.8 29.2-4.9 46.6m6.5-45.1s-3.5 21.8-1.9 26m.2-26.7 13.3 1m1.9-1.8s3.6 2 8.7 1.6m-10.3 9.1s-.6 37.3-1.6 45.6m21.1-37.1s4.1 32.8 6.5 35.8m-14.4-31.7s2.5 29 4 31.6m-40 10.1s5-1.6 9.4-6.3c5 6.8 12.8.3 12.8.3s12 8.2 17.4-1c8.3 5.4 12.4-.8 12.4-.8s3 4.6 5.2 4.1m-13.1 3.2s6.1 29 15.3 37.2" />
						<path d="M889 347.7s.7 24.2 2.1 41.3m-3.3-13.9s-.8 15.8-1.7 17m-7.6 1.5s1.7 6.9 10.4.5c8.7-6.3 8.9 2.4 9.2 3.3.3 1 1.7 7.8 5 2.1m7-9.3s-1.4 14 11.1 3.8c12.5-10.3 14.6-.2 15 3m-25.9-230.2s-1.1 7 6.3 6.3c-1 3.9 2 5.1 2 5.1m5.4 4.3c.2 0 3.4 2 0 4.6m-10.7.9s1.6 2 3.3 1.5c1.8-.5 4.6 1.7 4.6 1.7s2.4.8 2.7.3m-20.3 2.5s5.4 2.1 9-6.4m-18.9-2.6 3.1.2M858.5 285l.3 6.9m-6.8-7.5s4.5 7.5 4 11.4" />
						<path
							d="M894.1 188.2h2.9l-2.5 1.1M911.7 300s3.3-.4 3.2 5.2c2.1-7 6.4-7.1 6.4-7.1"
							strokeLinejoin="round"
						/>
						<path
							d="M898.1 179.3c.5 0 2.2-.6 2.5-.1.4.4-1.9.8-2.5.1z"
							strokeLinejoin="round"
							strokeWidth={1.7}
						/>
					</g>
				</g>
				<g fill="none" stroke="#000" strokeWidth={1.9}>
					<path
						d="M900.3 458.6a160.4 160.4 0 0 0 109.6-50.7c-.4-.4 8.9-13.4 16.3-11.6 7.4 1.9 18.1 23.7 31.1 28.4 6.5 10.2-1.8 19.5-4.6 21.3-2.8 1.9-15.4 7-17.2-.4-1.9-7.5-5.6-6-5.6-6s-59.5 58-128.2 55.7c-71 .4-129.6-55.8-129.6-55.8l-5.1 5.6s-5.6 6-8.4 5.6c-2.8-.5-14.9-8.4-15.8-16.3-1-7.9 7.4-13 7.4-13s20.5-15.8 22.8-24.1c4.7-4.7 13.5 3.2 13.5 3.2s53.9 61.8 113.8 58z"
						fill="#ffc72c"
					/>
					<path d="M748.9 422.6s5.5-1.4 7.5.9 16 16 16 16" />
					<path d="m761.5 429.1-5.6 4.1s14 2.8 10.8 12m285.6-23s-2.7-1.5-7 1.7c-4.4 3.3-15.3 15.5-15.3 15.5" />
					<path d="m1039.9 428.7 6 4.6s-12.5.9-9.8 12.7" />
				</g>
				<path d="M819.7 437.4c-.4 1-1.4 0-2.2.2-2 0-3.8 1.4-5.6 2.4l-18.4 10.7c-.6-.2-.5-.7-.3-1.2l5-23c.2-1.3.6-3-.7-4-.5-.4.3-1.1.7-.4l9.4 6.7c-.3.9-.9.2-1.4-.1-1.3-1.3-2.9-.1-2.8 1.5l-3.4 15.1c4.2-2.4 8.4-4.8 12.6-7.4 1.4-.6 2.5-2.6 1-3.8-.6-.4-1.6-1.3-.6-1.5l6.7 4.8zm6.6 32c-.2.6-.5.7-1 .3l-11-6c.1-.7.4-.8.9-.4 1 .7 2.6 1 3.4-.2l4-7.3 5.6-10.2c.8-1.3-.1-2.8-1.3-3.3-.4-.2-1-.4-.5-.8.2-.3.8.3 1.1.4l10.6 5.8c-.1.6-.4.7-.9.3-1-.7-2.6-1-3.4.2l-4 7.3-5.6 10.2c-.8 1.2.1 2.8 1.3 3.3l.8.4zm42.6-10-3 8.4c-1.3-.1-.4-1.7-.8-2.5a9.5 9.5 0 0 0-7-8.2c-3-.8-6 .7-7.8 3.1a22.9 22.9 0 0 0-4.4 12.2 7 7 0 0 0 3.2 6.4 10 10 0 0 0 5.9 1.5l2.1-6.3c.3-1.4-1.2-2.3-2.3-2.6-.2-.4.2-1 .7-.5l11 4c0 1.3-1.6-.2-2.5.4-1.3.5-1.4 2.1-2 3.3l-1.3 3.8c-5 .3-10-.7-14.4-3.2-4.1-2.6-7-7.7-6.1-12.7.6-4.3 3.3-8.3 7.2-10.2 3.6-2 8-1.9 11.8-.4 2 .7 3.8 2 5.4 3.4 1 1.3 2.8 1.3 3.6-.1l.7.2m17.9 28.8c0 .4 0 .9-.6.6l-12.6-1.9c0-.5 0-.9.6-.6 1 .2 2.6.2 3-1 .6-1.7.7-3.5 1-5.2l2.2-14.6c.3-1 0-2.2-1.1-2.6-.7-.3-1.3-.3-2-.5 0-.4 0-.8.6-.6l12.6 2c0 .4 0 .8-.6.6-1-.3-2.5-.2-3 1-.6 1.6-.7 3.4-1 5.1l-2.2 14.6c-.3 1 0 2.3 1.2 2.7l2 .4zM921 480l-.5 8.9-22.6 1.1c-.1-.5 0-.8.6-.7 1.1 0 2.6-.5 2.8-1.8l-.3-6.6-.7-13.4c.1-1.3-1-2.3-2.3-2.2-.4-.2-1.5.4-1.4-.3-.2-.6.7-.3 1-.4l12.6-.7c0 .6 0 .9-.7.8-1.1 0-2.6.2-3 1.6-.1 1.9.1 3.8.2 5.7l.7 14c0 1.1 1 2.2 2.2 2 1.8-.1 3.7 0 5.5-.5 2.5-.7 3.8-3.2 4.5-5.5.5-.6 0-2.2 1-2h.4m17.5-21.8c-.6 0-.3.8-.5 1.2-1 7.5-1.9 15-3 22.4-.2 1.7-.6 3.6-2.2 4.4-.6.3-.1 1.2.5.7l7.5-2.3c-.1-1.2-1.6 0-2.4-.3-1.7 0-2-2.1-1.7-3.4 0-1 .2-1.8.3-2.7l8.6-2.6c1.1 1.4 2.3 2.7 3.3 4.2.8 1.4-1 2-2 2.3-.6 0-.2 1 .3.6l11.3-3.4c0-1.3-1.6 0-2.3-1-2.2-1.5-3.7-3.7-5.4-5.7l-12.3-14.4zm0 9 6 7.3-7.3 2.2 1.3-9.5zm38.6-25.8 3.3 6c-1 1-1.6-1.1-2.5-1.4a4.7 4.7 0 0 0-5.5-.5l-2 1.1 9.8 18.3c.5 1.5 2.4 1.8 3.7 1 .4-.4.9-.6 1 .1-1.6 1-3.5 1.9-5.2 2.8l-6.5 3.5c-.5-.5-.2-.8.4-1a2.4 2.4 0 0 0 1.1-3.7l-9.7-18c-1.8 1-4 1.8-4.5 4-.5 1.5.2 3.2.2 4.4-.5.6-.7-.2-1-.6l-2.7-5.2 20.1-10.8zm15.3-9.1 6.2 8.3c1.4-1 2.6-2.6 2.2-4.4.2-1.4-1.8-3-1.1-4 .4-.2.7.8 1 1.1l7.2 9.5c-1 1-1.6-1.1-2.6-1.4-1.4-1-3.3-1.5-4.8-.4-1.1.4-1 1-.3 1.7 1.6 2.1 3.2 4.4 5 6.5 1 1 2.4 0 3.3-.8 2.4-1.6 4.5-4.2 4.4-7.2.2-1.4-.7-2.8-.7-4 .6-.7.7.4 1 .8l3.4 6-17.6 13.3c-.7-.5 0-.9.5-1.2 1.6-1 1.1-3.1 0-4.2L988.1 437c-1-1.3-2.8-.6-3.7.3-.5.6-1-.5-.3-.6l16.5-12.5 4.5 6c-1 1-2-1.3-3.1-1.4-2.2-1.2-4.8-.3-6.6 1.2l-3.1 2.3" />
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
