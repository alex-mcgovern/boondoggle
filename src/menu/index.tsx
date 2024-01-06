import * as React from "react";
import {
	Collection as ReactAriaCollection,
	Header as ReactAriaHeader,
	Menu as ReactAriaMenu,
	MenuItem as ReactAriaMenuItem,
	type MenuProps as ReactAriaMenuProps,
} from "react-aria-components";

import type { ColorOverlay } from "../index.css";

import { menuCSS, menuHeaderCSS, menuItemCSS } from "../_css/menu.css";
import { Section } from "../section";

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
	| {
			children: Array<SingleMenuItem<TItemId>>;
			colorOverlay?: never;
			href?: never;
			id: string;
			name?: string;
			slotLeft?: never;
			type?: never;
	  }
	| SingleMenuItem<TItemId>;

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
				return item.children ? (
					<Section>
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
					</Section>
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
