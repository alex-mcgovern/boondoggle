import clsx from "clsx";
import { ComponentProps } from "react";
import { WithSize } from "../../common-types";
import { utilCss } from "../../index.css";
import { arrayHasLength } from "../../lib/array-has-length";
import { Button, ButtonProps } from "../button";
import { Pill } from "../pill";
import * as styles from "./styles.css";

function Tab({
	className,
	active,
	isTabFullWidth,
	children,
	count,
	...rest
}: ButtonProps & { count?: number; isTabFullWidth?: boolean }) {
	return (
		<div
			className={clsx(styles.tab({ active, isTabFullWidth }), className)}
		>
			<Button
				{...rest}
				slotRight={
					typeof count === "number" ? (
						<Pill colorOverlay="blue" size="sm">
							{count}
						</Pill>
					) : undefined
				}
				appearance="ghost"
			>
				{children}
			</Button>
		</div>
	);
}

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
