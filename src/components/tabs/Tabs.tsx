import clsx from "clsx";
import * as React from "react";
import { ComponentProps } from "react";
import { WithSize } from "../../common-types";
import { arrayHasLength } from "../../lib/array_has_length";
import { utilCss } from "../../styles/utils/util_css.css";
import { Tab } from "./Tab";
import * as styles from "./Tabs.css";

export function Tabs({
	tabs,
	justifyContent = "start",
	size,
}: WithSize & {
	tabs: Array<ComponentProps<typeof Tab>>;
	justifyContent?: "start" | "space-between";
}) {
	return (
		<section className={styles.section({ size })}>
			<nav
				role="tablist"
				className={clsx(styles.tabList, utilCss({ justifyContent }))}
			>
				{arrayHasLength(tabs) && React.Children.map(tabs, Tab)}
			</nav>
		</section>
	);
}
