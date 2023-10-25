import clsx from "clsx"; import { ComponentProps } from "react"; import { WithSize } from "../../src/common-types"; import { arrayHasLength } from "../../src/lib/array_has_length"; import { css } from "../../src/styles/utils/util_css.css"; import { Tab } from "./Tab"; import * as styles from "./Tabs.css";

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
				className={clsx(styles.tabList, css({ justifyContent }))}
			>
				{arrayHasLength(tabs) &&
					tabs.map((tab) => {
						return <Tab key={tab.name} {...tab} />;
					})}
			</nav>
		</section>
	);
}
