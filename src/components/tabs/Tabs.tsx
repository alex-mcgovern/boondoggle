import clsx from "clsx";
import * as styles from "./Tabs.css";
import { utilCss } from "../../styles/utils/util_css.css";
import { Tab } from "./Tab";
import { arrayHasLength } from "../../lib/array_has_length";
import { ComponentProps } from "react";

export function Tabs({
	tabs,
	justifyContent = "start",
}: {
	tabs: Array<ComponentProps<typeof Tab>>;
	justifyContent?: "start" | "space-between";
}) {
	return (
		<div className={clsx(styles.wrapper, utilCss({ justifyContent }))}>
			{arrayHasLength(tabs) && tabs.map(Tab)}
		</div>
	);
}
