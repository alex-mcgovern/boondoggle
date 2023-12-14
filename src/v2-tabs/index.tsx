import { motion } from "framer-motion";
import React from "react";
import {
	Tab as ReactAriaTab,
	TabList as ReactAriaTabList,
	type TabListProps as ReactAriaTabListProps,
	TabPanel as ReactAriaTabPanel,
	type TabPanelProps as ReactAriaTabPanelProps,
	type TabProps as ReactAriaTabProps,
	Tabs as ReactAriaTabs,
	type TabsProps as ReactAriaTabsProps,
} from "react-aria-components";
import { tabCSS, tabIndicatorCSS, tabListCSS } from "./styles.css";

/** -----------------------------------------------------------------------------
 * TAB
 * ------------------------------------------------------------------------------- */

type V2TabProps = Omit<ReactAriaTabProps, "className"> & {
	label: string;
};

export const V2Tab = ({ id, label, ...props }: V2TabProps) => {
	return (
		<ReactAriaTab id={id} className={tabCSS} {...props}>
			{({ isSelected }) => {
				return (
					<>
						{isSelected ? (
							<motion.span
								layoutId="tab_indicator"
								className={tabIndicatorCSS}
								transition={{
									type: "spring",
									stiffness: 1000,
									damping: 100,
								}}
							/>
						) : null}
						{label}
					</>
				);
			}}
		</ReactAriaTab>
	);
};

/** -----------------------------------------------------------------------------
 * TAB LIST
 * ------------------------------------------------------------------------------- */

export function V2TabList({
	items,
	...props
}: Omit<ReactAriaTabListProps<V2TabProps>, "className">) {
	return (
		<ReactAriaTabList className={tabListCSS} items={items} {...props}>
			{(tab) => <V2Tab {...tab} />}
		</ReactAriaTabList>
	);
}

/** -----------------------------------------------------------------------------
 * TAB PANEL
 * ------------------------------------------------------------------------------- */

export const V2TabPanel = (
	props: Omit<ReactAriaTabPanelProps, "className">,
) => {
	return <ReactAriaTabPanel {...props} />;
};

/** -----------------------------------------------------------------------------
 * TABS
 * ------------------------------------------------------------------------------- */

export const V2Tabs = ({ children, ...props }: ReactAriaTabsProps) => {
	const {
		selectedKey: controlledSelectedKey,
		onSelectionChange: controlledOnSelectionChange,
		...tabsProps
	} = props || {};

	const [selectedKey, setSelectedKey] = React.useState(controlledSelectedKey);

	return (
		<ReactAriaTabs
			{...tabsProps}
			selectedKey={selectedKey}
			onSelectionChange={(k) => {
				setSelectedKey(k);
				controlledOnSelectionChange?.(k);
			}}
		>
			{children}
		</ReactAriaTabs>
	);
};
