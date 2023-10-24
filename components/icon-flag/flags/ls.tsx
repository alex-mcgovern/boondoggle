import clsx from "clsx";

import { css } from "../../../src/styles/utils/util_css.css";
import { Box } from "../../box/Box";
import { flagStyles } from "../styles.css";

import type { UtilCssArgs } from "../../../src/styles/utils/util_css.css";

export function FlagLs({
	height = "space_8",
	width = "space_8",
	...rest
}: UtilCssArgs) {
	return (
		<Box
			as="svg"
			className={clsx(flagStyles, css({ height, width, ...rest }))}
			viewBox="0 0 512 512"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
		>
			<path d="M0 0h512v512H0z" fill="#fff" />
			<path d="M0 358.4h512V512H0z" fill="#009543" />
			<path d="M0 0h512v153.6H0z" fill="#00209f" />
			<path
				d="M257.6 163.1c-3 0-5.8 3.3-5.8 3.3l.3 34.5-11 11.5h9l-.2 19.7-52.2 70.4-7.7-2.7-13.5 28.8s33.4 20.9 81.8 20.3c53.2-.7 82-21.3 82-21.3l-13.9-28.4-6.8 3-53-70v-20.4h8.8l-12-11.3.1-34.4s-3-3-5.9-3z"
				stroke="#000"
				strokeWidth={1.7}
			/>
			<path
				d="M275.8 245.8h-36.1s-13.1-27.6-11-47c2.2-19.6 13.4-28.9 28.4-29 17.6-.3 26.8 8.6 29.6 28.3 2.8 19.5-10.9 47.7-10.9 47.7z"
				fill="none"
				stroke="#000"
				strokeWidth={8.5}
			/>
			<path
				d="M194.5 311.6c-.6.8-5 9.4-5 9.4l7.5-1.6-2.5-7.8zm4.3 11.2-7.9 2.6 9.5 3.7-1.6-6.3zm3.6-11 3.9 11.6 9.6-2.8-2.5-5.5-11-3.3zm6 15.7 1.4 4.7 12.8 3.2-5-10.8-9.1 3zm14.2-9.8 4.5 10.8 9.7-3.7-3.2-4.8-11-2.3zm6.3 14.7 1.6 4.2 15 2.1-6.4-9.8-10.2 3.5zm14.4-11.6 5.5 9.7 14-5.1-1.6-3.8-18-.8zm8 13.2 3 5.1 17.3-.6-6.5-9.6-13.8 5.1zm18.3-12.8 4.8 8 11-5.2-3-4.3-12.8 1.5zm18.1 6.1-11 5.5 3 4.8 14.7-2.4-6.7-7.9zm3.6-8.4 5.7 7 9.2-7.2-3.1-3.4-11.8 3.6zm16.9 3.7-8.9 6.7 2.4 4.1 12.2-3.1-5.7-7.7zm12.2-14 2.2 3.2-6.1 9-6.3-8 10.2-4.2zm4.1 7.9 3.8 7.5-7.5 2.5-.6-3.5 4.3-6.5z"
				fill="#fff"
			/>
		</Box>
	);
}
