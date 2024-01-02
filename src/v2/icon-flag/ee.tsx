import clsx from "clsx";
import { Box } from "../../v1/box";
import { type Sprinkles, sprinkles } from "../../v1/sprinkles/index.css";
import { flagStyles } from "./styles.css";

export function FlagEe({
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
			<g fillRule="evenodd" strokeWidth="1pt" transform="scale(.482 .72)">
				<rect height={708.7} rx={0} ry={0} width={1063} />
				<rect
					fill="#fff"
					height={236.2}
					rx={0}
					ry={0}
					width={1063}
					y={475.6}
				/>
				<path d="M0 0h1063v236.2H0z" fill="#1791ff" />
			</g>
		</Box>
	);
}
