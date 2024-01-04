import clsx from "clsx";
import { Box } from "../__DONE__box";
import { type Sprinkles, sprinkles } from "../__DONE__sprinkles/index.css";
import { flagStyles } from "./styles.css";

export function FlagUs({
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
			<path d="M0 0h512v512H0" fill="#bd3d44" />
			<path
				d="M0 58h512M0 137h512M0 216h512M0 295h512M0 374h512M0 453h512"
				stroke="#fff"
				strokeWidth={40}
			/>
			<path d="M0 0h390v275H0z" fill="#192f5d" />
			<marker id="us_svg__a" markerHeight={30} markerWidth={30}>
				<path d="m15 0 9.3 28.6L0 11h30L5.7 28.6" fill="#fff" />
			</marker>
			<path
				d="m0 0 18 11h65 65 65 65 66L51 39h65 65 65 65L18 66h65 65 65 65 66L51 94h65 65 65 65L18 121h65 65 65 65 66L51 149h65 65 65 65L18 177h65 65 65 65 66L51 205h65 65 65 65L18 232h65 65 65 65 66L0 0"
				fill="none"
				markerMid="url(#us_svg__a)"
			/>
		</Box>
	);
}
