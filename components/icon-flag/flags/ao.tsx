import clsx from "clsx";

import { css } from "../../../src/styles/utils/util_css.css";
import { Box } from "../../box/Box";
import { flagStyles } from "../styles.css";

import type { UtilCssArgs } from "../../../src/styles/utils/util_css.css";

export function FlagAo({
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
			<g fillRule="evenodd" strokeWidth="1pt">
				<path d="M0 0h512v259.8H0z" fill="red" />
				<path d="M0 252.2h512V512H0z" />
			</g>
			<path
				d="M228.7 148.2c165.2 43.3 59 255.6-71.3 167.2l-8.8 13.6c76.7 54.6 152.6 10.6 174-46.4 22.2-58.8-7.6-141.5-92.6-150l-1.3 15.6z"
				fill="#ffec00"
				fillRule="evenodd"
			/>
			<path
				d="m170 330.8 21.7 10.1-10.2 21.8-21.7-10.2zm149-99.5h24v24h-24zm-11.7-38.9 22.3-8.6 8.7 22.3-22.3 8.7zm-26-29.1 17.1-16.9 16.9 17-17 16.9zm-26.2-39.8 22.4 8.4-8.5 22.4-22.4-8.4zM316 270l22.3 8.9-9 22.2-22.2-8.9zm-69.9 70 22-9.3 9.5 22-22 9.4zm-39.5 2.8h24v24h-24zm41.3-116-20.3-15-20.3 14.6 8-23-20.3-15h24.5l8.5-22.6 7.8 22.7 24.7-.3-19.6 15.3 7 23.4z"
				fill="#ffec00"
				fillRule="evenodd"
			/>
			<path
				d="M336 346.4c-1.2.4-6.2 12.4-9.7 18.2l3.7 1c13.6 4.8 20.4 9.2 26.2 17.5a7.9 7.9 0 0 0 10.2.7s2.8-1 6.4-5c3-4.5 2.2-8-1.4-11.1-11-8-22.9-14-35.4-21.3z"
				fill="#fe0"
				fillRule="evenodd"
			/>
			<path
				d="M365.3 372.8a4.3 4.3 0 1 1-8.7 0 4.3 4.3 0 0 1 8.6 0zm-21.4-13.6a4.3 4.3 0 1 1-8.7 0 4.3 4.3 0 0 1 8.7 0zm10.9 7a4.3 4.3 0 1 1-8.7 0 4.3 4.3 0 0 1 8.7 0z"
				fillRule="evenodd"
			/>
			<path
				d="M324.5 363.7c-42.6-24.3-87.3-50.5-130-74.8-18.7-11.7-19.6-33.4-7-49.9 1.2-2.3 2.8-1.8 3.4-.5 1.5 8 6 16.3 11.4 21.5A5288 5288 0 0 1 334 345.6c-3.4 5.8-6 12.3-9.5 18z"
				fill="#fe0"
				fillRule="evenodd"
			/>
			<path
				d="m297.2 305.5 17.8 16-16 17.8-17.8-16z"
				fill="#ffec00"
				fillRule="evenodd"
			/>
			<path
				d="m331.5 348.8-125-75.5m109.6 58.1L274 304.1m18.2 42.7L249.3 322"
				fill="none"
				stroke="#000"
				strokeWidth={3}
			/>
		</Box>
	);
}
