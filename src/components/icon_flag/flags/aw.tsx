import clsx from "clsx";

import { utilCss } from "../../../styles/utils/util_css.css";
import { Box } from "../../box/Box";
import { flagStyles } from "../styles.css";

import type { UtilCssArgs } from "../../../styles/utils/util_css.css";

export function FlagAw({
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
				<clipPath id="aw_svg__a">
					<path d="M0 0h512v512H0z" fill="gray" />
				</clipPath>
			</defs>
			<g clipPath="url(#aw_svg__a)">
				<path d="M0 0v512h768V0H0z" fill="#39c" />
				<path
					d="M0 341.3v28.5h768v-28.5H0zm0 57v28.4h768v-28.5H0z"
					fill="#ff0"
				/>
				<path
					d="m122 28 2.4 2.5-2.3-2.4zm-2.3 4.8 2.4 2.4-2.4-2.4m4.7 0 2.4 2.4-2.3-2.4z"
					fill="#9cc"
				/>
				<path
					d="m119.7 35.2 2.4 2.4-2.4-2.4m4.7 0 2.4 2.4-2.3-2.4z"
					fill="#ccf"
				/>
				<path d="m117.3 40 2.4 2.3-2.4-2.3z" fill="#6cc" />
				<path d="m122 40 2.4 2.3-2.3-2.3z" fill="#c66" />
				<path d="m126.8 40 2.4 2.3-2.4-2.3z" fill="#6cc" />
				<path
					d="m117.3 42.4 2.4 2.3-2.4-2.3zm9.5 0 2.4 2.3-2.4-2.3z"
					fill="#ccf"
				/>
				<path
					d="m119.7 44.7 2.4 2.4-2.4-2.4m4.7 0 2.4 2.4-2.3-2.4z"
					fill="#fcc"
				/>
				<path d="m115 47.1 2.3 2.4-2.4-2.4z" fill="#6cc" />
				<path
					d="M121.7 32.9 105 96.2l-63.5 17.2 63.3 16.5 16.9 63.3 16.9-63.3 63.2-16.9-63.3-16.8-16.8-63.3z"
					fill="#c00"
					stroke="#fff"
					strokeWidth={3}
				/>
				<path d="m129.2 47.1 2.4 2.4-2.4-2.4z" fill="#6cc" />
				<path
					d="m115 49.5 2.3 2.4-2.4-2.4m14.3 0 2.4 2.4-2.4-2.4z"
					fill="#9cf"
				/>
				<path
					d="m117.3 51.9 2.4 2.3-2.4-2.3m9.5 0 2.4 2.3-2.4-2.3z"
					fill="#fcc"
				/>
				<path d="m112.5 54.3 2.4 2.3-2.4-2.3z" fill="#69c" />
				<path
					d="m118.1 55.8.8 1.6-.8-1.6m9.5 0 .8 1.6-.8-1.6z"
					fill="#c33"
				/>
				<path d="m131.6 54.3 2.4 2.3-2.4-2.3z" fill="#69c" />
				<path
					d="M112.5 56.6 115 59l-2.4-2.4m19 0L134 59l-2.4-2.4z"
					fill="#9cf"
				/>
				<path
					d="m115 59 2.3 2.4-2.4-2.4m14.3 0 2.4 2.4-2.4-2.4z"
					fill="#fcc"
				/>
				<path
					d="m110.2 61.4 2.3 2.4-2.3-2.4zm23.8 0 2.4 2.4-2.4-2.4z"
					fill="#69c"
				/>
				<path
					d="m110.2 63.8 2.3 2.4-2.3-2.4m23.8 0 2.4 2.4-2.4-2.4z"
					fill="#9cc"
				/>
				<path
					d="m110.2 66.2 2.3 2.3-2.3-2.3m23.8 0 2.4 2.3-2.4-2.3z"
					fill="#cff"
				/>
				<path d="m107.8 68.5 2.4 2.4-2.4-2.4z" fill="#69c" />
				<path
					d="M112.5 68.5 115 71l-2.4-2.4m19 0L134 71l-2.4-2.4z"
					fill="#fcc"
				/>
				<path d="m136.3 68.5 2.4 2.4-2.3-2.4z" fill="#69c" />
				<path d="m107.8 71 2.4 2.3-2.4-2.4z" fill="#9cc" />
				<path
					d="m113.3 72.5.8 1.6-.8-1.6m19 0 .9 1.6-.8-1.6z"
					fill="#c33"
				/>
				<path d="m136.3 71 2.4 2.3-2.3-2.4z" fill="#9cc" />
				<path
					d="m107.8 73.3 2.4 2.4-2.4-2.4m28.6 0 2.3 2.4-2.3-2.4z"
					fill="#cff"
				/>
				<path
					d="m110.2 75.7 2.3 2.3-2.3-2.3m23.8 0 2.4 2.3-2.4-2.3z"
					fill="#fcc"
				/>
				<path d="m105.4 78 2.4 2.4-2.4-2.3z" fill="#9cc" />
				<path
					d="m111 79.6.7 1.6-.8-1.6m23.9 0 .8 1.6-.8-1.6z"
					fill="#c33"
				/>
				<path d="m138.7 78 2.4 2.4-2.4-2.3z" fill="#9cc" />
				<path
					d="m105.4 80.4 2.4 2.4-2.4-2.4m33.3 0 2.4 2.4-2.4-2.4z"
					fill="#ccf"
				/>
				<path
					d="m107.8 82.8 2.4 2.4-2.4-2.4m28.6 0 2.3 2.4-2.3-2.4z"
					fill="#fcc"
				/>
				<path d="m103 85.2 2.4 2.4-2.4-2.4z" fill="#9cc" />
				<path
					d="m108.6 86.8.8 1.6-.8-1.6m28.5 0 .8 1.6-.8-1.6z"
					fill="#c33"
				/>
				<path d="m141.1 85.2 2.4 2.4-2.4-2.4z" fill="#9cc" />
				<path
					d="m103 87.6 2.4 2.4-2.4-2.4m38.1 0 2.4 2.4-2.4-2.4z"
					fill="#ccf"
				/>
				<path
					d="m105.4 90 2.4 2.3-2.4-2.3m33.3 0 2.4 2.3-2.4-2.3z"
					fill="#fcc"
				/>
				<path d="m100.6 92.3 2.4 2.4-2.4-2.4z" fill="#9cc" />
				<path
					d="m105.4 92.3 2.4 2.4-2.4-2.4m33.3 0 2.4 2.4-2.4-2.4z"
					fill="#c33"
				/>
				<path
					d="m143.5 92.3 2.4 2.4-2.4-2.4m-50 2.4 2.4 2.4-2.4-2.4z"
					fill="#9cc"
				/>
				<path
					d="m95.9 94.7 2.4 2.4-2.4-2.4m52.3 0 2.4 2.4-2.3-2.4z"
					fill="#ccf"
				/>
				<path
					d="m150.6 94.7 2.4 2.4-2.4-2.4m-64.2 2.4 2.3 2.4-2.3-2.4z"
					fill="#9cc"
				/>
				<path d="m88.7 97.1 2.4 2.4-2.4-2.4z" fill="#ccf" />
				<path d="m98.3 97.1 2.3 2.4-2.3-2.4z" fill="#fcc" />
				<path
					d="m100.6 97.1 2.4 2.4-2.4-2.4m42.9 0 2.4 2.4-2.4-2.4z"
					fill="#c33"
				/>
				<path d="m145.9 97.1 2.3 2.4L146 97z" fill="#fcc" />
				<path d="m155.4 97.1 2.4 2.4-2.4-2.4z" fill="#ccf" />
				<path d="m157.8 97.1 2.3 2.4-2.3-2.4z" fill="#9cc" />
				<path d="m76.8 99.5 2.4 2.4-2.4-2.4z" fill="#69c" />
				<path d="m79.2 99.5 2.4 2.4-2.4-2.4z" fill="#9cc" />
				<path d="m81.6 99.5 2.4 2.4-2.4-2.4z" fill="#cff" />
				<path d="m91.1 99.5 2.4 2.4-2.4-2.4z" fill="#fcc" />
				<path
					d="m95 100.3 1.7.8-1.6-.8m54.7 0 1.6.8-1.6-.8z"
					fill="#c33"
				/>
				<path d="m153 99.5 2.4 2.4-2.4-2.4z" fill="#fcc" />
				<path d="m162.5 99.5 2.4 2.4-2.4-2.4z" fill="#cff" />
				<path d="m165 99.5 2.3 2.4-2.4-2.4z" fill="#9cc" />
				<path
					d="m167.3 99.5 2.4 2.4-2.4-2.4m-97.6 2.4 2.4 2.3-2.4-2.3z"
					fill="#69c"
				/>
				<path d="m72 101.9 2.5 2.3L72 102z" fill="#9cc" />
				<path d="m74.5 101.9 2.3 2.3-2.3-2.3z" fill="#cff" />
				<path d="m84 101.9 2.4 2.3L84 102z" fill="#fcc" />
				<path
					d="m88 102.7 1.5.8-1.5-.8m69 0 1.6.8-1.6-.8z"
					fill="#c33"
				/>
				<path d="m160.2 101.9 2.3 2.3-2.3-2.3z" fill="#fcc" />
				<path d="m169.7 101.9 2.3 2.3-2.3-2.3z" fill="#cff" />
				<path d="m172 101.9 2.4 2.3-2.3-2.3z" fill="#9cc" />
				<path
					d="m174.4 101.9 2.4 2.3-2.4-2.3m-111.8 2.3 2.3 2.4-2.3-2.4z"
					fill="#69c"
				/>
				<path d="m65 104.2 2.3 2.4-2.4-2.4z" fill="#9cf" />
				<path d="m76.8 104.2 2.4 2.4-2.4-2.4z" fill="#fcc" />
				<path
					d="m80.8 105 1.6.8-1.6-.8m83.3 0 1.6.8-1.6-.8z"
					fill="#c33"
				/>
				<path d="m167.3 104.2 2.4 2.4-2.4-2.4z" fill="#fcc" />
				<path d="m179.2 104.2 2.4 2.4-2.4-2.4z" fill="#9cf" />
				<path d="m181.6 104.2 2.3 2.4-2.3-2.4z" fill="#69c" />
				<path d="m55.4 106.6 2.4 2.4-2.4-2.4z" fill="#6cc" />
				<path d="m57.8 106.6 2.4 2.4-2.4-2.4z" fill="#9cf" />
				<path
					d="m67.3 106.6 2.4 2.4-2.4-2.4zm109.5 0 2.4 2.4-2.4-2.4z"
					fill="#fcc"
				/>
				<path d="m186.3 106.6 2.4 2.4-2.4-2.4z" fill="#9cf" />
				<path
					d="m188.7 106.6 2.4 2.4-2.4-2.4M48.3 109l2.4 2.4-2.4-2.4z"
					fill="#6cc"
				/>
				<path d="m50.6 109 2.4 2.4-2.3-2.4z" fill="#ccf" />
				<path d="m60.2 109 2.3 2.4-2.3-2.4z" fill="#fcc" />
				<path
					d="m64.1 109.8 1.6.8-1.6-.8m116.7 0 1.6.8-1.6-.8z"
					fill="#c33"
				/>
				<path d="m184 109 2.3 2.4-2.3-2.4z" fill="#fcc" />
				<path d="m193.5 109 2.4 2.4-2.4-2.4z" fill="#ccf" />
				<path d="m195.9 109 2.3 2.4-2.3-2.4z" fill="#6cc" />
				<path d="m41.1 111.4 2.4 2.4-2.4-2.4z" fill="#9cc" />
				<path d="m43.5 111.4 2.4 2.4-2.4-2.4z" fill="#ccf" />
				<path
					d="m53 111.4 2.4 2.4-2.4-2.4zm138.1 0 2.4 2.4-2.4-2.4z"
					fill="#fcc"
				/>
				<path d="m200.6 111.4 2.4 2.4-2.4-2.4z" fill="#ccf" />
				<path
					d="m203 111.4 2.4 2.4-2.4-2.4m-166.6 2.4 2.4 2.3-2.4-2.3z"
					fill="#9cc"
				/>
				<path
					d="m48.3 113.8 2.4 2.3-2.4-2.3zm147.6 0 2.3 2.3-2.3-2.3z"
					fill="#c66"
				/>
				<path
					d="m207.8 113.8 2.3 2.3-2.3-2.3M41 116l2.4 2.4L41 116z"
					fill="#9cc"
				/>
				<path d="m43.5 116.1 2.4 2.4-2.4-2.4z" fill="#ccf" />
				<path
					d="m53 116.1 2.4 2.4-2.4-2.4m138.1 0 2.4 2.4-2.4-2.4z"
					fill="#fcc"
				/>
				<path d="m200.6 116.1 2.4 2.4-2.4-2.4z" fill="#ccf" />
				<path d="m203 116.1 2.4 2.4-2.4-2.4z" fill="#9cc" />
				<path d="m48.3 118.5 2.4 2.4-2.4-2.4z" fill="#6cc" />
				<path d="M50.6 118.5 53 121l-2.3-2.4z" fill="#ccf" />
				<path d="m60.2 118.5 2.3 2.4-2.3-2.4z" fill="#fcc" />
				<path
					d="m64.1 119.3 1.6.8-1.6-.8m116.7 0 1.6.8-1.6-.8z"
					fill="#c33"
				/>
				<path d="m184 118.5 2.3 2.4-2.3-2.4z" fill="#fcc" />
				<path d="m193.5 118.5 2.4 2.4-2.4-2.4z" fill="#ccf" />
				<path
					d="m195.9 118.5 2.3 2.4-2.3-2.4M55.4 121l2.4 2.4-2.4-2.4z"
					fill="#6cc"
				/>
				<path d="m57.8 120.9 2.4 2.4-2.4-2.4z" fill="#9cf" />
				<path
					d="m67.3 120.9 2.4 2.4-2.4-2.4zm109.5 0 2.4 2.4-2.4-2.4z"
					fill="#fcc"
				/>
				<path d="m186.3 120.9 2.4 2.4-2.4-2.4z" fill="#9cf" />
				<path d="m188.7 120.9 2.4 2.4-2.4-2.4z" fill="#6cc" />
				<path d="m62.5 123.3 2.4 2.4-2.3-2.4z" fill="#69c" />
				<path d="m65 123.3 2.3 2.4-2.4-2.4z" fill="#9cf" />
				<path d="m76.8 123.3 2.4 2.4-2.4-2.4z" fill="#fcc" />
				<path
					d="m80.8 124 1.6.9-1.6-.8m83.3 0 1.6.8-1.6-.8z"
					fill="#c33"
				/>
				<path d="m167.3 123.3 2.4 2.4-2.4-2.4z" fill="#fcc" />
				<path d="m179.2 123.3 2.4 2.4-2.4-2.4z" fill="#9cf" />
				<path
					d="m181.6 123.3 2.3 2.4-2.3-2.4m-111.9 2.4 2.4 2.3-2.4-2.3z"
					fill="#69c"
				/>
				<path d="m72 125.7 2.5 2.3-2.4-2.3z" fill="#9cc" />
				<path d="m74.5 125.7 2.3 2.3-2.3-2.3z" fill="#cff" />
				<path d="m84 125.7 2.4 2.3-2.4-2.3z" fill="#fcc" />
				<path
					d="m88 126.5 1.5.7-1.5-.8m69 0 1.6.8-1.6-.8z"
					fill="#c33"
				/>
				<path d="m160.2 125.7 2.3 2.3-2.3-2.3z" fill="#fcc" />
				<path d="m169.7 125.7 2.3 2.3-2.3-2.3z" fill="#cff" />
				<path d="m172 125.7 2.4 2.3-2.3-2.3z" fill="#9cc" />
				<path
					d="m174.4 125.7 2.4 2.3-2.4-2.3M76.8 128l2.4 2.4-2.4-2.4z"
					fill="#69c"
				/>
				<path d="m79.2 128 2.4 2.4-2.4-2.4z" fill="#9cc" />
				<path d="m81.6 128 2.4 2.4-2.4-2.4z" fill="#cff" />
				<path d="m91.1 128 2.4 2.4-2.4-2.4z" fill="#fcc" />
				<path
					d="m95 128.8 1.7.8-1.6-.8m54.7 0 1.6.8-1.6-.8z"
					fill="#c33"
				/>
				<path d="m153 128 2.4 2.4-2.4-2.4z" fill="#fcc" />
				<path d="m162.5 128 2.4 2.4-2.4-2.4z" fill="#cff" />
				<path d="m165 128 2.3 2.4-2.4-2.4z" fill="#9cc" />
				<path d="m167.3 128 2.4 2.4-2.4-2.4z" fill="#69c" />
				<path d="m86.4 130.4 2.3 2.4-2.3-2.4z" fill="#9cc" />
				<path d="m88.7 130.4 2.4 2.4-2.4-2.4z" fill="#ccf" />
				<path d="m98.3 130.4 2.3 2.4-2.3-2.4z" fill="#fcc" />
				<path
					d="m100.6 130.4 2.4 2.4-2.4-2.4m42.9 0 2.4 2.4-2.4-2.4z"
					fill="#c33"
				/>
				<path d="m145.9 130.4 2.3 2.4-2.3-2.4z" fill="#fcc" />
				<path d="m155.4 130.4 2.4 2.4-2.4-2.4z" fill="#ccf" />
				<path
					d="m157.8 130.4 2.3 2.4-2.3-2.4m-64.3 2.4 2.4 2.4-2.4-2.4z"
					fill="#9cc"
				/>
				<path
					d="m95.9 132.8 2.4 2.4-2.4-2.4m52.3 0 2.4 2.4-2.3-2.4z"
					fill="#ccf"
				/>
				<path
					d="m150.6 132.8 2.4 2.4-2.4-2.4m-50 2.4 2.4 2.4-2.4-2.4z"
					fill="#9cc"
				/>
				<path
					d="m105.4 135.2 2.4 2.4-2.4-2.4m33.3 0 2.4 2.4-2.4-2.4z"
					fill="#c33"
				/>
				<path d="m143.5 135.2 2.4 2.4-2.4-2.4z" fill="#9cc" />
				<path
					d="m105.4 137.6 2.4 2.3-2.4-2.3m33.3 0 2.4 2.3-2.4-2.3z"
					fill="#fcc"
				/>
				<path d="m103 140 2.4 2.3-2.4-2.4z" fill="#ccf" />
				<path
					d="m108.6 141.5.8 1.6-.8-1.6m28.5 0 .8 1.6-.8-1.6z"
					fill="#c33"
				/>
				<path d="m141.1 140 2.4 2.3-2.4-2.4z" fill="#ccf" />
				<path
					d="m103 142.3 2.4 2.4-2.4-2.4m38.1 0 2.4 2.4-2.4-2.4z"
					fill="#9cc"
				/>
				<path
					d="m107.8 144.7 2.4 2.4-2.4-2.4m28.6 0 2.3 2.4-2.3-2.4z"
					fill="#fcc"
				/>
				<path d="m105.4 147 2.4 2.5-2.4-2.4z" fill="#ccf" />
				<path
					d="m111 148.7.7 1.6-.8-1.6m23.9 0 .8 1.6-.8-1.6z"
					fill="#c33"
				/>
				<path d="m138.7 147 2.4 2.5-2.4-2.4z" fill="#ccf" />
				<path
					d="m105.4 149.5 2.4 2.3-2.4-2.3m33.3 0 2.4 2.3-2.4-2.3z"
					fill="#9cc"
				/>
				<path
					d="m110.2 151.8 2.3 2.4-2.3-2.3m23.8 0 2.4 2.3-2.4-2.3z"
					fill="#fcc"
				/>
				<path d="m107.8 154.2 2.4 2.4-2.4-2.4z" fill="#cff" />
				<path
					d="m113.3 155.8.8 1.6-.8-1.6m19 0 .9 1.6-.8-1.6z"
					fill="#c33"
				/>
				<path d="m136.3 154.2 2.4 2.4-2.3-2.4z" fill="#cff" />
				<path
					d="m107.8 156.6 2.4 2.4-2.4-2.4m28.6 0 2.3 2.4-2.3-2.4z"
					fill="#9cc"
				/>
				<path d="m107.8 159 2.4 2.4-2.4-2.4z" fill="#69c" />
				<path
					d="m112.5 159 2.4 2.4-2.4-2.4m19 0 2.5 2.4-2.4-2.4z"
					fill="#fcc"
				/>
				<path d="m136.3 159 2.4 2.4-2.3-2.4z" fill="#69c" />
				<path
					d="m110.2 161.4 2.3 2.3-2.3-2.3zm23.8 0 2.4 2.3-2.4-2.3z"
					fill="#cff"
				/>
				<path
					d="m110.2 163.8 2.3 2.3-2.3-2.3m23.8 0 2.4 2.3-2.4-2.3z"
					fill="#9cc"
				/>
				<path
					d="m110.2 166.1 2.3 2.4-2.3-2.4m23.8 0 2.4 2.4-2.4-2.4z"
					fill="#69c"
				/>
				<path
					d="m115 168.5 2.3 2.4-2.4-2.4m14.3 0 2.4 2.4-2.4-2.4z"
					fill="#fcc"
				/>
				<path d="m112.5 170.9 2.4 2.4-2.4-2.4z" fill="#9cf" />
				<path
					d="m118.1 172.5.8 1.6-.8-1.6m9.5 0 .8 1.6-.8-1.6z"
					fill="#c33"
				/>
				<path d="m131.6 170.9 2.4 2.4-2.4-2.4z" fill="#9cf" />
				<path
					d="m112.5 173.3 2.4 2.3-2.4-2.3m19 0 2.5 2.3-2.4-2.3z"
					fill="#69c"
				/>
				<path
					d="m117.3 175.7 2.4 2.3-2.4-2.3m9.5 0 2.4 2.3-2.4-2.3z"
					fill="#fcc"
				/>
				<path
					d="m115 178 2.3 2.4-2.4-2.4zm14.2 0 2.4 2.4-2.4-2.4z"
					fill="#9cf"
				/>
				<path
					d="m115 180.4 2.3 2.4-2.4-2.4m14.3 0 2.4 2.4-2.4-2.4z"
					fill="#6cc"
				/>
				<path
					d="m119.7 182.8 2.4 2.4-2.4-2.4m4.7 0 2.4 2.4-2.3-2.4z"
					fill="#fcc"
				/>
				<path
					d="m117.3 185.2 2.4 2.3-2.4-2.3m9.5 0 2.4 2.3-2.4-2.3z"
					fill="#ccf"
				/>
				<path d="m117.3 187.6 2.4 2.3-2.4-2.3z" fill="#6cc" />
				<path d="m122 187.6 2.4 2.3-2.3-2.3z" fill="#c66" />
				<path d="m126.8 187.6 2.4 2.3-2.4-2.3z" fill="#6cc" />
				<path
					d="m119.7 192.3 2.4 2.4-2.4-2.4m4.7 0 2.4 2.4-2.3-2.4z"
					fill="#ccf"
				/>
				<path
					d="m119.7 194.7 2.4 2.4-2.4-2.4m4.7 0 2.4 2.4-2.3-2.4m-2.4 4.8 2.4 2.3-2.4-2.4z"
					fill="#9cc"
				/>
			</g>
		</Box>
	);
}
