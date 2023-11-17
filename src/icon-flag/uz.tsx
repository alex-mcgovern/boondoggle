import clsx from "clsx";
import { Box } from "../box";
import { type UtilCssArgs, utilCss } from "../index.css";
import { flagStyles } from "./styles.css";

export function FlagUz({
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
			<path d="M0 341.3h512V512H0z" fill="#1eb53a" />
			<path d="M0 0h512v170.7H0z" fill="#0099b5" />
			<path d="M0 163.8h512v184.4H0z" fill="#ce1126" />
			<path d="M0 174h512v164H0z" fill="#fff" />
			<circle cx={143.4} cy={81.9} fill="#fff" r={61.4} />
			<circle cx={163.8} cy={81.9} fill="#0099b5" r={61.4} />
			<g fill="#fff" transform="translate(278.5 131) scale(2.048)">
				<g id="uz_svg__e">
					<g id="uz_svg__d">
						<g id="uz_svg__c">
							<g id="uz_svg__b">
								<path d="M0-6-1.9-.3 1 .7" id="uz_svg__a" />
								<use
									height="100%"
									transform="scale(-1 1)"
									width="100%"
									xlinkHref="#uz_svg__a"
								/>
							</g>
							<use
								height="100%"
								transform="rotate(72)"
								width="100%"
								xlinkHref="#uz_svg__b"
							/>
						</g>
						<use
							height="100%"
							transform="rotate(-72)"
							width="100%"
							xlinkHref="#uz_svg__b"
						/>
						<use
							height="100%"
							transform="rotate(144)"
							width="100%"
							xlinkHref="#uz_svg__c"
						/>
					</g>
					<use
						height="100%"
						width="100%"
						xlinkHref="#uz_svg__d"
						y={-24}
					/>
					<use
						height="100%"
						width="100%"
						xlinkHref="#uz_svg__d"
						y={-48}
					/>
				</g>
				<use height="100%" width="100%" x={24} xlinkHref="#uz_svg__e" />
				<use height="100%" width="100%" x={48} xlinkHref="#uz_svg__e" />
				<use
					height="100%"
					width="100%"
					x={-48}
					xlinkHref="#uz_svg__d"
				/>
				<use
					height="100%"
					width="100%"
					x={-24}
					xlinkHref="#uz_svg__d"
				/>
				<use
					height="100%"
					width="100%"
					x={-24}
					xlinkHref="#uz_svg__d"
					y={-24}
				/>
			</g>
		</Box>
	);
}
