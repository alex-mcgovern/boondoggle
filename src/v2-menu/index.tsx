import * as React from "react";
import {
	Collection as ReactAriaCollection,
	Header as ReactAriaHeader,
	Menu as ReactAriaMenu,
	MenuItem as ReactAriaMenuItem,
	type MenuProps as ReactAriaMenuProps,
	Section as ReactAriaSection,
	Separator,
} from "react-aria-components";
import {
	menuCSS,
	menuHeaderCSS,
	menuItemCSS,
	menuSeparatorCSS,
} from "../_css/menu.css";
import { ColorOverlay } from "../index.css";

type SingleMenuItem<TItemId extends string = string> = {
	children?: never;
	colorOverlay?: ColorOverlay;
	description?: string;
	href?: string;
	id: TItemId;
	name: string;
	slotLeft?: React.ReactNode;
	type?: never;
};

export type IterableMenuItem<TItemId extends string = string> =
	| SingleMenuItem
	| {
			children: Array<SingleMenuItem<TItemId>>;
			colorOverlay?: never;
			href?: never;
			id: string;
			name: string;
			slotLeft?: never;
			type?: never;
	  }
	| {
			children?: never;
			colorOverlay?: never;
			href?: never;
			id?: string;
			name?: never;
			slotLeft?: never;
			type: "SEPARATOR";
	  };

export type MenuProps<TItemId extends string = string> = ReactAriaMenuProps<
	IterableMenuItem<TItemId>
>;

function BaseMenu<TItemId extends string = string>(
	props: MenuProps<TItemId>,
	ref: React.ForwardedRef<HTMLDivElement>,
) {
	return (
		<ReactAriaMenu<IterableMenuItem<TItemId>>
			className={menuCSS}
			ref={ref}
			{...props}
		>
			{(item) => {
				if (item.type === "SEPARATOR") {
					return (
						<Separator className={menuSeparatorCSS} id={item.id} />
					);
				}

				return item.children ? (
					<ReactAriaSection>
						{item.name ? (
							<ReactAriaHeader className={menuHeaderCSS}>
								{item.name}
							</ReactAriaHeader>
						) : null}

						<ReactAriaCollection items={item.children}>
							{(childItem) => (
								<ReactAriaMenuItem
									className={menuItemCSS({
										colorOverlay: childItem.colorOverlay,
									})}
									href={childItem.href}
								>
									{childItem.slotLeft}
									{childItem.name}
								</ReactAriaMenuItem>
							)}
						</ReactAriaCollection>
					</ReactAriaSection>
				) : (
					<ReactAriaMenuItem
						className={menuItemCSS({
							colorOverlay: item.colorOverlay,
						})}
						href={item.href}
					>
						{item.slotLeft}
						{item.name}
					</ReactAriaMenuItem>
				);
			}}
		</ReactAriaMenu>
	);
}

export const Menu = React.forwardRef(BaseMenu);
