import type { AnchorHTMLAttributes, ForwardedRef, ReactNode } from "react";
import type {
	MenuItemProps as AriaMenuItemProps,
	MenuProps as AriaMenuProps,
	MenuTriggerProps as AriaMenuTriggerProps,
	SectionProps as AriaSectionProps,
	SubmenuTriggerProps as AriaSubMenuTriggerProps,
} from "react-aria-components";

import { faAngleRight } from "@fortawesome/pro-solid-svg-icons/faAngleRight";
import clsx from "clsx";
import {
	Header as AriaHeader,
	Menu as AriaMenu,
	MenuItem as AriaMenuItem,
	MenuTrigger as AriaMenuTrigger,
	Section as AriaSection,
	SubmenuTrigger as AriaSubMenuTrigger,
} from "react-aria-components";

import type { Color } from "../types";

import { Checkbox } from "../checkbox";
import { Icon } from "../icon";
import "../styles/dropdown-menu.css";

/**
 * A `Trigger` component, for use with a `Menu` component. [Built with React Aria Trigger component](https://react-spectrum.adobe.com/react-aria/Menu.html#menutrigger)
 */
function Trigger(props: AriaMenuTriggerProps) {
	return <AriaMenuTrigger {...props} />;
}

/**
 * A `Trigger` component, for use with a `Menu` component. [Built with React Aria Trigger component](https://react-spectrum.adobe.com/react-aria/Menu.html#menutrigger)
 */
function SubMenuTrigger(props: AriaSubMenuTriggerProps) {
	return <AriaSubMenuTrigger {...props} />;
}

type SingleMenuItem<TItemId extends string = string> =
	AnchorHTMLAttributes<HTMLAnchorElement> & {
		children?: never;
		/**
		 * A description of the menu item, that is shown in the UI to the user.
		 */
		description?: string;
		/**
		 * A href to navigate to when the item is clicked.
		 */
		href?: string;
		/**
		 * The unique identifier for the menu item.
		 */
		id: TItemId;
		/**
		 * The name of the menu item, that is shown in the UI to the user.
		 */
		name: string;
		/**
		 * The icon to display on the left side of the menu item.
		 */
		slotLeft?: ReactNode;
		/**
		 * Tags used to filter the menu items.
		 */
		tags?: Array<string>;
		/**
		 * @deprecated
		 */
		type?: never;
	};

export type IterableMenuItem<TItemId extends string = string> =
	| {
			/**
			 * The children of the menu item. If this is present, the item is considered a section.
			 */
			children: Array<SingleMenuItem<TItemId>>;
			/**
			 * A href to navigate to when the item is clicked.
			 */
			href?: never;
			/**
			 * The unique identifier for the menu item.
			 */
			id: string;
			/**
			 * The name of the menu item, that is shown in the UI to the user.
			 */
			name?: string;
			/**
			 * The icon to display on the left side of the menu item.
			 */
			slotLeft?: never;
			/**
			 * Tags used to filter the menu items.
			 */
			tags?: never;
			/**
			 * @deprecated
			 */
			type?: never;
	  }
	| SingleMenuItem<TItemId>;

/**
 * A menu displays a list of actions or options that a user can choose. [Built with React Aria Menu component](https://react-spectrum.adobe.com/react-aria/Menu.html)
 */
function DropdownMenu<TItem extends object = object>({
	...props
}: AriaMenuProps<TItem>) {
	return (
		<AriaMenu<TItem>
			className={clsx(props.className, "dropdown-menu")}
			{...props}
		/>
	);
}

/**
 * A menu item represents an action or option that a user can choose. [Built with React Aria MenuItem component](https://react-spectrum.adobe.com/react-aria/Menu.html#menuitem)
 */
function Item<TItem extends object>({
	color,
	hideCheckbox,
	icon,
	...props
}: AriaMenuItemProps<TItem> & {
	/**
	 * The color of the item.
	 */
	color?: Color;

	/**
	 * An override to hide the checkbox in the context of a selectable list.
	 */
	hideCheckbox?: boolean;

	/**
	 * The icon to display on the left side of the menu item.
	 */
	icon?: ReactNode;

	/**
	 * React ref to the Item element.
	 */
	ref?: ForwardedRef<HTMLDivElement>;
}) {
	return (
		<AriaMenuItem
			{...props}
			className={clsx(props.className, "dropdown-menu-item", color, {
				"has-icon": !!icon,
			})}
		>
			{(renderProps) => {
				return (
					<>
						{icon ? (
							<div className="menu-item-icon">{icon}</div>
						) : null}

						<span className="dropdown-menu-item-name">
							{typeof props.children === "function"
								? props.children(renderProps)
								: props.children}
						</span>

						{!hideCheckbox &&
						renderProps.selectionMode !== "none" ? (
							<Checkbox
								// isIndeterminate
								isSelected={renderProps.isSelected}
							/>
						) : null}

						{renderProps.hasSubmenu ? (
							<div className="submenu-icon">
								<Icon icon={faAngleRight} />
							</div>
						) : null}
					</>
				);
			}}
		</AriaMenuItem>
	);
}

/**
 * A <MenuDecorativeSection> defines a section within a
 * `Popover` that is purely decorative and does not contain
 * any interactive elements.
 */
function MenuDecorativeSection(props: { children: ReactNode }) {
	return (
		<div
			className="p1 dropdown-menu-section"
			{...props}
		/>
	);
}

/**
 * A <Section> defines the child items for a section within a <ListBox>.
 * It may also contain an optional <Header> element.
 * If there is no header, then an aria-label must be provided to identify the section to assistive technologies.
 */
function Section<TItem extends object = object>(
	props: AriaSectionProps<TItem>,
) {
	return (
		<AriaSection
			className="dropdown-menu-section"
			{...props}
		/>
	);
}

function SectionHeader({
	children,
	icon,
}: {
	children: ReactNode;
	icon?: ReactNode;
}) {
	return (
		<AriaHeader className="dropdown-menu-section-header">
			{icon ? <div className="menu-item-icon">{icon}</div> : null}
			<span className="dropdown-menu-section-header-content">
				{children}
			</span>
		</AriaHeader>
	);
}

/**
 *
 */
export const Menu = {
	DropdownMenu,
	Item,
	MenuDecorativeSection,
	Section,
	SectionHeader,
	SubMenuTrigger,
	Trigger,
};
