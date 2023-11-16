import clsx from "clsx";
import { ComponentProps } from "react";
import { WithSize } from "../../common-types";
import { arrayHasLength } from "../../lib/array-has-length";
import { utilCss } from "../../styles/utils/util_css.css";
import { Tab } from "./Tab";
import * as styles from "./Tabs.css";

export function Tabs({
	tabs,
	justifyContent = "start",
	size,
	areTabsFullWidth,
}: WithSize & {
	tabs: Array<ComponentProps<typeof Tab>>;
	justifyContent?: "start" | "space-between";
	areTabsFullWidth?: boolean;
}) {
	return (
		<section className={styles.section({ size })}>
			<nav
				role="tablist"
				className={clsx(styles.tabList, utilCss({ justifyContent }))}
			>
				{arrayHasLength(tabs) &&
					tabs.map((tab) => {
						return (
							<Tab
								isTabFullWidth={areTabsFullWidth}
								key={tab.name}
								{...tab}
							/>
						);
					})}
			</nav>
		</section>
	);
}
