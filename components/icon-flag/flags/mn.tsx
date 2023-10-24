import clsx from "clsx";

import { css } from "../../../src/styles/utils/util_css.css";
import { Box } from "../../box/Box";
import { flagStyles } from "../styles.css";

import type { UtilCssArgs } from "../../../src/styles/utils/util_css.css";

export function FlagMn({
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
			<path d="M0 0h512v512H0Z" fill="#da2032" />
			<path d="M170.7 0h170.6v512H170.7Z" fill="#0066b3" />
			<circle cx={85.3} cy={196.6} r={35} />
			<circle cx={85.3} cy={180.7} fill="#da2032" r={38.2} />
			<circle cx={85.3} cy={187} r={25.5} />
			<path d="M88 104.3a7.6 7.6 0 0 0-4.6 6.6c-.2 2.2.8 4.6.9 6.7 0 3.7-3.8 4.9-3.8 10.1 0 1.8 1.7 3.8 1.7 8.4-.3 2.5-1.7 3-3.2 3.2a3.2 3.2 0 0 1-3.2-3.2 3.2 3.2 0 0 1 .9-2.2 3.2 3.2 0 0 1 .3-.3c.7-.7 1.7-1 1.7-3 0-1-.6-1.8-1.2-3.6a7.3 7.3 0 0 1 1.2-6.2c-2.2.8-3.6 3-4.3 4.9-.7 2.3-.1 3.7-1.1 5.7-.6 1.2-1.4 1.7-2 2.8-.9 1.2-1.8 3.8-1.8 5.1a16 16 0 0 0 31.8 0c0-1.3-1-4-1.8-5.1-.7-1-1.5-1.6-2-2.8-1-2-.4-3.4-1.2-5.7-.7-2-2-4-4.3-5a7.3 7.3 0 0 1 1.3 6.3c-.7 1.8-1.3 2.7-1.3 3.7 0 1.9 1 2.2 1.7 3a3.2 3.2 0 0 1 .3.2 3.2 3.2 0 0 1 1 2.2 3.2 3.2 0 0 1-3.3 3.2c-1.7-.2-3-1-3.2-3.2 0-6.1 2.7-6.5 2.7-11 0-6.5-5.8-9.6-5.8-14.3 0-1.6.3-4.3 2.6-6.5zM15.3 237.9h31.9v152.8H15.3Zm108.2 0h31.8v152.8h-31.8zm-70 0h63.7L85.3 257Zm0 25.5h63.7V276H53.5Zm0 89h63.7v12.8H53.5Zm0 19.2h63.7l-31.9 19Z" />
			<circle cx={85.3} cy={314.3} r={31.8} />
			<g fill="#da2032" transform="translate(-42 66.1) scale(.63636)">
				<circle cx={200} cy={363.5} r={10} />
				<circle cx={200} cy={416.5} r={10} />
				<path d="M200 334a29.5 29.5 0 0 1 0 59 23.5 23.5 0 0 0 0 47v6a29.5 29.5 0 0 1 0-59 23.5 23.5 0 0 0 0-47z" />
			</g>
		</Box>
	);
}
