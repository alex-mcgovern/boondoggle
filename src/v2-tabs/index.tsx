import {
	Tabs as ReactAriaTabs,
	type TabsProps as ReactAriaTabsProps,
	TabList as ReactAriaTabList,
	type TabListProps as ReactAriaTabListProps,
	Tab as ReactAriaTab,
	type TabProps as ReactAriaTabProps,
	TabPanel as ReactAriaTabPanel,
	type TabPanelProps as ReactAriaTabPanelProps,
	Key,
} from "react-aria-components";
import { tabCSS, tabListCSS } from "./styles.css";
import React from "react";

/** -----------------------------------------------------------------------------
 * UTILS FOR ANIMATION
 * ------------------------------------------------------------------------------- */

const getTabElementById = (
	tabElements: NodeListOf<Element> | undefined,
	key: Key,
) => {
	if (!tabElements) {
		return undefined;
	}
	console.debug("debug  tabElements:", tabElements);
	return [...tabElements.values()].find((v) => v.id === key);
};

/** -----------------------------------------------------------------------------
 * COMPONENTS
 * ------------------------------------------------------------------------------- */

export const V2Tab = (props: Omit<ReactAriaTabProps, "className">) => {
	return <ReactAriaTab className={tabCSS} {...props} />;
};

export const V2TabList = (
	props: Omit<ReactAriaTabListProps<object>, "className">,
) => {
	return <ReactAriaTabList className={tabListCSS} {...props} />;
};

export const V2TabPanel = (
	props: Omit<ReactAriaTabPanelProps, "className">,
) => {
	return <ReactAriaTabPanel {...props} />;
};

export const V2Tabs = (props: ReactAriaTabsProps) => {
	const [selectedKey, setSelectedKey] = React.useState<Key>();
	console.debug("debug  selectedKey:", selectedKey);

	const tabsRef = React.createRef<HTMLDivElement>();

	// Find all the tab elements so we can use their dimensions.
	const [tabElements, setTabElements] = React.useState<NodeListOf<Element>>();

	React.useEffect(() => {
		if (!tabElements) {
			const tabs = tabsRef.current?.querySelectorAll("[role=tab]");
			console.debug("debug  tabs:", tabs);
			setTabElements(tabs);
		}
	}, [tabElements, tabsRef, setTabElements]);

	const onSelectionChange = React.useCallback(
		(key: Key) => {
			// alert("yas");
			console.log(key);
			setSelectedKey(key);
		},
		[tabElements, setSelectedKey],
	);

	return (
		<ReactAriaTabs
			{...props}
			selectedKey={selectedKey}
			onSelectionChange={(key: Key) => {
				console.log(getTabElementById(tabElements, key));
				setSelectedKey(key);
			}}
			ref={tabsRef}
		/>
	);
};
