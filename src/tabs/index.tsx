import type { ComponentProps } from "react";
import type {
    TabListProps as AriaTabListProps,
    TabPanelProps as AriaTabPanelProps,
    TabProps as AriaTabProps,
    TabsProps as AriaTabsProps,
} from "react-aria-components";

import clsx from "clsx";
import { motion } from "framer-motion";
import { useLayoutEffect, useState } from "react";
import {
    Tab as AriaTab,
    TabList as AriaTabList,
    TabPanel as AriaTabPanel,
    Tabs as AriaTabs,
} from "react-aria-components";

import "./styles.css";

function Tab({ id, ...props }: AriaTabProps) {
    return (
        <AriaTab
            className="tab"
            id={id}
            {...props}
        >
            {({ defaultChildren, isSelected }) => {
                return (
                    <>
                        {isSelected ? (
                            <motion.span
                                className="indicator"
                                // layoutId={animationKey}
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
                        <div className="inner">{defaultChildren}</div>
                    </>
                );
            }}
        </AriaTab>
    );
}

/**
 * A list of tabs that can be selected to display a corresponding panel.
 * A function passed as the children of the `Collection` component returns a corresponding `<Tab>` for each tab.
 */
function TabList({
    justify = "start",
    ...props
}: Omit<
    AriaTabListProps<Omit<ComponentProps<typeof Tab>, "animationKey">>,
    "className"
> & {
    justify?: "space-evenly" | "start";
}) {
    return (
        <div className="tab-list">
            <AriaTabList
                className={clsx("inner", justify)}
                {...props}
            >
                {props.children}
            </AriaTabList>
        </div>
    );
}

/**
 * A panel that corresponds to a tab. A function passed as the children of the `Collection` component returns a corresponding `<TabPanel>` for each tab.
 */
function TabPanel(props: Omit<AriaTabPanelProps, "className">) {
    return <AriaTabPanel {...props} />;
}

/**
 *
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
function TabsContainer({ children, ...props }: AriaTabsProps) {
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
        <AriaTabs
            {...tabsProps}
            onSelectionChange={(k) => {
                setSelectedKey(k);
                controlledOnSelectionChange?.(k);
            }}
            selectedKey={selectedKey}
        >
            {children}
        </AriaTabs>
    );
}
/**
 * Tabs organize content into multiple sections and allow users to navigate between them. [Built with React Aria Tabs](https://react-spectrum.adobe.com/react-aria/Tabs.html)
 */
export const Tabs = {
    Container: TabsContainer,
    Content: TabPanel,
    Item: Tab,
    List: TabList,
};
