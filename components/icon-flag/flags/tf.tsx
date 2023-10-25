import clsx from "clsx";
import { css } from "../../../src/styles/utils/util_css.css"; import { Box } from "../../box/Box"; import { flagStyles } from "../styles.css";
import type { UtilCssArgs } from "../../../src/styles/utils/util_css.css";

export function FlagTf({
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
				<path
					d="m0-21 12.3 38L-20-6.5h40L-12.3 17z"
					fill="#fff"
					id="tf_svg__a"
				/>
			</defs>
			<path d="M0 0h512v512H0z" fill="#002395" />
			<path d="M0 0h312.3v210H0z" fill="#fff" />
			<path d="M0 0h102.4v204.8H0z" fill="#002395" />
			<path d="M204.8 0h102.4v204.8H204.8z" fill="#ed2939" />
			<path
				d="m282.4 234.2 16.5 26.3h46.9V352l-35.3-55-47.3 75.5h23l24.4-43.5 49.9 89.6 49.9-89.6 24.3 43.5h23L410.5 297l-35.2 55v-50.6h21.1l15.7-25h-36.8v-16h46.9l16.5-26.2H282.4zm55 112h-51.2v18h51.2zm97.3 0h-51.2v18h51.2z"
				fill="#fff"
			/>
			<use
				height="100%"
				transform="translate(-172) scale(1.28)"
				width="100%"
				x={416}
				xlinkHref="#tf_svg__a"
				y={362}
			/>
			<use
				height="100%"
				transform="translate(-172) scale(1.28)"
				width="100%"
				x={371}
				xlinkHref="#tf_svg__a"
				y={328}
			/>
			<use
				height="100%"
				transform="translate(-172) scale(1.28)"
				width="100%"
				x={461}
				xlinkHref="#tf_svg__a"
				y={328}
			/>
			<use
				height="100%"
				transform="translate(-172) scale(1.28)"
				width="100%"
				x={333}
				xlinkHref="#tf_svg__a"
				y={227}
			/>
			<use
				height="100%"
				transform="translate(-172) scale(1.28)"
				width="100%"
				x={499}
				xlinkHref="#tf_svg__a"
				y={227}
			/>
		</Box>
	);
}
