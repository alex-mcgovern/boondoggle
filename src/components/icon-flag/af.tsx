import clsx from "clsx";
import { utilCss } from "../../styles/utils/util_css.css";
import type { UtilCssArgs } from "../../styles/utils/util_css.css";
import { Box } from "../box";
import { flagStyles } from "./styles.css";

export function FlagAf({
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
			<g fillRule="evenodd" strokeWidth="1pt">
				<path d="M0 0h512v512H0z" />
				<path d="M341.3 0H512v512H341.3z" fill="#090" />
				<path d="M170.7 0h170.6v512H170.7z" fill="#bf0000" />
			</g>
			<g
				fill="#fff"
				fillRule="evenodd"
				stroke="#bd6b00"
				strokeWidth={0.5}
				transform="translate(2.2 86.8) scale(.84611)"
			>
				<path d="M319.5 225.8h8.3c0 3.2 2 6.6 4.5 8.5h-16c2.5-2.2 3.2-5 3.2-8.5z" />
				<path
					d="m266.7 178.5 4.6 5 57 .2 4.6-5-14.6-.3-7-5h-23l-6.6 5.1h-15z"
					stroke="none"
				/>
				<path d="M290 172.7h19.7c2.6-1.4 3.5-5.9 3.5-8.4 0-7.4-5.3-11-10.5-11.2-.8 0-1.7-.6-1.9-1.3-.5-1.6-.4-2.7-1-2.6-.4 0-.3 1-.7 2.4-.3.8-1.1 1.5-2 1.6-6.4.3-10.6 5-10.5 11.1.1 4 .6 6.4 3.4 8.4z" />
				<path
					d="M257.7 242.8H342l-7.5-6.1h-69.4l-7.5 6.1z"
					stroke="none"
				/>
				<path d="m296.4 219.7 1.5 4.6h3.5l-2.8-4.6h-2.2zm-2 4.6 1 4.6h4l-1.5-4.6h-3.5zm7 0 2.8 4.6h5.9l-4.6-4.6h-4.1zm-34.5 10.4c3.1-2.9 5.1-5.3 5.1-8.8h7.6c0 2 .7 3.1 1.8 3h7.7v-4.5h-5.6v-24.7c-.2-8.8 10.6-13.8 15-13.8h-26.3v-.8h55.3v.8H301c7.9 0 15.5 7.5 15.6 13.8v7h-1l-.1-6.9c0-6.9-8.7-13.3-15.7-13.1-6 .1-15.4 5.9-15.3 13v2.2l14.3.1-.1 2.5 2.2 1.4 4.5 1.4v3.8l3.2.9v3.7l3.8 1.7v3.8l2.5 1.5-.1 3.9 3.3 2.3h-7.8l4.9 5.5h-7.3l-3.6-5.5h-4.7l2.1 5.4h-5l-1.3-5.4h-6.2v5.8H267zm22.2-15v4.6h5.3l-1-4.6H289z" />
				<path d="M289.4 211.7h3.3v7.6h-3.3z" fill="none" />
				<path
					d="M284.7 219.8h3.2v-5.6c0-2.4 2.2-4.9 3.2-5 1.2 0 2.9 2.3 3 4.8v5.8h3.4v-14.4h-12.8v14.4zm25.6 3.3h4v3.2h-4zm-2.4-5.3h4v3.1h-4zm-3.9-5.4h4v3.1h-4zm-3.3-4.5h4v3.1h-4z"
					fill="none"
				/>
				<path
					d="m298 219.8 4.2.2 7.3 6.4v-3.8l-2.5-1.8v-3l-3.6-2v-3.3l-3.5-1.2V207l-1.7-1.5-.1 14.4z"
					fill="none"
				/>
				<path d="M315.4 210.3h1v7.1h-1z" />
				<g id="af_svg__a">
					<path d="M257.3 186.5c-1.2-2-2.7 2.8-7.8 6.3-2.3 1.6-4 5.9-4 8.7 0 2 .2 3.9 0 5.8-.1 1.1-1.4 3.8-.5 4.5 2.2 1.6 5.1 5.4 6.4 6.7 1.2 1 2.2-5.3 3-8 1-3 .6-6.7 3.2-9.4 1.8-2 6.4-3.8 6-4.6l-6.3-10z" />
					<path
						d="M257 201.9a10 10 0 0 0-1.6-2.6 6.1 6.1 0 0 0-2.4-1.8 5.3 5.3 0 0 1-2.4-1.5 3.6 3.6 0 0 1-.8-1.5 5.9 5.9 0 0 1 0-2l-.3.3c-2.3 1.6-4 5.9-4 8.7a28.5 28.5 0 0 0 0 2.3c.2.5.3 1 .6 1.3l1.1.8 2.7.7a7.1 7.1 0 0 1 2.6 2 10.5 10.5 0 0 1 1.8 2.6l.2-.8c.8-2.7.7-5.9 2.6-8.5z"
						fill="#bf0000"
					/>
					<path
						d="M249.8 192.4c-.5 3.3 1.4 4.5 3.2 5.1 1.8.7 3.3 2.6 4 4.4m-11.7 1.5c.8 3 2.8 2.6 4.6 3.2 1.8.7 3.7 3 4.5 4.8"
						fill="none"
					/>
					<path d="m255.6 184.5 1-.6 17.7 29.9-1 .6-17.7-30z" />
					<path d="M257.5 183.3a2 2 0 1 1-4 0 2 2 0 1 1 4 0zm15.2-24h7.2v1.6h-7.2zm0 3.1h7.2v13.8h-7.2zm-.4-5h8c.2-2.7-2.5-5.6-4-5.6-1.6.1-4.1 3-4 5.6z" />
					<path
						d="M292.6 155.8c-1.5.6-2.7 2.3-3.4 4.3-.7 2-1 4.3-.6 6.1 0 .7.3 1.1.5 1.5.2.3.4.5.6.5.3 0 .6 0 .7-.3l.2-.8c-.1-2-.1-3.8.3-5.4a7.7 7.7 0 0 1 3-4.4c.3-.2.4-.5.5-.7a1 1 0 0 0-.3-.7c-.4-.3-1-.4-1.5-.1zm.2.4c.4-.2.8 0 1 .1l.1.2c0 .1 0 .2-.3.4a8.2 8.2 0 0 0-3.1 4.6 16.7 16.7 0 0 0-.3 5.6 1 1 0 0 1-.2.6s0 .1-.2 0c0 0-.2 0-.4-.3a3.9 3.9 0 0 1-.4-1.2c-.3-1.8 0-4 .7-6 .7-1.8 1.8-3.4 3-4z"
						fill="#bd6b00"
						stroke="none"
					/>
					<path
						d="M295.2 157.7c-1.5.7-2.5 2.3-3 4.2a13.6 13.6 0 0 0-.3 5.9c.2 1.3 1 2 1.6 2 .3.1.6 0 .8-.3.2-.3.3-.6.2-1-.4-1.6-.5-3.4-.3-5.1.3-1.7 1-3.2 2.2-4.1.3-.3.5-.5.5-.8a.8.8 0 0 0-.2-.6c-.4-.3-1-.4-1.5-.2zm.2.5c.4-.2.8-.1 1 0l.1.3-.3.4a6.5 6.5 0 0 0-2.4 4.4c-.3 1.8-.1 3.7.2 5.2.1.4 0 .6 0 .8l-.5.1c-.3 0-1-.5-1.2-1.7-.3-1.7-.2-3.9.3-5.7.5-1.8 1.5-3.3 2.8-3.8z"
						fill="#bd6b00"
						stroke="none"
					/>
					<path d="M272.3 187.4h8v11h-8zm.5 17.4h7.7v2.4h-7.7zm-.2 4.1h8v8.7h-8zm-.6 10.5h8.7v4.9H272zm1.1-16.6h7l1.4-2.4h-9.6l1.2 2.4zm9.4-8.6.1-6h4.8a17.4 17.4 0 0 0-4.9 6z" />
					<path
						d="M273.6 196.7c0 1.3 1.5.8 1.5.1v-5.6c0-1 2.4-.8 2.4-.1v6c0 1 1.7.9 1.6 0v-7c0-2.2-5.5-2.1-5.5-.1v6.7zm0 13.3h5.7v7h-5.7z"
						fill="none"
					/>
					<path d="M277.2 213h2v1h-2zm-3.5 0h2v1h-2zm2-3h1.5v3h-1.5zm0 4h1.5v3.1h-1.5zM244 139c.4 5.5-1.4 8.6-4.3 8.1-.8-3 1-5.1 4.3-8.1zm-6.5 12.3c-2.6-1.3-.7-11.5.3-15.8.7 5.5 2 13.3-.3 15.8z" />
					<path d="M238.4 151.8c4.4 1.5 8-3.2 9.1-8.7-3.6 5-9.5 5-9 8.7zm-3.3 5.1c-3.4-.9-1.4-11.7-.7-16 .7 4.5 3.1 14.5.7 16zm1.2-.3c.2-3.7 3.9-2.7 6.5-4.7-.5 2-2 5.2-6.5 4.7zm-4.2 5c-3.4-1-1.4-12.6-1.6-17.4 1 4.2 4.2 16.3 1.6 17.4zm1.6-.5c2.8.9 6.5-1 6.8-4.3-2.5 1.7-6.3.4-6.8 4.3z" />
					<path d="M229.5 166.7c-3.2.3-1.8-9.6-1.8-18.8 1.2 8.6 4.5 16.5 1.8 18.8z" />
					<path d="M230.7 166.3c2.2 1 6.1-.7 7.2-4.4-4 1.7-6.6 0-7.2 4.4zm25.6-22.2c-.6 4.9-2.6 7.7-5.5 7.2-.8-3 1.6-5 5.5-7.2zm-7.8 12.4c4.9.7 6.6-3 10-7.9-4.7 3.4-10.2 4-10 8z" />
					<path d="M247 156c-2.6-3.2 0-7.3 2-10.7-.4 5.1 1.3 8-2 10.7zm-1 5.3c-.4-3.2 5-3.9 7.4-5.6-.9 1.8-2 6.7-7.5 5.6z" />
					<path d="M244.8 161.3c-3.7-.4-2.2-6.7.5-10.1-1.1 4.8 2 8.1-.5 10.1z" />
					<path d="M242 166.6c-4.2-2-1.5-7.2 0-10.3-.6 4.1 2.8 7.2 0 10.2z" />
					<path d="M242.8 166c2.2 3 6.5-.8 7.4-5.2-3.7 3.1-6.5 2.6-7.4 5.3zm-9.6 20.3c-.4-4.3 2.8-12 .5-16.2-.3-.6.7-2.1 1.4-1.2 1 1.5 2 5.7 2.5 4.1.4-1.7.5-4.6 2-5.2 1-.3 2.3-.6 1.9 1-.4 1.4-1.2 3.4-.3 3.5.5 0 2-2 3.3-3 1-.8 2.6.6 1 1.8-4.8 4-9.5 5.9-12.3 15.2zm-8.7 64.5c-.6 0-1.3-.3-.6.6 5.7 7 7.3 9 15.6 8 8.3-1.1 10.3-3.4 16.2-6.7a14.6 14.6 0 0 1 11.2-1c1.6.5 2.6.5 1.4-.7-1.2-1.1-2.5-2.7-4-3.8a17.5 17.5 0 0 0-12.7-2.7c-6 1-11.1 4.9-17.2 6.4a25 25 0 0 1-9.9 0zm47.8 12.5c1 .2 1.7 2.2 2.3.9.8-2.3.2-4-.8-3.9-1.2.3-3.1 3-1.5 3z" />
					<path
						d="M220.6 183c-1.2-1.4-.9-1.8 1-1.9 1.4 0 4.2 1 5.3.1 1-.7.5-3.7 1-5 .2-.9.7-2 2-.2 3.6 5.8 8 12.8 10 19.6 1 3.8 0 9.8-3.4 13.8 0-3.4-1.2-5.7-2.7-8.6-2-3.7-9.1-14-13.2-17.9z"
						stroke="none"
					/>
					<path d="M235.5 213.4c4 0 4.7-5.3 4.7-6.8-2 .4-5.4 3.7-4.7 6.8zm34.5 51.9c2.8.6 2.7-6.2-.2-9.1 1.3 4.4-2 8.4.1 9zm-1.2-.1c.2 3.2-8-.4-10-3 4.8 2.1 9.8.4 10 3zm-3.5-4.6c.3 3.1-7 .3-9.3-2.1 4.9 1.6 9-.5 9.3 2zm1.3.4c2.9.7 2.4-6.4-.4-8.8 1.4 4.7-1.8 8.1.4 8.8zm-3-4.3c2.9.7 1.2-5.4-.9-7.8.4 4.4-1 7.5 1 7.8zm-1.5 0c.3 3.2-5.4.8-7.6-2.3 4.8 1.5 7.3-.3 7.6 2.3zm-1.5-2.5c1.8-1.3-.1-4.8-3.7-4.6.4 2.1 1.6 5.9 3.7 4.6zm14 14.7c.1 3.2-8 1.6-10.6-1.8 5.2 1 10.3-.8 10.5 1.8zm-32.4-5.8c.3 3.2-8.6-.4-10.8-3.4 4.7 1.6 10.5.8 10.8 3.4zm5.4 1.3c1.9-1.3-1.9-4.7-5-5.5.4 2.1 3 6.8 5 5.6zm.6 2.3c.2 2.9-9.5 1.3-12-1.4 8.3 1.5 11.7-1.1 12 1.4z" />
					<path d="M252.8 268.6c1 2.7-8.3 2-11.6.5 5.3 0 10.8-2.4 11.6-.5z" />
					<path d="M257.1 270.6c1 2.4-7.6 2.4-11.8 1 5.6 0 10.8-3.4 11.8-1zm6.3 1.3c1.6 2.9-7.6 3.1-10.5 1.7 5.2-.7 9.2-4 10.5-1.7zm-10.7-4.9c-2.9 1.8-2.7-3.6-5-7.3 3.6 3.3 7 5.6 5 7.3z" />
					<path d="M257.9 269c-2.4 2.1-4.4-5.3-6.6-9.5 3.6 4 8.8 7.7 6.6 9.4zm6.8 2c-2 2.4-8-7-10.2-12 3.3 3.9 11.8 10 10.2 12zm-5.8 7.2c-1 3.6-16.2-3.4-18-7.1 8.8 4.6 18.2 3.6 18 7zm-48.7-73.8c-.4-.5-1.4 0-1.2 1.1.3 1.5 2.5 9.2 6.3 11.8 2.7 2 17 5.1 23.4 6.5 3.6.7 6.5 2.5 8.9 5.3a94.4 94.4 0 0 0-3-9.8c-1.2-3-4.4-6.2-7.8-6.3-6.1-.3-14.1-.8-20-3.3a16 16 0 0 1-6.7-5.3z" />
					<path d="M245.5 234.9c2 1.4 4.1-3.7 1.7-8.6-.1 4.7-3.8 6.3-1.7 8.6z" />
					<path d="M247.4 239.6c2.7.8 3.5-4 1.8-7.8.3 4.1-4.3 6.6-1.8 7.8z" />
					<path d="M249.5 243.4c2.6 1.3 3.5-3.6 1.7-7.1.2 4.5-3.7 5.9-1.7 7z" />
					<path d="M248.4 243.7c-1 3-7-2.7-8-5.8 3.7 3.7 8.7 3.2 8 5.7z" />
					<path d="M245.7 239c-1.2 3-8.7-5-10.4-8.7 3.7 3.7 11.2 6.5 10.4 8.6z" />
					<path d="M244.2 234.3c-1.2 3.5-9.3-5.8-11.7-9.1 4 3.6 12.6 6.6 11.7 9.1zm-.3-3.4c3-.6-.1-3-3.7-6.9-.1 4.1.5 7 3.7 6.9z" />
					<path d="M239 228.5c1.3-1.3-1.1-1.9-4.1-5.3-.5 2.3 2.8 6.5 4.2 5.3zm14 15.2c1.6 1 2.6-2.3.7-5.2-.5 3.2-2.1 4-.7 5.2zm-34.2-20.3c-3.3 2-8.6-6-10-9.3 2.9 3.8 10.6 7.2 10 9.3z" />
					<path d="M221.7 228c-1.9 2-7.7-3.5-9.7-6.3 3 2.7 10.5 3 9.7 6.3z" />
					<path d="M224.8 232.2c-.6 2.8-9-3.5-11-6.5 3.6 3.5 11.6 3.2 11 6.5z" />
					<path d="M223.5 235.3c-1.3 2.5-8.2-3.8-9.9-7 4.3 3.6 11 4.5 10 7zM220 223c2.1-2.3 1.2-3.4-.4-7-.8 3.7-2.1 5.2.4 7zm2.9 4.3c4 .2 0-4.6-1-8.7.4 4.6-1 8.3 1 8.7z" />
					<path d="M225.4 231.1c2.7-.6 2-4.5-.2-9.2.5 5.1-2.3 8 .2 9.2zm-1 7.7c-1 3-8.8-4-10-6.8 4 3.4 10.7 4.5 10 6.8z" />
					<path d="M229.1 243.6c-1.1 3-9.3-3.2-11.8-6.6 4.9 4 12.4 3.6 11.8 6.6z" />
					<path d="M233.9 248.5c-1.3 4.3-9.9-2.6-12.4-6 5.4 4.2 13 3 12.4 6zm-8-11c2.3 1.1 3.2-5.4 1.9-10.1 0 5-4.7 8.8-2 10z" />
					<path d="M229.8 242.7c2.8.8 2-6.3-.5-11-.3 4.7-2.3 9 .5 11zm5 4.9c3 .1 1-6.1-1.6-9.6.4 4.5-1 9 1.6 9.6zm-5.5 2.6c-1 1.6-3.2-1.3-7-3.5 3.4 1 7.4 2 7 3.5zm-1.8-52.7c3-2.2.7-6.2 0-10-1 3.6-3.4 8.4 0 10zm0 5.3c-4.5-.5-3.8-6.1-4-9.7 1.4 4.9 5 5.7 4 9.8zm.6-.7c3.7-.2 3.5-4.4 3.7-8.6-1.9 3.9-4 4.5-3.7 8.6z" />
					<path d="M228 207.3c-3 .3-4.4-2.6-5-7 2.7 4.1 5.1 2.8 5 7zm1-.3c3.7.5 3-3.8 3-7-1.2 3-4.2 4-3 7z" />
					<path d="M223.2 205.2c.3 2.8 2.1 7.6 5 6.5 1.1-3.4-2.6-4.1-5-6.5z" />
					<path d="M229 212c-1.2-2.4 3-3.7 3.8-6.9.5 4.6.1 7.6-3.8 7zm-11.9-29.2c2.3-2.4.3-6.4-.4-10.2-1 3.6-2.5 8.4.4 10.2zm0 4.6c-4 .5-5-7.7-5.5-11.3 1.4 4.9 6 7 5.5 11.4zm.8 0c2.8-1.5 2.2-4.7 3-7-1.8 2.9-3.6 3.3-3 7z" />
					<path d="M217 192.8c-4.1.3-6.6-8.8-6.8-12.4 1.3 4.9 7.4 7.5 6.9 12.4zm.9-.2c4-.9 3.5-3.5 2.9-7.6-1.3 4.2-3.5 3.3-2.9 7.6z" />
					<path d="M217 198c-4.6.8-4.3-6.6-8-11.9 3.2 4 9 9 8 11.9zm1-.3c3.6.2 4-5.1 3.8-7.3-.9 2.2-5 4.2-3.7 7.4z" />
					<path d="M209.8 192.3c1.7 5.7 4.2 11.4 7.2 11 1.5-3.3-2.9-3.7-7.2-11z" />
					<path d="M218.1 202.4c-1.2-2.5 3-3.7 3.8-6.9.5 4.6.1 7.6-3.8 6.9zm-7.1-3.6c2.5 5.1 3.6 11 7 10.1 1.3-4-3.8-4.8-7-10.1z" />
					<path d="M218.7 208c-1.5-2.8 2.7-3.7 3.8-7.4.5 4.8 0 8.3-3.8 7.3zm7.2-34.5c2.4.6 5-2.1 4.1-6.2-2.8.6-4 3.2-4.1 6.2zm-7.9-2.1c.2 1.2 1.7 1.3 1.2-.4a5.3 5.3 0 0 1 0-3.4 7.5 7.5 0 0 0 0-4.6c-.4-1-1.8-.4-1.2.4.6.9.7 2.8.2 3.7-.6 1.3-.4 3-.2 4.3zm22.9 16c-1 1.3-2.9.4-1.4-1.5 1.2-1.5 3-2.8 3-4.4.2-2 1.3-5 2.4-6.1 1.1-1.1 2.4.4 1.2 1.2-1.3.8-2.2 4.4-2.1 5.8-.1 2-2 3.5-3.1 5zm-3-2.3c-1 1.4-2.4.5-1.6-1.7.7-1.5.8-3.5 1.6-4.6 1.2-1.7 3-3.1 4.1-4.2 1.2-1 2 0 1 1a27 27 0 0 0-3.3 4c-1.4 2.2-.8 4-1.8 5.5zm-15.7-7.2c-.1 2 1.5 2.4 1.4-.4 0-3-2.2-5.8-1-10.3.8-2.2.8-6.3.4-8.4-.4-2.2-2-.8-1.3.9.6 2-.1 5.6-.6 7.5-1.5 5.4 1.2 8 1 10.7zm4.3-11c-.2 1.9-1.8 2-1.3-.5.4-2 .4-3.6 0-5.3-.6-2.1-.4-5.7 0-7.2.5-1.6 2-.7 1.4.5a9.9 9.9 0 0 0-.3 5.9c.6 2 .5 4.8.2 6.7zM210.9 204c.8.9 2 .3 1-1-1-1-.7-1.2-1.3-2.4-.6-1.4-.5-2.1-1.2-3-.7-1-1.6 0-1 .7.8 1 .6 1.6 1 2.5 1 1.5.7 2.3 1.5 3.2zm20.4 24.6a8.6 8.6 0 0 1 4.4 6.7 16 16 0 0 0 2 7.1c-2-.5-3-3.7-3.3-6.8-.3-3.2-2-4.5-3-7zm5.1 5.9c1.7 3.1 4 4.3 4.2 6.6.2 2.7.4 2.8 1.1 5.4-2-.5-2.5-.7-3-4.7-.3-2.8-2.6-4.7-2.3-7.3z" />
					<path
						d="M289 263.3c1 1.8 2 4.5 4 4 0-1.3-2.1-2.3-4-4zm3 .6c3.7 1.6 7 1.2 7.5 3.6-3.6.4-5-1-7.6-3.6zm-16.1-12.7a14 14 0 0 1 5 7.7 29 29 0 0 0 3.6 7.8 13 13 0 0 1-5.3-7.4c-.7-3-1.6-5.3-3.3-8zm3.1 0c2.8 2.2 5.4 4.8 6.2 7.9.8 2.9 1.3 5.1 3.2 8-3-1.9-4.1-4.7-5-7.8-.7-3-2.5-5.2-4.4-8zm9.2 7.3a1.1 1.1 0 0 1 .7-1.2 33.4 33.4 0 0 1 2.6-.8c1-.3 1.6.4 1.6.9v2c0 .7-.2.8-.7.9-.7.1-1.7.2-2.4.7-.6.4-1.2.1-1.5-.5l-.3-2zm10.6 0c0-.6-.2-1.1-.6-1.2a5.4 5.4 0 0 0-2.4-.4c-1 0-1.1.2-1.1.6v2.1c0 .8 0 .8.4 1 .7 0 1.8 0 2.5.6.5.3 1 0 1.1-.6l.1-2.1z"
						stroke="none"
					/>
				</g>
				<use
					height="100%"
					transform="scale(-1 1)"
					width="100%"
					x={-600}
					xlinkHref="#af_svg__a"
				/>
				<g stroke="none">
					<path d="M328.5 286.6c0 1.2.2 2.2 1 3.1a19 19 0 0 0-13.8 1.1c-1.8.8-4-1-1.9-2.7 3-2.3 9.7-1 14.7-1.5zm-57.5 0a7 7 0 0 1-.4 3c4.4-1.7 9.1-.2 13.6 1.6 3 1.3 3.3-1 2.8-1.7a6.5 6.5 0 0 0-5-2.9h-11zm3.8-21.7c-1.3-.5-2.7 0-4 1.4-4.3 4.2-9.4 8.3-13.5 11.6-1.5 1.3-3 3.7 3.4 6 .3.2 5 2 8 2 1.3 0 1.3 1.8 1 2.3-.5 1-.1 1.4-1.1 2.3-1.1 1 0 2.1 1 1.3 3.6-3.2 9.6-1.1 15.3.7 1.4.4 3.8.3 3.8-1.6 0-2 1.5-3.4 2.4-3.5 2.4.4 14 .5 17.5.1 2-.3 2.2 2.9 3.3 4 .8.9 3.7 1.1 5.8.2 4-1.8 10-1.8 12.5 0 1 .7 1.9 0 1.3-.7-.8-1-.7-1.6-1.1-2.4-1-2-.2-2.4.8-2.5 11-1.5 14.6-5.2 11.2-8.3-4.4-3.8-9.2-7.7-13.4-12.2-1.2-1.2-2-1.7-4.3-.7a66.5 66.5 0 0 1-25.3 5.9 76 76 0 0 1-24.6-5.8z" />
					<path
						d="m326.6 265.5-1.6.4c-9 3.2-17.2 5.4-25.7 5.4-8.3 0-17-2.4-24.9-5.6a2.3 2.3 0 0 0-1.5 0c-.5.1-1 .4-1.3.7a115.5 115.5 0 0 1-11.8 10.3c-.7.5-.6 1.8.5 2.2 8.3 3 16.4 8.5 39.6 8.3 23.5-.2 31.8-5.6 39.2-8.1.5-.2 1-.5 1.3-1a1 1 0 0 0 .1-.8 2 2 0 0 0-.6-.8c-4.3-3.5-8.8-6.3-11.8-10.4-.3-.5-.9-.6-1.5-.5zm0 .5c.5 0 1 0 1.1.3 3 4.3 7.7 7 11.9 10.5l.4.7a.5.5 0 0 1 0 .4c-.1.3-.6.6-1 .7-7.6 2.6-15.7 8-39 8.2-23.2.2-31.2-5.3-39.5-8.3-.8-.4-.7-1.2-.4-1.4 4.2-3.2 8.2-6.8 11.8-10.4a2.5 2.5 0 0 1 1.1-.6h1.2a68 68 0 0 0 25 5.6c8.7 0 17-2.2 26-5.3a6.7 6.7 0 0 1 1.5-.4z"
						fill="#bd6b00"
					/>
					<path d="M269.7 114.6c0-1.4 2-1.5 1.8.4-.3 2.3 4.5 8.3 4.9 12 .3 2.5-1.5 4.6-3.2 6a6.6 6.6 0 0 1-6.8.5c-.9-.8-1.7-3.3-1-4.3.2-.3 1.3 3.7 3.7 3.7 3.3 0 6-2.5 6-4.7.2-3.8-5.3-9.8-5.4-13.6zm9.5 9.4c.6-.4 1.4 1.3.8 1.7-.5.3-1.5-1.3-.8-1.8zm1.5-3.5c-.3.2-.8 0-.7-.2a12 12 0 0 1 3.6-3.3c.4-.2 1 .4.8.7a11 11 0 0 1-3.7 2.8zm12.6-10c.3-.6 2.1-1.3 2.6-1.7.4-.5.6.4.4.7-.3.7-1.9 1.7-2.6 1.8-.3 0-.6-.4-.4-.7zm4.3.3a8.3 8.3 0 0 1 2.5-3.4c.5-.3 1.3 0 1.1.4a9 9 0 0 1-2.9 3.3c-.3.3-.8 0-.7-.3zm-3.7 2.7c-.3.2-.1.7.1.8.6.2 1.5.2 2 0 .6-.4.3-2.9-.5-1.6-.6.8-1 .6-1.6.8zm-7.3 5.6c-1.3-1 .4-2.4 1.7-1.4 2.7 2-4 9.8-7.6 13.4-.7.7-1.3-1-.4-1.9a33.7 33.7 0 0 0 6.7-7.6c.4-.5.7-1.6-.4-2.5zm15.3-6.6c.1-1-1.6 0-1.6-1.3 0-.7 1.9-1.2 2.7-.4 1.3 1.4.3 3.7-2 3.9-1.8 0-5 2.7-4.5 3.2.5.7 5.4 1.1 8.3.7 1.8-.3 1.4 1.3-.4 1.5-1.8.2-3.2 0-4.8.6-2 .5-2.8 3-3.9 4-.2.2-.8-.8-.6-1.2.8-1.2 2-3 3.4-3.6.8-.3-2.4-.4-3.4-.7-.8-.2-.6-1.3-.3-1.9.4-.8 3.4-3.9 4.7-3.8 1.1 0 2.3-.3 2.4-1zm5 .2c.6-.5 1-1.3 1.5-1.8.3-.3.9 0 .8.8-.1.7-1 1.2-1.5 1.7-.5.3-1-.4-.7-.7zm6.5-2.3c.9 0 1 1.6.2 1.8-.6.2-1-1.7-.2-1.8zm-2.1 5c0 1.5.7 1.4 2 1.3 1.3 0 2.4 0 2.4-1.2 0-1.3-.7-2.5-1-1.6-.1.8-.3 2.2-.8 1.6-.4-.5-.2-.6-1 .2-.5.5-.5-.2-.8-.6-.2-.3-.8.2-.8.4zm-9.2 7.2c-.3 1.9 0 4.5.9 4.5 1.2 0 3.6-4 4.8-6.2.7-1.2 1.8-1.4 1.3-.1-.7 1.9-.6 6 0 7.2.4.6 3-.6 3.4-1.5.8-1.7.1-4.8.4-6.7.1-1.2 1.3-1.5 1.2-.3a75.6 75.6 0 0 0-.1 7.5c0 1 2.9 2.4 3.3-.6.2-1.8 1.2-3.7 0-5.7-.8-1.3 1.1-1.2 2.1.6.7 1.2-.6 3.2-.5 4.7 0 2.4-1.8 3.8-3.1 3.8-1.2 0-2-1.5-3-1.5s-2.2 1.7-3 1.6c-3.6-.2-1.7-5.3-2.8-5.4-1.2 0-2.5 5-4 4.9-1.4-.2-3-4.2-2.3-5.8.5-1.6 1.5-2 1.4-1zm16.9-8c-1.7-1 0-3.7.9-2.8 1.6 2 3.2 6.5 4.4 6.9.7.2.6-3.4 1.1-5 .4-1.3 1.8-.9 1.6.7-.1.5-2 6.4-1.8 6.6a47.1 47.1 0 0 1 3.3 7.8c.3 1.2-1.1.4-1.3.2-.9-1.4-2.4-6.5-2.4-6.2l-1.7 7.7c-.2 1-1.7.8-1.3-1 .3-1.4 2.3-8.3 2.2-8.6a17.2 17.2 0 0 0-5-6.3z" />
					<path d="M322 131.2c-.4 0-1.2 1 1.2 1.5 3.1.6 6.6-.5 7.6-3.6 1.3-3.7 2-7.2 2.7-8.5.8-1.5 1.8-1.4 1-3.6-.5-1.7-1.5-1.2-1.7-.3-.5 2.3-2.6 10-3.3 11.3-1.2 2.6-3.7 3.6-7.5 3.2z" />
					<path d="M328.4 119c-.4-.7-1.2 0-1 .7a1.2 1.2 0 0 0 1.2 1c.7 0 2.2.1 2.2-1 0-.8-.7-1.5-1.1-.6-.5.8-1 .7-1.3 0zm.7-3c-.2.2 0 1.1.3 1a7 7 0 0 0 3.3-.8c.2-.2.1-.7-.2-.7-1 0-2.6 0-3.4.5zm8.8 2.3c.8-1.2 2.8-1.3 2 .4a614.3 614.3 0 0 1-6.3 12.3c-.8 1.4-1.4.7-.8-.4.7-1.4 4.9-12 5.1-12.3z" />
					<path d="M330.2 133c-.2-.8-1.5-2-1.3.2.2 3.8 5.5 2.6 7 1.3s.3 4.3 2.2 4.9c1 .3 3-1.1 4-2.4 2.7-3.5 4.5-8.6 7-12 1-1.4-.5-2.4-1-1.3-2.4 3.8-5.2 11.6-8.3 13.6-2.5 1.6-1.7-2-1.8-3.2-.1-.8-1.1-2-2.4-.9a5.5 5.5 0 0 1-3.7 1.2c-.7 0-1.4 0-1.7-1.4z" />
					<path d="M339.6 126c0-.3-1.1-.4-1 .7 0 .8 1 1 1.1 1 1.5-1.2-.3-.6-.1-1.8zm-2.3 4.4c-.3 0-.6 1 .2 1.1l3.9-.2c.4 0 .6-.9-.4-.8-1.2 0-2.7-.3-3.7 0zm-62-16.6c.5 0 1.6 1.4 1.5 1.9 0 .2-1.2 0-1.5-.3-.3-.3-.2-1.6 0-1.6zm-5.3 10.4c-1 .6.2 1.7 1 1.2 2.8-1.9 7-3.8 8-7.5.3-1.2 1.4-3.1 2.5-3.5 1-.5 2.6 1.9 3.6 0 .6-1 2.7.7 3.2-.4.6-1.3.3-2 .3-3.4 0-.8-.7-1-1.2.3-.2.6 0 1.2-.1 1.6-.2.2-.6.4-1 .2-.2-.2 0-.7-.6-1-.2 0-.6-.1-.8.2-.7 1.3-1 2.5-2.1 1-.9-1-1.4-3.1-2-.3-.2 1-1.7 2.4-2.6 2.4-1.1 0-.8-3-3.2-2.5-1.3.3-1.2 2.7-1 3.5.3 1.3 4 .4 3.7 1.2-.6 2.7-4.4 5.4-7.7 7zm-22.7 13.2c-.1.5.5 1.7 1.1 1.8.6 0 1-1.3.8-1.8-.2-.3-1.8-.3-1.9 0zm3.3 4.9c-.4-.4-1.6.7-.6 1.5.5.5 2.5 1.1 3 .2.8-1.2-.7-5.5 0-6 .5-.5 2.8 2.8 4 3 2.7.4 2-4.6 5-4.2 1.9.2 2.1-2.2 1.8-3.8-.2-1.5-2.6-3.6-3.7-4.6-1.4-1.2-2.1 1-1.2 1.6 1.2 1 3.3 2.9 3.6 4.1.1.6-1.4 1.8-2 1.5-1.4-.8-2.6-4-3.8-4.7-.4-.2-1.4.3-1 1.3.6 1.1 3 2.7 3.1 3.9.1 1-1 3.2-1.8 3.2-.9 0-3-2.7-3.7-4-.4-.5-1.5-.5-1.7.4a22 22 0 0 0 .5 5.5c.2 1.6-.9 1.7-1.5 1.1zm-4-8.6c-.4.4.8 1.2 1 1 .4-.4 2.1-2.3 1.8-3-.3-.6-2.6-2-3-1.3-.7 1.1 2.2 1.7 1.7 2a7 7 0 0 0-1.5 1.3zm4.1-8.4s.8 2.5 1.4 1.4c.4-.7-1.4-1.4-1.4-1.4zm1.2 4c-.2 0-1 .7-.5 1 .8.4 2.9.8 2.4-.7-.3-.9 3.2 0 2.3-2.4a3.7 3.7 0 0 0-1.7-1.7c-.4 0-1.5.5-.8.9.5.2 2 1.1 1.5 1.7-.7.6-1.1-.3-1.9-.1-.4 0-.1 1.2-.4 1.5 0 .2-.7-.4-.9-.3zm5.5-9.5a3.5 3.5 0 0 0-1.2 2c0 .2.3.6.5.5a3.2 3.2 0 0 0 1.2-1.9c0-.3-.2-.8-.5-.6zm2.8-.3c-.8-1 1-2.6 1.7-.5.5 1.3 5.5 7.9 6.5 10.1.8 1.5 0 2.1-.9 1-2.5-3.2-4.6-7.2-7.3-10.6zm5.2.1c.9-1 2.7-3 2.2-4-.4-1-1.5-1-1.7-.7-1 1.3.8 1 .5 1.4-.5 1-1 1.6-1.3 2.6-.1.3.1.9.3.7zm77.8 3.2c-.7-.5.6-3 1.5-2 2.3 2.7 3.4 11.6 4.1 18.3 0 0-1 .9-1 .7 0-3.5-1.5-14.4-4.6-17zm-53.1-8.6c-.8-1.8 1.1-2.4 1.4-1.2 1.3 5.8 4.5 10.2 7 14.1.7 1.2 0 2-1.7.8-1.2-.8-2.5-3.9-3-4-1.2-.2-3.8 5-9.1 3.5-1.4-.4-1.3-4.5-1.4-6.3 0-.9 1-1 1 0 0 1.7 0 5.2 2.1 5.4 1.8 0 5.6-2.4 6.4-4.4.8-2-1.9-5.9-2.7-8z" />
					<path d="M344.6 138.4c.4-1.2 6.1-10.8 6.9-12.9.4-1 2 1.8.4 3.3-1.4 1.2-5.5 8-6.3 10.4-.4 1-1.4.5-1-.8z" />
					<path d="M354.3 129.3c1-4 3.6.6 1.3 2.8-3.4 3.4-4.5 9.9-10 10.9-1.4.3-4-.7-4.8-1.3-.3-.2.2-1.6 1.1-.9 1.3 1 4.1 1.3 5.6.1a25.4 25.4 0 0 0 6.8-11.6zm-57 12.7c-.3.3-1 .3-1.1.7-.3 1.4 0 2.2-.3 3.6s-1.3 1.4-1.2.3c0-1.4 1.3-3.5.4-3.6-.6-.1-1-.9-.4-1.3 1.1-.7 1.7-.6 2.4-.4.3.1.4.5.2.7z" />
					<path d="M296.5 140c-1.4 1.4-2.8 1.9-4.1 3.5-.6.6-.5 1.5-.9 2.4-.3.9-1.4 1-1.7.9-.5-.4-.4-2-1-1.2-.6.9-.9 2-1.7 2-.7 0-2-1.5-1.3-1.5 2.3-.3 2.2-2 3-2.2 1-.1 1 1.5 1.7 1.2.4-.2.7-2.1 1.2-2.6 1.5-1.6 2.7-2.4 4.3-3.6.7-.6 1.3.5.5 1.2zm5.3 5c-1.2.2-1 1.7-.6 1.8.5.3 1.4.4 1.7-1.3.2-.7.3 3.5 1.8 1.9 1-1 3.1.2 4-1 .7-.9 1-1.5.4-2.7-.2-.3-1-.2-1 .7 0 .8-.5 1.7-1.3 1.6-.4-.1.2-1.9-.2-2.4a.5.5 0 0 0-.7 0c-.3.4.3 2.2-.6 2.4-1.2.2-.6-1.2-1-1.4-1.7-.8-1.8.2-2.5.3zm9-3c.9-.2.6-.2 2-1.3.5-.4.6.8.5 1.3 0 .7-1 .2-1.3.9-.4.9-.2 3-.4 3.8 0 .4-.8.4-.8 0-.2-1 .1-2 0-3.3 0-.4-.5-1.1 0-1.3zm-5-2.5c-.2.9-.2 1.6-.2 2.3 0 .5 1 .2 1 .1 0-.8.2-2 0-2.3-.2-.1-.7-.3-.8-.1z" />
					<path d="m299.5 130.2-1.4 5.6-2-3.8v3.9l-4.4-5.2 1.5 5.6-4-3.4 2.2 3.8-7-4.5 4.4 5.2-5.6-2.8 4 3.4-9-3.4 8.7 4.3a29 29 0 0 1 12.6-2.6c4.9 0 9.3 1 12.5 2.6l8.8-4.3-9 3.4 4-3.4-5.5 2.8 4.3-5.2-7 4.5 2.2-3.8-4 3.3 1.5-5.5-4.3 5.2V132l-2 3.8-1.5-5.6z" />
				</g>
			</g>
			<path
				d="m249 299.7-.1 2.2h-.4v-1.5a7.4 7.4 0 0 0-.4-1.3 5.8 5.8 0 0 0-.5-1 11.3 11.3 0 0 0-.8-1.1l.7-1.8a5.3 5.3 0 0 1 1.1 2 7.5 7.5 0 0 1 .5 2.5m5.5-3.4c0 .6-.1 1-.3 1.2-.2.3-.6.5-1 .6l.2 1.1a5.3 5.3 0 0 1 0 1.7v1h-.4v-1a4.4 4.4 0 0 0-.2-.8 28.8 28.8 0 0 0-.3-.8 8.4 8.4 0 0 0-.6-1.2l-.8-1.3.5-1.6.8.9.7.2c.7 0 1-.3 1-1h.3a8 8 0 0 0 0 .5v.5m5.1 3.9-.4 1.7-.6-.6a3.5 3.5 0 0 1-.3-1 9.9 9.9 0 0 1 0-1.4 3 3 0 0 1-.9.1c-.4 0-.7 0-1-.3a1 1 0 0 1-.4-.8c0-.7.2-1.3.6-1.8.3-.6.7-.9 1.2-.9.3 0 .6.1.7.3l.3.8v1.6c0 .7 0 1.2.2 1.4 0 .3.3.5.6.9m-1.5-2.9c0-.4-.3-.6-.7-.6a.8.8 0 0 0-.4.1c-.2.1-.2.2-.2.3 0 .2.2.3.8.3a2.2 2.2 0 0 0 .5 0m6.9 2.3-.2 2.1c-.4-.3-.8-.8-1.1-1.5a20 20 0 0 1-1.1-3.3 41.3 41.3 0 0 1-.8 3l-.6 1.3a2 2 0 0 1-.6.6v-2l.8-1.2a6 6 0 0 0 .6-1.4 16 16 0 0 0 .3-2h.4l.7 2a6.7 6.7 0 0 0 1.6 2.4"
				fill="#fff"
			/>
			<path
				d="M280.5 319.2c.3.3.5.6.6 1l.2 1.2h-.6a6.2 6.2 0 0 0-.7-1.1 15.2 15.2 0 0 0-1-1l-1.3-1.2a27.3 27.3 0 0 0-1.6-1.3l-.5-.4-.2-.6a9 9 0 0 1-.1-1.3l2.1 1.7a35.3 35.3 0 0 1 2 1.8l1.1 1.2m-7.6-4.6-.1 1.6-2.5-.1.2-1.6h2.4m6.7 7.1-6 1.9-1.2-1.6 5.2-1.5a6.3 6.3 0 0 0-.5-.7l-.7-.5a1.1 1.1 0 0 1-.4.8 2 2 0 0 1-.8.5 2.7 2.7 0 0 1-1.4 0c-.5 0-.8-.3-1-.6a3.1 3.1 0 0 1-.5-1.7c0-.8.2-1.3.6-1.5.6-.2 1.4 0 2.5.5a6.5 6.5 0 0 1 2.4 2l1.8 2.4m-4.7-3.2a3.1 3.1 0 0 0-.6-.2.9.9 0 0 0-.5 0 .5.5 0 0 0-.4.3.4.4 0 0 0 0 .4l.4.2h.5a.9.9 0 0 0 .3-.3l.3-.4m-6.4-1.2-.4 1.6-2.5-.3.4-1.5 2.5.2m6 6-1.4.4a4.2 4.2 0 0 1-1.4 0 2.8 2.8 0 0 1-1.2-.3c-.2.4-.6.7-1.1 1a5.9 5.9 0 0 1-1.3.4l-1 .3-.8-1.6 1-.2 1-.3.6-.4a4.7 4.7 0 0 0-.7-.4 1 1 0 0 0-.6-.1.3.3 0 0 0-.2 0 .5.5 0 0 0 0 .3h-.5c-.4-.7-.5-1.2-.3-1.6.3-.4.8-.7 1.6-.9.8-.2 1.5-.2 2.1 0 .6 0 1 .3 1.2.6.1.2.2.4.1.6 0 .2 0 .5-.3 1a1.6 1.6 0 0 0 1 0l1.3-.3.8 1.6m-6.4 1.5-1.3.2c-.7 0-1.3 0-1.8-.4a4.3 4.3 0 0 1-1.3-2l-.6-1.7a2 2 0 0 0-.6-1l-.8-.3.5-1.7 1.1.9.8 1.3.4 1.2a5 5 0 0 0 1 1.7c.2.3.4.4.7.3l1.3-.2.6 1.7m-5.5-6-.9 1.5-2.3-.6.8-1.5 2.4.6m1.4 6.7-6 .5-.3-1.6 5-.5a1.9 1.9 0 0 0-.6-.7 6 6 0 0 0-.8-.5l.5-1.5c.5.3 1 .6 1.2 1 .2.4.5 1 .6 1.7l.4 1.6m-4.8.8a13 13 0 0 1-1.8-.2 8.3 8.3 0 0 1-1.3-.4 4.5 4.5 0 0 1-1 .3h-3c-.5 0-.8 0-1-.2l-.6-.8a3.3 3.3 0 0 1-1.3.7 4 4 0 0 1-1.3.2h-1.4l.2-1.8 1.3.1c.7 0 1.3 0 1.7-.3.6-.3 1-.8 1-1.4h.6a22.9 22.9 0 0 0-.1 1c0 .3 0 .5.3.6l.7.2h2.9c.4-.2.6-.5.7-1l.1-.3a2.6 2.6 0 0 1 .4-.2l.4-.1v.6l-.3.8a6.4 6.4 0 0 0 1.7.4c0-.1 0-.3-.2-.5 0-.3-.2-.4-.2-.5a.4.4 0 0 1 .1-.2l.3-.2.8-.7.3.7c0 .2.1.5 0 .8l-.1 2.4m-9-7-1.5 1-1.1-.6-1.1.8-1.5-.9 1.4-1 1.2.7 1.1-.9 1.5 1m-2.4 6.4-5.8-1 .7-1.6 4.8.8a1.3 1.3 0 0 0 0-.8 4 4 0 0 0-.5-.6l1.3-1.3c.3.4.5.8.5 1.2 0 .4 0 1-.4 1.7l-.6 1.6m-4.9-.8-1.2-.3c-.7-.1-1.1-.4-1.2-.9-.1-.5.1-1.2.7-2.2l1-1.7.2-.9-.3-.6 1.8-1.2.2 1.1c0 .4-.2.9-.6 1.4l-.6 1.2a4 4 0 0 0-.7 1.7c0 .3.1.5.4.5l1.2.3-.9 1.6m-3-6.3-2 .9-1.4-1.4 2-.8 1.5 1.3m-.9 5.3a4 4 0 0 1-1.2 1.1c-.4.3-.9.4-1.4.5a7 7 0 0 1-1.9 0 11.8 11.8 0 0 1-2.2-.6 6 6 0 0 1-2.7-1.6c-.5-.6-.5-1.2 0-1.8a5.6 5.6 0 0 1 1.5-1.3 18.8 18.8 0 0 1 3-1.2l.4.4c-1 .4-1.8.7-2.2 1a3.3 3.3 0 0 0-1 .7c-.3.4-.3.8.1 1.3a8.4 8.4 0 0 0 5 1.8c1 0 1.6-.3 1.9-.6l.4-.7.1-1.4 2-1.2-.1 1.2c-.1.4-.4.8-.8 1.3l-.9 1.1"
				fill="#bf0000"
			/>
		</Box>
	);
}
