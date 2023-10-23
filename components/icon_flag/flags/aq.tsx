import clsx from "clsx";

import { utilCss } from "../../../src/styles/utils/util_css.css";
import { Box } from "../../box/Box";
import { flagStyles } from "../styles.css";

import type { UtilCssArgs } from "../../../src/styles/utils/util_css.css";

export function FlagAq({
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
			<path d="M0 0h512v512H0z" fill="#3a7dce" />
			<path
				d="M107.7 240.9c-3.5-7.9-3.5-7.9-3.5-15.7-1.8 0-2.1.4-3.1 0-1-.3-1.4 7.3-4.7 5.8-.5-.7 2.4-6.2-.8-8.4-1-.8.3-5.3-.2-7.2 0 0-4 2.3-7-5.9-1.4-2.1-3.4 2-3.4 2s.9 2.5-.7 3c-2.3-1.8-3.9-.8-6.7-3.3-2.9-2.5.6-5.4-4.8-7.6 3.5-9.8 3.5-7.8 12.2-11.8-5.2-3.9-5.2-3.9-8.7-9.8-5.3-2-7-3.9-12.2-7.8-7-9.8-10.5-29.4-10.5-43.2 4.4-4.6 10.5 15.7 19.2 21.6l12.2 5.9c7 4 8.7 7.8 14 11.8l15.6 5.9c7 5.8 10.5 13.7 15.7 15.6 5.7 0 6.8-3.6 8.6-3.9 10.2-.5 15.5-2 17.5-5.5 2-2.8 7 1.6 21-4.3l-1.8-7.8s3.8-3.5 8.8-2c-.2-3.6-.5-13.1 4.4-17.5-3-3.5-1-6-1-6s2.8-3 3.2-4.6c-1.5-8.7 1.2-8.8 1.9-11.3.6-2.6-2.4-1.7-1.6-5.2.9-3.5 6-4.4 6.6-7.3.7-2.8-1.5-4.3-1.3-5 1-2.7.1-9.2 0-11.7 9.3-2.9 12.4-11.4 15.7-7.9 1.7-11.8 3.5-15.7 14-15.7 1.4-3.6-3.9-6.7-1.8-7.8 3.5-.5 6.1-.3 10.2 5.7 1.3 1.9 1.5-2.8 2.8-3.3 1.4-.5 4.5-.5 5-2.8.4-2.4 1.1-5.5 2.9-9.4 1.5-3.2 2.6 1.2 4 7.4 7.3.3 23.9 2.2 30.9 4.3 5.2 1.6 8.7-1.5 13.7-2.1 3.7 4.2 7.2 1 9.1 10 2.8 4.7 7.3.3 8.3 1.8 5.9 18 26 5.8 27.4 6.1 2.6 0 5.7 8.1 7.7 8 3.3-.7 2.4-3.2 5.2-2.2-.7 6.8 5.7 14.7 5.7 19.7 0 0 1.5.9 3-.6 1.4-1.5 2.7-5.4 4-5.3 3 .5 4.3 1 7.8 1.6 9.4 3.7 14.3 4.5 18 6.3 1.6 3.6 3.3 5.4 6.8 4.7 2.8 2.2.7 5 2.4 5.2 3.5-2 4.7-4.1 8.1-2.2 3.5 2 7 6 8.8 9.8 0 2-1.8 9.8 0 21.6.8 4 1.3 7 5 13.8-1 6.9 4.7 18.5 4.7 21.5 0 3.9-2.8 6-4.5 9.8 7 6 0 15.7-3.5 21.6 26.2 5.9 14 17.7 34.9 11.8-5.3 13.7-3.4 12.6 1.8 26.3-10.4 7.9-.2 10.3-7.2 20-.4.7 4.2 8.6 10.6 8.6-1.7 15.7-7 9.8-5.2 33.3-13.8-.3-8.2 17.6-17.5 15.7.6 11.3 5.3 12.2 3.5 23.6-7 2-7 2-10.4 7.8l-5.3-2c-1.7 9.9-5.2 11.8 0 21.6 0 0-6.7.3-8.7 0-.1 3.4 3 4.3 3.5 7.9-.3 1.4-10 7.6-17.4 7.8-2 4.9 5.2 10 4.8 12.5-8.2 1.7-11.8 13-11.8 13s4.2 2 3.5 4c-2.3-1.9-3.5-2-7-2-1.7.5-6-.1-10 7.6-4.5 1.7-6.6 1-10 6.1-1.5-4.8-3.7 0-6.3 2-2.7 1.8-6.2 6.4-6.7 6.2.1-1.3 1.6-6.2 1.6-6.2l-8.7 2h-1c-.8.1-.6-5.7-2.2-5.5-1.7.3-6.4 7.3-8 7.6-1.6.2-2.1-2.3-3.5-2-1.4.1-4.1 7.4-5 7.6-1 .2-5-4.4-8.3-3.8-17.2 6.8-19.9-13.4-22.6-2-3.6-2.1-3-.9-6.6.2-2.3.7-2.5-3.5-4.6-3.4-4.2.1-4 4.5-6.2 3.2-1.8-9.2-13-7.5-14.1-11.5-.9-4 4.8-4 6.7-6.8 1.4-4-1.5-5.5 4.3-9.4 7.4-5.7 3.1-7.8 4.4-12.1 2.4-6.2 2.4-7.7.4-13.2 0 0-5.8-17.6-7-17.6-3.4-1.1-3.4 6.5-8.5 8.6-10.5 3.9-29-10-32.2-10-3 .1-16.5 3.7-16-4-2 7.5-9.6 1.8-10 1.8-7 0-4.3 6-9 5.8-2.1-.8-23.6-2.2-23.6-2.2v4l-14-8-12.2-3.9c-10.4-3.9-5.2-13.7-22.6-7.8v-11.8h-8.7c3.4-23.5 0-11.7-1.8-33.3l-7 2c-7-10.7 9.7-8.6-5.2-15.8 0 0 .3-11.7-3.5-7.8-.7.5 1.8 5.9 1.8 5.9-14-2-17.5-5.9-17.5-21.6 0 0 11.5 1.9 10.5 0-1.6-3-3.8-22-3.4-23.3-.2-2.6 10.7-9.1 8.6-15.3 1.3-.6 5.3-.6 5.3-.6"
				fill="#fff"
			/>
			<path
				d="M595.5 297.6c-.6 1.3-.5 2.6.1 3.6 1.1-1.7.2-2.4 0-3.6zm-476-149.4s-3-.4-2.4 2.3c1-2 2.3-2.2 2.4-2.3zm-.3-6.4c-1.7 0-3.8-.2-3 2.5 1-2.1 3-2.4 3-2.5zm12.7 36.3s2.6-.2 2 2.5c-1-2-2-2.4-2-2.5z"
				fill="none"
				stroke="#fff"
				strokeLinejoin="round"
				strokeWidth={2.5}
				transform="matrix(.86021 0 0 .96774 -50 10)"
			/>
		</Box>
	);
}
