import clsx from "clsx";
import { ComponentProps } from "react";
import { arrayHasLength } from "../_lib/array-has-length";
import { Button, ButtonProps } from "../button";
import { utilCss } from "../index.css";
import { Pill } from "../pill";
import { WithSize } from "../types";
import { sectionCSS, tabCSS, tabListCSS } from "./styles.css";

function Tab({
	className,
	active,
	isTabFullWidth,
	children,
	count,
	...rest
}: ButtonProps & { count?: number; isTabFullWidth?: boolean }) {
	return (
		<div className={clsx(tabCSS({ active, isTabFullWidth }), className)}>
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
		<section className={sectionCSS({ size })}>
			<nav
				role="tablist"
				className={clsx(tabListCSS, utilCss({ justifyContent }))}
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
