import clsx from "clsx";
import type { ComponentProps, HTMLProps } from "react";
import type { WithSize } from "../../common-types";
import { Tab } from "../tabs/Tab";
import { Tabs } from "../tabs/Tabs";
import * as styles from "./styles.css";

/**
 * Header HTML element.
 */
export function Header({
	children,
	className,
	actions,
	size = "lg",
	tabs,
	...rest
}: Omit<HTMLProps<HTMLElement>, "size"> &
	WithSize & {
		/**
		 * Main content.
		 */
		children: React.ReactNode;

		/**
		 * Actions to be displayed on the right side of the header.
		 */
		actions?: React.ReactNode;

		/**
		 * Tabs to be displayed underneath the header.
		 */
		tabs?: Array<ComponentProps<typeof Tab>>;
	}) {
	return (
		<>
			<header
				className={clsx(className, styles.header({ size }))}
				{...rest}
			>
				{children}
				{actions && <div className={styles.actions}>{actions}</div>}
			</header>
			{tabs && <Tabs size={size} tabs={tabs} />}
		</>
	);
}
