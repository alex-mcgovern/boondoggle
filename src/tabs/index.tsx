import type { ReactNode} from "react";
import type {
	TabListProps as ReactAriaTabListProps,
	TabPanelProps as ReactAriaTabPanelProps,
	TabProps as ReactAriaTabProps,
	TabsProps as ReactAriaTabsProps} from "react-aria-components";

import { faExclamationCircle } from "@fortawesome/pro-solid-svg-icons/faExclamationCircle";
import { motion } from "framer-motion";
import { useLayoutEffect, useState } from "react";
import {
	Tab as ReactAriaTab,
	TabList as ReactAriaTabList,
	TabPanel as ReactAriaTabPanel,
	Tabs as ReactAriaTabs
} from "react-aria-components";

import { Icon } from "../icon";
import { Loader } from "../loader";
import {
	tabCountCSS,
	tabCountIconCSS,
	tabIndicatorCSS,
	tabInnerCSS,
	tabListInnerCSS,
	tabListOuterCSS,
	tabOuterCSS,
} from "./styles.css";

/** -----------------------------------------------------------------------------
 * TAB COUNT
 * ------------------------------------------------------------------------------- */

export const V2TabCount = ({
	count,
	isError,
	isLoading,
}: { count?: number; isError?: boolean; isLoading?: boolean }) => {
	if (isError) {
		return (
			<Icon
				className={tabCountIconCSS}
				icon={faExclamationCircle}
				size="sm"
			/>
		);
	}
	if (isLoading) {
		return <Loader className={tabCountIconCSS} size="sm" />;
	}
	if (!isLoading && !count) {
		return <div className={tabCountCSS}>0</div>;
	}
	return <div className={tabCountCSS}>{isLoading ? <Loader /> : count}</div>;
};

/** -----------------------------------------------------------------------------
 * TAB
 * ------------------------------------------------------------------------------- */

export type V2TabProps = Omit<ReactAriaTabProps, "className"> & {
	animationKey: string;
	label?: string;
	slotLeft?: ReactNode;
	slotRight?: ReactNode;
};

const V2Tab = ({
	animationKey,
	id,
	label,
	slotLeft,
	slotRight,
	...props
}: V2TabProps) => {
	return (
		<ReactAriaTab className={tabOuterCSS} id={id} {...props}>
			{({ isSelected }) => {
				return (
					<>
						{isSelected ? (
							<motion.span
								className={tabIndicatorCSS}
								layoutId={animationKey}
								style={{
									originY: "0px", // prevent vertical movement
								}}
								transition={{
									damping: 75,
									stiffness: 750,
									type: "spring",
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
	justify = "start",
	...props
}: Omit<
	ReactAriaTabListProps<Omit<V2TabProps, "animationKey">>,
	"className"
> & {
	justify?: "space-evenly" | "start";
}) {
	return (
		<div className={tabListOuterCSS}>
			<ReactAriaTabList
				className={tabListInnerCSS({ justify })}
				items={items}
				{...props}
			>
				{(tab) => <V2Tab animationKey={justify} {...tab} />}
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
		onSelectionChange: controlledOnSelectionChange,
		selectedKey: controlledSelectedKey,
		...tabsProps
	} = props || {};

	const [selectedKey, setSelectedKey] = useState(controlledSelectedKey);

	useLayoutEffect(() => {
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
			onSelectionChange={(k) => {
				setSelectedKey(k);
				controlledOnSelectionChange?.(k);
			}}
			selectedKey={selectedKey}
		>
			{children}
		</ReactAriaTabs>
	);
};
