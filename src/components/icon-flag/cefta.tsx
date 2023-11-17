import clsx from "clsx";
import { utilCss } from "../../index.css";
import type { UtilCssArgs } from "../../index.css";
import { Box } from "../box";
import { flagStyles } from "./styles.css";

export function FlagCefta({
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
			<path d="M0 0h512v512H0z" fill="#039" />
			<circle
				cx={256}
				cy={266.5}
				fill="none"
				r={32.5}
				stroke="#fc0"
				strokeWidth={29.3}
			/>
			<circle
				cx={256}
				cy={266.5}
				fill="none"
				r={94.2}
				stroke="#fc0"
				strokeWidth={29.3}
			/>
			<path d="m346.3 176.1 90.3 90.3-90.3 90.3-90.3-90.3z" fill="#039" />
			<path
				d="M102.1 251.8h63.2v29.3h-63.2zm276.4 0h94.2v29.3h-94.2zm-76.6-51.9 41.3-41.3 20.7 20.7-41.3 41.3zM241.3 51.8h29.3V166h-29.3z"
				fill="#fc0"
			/>
			<circle cx={154.8} cy={170.3} fill="#fc0" r={14.7} />
			<circle cx={68.6} cy={266.5} fill="#fc0" r={14.7} />
			<circle cx={256} cy={406.8} fill="#fc0" r={14.7} />
			<circle cx={256} cy={453.9} fill="#fc0" r={14.7} />
			<circle cx={350.2} cy={266.5} fill="#fc0" r={14.7} />
			<path
				d="m136.9 364.3 20.7-20.7 20.7 20.7-20.7 20.7zm218.5 22.3L376 366l20.7 20.7-20.7 20.8z"
				fill="#fc0"
			/>
		</Box>
	);
}
