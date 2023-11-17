import clsx from "clsx";
import { utilCss } from "../../styles/utils/util_css.css";
import type { UtilCssArgs } from "../../styles/utils/util_css.css";
import { Box } from "../box";
import { flagStyles } from "./styles.css";

export function FlagKn({
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
			<defs>
				<clipPath id="kn_svg__a">
					<path d="M151.7-.3h745.1v745H151.7z" fillOpacity={0.7} />
				</clipPath>
			</defs>
			<g
				clipPath="url(#kn_svg__a)"
				fillRule="evenodd"
				transform="translate(-104.2 .2) scale(.68714)"
			>
				<path d="M-5.3 0h1073.5v744H-5.3z" fill="#ffe900" />
				<path d="m-5.8 0 1.2 536.4L830.7-.4-5.8 0z" fill="#35a100" />
				<path
					d="m1069.5 744-1.9-557.7L225 744.5l844.5-.4z"
					fill="#c70000"
				/>
				<path d="m-5.3 576.9.7 167.9 182.3-.3L1068 147.6l-1-146L886.9 0-5.4 576.9z" />
				<path
					d="m818 269-64.2-2.2-25.3 60.2-14.3-61.5-64.2-2.2 55.4-35.7L691 166l48.5 39.4 55.3-35.9-25.4 60.2zM417.5 529.6l-64.3-2.3-25.2 60.2-14.3-61.5-64.3-2.2 55.4-35.8-14.4-61.4 48.5 39.4 55.3-35.9-25.3 60.1z"
					fill="#fff"
				/>
			</g>
		</Box>
	);
}
