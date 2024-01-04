import clsx from "clsx";
import { Box } from "../__DONE__box";
import { type Sprinkles, sprinkles } from "../sprinkles/index.css";
import { flagStyles } from "./styles.css";

export function FlagTa({
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
			<path d="M512 512V0H0v512z" fill="#006" />
			<path
				d="M471.1 219.4c0 57.8-9.2 120.2-84.4 150-74.8-29.8-84-92.2-84.4-150z"
				fill="#8fc5ff"
				stroke="#fff"
				strokeWidth={3.5}
			/>
			<path
				d="M386.7 369a121.6 121.7 0 0 0 66.7-56.7h-7.1c-2.1-.3-72-7-80.5-10.6-7-2.5-34.8 2.5-47.5 7a120.6 120.6 0 0 0 68.4 60.4z"
				fill="#366cc9"
				stroke="#000"
				strokeWidth={3.5}
			/>
			<path
				d="M334.2 333.6h4.3c1 0 1 0 1.4-1 .4-1.1 1.4-.8 2.1-.4.7.3 2.2 0 2.9-.7.7-.7.7-.7 1.4 0s1 .3 1.8 0c.3 0 1.7-.7 2-1.8.4-1 1.5-1.4 1.9-.7.3.7 1 .7 1.7.7.8 0 .8.4.8 1.4 0 .7 0 1 1.7-.3 1.4 1.4 1.8.7 1.8-.7 0-1.5 0-7.1-.7-7.5-.7-.3-1-2.8-1.4-4.6 0-3.5 0-3.5-3.6-5.3 0-1-.7-1.4-3.5-1.4.3-.4 0-1.5-.7-1.8-.7-.4-.7-.7 0-2.1.7 0 2 0 2.4-1.1.8-.7 2.9-.7 4.3 0s2.8.7 5.3 0l4.3-2.1c1.8-1 2.1-1.4 2.1-2.9 0-3.5-1-7-1.8-8.8-1-1.8-1-3.6-2.4-6.8-1.5-2.8-1.5-3.5-2.9-5.3-.7-.7-1-1-1-2.1a5.3 5.3 0 0 0-1.8-3.6c-2.9-2.4-3.6-10.6-5-16.6-.7-3.6 0-11.7-1.4-13.2-2.5-1.7-3.6-1.4-5.3-2-1.4-1.9-1.8-5-3.2-8.2-1.8.3-2.9 2-4 2.8-1 .7-1.3.7-1.3 2.5 0 1.4-1.1 3.5-2.5 6.4-1.4 2.8-4.6 1.7-7.1 5.6-5-6-5-7.8-5.3-9.5 0-1.8-1.1-2.2-4-4.7v-5.3c-2.4-1.7-3.8-1.4-4.9 0-1 1-1.8 2.9-3.5 3.6-.8 1.4-3.6 4.2-5.7 8.1 2.1 32 9.2 63.9 30.8 89.4z"
				fill="#5d3100"
				stroke="#000"
				strokeWidth={0.4}
			/>
			<path
				d="M471.1 219.4c0-22-1-43.3-.7-61.7a225.6 225.6 0 0 0-83.7-15.3c-18.8 0-55.7 2.9-83.7 15.3.7 18.4-.7 39.7-.7 61.7z"
				fill="#ff0"
				stroke="#fff"
				strokeWidth={3.5}
			/>
			<path
				d="M307 244.5c.9 1.5 2.6 4 2.7 5.4.8-1.3 1.2-2 1.3-2.7.2-.8 1.2-2.5.8-3.3-.5-.9-.6-1.6.4-1 1 .7.8 1.8.6 3.4-.6 4.5-2.5 5.5-2.8 8.6 2.7 6.3.7 8.6 3.6 14.9.5.3 1.7-.2 2.1 0 1.6-1.2 2.7-.8 5-.4 2.1.5 3.3 2 3.3 3.5 0 1.4 0 1.7.5 2.5.5 1 1.5 2.2 1.2 3-.2 1 .2 1.5.5 2s-.1 1.4-.4 2.1c-.3.8-.2 1.5 1 3 1 1.3 3.6 7 3.6 10.5 0 3.3.2 5 1.6 5.6 1.4.7 1.9 1.2 1.6 2.7a84 84 0 0 0 .9 10.3c.2 1.2.6 1 1.1 1.6.6.6 1 1.4 2.8 1.4 2 0 3.6-.3 4.9 0 1.6 2.2 2.6 5.3 3 7.3.3 2 .3 4.6 1 4.6.6 0 1.3 0 1-2.3-.2-2.4-.3-2.8-1.1-4-.9-1.2-1.3-1.8-.9-2.5.5-.7.6-2 .4-2.9-.2-.9-.4-2.3 1.1-.5l2.6 3c.5.7.6 1.8.5 3-.1 1 .1 1.5.7 1 .7-.6 1.5.4 1.1 1.6-.3 1.2 0 2 1.2 2.3 1.2.3 1.6.6 1.8 1.4.2.8 1.3 1.2 1.3-.4 0-1.7-.7-5.2-1.1-6.3-.5-1.1-.9-3.5-1-5 0-1.3-.3-1.6-1-2-.6-.2-1.2-.6-1.3-1.4 0-.7-.7-.7-1-.7-.4 0-.8-.4-1-.8-.2-.5-.5-.5-1-.6-.4 0-1.2.2-1.4-.5-.2-.7-.6-1.8-1-2.4-.4-.7-.9-.8-1-3 0-2 0-2.2-.7-3a23 23 0 0 1-2.2-3.5c-.4-.7-1-1.6-1 .1 0 1.7 0 2.7 1.2 3.3 1.1.7 1.4.7.9 1.6-.5.9 0 1.6.2 2.2.2.7.6 1.3 0 2-.6.6-1.1.4-1-.6a5.7 5.7 0 0 0-.7-3c-.5-.9-.9-1.5-1.4-1-.6.5-1 0-.7-.4.4-.3.3-.7 0-1-.3-.1-.3-.5.2-1 .5-.6.4-.9.1-2.2-.3-1.2-2.3-7.7-3.2-9.2-1-1.5-.8-2.6.3-1 1.2 1.4 2.3 2.6 2.3 3.9.2 1.2.5 2 .7 2.4.3.5.8.2.9-.7.1-1 1-.7-.4-2.7-1.2-1.9-3.6-5.1-4.5-11-1-5.8-1.3-9.6-2.3-11.1-.9-1.6-1.2-2-1.3-3.5 0-1.5 0-3-.7-4s-1-1.3-1.1.4a21 21 0 0 0 .5 6c.5.6.3 2.2.1 3.2-.1.9-1.5 1.8 1.5 3.7 1.2.7 1 1.7.8 2.3-.1.7-.3.6-1-.4-.6-1-1.3-1.8-2-2.4-.6-.6-.6-1-.6-2.2.1-1.2.4-2.2 0-2.7-.3-.4-.5 0-.7.7-.2.7-.3 2.7-.7 3.2-.4.5-.6.3-.9-1-.3-1.2.1-3 .7-5.1.7-2.2 1.1-4.3.6-7.1-.6-2.8-.3-3.6-2.5-6-2.1-2.2-4.4-4.4-5.5-7.3-1-2.9-1.2-5.3-2.3-6.6a15.1 15.1 0 0 0-3.7-3.4V234c0-1-.5-1.6-1.6-1.4-1.2.2-2 1.1-2.7 2.6-.7 1.3-1.3.7-2.3 3-1.1 2.4-2.5 3.6-2.5 6.2z"
				fill="#cf6200"
			/>
			<path
				d="M313.7 271.6c.7.5 1.4.7 2.5.2 1-.5 2.4-2.2 4-.6a10 10 0 0 1 2.2 6.2c0 2 0 5.8 2.3 7.9 2.3 2.1 3.6 4.3 3.6 7.1.1 2.8 1.1 7 1.5 8.2.2 1 .8 2.3 1.5 3 .8.8 1.3 3 1.5 5 0 2.4-.3 4 0 5s0 2-.9 1.4c-.8-.5-1-.7-1.4-1.7-.4-1-1.1-.7-.6.7.5 1.5 1.8 2.6 3 2.6s1.6.2 2.3 1c.7.7.9 1.1 2.2 1.1 1.3 0 1.4 0 2.6.4 1.2.3 1.2.1 1.9 0 .6-.2 1.3.3 1.7 1.5.4 1.3 1.6 4.6 1.6 5.4 0 .9 0 1.9.6 2.8.7 1 .5 1.9-.3 1.3-.7-.6-.7-.3-1.2-.3-.6.1-1-.1-1.7-.6s-.3-.4-1-1.5c-.7-1-1.2-1.5-1.2-.7s0 1.9-.7 1.5c-.5-.5-.8-.5-1.3 0s-.6.8-1.2-.1c-.5-.9-1.1-1-1.7-1.2-.6-.2-.6-.1-.8-1-.3-.8-1.1-1-1.9-1-.7 0-1.1-.3-1.2-.9 0-.6-.5-1-.9-1.2-.4-.3-.1-1-.3-1.6-.1-.6-.6-.4-1-.5-.4-.1-.6 0-.6-1s-.4-1.2-.7-1.9c-.2-.7 0-1.3.2-2a2 2 0 0 0-.4-1.8c-.6-.7-.1-1.3-1.6-2.6-1.4-1.3-2.2-.2-2.7-3.3a48 48 0 0 0-2.2-10.3c-.7-1-1.4-1.7-2.2-2-.8-.3-1.4 0-1.4-1.9-.2-1.7-.7-3.9-1.8-5l-2.2-2c-.5-.3-.7-1.2 0-2.8.8-1.6.5-3.7.4-4.7 0-1-.4-2.3-.1-3.4.2-1 0-2.5-.3-3.2-.2-.7-.6-1-.1-1.5zm22.2-26.2a20 20 0 0 1-4.3 4.2c-1.8 1.2-4 2.1-2.8 4.3 1.3 2 2.3 2.3 2.5 3.9.3 1.6.6 2.9 1.8 3.3 1.3.4 1.8.1 1.8 2.7s0 3.6 1.1 4.5c1.2 1 1 2 1.4 4.4.5 2.3.5 7.3 2 10.7 1.6 3.4 4.9 10 4.5 11.3-.4 1.3-.9 2.4.6 4a11 11 0 0 1 2.6 5.3c.1 1.4.3 1.9 1.8 1.4s2.2-1 2.7-1.7c.5-.6 1.4-.4 2.8.3s3.5 1.4 4.7.7c1.2-.7 1.9-1.8 3-1.8 1.7-1.3 2.3-3.9 2.7-4.6.3-.7 0-.7-.7-1.4s-.3-2-.5-3.2a14 14 0 0 0-2-5.8c-1.5-2.7-2.4-6-3.4-7-1-.8-1.4-2.8-1.5-3.8-.2-1-1.3-1.9-2-2.6-.8-.7-1.5-1.8-2.3-6.2-.9-4.3-1.5-7.3-1.5-8 0-.8-.2-1-1-1.1-.6-.3-1-1.5-.8-2.2.2-.6-.2-1.2-.5-2-.3-.6 0-2 .5-2.8.5-.7.4-2.8-.1-4.5-.5-1.7-1-3.2-2.9-3.5-2-.2-2.3-.7-3.1-2.3-.8-1.6-1.5-4.4-1.8-5-.2-.7-.5-.7-2 .5s-2 1.6-2 3.9c0 1.4.2 2 .7 2.9.5.8.7 1 1 3.4.4 2.4 2.5 6-.2 8.1-2.8 2.2-2.3 2.6-2.2 4 0 1.5-.7 2.5-1.2.4-.5-2 0-3.3 1.4-4.3 1.5-1 2.9-2.2 1.9-3.6-1-1.3-1.4-4.5-1.4-6-.1-1.4-.5-2-1.3-.8z"
				fill="#cf6200"
			/>
			<path
				d="m314 276.7.2 3c0 1 .4 3.1-.4 4.6-.7 1.6-.5 2.5 0 3a2.2 2.2 0 0 0 1.4-3 3 3 0 0 1 .2-2.8c.4-.8.4-1.3 0-1.9-.4-.6-.4-.6 0-2.4.5-1.5-.6-1.5-1.4-.5zm15.8 23.9c-.4-1.2-1.4-5.4-1.5-8.2a10 10 0 0 0-3.6-7.1c-1.8-1.6-2.1-4.3-2.3-6.3-1.3-.9-1.9-.5-1.7 1 0 1.7 1.7 2.5 1.5 4.8-.3 2.5-.3 1.8.9 3 1.1 1.3 1.6 2.3 1 2.8-.6.5-.7 1.3.1 1.6.9.4 1 1.3.8 2.2 0 .8.7 1 1.2 1.6a3 3 0 0 1 0 3c-.4.8-.5 2.1.4 1.4.9-.7 1.2 0 1.9 1.2.5 1 1 .7 1.7.3a7.7 7.7 0 0 1-.5-1.4zm11.9 21.4c-.6 1-1.2.7-1.7.1-.6-.5-1.3-.5-1-1.5.3-1 .2-1.2-.6-1.8a5.5 5.5 0 0 0-.2 0h-.8c-1.3 0-1.5-.5-2.2-1.2a6.2 6.2 0 0 0-.4-.5v.7c0 1 0 .8-1 1.1-1 .3-.9-1-1.1-1.8a3 3 0 0 0-.1-.5c-1.1-.2-2.3-1.4-2.7-2.6-.5-1.5 0-1.6.5-.7.4.8.7 1.2 1.5 1.7s1-.3.8-1.4a4.7 4.7 0 0 1 0-1.2c-.3-.4-.5-.7-.9-.9-1.4-.6-1-.8-.9-2 0-1.1-.2-1.1-1.1-.6-1 .8-1 0-1-1.9 0-1.8-1.3-1.8-1.5-.5-.3 1.3-.7.4-1.3-1.4-.5-1.9-1.3-2.3-1.4-.5 0 1.4-.4 1.8-1.4 1l.4 2.8c.5 3 1.2 2 2.7 3.3 1.5 1.3 1 2 1.5 2.6.6.6.7 1 .5 1.8-.2.7-.5 1.4-.2 2 .3.7.7 1 .7 1.8 0 .9.2.9.6 1.1l.7.1.7-1c1.2-1 3 .1 3.4 1.5.5 1.3 1.2 1.8 2 .7.8-1 .6-1 1.5 0 .8 1 1.3.9 1.3.9s1-.4 1.6.2c.6.5 1 .4 2.1-1.3 1.3-1.7-.5-1.2-1 0zm3.3-50.6c.3-2.7 0-5.4 1.2-6.4 1-1 2.4-2.9 2.3 1.3 0 4.1-.2 4-1 4.8-1 1-1.7 1.3-.8 3 .9 1.5 1 1.6.9 4-.2 2.5-.2 3.5.8 4.7 1 1.3 1.2 1.4 1.4 2.8a9 9 0 0 0 2.2 4.1c1 1 2.4 3.8 2.5 5.8.2 2 1.9 2.5 3.5 3.8 1.5 1.4-.4 2.3-1.6 1.8-1.2-.8-.7 0-1.5.7-.7 1-1 1-1.6-.4-.7-1.4-2.7-2.5-3.7-2.9-.9-.3-1.8-1.9-2.7-3.5a4.5 4.5 0 0 0-3.6-2.5c.5 1 .7 1.9.5 2.2-.3 1.4-.8 2.4.7 4a11 11 0 0 1 2.6 5.3c0 1.3.3 1.8 1.7 1.3 1.6-.5 2.3-1 2.8-1.6.5-.6 1.4-.5 2.8.3 1.3.7 3.4 1.4 4.6.7 1.3-.7 1.9-1.8 3-1.8 1.8-1.3 2.3-3.9 2.7-4.6.4-.7.1-.7-.6-1.4s-.3-2-.5-3.2c-.1-1.3-.6-3.1-2.1-5.8-1.5-2.8-2.3-6-3.3-7-1-.8-1.4-2.8-1.6-3.9 0-1-1.2-1.8-2-2.6-.7-.7-1.4-1.7-2.3-6l-1.4-7.4c-.8 1.5-1.4 1.8-1.8.8-.3-1-.8-1.7-1.3-1s-.7-.6-.7-1.2 0-.7-.7-.7c-.6 0-.1-1-.4-2.9-.2-1.8-.6-2-.8.2-.2 2.2-1.4 3.5-1 4 .5.5.3 1.5-.2 3-.5 1.4-.3 2.3.1 3.3s-.3 2.9-.5 4.4c-.3 1.6 1 3.2 1.4.5zm-22.5-22c-1 0-1.6.8-1 3.6.3 1.7-1 1.4-1.4.5-.6-.9-1-2.7-2-4.3-.9-1.6-.5 1-.5 2.6-.2 1.4.8 1.4 1.7 2.7.9 1.3 0 1.7-.9 1.7s-.5 2-.3 3.3c.3 1.4-.2 1.6-.9.5s-.3-2.8-.1-5c.1-2 .2-1.5-1.2-2-1.3-.5-1-.7-.6-2 .5-1.2 1-1.8.4-2.5-.6-.5-.5-.9.5-1 1-.2.6-.9 1.4-1.2.9-.2 1.3.2 1.5-1.4 0-1.4.5-2.2 1.4-1.7.7 2 1.4 5.2 2 6.1zm12.3 14.4c0 2.6 0 3.6 1.1 4.5 1.2 1 1 2 1.5 4.4.5 2.3.5 7.3 2 10.7l1.6 3.7a6.9 6.9 0 0 0 1.8-2.3c.4-.8-.7-2.5-1.6-4-.9-1.5.1-2 1-3.8.8-2-.2-2-1.5-2.5-1.4-.5-1.4-1.7-2.1-3.7-.7-2-.6-2.8 0-3.9.3-1.1 0-2-1-2.2-1-.3-.7-1-.4-2.2.5-1.3.7-1.5-.8-1.2-1.1.3-1.4.5-1.8 1 .2.3.2.8.2 1.5z"
				fill="#00b800"
			/>
			<path
				d="M349 269c0 1.4 0 2.1-.4 2.6s-.2 1.3.2 2c.3.8.6 1.8.3 3-.4 1.4.2 2.6.9 3 .7.3 1.1 0 .9 1.7a5.3 5.3 0 0 0 1.5 4.3c.9.7 1.5 1.9 1.5 2.6-.2.7.5 1.5 1.4 1.9.9.3.7.5.7 1s.4.5 1.4.7c1 .2 1.7.9 2.9 2.2 1.1 1.4 2.6 2.2 2.4.6-.2-1.6 0-2.4-1.4-3.2-1.6-.7-2.7-4.3-3.3-6.7a14 14 0 0 0-3.7-6.5c-.1-1.6.1-2.5-1-3.3a3.6 3.6 0 0 1-1.4-2.9c0-.9-.7-2-1.1-2.1-.5-.3-.7-1-.7-1.7s-1-.6-1 .7z"
				fill="#5d3100"
			/>
			<path
				d="M342.5 334.8a35.9 35.9 0 0 0 8.9-2.4 13.6 13.6 0 0 0 5.1 2.4c-2.1.5-3.5.2-4-.2.2.7 1 1.7 1.4 1.8-2-.1-4.3-.6-5-1.3-1.8.7-4.7.9-6.4-.2zm4 3 5.2.7c-1.3 1.2-.2 2.2 2 2-1.1.2-2.2.6-1.5.7a20.8 20.8 0 0 0 8-1.5c-1.7 2.2-10.2 4.3-13.7-2zm3.5 5.4c1-.5 3.7-.3 5 .3-1.5.5-4.2.5-5-.3z"
				fill="#00d860"
			/>
			<path d="M354 343.2c1.8-.3 7.1 1 9-.2-.7 1.7-4 2-5.1 1.6-1.2-.4-2.2-.9-3-.8.3-.3-.3-.3-1-.6z" />
			<path
				d="M355.9 345.8c1.4.2 6.5-.4 8-1 1.7.5 5 1.5 5.7 1.3-1.5 1-4.5.4-5.5 0-2.8 1-5 1.2-8.2-.3z"
				fill="#00d860"
			/>
			<path
				d="M358.3 346.7c2.1.4 3.8.1 5.8-.6a9 9 0 0 0 3.5.6c1 .5 2.2 1.2 3.4 1.3a14 14 0 0 1-6.7-.5 18.7 18.7 0 0 0-7.3 1.4c0-.7.4-1.6 1.3-2.2z"
				fill="#00d860"
			/>
			<path d="M355.9 336.3c1.6.5 7.4.3 10.3-1 1.2-.7 1.9.2.5.7-4.7 1.6-8.5 2.3-11.3.9-1.1-.7-1.2-1.2.5-.6z" />
			<path
				d="M384.1 328.4c-7 3.4-11.7 4.4-21.6 1.4-.9-.3-1.5 0-.5.6a31 31 0 0 0 7.7 2.2c1.3 0 .8.7 0 .9-.8.2-1 .8 0 .3 1.2-.4 7-.5 9.5.8 1 .5 1.4.4 1.2 0-.1-.5.5-.7 1.3-.8.8 0 1.2-.3.6-.6-.5-.3-.7-.4-.2-.6.5-.2.5-.4-.2-.6-.7 0-1.1-.3-.5-.7.7-.3 1.6-.5 2.4-.5.1-.5-.2-2 .3-2.3z"
				fill="#00d860"
			/>
			<path d="M372.4 329.3a24 24 0 0 0 15.5-5.4c1.3.8 3.3 1.7 4.3 2 1 .1 2 1 .3 1-1.5 0-3.8-.7-4.8-1a27.3 27.3 0 0 1-15.3 3.9c-1-.1-1.4-.6 0-.5z" />
			<path
				d="M360.4 307.2a10.8 10.8 0 0 0 7 2.3 15.4 15.4 0 0 0 5.1 2.5c-2.1.9-4.4 1.6-5 2.3-1-.9-2.2-.7-2.6-1.2-.8.7-.7 1.2-.1 1.6.5.4 5.2 1.1 6.4.8 1.1-.4 1.4.7.5 1-2.6.8-7.4 0-9-2.7-1.7-2.6-3-3.6-7.6-1.2-.5-1.3-.5-1.6-1.4-1.6-1 0-2.5-1.2-1.3-1.1 1.3 0 5-.5 8-2.7z"
				fill="#00d860"
			/>
			<path
				d="M361.5 313c-.7.3-3 1.5-3.8 1.5-.7.1-2.1 1.3-.7 1.3 1.5 0 3.3-1.5 4.3-1.7 1.1-.2 1.1-1.3.2-1zm4.4 4.8c-.5 0-2.9.6-3.6.5-.7 0-1.2.2-1.1.6 0 .5.2.7-.7.7-1 0-1.9.3-2.2.5-.3.3-.3.6.7.8 1 .1 1.4.1 2.5-.4 1.2-.5 2.2-1.3 3.4-1.4 1.2 0 2.4-1.5 1-1.4z"
				fill="#00d860"
			/>
			<path d="M362.6 320.6c1 .7 6 2.3 7.8 2.2 1.8-.1 1.5.7.1 1-2.8.6-6.2-.6-8.6-2.4-1-1 0-1.3.7-.8z" />
			<path
				d="M386.2 323c-3.8 1.2-7.7.8-9.2.4-1.6-.3-3-.5-2 .5 1.1 1 4.5 1.7 6.5 1.2-6.9 1.6-8.7 1.4-10.4 1.1a33 33 0 0 0-6.3 0c-1 0-2.4 0-3-.5-.5-.4-.8-1 1-.8 1.8.2 2-.2.5-.5-1.6-.2-3.8.5-1.6 1.8 2.1 1.4 6.7 0 9.7.8 3 .8 9.2 1.4 15.2-3.4.3-.2.8-1-.4-.6zm-18.7-5.6v1.3c-.1.3-.1.7.4.3.6-.4 1-1 1.6-.7a7 7 0 0 0 2.9.2c.7 0 .8-.2-.2-.7-1-.4-2-.5-2.6-.5-.5.1-1.2 0-1.7-.2-.5-.3-.5-.1-.4.3z"
				fill="#00d860"
			/>
			<path
				d="M377.3 319.2a10 10 0 0 1-2.8-.7c-.8-.3-2-.4-1.1.6.8 1.1 4.2 1.7 5.4 1.2 1.3-.5.7-1 1.9-.4 1.2.7 2.4 1.3 3.3 1.3.9 0 1.2 0 .2-.6-1-.5-1.4-.7-1.4-1.1 0-.4-.3-.7.6-.4.8.3 1.8.7 2.5.3.8-.3 2-1.1 3.2-1.1l.3-.7c-1.7-.2-2.7.3-3.3.5a4 4 0 0 1-2.1.2c-.9-.2-2-.3-2.3-.5-.3-.2-.3-.5.4-.6.7-.1 1-.6 0-.4-1 .2-3.7 0-5.1-.4-1.5-.4-2-.5-2.7-.3-.6.2-.5.9.4 1 .8 0 2.8.2 3.6.8.7.7.5.7-.3.4-.7-.4-2.1-.2-.7 1z"
				fill="#00d860"
			/>
			<path
				d="m389.3 317.6-.2.7a19 19 0 0 1 7.2 1.1c1.3-1 1-1.3 2-1.1 1 .1 2 .5 2.6.2.5-.3.8-.2 1.4-.2.5.2 1.7 0 2.4-.5.6-.4 2.1-1 3-1 .8 0 1.8-.1.3-.4a14 14 0 0 0-4.6.5c-.8.3-3.2.5-4.6.5-1.3 0-3.3.7-4.8.3-1.6-.4-3.8-.1-4.7-.1z"
				fill="#00d860"
			/>
			<path d="M410.7 316.8c-2.7 2-6.1 2.4-10 2.7-1.2 0-.8.4.2.5 4 .4 8.9-1 10.4-2.8.5-.4.5-1.2-.6-.4z" />
			<path
				d="M391.9 321.4c1.1 0 5.3 1.2 6.7 1.6 1 0 1.3-.3 1-.7-.2-.4-.3-.7 1.5-.7h7c.6-.2 2-1.3 2.7-1.4-1.7.2-8.7.5-9.5.4a3 3 0 0 0-1.9.3c-.6.3-.8.5-1.6.2-.7-.2-1.9-.7-2.5-.2-.8.4-2.2 0-3.4.5z"
				fill="#00d860"
			/>
			<path
				d="M408 321.6c.7-.2 2.1-1.4 2.8-1.4 1.2 0 2.5.4 3.2.5.6 0 1.3 0 .8-.5s0-1.4 2-1.1c1.8.2 2.8.5 4.6.3 1.8-.1 2.7 1.2 6.1-.2-.2 1.4.5 1.4 1.1 1.2.7-.2 1.4-.2 2.5.7 1 .8 7.8 1 9.4.6 1.5-.3 2.4.5 1.2 1-1.2.3-1.5.8-1.2 1.2.2.4.5.8-1 .7-1.4-.2-1.7.2-2.4.8-.7.6-1 .7-3 .3-2-.3-2.4 0-3.5.2-1.2.2-1.3.1-2.5-.2a9.2 9.2 0 0 0-5-.3c-1.5.4-2.5 1-3.8.6-1.3-.4-1.4-.3-.6-1 .9-.8 1-.8 2.6-1 1.6-.2 2.8-.7 1.7-1.3-1.2-.6-1.5-.6-3 .2-1.4.7-2.2 1.2-3.9.3-1.6-1-2.4-.8-3.6-.5-1.1.3-2.9-.3-4.5-1zm5.6 2.8c-2.2.3-2.7-1-5-.7-.6 0-2 1-.2.8 1.7-.1 3.6.8 5.2.7 1.7-.2 1-.9 0-.8zM411 326c1.2-.4 3.5.4 4.4.2 1-.1 2 .4.9.8-1.1.3-3.5-.6-4.6-.3-1 .3-2.2-.1-.7-.7zm-22 6c1.5 0 7-.2 9.2-4.8.1-.4.3-.5 1 0 .6.5 3.2 2 8 2.3 1.3.2 2.7.8 0 .6-2.7-.2-6.9-.8-8.3-1.8-2.4 3.8-6.7 4.3-10 4.2-1.8 0-1.3-.6 0-.5z"
				fill="#00d860"
			/>
			<path
				d="M401 325.7c-.8 1-3.3 2.8-4.4 3-1.3 0-4.7-.4-5.6-.7-.8-.3-2-.2-.7.7a10 10 0 0 0 5.6 1.1c1.3-.2 2.7-.7 3.6 0 1 .7 2.9 1.7 3.9 1.5a9 9 0 0 1 4 .1c.6.3 1.8 1.3 0 .7-1.8-.6-3.2 0-4.1-.5 1 1.3 3 3.4 4.8 3.4.4 0 .7.7-.2 1.1.8.5 2.9.8 4-.2-.3.4-.1.7.3.9.4.2 1 .6.2.6-.8.1-2.7.3-3.3.1 1.8 1.1 6.5 3 11.2 2 1 0 1.4-.5 0-.4-3.2 0-3.3 0-3.9-.3-.6-.3-.4-.6.5-.9.8-.3 3-.5 4-.5.9 0 1.8-.5 0-.5s-4.3 0-5.2-.3c-.9-.2-1.6-.7-.7-1.4 1-.7 2-.4 2.5-1-3 0-6.8-1.6-4.7-3.2.5-.3.3-.3-.5-.4-.8 0-3-.7-4-1.3-1-.6-.3-1 .4-1.1-1.7.3-5.3-.7-7.8-2.5zm27-.1a12 12 0 0 1-6.1 1.8c-1.3 0-1.6.4-.5.6 1 .1 2.1.2 2.6.1s.7-.1 1.5.1a5 5 0 0 0 3.4.1 14 14 0 0 1 4.3-.5c.9 0 1.9 0 0-.4a14 14 0 0 0-5.2 0c-.6.1-2.5 0-1.5-.2a7 7 0 0 0 2.3-1.3c-.3 0-.5-.2-.8-.3zm-.9 3.6a10.8 10.8 0 0 1-5.6 2.1c2 .7 3.6 2.8 4.8 2.7-.6.3-1.4.8-2.1 1 1.2.3 3.2 0 4.8-1 2.8.8 6.4.3 7.6-.7a8.6 8.6 0 0 1-4.9-1.5c.9 0 1.7-.5 2.2-1-2.2.3-5.8-.8-6.8-1.6z"
				fill="#00d860"
			/>
			<path
				d="M424.2 335c.8 0 1.5-.7 2.1-1a18 18 0 0 1-10.2-2.3c-1.9-1.8-1.9-.4-.5.8a9.8 9.8 0 0 0 8.6 2.5zm4.8 4.2c-.8.5-4.8.7-6 .5-1.3-.3-2-.2-1.6.3.4.5.5 1-.6.9a9 9 0 0 0-3.7.3c-.7.3-1.8 1 0 .7 1.5-.2 3-.6 4.3-.2 1.2.3 5.7.4 6.6 0 .8-.5.3-.4-.2-.4-.4 0-.5-.2 0-.5.6-.3 1.1-1 1.2-1.6zm-38.3-5.4a46.6 46.6 0 0 1-8.6 2.3 12 12 0 0 1-4.3 1.3c.7.6 3.1 1.2 4.1.9a8 8 0 0 1-2.3 1.4c1.5-.1 3.2.2 4 .3a11 11 0 0 1-6 1.3c.4.7 1 1.3 2 1.3a10 10 0 0 1-5 .1c.4 1 .9 1.5 1.5 1.6-1.4.2-3.3.4-4.9-.5 1.2 1.6 3.9 2.2 8 1.7a18 18 0 0 0 8.1-3c-1.7.2-3.9.3-5 0a28 28 0 0 0 7.9-3.3 4.4 4.4 0 0 1-2.5-.7c1.2.1 5.8-.4 7.1-1a5.3 5.3 0 0 1-3.1-2 31 31 0 0 0 15.4.5c.7-.2.9-1.2-.6-1-2.6.1-7.6-.6-8.9-1.2a9.2 9.2 0 0 0 3.7 1.6c-2.4.7-5.8 1.2-10.6-1.6z"
				fill="#00d860"
			/>
			<path
				d="m379.6 339.8 2.3-1.4a7.9 7.9 0 0 1-4.1-.9c.9 0 2.4-.5 4.3-1.3-3.4-.1-5.7-.1-7-.7a8 8 0 0 0-4.2-.3c-.8.2-.5 1.5 3 1.2a12 12 0 0 1-6.9 1c.4 1.2.7 2.4.3 3 2 1.1 7 2.6 9.5 2.3-2.2-.8-3.4-1.7-1.6-1.9 1.8-.2 2.8-.6 4.4-1z"
				fill="#00d860"
			/>
			<path d="M374 345.8c4.3-.4 10.2-.5 15-4.4 1.2-1.1 2-.7.8.3a26 26 0 0 1-14.6 5.3c-2.4 0-3.5-1-1.2-1.2z" />
			<path
				d="M407 338.4c-1.1.5-4.2 1-5.1.9-1-.1-2.3-.2-3 .2-.8.4-.8.7.2.9l3 .1a4.9 4.9 0 0 0-1.6 1.4c1.4-.4 4.2.3 5 .8-.7.1-1.3-.1-1.8-.4 2.5 2.7 9.9 2.7 11 2.2-.5.4-1 .8-1.6 1 2.1.3 4.5.3 6.8-1.1a20.8 20.8 0 0 1-3.7-.2 4.4 4.4 0 0 1 1.8-1 12.2 12.2 0 0 0-4.5.3c.3-.6.7-1.3 1.3-1.5a28 28 0 0 1-9.7-1c2.6.3 5.4-1.2 6.7-1.2-2 0-4.3-.5-4.8-1.4zm-9.3 2.1a34 34 0 0 0-5.2 1.4c-.8.4-1.5.8 0 .8a163.8 163.8 0 0 1 .6-.2c-.6 0-1.4 0-.2-.4s2.8-1.2 4.8-1.6zm-3.6 4.3c.6 0 3.5 0 4.5-1 1.2.9 3.4 2.2 4.8 2.2 1.5 0 1.3.3 0 .5-1.2.1-3.6-.7-4.8-1.6-1.7.6-3.1.1-4.6-.2zm-21.4 12.4c2.9 1.1 6.6 2 9.4 1 1.6 1.4 4.8 1.5 6.6 1.1 1.7-.3 3.3-.6 5.2 0 2 .7 5.9.8 7 1.7-1 0-3.1 0-3.7.2-.5.1-.2.4.7 1a19.3 19.3 0 0 0-10.2 2.5 5.7 5.7 0 0 1 5.4-3.4c-1.6-.6-7-.6-8.7.4-.5-.5-1.1-1.4-1.1-1.7-2.9 1.5-8.3-.8-10.6-2.8zm-7.3-5.2c3.4-.4 5.8-1.5 6.8-2.6.5.6 3 1.2 5.7.3a1.4 1.4 0 0 0-.4 1.6 20 20 0 0 0-6.3 1.6c-1.1.5-4.5 1-5.6.4-1-.6-1.1-1.2-.2-1.3z"
				fill="#00d860"
			/>
			<path
				d="M377.5 351.3c-1.8 0-5.1 1-6.3 1.6l.5 1.7a40.2 40.2 0 0 1 13.7-1.5c-1.3 0-4 1.5-5.4 1.7 3.6-.3 7 .5 8 .7.9.2 1 1 .4 1.6-.7.6-1 .7.5.7 1.4 0 4.5 0 5.9-1.4-.6-.6-2-.4-2.4-.8a6.4 6.4 0 0 0 2.4-1.5 18 18 0 0 1-4.2-.3c-.8-.2-1.4-.4-.4-1a6 6 0 0 0 1.8-1.4c-1.8.5-4.6 1-7-1 1 .4 3 .2 3.7-.1-.8-.5-1.4-.7-2-.7 1.8-1 5.5-1.8 10.2 0a23 23 0 0 1 6.5.4c.8-.7 2.3-2.5 3.1-2.9-5.4.4-15.1-.6-15-3.4-1.7 2.3-5.7 3.6-7.5 3.2-.2.8.5 1.8 1.1 2.4-1.7.3-4.9.7-6.4.3.8.9 2.4 1.6 3.4 1.5-2 0-3 .4-4.6.2z"
				fill="#00d860"
			/>
			<path
				d="M388.9 357.8c1.4 0 4.5 0 5.9-1.4-.6-.6-2-.4-2.4-.8a6.5 6.5 0 0 0 2.4-1.5c3.9-.4 7.3-.2 9-.7 1.7-.5 6-.2 6.7-.5-3.6.7-4.3 1-4.6 1.6-.2.6 1.3 1 2.1 1-1.6 0-3.7 1.7-4 2.4-2-1.2-3.1.3-3.4.8a7 7 0 0 0-5.6 1c-2-.5-3.3-.9-5.3-.5 1.3-.3 1-1.2-.8-1.3zm17.6-10.8c1.3 0 4 .2 5 0a6 6 0 0 0-1.7 1.2c3.2-.4 7.4-.6 8.6-.4-1.4-.3-3 .7-3.8 1.3-.8.5-.3.7.7.9 1.1.1 2.6 1 .6.7a36 36 0 0 0-6.7-.1c-.9.1-1.4-.3 0-.5 1.2-.3 2.2-.7 2.8-1a12 12 0 0 1-3.8 0c-.7-.2-1.1-.6-.4-.7.7-.1.3-.5-.5-.4-.8.2-2.8 1-3.9 2 1.2-1.2 2.3-2.3 3.1-2.9z"
				fill="#00d860"
			/>
			<path d="M392.5 349.2a7.9 7.9 0 0 0 6.2 2.7c.6 0 1.7.8.2.9-3.8.1-5.7-.7-7.4-3.2-.4-.6.2-1.3 1-.5zm23-32.3a24 24 0 0 0 9.4 1.7c.6 0 1.6.5.3.7a16.5 16.5 0 0 1-9.9-1.9c-.7-.4-.5-.8.3-.5z" />
			<path
				d="M417.6 317c3.2-.2 5.6-.2 6.5.8 1.8-.6 5-1 5.7-.7.8.2 1.6-.3-.1-.7-1.7-.4-5.7-.6-6.9-.3-1.2.2-5 .4-6.4.2.5.1.9.2 1.2.5zm12.2 1.1c1.5-.8 5.8 0 7-.6-1 1.1 3 1.2 6.3.3-1.3.8-4 1-5.2 1.5-1.2.5-1.9.1-2.8-.2-1-.4-3.3-1.3-5.3-1z"
				fill="#00d860"
			/>
			<path
				d="M443.1 317.8c-3.3 1-7.2.8-6.2-.3-1.4.6-5.6-.2-7 .6 1.4-.9 2.6-.2 3.7-2.1.8.2 2.3.3 3-.5a9 9 0 0 1 3 1.2c.6.5 1.4-.1.7-1 1.4-.5.5.8 4.1-.2.7-.2 2.5-.5 3.2-.5a21.8 21.8 0 0 1-4.4 2.8z"
				fill="#00d860"
			/>
			<path
				d="m377.9 302.4-.8-78.7c0-3.6-1.7-2.9-1.7 0v78zm25.5-83 2.8 83-.3.7H404l-1.8-83.7zm24.1 70.2-1.4-67.4c0-2-1.8-1.7-1.8.4l1.4 67z"
				fill="#ff0"
				stroke="#000"
				strokeWidth={0.4}
			/>
			<path
				d="m389.2 233.2-24.8-.3c-1 5 5 4.6 7 3.5 3 1.8 5 1.8 6.5 0 2 1.8 5 1.4 6 0 2.8 2.5 6 0 5.3-3.5zm1.8 12.1h-24.8c-4.7 4.3 1 6.4 6 3.5.7 1.5 3.5 2.2 5.7 1.1 2 1.4 5 .4 6.3-1 2.5 1 5.7 1.4 7.1-3.6zm-.7 16h-24.1c-.4 3.9 4.6 3.5 6.3 2.4 1.8 2.9 6 2.2 7.5.4 2.5 1.8 4.6 1.4 5.7 0 2.4 2.1 5-.7 4.6-2.8zm1.4 15.6-27.3-.4c-1.4 4.6 2.8 5.3 4.6 4.3.7 2.4 4.2 1.7 5.3 0 1.4 1 3.2.3 4-.7.3 2.4 3.5 2.8 6 .7 5 3.5 9.5-.7 7-4zm23.7-6.4h-22.3c1 4.2 3.2 5.3 6.7 2.8 2.9 2.9 7.1 1.8 8.2.4 5 3.9 7.4-.7 7.4-3.6zm-2-15.6-22-.7c.3 5.6 5.6 5.3 8.4 3.2 1.8 2.4 5.4 1.7 7.1 0 2.5 2.8 7.1 1 6.4-2.5zm2.8-17.4h-23.4c0 3.9 5.3 6 9.2 2.5 1 4.6 5.3 3.2 7 1.4 2.9 3.5 9-.7 7.2-3.6zm-1.5-11.7-21.2.3c0 3.6 5 5 6.7 2.2 1 1.7 4.6 1.4 5.7 0 1.4 2.5 3.5.7 4.2 0 2.5 1.7 5 .7 4.6-2.5zm24.5 7.8-25.5-.4c0 2.5 2.5 3.6 4.2 2.5 0 2.9 3.6 3.6 6 1.4 1.5 2.5 6 2.9 7.9 0 3.5 3.2 7.8.7 7-3.5zm-.3 21H414c0 3.5 4 4.5 6.4 2.8.4 2.8 3.6 3.1 5.3 1.4 2.5 2.5 6 2.8 8.2 0 2.8 1 5.3-1.4 5-4.3zm-1.5 18.7h-19.8c0 3.6 4.2 3.6 6 1.8 2.1 2.5 5 2.5 6.7.7 2.5 2.1 6.8 1.4 7.1-2.5z"
				fill="#fff"
				stroke="#000"
				strokeWidth={0.4}
			/>
			<path
				d="M405.9 303.1c-10.7 0-21.7 0-29.1-.7-7.5-.7-9.6-2.1-14.9-5.3L342 285c-1.7-.8-3.5.3-1 1.7l19.8 13.1c5.4 3.6 8.9 6.8 12 10.7 4.3 4.6 7.2 4.6 9.3 3.9 2.1-.7 5-1.8 8.2-1.1 2.8.7 7 1 9.2.7 1.8 1.8 6.4 1.4 8.9.7a12 12 0 0 1 6-.3h6c1.8 0 6.4-1.1 9.6-.7 3.5.7 6.7 0 8.9 0a17.7 17.7 0 0 1 7-.4 9.3 9.3 0 0 0 3.6-5c2.1-.3 2.8-.7 3.2-1.7l2.1-5.7h.7v-2.1l-1.4-2.2.7-3.5 1.8-.7-.7-3.6-31.2.7a7 7 0 0 0-2.2 4l-9.2 1.4c-1 .3-2.1.3-3.2 1.7z"
				stroke="#000"
				strokeWidth={0.4}
			/>
			<path
				d="m443.1 289.3 4.6-17.4c.7-1.8-1-2.1-1.8 0l-4.6 17.4z"
				stroke="#000"
				strokeWidth={0.4}
			/>
			<path
				d="M461.2 269.8c-3.9 1.7-6 2.8-7.8 2.1-1.8-.7-4-1-5.3-.4a1.8 1.8 0 0 1 0 .4 1749.5 1749.6 0 0 1-4 13.5c3 1 7.9 1 9 0 1.4-1.4 4.6-1 6.3-1 1-1.5 1.4-3.3 1-4-.3-.7 0-2.5 0-3.5 0-1.1 1.5-5 .8-7.1z"
				fill="#fff"
				stroke="#000"
				strokeWidth={0.4}
			/>
			<path
				d="M371.8 236.4a188.7 188.7 0 0 1-28.3 49.7m7 4.2a193.3 193.3 0 0 0 40.5-44.6m-24.8 15.2c-1.1 9.6-4 26.6-5.4 35.5m9.3-14.2c-3.6 3.5-8.2 9.2-12.1 12.4m45-31.6c-2.8 2.9-6 6.4-9.2 7.1m11-6.4a24.8 24.8 0 0 0 9.6 6.8m-11.4-22a30.1 30.1 0 0 1-10.6 6m12-5.7a25 25 0 0 0 7.9 6M393 237.6a24.8 24.8 0 0 0 9.6-5.3m1 0c2.5 2.5 7.1 5 9.6 5.6m-19.5-11.7a14.2 14.2 0 0 0 8.5-5m1-.6c2.6 2.1 7.2 5 9.7 5.3m11.3 2.8c-1.4 1.8-5.3 4.6-7.8 4.6m9.6-4.6c1 1.8 3.9 4.6 5.7 4.6m-17 21.3a25.5 25.5 0 0 0 9.9-6.7m1.7.3a19.9 19.9 0 0 0 6.8 6.4M418.6 273c1.5 0 5.4-2.2 6.4-4.6m2.2-1.1a24.8 24.8 0 0 0 7 6m-66.3 3.2a49 49 0 0 0 18.1-12.4m-8.5 6.7a36 36 0 0 0 11.4 6m-22-15.9a28.4 28.4 0 0 0 8.5-5.3m1.7-.4c1.1 1.4 8.6 6 11.8 6m-13.5-20.9a34.8 34.8 0 0 1-8.9 5m10.6-5c2.5 1.8 7.8 5 11 5m-12.7-19.2a32.2 32.2 0 0 1-8.5 6.8m10.2-6.4c1.5 2.5 5.7 6 8.6 6.4M414 242a108.5 108.5 0 0 0 30.9 34m-50-47.1c10 14.2 29 45 47.5 56.4m3.5-12a65.3 65.3 0 0 1-17.3 16.2m16-12.4c-6.1-10-9.3-22.3-14.3-39m-49.6 44 7 21.3m-8.4-21.7L386 303m-8.5-22.3 6.4 22m-7.1-21.7 5 21.7m0-.8h6m-.7-2h-5.7m5-1.9h-5.7m5-1.7H380m4.6-2.2H380m-.4-1.7h4.6m-5-1.4h4.7m-5-1.8h4.3m-4.6-1.4h3.9m-4.3-1.8h3.6m-4-1.4h3.6m-3.9-1.1h3.5m-3.5-1.4h3.2m-9.2 0-4.3 17.7m5.3-17.7-3.5 18.4m4.6-19.1-2.8 19.5M375 281l-2.1 20.6m2.5-1.4h-7.1m7-1.8h-8m8-2.1H368m7.1-1.8h-6.7m7-1.8h-6.7m6.8-2.1h-6m6-1.8h-6m5.6-1.8h-5.3m5.3-1.7h-4.6m4.6-1.8h-4.2m4.2-1h-3.9m3.6 19.4V281m23-7-14.2 28.7m15.3-29.1-12 29.4m12.7-29.8L390 303m10.7-29-7.8 29m.3-1h-8.9m9.6-2.9h-8.5m8.9-2.1H387m8.5-2.1h-7.1m7.4-2.2h-6.7m7.5-2.1h-6.4m7-2.5h-5.6m6-1.8h-5.3m6-2h-5m5.4-1.5h-4.6m5-1.4h-5m4.6-1.4h-3.6m3.6-1.1h-3.2m3.5-1.4h-2.8m3.5-1.4H397m2.8-1.1h-2.4m12-.4 6 19.9m-5-19.5 7.5 19.1m-6.4-19.1 9 18.8m2-1.8-9.9-17.4m10 17.8h-7.2m6.4-2.9h-7m6-2.1H414m5.3-2.5h-6m4.6-2.1h-5.3m4-2.5h-4.7m3.5-2.5h-4.2m2.8-2.1h-3.5m11.3.4-6.4 18.4m8.2-19.2-5.7 18.8m2.5-.3 4.3-17.7m1 .7-3.5 16.6m-6-1h6m-5.3-2.2h6m-5.3-2.4h5.7m-4.7-2.2h5.4m-4.7-2.5h5m-4.2-2h4.6m-3.6-2.6h4.3m-3.6-2h3.6m3.2.3 2.8 12.7m-1.8-13.4 4 13m-2.5-13 4.2 13m-2.5-12.3 4.6 12.4m-.3-1h-6m5.3-1.9h-5.7m5-1.7h-5.4m4.7-2.2h-5.4m4.3-1.7h-5m4.3-1.8h-4.6m3.9-1.8h-4.3"
				fill="none"
				stroke="#000"
				strokeWidth={0.4}
			/>
			<path
				d="M374.2 309.7a10 10 0 0 1 10.2.4c3-1.7 8.3-1.2 10.8 1 3.8-2.6 7-3 10.7-.5 3-2 7.2-2.2 10.7.2 3.3-1.6 7-2.9 10.2.6-2-1.4-6-2.6-10.2.6-3.3-3.2-8.9-2-10.7.2a7 7 0 0 0-10.5.2c-3.3-2.8-8.3-2.9-11-.7-2.1-1.7-5.2-3.1-10.2-2z"
				fill="#00b800"
			/>
			<path
				d="M424.5 305.8a217.4 217.4 0 0 1-53.6-1c-2.3-.7-1.7-1.5.3-1A172.2 172.2 0 0 0 406 305l5.7-7.7c1-1.1 1.2-1.3 3-1.6l8-1.3v1.1l-.6.6c0 1.8.4 6.4.7 8.2.4 0 .9-.3 1-.3.8-.2 1.4 1.5.8 1.7z"
				fill="#cf6200"
			/>
			<path
				d="M448.6 306.5h1.9a2 2 0 0 0 1.8-1.4l2-5.8-1.5-2.2a125.1 125.1 0 0 0 .7-4.8l2-.7c0-.4-.1-1.6-.6-2-6.3.3-25 1-28.6 1-.8 0-1.2 0-1.5 1.1-1.8 6.6.7 15.8 7.3 21 .5.5 1 .1.2-.6a23.5 23.5 0 0 1-3.9-5l4.7-.2c.4 1.5 1.5 4.8 1.8 5.3.2.6.7.8.5 0-.7-2-1-4.3-1.3-5.3l5-.1.2 4.7c0 .7.6.7.6 0v-4.8l4.3-.1-.4 4.7c0 .7.3 1.2.5 0l.7-4.7h3c0 .8-1 3.9-1.3 4.6-.2.8.1.8.4 0a21.5 21.5 0 0 0 1.5-4.7z"
				fill="#cf6200"
			/>
			<path d="M427.6 305.7c-.4-1-2-4.6-2.1-7.2l6.2-.2a74.6 74.6 0 0 0 1.2 7.3zm5.3-7.4 1 7.3h5l-.2-7.4zm-7.2-6.4c-.2 1.3-.3 4.1-.2 5.4l6.1-.1-.5-5.5zm6.6-.2.4 5.4 6-.1-.3-5.5zm7.3-.2c0 1.2.2 4.6.1 5.5l5.3-.2c0-1.2.2-4.6.1-5.5zm6.5-.2-.1 5.5 5.6-.2c.3-1.1.8-4.3.8-5.6zm5.8 6.5-6 .2a188 188 0 0 1-.6 7.3l5.7-.2a48.8 48.8 0 0 0 2-5.6l-1.1-1.7zm-12 .3.1 7.3 4.3-.1.6-7.3-5 .1zm-24.6-1.4-2.3.5a177.1 177.1 0 0 1-5.8 7.9l8.4-.2-.3-8.1zm1.1-.2.3 8.3 5-.4-.7-8.7z" />
			<path
				d="M391.7 276.9h-27.3v-.7l27.3.3zm21.3-22c.3 0 .3 0 0 0l-21.3-.4c-.4 0-.4 0 0 0H413zm-22.7 6c.3 0 .3.4 0 .4h-24.1c-.4 0 0-.4 0-.4zm.7-15.6c.3 0 .3.4 0 .4h-25.2c-.4 0-.4-.4 0-.4zm-1.8-12.4c.4 0 .4.3 0 .3h-24.5c-.3 0 0-.7 0-.7l24.9.4z"
				stroke="#000"
				strokeWidth={0.4}
			/>
			<path
				d="m414.7 225.8-21.2.3z"
				fill="#fff"
				stroke="#000"
				strokeWidth={0.4}
			/>
			<path
				d="M415.8 237.8c.4 0 .4 0 0 0h-23c-.4 0-.4 0 0 0zm23 16.4v.3H414c-.7 0-.7 0 0 0h25zm0-21c.8 0 .8.4 0 .4h-25.1c-.4 0-.4-.4 0-.4h25.5zm-23.4 37c.4 0 .4.3 0 .3h-22.6v-.4zm22 3.1c.4 0 .4 0 0 0h-19.8z"
				stroke="#000"
				strokeWidth={0.4}
			/>
			<path
				d="M455.5 276.9a10.6 10.6 0 0 0 0-5 3.9 3.9 0 0 1-2.1 0 10.6 10.6 0 0 0-1-.7c0 1.4-.8 5.3-1.5 6.7-1 0-3.5 0-4.6-.7l-1 3.6a12.4 12.4 0 0 0 5.3 0c0 2-.4 3.9-1.5 5.3 1.8 0 3.6 0 4-1 1-1.5 1-3.6 1.4-4.7l1.7-.3 1.8-.8 2.5-.3v-2.1l.7-1.5-5.7 1.8z"
				fill="#ef072d"
				stroke="#000"
				strokeWidth={0.4}
			/>
			<path
				d="M367.6 157a47 47 0 0 0-10.7.7c-1 .7-1.4 1 .7 1.4 2.2.4 6 1.8 8.2 2.8a8 8 0 0 1 3.5 7.1 21.3 21.3 0 0 0 10.7 22.4c.3.3.7.7.3 2.1l-1 4c0 .6-.4 1.3.7 1a71 71 0 0 1-3.6 5.7c-5.6-.8-10.6 0-10.6 6.3 0 .7 0 1.5.7 0 1-1.4 2.1-2.8 4.6-3.5-1.4 2.5-2.1 4.6-1.8 6 0 1 .8 1.8 1.5 0 .3-1.4 1.7-2.8 2.8-3.9.7-.3.7-.3.4.7-.4 1 .3 3.2 1 4 .7.6 1 .3.7-.8 0-1.4 0-3.9 1.8-4.6 2.1-1.4 4.3-.7 5 .7 1 1.8 1.7 0 .7-1.4s-2.2-3.2-3.6-3.2l3.6-6c0-.7.7-1 1.4-.7 0 .3.7.3 1-.7l2.5-5 2.2-.7 3.5 5.3v2.1c0 1.5-1.4 4.6-1.8 5.7-4.2 0-6.3 0-7.8 2.5-.7 1 .4 1.4 1.5 1a7 7 0 0 1 3.5-1c.7 0 1 .7 0 1-2.5 1.1-4.3 2.9-4.3 5.4 0 .7.8 1 1.1 0 1-1.8 2.9-3.2 4.6-3.6 0 1.8.4 4.6 1.8 5.3 1 .8 1 0 .7-1-.7-1.8 0-3.6 1-4.6 1.8-2.2 6.1.7 7.2 1.4.7.7 1.4 1 .7-1-.4-2.6-4-3.6-7.1-4.3l4.2-15c1.8 1.1 3.6-1.7 6.4-.6 5 2.1 12.4 6.7 13.5 7.8 1.4 1 1.8.7 2.5 0 .7-.4 1.8 0 2.8 0 .7.3 1.4.7.4-1.4a25.5 25.5 0 0 0-8.5-9.3c2.8 0 6.3 0 6.3-.7s-4.2-2.1-6-2.1a11.7 11.7 0 0 0 5.7-2.8c.7-.8 0-1.1-2.9-1.1-7.4 0-11.3 0-15.2-2.1-6.4-3.6-10.3-7.8-13.5-9.3-1.4-1-2.5-3.2-3.5-5-1.8-5.2-1.8-8-6.4-9.9a14 14 0 0 0-13.1 2.9z"
				stroke="#000"
				strokeWidth={0.4}
			/>
			<path
				d="M368 158.4h-6.1s-.7 0 0 0l5.3 1.4c1 0 .7 1 0 .7-.7-.3-1.4 0-.7.7 3.6 2.5 4.3 3.6 3.6 13.2l1.7 1.4c.7 0 .4.7 0 .3-.3-.3-1.7 0-.7.7 1 .8 1.8.8.7.8-1 0-2.1.7 0 .3 1.8 0 2.9.7 0 1-2.1 0-1.4.8 0 .8 2.5 0 1.8.7 1 .7-.6 0-1 .7.8.7h2.5c.3 0 .7 0 0 .4-.7 0-.7.7.3.7 1.1 0 1.8 0 .7.3-.3 0-1 .4 0 .7 2.5 0 2.9.7 2.2 1-.7.4-1 .4 0 .4s2.1.4 1 .8c-.7 0-1 .7 0 .7 1.1 0 1.8.7 1.1 1-.7.4-1 .7 0 .7s1.4.4.7.7c-.7.8-1 .8-1.8 0 0-.7-.7-.7-.7 0l-.7-1c-.3-1-1-1-1 0s-.8.3-1.5 0a11.7 11.7 0 0 0 14.2 2.8c.4 0 .7 0 1 1l2.2 4c.4.7 1 0 1-.7l2.2-6c0-1.1 1.4-1.8 1 1 1.1-.7 5.4-1 9 0a43.3 43.3 0 0 1 9.5 5.3 2.1 2.1 0 0 0 1.8.4c1 0 1.4 0-.4-1.8-1.7-1.8-1-2.5 0-1.8 1.1.8 1.8.4.7-.7l-3.5-3.2c-.4 0-.4-.7-2.1-.7h-5.4c-.7 0-1.4 0 .8.7 2 .7 6 3.6 7 4.3 1.1.7 1.5 2.1-.3.7a78.4 78.4 0 0 0-12.8-7c-9.5 1-17.4 2-23-4-2.9-3.2-2.9-10 1.7-12.8-.7-.7-.7-1.4-.3-1.4v-2.1c-.7-.4-1.4-1-1.4-1.8-1 0-1.8-1.8-3.6-1-1.7.7-2.1 0-2.8-.4-.4-.7-.7-.7-1.8-.7-1 0-1.8 0-1.8-.7s.8-.7 2.2 0c2.5 1 4.6 1.8 6.4-.7 1.4-2.2-.8-4-3.6-4.6-3.2-.7-5.3 1.7-6.7 2.8z"
				fill="#fff"
				stroke="#000"
				strokeWidth={0.4}
			/>
			<path
				d="M383.5 157.3a10 10 0 0 0-3.5-2c-1 0-1 .6-.7 1v2.1c.7.4 1 1 0 1-.7.8 0 3.3 1 2.5h.7s0 1.1.8 1.1c.7 0 0 .7 0 1h.7c.7 0 .3 1.5-.4 1.8 1 0 1.4 0 1.4.8.4.7 1.4 1 1.4 2 0 1.2 0 1.2-1.4.8-1.4-.4-1.4 0-1.7.7-.4.7-.8 1 0 1 .7 0 1.4.4.3.8-1 .3-2.1 0-2.5 1 0 1.1 0 1.5.7 1.1l2.5-1.4 1.8.3c.7.4 0 1.8-.7 1.1s-1.4 0-1.8.4l-1.8.7c-.7 0-1.4 0-1 1.7 0 5 3.9 8.6 11 8.6H402c-2.2-1.5-3.6-2.2-4.6-2.2h-1.1c.4-.3 0-1-.4-1-.3 0-1-.7-1.7 0l-3.6 1.7c-.7 0-1.7 0-.7-.7l3.2-1.4c.7 0 .4-.7.4-.7s0-1 1-.7a21 21 0 0 0 6.4 3.2c1 0 1.4-.7.7-1a2 2 0 0 1-1-1.5c0-.4.3-.7 1.7 0a18 18 0 0 0 4.6 2.1c1.1.4 1.8.4 0-.7l-8.1-6c-1-1-1 0-.7.7.3.7-1 1-1.8.4-.7-.8-1-1.1 0-1.5 1-.3.7-.7-.4-1.7-1.4-1.1-1.7-1.1-1.4 0 .4 1 .4 1.7-.7 1.4-1-.4-2.1-1-1-1.4.7-.7 1.7-1.1 0-2.2-1.8-1-.8 0-1.1.7-.4.8-1.4.8-1.8 0-.3-.7-1-1-.7-1.4.4-.3.4-.7 1 0 .8.7 1.5 0 .4-1-1-1.1-1.4-.7-1 0 .3.7-.7 1.4-2.2 0-.7-.4-.7-1.1 0-1.5.7 0 .7-.3 0-1-2.5-4.3-1.4-7.5-4.2-10.7z"
				fill="#fff"
				stroke="#000"
				strokeWidth={0.4}
			/>
			<path
				d="M383.7 158c-.2.4-.3.4-.7.7-.6.3-.7 1.4.2 1.2.7 0 1-.5 1.2-.7a8 8 0 0 0-.7-1.2zm-2.9-2.3c-.7.7-.8 1-.5 1 .5 0 .3 0 0 .5s.6.7 1 .5c.3-.3.4-.5.6 0 .2.3.7 0 1.2-.4a10.2 10.2 0 0 0-2.3-1.6zm-1.3 4c-.9.5-.5 2.8.8 2.2.5-.2.9-.2.8.2v.6a4.3 4.3 0 0 0 1.6-1.1c.9-1 0-1-1.2-1-1.3 0-1.7-.1-.4-.9 1-.7.3-1.1-1.2-.9.2.3 0 .7-.4.9zm5.4 5.4c-.8-.7-.3-1.1.5-1.4l.3-.4-.6-2.3c-.4 0-.8.9-1 1.4-.1.6-.3 1-.9.7-.6-.1-1.1.5-1.2 1.2h.3c.3 0 .5.4.4.7 1.7 0 2 1.1 2.2 2 .3.8.7.6 1 .2.2-.5-.4-1.4-1-2.2z"
				fill="#cf6200"
			/>
			<path
				d="M385.3 174.7c-.3.7-.3.7-1.3.7s-2.2.3-2.7.8c-.3.3-2 .4-2 1.2 0 .7 0 1.3.7 1.4.7 0 .8.2.6.7-.3.5-.5 1.5.7 1.5 1.3.1 2.3-.2 2.6.5.3.7 0 2 .2 2.3.3.5 1.2.8 2.5 1.2 1 .2 4.3.4 5.4.3 1-.2.7-.7-.4-.9-1 0-1.9-.2-2.2-1-.2-.7-.4-1.1.3-1.8.5-.7 1.1-1.1.8-2.2-.4-1-1-2.4-2.2-2.7-1.2-.3-.8-2-2-2.1l-1 .1z"
				fill="#ff0"
			/>
			<path
				d="M379.3 184.8c1.1 0 2 .3 1.2.6-1 .2-1.5.7-.3.8 1.1.1 2 .5 1.2.8-.8.3-1 .8 0 .7 1 0 1.5.6.8 1s-1.2.7-1.7 0c-.4-.7-.7-1-.9-.4-.1.5-.4.1-.8-.7-.3-.9-1-1-.8-.4.2.7-.7.7-1.5.4a16 16 0 0 0 2.7 2.2c1-.4 2.4 0 2.8 0 .4 0 1.9.4 2.6.7.8.4 1.3-.3 1-1-.3-1-.4-.6-.7-.2-.5.5-.5-.2-.5-1.2 0-.7-.5-.5-.8 0-.2.5-.5-.3-.3-.8s0-.7-.5-.6c-.4.2-.4 0-.5-1 0-.9-.4-.7-.5-.4-.2.4-.5-.1-1.1-.8-.5-.7-1-.3-2 .1l.7.2z"
				fill="#cf6200"
			/>
			<path
				d="M390.5 190.4c-5 2.1-8.6 1.2-11.4-.7 1.2-.3 2.5 0 2.9 0a9 9 0 0 1 2.6.9c.8.4 1.3-.4 1-1.2.8.9 1.2 1.5 2 1.5 1-.1 2.2-.2 3-.5zm-10.7-23.1c-.3-1-.6-1.3-1.2-1.3l-1.4-.2c-.6-.3-1.5 0-1.5 1.1 0 1.2-.8 1.7-1.7 2.3-1 .7-1.5 1.3-1.5 2.4 0 1-.3 1.4-.8 2.1l-1.1 1.2 1.2.8c.6.2.4.7-.3.5-.7-.1-1.3.2-.2.5 1 .2 1.6.7.6.7-1.1 0-2.3.8-.2.6 2-.2 2.8.7.4.7-2.5.2-1.5 1-.2 1 2.3 0 1.6.6 1 .6-.6 0-.9.7.6.6h.1c.2-.2.4-.5.5-.9.2-.7.5-2.8 1.4-3.5.8-.6 1.3-1.4 1.3-2a9 9 0 0 1 2.1-4c.9-.7 1.2-2.2 1-3.2z"
				fill="#ff0"
			/>
			<path
				d="M378 167.3c-.9-.6-1.8-.2-1.8.8 0 1.1-.5 1.5-1.2 1.8a3.2 3.2 0 0 0-1.5 2.2c-.2.8.1 1.4-.6 2.1-.5.7-.7 1.2-.2 1.6.5.4.5.4.6 1 .2.5 1.2 0 1.2-.7s.3-.7 1-1c.7-.4 1.8-2.2 1.5-2.7-.2-.4-.8-.8 0-1.5.8-.8 1.6-.8 1.6-1.5s.2-.8.5-1.1c.2-.2-.6-.6-1.1-1z"
				fill="#cf6200"
			/>
			<path d="M378 166.4c-.6-.2-.9 1-.1 1.2.8.1.9-1 0-1.2zm-.2 1.6c-.5 0-1.3.8-.2.7 1-.1 1.4-.9.2-.7zm-1.1 1.4c-.7.4-.5 1.2.3.6.9-.7 1.2-1.3-.3-.5zm-1 1.4c-.7.3-.5 1.1.4.5.9-.6 1.2-1.3-.4-.5z" />
			<path d="M374.4 171.3c-.7.3-.2 1.2.7.6 1-.5.9-1.4-.7-.5zm.7.8c-.6.3-.1 1.2.7.6.9-.6 1-1.4-.7-.6z" />
			<path d="M374.1 172.4c-.7.4-.3 1.2.7.6s.8-1.4-.7-.6zm.7 1c-.7.3-.3 1.1.7.5.9-.6.8-1.3-.8-.5z" />
			<path d="M373.7 173.9c-.7.3-.2 1.1.8.5 1-.5.7-1.3-.8-.5z" />
			<path d="M373.8 174.7c-.7.3-.3 1.1.7.5 1-.5.8-1.3-.7-.5z" />
			<path
				d="M373.3 182.5c-.7 0-1 1-.3 1.1.8.2 1 .2 1 .9 0 .6.2 1.4 1.1 1.5.9 0 1.7-1 .9-1.2-.8-.3-1.5-.6-1.5-1.2 0-.8-.7-1.2-1.2-1.1z"
				fill="#cf6200"
			/>
			<path
				d="m396 177.2.3.4c.6.5 1.8 0 1.6-.4-.1-.5-.7-1.8.7-.7l8.5 5.9c1.7 1.2.6 1.4-.2 1l-4.5-2.1c-1.4-.8-1.5-.5-1.8-.3-.1.3 0 .8.5 1.3-.8.1-2.1 0-2.5-1-.5-1-1.6-2.3-2.3-3.3-.3-.4-.5-.6-.4-.8z"
				fill="#ff0"
			/>
			<path
				d="M441.7 328.2c-1.2.7-2.8 2.1-1.7 4l.3-.2a113.3 113.3 0 0 0 11.7-17.2v-.5a16.2 16.2 0 0 1-4 2.5c.5 1.5-2 3.4-3.5 4 .6 1 .4 2.3-.8 2.6.3.8-.7.8-1.7 1.3-1.1.5-1.7.7-2 1.4.5-.4 1.4-.7 1.8-.5.4.2.6.8-.3 1-.8.2-1.4.6-1.6 1 1.2-.4 2.9-.2 1.7.6z"
				fill="#00d860"
			/>
			<path
				d="M387 175.4c-1.3-1-1.7-.3-1.3 0 .3.4 0 1.4-1.1 1.8H381c-.7 0-1.7 1.4 0 1l5.7-1c.7 0 1.4-.7 0-1.8zm2.6 2.2c-1.1-1.1-1.5-.8-1.1 0 .4.7-.4 1-1 1l-5 1.4c-1.5 0-1.5 1.1.3 1.1s5.3-1.8 5.7-1.8c.4 0 .7-1 1-.7.4.4 1.1 0 0-1zm1 2.8-3.5 1.8c-1 0-1.8 1 0 1s3.5-1.7 4.2-2.1l1.5-.7s1.4-.4 0-1.4c-1.5-1-2.9 0-2.2.3.7.4 0 1 0 1z"
				stroke="#000"
				strokeWidth={0.4}
			/>
			<path d="M376.1 157.3c-2.2-1.4-4.8 1.6-2.3 3.3 2.2 1.5 4.5-1.9 2.3-3.3z" />
			<path
				d="M373.3 158.7h.7c-.2.7.5 1.7 1.6 1.5-.9.6-2.5-.1-2.3-1.5zm8.8 33.5c.7.2 3 .5 3.8.5l-1 2c-.3.6-.4.7-.4-.2 0-1-.6-1.6-1-.6l-1 1.7c-.2.4-.6.6-.5-.4v-2.9z"
				fill="#fff"
			/>
			<path
				d="M471.1 219.4c0 57.8-9.2 120.2-84.4 150-74.8-29.8-84-92.2-84.4-150zm0 0c0-22-1-43.3-.7-61.7a225.6 225.6 0 0 0-83.7-15.3c-18.8 0-55.7 2.9-83.7 15.3.7 18.4-.7 39.7-.7 61.7z"
				fill="none"
				stroke="#000"
				strokeWidth={1.1}
			/>
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
