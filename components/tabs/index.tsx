import type {
    TabListProps as ReactAriaTabListProps,
    TabPanelProps as ReactAriaTabPanelProps,
    TabProps as ReactAriaTabProps,
    TabsProps as ReactAriaTabsProps,
} from "react-aria-components";

import clsx from "clsx";
import { motion } from "framer-motion";
import { useLayoutEffect, useState } from "react";
import {
    Tab as ReactAriaTab,
    TabList as ReactAriaTabList,
    TabPanel as ReactAriaTabPanel,
    Tabs as ReactAriaTabs,
} from "react-aria-components";

import "./styles.css";

export type TabProps = Omit<ReactAriaTabProps, "className"> & {
    /**
     * A unique key for the tab that is used to animate the indicator.
     */
    animationKey: string;
    /**
     * The label of the tab.
     */
    label?: string;
};

function Tab({ animationKey, id, label, ...props }: TabProps) {
    return (
        <ReactAriaTab
            className="tab"
            id={id}
            {...props}
        >
            {({ isSelected }) => {
                return (
                    <>
                        {isSelected ? (
                            <motion.span
                                className="indicator"
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
                        <div className="inner">{label}</div>
                    </>
                );
            }}
        </ReactAriaTab>
    );
}

/**
 * A list of tabs that can be selected to display a corresponding panel.
 * A function passed as the children of the `Collection` component returns a corresponding `<Tab>` for each tab.
 */
export function TabList({
    items,
    justify = "start",
    ...props
}: Omit<ReactAriaTabListProps<Omit<TabProps, "animationKey">>, "className"> & {
    justify?: "space-evenly" | "start";
}) {
    return (
        <div className="tab-list">
            <ReactAriaTabList
                className={clsx("inner", justify)}
                items={items}
                {...props}
            >
                {(tab) => (
                    <Tab
                        animationKey={justify}
                        {...tab}
                    />
                )}
            </ReactAriaTabList>
        </div>
    );
}

/**
 * A panel that corresponds to a tab. A function passed as the children of the `Collection` component returns a corresponding `<TabPanel>` for each tab.
 */
export function TabPanel(props: Omit<ReactAriaTabPanelProps, "className">) {
    return <ReactAriaTabPanel {...props} />;
}

/**
 * Tabs organize content into multiple sections and allow users to navigate between them. [Built with React Aria Tabs](https://react-spectrum.adobe.com/react-aria/Tabs.html)
 *
 * ## Install
 *
 * ```sh
 * npm i boondoggle
 * ```
 *
 * ## Usage
 *
 * ```ts
 * import { Tabs, type TabsProps } from "boondoggle/tabs"
 * ```
 */
export function Tabs({ children, ...props }: ReactAriaTabsProps) {
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
    }, [controlledSelectedKey, selectedKey, setSelectedKey]);

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
}
