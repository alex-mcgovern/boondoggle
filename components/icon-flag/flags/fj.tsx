import clsx from "clsx";

import { css } from "../../../src/styles/utils/util_css.css";
import { Box } from "../../box/Box";
import { flagStyles } from "../styles.css";

import type { UtilCssArgs } from "../../../src/styles/utils/util_css.css";

export function FlagFj({
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
			<path d="M0 0v512h512V.2H322V0H0z" fill="#68bfe5" />
			<g strokeMiterlimit={4.8}>
				<path
					d="M310.2 254v136.4c0 44.6 80.6 71.1 80.6 71.1s80.6-26.5 80.6-71V254z"
					fill="#fff"
				/>
				<path
					d="M379.6 302v61.4h-69.4v22.3h69.5v71.5l11.1 4.3 11.2-4.3v-71.5h69.4v-22.3H402V302z"
					fill="#d21034"
				/>
				<path d="M310.2 254h161.2v52.7H310.2z" fill="#d21034" />
				<g strokeMiterlimit={3}>
					<g
						fill="#fff"
						stroke="#000"
						strokeWidth={0.8}
						transform="translate(-207.6 158.4) scale(.66486)"
					>
						<ellipse cx={798.2} cy={192.2} rx={13.6} ry={11} />
						<ellipse cx={798.2} cy={186.5} rx={12.1} ry={6.1} />
						<ellipse cx={798.2} cy={198.8} rx={12.1} ry={6.1} />
						<ellipse cx={798.2} cy={192.2} rx={12.1} ry={6.1} />
					</g>
					<path
						d="m467.4 296.3-1.3-3.7s-3.6-1.4-3.9-3.4c-.6-5-2.5-7-5.2-7.7a6 6 0 0 0-4.6.4c-.8 1.2-4.9 1.2-7.2 1.3-2.3.1-2.3-1-2.3-1a2.9 2.9 0 0 1-2.5-1.3c-1.2-2.3-2-3.2-2.6-3.4 3 0 5.2-1.4 8.5-4.9 3.7-3.8 6.3-2.3 6.3-2.3-1.8 3.5.6 3.2.6 3.2 4.8-2.4.6-8.7-.9-8.4-1.4.3-1.8-.7-1.8-.7 0 1.1-1.7 1.6-1.7 1.6 1.3-7.1-3-9-3-9-.6.6-1 2-1 2-1.1 4.2-5 3.6-9.4 1.5s-16.1 2.2-19.8 3.6c-3.6 1.5-10.3 3.8-16.3.4s-7.5-2.8-9.9-2.1c-2.4.6-6.6 1.6-8.1.8a8.5 8.5 0 0 0-3.4-.9c.5-.2-.2-1.2-.2-1.2-1.8-2.5.2-4 .2-4s-3.3 1-2 6.8l.6.9s.5 1.8 1.5 2.3v.4s.8-.4 1 .8c.4 1.2 1.6.1 2.2-.9 0 0-1 5.3 5.6 6.6 0 0-.7-.8-.4-1.4.3-.5-.8-1-.7-1.8 0-.8-1.7-1.2-.3-1.8 1.4-.7 2-2 5-.2 2.8 1.7 5.1 1.3 5.1 1.3s-1.8-3.6-.8-3.6 5.4 5.5 7.6 5.2c2.2-.3 6.4-2.7 8.5-1.8 0 0 .2-1.1 8.2-2.5 8-1.4 18-5.4 21.7-1.9 0 0 .4 2.8 2 3.5 0 0-.3 5.8-10.3 2.6l-3.6-1s-.5-1.7-19.5 3.2c0 0-1 .4-1.8 1-.7.5-1.7-.4-5.5 1s-17.7 6-26.3 4.3c-1.9-.5-3.7-.3-3.7-.5-.1-.4 1 0 1 0-.7-.7-1-.8-1-.8-7.2-.7-5.9-4-5.9-4l.4 1c1.2-1.5-.5-5.2-.5-5.2a3.8 3.8 0 0 0-.1-.3l.6-.4c3.5-3 7.5-3.5 7.5-3.5-2.4-3-7.4-1.4-7.4-1.4 0-3.5-1.4-7.6-1.4-7.6-5 .5-7.8 4.6-7.8 4.6-.1-3.6-4.8-5.7-4.8-5.7 1.7 2 .6 7 .6 7l.2.2h-.4l-.1 1h-.2s-1.7.6-3.8 5.2c0 0-.2 1-1 2v-.3s-2.2 3-7.4 0c0 0-7-4.2-9.5-4-2.5.1-4.1 1.3-4 2 0 0-5.6-.5-7.5 2.7 0 0-4.3 1.6-.6 5 0 0 .4 1.6 1.5 2.4 0 0-.2-3.2.6-2.2 0 0 .2.3.6.5 0 .4.4 1.7 1.2 2.3l.5-.2a9 9 0 0 1 .5-2.2h.2l-.1.1 1 1.5 1.1-.6c.6 0 1.3.5 1.3.5l1.3-1v-.1c1.3.2 1.6-2.3 1.6-2.3a4 4 0 0 0 3.2-.6c.6 2 5.2 4.3 5.2 4.3h.2l-.6.4c2 1.5 6 1.1 6 1.1-1.6.7-1.4 3.7-1.4 3.7-1 .4-1 1.3-1 1.3 3.1 1.3 5.3.3 5.3.3.2 1 0 1.1 0 1.1-1.3 2.7-1.9 5.4-1.9 5.4v.2s-5.6 2-8 4.7c0 0-.3-.8-1-.8s-2.9-1.8-3.9-2c-1-.4-2.5.2-2.9-.2-.3-.5-.1-3.6-.8-4.1l-.7-2c-.5 1-2.4.8-2.4.8a21.9 21.9 0 0 0-.8.6l-.8-.1c-.2 0-.4.6-.6 1.1a12 12 0 0 0-.2.2v-.6c-.4.3-1.2-.1-1.5-.1l-.5.9-1.8.2c-.3.1 0 2.5 0 2.5-2.3 1.3-1.2 3.1-1.2 3.1 1.2 6 11.5 3.4 12.3 4.1.7.8 2.5 1 3.5 1 .9 0 2 2.2 3.4 2.4 1.3.3 0-1.7 6-3.2 6.2-1.5 8.2-4 8.2-4 2-.3 2.5-2.7 2.6-3.6l.1 1.5c.3 2-1.1 2.8-1.1 2.8l5.2-1.6c2.1-.5 1.9-2.3 1.9-2.3 2 5.7 5.6 6 5.6 6 .8-2.1.7-2.8.7-2.8h1.6c0-1.3-1-2.2-1.6-2.6l2.5 1.6 1-.2c0 .9 1.4 1.7 1.4 1.7l.2-1.2c1.2 1.6 3.4 1 3.4 1a7.3 7.3 0 0 0-.2-.8c4.7 2.9 12.1-.8 12.1-.8 2 .4 2.3-.8 2.3-.8 2.3.3 2.8-1.2 2.8-1.2 5.4-.5 9.2-4.3 9.2-4.3 2.6-.2 2.7-2 2.7-2s2.7.4 5.2-2.8c6-8.5 14.8-4 14.8-4l-5 .3c-13.5-.1-8 9-8 9h.9c1.3.2 5.6 3.7 4 6.3v.1c-2.8 3.7-7.9.2-9.3-3-1.5-3.2-4.4-2.5-4.4-2.5s-7.6 1.3-4.5 7.3h.1c.1 1.5 1 3.2 3.7 4.9 1.5 2.1 6.5 2.3 10.2 1.5 1.7-.3 10.7-4.2 10.7-4.2.7-2 3-1.5 5-4.3 2-2.9-3-3.9-4-5.4-1.1-1.6.3-1.3.3-1.3 4.3 2.4 4.7-5.2 4.7-5.2a6.6 6.6 0 0 0 4.3 5.6c2.4-2.4.6-7.3.6-7.3 5.7 10.2 9.2 8.6 9.2 8.6-3.1-2-1.6-4.5-1.6-4.5 2.8 10.8 14 1.4 14 1.4-.5 1.6 0 2.5 1 3.5s2.2 1.4 1.7 3.3c-.6 1.8-5.8 1.4-5.8 1.4s-5.1-.2-4.6 4c.2 1 3.6 1.4 4.9 1.2 0 0-.5 0 1.3.3l2.2.1c2.2 0 4.5-.4 4.5-.4 3-.7 2.5-1.7 2.5-1.7 4.5-.8 5-3.8 5-3.8z"
						fill="#ffd100"
						stroke="#000"
						strokeWidth={0.8}
					/>
					<path d="M319 277.6s.2-.6.7-.7c.3 0 .8.2 1.2.8l.2-.2s-1.2-1.8-.7-3c.2-.5.8-1 1.6-1v-.4c-1 .2-1.6.6-1.9 1.3a2 2 0 0 0-.1.8c0 .6.2 1.2.4 1.6a1.1 1.1 0 0 0-.8-.2c-.4.1-.7.4-.8.6zm141 23.9c-3 .5-7.6.7-8-.2 0-.1 0-.8 2.5-2.4l-.3-.5c-2 1.4-3 2.4-2.6 3.1.6 1.7 7.2.7 8.5.5zm-58.4 1.8c-.7-1.1-.4-2.6 1-4.4l-.5-.3c-1.5 2-1.8 3.7-1 5z" />
					<path d="M397.5 298.7c0 1.8 1.3 3.5 3.8 5l.3-.4c-2.3-1.4-3.5-3-3.6-4.7 0-2.5 2.6-4.4 2.6-4.5l-.3-.4c-.1 0-3 2.1-2.8 5zm52 .6c-.8 1.3-.5 2.8-.5 2.8h.5s-.2-1.4.5-2.5a3 3 0 0 1 2-1.2v-.5c-1.1.2-2 .7-2.5 1.4zM330.3 276h-.2v.1s-.3 1.6-1 2a.8.8 0 0 1-.7.1l-1.2-.7c-.3-.3-.5-.4-.8-.3a1.8 1.8 0 0 1-.4-1.3c.1-.8.6-1.5 1.5-2.1l-.1-.3c-1 .7-1.6 1.5-1.7 2.3-.1 1 .4 1.6.5 1.7h.1c.3-.1.4 0 .7.2l1.3.8h1c.7-.5 1-1.9 1-2.2 3.3.7 6-3.3 6-3.4l-.2-.2s-2.7 4-5.8 3.3z" />
					<path d="M322.5 275.4c-.2.6 0 1.3.3 1.9.4.6.7.9 1.1 1 .5 0 .8-.3 1.1-.6.2-.3.5-.5.6-.4l.3.2.3-.2-.5-.3c-.3 0-.6.2-.9.4-.3.3-.6.6-.9.5-.2 0-.5-.3-.8-.8a2.2 2.2 0 0 1-.3-1.7c.3-1.4 2-2.5 2-2.5v-.2c-.1 0-2 1-2.3 2.7zM318 296c.2-.6.6-1 1.3-1.4-.1 0 .7.7 1.4.6l.4-.2c.2.1 1.4 1.2 1.4 2.6 0 .3 0 .6-.2.9l.3.1c1-2-1.3-4-1.3-4h-.2l-.5.3c-.5 0-1.2-.6-1.3-.6-.9.4-1.4 1-1.6 1.6zm10.4-5.3c-.7 0-2.6.4-3.2 1.3-.2.4-.2.8 0 1.2l.2.7c.6 1.5 1.2 3.1 1.8 3.5l.2-.3c-.6-.3-1.2-2-1.7-3.4l-.3-.6a1 1 0 0 1 0-.9c.6-.8 2.2-1.2 3-1.2.4 0 .5 1.5.6 2.5h.3c0-1.5-.2-2.9-1-2.8z" />
					<path d="M323.3 292.2a1 1 0 0 0-.3.9c0 .1.1 4 2 4.8l.1-.3c-1.7-.7-1.8-4.5-1.8-4.5s-.1-.4.2-.7c.2-.2.8-.2 1.6 0v-.3c-.8-.3-1.5-.2-1.8.1z" />
					<path d="M321.8 292.5c-.8.6-.8 2.2-.8 2.3h.3s0-1.6.7-2c.2-.2.6-.2 1 0v-.3c-.4-.2-.9-.2-1.2 0z" />
					<g transform="translate(-207.6 158.4) scale(.66486)">
						<path d="M862.3 169.5s1.3 3 1.3 5.3c0 .4-.2.7-.3 1l-.5-1.3-.3 1s-.6 1.4.3 2.9c1.2 2 4.2 3.2 9 3.7v.1a.8.8 0 0 0-.4.1l-.2.2v.4c.2.5.7.5 1.8.5l.7.1.6.2-.1-.1c1 0 2.3.3 3.6.8l-1 .2 1.1.5c.1 0 8.7 3.5 12.2 6.3-1 .9-5.3 4-12.7 2.2l-1.2-.3.8 1s4.9 5.6 5.9 9c-1.7 0-8.2 0-10.5-2l-.5.5s3 4.6 3.8 8.1c-1 .2-3 .3-4.3-1.4l-.6-.7-.3 2c-.6-.5-1.4-1.1-1.4-1.9v-.4l-1.8.3-3.8-2.3a8 8 0 0 0-.6-.4l-.4.7.6.3c.8.6 2.2 1.7 2.3 3.3H863v.5c0 .3 0 1.4-.9 3.7-1.1-.2-5.3-1.7-7.8-8.8l-.8.2v.2c0 .7-.2 2.3-2.4 2.9l-6.5 2a4.5 4.5 0 0 0 .8-2.8v-.8a20.3 20.3 0 0 1-.2-2.6c0-1.5.3-2.4 1.4-3l-.4-.8c-.1 0-9.6 3.9-14.3 2.3.2-1 1-4.2 2.6-7.6l-.2.2c.3-.2.6-.6.3-2.2v-.5l-.5.2s-3 1.4-7.4-.2c0-.4.3-1 1.2-1.4l.3-.1v-.8c0-1.2.1-4 1.8-4.6l-.2-.8s-5.1.4-8.2-1.3a11 11 0 0 1 4.5-1.9h.3v-.4a6 6 0 0 0-.5-2.3c1.2.4 2.6.7 3.1.3l.2-.1-.2-3.1h-.8l.1 2.6-3-.7-1.2-.4.8 1a4 4 0 0 1 .7 2.4 12.7 12.7 0 0 0-5 2.3l-.5.4.5.3c2.4 1.6 6.1 1.8 8 1.7a8.4 8.4 0 0 0-1.3 4.5v.4a3.1 3.1 0 0 0-1.5 2.2v.3l.2.1a11 11 0 0 0 7.9.5v.9c-2 4.2-3 8.3-3 8.3v.4h.3c3.9 1.6 10.7-.5 13.8-1.6-.4.7-.7 1.5-.7 2.5a22.1 22.1 0 0 0 .3 3.4c0 2.3-1.5 3.2-1.6 3.2l.3.8 8-2.4c1.8-.5 2.5-1.6 2.8-2.5 3.1 7.4 8 8 8.3 8.1h.3l.1-.3a14 14 0 0 0 1-4 439.6 439.6 0 0 0 2.4-.1v-.5c0-.7-.1-1.3-.4-1.8l1.4.8 1.3-.2c.3 1.3 1.9 2.4 2.1 2.5l.5.3.3-1.7c2 1.7 4.7 1.2 4.9 1.2l.3-.1v-.4c-.4-2.7-2.2-5.9-3.3-7.6 3.5 1.6 9.9 1.5 10.2 1.5h.4v-.5a30 30 0 0 0-5.6-9c8.2 1.5 12.6-2.8 12.8-3l.3-.3-.4-.2a53.8 53.8 0 0 0-11.6-6.3l.9-.2-1-.5a12.8 12.8 0 0 0-5.8-1.4c-1-1.2-1.5-1.3-1.6-1.4-5.6-.6-7.6-2.1-8.4-3.3v-.3l.2-.3c.5-.7.7-1.6.7-2.6 0-2.6-1.3-5.5-1.3-5.6l-.8.3z" />
						<path d="M836.8 167.9s-.6 3-3.2 4.5c-2 1-4.5 1-7.6-.3l-.4-.1v.4a5 5 0 0 0 2 3.2c1.3 1 3.3 1.4 5.9 1.2-.9 1-3.6 4.4-3.6 7.8v.5c.4.2 4.6 1.4 6.6-1.1 0 1 .4 4.5 1.7 5.8.8.8 1 1.8 1 2.7 0 .8-.2 1.4-.2 1.4l-.2.6.5-.4c.2-.1 4.1-3 5.3-6.7 0 0 .7-1 1.9-1.3v.5c0 1.5.6 4.1 4.8 5.7l.3.1v-.3a7.1 7.1 0 0 1 0-.7c0-1.1 0-3 1.1-4a2.8 2.8 0 0 0 .6-3.3c.9.2 2.9.9 3.7 2.4 1.2 2.2 5.3.4 5.5.4l-.1-.5s-1.8.4-2.9-.3a2.1 2.1 0 0 1-.8-1.5l-.2-2.4c0-1-.2-1.7-.7-2.2.5 0 1.6 0 2 1 .8 1.6 3.3 1.7 3.4 1.7l.9.1-.7-.5s-2.2-1.4-1.8-3.3l.3-1.4c.6-2.5 1.6-6.6.7-9.2l-.4.2c.2.6.3 1.4.3 2.2 0 2.2-.7 5-1 6.7l-.4 1.4a2.6 2.6 0 0 0 0 .5c0 1.3.7 2.2 1.3 2.7-.7-.1-1.7-.5-2-1.3-.7-1.4-2.3-1.4-3-1.3l-.6.1.4.4c.7.4.8 1 .8 2.3l.2 2.3c.1.8.5 1.4 1 1.8.6.4 1.2.4 1.7.5-1.2.3-2.9.5-3.5-.6-1.1-2.2-4.3-2.7-4.4-2.8h-.5l.2.4s.4.6.4 1.4c0 .5-.2 1.2-.7 1.7-1.1 1.1-1.3 3.2-1.3 4.3v.4c-3.6-1.5-4.2-3.7-4.2-5v-1l.2-.3h-.4a3.5 3.5 0 0 0-2.5 1.8 15 15 0 0 1-4.7 6.2 6.9 6.9 0 0 0 .1-1c0-.9-.2-2-1-2.9-1.5-1.4-1.7-6-1.7-6v-.8l-.4.7c-1.6 2.8-6.2 1.4-6.3 1.4-.2-3.5 4-8.1 4-8.2l.4-.4h-.6c-2.7.4-4.8 0-6.2-1a4.6 4.6 0 0 1-1.6-2.5c3 1.1 5.6 1.2 7.6.1a7.4 7.4 0 0 0 3.4-4.8c3-6.6 5.5-7.7 5.5-7.7l-.1-.4c-.2 0-2.8 1-5.8 8z" />
						<path d="M843.5 158h-.2l-2.4 3.3h.7a31 31 0 0 1 19.7 9.2l.3.3 2.3-2.5-.2-.3c-6.5-10.2-20.1-10-20.3-10zm.2.9c1.6 0 13.2.3 19.2 9.3l-1.3 1.4a33 33 0 0 0-19.3-8.9 631.2 631.2 0 0 1 1.4-1.8z" />
						<path d="M841.6 164.8a11 11 0 0 0-2.1 4.8l.1.4a7.3 7.3 0 0 0-2 5.5c0 1.3.2 2.6.6 3.8l.3.7c1.2 3.4 2.3 6.4 7.8 4.6 5.2-1.6 5.4-2 6.7-4.2l.4-.5c.7-1.2 1.5-1.4 2.3-1.7 1-.3 2-.6 3-2.4l.8-1.3c1-1.3 2.2-3 2.3-5h-.4a9.8 9.8 0 0 1-2.2 4.7l-1 1.4a3.6 3.6 0 0 1-2.6 2.2 3.9 3.9 0 0 0-2.6 1.8l-.4.6c-1.2 2.1-1.4 2.4-6.5 4-5 1.6-6-.9-7.2-4.4l-.3-.7c-1.4-3.8-.3-7.6 1.6-9l.6-.5-.9.1v-.1c0-.7.7-2.6 2-4.5 1.2-1.6 4-3.1 4-3.2l-.2-.4c-.2.1-2.9 1.7-4.1 3.3z" />
						<path d="M839.2 178.7c.9.6 2.1.5 3.7 0 0 .5 0 1.7 1 2.5 1.2 1 3 1.2 5.5.6v-.5c-2.4.6-4.2.4-5.2-.5a3 3 0 0 1-.9-2.4v-.4l-.3.2c-1.5.6-2.7.7-3.6 0-1.5-1-1.4-3.7-1.4-3.7h-.4s-.2 3 1.6 4.2z" />
						<path d="M842 175c-.6.2-.8.7-.8 1.1v.3c.2 1.2 1.5 2 2.6 2.3 1.2.3 2.6.4 3.1-.3.2-.3.4-.8 0-1.7a3.7 3.7 0 0 0-4.8-1.7zm2 3.3c-1-.3-2.2-1-2.3-2 0 0-.1-.7.5-.9a3.3 3.3 0 0 1 4.2 1.6c.3.4.3.8.1 1-.3.5-1.4.6-2.5.3zm-2-3.3zm1.6 6c-.3 2.5 0 2.6.1 2.6h.2l.2-.1 1.4-2-1.8-.8v.3zm.5.4.7.3-.8 1.1v-1.4zm-4.2-2.4-.1 2.3 2-2.4-2-.2v.3zm.4.2h.6l-.6.8v-.8z" />
						<path d="M838.5 178.2s1.5 2.9 1.8 4c.1.6 1 1.4 2 1.7 1 .4 2 .4 2.7-.1l1.3-1.1c.4-.5.6-.6 1-.5v-.5c-.6 0-.9.2-1.3.6l-1.3 1c-.8.6-1.7.4-2.2.2-1-.3-1.7-1-1.8-1.5-.3-1-1.7-3.9-1.8-4l-.4.2zm2-8.6a5 5 0 0 0-2.4 2.8l.4.1s.7-1.8 2.1-2.5a2.9 2.9 0 0 1 2.4 0l.1-.4c-1-.4-1.8-.4-2.7 0zm10.8 5.2c.2 0 3.2 2.4 1.5 5.2l.3.3c2-3.3-1.5-5.9-1.5-6l-.3.5zm-9.2.4s-.5 1.7 2 2.3c0 0-2.3 0-2.5-.6-.1-.6 0-1.9.5-1.7zm7.5 2c0 .2-.2.3-.3.3a.3.3 0 0 1-.3-.2c0-.2.1-.3.3-.3.1 0 .3.1.3.3zm.2 1.2c0 .1 0 .2-.2.2a.3.3 0 0 1-.3-.2.3.3 0 0 1 .3-.3c.1 0 .2.1.2.3z" />
						<circle cx={848} cy={177.8} r={0.3} />
						<path d="M848.8 179.4a.3.3 0 1 1-.6 0c0-.1.1-.2.3-.2l.3.2zm-7.1-7.3a.3.3 0 0 1-.6 0 .3.3 0 0 1 .5 0z" />
						<circle cx={841.6} cy={173.2} r={0.3} />
						<circle cx={840.1} cy={172.7} r={0.3} />
						<path d="M840.8 174.3a.3.3 0 0 1-.2.3.3.3 0 0 1 0-.6.3.3 0 0 1 .2.3zm4.8-9.6s3.5 2.2.1 6.3c0 0 1.7-1.3 1.8-3.4.2-2.1-1.2-3.8-2-2.9zm13.5 5.9c-1.2.6-2.8-.5-3.6-1.5-.8-1-2.5-1.3-3.6.6-1 1.8-2.5 2.5-2.5 2.5s1.5-.8 3-2.5c1.5-1.6 2.4-.3 3.9.5 1.4.8 1.7 1 2.7.5v-.1z" />
						<path d="M858.8 170.9a1.7 1.7 0 0 1-2.2-.1c-1-.8-1.7-1.8-2.8-1.2-1.2.6-3.3 2.2-3.3 2.2s3.5-2.4 4.2-1.8c.6.5 2.2 1.8 3.1 1.4l1-.5z" />
						<path d="M856.1 172.3c-1.1-.8-2.2 1-3.1.8-1-.2-1.7-1.8-1.7-1.8s.8 1.6 2 1.3c1.3-.4 2.1-1.2 2.9-.6.7.6-.1.3-.1.3z" />
						<path d="M854.4 172.6a2 2 0 0 1-2.4-1.9s.7 1.8 2.6 1.5l-.2.4z" />
						<path d="M854.3 171.2c.1.5.1.8-.5.8s-1-.2-1-.8c0-.5 1.4-.4 1.5 0zm-7.8-3a.7.7 0 0 1-.7.6c-.4 0-.5-.2-.5-.6s0-.7.5-.7.7.3.7.7z" />
						<path d="M844 165.7s3.8 0 2 4.7c0 0 1.4-2.3.5-4-1-1.6-2.3-1.2-2.3-1.2s-.4.3-.2.5z" />
						<path d="M844 167.6c0 1 .6 1.9 1.8 2.9l.3-.4c-1.1-.9-1.7-1.7-1.7-2.5s.6-1.3.6-1.3l-.3-.3s-.7.6-.8 1.6z" />
						<path d="M844.8 168.4c.1.5.6 1 1.2 1.2l.2-.4c-.5-.2-.9-.6-1-1-.2-.8.4-1.7.4-1.7l-.4-.3s-.7 1.2-.4 2.2zm5.1 2.6s.7 1.5-.3 3.1l-1 1.6s1.2-2.3.7-3.2c-.4-1 .6-1.5.6-1.5zm14.6 15.8c3.8.7 12.5 7.5 12.5 7.5l.5-.6c-.3-.3-8.9-7-12.9-7.7l-.2.8zm3.4 9.5c.2 3.5 4 5.6 4 5.7l.5-.7s-3.5-2-3.7-5h-.8zm-9.3.8c0 3.8 3.6 8.4 3.8 8.6l.6-.5s-3.6-4.6-3.6-8.1h-.8zm-12.1.4c.6 1.3.6 1.9.4 2.2-.2.4-.6.4-.6.4l.1.8c.3 0 .9-.2 1.2-.8.4-.7.3-1.7-.4-3l-.7.4z" />
					</g>
					<g fill="#fff" stroke="#000" strokeWidth={0.2}>
						<path d="M319 277.1s0 1.7 1.4 2.7c0 0-.2-1.8.2-2.6 0 0-.7-.8-1.7 0zm2.6 1.1s.3 1.5 1.2 2.2l.5-.1s.3-2 .6-2.2c.3-.2-1.3.7-2.3.1z" />
						<path d="m323.9 278.1 1 1.6 1.2-.6-.3-1.9s-.7-.2-2 1z" />
						<path d="m328.6 278.4-1.3 1.1s-.7-.5-1.3-.4l.3-1.7s1-.7 2.3 1zm-9.4 16s-.2-2.3.1-2.5c0 0 1 .3 1.3 0 0 0 .6 1.9.4 2.6-.1.8-1 .5-1.8 0zm6-2.4s0-2 .3-2.3c0 0 2 .3 2.4-.7l.7 1.9s-2.2-.2-3.4 1z" />
						<path d="M323.1 292.4s.4-2.1.8-2.2c0 0 1 .3 1.3 0v2.5s0-1.1-2-.3zm-2.2.3s.4-1.9.7-1.9c.3 0 1.1.5 1.5.2v1.4s-1.7-.4-2 2l-.2-1.7z" />
					</g>
				</g>
				<g fill="#00a651" stroke="#000" strokeWidth={0.8}>
					<path
						d="M351 331.2s5.3 5 4 9.2c0 0 3.3-7.3-.3-9.4-3.7-2.2-3.8-.5-3.7.2z"
						strokeWidth={0.5}
					/>
					<path
						d="M344.4 336s-1.4 1.9.1 3.2c0 0-1.6 2.4-.4 4.4 0 0-1 2.1-.7 4.4 0 0-.9 3.5 1 5.1 0 0 2 1 2.9.2 0 0 1.7-2.7.6-5.4 0 0 1.3-2.3-.1-5.1 0 0 .4-1.7-.8-3.6 0 0 .8-1.2.1-2.2 0 0-2.5-2.6-2.7-1z"
						fill="#964b36"
						strokeWidth={0.5}
					/>
					<path
						d="M345.9 329.8s-6.3-12-10.7-12.5c-4.3-.5-4.6-4.8-4.6-4.8s.5 2 4 2 10.3 5 11 8.7c.8 3.8 1.5 3.3 1.5 3.3l-1.2 3.3z"
						strokeWidth={0.5}
					/>
					<path
						d="M345.9 329s2.3-15.2 12.2-15.5 6.6.8 9-.8c0 0-6.7 3.5-10.8 4-4.1.5-7.5 8.5-7.4 10 .1 1.5-2.2 4.4-3.4 3.4-1.1-1 .4-1.1.4-1.1z"
						strokeWidth={0.5}
					/>
					<path
						d="M348.1 334.6s2.3-6 6.2-4c0 0-3-5.8-8.4-.8 0 0 2.4 3.3 2.3 4.8zm-7.5-6S344 342 339 346c0 0 .1-6.9-2.9-11s3-8.6 4.6-6.5z"
						strokeWidth={0.5}
					/>
					<path
						d="M341 331s6 5.6 6.3 7.5c.4 1.9 1.7-5.6-1-7.8a13.8 13.8 0 0 0-5.8-2.5l.5 2.8z"
						strokeWidth={0.5}
					/>
					<path
						d="M330.1 345.8s.6 2.3 2 2.8c0 0 .1 1.7 1.4 2.3 0 0-.7 1.4.5 2.3 0 0-.3 3 .8 3.6 0 0 2.6-.2 3.5-1 0 0 .6-1.9-.9-3.8 0 0 .2-1.8-1.2-2.8 0 0 .4-2.5-1.4-3.4 0 0-.3-2-1.4-3 0 0-2.3 3.2-3.3 3z"
						fill="#964b36"
						strokeWidth={0.5}
					/>
					<path
						d="M333 342.9s-7.7-2.9-12 1.2c0 0 6.6.9 7.5 2.2.8 1.3 4.9-2.1 4.6-3.4z"
						strokeWidth={0.5}
					/>
					<path
						d="m330.7 347.7-1.4-1.1c-.8-.5-7.3-2.3-8.2 4 0 0-2.3-6.2 1.1-7 3.4-1 6.2 1 8.5 4m-5.1-12.7s2.4 5 3.3 5.4c.8.2 1.5-.7 1.5-.7s-3.2-4.6-4.8-4.7zm-1.8-8s-2-6.6-4.3-4.8c-2.4 1.7-1.8 6.5-1.8 6.5s-4.8-4.9-2-8.8c2.8-3.9 8.2.4 8.2 7.2z"
						strokeWidth={0.5}
					/>
					<path
						d="M329.2 340.6s0 1.3 1 1.6c.8.4 2.4 1 2.4.3s-1.2-3.6-1.7-3.3c-.5.4-1.4.4-1.7 1.4z"
						fill="#964b36"
						strokeWidth={0.5}
					/>
					<path
						d="M327.7 332.9s-.2-5.8 3.5-8c0 0 .8.2 1.2-1 0 0-3 7.3-2.2 11v.5"
						strokeWidth={0.5}
					/>
					<path
						d="M328.5 325.8s6.8-14 15-9.1c0 0-8.6 1.7-11.7 7.9l-3.2 4.6-.1-3.4z"
						strokeWidth={0.5}
					/>
					<path
						d="M324.9 331s-2-9.4-3.3-10.7c-1.3-1.2-3.4-2.6-5.9-.5 0 0 4.4-3.9 9-.6 4.7 3.3 3.7 8.4 3.7 8.4l-.5 6.5-3.2-2.9"
						strokeWidth={0.5}
					/>
					<path
						d="M332.1 342.1s-8.3-15.6-13.6-4.5c0 0-1 2.9 0 4 0 0-3-2.2-1.6-7.8 1.4-5.4 10.6-3 13.2 1.6 2.6 4.5 3.4 6.7 3 7-.4.2-1-.3-1-.3zm23.3 4.5s6-12.4 9.6-6.7c0 0 1 2.7-.6 3.9 0 0-2.3-3-4.5.6-2 3.5-1.2 3.2-1.2 3.2s-2.3.7-3.3-1z"
						strokeWidth={0.5}
					/>
					<path
						d="M364.4 343.8s3.3 1.7 2.2 5.2c0 0 4.4-8.4-1.7-9.1 0 0 1.2 2.6-.4 3.9zm.4-8.6s8 2.3 8.2 5.7c0 0 1.3-6.5-3.2-8.5 0 0-5.4.8-5 2.8z"
						strokeWidth={0.5}
					/>
					<path
						d="M368.3 324.8c3.4-6.6 7.7 2.2 7.7 2.2s1.5-7-2.8-8.2-7 14.7-7 14.7l-5 1.1s1.4-13.9 8.9-15.2l.9.2"
						strokeWidth={0.5}
					/>
					<path
						d="M362.3 328.8s-4.8-9.7-8-10.7c-3.3-1 1.8-2.5 3.8-.7 2 2 5.7 4.3 5.3 9.3l-1 2.1zm-4.9 13.4s1.4-6.6 5.2-8.6c3.7-2 7.2-1.3 7.2-1.3s-4.5 1-5.2 3.3c-.8 2.3-2 2.4-2 2.4l-5.2 4.2z"
						strokeWidth={0.5}
					/>
					<path
						d="M355.4 346.6s-2.1 4-1.6 4.7c0 0-2.3 3.2-1.4 4.9 0 0 2.3 1.7 3.3 1 0 0 2.6-3.7 1.9-5.7 0 0 1.7-2.4 1-3.9 0 0-2.5.2-3.2-1z"
						fill="#964b36"
						strokeWidth={0.5}
					/>
					<path
						d="M344.4 339.5c.1 0 1.4.7 2.3.4l.6-.5-.5-.3c-.3.6-1.7.1-2.2-.1l-.2.5zm-.2 3.9-.1.5c.1 0 2.6.5 3.9-.6l-.4-.4c-1 1-3.4.5-3.4.5zm-.7 4.4-.3.4s3 2.2 5-.1l-.5-.4c-1.6 2-4 .2-4.1 0zm-11.4.6v.3c.2 0 2.7-1 2.9-2.9h-.3c-.2 1.7-2.6 2.6-2.6 2.6zm1.4 2.3v.3c.1 0 2.4-.2 2.8-1.8h-.3c-.3 1.4-2.5 1.5-2.5 1.5zm.5 2.4v.3s2.7.1 3.5-1.3l-.2-.2c-.8 1.3-3.3 1.2-3.3 1.2zm19.6-1.6s1.2 1.1 2.5 1a2.3 2.3 0 0 0 1.7-.8l-.4-.3a2 2 0 0 1-1.3.6 3 3 0 0 1-2.1-1l-.4.5z"
						fill="#000"
						stroke="none"
					/>
				</g>
				<g fill="#964b36" stroke="#000" strokeWidth={0.3}>
					<path d="M431.4 360.6a1.1 1.1 0 0 0-.4.3l.4-.3zm9.2-2.3c0-.2-.1-.1-.2-.2l-.4-.8h-.3l-.7-1.4a.4.4 0 0 0 0-.2 7.6 7.6 0 0 0 0-.4c-.1-.1-.2 0-.3-.2v-.7l-.1-.4v-.6a2 2 0 0 0 0-.4c-.2-.4-.4-.7-.4-1.2l.1-1-.2-1 .2-.9v-5.3c-.2-.4-.1-.7-.2-1v-2l-.1 2.5c0-2.2-.2-4.3-.2-4.3l-3.3-1.5s-.3 6.1-.2 7c0 .8.3 6.7.2 7.4-.2.7-.5 4.2-.5 4.2s-1.6 1.2-2.3 2.5c-.6 1.2-.5 1.7-.7 1.7l1.6-.3-1.2.8a.7.7 0 0 1 .7.1l.3.2.2-.2.7.4.4-.3.2-.4h1.1c.3 0 .5-.4.8-.7.3-.2.5-.3.8-.3.3 0 .6.3.9.4.2 0 .4 0 .6-.3l.3-.6h1.9l.3.2.1-.4v-.4z" />
					<path d="m433.9 360.5.5.1.1.2a.2.2 0 0 0 .2 0l.3.1h.3l.4.1c.2.1.4 0 .6-.1.2-.2.3 0 .5.2s.2.1.3 0a1.7 1.7 0 0 1 0-.1l.3-.1.4-.1.3-.2.4.2a.8.8 0 0 1 .2.1c.2-.3.6-.4.8-.6h1.3c.1-.1.1-.2.3-.2l.7.4c.1 0 .7.2.6-.3 0-.4-.4-.1-.5-.4v-.6a.7.7 0 0 0-.4-.4h-.3l-.2-.5c-.1 0-.2.1-.4 0l-.2-.2c-.3-.3-.5.2-.7.1-.2 0-.4-.5-.6-.7 0-.1-.3-.5-.4-.4-.2.1 0 .5-.1.7-.1.1-.4 0-.4 0-.2 0-.2 0-.3.3-.3.3-.4.6-.7.6l-.5-.2c-.1.1-.2.3-.4.3a1 1 0 0 1-.4 0c-.2 0-.3-.3-.4-.4a.1.1 0 0 0-.2 0l-.2-.1c-.2-.1-.2 0-.3.2v.5l-.4.4-.4.1c-.1 0-.3.3-.4 0-.1-.4.3-1.1-.2-1 0 0-.2 0-.3.3v.6c0 .3-.6.8-.5 1 0 .3.3 0 .4 0 .1.1 0 .3.2.4.1.3.7-.4.7 0m-2.1-2.7v-.1l-.5-.2-.4.4c-.3.5-.2 1-.7 1h-.4c-.2.1 0 .5 0 .7v.3c-.1 0-.2 0-.3.2 0 .4.3.3.4.3h1l.6-.2.5-.1a2.2 2.2 0 0 0 .2-.5v-.4c0-.2.2-.1.3-.4 0-.7-.7-.2-.6-.9" />
				</g>
				<g stroke="#000" strokeWidth={0.5}>
					<path d="M440.2 338.7c0 1-.6 1.7-1.4 1.7-.8 0-1.4-.8-1.4-1.7 0-.9.6-1.6 1.4-1.6.8 0 1.4.7 1.4 1.6zm-4.5-2c0 1-.7 1.6-1.4 1.6-.8 0-1.4-.7-1.4-1.6 0-.9.6-1.6 1.4-1.6.7 0 1.4.7 1.4 1.6z" />
					<path d="M438 337.3c0 1-.6 1.7-1.3 1.7-.8 0-1.4-.8-1.4-1.7 0-.9.6-1.6 1.4-1.6.7 0 1.3.7 1.3 1.6z" />
					<path d="M435.7 338.8c0 1-.6 1.7-1.3 1.7-.8 0-1.4-.8-1.4-1.7 0-.9.6-1.6 1.4-1.6.7 0 1.3.7 1.3 1.6z" />
					<path d="M437.9 340c0 1-.6 1.7-1.4 1.7-.8 0-1.4-.7-1.4-1.6 0-1 .6-1.7 1.4-1.7.8 0 1.4.8 1.4 1.7z" />
				</g>
				<path
					d="M438.5 322.3s14-19.4 28.9.8c0 0 0 2-1.3 4l-.4-1.5-.8.2-.3-1-1.6-.1.5-2.1-1.8 1.3.3-1.5-2 2 .2-4.2-2.1 3.6.2-2.5-.7 1.1-.5-1.4-.6 1.4-1-.7v1l-1.8-1.5-.6 2-1-2.1-.2 1.4-.8-1.7-.2 1.9-2.8-1.3.6 1.8-1.4-1 .3 1-2-.4.2 1.1-2-.3.4 1-2.8-.4 1 1.1-.3.5s15.1-5 16.1 13.8l-2.7 1.4.7-1.5-.7-.5-2.3-1.8.6-2.4-.7.3-.2-1.4-.3.3-1-1.4-.2.5-.6-1.7-.6 1.2-.4-2.8-1 1.8-.1-1-.4.6-1.2-1.5-.4 1-.5-.8-.4 1-1.4-1.3v1l-.8-.8-.4.5-2.2-1.1v1l-1.2-1-.4 1s13.7 7.8 9.4 20.4l-.7 1.7-.3-4.3-1.2 2.3.8-5-.8 1-.2-2-1.1 2-.4-2.2-.5.6-.7-3.2-.7 1.4-1-3.7-.7 1.5-.5-3.1-.5 1.9-1.5-2.8-.3 1.1-.8-2.2-.5.7s-2.5 0-3.3-.7c-.8-.6-2.9 3.8-2.9 3.8l.3-2.7-1 1.8v-1.8l-1.5 5.3-.4-3.8-.9 3.3-.4-1-.2 1.4-.5-.5-.5 1.4-.8-.6v2l-.7-1-.7 3-.3-1.2v1.4l-.7-.8-.6 3-.9-1.2v2.1l.3 1.6-1-.5.4 2.7s-4-7.3.7-14.3c4.7-7 11-9 11-9l-.7-.5-.1-.7-3.8 2 .1-1.2-1 .8-.2-1.2-.6 1.1-.2-.5-.8 1.4-.5-2-.7 2.4-.6-1.7-1.3 3.6v-2.7l-1 2.8-.3-3-.8 3.5v-3.2l-1.1 3.2-.8-3-.5 2.9-.7-2.3-.8 3.4-1.1-3-.6 4.5-.8-1.8-.1 3.3-.9-2 .9 4.2-1.1-1.6.3 2.6-1.6-2.8.1 3.4-.8-1.2-.4 1.3s-.4-13 8.5-15.6c8.9-2.5 14.7.8 14.7.8l-3.4-2.8.4-.8H429l.5-1H427l.7-1-2 .3v-.6l-1.2 1 .5-1.1-1.8 1.1v-1.7l-1 1.5-.5-1.5-4 4 1.1-4.2-.7 1-.1-1-1.2 1.8-.2-1.3-.5 1.5-.4-1.7-.9 1.7-.8-1.6-.4 2.1-.7-1-.7 1.5-1-1-.1 1-2-.8.5 1.5-1.5-1.3-.4 2-.9-1-.6 2.5-.6-2.4-.7 2s7.9-20.2 27.7-7c0 0 2.2 2 2.7 3.5s0 .3 0 .3l-.3-14 .8 6 .5-2-.2 3 2-4.3s-2.3 7.3-1.5 10c0 0 1-8.5 4-9.5l-2.8 6 .8-.1-.6 1.2h.8l-1 2-.4 1 .5 1 .7-.7z"
					fill="#00a651"
					stroke="#000"
					strokeWidth={0.5}
				/>
				<path d="m436.5 330.5.4.3s1.3-1.3 3.3.4l.4-.4c-2.5-2.1-4.1-.3-4.1-.3zm-.6-6.8-.1.4 1-.4-.7 1.2 1.4-.5-1.8 2.3.5.4 2.8-3.8-1.8.6.8-1.3-1.5.7.3-2h-.5l-.4 2.4z" />
				<path d="m433.2 323.8.6 1.4-1-.4 3 5 .3-.4-.6 1.5.5.2 1.3-3.2-.5-.3-1 1.3-1.7-3 .8.3-.8-1.8 1 .7v-2h-.5v1L433 323l.3.8zm-1.8 6.4.2.5c.8-.3 1.4-.4 2-.1.5.2.7.8.7.8l.5-.1s-.2-.8-1-1.2c-.7-.3-1.5-.3-2.4.1zm2.2 5.4-.4-2.8h.5l.5 2.8zm3.9-.4-.7-2.2.5-.1.7 2.1zm1.4 1.6-.5-2.2.5-.1.5 2.1z" />
				<path
					d="M332 401s-2.4-1-3.5-.2c-1 .8-1 1.9-1.9 1.8 0 0 3.6.8 4.4-.1l1-1.2m.4.8s-1.6 2-1 3.2c.5 1.2 1.6 1.3 1.4 2.2 0 0 1.5-3.3.8-4.2l-1-1.2m-2.8-5.8s-2.5.8-2.8 2c-.3 1.4.6 2.1-.1 2.7 0 0 3.1-1.8 3.1-3a8.8 8.8 0 0 0-.1-1.5m1.3.7s1.2-2.3.4-3.4c-.7-1.1-1.9-1-1.7-2 0 0-1 3.6 0 4.4l1 1m-2.1-.9s0-2.5-1.1-3.2c-1.1-.7-2.1-.1-2.4-1 0 0 .6 3.6 1.8 4l1.5.3m4.4 4.2s2.7-.9 3 2c.1 3-.2 2-.2 2s-1.4-3.2-3-3.7l.2-.3z"
					fill="#00a651"
					stroke="#000"
					strokeWidth={0.5}
				/>
				<path d="m332.3 402.1.3 2.3h.4l-.3-2.3 1-4.9h-.5l-.9 4.9z" />
				<path d="m329.9 401.4-.2.3c1.3.5 3.1-1 3.2-1l-.2-.3s-1.8 1.4-2.8 1zm3.3-2.9-6-3 .2-.5 6 3z" />
				<path d="m328.9 397.8-.4-.3 1.2-1.3.4.4zm2-.6-1.2-2.7.5-.3 1.3 2.8zm1.9 3.4v.6c1.6-.1 2 1 2 1l.6-.2c0-.3-.7-1.5-2.6-1.4z" />
				<path
					d="M360.5 401.9c2-1.1 2.4-5.1 2.4-5.1-.4 1.4-4.1 2.9-4.1 2.9 2.7-1.7 6-9.4 6-9.4-.9 2.8-8 5-12.7 7.6-4.6 2.6-2.2 10-2.2 10a16 16 0 0 1-4.2-8.3c-.5-3.5-1.9-4.8-5-5.2-3.2-.4-5 3.1-5 3.1L331 400l4.7.2s3.4 1.1 3.4 3.8c0 2.7-3 13.3 2 19.3 3.4 4.1 16 6.5 16 6.5"
					fill="#fff"
					stroke="#000"
					strokeWidth={0.7}
				/>
				<path
					d="M351.3 410.1s1-4.8 4-4.6c3.2.2 4.1-3.5 6-4.1 1.8-.6 11.4-3.1 12.5-7.8 0 0-1 7.6-9.7 11.4 0 0 7-2.3 7.9-3.9 0 0-3.2 6.8-10.8 7.9 0 0 7.2-.6 8.2-2.5 0 0-3.2 4.3-8.5 4.8 0 0 4.9 2 6.2.3 0 0-2.7 3.2-6 3.4l.9.3s-3.2 3.7-6.6 1.2c-3.5-2.5-3.6.6-3.6.6"
					fill="#fff"
					stroke="#000"
					strokeWidth={0.7}
				/>
				<path
					d="M358.4 417.3s4 6.8 4.5 10.4c0 0 7.7 8.6 10.6 9 0 0-1.3.6-3.8-1.5 0 0 2 2.2 2.5 2.3.4 0-1.7-.2-2-.8 0 0 .8 1.3 1.4 1.5l-.6-.2s-1-.1-1.5-.5-.2 1-.2 1-1.2-.3-1.6-.7c-.4-.4.2.9.2.9l-1-.3-.8.5s0 .5-.6.1c-.4-.4-1.3 0-1.3 0s-.7.6-1 .2c-.3-.4-1.5 1.5-1.5 1.5l-5.1-12.3"
					fill="#fff"
					stroke="#000"
					strokeWidth={0.7}
				/>
				<path d="m363.2 439.6-6.4-12.3.7-.3 6.4 12.2zm5.6-.9-11-12.3.6-.5 11 12.3zm2.6-1L358.8 426l.5-.6L372 437z" />
				<g transform="translate(-207.6 158.4) scale(.66486)">
					<path d="M823.4 360.8s-1.2-2.2-2.3-1.3c-1 .8-1.6 1-1.8.9 0 0 1 0 1.7-.5.6-.6 1.6-.3 2.4 1zm-6.6-1 .7 1.4-.8 2.3.6.2.7-2.5-.7-1.6-.5.2z" />
					<path d="M823.2 360.5s-1 1-2.2.8l-1.3-.3h1.8c.7 0 1.6-.3 1.7-.5z" />
					<path d="M822.9 360.7s-1.2-1.2-2-.8c0 0 1.4-.5 2.2.7l-.2.1z" />
					<path d="M822.7 360.5s-1.3.9-2.7 0l-.1-.2h.2s1.7.7 2.6.2z" />
					<circle cx={821.6} cy={360.3} r={0.4} />
				</g>
				<path d="M339.4 420.4s-.7 1.3-.3 2c.3.7 1.9 1.1 2 2.1.3 1 .8 1 1.5.8l1-.1s-3.1-1.7-4-4.3l-.2-.5z" />
				<g fill="#964b36" stroke="#000" strokeWidth={0.5}>
					<path
						d="M438.8 395.6s5.5-7.4 10.5-5.4 8.2 2.9 8.2 2.9.1 5-2.5 5c-2.7 0-5.2-5-7.6-3.6-2.4 1.5-4.4 3.5-4.5 4.2-.2.7-6.4.9-4.1-3z"
						strokeWidth={0.3}
					/>
					<path d="M417.5 431.2s-1.5 1.6-.8 2c.7.4 2 0 2-.6s-.9-1.6-1.2-1.4z" />
					<path d="M416.3 432.8s-2.9-1.7-5.1 2.2c-2.3 3.9-4.2 10.2-5.5 11-1.3.8 12.8-6.2 13-9.1 0 0 1-3.8-.6-3.8-1.4.1-1.5.3-1.8-.4z" />
					<path
						d="M416.7 433.2s-3 .7-3.6 4.9c-.6 4.2-4.7 6.3-5 6.5m49.4-51.6s-4.5 1.6-3.7 4.7"
						strokeWidth={0.3}
					/>
				</g>
				<path
					d="M423.1 402.1s.1-10.6 8.8-10.1c1.7.1.9 2 .9 2s1.9-1.3 2.7.8c0 0 2.8-1.2 3 1.5 0 0 3-.4 2.7 2 0 0 2-.4 2 1.3 0 0 2.3-1 2 1.4 0 0 2.6-1.7 2.2 1.4 0 0 2.7-1.8 3.6 1.3 1 3-2.7 9.7-6.2 11.4"
					fill="#fff200"
					stroke="#000"
					strokeWidth={0.3}
				/>
				<path d="M447.2 402.8s1.2 8.3-3.5 11.3l.2.2c4.8-3 3.6-11.5 3.6-11.6h-.3zm-5.6 9 .2.2c3-2.9 3.6-10.6 3.6-11h-.3c0 .1-.6 8-3.5 10.8zm-2.8-1.9h.3c.4-4.7 4.2-10.2 4.2-10.2l-.3-.2s-3.8 5.6-4.2 10.4zm-2.1-1.4h.3c.5-5.7 4.3-10 4.3-10l-.2-.3s-3.9 4.5-4.4 10.3zm-3-1.9h.2c.3-6.8 4.8-10.1 4.9-10.2l-.2-.2s-4.7 3.4-5 10.4zm-2.9-1.7h.4c-.3-6.2 4.5-10 4.5-10l-.1-.2s-5 3.9-4.8 10.2zm-5-2.2h.3a10.2 10.2 0 0 1 6.9-8.5l-.1-.3a10.5 10.5 0 0 0-7 8.8z" />
				<path
					d="M418 415s-1.5-9.8 4.4-13c0 0 1-.2 1.7 1.2 0 0 3.1-1.3 3.2 1.3 0 0 1.5-1.2 2 .5 0 0 3.3-.7 2.6 1.8 0 0 2.8-.8 2.6 1.6 0 0 2.8-1 2.3 1 0 0 3-.6 2.3 1.8 0 0 3.6-.4 2.5 2.2 0 0 2.7-.7 2.1 1.4 0 0 3.6.6 2 2.8a24 24 0 0 1-9.8 7.2"
					fill="#00a651"
					stroke="#000"
					strokeWidth={0.3}
				/>
				<path
					d="M414.8 425s-2.4-8.3 2.2-10.4c0 0 .8-.2 1 .6 0 0 1-1.3 1.8-.1 0 0 2.3-1.1 2.8.6 0 0 1.6-1.3 2.4.6 0 0 1.4-.6 1.4 1 0 0 2-1 2 1 0 0 2-.8 1.6 1.3 0 0 3 .4 2 1.8 0 0 2.7.7 1.7 1.8 0 0 2.9-.3 1.3 1.6 0 0 2.2-.7 1 1.7-1.3 2.4-5.1 5-7.9 5.4"
					fill="#00a651"
					stroke="#000"
					strokeWidth={0.3}
				/>
				<path
					d="M417.7 431.4s-5.1-5-2.7-6.4c0 0 1 .3 1.4 1.4 0 0 1.3-1.8 2 0 0 0 1.8-.6 1.8.7l1.5 1s1.7 0 1.4 1c0 0 1.9-.2 1.8.8 0 0 1.6 0 1.5 1.1 0 0 2.7.5 1.5 1.9 0 0-4.9 1-8.3-.4 0 0-1.8-.6-2-1z"
					fill="#00a651"
					stroke="#000"
					strokeWidth={0.3}
				/>
				<path d="m435.2 423.2.1.3c3-1.2 8.3-8.3 8.5-8.7l-.2-.1s-5.4 7.4-8.4 8.5zm-1.7-1.3.1.3a47 47 0 0 0 8.1-8.7l-.2-.2s-5.4 7.2-8 8.6zm-1.5-.6.2.2c2.8-2.3 6.8-10 7-10.2l-.3-.2c0 .1-4.2 8-7 10.2zm-1.4-1.8h.3c.6-3.8 6-9.8 6-10l-.2-.1c-.2.2-5.5 6.2-6 10.1zm-10.8-4.6h.3c-.5-5.5 4-11.5 4.1-11.6l-.2-.2s-4.7 6.2-4.2 11.8zm2.8.4h.3c-.7-4.4 4.4-10.6 4.5-10.7l-.2-.2c-.3.3-5.3 6.4-4.6 11zm4.4 1.6h.3c0-5 4.7-10 4.7-10l-.2-.2s-4.9 5.1-4.8 10.2zm-10.5 9h.3c-1.7-4.6 1.3-10.5 1.3-10.6l-.3-.1s-3 6-1.3 10.8zm2 .4.3-.1c-1.5-4.7 1-11 1.1-11l-.3-.2s-2.6 6.5-1 11.3zm8.3 4.7.1.3c5-1.8 8.2-6.3 8.3-6.4l-.3-.1s-3.2 4.4-8 6.2zm-1-1.1.1.3c4-1.8 7.7-6.8 7.7-6.8l-.2-.2s-3.7 5-7.6 6.7zm-1-.4.2.3c3.1-2.3 7-8 7.1-8l-.2-.2s-4 5.7-7 8zm-4.9-2.9h.3a21 21 0 0 1 2.6-10.8l-.3-.2s-3.3 6-2.6 11zm2.2 1.4.2.2c3.2-2.9 4.2-10.6 4.3-11h-.3c0 .1-1.1 8-4.2 10.8z" />
				<path d="m424.3 428.9.1.3c4.5-3.3 5.7-9.6 5.8-9.6h-.3s-1.2 6.1-5.6 9.3zm.5-13.4v.8l-3.4 11 .3.1 3.4-11c-.5-5.4 4.2-11.3 4.2-11.3l-.2-.2s-4.3 5.4-4.3 10.6z" />
				<path d="M428.3 418.1c0 .2-1 7.8-5.1 10.6l.1.2c4.2-2.9 5.3-10.3 5.3-10.6 1.8-2.2 6-9.8 6-9.8l-.2-.2c0 .1-4.2 7.6-6 9.8zm-12 8.3c0 .2.7 4 1.5 5.3l.2-.2c-.7-1.3-1.4-5-1.4-5.1h-.3zm2 0c0 2 0 5-.2 5.3h.3c.2-.3.1-4.4.1-5.2h-.3z" />
				<path d="m418.4 431.8.3.2c1.3-2.9 1.7-4.9 1.7-4.9h-.3s-.4 2-1.7 4.7z" />
				<path d="m418.7 432 .1.2a6.6 6.6 0 0 0 3-4h-.3s-.5 2.4-2.8 3.7zm.4.1v.3c2.4-.2 4-3.1 4.1-3.2l-.2-.2s-1.7 3-3.9 3.1z" />
				<path d="M419.4 432.3v.3a7.6 7.6 0 0 0 5.6-2.6l-.2-.2s-1.8 2.3-5.4 2.5z" />
				<path d="M419.6 432.4v.3c.2 0 5 1 6.7-1.5l-.2-.2c-1.6 2.4-6.4 1.4-6.5 1.4z" />
				<path
					d="M310.2 254v136.4c0 44.6 80.6 71.1 80.6 71.1s80.6-26.5 80.6-71V254z"
					fill="none"
					stroke="#000"
					strokeWidth={2.8}
				/>
			</g>
			<path d="M0 0h256v256H0z" fill="#012169" />
			<path
				d="M256 0v32l-95 96 95 93.5V256h-33.5L127 162l-93 94H0v-34l93-93.5L0 37V0h31l96 94 93-94z"
				fill="#FFF"
			/>
			<path
				d="m92 162 5.5 17L21 256H0v-1.5zm62-6 27 4 75 73.5V256zM256 0l-96 98-2-22 75-76zM0 .5 96.5 95 67 91 0 24.5z"
				fill="#C8102E"
			/>
			<path d="M88 0v256h80V0zM0 88v80h256V88z" fill="#FFF" />
			<path d="M0 104v48h256v-48zM104 0v256h48V0z" fill="#C8102E" />
		</Box>
	);
}
