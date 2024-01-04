import clsx from "clsx";
import { Box } from "../__DONE__box";
import { type Sprinkles, sprinkles } from "../sprinkles/index.css";
import { flagStyles } from "./styles.css";

export function FlagOm({
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
				<clipPath id="om_svg__a">
					<path d="M0 0h512v512H0z" fillOpacity={0.7} />
				</clipPath>
			</defs>
			<g clipPath="url(#om_svg__a)">
				<path
					d="M-23.3-21.6h554.7v553H-23.3z"
					fill="#ef2d29"
					fillRule="evenodd"
				/>
				<path
					d="M164.6 341.3H541V549H164.6z"
					fill="#009025"
					fillRule="evenodd"
				/>
				<path
					d="M164.6-19.4H541v190H164.6z"
					fill="#fff"
					fillRule="evenodd"
				/>
				<g stroke="#ef2d28">
					<g
						fill="#fff"
						fillRule="evenodd"
						transform="matrix(.19516 0 0 .17447 109.2 -5.3)"
					>
						<rect
							height={85}
							rx={11.5}
							ry={12.1}
							strokeWidth={1.4}
							width={138.2}
							x={17.7}
							y={467.7}
						/>
						<rect
							height={78}
							rx={10.9}
							ry={11.1}
							strokeWidth="1pt"
							width={131.1}
							x={21.3}
							y={471.3}
						/>
						<path
							d="m65 396 9.7.5.4 5.8 8 5.3 6.2-6.7 7.5 5.3-7 5.8 1.7 8 8.8-.5V430l-7-.4-3.6 6.6 8 7.5-6.2 6.2-6.7-6.6-9.7 2.6.5 9.7-10.6 1-1.4-9.4-8.8-4.8-4.9 6.6-7.5-4.9 4.4-7.5-5.3-4.8H34l-.4-13.7 7.5.9 5.3-8-6.2-6.2 8-7 5.7 5.7 9.7-1.8L65 396z"
							strokeWidth="1pt"
							transform="matrix(.68108 0 0 .5852 38 260.7)"
						/>
						<ellipse
							cx={68.9}
							cy={426.8}
							rx={11.1}
							ry={9.9}
							strokeWidth="1pt"
							transform="matrix(.65819 0 0 .70224 38.8 209.6)"
						/>
						<path
							d="m39 474.8-10.7 10.6m17.8-10.6-10.7 10.6m17.7-10.6-10.6 10.6m17.7-10.6-10.6 10.6m17.7-10.6-10.6 10.6m17.7-10.6-10.6 10.6m17.7-10.6-10.6 10.6m17.7-10.6L78 485.4m17.7-10.6L85 485.4m17.8-10.6L92 485.4m17.7-10.6-10.6 10.6m17.7-10.6-10.6 10.6m-17.7-10.6L78 485.4m46-10.6-10.6 10.6m17.7-10.6-10.6 10.6m17.7-10.6-10.6 10.6m17.7-10.6-10.6 10.6m0-10.6 10.6 10.6m-17.7-10.6 10.6 10.6m-17.7-10.6 10.6 10.6m-17.7-10.6 10.6 10.6m-17.7-10.6 10.6 10.6m-17.7-10.6 10.6 10.6m-17.7-10.6 10.7 10.6M85 474.8l10.6 10.6m-17.8-10.6 10.7 10.6m-17.7-10.6 10.6 10.6m-17.7-10.6 10.6 10.6m-17.7-10.6 10.6 10.6M85 474.8l10.6 10.6m-46-10.6 10.5 10.6m-17.7-10.6 10.7 10.6m-17.8-10.6L46 485.4m-17.8-10.6L39 485.4m0 49.6-10.6 10.7M46 535l-10.7 10.7M53.2 535l-10.7 10.7M60.2 535l-10.6 10.7M67.3 535l-10.6 10.7M74.4 535l-10.6 10.7M81.5 535 71 545.7M88.6 535 78 545.7M95.7 535 85 545.7m17.7-10.7L92 545.7m18-10.7-10.7 10.7M117 535l-10.6 10.7M88.6 535 78 545.7m46-10.7-10.6 10.7m17.7-10.7-10.6 10.7m17.7-10.7-10.6 10.7m17.7-10.7-10.6 10.7m0-10.7 10.6 10.7M127.6 535l10.6 10.7M120.5 535l10.6 10.7M113.4 535l10.6 10.7M106.3 535l10.6 10.7M99.2 535l10.7 10.7M92 535l10.7 10.7M85 535l10.6 10.7M78 535l10.6 10.7M70.9 535l10.6 10.7M63.8 535l10.6 10.7M56.7 535l10.6 10.7M85.1 535l10.6 10.7m-46-10.7 10.5 10.7M42.5 535l10.7 10.7M35.4 535l10.7 10.7M28.4 535 39 545.7"
							strokeWidth="1pt"
						/>
					</g>
					<g
						fill="#fff"
						fillRule="evenodd"
						transform="matrix(.19516 0 0 .17447 18.6 -6)"
					>
						<rect
							height={85}
							rx={11.5}
							ry={12.1}
							strokeWidth={1.4}
							width={138.2}
							x={17.7}
							y={467.7}
						/>
						<rect
							height={78}
							rx={10.9}
							ry={11.1}
							strokeWidth="1pt"
							width={131.1}
							x={21.3}
							y={471.3}
						/>
						<path
							d="m65 396 9.7.5.4 5.8 8 5.3 6.2-6.7 7.5 5.3-7 5.8 1.7 8 8.8-.5V430l-7-.4-3.6 6.6 8 7.5-6.2 6.2-6.7-6.6-9.7 2.6.5 9.7-10.6 1-1.4-9.4-8.8-4.8-4.9 6.6-7.5-4.9 4.4-7.5-5.3-4.8H34l-.4-13.7 7.5.9 5.3-8-6.2-6.2 8-7 5.7 5.7 9.7-1.8L65 396z"
							strokeWidth="1pt"
							transform="matrix(.68108 0 0 .5852 38 260.7)"
						/>
						<ellipse
							cx={68.9}
							cy={426.8}
							rx={11.1}
							ry={9.9}
							strokeWidth="1pt"
							transform="matrix(.65819 0 0 .70224 38.8 209.6)"
						/>
						<path
							d="m39 474.8-10.7 10.6m17.8-10.6-10.7 10.6m17.7-10.6-10.6 10.6m17.7-10.6-10.6 10.6m17.7-10.6-10.6 10.6m17.7-10.6-10.6 10.6m17.7-10.6-10.6 10.6m17.7-10.6L78 485.4m17.7-10.6L85 485.4m17.8-10.6L92 485.4m17.7-10.6-10.6 10.6m17.7-10.6-10.6 10.6m-17.7-10.6L78 485.4m46-10.6-10.6 10.6m17.7-10.6-10.6 10.6m17.7-10.6-10.6 10.6m17.7-10.6-10.6 10.6m0-10.6 10.6 10.6m-17.7-10.6 10.6 10.6m-17.7-10.6 10.6 10.6m-17.7-10.6 10.6 10.6m-17.7-10.6 10.6 10.6m-17.7-10.6 10.6 10.6m-17.7-10.6 10.7 10.6M85 474.8l10.6 10.6m-17.8-10.6 10.7 10.6m-17.7-10.6 10.6 10.6m-17.7-10.6 10.6 10.6m-17.7-10.6 10.6 10.6M85 474.8l10.6 10.6m-46-10.6 10.5 10.6m-17.7-10.6 10.7 10.6m-17.8-10.6L46 485.4m-17.8-10.6L39 485.4m0 49.6-10.6 10.7M46 535l-10.7 10.7M53.2 535l-10.7 10.7M60.2 535l-10.6 10.7M67.3 535l-10.6 10.7M74.4 535l-10.6 10.7M81.5 535 71 545.7M88.6 535 78 545.7M95.7 535 85 545.7m17.7-10.7L92 545.7m18-10.7-10.7 10.7M117 535l-10.6 10.7M88.6 535 78 545.7m46-10.7-10.6 10.7m17.7-10.7-10.6 10.7m17.7-10.7-10.6 10.7m17.7-10.7-10.6 10.7m0-10.7 10.6 10.7M127.6 535l10.6 10.7M120.5 535l10.6 10.7M113.4 535l10.6 10.7M106.3 535l10.6 10.7M99.2 535l10.7 10.7M92 535l10.7 10.7M85 535l10.6 10.7M78 535l10.6 10.7M70.9 535l10.6 10.7M63.8 535l10.6 10.7M56.7 535l10.6 10.7M85.1 535l10.6 10.7m-46-10.7 10.5 10.7M42.5 535l10.7 10.7M35.4 535l10.7 10.7M28.4 535 39 545.7"
							strokeWidth="1pt"
						/>
					</g>
					<path
						d="M538.6 531.5c1.7 166.6 24.8 202 3.5 202s-31.9-92.1-31.9-205.5 14.2-205.5 35.5-205.5-9 31.9-7.1 209z"
						fill="#fff"
						fillRule="evenodd"
						strokeWidth="1pt"
						transform="matrix(-.31598 -.12472 -.1982 .19883 340 68.2)"
					/>
					<path
						d="m545.7 779.5-60.3 17.7c56.7 60.3 120.5 85 138.2 74.4 17.7-10.6-31.9-35.4-78-92z"
						fill="#fff"
						fillRule="evenodd"
						strokeWidth={1.3}
						transform="matrix(-.19516 0 0 .17447 142.6 -5.3)"
					/>
					<path
						d="m547.3 786.9-51 14.7c56.7 60.3 112.8 77.4 127.3 70 14.6-7.3-30.3-28-76.3-84.7z"
						fill="#fff"
						fillRule="evenodd"
						strokeWidth={1.3}
						transform="matrix(-.1901 0 0 .16776 140.2 -.1)"
					/>
					<path
						d="M353.1 634.2c.2 1.3.8 7.1 1.3 9.4 0 3.2.3 5.6.6 8.1.8 2.2.7 4.2 3.1 5a9.9 9.9 0 0 0 5 4.4 27.7 27.7 0 0 0 6.3 3.8 11.6 11.6 0 0 0 7.5.6c2.2-1.5 3.8-3.1 5.6-4.4.4-2 .8-4.9 1.3-6.9a32.6 32.6 0 0 0-1.3 8.2c.2 3 1.3 4.4 2.5 6.8"
						fill="none"
						strokeWidth={1.8}
						transform="matrix(-.13744 0 0 .12206 120.8 27.9)"
					/>
					<path
						d="m389.4 681.7.6-.6c-1.5 1.5-.9.8 2.5-1.3 2.4-1.2 5-1.8 8.1-2.4h8.8c3.4 0 5.7.5 8.1 1.2 1.8 1.8 4.4 2.8 6.3 4.4a11 11 0 0 1 3.7 5c1.7 1.7 2.8 4.3 4.4 5.6.7 2.9 2.1 2.8 3.1 5-3 .2-5.3.6-6.9 2.5-2.6 1.3 2.2-1.3 3.2-2.5 2-.6 2.5-1.2 5.6-1.2 2.8-1 4.6.7 7.5 1.2 1.7 1 2.2 1.3 4.4 1.3"
						fill="none"
						strokeWidth={1.8}
						transform="matrix(-.13744 0 0 .12206 122.6 27.2)"
					/>
					<path
						d="M438.1 724.9c1.3 0 7.1 1.1 9.4 0 2.6-.7 4-2 5.6-4.4.8-1.7 0 3 0 5 .3 3.7 1.4 3.7 3.2 6.2 1.8 1.2 3.7 2.8 5.6 3.8a18 18 0 0 0 5.6 3.1c2 1 4.1 1.8 5.6 3.1 2.1 1.5 2 3.3 3.2 5.7-.3 3-.8 4.8-2.5 6.2-.8 2.1-2.4 4.2-3.8 5.6-1.5 3-3.3 4.3.6 5 2.2 1 3.4.2 5.7 0"
						fill="none"
						strokeWidth={1.8}
						transform="matrix(-.13744 0 0 .12206 124.7 25.8)"
					/>
					<path
						d="M480.6 771.7c1.6-.4 7-2.2 9.4-3.1h8.8c3.3.3 4 1.3 6.8 2.5 1.9 1.9 3.1 3.2 5.7 4.4 1.3 1.7 4 4.7 5 6.9a25.5 25.5 0 0 1 1.2 8c0 3.7-1 4.4-1.2 7.6a19.3 19.3 0 0 1-3.8 7.5c-.3.8-.5 1-1.2 1.2"
						fill="none"
						strokeWidth={1.8}
						transform="matrix(-.13744 0 0 .12206 125 25.4)"
					/>
					<path
						d="M538.1 818c.4 0 1.2 2 2.5 3.7 2.9 3 3.2 3.2 7.5 3.2 4-.2 3.5-1.6 6.3-2.5 1.3-2 2.9-3.6 4.4-6.3 1-1.6 1.9-4.1 3-5.6 1.2-1.9 2.6-3.3 3.8-5 1.2-.5 1.6-1 3.2-1.3-3.6.6-4 1.9-6.3 3.8a58.9 58.9 0 0 0-3.1 5.6c-.4 2.7-1.2 4.8-1.3 8.1 0 3.5 0 5.9 1.3 8.8 1.5 1.5 2.5 3.1 4.4 4.4a36.7 36.7 0 0 1 4.3 5l5.7 3.7c1.8 1.1 3.9 2.2 6.8 2.5 3.7-.3 4.8-1.3 7.5-2.5 2.4-1.7 4.2-2.8 6.3-4.4a21 21 0 0 0 4.4-5c3.3-.8 5.5-.5 7.5 1.3a16.5 16.5 0 0 1 4.3 4.4c1 .5 2.8 2 3.8 2.5"
						fill="none"
						strokeWidth={2.4}
						transform="matrix(-.09758 0 0 .09635 107.4 46)"
					/>
					<path
						d="M503.8 836.1c-.8.3-3.8 2.4-5 3.1-.8 2.7-2.1 4.1-2.5 7-.7 2.6-.7 5.6-.7 8.7.7 3.2 2 5.5 3.2 8 2 1.4 3 2.4 5.6 3.8 2.5.4 5 .7 8.1.7 2 .6 5.6.9 7.5 0 2.8-.4 4.9-1.5 6.9-2.5 2.3-1.3 3.7-2.6 6.2-3.8 1.3-1.8 3.2-3.5 5-5.6 1.6-2.1 2.7-3.3 3.8-5.6-1 2.6-2.3 5-3.1 7.5-1.5 2.6-2.3 3.6-2.5 6.8-1 2.6-.7 5.8-.7 8.8.3 2 .4 5.8 1.3 7.5v1.9"
						fill="none"
						strokeWidth={1.9}
						transform="matrix(-.12132 0 0 .12024 109.3 26.8)"
					/>
					<path
						d="M541.3 799.2v.7c0-1.7 0-.9-.7 2.5-1.1 1.4-4 1.8-6.2 1.2-2-1.7-2-3-5.6-3.7-3.6.2-5 1.2-7 2.5a9.5 9.5 0 0 0-5 4.3c-.7 2.1-1.1 3.6 1.3 4.4a15.2 15.2 0 0 0 7 2.5c2.8 0 4.9-.3 6.2 1.3 2 2 1.8 3.2 1.8 6.8.7 1.1.8 4.4 1.3 5.7a10.6 10.6 0 0 0 5.6 1.2c.7-2 1.4-5.4 1.9-7.5.5-2.2.6-5.4 1.9-6.9a16.6 16.6 0 0 1 4.3-4.4 8 8 0 0 1 3.8-2.4c-2.5 1.2-2.8 2.6-3.1 5.6 2.1 1 2.7 1.8 6.2 1.9 3.5-.3 4.3-1.2 5.6-3.2.3 3.2 1.3 4.2 2 7 1.2 1.8 1.7 3.7 3 6.2-.5 3-1.7 3.1-1.8 6.8-.8 2.5-.8 4.8-2.5 6.3-.8 1-1.4 1.1-3.2 1.2 3.6 0 5.8-.4 8.2-1.8 1.8-1.2 3.2-2.6 5-3.8a23.9 23.9 0 0 1 7.5-3.8c2.9 0 5-.3 6.2 1.3 1.8 1.3 3 3.5 3.8 6.3.5 3.2.8 5.4-.7 7.5-1 2.4-1.3 3.3 0 6.2 1.5 2 3.6 2.3 7 3.1 2.3-.1 4.6-.6 6.2-1.2"
						fill="none"
						strokeWidth={1.3}
						transform="matrix(-.19516 0 0 .17447 142.6 -5.3)"
					/>
					<g
						fillRule="evenodd"
						strokeWidth="1pt"
						transform="matrix(-.19516 0 0 .17447 142.6 -5.3)"
					>
						<path
							d="M531.5 359.6c0-165.2 8-299.4 17.7-299.4 9.8 0 17.7 134.2 17.7 299.4h-35.4z"
							fill="#fff"
							transform="matrix(1.4216 -.73423 .46161 .89375 -716.8 541)"
						/>
						<path
							d="M531.5 359.6c0-165.2 8-299.4 17.7-299.4 9.8 0 17.7 134.2 17.7 299.4"
							fill="#fff"
							transform="matrix(1.1373 -.58739 .44532 .86221 -554.8 471.8)"
						/>
						<path
							d="M563.4 301.2c.2 18.9 0 40.2 0 60.2H535c0-20-.2-41.3 0-60.2h28.4z"
							fill="#fff"
							transform="matrix(1.4216 -.73423 .45889 .88849 -716.7 541.4)"
						/>
						<path
							d="M559.8 304.7c.2 19 0 33.1 0 53.2h-21.2c0-20-.2-34.3 0-53.2h21.2z"
							fill="#fff"
							transform="matrix(1.4216 -.73423 .45889 .88849 -716.7 541.4)"
						/>
						<path
							d="M542.1 311.8h14.2v39h-14.2zm0 0 14.2 39m-14.2 0 14.2-39m-14.2-198.4h14.2"
							fill="#fff"
							transform="matrix(1.4216 -.73423 .45889 .88849 -716.7 541.4)"
						/>
						<circle
							cx={545.7}
							cy={92.1}
							fill="#ef0000"
							r={3.5}
							transform="matrix(1.6046 .45375 -.36215 1.5787 -734.9 -170.8)"
						/>
					</g>
					<path
						d="M538.6 531.5c1.7 166.6 24.8 202 3.5 202s-31.9-92.1-31.9-205.5 14.2-205.5 35.5-205.5-9 31.9-7.1 209z"
						fill="#fff"
						fillRule="evenodd"
						strokeWidth="1pt"
						transform="matrix(.31598 -.12472 .1982 .19883 -178.7 67.6)"
					/>
					<path
						d="m545.7 779.5-60.3 17.7c56.7 60.3 120.5 85 138.2 74.4 17.7-10.6-31.9-35.4-78-92z"
						fill="#fff"
						fillRule="evenodd"
						strokeWidth={1.3}
						transform="matrix(.19516 0 0 .17447 18.6 -6)"
					/>
					<path
						d="m547.3 786.9-51 14.7c56.7 60.3 112.8 77.4 127.3 70 14.6-7.3-30.3-28-76.3-84.7z"
						fill="#fff"
						fillRule="evenodd"
						strokeWidth={1.3}
						transform="matrix(.1901 0 0 .16776 21 -.7)"
					/>
					<path
						d="M353.1 634.2c.2 1.3.8 7.1 1.3 9.4 0 3.2.3 5.6.6 8.1.8 2.2.7 4.2 3.1 5a9.9 9.9 0 0 0 5 4.4 27.7 27.7 0 0 0 6.3 3.8 11.6 11.6 0 0 0 7.5.6c2.2-1.5 3.8-3.1 5.6-4.4.4-2 .8-4.9 1.3-6.9a32.6 32.6 0 0 0-1.3 8.2c.2 3 1.3 4.4 2.5 6.8"
						fill="none"
						strokeWidth={1.8}
						transform="matrix(.13744 0 0 .12206 40.5 27.3)"
					/>
					<path
						d="m389.4 681.7.6-.6c-1.5 1.5-.9.8 2.5-1.3 2.4-1.2 5-1.8 8.1-2.4h8.8c3.4 0 5.7.5 8.1 1.2 1.8 1.8 4.4 2.8 6.3 4.4a11 11 0 0 1 3.7 5c1.7 1.7 2.8 4.3 4.4 5.6.7 2.9 2.1 2.8 3.1 5-3 .2-5.3.6-6.9 2.5-2.6 1.3 2.2-1.3 3.2-2.5 2-.6 2.5-1.2 5.6-1.2 2.8-1 4.6.7 7.5 1.2 1.7 1 2.2 1.3 4.4 1.3"
						fill="none"
						strokeWidth={1.8}
						transform="matrix(.13744 0 0 .12206 38.7 26.6)"
					/>
					<path
						d="M438.1 724.9c1.3 0 7.1 1.1 9.4 0 2.6-.7 4-2 5.6-4.4.8-1.7 0 3 0 5 .3 3.7 1.4 3.7 3.2 6.2 1.8 1.2 3.7 2.8 5.6 3.8a18 18 0 0 0 5.6 3.1c2 1 4.1 1.8 5.6 3.1 2.1 1.5 2 3.3 3.2 5.7-.3 3-.8 4.8-2.5 6.2-.8 2.1-2.4 4.2-3.8 5.6-1.5 3-3.3 4.3.6 5 2.2 1 3.4.2 5.7 0"
						fill="none"
						strokeWidth={1.8}
						transform="matrix(.13744 0 0 .12206 36.6 25.1)"
					/>
					<path
						d="M480.6 771.7c1.6-.4 7-2.2 9.4-3.1h8.8c3.3.3 4 1.3 6.8 2.5 1.9 1.9 3.1 3.2 5.7 4.4 1.3 1.7 4 4.7 5 6.9a25.5 25.5 0 0 1 1.2 8c0 3.7-1 4.4-1.2 7.6a19.3 19.3 0 0 1-3.8 7.5c-.3.8-.5 1-1.2 1.2"
						fill="none"
						strokeWidth={1.8}
						transform="matrix(.13744 0 0 .12206 36.2 24.8)"
					/>
					<path
						d="M538.1 818c.4 0 1.2 2 2.5 3.7 2.9 3 3.2 3.2 7.5 3.2 4-.2 3.5-1.6 6.3-2.5 1.3-2 2.9-3.6 4.4-6.3 1-1.6 1.9-4.1 3-5.6 1.2-1.9 2.6-3.3 3.8-5 1.2-.5 1.6-1 3.2-1.3-3.6.6-4 1.9-6.3 3.8a58.9 58.9 0 0 0-3.1 5.6c-.4 2.7-1.2 4.8-1.3 8.1 0 3.5 0 5.9 1.3 8.8 1.5 1.5 2.5 3.1 4.4 4.4a36.7 36.7 0 0 1 4.3 5l5.7 3.7c1.8 1.1 3.9 2.2 6.8 2.5 3.7-.3 4.8-1.3 7.5-2.5 2.4-1.7 4.2-2.8 6.3-4.4a21 21 0 0 0 4.4-5c3.3-.8 5.5-.5 7.5 1.3a16.5 16.5 0 0 1 4.3 4.4c1 .5 2.8 2 3.8 2.5"
						fill="none"
						strokeWidth={2.4}
						transform="matrix(.09758 0 0 .09635 53.8 45.4)"
					/>
					<path
						d="M503.8 836.1c-.8.3-3.8 2.4-5 3.1-.8 2.7-2.1 4.1-2.5 7-.7 2.6-.7 5.6-.7 8.7.7 3.2 2 5.5 3.2 8 2 1.4 3 2.4 5.6 3.8 2.5.4 5 .7 8.1.7 2 .6 5.6.9 7.5 0 2.8-.4 4.9-1.5 6.9-2.5 2.3-1.3 3.7-2.6 6.2-3.8 1.3-1.8 3.2-3.5 5-5.6 1.6-2.1 2.7-3.3 3.8-5.6-1 2.6-2.3 5-3.1 7.5-1.5 2.6-2.3 3.6-2.5 6.8-1 2.6-.7 5.8-.7 8.8.3 2 .4 5.8 1.3 7.5v1.9"
						fill="none"
						strokeWidth={1.9}
						transform="matrix(.12132 0 0 .12024 52 26.2)"
					/>
					<path
						d="M541.3 799.2v.7c0-1.7 0-.9-.7 2.5-1.1 1.4-4 1.8-6.2 1.2-2-1.7-2-3-5.6-3.7-3.6.2-5 1.2-7 2.5a9.5 9.5 0 0 0-5 4.3c-.7 2.1-1.1 3.6 1.3 4.4a15.2 15.2 0 0 0 7 2.5c2.8 0 4.9-.3 6.2 1.3 2 2 1.8 3.2 1.8 6.8.7 1.1.8 4.4 1.3 5.7a10.6 10.6 0 0 0 5.6 1.2c.7-2 1.4-5.4 1.9-7.5.5-2.2.6-5.4 1.9-6.9a16.6 16.6 0 0 1 4.3-4.4 8 8 0 0 1 3.8-2.4c-2.5 1.2-2.8 2.6-3.1 5.6 2.1 1 2.7 1.8 6.2 1.9 3.5-.3 4.3-1.2 5.6-3.2.3 3.2 1.3 4.2 2 7 1.2 1.8 1.7 3.7 3 6.2-.5 3-1.7 3.1-1.8 6.8-.8 2.5-.8 4.8-2.5 6.3-.8 1-1.4 1.1-3.2 1.2 3.6 0 5.8-.4 8.2-1.8 1.8-1.2 3.2-2.6 5-3.8a23.9 23.9 0 0 1 7.5-3.8c2.9 0 5-.3 6.2 1.3 1.8 1.3 3 3.5 3.8 6.3.5 3.2.8 5.4-.7 7.5-1 2.4-1.3 3.3 0 6.2 1.5 2 3.6 2.3 7 3.1 2.3-.1 4.6-.6 6.2-1.2"
						fill="none"
						strokeWidth={1.3}
						transform="matrix(.19516 0 0 .17447 18.6 -6)"
					/>
					<g
						fillRule="evenodd"
						strokeWidth="1pt"
						transform="matrix(.19516 0 0 .17447 18.6 -6)"
					>
						<path
							d="M531.5 359.6c0-165.2 8-299.4 17.7-299.4 9.8 0 17.7 134.2 17.7 299.4h-35.4z"
							fill="#fff"
							transform="matrix(1.4216 -.73423 .46161 .89375 -716.8 541)"
						/>
						<path
							d="M531.5 359.6c0-165.2 8-299.4 17.7-299.4 9.8 0 17.7 134.2 17.7 299.4"
							fill="#fff"
							transform="matrix(1.1373 -.58739 .44532 .86221 -554.8 471.8)"
						/>
						<path
							d="M563.4 301.2c.2 18.9 0 40.2 0 60.2H535c0-20-.2-41.3 0-60.2h28.4z"
							fill="#fff"
							transform="matrix(1.4216 -.73423 .45889 .88849 -716.7 541.4)"
						/>
						<path
							d="M559.8 304.7c.2 19 0 33.1 0 53.2h-21.2c0-20-.2-34.3 0-53.2h21.2z"
							fill="#fff"
							transform="matrix(1.4216 -.73423 .45889 .88849 -716.7 541.4)"
						/>
						<path
							d="M542.1 311.8h14.2v39h-14.2zm0 0 14.2 39m-14.2 0 14.2-39m-14.2-198.4h14.2"
							fill="#fff"
							transform="matrix(1.4216 -.73423 .45889 .88849 -716.7 541.4)"
						/>
						<circle
							cx={545.7}
							cy={92.1}
							fill="#ef0000"
							r={3.5}
							transform="matrix(1.6046 .45375 -.36215 1.5787 -734.9 -170.8)"
						/>
					</g>
					<g
						fill="#fff"
						fillRule="evenodd"
						transform="matrix(.19516 0 0 .17447 18.6 -6)"
					>
						<path
							d="M305.6 396.9c0 124 .5 170.7-5.6 177.1-5.8 6.9-167.1 0-167.1 35.4s132.8 71 172.7 71c53.2 0 79.7-35.5 79.7-106.4V397h-79.7z"
							strokeWidth="1pt"
							transform="matrix(1.3333 0 0 1 -141.7 0)"
						/>
						<path
							d="M265.8 396.9v17.7a321.1 321.1 0 0 0 106.2 0v-17.7a321.1 321.1 0 0 1-106.2 0z"
							strokeWidth="1pt"
							transform="matrix(1 0 0 .99999 0 35.4)"
						/>
						<path
							d="M265.8 396.9v17.7a321.1 321.1 0 0 0 106.2 0v-17.7a321.1 321.1 0 0 1-106.2 0z"
							strokeWidth="1pt"
							transform="scale(1 .99999)"
						/>
						<path
							d="M265.8 396.9v17.7a321.1 321.1 0 0 0 106.2 0v-17.7a321.1 321.1 0 0 1-106.2 0z"
							strokeWidth="1pt"
							transform="matrix(1 0 0 .99999 0 17.7)"
						/>
						<path
							d="M265.8 396.9v17.7a321.1 321.1 0 0 0 106.2 0v-17.7a321.1 321.1 0 0 1-106.2 0z"
							strokeWidth="1pt"
							transform="matrix(1 0 0 .99999 0 53.1)"
						/>
						<ellipse
							cx={256.9}
							cy={210.8}
							rx={8.9}
							ry={26.6}
							strokeWidth={4.5}
							transform="matrix(.54545 0 0 .14383 130.5 394.3)"
						/>
						<ellipse
							cx={292.3}
							cy={246.3}
							rx={8.9}
							ry={26.6}
							strokeWidth={4.5}
							transform="matrix(.54545 0 0 .14383 130.5 391.1)"
						/>
						<ellipse
							cx={327.8}
							cy={264}
							rx={8.9}
							ry={26.6}
							strokeWidth={4.5}
							transform="matrix(.54545 0 0 .14383 130.5 390.5)"
						/>
						<ellipse
							cx={363.2}
							cy={264}
							rx={8.9}
							ry={26.6}
							strokeWidth={4.5}
							transform="matrix(.54545 0 0 .14383 130.5 390.5)"
						/>
						<ellipse
							cx={398.6}
							cy={246.3}
							rx={8.9}
							ry={26.6}
							strokeWidth={4.5}
							transform="matrix(.54545 0 0 .14383 130.5 391.1)"
						/>
						<ellipse
							cx={434.1}
							cy={210.8}
							rx={8.9}
							ry={26.6}
							strokeWidth={4.5}
							transform="matrix(.54545 0 0 .14383 130.5 394.3)"
						/>
						<path
							d="M265.8 485.4 372 581.1m-95.6-95.7 95.7 85M290.5 489l81.6 70.9m-71-71 71 60.3M311.8 489l60.2 49.6M322.4 489l49.6 39m-39-39 39 28.3M343.8 489l28.4 21.2M354.3 489l17.8 14.2M365 489l7 7m-106.2 0L372 591.8m0-106.3L255 591.7m106.3-106.3-102.7 92.2m88.6-88.6-81.5 70.8m70.8-70.8-70.8 60.2M326 489l-60.2 49.6m49.6-49.6-49.6 39m39-39-39 28.3M294 489l-28.3 21.2m17.7-21.2-17.7 14.2m7-14.2-7 7m106.3 0L255 602.5m117-95.7L255 613m117-95.7L255 623.6m117-95.7L255 634.4m117-95.7L255 644.9m117-95.7L255 655.5m117-95.7L255 666.1m117-95.6L255 676.8m117-95.7-109.9 99.2M372 591.7l-99.2 88.6m95.6-74.4-78 70.9M365 620l-63.8 56.7m56.7-39-32 28.3m-60.1-159.4 102.7 92.1m-102.7-81.5 102.7 92.2M265.8 528l99.2 88.5m-99.2-78 99.2 88.7m-99.2-78 95.6 85m-99.2-77.9 95.7 85M262.2 567l88.6 78m-92.1-71 88.6 78M255 581l85 74.4m-85-63.8 81.5 70.9M255 602.3l71 63.7"
							strokeWidth="1pt"
						/>
						<path
							d="M265.8 396.9v17.7a321.1 321.1 0 0 0 106.2 0v-17.7a321.1 321.1 0 0 1-106.2 0z"
							strokeWidth="1pt"
							transform="matrix(1 0 0 .99999 0 70.9)"
						/>
						<path
							d="m255.1 613 63.8 56.7m-63.8-46 56.7 49.5m-56.7-39 49.6 42.6m-49.6-32 35.5 32M255 655.5l28.4 24.8M255 666.1l17.7 14.2"
							strokeWidth="1pt"
						/>
						<ellipse
							cx={256.9}
							cy={210.8}
							rx={8.9}
							ry={26.6}
							strokeWidth={4.5}
							transform="matrix(.54545 0 0 .14383 130.5 447.5)"
						/>
						<ellipse
							cx={292.3}
							cy={246.3}
							rx={8.9}
							ry={26.6}
							strokeWidth={4.5}
							transform="matrix(.54545 0 0 .14383 130.5 444.3)"
						/>
						<ellipse
							cx={327.8}
							cy={264}
							rx={8.9}
							ry={26.6}
							strokeWidth={4.5}
							transform="matrix(.54545 0 0 .14383 130.5 443.6)"
						/>
						<ellipse
							cx={363.2}
							cy={264}
							rx={8.9}
							ry={26.6}
							strokeWidth={4.5}
							transform="matrix(.54545 0 0 .14383 130.5 443.6)"
						/>
						<ellipse
							cx={398.6}
							cy={246.3}
							rx={8.9}
							ry={26.6}
							strokeWidth={4.5}
							transform="matrix(.54545 0 0 .14383 130.5 444.3)"
						/>
						<ellipse
							cx={434.1}
							cy={210.8}
							rx={8.9}
							ry={26.6}
							strokeWidth={4.5}
							transform="matrix(.54545 0 0 .14383 130.5 447.5)"
						/>
						<path
							d="m113.4 652 127.5-74.4m-134.6 70.8 120.5-70.8m-124 63.7 109.8-63.7M99.2 634.3l95.7-56.7M92 627.2l88.6-49.6m-85 39 60.2-35.5M92 609.4l46-28.3m-46 17.7 32-17.7m0 74.4 120.4-70.9M134.7 659 248 591.7m-102.7 70.9 106.3-63.8m-95.7 67.3 88.6-53.1M170 666.1l78-46m-67.4 49.6 67.3-39m-56.7 42.5 53.2-31.9m-39 32 42.5-24.9m-28.3 28.4L248 659m-14 17.8 17.7-10.6"
							strokeWidth="1pt"
						/>
						<path
							d="M265.8 396.9v17.7a321.1 321.1 0 0 0 106.2 0v-17.7a321.1 321.1 0 0 1-106.2 0z"
							strokeWidth="1pt"
							transform="matrix(0 1 -.99999 0 655.5 308.3)"
						/>
						<path
							d="m49.6 623.6 42.5-35.4m-42.5 10.6 42.5 42.5"
							strokeWidth="1pt"
						/>
						<path
							d="m260.1 388 5.6 26.6c35.5 5.9 65.3 5.9 100.8 0l11.1-26.6c-35.4 5.9-82 5.9-117.5 0z"
							strokeWidth="1pt"
							transform="matrix(0 .63333 -.8 0 423.8 416.3)"
						/>
						<path
							d="M258.7 350.8v-17.9c-10.7.2-17.8-10.5-17.8-21.2l-35.4.1c0 10.6-7 21.3-17.7 21.3v17.7h70.9z"
							strokeWidth="1pt"
							transform="matrix(1.4983 0 0 1 -15.6 53.1)"
						/>
						<path
							d="M296 343.7h45.6V365H296zm3.9-21.3h37.9v21.3h-38zm0-21.2h37.9v21.2h-38zm3.8-28.4H334v28.4h-30.3zm-1.3-24.8h33v24.8h-33z"
							strokeWidth={1.4}
						/>
						<ellipse
							cx={237.4}
							cy={161.2}
							rx={42.5}
							ry={33.7}
							strokeWidth="1pt"
							transform="matrix(1.0333 0 0 1 75.3 63.8)"
						/>
						<path
							d="M258.7 159.4c0 9.3 10.6 24.8 10.6 24.8-7.7 6.2-20.2 10.7-31.9 10.7s-26.3-2.6-31.9-10.7c0 0 10.6-15.4 10.6-24.7s-10.6-21.3-10.6-21.3a54.6 54.6 0 0 1 32-10.6c11.6 0 24 4.5 31.8 10.6 0 0-10.6 12-10.6 21.3z"
							strokeWidth="1pt"
							transform="matrix(1.0333 0 0 1 75.3 63.8)"
						/>
						<path
							d="M251.6 159.4c0 9.3 10.6 28.4 10.6 28.4-7.7 6-13 7-24.8 7s-19.2 1.1-24.8-7c0 0 10.6-19 10.6-28.4s-10.6-24.8-10.6-24.8c7.7-6 13-7 24.8-7 11.7 0 17.1 1 24.8 7 0 0-10.6 15.5-10.6 24.8z"
							strokeWidth="1pt"
							transform="matrix(1.0333 0 0 1 75.3 63.8)"
						/>
						<circle
							cx={194.9}
							cy={166.5}
							r={10.6}
							strokeWidth="1pt"
							transform="matrix(1.0333 0 0 1 75.3 60.2)"
						/>
						<circle
							cx={194.9}
							cy={166.5}
							r={10.6}
							strokeWidth="1pt"
							transform="matrix(1.0333 0 0 1 163.2 60.2)"
						/>
						<circle
							cx={194.9}
							cy={166.5}
							r={10.6}
							strokeWidth="1pt"
							transform="matrix(1.0333 0 0 1 119.3 60.2)"
						/>
						<circle
							cx={194.9}
							cy={166.5}
							r={10.6}
							strokeWidth="1pt"
							transform="matrix(1.0333 0 0 1 119.3 24.8)"
						/>
						<circle
							cx={194.9}
							cy={166.5}
							r={10.6}
							strokeWidth="1pt"
							transform="matrix(1.0702 0 0 1 80 226.8)"
						/>
						<circle
							cx={194.9}
							cy={166.5}
							r={10.6}
							strokeWidth="1pt"
							transform="matrix(1.0702 0 0 1 140.6 226.8)"
						/>
						<path
							d="M212.6 311.8h49.6l-24.8 31.9-24.8-31.9z"
							strokeWidth="1pt"
							transform="matrix(1.0702 0 0 1 64.8 53.1)"
						/>
						<circle
							cx={194.9}
							cy={166.5}
							r={10.6}
							strokeWidth="1pt"
							transform="matrix(1.427 0 0 1.3333 40.7 167.7)"
						/>
					</g>
					<g
						fill="#fff"
						fillRule="evenodd"
						transform="matrix(.19516 0 0 .17447 18.3 -10.9)"
					>
						<rect
							height={21.3}
							rx={4.4}
							ry={3.8}
							strokeWidth={1.3}
							width={81.5}
							x={262.2}
							y={524.4}
						/>
						<path
							d="M368.5 506.7c-9.8 0-17.7 8.3-17.7 18.5v16.1a18 18 0 0 0 17.7 18.5 18 18 0 0 0 17.7-18.5v-16a18 18 0 0 0-17.7-18.6zm0 7c-5.9 0-10.6 6.7-10.6 14.9v9.3c0 8.2 4.7 14.8 10.6 14.8 5.9 0 10.6-6.6 10.6-14.8v-9.3c0-8.2-4.7-14.8-10.6-14.8zm-92.1-3.5c-6 0-10.6 6.6-10.6 14.9v16.4c0 8.2 4.7 14.8 10.6 14.8 5.9 0 10.6-6.6 10.6-14.8V525c0-8.3-4.7-14.9-10.6-14.9zm0-7a18 18 0 0 0-17.7 18.5v23.2a18 18 0 0 0 17.7 18.5c9.8 0 17.7-8.3 17.7-18.5v-23.2a18 18 0 0 0-17.7-18.6z"
							strokeWidth={1.3}
						/>
						<path
							d="M248 517.3c-5.9 0-10.6 6.6-10.6 14.8v3.9c0 8.2 4.7 14.8 10.6 14.8 6 0 10.7-6.6 10.7-14.8v-3.9c0-8.2-4.8-14.8-10.7-14.8zm0-7a18 18 0 0 0-17.7 18.5v10.6a18 18 0 0 0 17.7 18.5c9.8 0 17.8-8.3 17.8-18.5v-10.6a18 18 0 0 0-17.8-18.6z"
							strokeWidth={1.3}
						/>
						<path
							d="M478.4 237.4c-6 0-10.7 6.6-10.7 14.8v16.5c0 8.1 4.8 14.8 10.7 14.8 5.8 0 10.6-6.6 10.6-14.9v-16.4c0-8.2-4.8-14.8-10.6-14.8zm0-7a18 18 0 0 0-17.8 18.4V272a18 18 0 0 0 17.7 18.6c9.9 0 17.8-8.3 17.8-18.6v-23.2a18 18 0 0 0-17.7-18.5z"
							strokeWidth={0.9}
							transform="matrix(1.8 0 0 1.1176 -655.5 242.2)"
						/>
						<path
							d="M478.4 237.4c-6 0-10.7 6.6-10.7 14.8v16.5c0 8.1 4.8 14.8 10.7 14.8 5.8 0 10.6-6.6 10.6-14.9v-16.4c0-8.2-4.8-14.8-10.6-14.8zm0-7a18 18 0 0 0-17.8 18.4V272a18 18 0 0 0 17.7 18.6c9.9 0 17.8-8.3 17.8-18.6v-23.2a18 18 0 0 0-17.7-18.5z"
							strokeWidth={0.9}
							transform="matrix(1.8 0 0 1.1176 -425.2 245.7)"
						/>
						<rect
							height={21.3}
							rx={2.3}
							ry={3.8}
							strokeWidth={1.3}
							width={42.5}
							x={375.6}
							y={524.4}
						/>
						<rect
							height={28.4}
							rx={1.4}
							ry={5}
							strokeWidth={1.3}
							width={24.8}
							x={336.6}
							y={520.9}
						/>
						<rect
							height={28.4}
							rx={1.4}
							ry={5}
							strokeWidth={1.3}
							width={24.8}
							x={219.7}
							y={520.9}
						/>
						<rect
							height={35.4}
							rx={2.7}
							ry={6.3}
							strokeWidth={1.3}
							width={49.6}
							x={141.7}
							y={517.3}
						/>
						<rect
							height={35.4}
							rx={2.5}
							ry={6.3}
							strokeWidth={1.3}
							width={46.1}
							x={450}
							y={520.9}
						/>
					</g>
				</g>
			</g>
		</Box>
	);
}
