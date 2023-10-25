import clsx from "clsx";
import { css } from "../../../src/styles/utils/util_css.css"; import { Box } from "../../box/Box"; import { flagStyles } from "../styles.css";
import type { UtilCssArgs } from "../../../src/styles/utils/util_css.css";

export function FlagMh({
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
			<g fillRule="evenodd">
				<path d="M0 0h511.9v512H0z" fill="#3b5aa3" />
				<path
					d="m139 1.2-5.3 88-23.2-56.1 9 59.7-35.9-48.2 23.5 55-47-36.5L96.7 109 43.5 85.4l46.6 35.3-58-7.7L87 134.7l-86 7.9 86 5.7-54.5 22.4L90 163l-46.4 34.2 53.8-23.6-36.7 46.2 46.7-35.4-23.4 54 37.4-46.8-10 58.3 23.4-54.5 5.4 86.1 8.2-85.9 20.3 54.9-7.7-59.1 37.2 46.8-24.5-54.7 46.7 37.6-37-47 55.4 23.1-49.1-35.8 59.8 10-57.3-22 89-5.5-89-8.3L251 116l-60.7 7.6 50.2-35-56.6 22.7 39-47.3-47.5 37.1 23-56.8-37 48.3 8-60.3-22 56.9-8.2-88z"
					fill="#fff"
				/>
				<path d="M0 498.2 512 0v92.7L0 512v-13.8z" fill="#e2ae57" />
				<path d="m18 512 494-320.8-.1-101.9L-.1 512h18z" fill="#fff" />
			</g>
		</Box>
	);
}
