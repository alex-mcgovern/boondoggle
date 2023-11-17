import clsx from "clsx";
import { Box } from "../box";
import { type Sprinkles, sprinkles } from "../sprinkles/index.css";
import { flagStyles } from "./styles.css";

export function FlagEsGa({
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
			<g fontSize={12}>
				<path d="M0-.1h512v512H0z" fill="#fff" fillRule="evenodd" />
				<path
					d="M512 437.4 73.4 0H0v73l440.3 439H512v-74.5"
					fill="#09c"
				/>
			</g>
			<g fontSize={12}>
				<path
					d="M252 375.8c-68.2 0-66-64.4-66-64.4v-99h132.3v99s2.3 64.4-66.2 64.4"
					fill="#005bbf"
				/>
				<path
					d="M296.6 401.2c-60 0-58.1-56.5-58.1-56.5v-86.9h116.3v86.9s2 56.5-58.2 56.5z"
					fill="none"
					stroke="#000"
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M251.5 150.3s-14.1-6.8-27.4 3.2c0 0-24-3.4-25.9 19.6 0 .9-.2 2.6.3 3.2.4.4.9 1.3.9 2s.3 1 .6 1.3c0 .3.4.8.5 1.9 0 1.2-.2 1.8 1 3s1.2 4.7 1.2 5.8c0 1 .7 3.7 1.1 4.3.6.6 1.5 2 1.5 3.3 0 1.1.5 4.5.2 5.3-.2 1 1.4 2 2.8 2.4 1.3.5 18.2 6 42.7 5.5 24.6-.3 33.5-1.7 43.7-5.3a2.5 2.5 0 0 0 1.7-2.7c-.2-.7 0-3 .4-3.5.4-.6 3.4-5.2 2.7-6-.6-1-.6-2.8 0-3.4.6-.8 2.4-4.3 2.7-5.7.4-1.4.5-3.1 1.2-3.6.5-.4.8-2.1.9-2.5a4.6 4.6 0 0 1 1.4-1.8s1-5.8.4-8.7c-.8-2.8-5.1-15.1-22.5-12.5 0 0-13-9.9-32.1-5.1"
					fill="#d81126"
				/>
				<path
					d="M296.1 203.2s-12.4-6-24.1 2.8c0 0-21.1-3-22.7 17.2 0 .8-.2 2.3.2 2.8.4.4.8 1.2.8 1.8 0 .6.3.9.5 1.1 0 .3.4.7.5 1.7 0 1.1-.2 1.6.9 2.7 1 1 1 4.1 1 5 0 .9.6 3.3 1 3.8.5.5 1.3 1.8 1.3 2.9 0 1 .4 4 .2 4.7-.2.8 1.2 1.7 2.4 2.1 1.2.4 16 5.2 37.6 4.8 21.6-.3 29.4-1.5 38.4-4.7a2.2 2.2 0 0 0 1.5-2.3c-.2-.6 0-2.6.3-3.1.4-.5 3-4.6 2.4-5.3-.5-.8-.5-2.4 0-3 .5-.7 2.1-3.7 2.4-5 .3-1.2.4-2.7 1-3.1.5-.4.7-1.9.8-2.2a4 4 0 0 1 1.2-1.6s1-5.1.4-7.6c-.7-2.5-4.5-13.3-19.8-11 0 0-11.4-8.7-28.2-4.5z"
					fill="none"
					stroke="#000"
					strokeWidth={1.5}
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M298.7 193.1c-53.5-17-94.9-.8-94.9-.8s.5 1.8 1 2.4 1 2 1 3v3.2c0 .8-.4 4.2 2.6 4 0 0 37.3-14.5 85.8.9 0 0 1.3-1.2 1.3-2.9a9.1 9.1 0 0 1 1.2-4.6c.5-.9 2-3.8 2-5.2"
					fill="#bcac0b"
				/>
				<path
					d="M249.1 282.5h-23.3s-2.3 20.8 15.7 27.2v1.8h3.7v2.5s-6.6 6-.8 12.8v2h1v3.5h1v5.3s-.8 19.4-20 28.7v1.2h51v-1.2a36 36 0 0 1-20-28.7v-5.3h1.2v-3.4h.9v-2.1c5.7-6.8-1-12.8-1-12.8v-2.5h4v-1.8c17.8-6.4 15.5-27.2 15.5-27.2h-28.9"
					fill="#c8b100"
					fillOpacity={0.9}
				/>
				<path
					d="M294 319.3h-20.5s-2 18.3 13.8 23.9v1.6h3.3v2.2s-5.8 5.2-.7 11.2v1.8h.8v3h1v4.7s-.8 17-17.6 25.2v1h44.7v-1c-16.7-8.1-17.5-25.2-17.5-25.2V363h1v-3h.8v-1.8c5-6-.8-11.2-.8-11.2v-2.2h3.4v-1.6c15.7-5.6 13.7-23.9 13.7-23.9H294z"
					fill="none"
					stroke="#000"
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M286.6 342.9h19.7m-19 1.5h18.4m-15 2.5h11.5m-12.3 11.5H303m-12.4 1.4h11.6m-11.6 2.8h11.5m-18.5 23.2h25.5m-32.7 5.9h40m-41.5.9h43"
					fill="none"
					stroke="#000"
					strokeWidth={0.3}
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M252 281.4a14.8 14.9 0 1 0 0-29.8 14.8 14.8 0 0 0 0 29.7"
					fill="#ccc"
				/>
				<path
					d="M296.6 318.3a13 13 0 1 0 0-26.1 13 13 0 0 0 0 26z"
					fill="none"
					stroke="#000"
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M217.6 237.7h-9.2v-9.3h-8.2v9.3h-9.3v8.2h9.3v9.2h8.2v-9.2h9v-8.2"
					fill="#ccc"
				/>
				<path
					d="M266.3 280h-8.1v-8.2H251v8.2h-8.2v7.2h8.2v8h7.2v-8h8V280"
					fill="none"
					stroke="#000"
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M313.7 237.7h-9.2v-9.3h-8.2v9.3H287v8.2h9.3v9.2h8.2v-9.2h9.2v-8.2"
					fill="#ccc"
				/>
				<path
					d="M350.8 280h-8.1v-8.2h-7.2v8.2h-8.2v7.2h8.2v8h7.2v-8h8.1V280"
					fill="none"
					stroke="#000"
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M265 226h-9.3v-9h-8.2v9h-9v8.2h9v9.4h8.2v-9.4h9.3V226"
					fill="#ccc"
				/>
				<path
					d="M308 269.7h-8.2v-8h-7.2v8h-8v7.2h8v8.2h7.2v-8.2h8.2v-7.2"
					fill="none"
					stroke="#000"
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M217.6 277.8h-9.2v-9.3h-8.2v9.3h-9.3v8.2h9.3v9.1h8.2v-9h9v-8.3"
					fill="#ccc"
				/>
				<path
					d="M266.3 315.2h-8.1V307H251v8.2h-8.2v7.2h8.2v8h7.2v-8h8v-7.2"
					fill="none"
					stroke="#000"
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M313.7 277.8h-9.2v-9.3h-8.2v9.3H287v8.2h9.3v9.1h8.2v-9h9.2v-8.3"
					fill="#ccc"
				/>
				<path
					d="M350.8 315.2h-8.1V307h-7.2v8.2h-8.2v7.2h8.2v8h7.2v-8h8.1v-7.2"
					fill="none"
					stroke="#000"
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M217.6 318.3h-9.2V309h-8.2v9.3h-9.3v8.2h9.3v9.2h8.2v-9.1h9v-8.3"
					fill="#ccc"
				/>
				<path
					d="M266.3 350.7h-8.1v-8.1H251v8.1h-8.2v7.2h8.2v8.1h7.2v-8h8v-7.3"
					fill="none"
					stroke="#000"
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M313.7 318.3h-9.2V309h-8.2v9.3H287v8.2h9.3v9.2h8.2v-9.1h9.2v-8.3"
					fill="#ccc"
				/>
				<path
					d="M350.8 350.7h-8.1v-8.1h-7.2v8.1h-8.2v7.2h8.2v8.1h7.2v-8h8.1v-7.3"
					fill="none"
					stroke="#000"
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M252 130.5a9 9 0 1 0 0-17.9 9 9 0 0 0 0 17.9"
					fill="#005bbf"
				/>
				<path
					d="M296.5 185.8a7.8 7.8 0 1 0 0-15.7 7.8 7.8 0 0 0 0 15.7z"
					fill="none"
					stroke="#000"
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M260.3 120H253v-11.8h2.8v-2.3H253V103h-2.3v2.8h-2.8v2.4h2.7V120h-6.8v1.6h16.5V120"
					fill="#fc0"
				/>
				<path
					d="M303.8 176.6h-6.4v-10.4h2.5v-2h-2.5v-2.5h-2v2.4h-2.5v2.1h2.4v10.4h-6v1.4h14.5v-1.4"
					fill="#bcac0b"
					stroke="#000"
					strokeWidth={0.5}
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M216.3 141s6.6-.6 10.4.9c0 0-4.3 5-3.4 11.5a16 16 0 0 0 2.1 6.8c1 1.5 2 4.9 1.4 7.5h1.3s1.2-5.4-.8-8.4a11.4 11.4 0 0 1-1.2-11.7c2.2-4.4 5.3-6 5.3-6 3.4 1.3 10.9 0 13-1.6 2-1.4 3.1-3.6-.8-3.7-4-.2-10.5-.1-15 3.3 0 0-2.5-2.7-14.4-1.5-12 1.4-20.5 6.5-23.2 17.2-1.4 5.5 3.7 17 8.4 19.7 0 0-.1-1.8.3-3.2 0 0-8-9-5.7-17.3 2.5-8.2 12.1-13.7 22.3-13.4"
					fill="#fc0"
				/>
				<path
					d="M265.2 195.1s5.8-.6 9.1.7c0 0-3.8 4.4-3 10.1.4 3 1 4.5 1.9 6 .8 1.3 1.7 4.3 1.2 6.6h1.1s1.1-4.8-.7-7.4a10 10 0 0 1-1-10.3c1.9-3.8 4.6-5.3 4.6-5.3 3 1.2 9.6 0 11.4-1.3 1.9-1.3 2.8-3.2-.6-3.3-3.5-.2-9.3-.1-13.3 2.9 0 0-2.1-2.4-12.6-1.3-10.5 1.2-18 5.7-20.4 15.1-1.2 4.8 3.3 14.9 7.4 17.3 0 0-.1-1.6.3-2.8 0 0-7-7.9-5-15.2 2.2-7.2 10.6-12 19.6-11.8z"
					fill="#bcac0b"
					stroke="#000"
					strokeWidth={0.7}
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M238.8 139.5c2-.3 3.7-.6 3.6-.8 0-.4-1.7-.4-3.8-.2-2 0-3.6.5-3.6.7 0 .4 1.7.4 3.8.3"
					fill="#fff"
				/>
				<path
					d="M278.3 195.4s-2 2 0 0 6.4-3.2 8.9-2.7c2.4.6-.5.9-1.3 1-.8 0-2.4.3-4.8 0"
					fill="none"
					stroke="#000"
					strokeWidth={0.7}
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M287.5 141.9s-6.5-.8-10.4.7a16.6 16.6 0 0 1 1.4 18.2c-1 1.7-2 5-1.5 7.6h-1.2s-1.3-5.4.8-8.4a11.4 11.4 0 0 0 1-11.6 14.3 14.3 0 0 0-5-6.2c-3.6 1.5-11 0-13.1-1.5-2-1.5-3.2-3.5.8-3.7 3.8-.3 10.5-.1 15 3.4 0 0 2.4-2.9 14.4-1.5 11.9 1.3 20.5 6.4 23.1 17 1.4 5.6-3.6 17-8.3 19.8 0 0 0-1.8-.3-3.2 0 0 8-8.9 5.6-17.2-2.4-8.3-12-13.7-22.3-13.4"
					fill="#fc0"
				/>
				<path
					d="M327.7 195.8s-5.7-.7-9.1.6a14.6 14.6 0 0 1 1.2 16c-.9 1.5-1.8 4.4-1.3 6.7h-1s-1.2-4.7.7-7.4a10 10 0 0 0 .9-10.2 12.6 12.6 0 0 0-4.5-5.4c-3.1 1.3-9.7 0-11.5-1.3-1.8-1.3-2.8-3.1.7-3.3 3.4-.2 9.3-.1 13.3 3 0 0 2-2.5 12.6-1.3 10.4 1.1 18 5.6 20.3 15 1.2 4.8-3.2 14.9-7.3 17.3 0 0 0-1.6-.3-2.8 0 0 7-7.8 4.9-15.1-2.1-7.3-10.5-12-19.6-11.8z"
					fill="#bcac0b"
					stroke="#000"
					strokeWidth={0.7}
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M265 140.2c-2-.2-3.6-.5-3.6-.8 0-.3 1.7-.4 3.8-.3 2 .3 3.7.6 3.7.8 0 .4-1.7.5-3.9.3"
					fill="#fff"
				/>
				<path
					d="M314.6 196s2.1 2 0 0c-2-1.9-6.4-3.2-8.8-2.6-2.5.5.4.8 1.2.9.9 0 2.5.4 4.9 0"
					fill="none"
					stroke="#000"
					strokeWidth={0.7}
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M245.8 134.5v25.4c-.2 2.5 3 6 5.5 7 0 0 5.7-1.8 6-7V133h-2v23.2c0 2.3-1.5 6.6-3.7 7.3 0 0-4-.7-4.3-7.3v-22.5l-1.5.7"
					fill="#fc0"
				/>
				<path
					d="M291.1 189.3v22.3c-.2 2.2 2.7 5.3 4.8 6.2 0 0 5-1.6 5.3-6.2v-23.5h-1.7v20.4c0 2-1.4 5.8-3.3 6.4 0 0-3.6-.6-3.8-6.4v-19.8l-1.3.6"
					fill="#bcac0b"
					stroke="#000"
					strokeWidth={0.7}
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M189.7 169.2a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
					fill="#fff"
				/>
				<path
					d="M241.8 219.8a2.7 2.7 0 1 0 0-5.3 2.7 2.7 0 0 0 0 5.3z"
					fill="none"
					stroke="#000"
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M187.8 162.3a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
					fill="#fff"
				/>
				<path
					d="M240.1 213.7a2.7 2.7 0 1 0 0-5.3 2.7 2.7 0 0 0 0 5.3z"
					fill="none"
					stroke="#000"
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M188.8 153.8a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
					fill="#fff"
				/>
				<path
					d="M241 206.3a2.7 2.7 0 1 0 0-5.3 2.7 2.7 0 0 0 0 5.3z"
					fill="none"
					stroke="#000"
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M193.5 146.8a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
					fill="#fff"
				/>
				<path
					d="M245.1 200.1a2.7 2.7 0 1 0 0-5.3 2.7 2.7 0 0 0 0 5.3z"
					fill="none"
					stroke="#000"
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path d="M199 141.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" fill="#fff" />
				<path
					d="M250 195.6a2.7 2.7 0 1 0 0-5.3 2.7 2.7 0 0 0 0 5.3z"
					fill="none"
					stroke="#000"
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M206.3 138.8a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
					fill="#fff"
				/>
				<path
					d="M256.4 193.1a2.7 2.7 0 1 0 0-5.3 2.7 2.7 0 0 0 0 5.3z"
					fill="none"
					stroke="#000"
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M213.8 137.5a3 3 0 1 0 0-6.1 3 3 0 0 0 0 6"
					fill="#fff"
				/>
				<path
					d="M263 192a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.3z"
					fill="none"
					stroke="#000"
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path d="M221 137a3 3 0 1 0 0-6 3 3 0 0 0 0 6" fill="#fff" />
				<path
					d="M269.3 191.6a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.4z"
					fill="none"
					stroke="#000"
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M227.5 137.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6.2"
					fill="#fff"
				/>
				<path
					d="M275 192a2.7 2.7 0 1 0 0-5.3 2.7 2.7 0 0 0 0 5.4z"
					fill="none"
					stroke="#000"
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M245.7 135.3a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
					fill="#fff"
				/>
				<path
					d="M291 190a2.7 2.7 0 1 0 0-5.3 2.7 2.7 0 0 0 0 5.3z"
					fill="none"
					stroke="#000"
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M251.6 136.9a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
					fill="#fff"
				/>
				<path
					d="M296.2 191.4a2.7 2.7 0 1 0 0-5.3 2.7 2.7 0 0 0 0 5.3z"
					fill="none"
					stroke="#000"
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M251.6 159.4a3 3 0 1 0 0-6.1 3 3 0 0 0 0 6.1"
					fill="#fff"
				/>
				<path
					d="M296.2 211.2a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.4z"
					fill="none"
					stroke="#000"
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M314.3 171.1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
					fill="#fff"
				/>
				<path
					d="M351.3 221.5a2.7 2.7 0 1 0 0-5.3 2.7 2.7 0 0 0 0 5.3z"
					fill="none"
					stroke="#000"
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M315.9 163.7a3 3 0 1 0 0-6.1 3 3 0 0 0 0 6"
					fill="#fff"
				/>
				<path
					d="M352.7 215a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.3z"
					fill="none"
					stroke="#000"
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M314.6 155.8a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
					fill="#fff"
				/>
				<path
					d="M351.6 208a2.7 2.7 0 1 0 0-5.3 2.7 2.7 0 0 0 0 5.3z"
					fill="none"
					stroke="#000"
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M311.3 148.4a3 3 0 1 0 0-6.2 3 3 0 0 0 0 6.2"
					fill="#fff"
				/>
				<path
					d="M348.7 201.5a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.4z"
					fill="none"
					stroke="#000"
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M305.8 143.2a3 3 0 1 0 0-6.1 3 3 0 0 0 0 6"
					fill="#fff"
				/>
				<path
					d="M343.8 197a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.3z"
					fill="none"
					stroke="#000"
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path d="M299 139.8a3 3 0 1 0 0-6 3 3 0 0 0 0 6" fill="#fff" />
				<path
					d="M337.9 194a2.7 2.7 0 1 0 0-5.3 2.7 2.7 0 0 0 0 5.3z"
					fill="none"
					stroke="#000"
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M291.3 138.1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
					fill="#fff"
				/>
				<path
					d="M331.1 192.5a2.7 2.7 0 1 0 0-5.3 2.7 2.7 0 0 0 0 5.3z"
					fill="none"
					stroke="#000"
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M284.4 137.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
					fill="#fff"
				/>
				<path
					d="M325 192a2.7 2.7 0 1 0 0-5.3 2.7 2.7 0 0 0 0 5.3z"
					fill="none"
					stroke="#000"
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M278 136.7a3 3 0 1 0 0-6.1 3 3 0 0 0 0 6.1"
					fill="#fff"
				/>
				<path
					d="M319.4 191.3a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.4z"
					fill="none"
					stroke="#000"
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M282.1 161.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
					fill="#fff"
				/>
				<path
					d="M323 213a2.7 2.7 0 1 0 0-5.3 2.7 2.7 0 0 0 0 5.4z"
					fill="none"
					stroke="#000"
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M283.7 155.8a3 3 0 1 0 0-6.2 3 3 0 0 0 0 6"
					fill="#fff"
				/>
				<path
					d="M324.4 208a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.3z"
					fill="none"
					stroke="#000"
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M258.2 136.3a3 3 0 1 0 0-6.2 3 3 0 0 0 0 6.2"
					fill="#fff"
				/>
				<path
					d="M302 190.9a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.4z"
					fill="none"
					stroke="#000"
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M243.4 135.4a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
					fill="#fff"
				/>
				<path
					d="M289 190.1a2.7 2.7 0 1 0 0-5.3 2.7 2.7 0 0 0 0 5.3z"
					fill="none"
					stroke="#000"
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M239.8 135.3a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
					fill="#fff"
				/>
				<path
					d="M285.8 190a2.7 2.7 0 1 0 0-5.3 2.7 2.7 0 0 0 0 5.3z"
					fill="none"
					stroke="#000"
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M220.4 161.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
					fill="#fff"
				/>
				<path
					d="M268.8 213.1a2.7 2.7 0 1 0 0-5.3 2.7 2.7 0 0 0 0 5.3z"
					fill="none"
					stroke="#000"
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M219.5 154.4a3 3 0 1 0 0-6.2 3 3 0 0 0 0 6.2"
					fill="#fff"
				/>
				<path
					d="M268 206.8a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.4z"
					fill="none"
					stroke="#000"
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M221.8 147.3a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
					fill="#fff"
				/>
				<path
					d="M270 200.6a2.7 2.7 0 1 0 0-5.3 2.7 2.7 0 0 0 0 5.3z"
					fill="none"
					stroke="#000"
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path d="M235.1 136a3 3 0 1 0 0-6 3 3 0 0 0 0 6" fill="#fff" />
				<path
					d="M281.7 190.6a2.7 2.7 0 1 0 0-5.3 2.7 2.7 0 0 0 0 5.3z"
					fill="none"
					stroke="#000"
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path d="M230 138a3 3 0 1 0 0-6 3 3 0 0 0 0 6" fill="#fff" />
				<path
					d="M277.2 192.4a2.7 2.7 0 1 0 0-5.3 2.7 2.7 0 0 0 0 5.3z"
					fill="none"
					stroke="#000"
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M225.2 142a3 3 0 1 0 0-6 3 3 0 0 0 0 6.1"
					fill="#fff"
				/>
				<path
					d="M273 196a2.7 2.7 0 1 0 0-5.3 2.7 2.7 0 0 0 0 5.3z"
					fill="none"
					stroke="#000"
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M251.6 140.3a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
					fill="#fff"
				/>
				<path
					d="M296.2 194.4a2.7 2.7 0 1 0 0-5.3 2.7 2.7 0 0 0 0 5.3z"
					fill="none"
					stroke="#000"
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path d="M251.6 146a3 3 0 1 0 0-6 3 3 0 0 0 0 6" fill="#fff" />
				<path
					d="M296.2 199.5a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.4z"
					fill="none"
					stroke="#000"
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M251.6 152.2a3 3 0 1 0 0-6.1 3 3 0 0 0 0 6.1"
					fill="#fff"
				/>
				<path
					d="M296.2 204.9a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.4z"
					fill="none"
					stroke="#000"
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M262 135.5a3 3 0 1 0 0-6.2 3 3 0 0 0 0 6.2"
					fill="#fff"
				/>
				<path
					d="M305.4 190.2a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.4z"
					fill="none"
					stroke="#000"
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M266.2 134.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
					fill="#fff"
				/>
				<path
					d="M309 189.4a2.7 2.7 0 1 0 0-5.3 2.7 2.7 0 0 0 0 5.3z"
					fill="none"
					stroke="#000"
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path d="M271 135.3a3 3 0 1 0 0-6 3 3 0 0 0 0 6" fill="#fff" />
				<path
					d="M313.2 190a2.7 2.7 0 1 0 0-5.3 2.7 2.7 0 0 0 0 5.4z"
					fill="none"
					stroke="#000"
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M282.7 148.2a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
					fill="#fff"
				/>
				<path
					d="M323.5 201.4a2.7 2.7 0 1 0 0-5.3 2.7 2.7 0 0 0 0 5.3z"
					fill="none"
					stroke="#000"
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M275.6 138.1a3 3 0 1 0 0-6.1 3 3 0 0 0 0 6.1"
					fill="#fff"
				/>
				<path
					d="M317.3 192.5a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.4z"
					fill="none"
					stroke="#000"
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path d="M280 142.2a3 3 0 1 0 0-6 3 3 0 0 0 0 6" fill="#fff" />
				<path
					d="M321.1 196.1a2.7 2.7 0 1 0 0-5.3 2.7 2.7 0 0 0 0 5.3z"
					fill="none"
					stroke="#000"
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="m251.4 187.6-8 4.1 7.2 4.6 8.5-4.3-7.7-4.4"
					fill="#fff"
				/>
				<path
					d="m296 236-7 3.6 6.3 4 7.5-3.8-6.8-3.8"
					fill="none"
					stroke="#000"
					strokeWidth={0.5}
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="m233.9 188.6-12 1.8s-.2 6.5.4 8l12.4-1.6s.5-6-.8-8.2"
					fill="#fff"
				/>
				<path
					d="m280.6 236.8-10.5 1.6s-.2 5.7.3 7l10.9-1.4s.5-5.3-.7-7.2z"
					fill="none"
					stroke="#000"
					strokeWidth={0.5}
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M232.6 190.8s-7.3.7-9 1.4v4.3s4.8-.8 9.1-1.1v-4.6"
					fill="#058e6e"
					fillOpacity={0.9}
				/>
				<path
					d="M279.5 238.8s-6.4.6-8 1.2v3.8s4.3-.7 8.1-1l-.1-4"
					fill="none"
					stroke="#000"
					strokeWidth={0.5}
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="m268.1 188.8 12 2s.2 6.4-.4 7.9l-12.3-1.6s-.5-6 .7-8.2"
					fill="#fff"
				/>
				<path
					d="m310.7 237 10.6 1.7s.1 5.7-.4 7l-10.8-1.4s-.5-5.3.6-7.2z"
					fill="none"
					stroke="#000"
					strokeWidth={0.5}
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M269.6 191.2s7.2.7 9 1.3l-.1 4.4s-4.8-.8-9.1-1.2v-4.5"
					fill="#058e6e"
					fillOpacity={0.9}
				/>
				<path
					d="M312 239.1s6.3.6 7.9 1.2l-.1 3.8s-4.2-.7-8-1l.1-4"
					fill="none"
					stroke="#000"
					strokeWidth={0.5}
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M254.2 241.8s37-13.7 84.2 1.2m-82.7 6.7s35.9-13.4 80 .6m-79.8-9 7.2 2.1-5 5.4"
					fill="none"
					stroke="#000"
					strokeWidth={0.5}
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path d="m205.9 201 4.8-3.9-5.4-1s.7.8.6 1.6v3.4" fill="red" />
				<path
					d="m256 247.8 4.2-3.5-4.7-.9s.6.7.5 1.4v3zm81.6-5.1-7.7 1.4 5.2 6"
					fill="none"
					stroke="#000"
					strokeWidth={0.5}
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="m296.1 201.3-3.3-3.4 4.8-.5s-1.4.8-1.4 1.6c0 .7.2 1.7 0 2.3"
					fill="red"
				/>
				<path
					d="m335.3 248-2.9-3 4.2-.4s-1.2.7-1.2 1.4c0 .6.2 1.5 0 2zm-70-6.2c.6 0 1.2-.4 1.2-1 0-.4-.6-.9-1.2-.9-.7 0-1.2.5-1.2 1s.5 1 1.2 1zm20.6-2.3c.7 0 1.2-.4 1.2-1 0-.5-.5-.9-1.2-.9s-1.2.4-1.2 1c0 .5.5.9 1.2.9zm0 3.3c.7 0 1.2-.4 1.2-.9s-.5-1-1.2-1-1.2.5-1.2 1 .5 1 1.2 1zm20.3-3.1c.6 0 1.2-.5 1.2-1s-.6-1-1.2-1c-.7 0-1.2.5-1.2 1s.5 1 1.2 1zm20.1 3.7c.7 0 1.2-.5 1.2-1s-.5-1-1.2-1-1.2.5-1.2 1 .5 1 1.2 1zm-.3 2.6c.6 0 1.2-.4 1.2-1 0-.4-.6-.9-1.2-.9-.7 0-1.2.5-1.2 1s.5 1 1.2 1zm-19.8-3c.6 0 1.2-.4 1.2-1 0-.5-.6-.9-1.2-.9-.7 0-1.2.4-1.2 1 0 .5.5 1 1.2 1zm-40 3c.7 0 1.3-.4 1.3-1 0-.4-.6-.9-1.2-.9-.7 0-1.2.5-1.2 1s.5 1 1.2 1z"
					fill="none"
					stroke="#000"
					strokeWidth={0.5}
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M203.1 182s.2 8.2 5.5 7 4.8-7.8 5.1-8.2c.5-.3 1-.3 1-.3s.7 6.5 5.7 5.7c5-.8 4.8-8.8 4.2-10.2l1.2-.3s2 9.3 7.6 8c5.7-1.4 5.1-7.3 5.1-7.3h.5s1.2 6.3 5.9 5.9c4.5-.3 5.5-1.8 4.9-8.2l3-.6s-1 9.1 4.5 9.1c5.5-.3 5.7-4.6 6-5.4h1s.2 6.5 4.8 6.5 5.5-5.5 5.5-7.7l4.5.3s-4.7 8.5 2.2 9.6c6.8 1.2 7-5.4 7-5.4h1.4s-.2 8.5 3.6 8.7c3.8.2 6.1-1.1 6.4-7.5l2.2.8s-1.8 10.3-9 8.4c-3.7-1-5-5.3-4.8-6.4 0 0-2.6 4.7-7.8 3.1-5.1-1.4-4.6-5-4.6-6.2 0 0-3 5.7-7.4 4.4-3.8-1.1-5.3-2.5-5.3-5.2 0 0-2 4.4-5.7 4.2-3.9-.1-5.7-2.5-6-4.6 0 0-.7 4.1-5.8 4.5-3.4.1-5.4-1.6-6.2-3.9 0 0-1 4.1-5.9 4.8-3 .3-6.1-1.4-6.8-4.2 0 0-.8 5.6-5.7 6.2-5 .8-6.2-2.6-6.2-2.6s-1 4.4-5 5.4c-4 .9-6.6-.8-7.6-4.8-.9-4-.6-5.7-.6-5.7l1.6 2"
					fill="#fc0"
				/>
				<path
					d="M253.6 231s.1 7.2 4.8 6.2 4.2-6.9 4.5-7.2c.4-.3.9-.3.9-.3s.6 5.7 5 5c4.4-.7 4.2-7.7 3.7-8.9l1-.3s1.7 8.2 6.7 7c5-1.2 4.5-6.4 4.5-6.4h.4s1.1 5.6 5.2 5.2c4-.3 4.8-1.6 4.3-7.2l2.7-.5s-1 8 3.9 8c4.8-.3 5-4.1 5.3-4.8h.8s.2 5.7 4.3 5.7c4 0 4.8-4.8 4.8-6.7l4 .2s-4.2 7.5 1.9 8.5c6 1 6.2-4.8 6.2-4.8h1.2s-.2 7.5 3.1 7.7c3.4.1 5.4-1 5.7-6.6l1.9.7s-1.6 9-7.9 7.4c-3.3-.9-4.4-4.7-4.2-5.7 0 0-2.3 4.2-6.9 2.8-4.5-1.3-4-4.5-4-5.5 0 0-2.7 5-6.5 3.9-3.4-1-4.7-2.2-4.7-4.6 0 0-1.7 3.9-5 3.7-3.4-.1-5-2.2-5.2-4 0 0-.7 3.6-5.2 3.9-3 .1-4.7-1.4-5.4-3.4 0 0-.9 3.6-5.2 4.2-2.7.3-5.4-1.2-6-3.7 0 0-.7 4.9-5 5.5-4.4.7-5.4-2.3-5.4-2.3s-.9 3.8-4.4 4.7c-3.5.8-5.8-.7-6.7-4.2-.8-3.5-.5-5-.5-5l1.4 1.8z"
					fill="#bcac0b"
					stroke="#000"
					strokeWidth={0.7}
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M214.2 182.3a2 2 0 1 0 0-3.8 2 2 0 0 0 0 3.8"
					fill="#fc0"
				/>
				<path
					d="M263.3 231.3a1.7 1.7 0 1 0 0-3.3 1.7 1.7 0 0 0 0 3.3z"
					fill="#bcac0b"
					stroke="#000"
					strokeWidth={0.7}
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M239 178.3a2 2 0 1 0 0-3.8 2 2 0 0 0 0 3.8"
					fill="#fc0"
				/>
				<path
					d="M285.1 227.8a1.7 1.7 0 1 0 0-3.3 1.7 1.7 0 0 0 0 3.3z"
					fill="#bcac0b"
					stroke="#000"
					strokeWidth={0.7}
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M264.2 179.1a2 2 0 1 0 0-3.8 2 2 0 0 0 0 3.8"
					fill="#fc0"
				/>
				<path
					d="M307.3 228.5a1.7 1.7 0 1 0 0-3.3 1.7 1.7 0 0 0 0 3.3z"
					fill="#bcac0b"
					stroke="#000"
					strokeWidth={0.7}
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M289.2 183a2 2 0 1 0 0-3.7 2 2 0 0 0 0 3.8"
					fill="#fc0"
				/>
				<path
					d="M329.2 232a1.7 1.7 0 1 0 0-3.3 1.7 1.7 0 0 0 0 3.3z"
					fill="#bcac0b"
					stroke="#000"
					strokeWidth={0.7}
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M250.5 176.3h-1.7c-.5 1.7-4.1 2.7-4.1 2.7-.5-1.4.5-3.3.5-3.3-4.2-1.2-4.2-2.5-4.2-2.5.6-1.5 4.6-1.7 4.6-1.7-1.2-1.3-1-3.4-1-3.4 2.7.2 4.8 2.8 4.8 2.8s-2.6-1.4-2.2-6c0 0 1.3 0 2.2 1 0 0 0-5 2.1-5.6h.2c2 .6 2 5.6 2 5.6 1-1 2.3-1 2.3-1 .4 4.6-2.2 6-2.2 6s2.1-2.6 4.8-2.7c0 0 0 2-.8 3.4 0 0 3.8.1 4.5 1.6 0 0 0 1.5-4.3 2.5 0 0 .9 2 .6 3.4 0 0-3.8-1.1-4.1-2.8h-4"
					fill="#fc0"
				/>
				<path
					d="M295.2 226h-1.5c-.4 1.5-3.6 2.4-3.6 2.4-.4-1.2.5-2.9.5-2.9-3.7-1-3.7-2.2-3.7-2.2.5-1.3 4-1.5 4-1.5-1-1.1-.8-3-.8-3 2.3.2 4.2 2.5 4.2 2.5s-2.3-1.2-2-5.2c0 0 1.2 0 2 .8 0 0 0-4.4 1.8-4.9h.2c1.8.5 1.8 4.9 1.8 4.9.8-.9 2-.8 2-.8.3 4-2 5.2-2 5.2s1.9-2.3 4.2-2.4c0 0 .1 1.8-.7 3 0 0 3.4.1 4 1.4 0 0 0 1.3-3.8 2.2 0 0 .8 1.7.5 3 0 0-3.3-1-3.6-2.5h-3.5z"
					fill="#bcac0b"
					stroke="#000"
					strokeWidth={0.7}
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M251.4 177.2a3.4 3.4 0 1 0 0-6.9 3.4 3.4 0 0 0 0 6.9"
					fill="#fff"
				/>
				<path
					d="M296 226.8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
					fill="none"
					stroke="#000"
					strokeWidth={0.4}
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M251.4 175.7a2 2 0 1 0 0-3.9 2 2 0 0 0 0 3.9"
					fill="#fff"
				/>
				<path
					d="M296 225.5a1.7 1.7 0 1 0 0-3.4 1.7 1.7 0 0 0 0 3.4z"
					fill="none"
					stroke="#000"
					strokeWidth={0.3}
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="m277.7 178.5 1.7.4c0 1.7 3.4 3.5 3.4 3.5.7-1.1.1-3.3.1-3.3 4.4-.1 4.7-1.6 4.7-1.6-.3-1.6-4-2.6-4-2.6 1.1-1 1.5-3 1.5-3-2.7-.5-5.3 1.5-5.3 1.5s2.9-.7 3.4-5.2c0 0-1.2-.4-2.2.3 0 0 1-4.8-1-5.7h-.2c-2.1 0-3.2 4.8-3.2 4.8-.6-1.1-2-1.2-2-1.2-1.3 4.3 1 6.1 1 6.1s-1.6-3-4-3.6c0 0-.6 2 0 3.4 0 0-3.8-.6-4.7.7 0 0-.4 1.4 3.5 3.4 0 0-1.3 1.7-1.2 3.2 0 0 3.8-.4 4.6-2l1.7.4 2.3.4"
					fill="#fc0"
				/>
				<path
					d="m319.1 228 1.5.3c0 1.5 3 3.1 3 3.1.6-1 .1-2.9.1-2.9 3.9-.1 4.1-1.4 4.1-1.4-.2-1.4-3.5-2.3-3.5-2.3 1-.9 1.3-2.7 1.3-2.7-2.3-.4-4.6 1.4-4.6 1.4s2.5-.6 3-4.6c0 0-1.1-.3-2 .3 0 0 .9-4.2-.8-5l-.2-.1c-1.9 0-2.8 4.3-2.8 4.3-.6-1-1.8-1.1-1.8-1.1-1.1 3.8.9 5.4.9 5.4s-1.4-2.6-3.6-3.2c0 0-.5 1.8 0 3 0 0-3.3-.5-4.1.6 0 0-.3 1.3 3.1 3 0 0-1.1 1.5-1 2.8 0 0 3.3-.3 4-1.7l1.5.3 2 .4"
					fill="#bcac0b"
					stroke="#000"
					strokeWidth={0.7}
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M276.4 179.2a3.5 3.5 0 1 1 1.6-6.8 3.5 3.5 0 0 1-1.5 6.8"
					fill="#fff"
				/>
				<path
					d="M318 228.6a3 3 0 1 1 1.4-6 3 3 0 0 1-1.3 6z"
					fill="none"
					stroke="#000"
					strokeWidth={0.4}
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M276.9 177.7a2 2 0 1 1 .8-3.7 2 2 0 0 1-.8 3.7"
					fill="#fff"
				/>
				<path
					d="M318.4 227.3a1.7 1.7 0 1 1 .7-3.3 1.7 1.7 0 0 1-.7 3.3z"
					fill="none"
					stroke="#000"
					strokeWidth={0.3}
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="m224.4 178-1.7.3c-.2 1.8-3.7 3.4-3.7 3.4-.6-1.3 0-3.4 0-3.4-4.3-.4-4.5-2-4.5-2 .5-1.4 4.3-2.2 4.3-2.2-1.1-1.1-1.2-3.2-1.2-3.2 2.5-.2 5 2 5 2s-2.7-.9-3-5.4c0 0 1.4-.4 2.3.4 0 0-.6-4.9 1.4-5.6h.2c2.2.2 2.7 5 2.7 5 .8-1 2.3-1 2.3-1 .8 4.5-1.6 6-1.6 6s1.8-2.8 4.3-3.3c0 0 .5 2.1-.3 3.5 0 0 3.9-.3 4.7 1.1 0 0 .2 1.4-3.9 3 0 0 1.1 1.8 1 3.2 0 0-3.7-.6-4.5-2.3l-1.6.4-2.3.2"
					fill="#fc0"
				/>
				<path
					d="m272.3 227.6-1.5.2c-.2 1.6-3.3 3-3.3 3-.5-1.2 0-3 0-3-3.7-.4-3.9-1.7-3.9-1.7.4-1.3 3.8-2 3.8-2-1-1-1.1-2.8-1.1-2.8 2.2-.2 4.4 1.8 4.4 1.8s-2.4-.8-2.7-4.8c0 0 1.3-.3 2.1.4 0 0-.5-4.3 1.2-5h.2c1.9.2 2.4 4.5 2.4 4.5.7-.9 2-1 2-1 .7 4-1.4 5.4-1.4 5.4s1.6-2.5 3.8-3c0 0 .4 1.9-.3 3.1 0 0 3.4-.3 4.1 1 0 0 .2 1.2-3.4 2.6 0 0 1 1.6.9 2.8 0 0-3.3-.5-4-2l-1.4.3-2 .2"
					fill="#bcac0b"
					stroke="#000"
					strokeWidth={0.7}
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M225.4 179a3.4 3.4 0 1 0-.9-6.8 3.4 3.4 0 0 0 1 6.8"
					fill="#fff"
				/>
				<path
					d="M273.2 228.4a3 3 0 1 0-.8-6 3 3 0 0 0 .8 6z"
					fill="none"
					stroke="#000"
					strokeWidth={0.4}
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M225.2 177.4a2 2 0 1 0-.4-3.8 2 2 0 0 0 .4 3.8"
					fill="#fff"
				/>
				<path
					d="M273 227a1.7 1.7 0 1 0-.4-3.3 1.7 1.7 0 0 0 .4 3.3z"
					fill="none"
					stroke="#000"
					strokeWidth={0.3}
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M301.7 185.5s-1-2.3-2.9-1.5-1.7 1.1-3.4 1.1c0 0-.7-2.1.2-3 0 0-2.7-1-3.4-3.5 0 0 1.5-1.7 5-1 0 0 0-1.7.4-2.5 0 0 3.7 1.2 3.7 3.3 0 0-1.1-4 1-7 0 0 1.6.6 1.5 2.6 0 0 .8-3.9 6-2.9 0 0-2.8 2.5-2.9 3.7-.2 1.1-2.5 3-2.6 3.7 0 .6-.2 1.7-1 2.4-.6.7-.7 1.8-.7 2.3 0 .2 0 1.8-1 2.3"
					fill="#fc0"
				/>
				<path
					d="M340.2 234.1s-.8-2-2.5-1.3-1.5 1-3 1c0 0-.6-1.9.2-2.7 0 0-2.4-.9-3-3 0 0 1.3-1.5 4.4-.9 0 0-.1-1.5.3-2.2 0 0 3.3 1 3.3 2.9 0 0-1-3.6.8-6.2 0 0 1.5.6 1.4 2.3 0 0 .7-3.4 5.2-2.5 0 0-2.4 2.2-2.5 3.2-.2 1-2.2 2.7-2.3 3.3 0 .5-.2 1.5-.8 2.1-.6.6-.7 1.6-.7 2 0 .2 0 1.6-.8 2z"
					fill="#bcac0b"
					stroke="#000"
					strokeWidth={0.7}
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M298.8 181a3.4 3.4 0 0 1 5.5-2.1c0 .5-.4 1.5-1 2-.6.7-.7 1.8-.7 2.3a3.4 3.4 0 0 1-.5 1.8h-.5a3.4 3.4 0 0 1-2.8-4"
					fill="#fff"
				/>
				<path
					d="M337.7 230.1a3 3 0 0 1 4.8-1.8c0 .5-.3 1.3-.8 1.8-.6.6-.7 1.6-.7 2a3 3 0 0 1-.4 1.6h-.5a3 3 0 0 1-2.4-3.6z"
					fill="none"
					stroke="#000"
					strokeWidth={0.4}
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M300.3 181.3a2 2 0 0 1 3.4-.8l-.3.4c-.7.7-.8 1.8-.8 2.3v.2h-.7c-1.1 0-1.7-1.1-1.5-2.2"
					fill="#fff"
				/>
				<path
					d="M339 230.4a1.7 1.7 0 0 1 3-.7l-.3.4c-.6.6-.7 1.6-.7 2v.2h-.6c-1-.1-1.5-1-1.3-2z"
					fill="none"
					stroke="#000"
					strokeWidth={0.3}
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M201.5 184.6s1-2.3 2.9-1.4c1.8 1 1.6 1.3 3.4 1.3 0 0 .7-2 0-3 0 0 2.7-.8 3.4-3.2 0 0-1.3-1.8-4.9-1.4 0 0 .3-1.7-.2-2.5 0 0-3.8 1-3.9 3 0 0 1.4-4-.4-7 0 0-1.8.6-1.8 2.4 0 0-.6-3.8-5.7-3 0 0 2.6 2.6 2.6 3.7s2.3 3.2 2.3 3.9a4 4 0 0 0 .9 2.5c.7.7.7 1.8.5 2.3 0 .2 0 1.8 1 2.3"
					fill="#fc0"
				/>
				<path
					d="M252.2 233.3s.8-2 2.5-1.2c1.6.9 1.4 1.1 3 1.1 0 0 .6-1.8 0-2.6 0 0 2.4-.7 3-2.8 0 0-1.2-1.6-4.3-1.2 0 0 .2-1.5-.2-2.2 0 0-3.3.8-3.4 2.6 0 0 1.2-3.5-.4-6.2 0 0-1.6.6-1.6 2.2 0 0-.5-3.4-5-2.7 0 0 2.3 2.3 2.3 3.3s2 2.8 2 3.4c0 .5.2 1.6.8 2.2.6.6.6 1.6.5 2 0 .2 0 1.6.8 2z"
					fill="#bcac0b"
					stroke="#000"
					strokeWidth={0.7}
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M204.5 180.1a3.4 3.4 0 0 0-5.2-2.2c0 .5.2 1.4.8 2 .7.7.7 1.8.5 2.3 0 .2 0 1.1.5 2h.4a3.4 3.4 0 0 0 3-4"
					fill="#fff"
				/>
				<path
					d="M254.8 229.4a3 3 0 0 0-4.6-2c0 .5.2 1.3.7 1.8.6.6.6 1.6.5 2 0 .2 0 1 .4 1.7h.4a3 3 0 0 0 2.6-3.5z"
					fill="none"
					stroke="#000"
					strokeWidth={0.4}
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M203 180.4a2 2 0 0 0-3.4-1l.5.5c.7.7.7 1.8.5 2.3v.2h.8c1 0 1.7-1 1.6-2"
					fill="#fff"
				/>
				<path
					d="M253.5 229.6a1.7 1.7 0 0 0-3-.9l.4.5c.6.6.6 1.6.5 2v.2h.7c.9 0 1.5-.9 1.4-1.8z"
					fill="none"
					stroke="#000"
					strokeWidth={0.3}
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M257.2 251.6s33.8-13.2 76.4.3"
					fill="none"
					stroke="#000"
					strokeWidth={1.5}
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="M338.4 241.1c-47.1-15-84.7-.8-84.7-.8"
					fill="none"
					stroke="#000"
					strokeWidth={0.5}
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
				<path
					d="m251.4 189.7-4.3 2.2 3.8 2.3 4.6-2.2-4.1-2.3"
					fill="red"
				/>
				<path
					d="m296 237.8-3.8 1.9 3.4 2.1 4-2-3.6-2"
					fill="none"
					stroke="#000"
					strokeWidth={0.5}
					transform="matrix(1.13778 0 0 1.13875 -85.4 -81.1)"
				/>
			</g>
		</Box>
	);
}
