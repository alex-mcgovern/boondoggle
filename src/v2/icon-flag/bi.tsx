import clsx from "clsx";
import { Box } from "../../v1/box";
import { type Sprinkles, sprinkles } from "../../v1/sprinkles/index.css";
import { flagStyles } from "./styles.css";

export function FlagBi({
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
			<defs>
				<clipPath id="bi_svg__a">
					<path d="M60.8 337h175v175h-175z" fill="gray" />
				</clipPath>
			</defs>
			<g
				clipPath="url(#bi_svg__a)"
				fillRule="evenodd"
				transform="translate(-178 -986) scale(2.9257)"
			>
				<path
					d="m0 337 146.6 87.5L0 512zm293.1 0-146.5 87.5L293 512z"
					fill="#18b637"
				/>
				<path
					d="m0 337 146.6 87.5L293 337zm0 175 146.6-87.5L293 512z"
					fill="#cf0921"
				/>
				<path
					d="M293.1 337h-27.3L0 495.7V512h27.3l265.8-158.7z"
					fill="#fff"
				/>
				<path
					d="M197.2 424.5a50.6 50.6 0 1 1-101.2 0 50.6 50.6 0 0 1 101.2 0z"
					fill="#fff"
				/>
				<path
					d="M0 337v16.3L265.8 512h27.3v-16.3L27.3 337z"
					fill="#fff"
				/>
				<path
					d="m156.5 405.4-6.6.1-3.4 5.6-3.4-5.6-6.5-.1 3.2-5.8-3.2-5.7 6.6-.2 3.4-5.6 3.4 5.7h6.5l-3.1 5.8zm-22 38.2h-6.6l-3.4 5.7-3.4-5.6-6.6-.2 3.2-5.7-3.1-5.8 6.5-.1 3.4-5.6 3.4 5.6 6.6.2-3.2 5.7zm44.6 0h-6.6l-3.4 5.7-3.4-5.6-6.5-.2 3.1-5.7-3.1-5.8 6.6-.1 3.4-5.6 3.4 5.6 6.5.2-3.2 5.7z"
					fill="#cf0921"
					stroke="#18b637"
					strokeWidth="1pt"
				/>
			</g>
		</Box>
	);
}
