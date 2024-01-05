import { faExclamationCircle } from "@fortawesome/pro-solid-svg-icons/faExclamationCircle";
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
import { Loader } from "../loader";
import { Icon } from "../icon";
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
	isLoading,
	isError,
}: { count?: number; isLoading?: boolean; isError?: boolean }) => {
	if (isError) {
		return (
			<Icon
				size="sm"
				icon={faExclamationCircle}
				className={tabCountIconCSS}
			/>
		);
	}
	if (isLoading) {
		return <Loader size="sm" className={tabCountIconCSS} />;
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
	label?: string;
	slotLeft?: React.ReactNode;
	slotRight?: React.ReactNode;
	animationKey: string;
};

const V2Tab = ({
	id,
	label,
	slotLeft,
	slotRight,
	animationKey,
	...props
}: V2TabProps) => {
	return (
		<ReactAriaTab id={id} className={tabOuterCSS} {...props}>
			{({ isSelected }) => {
				return (
					<>
						{isSelected ? (
							<motion.span
								layoutId={animationKey}
								className={tabIndicatorCSS}
								transition={{
									type: "spring",
									stiffness: 750,
									damping: 75,
								}}
								style={{
									originY: "0px", // prevent vertical movement
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
	justify?: "start" | "space-evenly";
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
