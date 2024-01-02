import clsx from "clsx";
import { ComponentProps } from "react";
import { arrayHasLength } from "../../_lib/array-has-length";
import { Button, ButtonProps } from "../button";
import { sprinkles } from "../sprinkles/index.css";
import { tabCSS, tabCountCSS, tabListCSS, tabsSectionCss } from "./styles.css";

const TabCount = ({ count }: { count: number }) => {
	return <div className={tabCountCSS}>{count}</div>;
};

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
				size="sm"
				{...rest}
				slotRight={
					typeof count === "number" ? (
						<TabCount count={count} />
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
	areTabsFullWidth,
}: {
	tabs: Array<ComponentProps<typeof Tab>>;
	justifyContent?: "start" | "space-between";
	areTabsFullWidth?: boolean;
}) {
	return (
		<section className={tabsSectionCss}>
			<nav
				role="tablist"
				className={clsx(tabListCSS, sprinkles({ justifyContent }))}
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
