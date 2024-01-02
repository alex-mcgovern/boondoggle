import clsx from "clsx";
import { Box } from "../../v1/box";
import { type Sprinkles, sprinkles } from "../../v1/sprinkles/index.css";
import { flagStyles } from "./styles.css";

export function FlagKm({
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
				<clipPath id="km_svg__a">
					<path d="M0 0h416.3v416.3H0z" fillOpacity={0.7} />
				</clipPath>
			</defs>
			<g
				clipPath="url(#km_svg__a)"
				fillRule="evenodd"
				transform="scale(1.23)"
			>
				<path d="M0 0h625v104H0z" fill="#ff0" />
				<path d="M0 104h625v104.1H0z" fill="#fff" />
				<path d="M0 208.1h625v104H0z" fill="#be0027" />
				<path d="M0 312.2h625v104H0z" fill="#3b5aa3" />
				<path d="M0 0v416.2l310.4-207.5L0 0z" fill="#239e46" />
				<path
					d="M127.8 115c-69.2-3.5-100.7 51.6-100.6 94.2-.2 50.4 47.6 92 91.7 89.4A100 100 0 0 1 65.8 209a98.3 98.3 0 0 1 62-94z"
					fill="#fff"
				/>
				<path
					d="m126.8 160.2-9.8-7.6-11.8 3.7 4.2-11.6-7.1-10.1 12.3.4 7.4-10 3.4 12 11.8 3.9-10.3 7zm-.2 42.3-9.8-7.6-11.8 3.7 4.2-11.6-7.2-10.1 12.4.4 7.4-10 3.4 12 11.8 4-10.3 6.9zm.2 42.8-9.8-7.6-11.8 3.7 4.2-11.7-7.1-10 12.3.4 7.4-10 3.4 12 11.8 3.9-10.3 6.9zm-.2 43.1-9.8-7.6-11.8 3.7 4.2-11.6-7.2-10.1 12.4.4 7.4-10 3.4 12 11.8 4-10.3 6.9z"
					fill="#fff"
				/>
			</g>
		</Box>
	);
}
