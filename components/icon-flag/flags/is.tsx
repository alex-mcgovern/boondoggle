import clsx from "clsx";

import { css } from "../../../src/styles/utils/util_css.css";
import { Box } from "../../box/Box";
import { flagStyles } from "../styles.css";

import type { UtilCssArgs } from "../../../src/styles/utils/util_css.css";

export function FlagIs({
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
			<defs>
				<clipPath id="is_svg__a">
					<path d="M85.4 0h486v486h-486z" fillOpacity={0.7} />
				</clipPath>
			</defs>
			<g
				clipPath="url(#is_svg__a)"
				fillRule="evenodd"
				strokeWidth={0}
				transform="translate(-90) scale(1.0535)"
			>
				<path d="M0 0h675v486H0z" fill="#003897" />
				<path
					d="M0 189h189V0h108v189h378v108H297v189H189V297H0V189z"
					fill="#fff"
				/>
				<path
					d="M0 216h216V0h54v216h405v54H270v216h-54V270H0v-54z"
					fill="#d72828"
				/>
			</g>
		</Box>
	);
}
