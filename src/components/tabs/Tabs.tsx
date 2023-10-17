import clsx from "clsx";
import * as styles from "./Tabs.css";
import { utilCss } from "../../styles/utils/util_css.css";
import { Tab } from "./Tab";
import { arrayHasLength } from "../../lib/array_has_length";
import { ComponentProps } from "react";
import { WithSize } from "../../common-types";

export function Tabs({
	tabs,
	justifyContent = "start",
	size,
}: WithSize & {
	tabs: Array<ComponentProps<typeof Tab>>;
	justifyContent?: "start" | "space-between";
}) {
	return (
		<nav
			role="tablist"
			className={clsx(
				styles.wrapper({ size }),
				utilCss({ justifyContent }),
			)}
		>
			{arrayHasLength(tabs) && tabs.map(Tab)}
		</nav>
	);
}
