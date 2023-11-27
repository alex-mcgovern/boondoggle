import * as React from "react";
import {
	Button as ReactAriaButton,
	Menu as ReactAriaMenu,
	MenuItem as ReactAriaMenuItem,
	MenuTrigger as ReactAriaMenuTrigger,
	Popover as ReactAriaPopover,
	Section as ReactAriaSection,
	Header as ReactAriaHeader,
	Collection as ReactAriaCollection,
	type CollectionProps as ReactAriaCollectionProps,
	type ButtonProps as ReactAriaButtonProps,
	type MenuItemProps as ReactAriaMenuItemProps,
	type MenuProps as ReactAriaMenuProps,
	type MenuTriggerProps as ReactAriaMenuTriggerProps,
	type PopoverProps as ReactAriaPopoverProps,
	type SectionProps as ReactAriaSectionProps,

	// type HeaderProps as ReactAriaHeaderProps,
	// type CollectionProps as ReactAriaCollectionProps,
} from "react-aria-components";
import {
	menuButtonCSS,
	menuCSS,
	menuHeaderCSS,
	menuItemCSS,
} from "./styles.css";
import { WithSize, WithSlotSide, WithSlots } from "../types";

/** -----------------------------------------------------------------------------
 * Types
 * ------------------------------------------------------------------------------- */

type MenuItemSchema<TValue> = {
	id: TValue;
	name: string;
	slotLeft?: React.ReactNode;
};

type MenuSectionSchema<TValue> = {
	name: string;
	id: string;
	children: Array<MenuItemSchema<TValue>>;
};

type MenuIterable<TValue> = MenuItemSchema<TValue> | MenuSectionSchema<TValue>;

function MenuItem({
	children,
	slotLeft,
	size,
	...props
}: ReactAriaMenuItemProps & WithSize & WithSlots) {
	return (
		<ReactAriaMenuItem {...props} className={menuItemCSS({ size })}>
			{slotLeft}
			{children}
		</ReactAriaMenuItem>
	);
}

function MenuSection<TValue extends object = object>(
	props: ReactAriaSectionProps<TValue>,
) {
	return <ReactAriaSection {...props} />;
}

const MenuHeader = React.forwardRef<
	HTMLElement,
	React.HtmlHTMLAttributes<HTMLElement> & WithSize
>((props, ref) => {
	return (
		<ReactAriaHeader
			className={menuHeaderCSS({ size: props.size })}
			ref={ref}
			{...props}
		/>
	);
});

function MenuCollection<TValue extends object = object>(
	props: ReactAriaCollectionProps<TValue>,
) {
	return <ReactAriaCollection {...props} />;
}

export function Menu<TValue extends string = string>({
	buttonProps,
	menuProps,
	menuTriggerProps,
	popoverProps,
	size,
}: WithSize & {
	buttonProps?: WithSlotSide & ReactAriaButtonProps;
	menuProps?: ReactAriaMenuProps<TValue>;
	menuTriggerProps?: ReactAriaMenuTriggerProps;
	popoverProps?: ReactAriaPopoverProps;
}) {
	return (
		<ReactAriaMenuTrigger {...menuTriggerProps}>
			<ReactAriaButton
				className={menuButtonCSS({ size })}
				{...buttonProps}
				aria-label="Menu"
			/>
			<ReactAriaPopover {...popoverProps}>
				<ReactAriaMenu<
					MenuItemSchema<TValue> | MenuSectionSchema<TValue>
				>
					className={menuCSS}
					{...menuProps}
				>
					{(item) =>
						item.children ? (
							<MenuSection>
								{item.name ? (
									<MenuHeader size={size}>
										{item.name}
									</MenuHeader>
								) : null}

								<MenuCollection items={item.children}>
									{(i) => (
										<MenuItem
											slotLeft={i.slotLeft}
											size={size}
										>
											{i.name}
										</MenuItem>
									)}
								</MenuCollection>
							</MenuSection>
						) : (
							<MenuItem slotLeft={item.slotLeft} size={size}>
								{item.name}
							</MenuItem>
						)
					}
				</ReactAriaMenu>
			</ReactAriaPopover>
		</ReactAriaMenuTrigger>
	);
}
