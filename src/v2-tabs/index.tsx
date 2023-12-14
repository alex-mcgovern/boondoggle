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
import {
	tabOuterCSS,
	tabIndicatorCSS,
	tabListInnerCSS,
	tabListOuterCSS,
	tabInnerCSS,
	tabCountCSS,
} from "./styles.css";
import { Loader } from "../loader";

/** -----------------------------------------------------------------------------
 * TAB COUNT
 * ------------------------------------------------------------------------------- */

export const V2TabCount = ({
	count,
	isLoading,
}: { count?: number; isLoading?: boolean }) => {
	if (!isLoading && !count) {
		return null;
	}
	return <div className={tabCountCSS}>{isLoading ? <Loader /> : count}</div>;
};

/** -----------------------------------------------------------------------------
 * TAB
 * ------------------------------------------------------------------------------- */

export type V2TabProps = Omit<ReactAriaTabProps, "className"> & {
	label: string;
	slotLeft?: React.ReactNode;
	slotRight?: React.ReactNode;
};

const V2Tab = ({ id, label, slotLeft, slotRight, ...props }: V2TabProps) => {
	return (
		<ReactAriaTab id={id} className={tabOuterCSS} {...props}>
			{({ isSelected }) => {
				return (
					<>
						{isSelected ? (
							<motion.span
								layoutId="tab_indicator"
								className={tabIndicatorCSS}
								transition={{
									type: "spring",
									stiffness: 750,
									damping: 75,
								}}
							/>
						) : null}
						<div className={tabInnerCSS}>
							{slotLeft}
							{label}
							{slotRight}
						</div>
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
		<div className={tabListOuterCSS}>
			<ReactAriaTabList
				className={tabListInnerCSS}
				items={items}
				{...props}
			>
				{(tab) => <V2Tab {...tab} />}
			</ReactAriaTabList>
		</div>
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

	React.useLayoutEffect(() => {
		if (controlledSelectedKey !== selectedKey) {
			setSelectedKey(controlledSelectedKey);
		}
	}, [
		controlledSelectedKey,
		controlledSelectedKey,
		selectedKey,
		setSelectedKey,
	]);

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
