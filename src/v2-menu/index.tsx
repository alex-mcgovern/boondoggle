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
import { ColorOverlay } from "../index.css";
import { WithSize } from "../types";
import {
	menuCSS,
	menuHeaderCSS,
	menuItemCSS,
	menuSeparatorCSS,
} from "./styles.css";

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

export type MenuProps<TItemId extends string = string> = WithSize &
	ReactAriaMenuProps<IterableMenuItem<TItemId>>;

function BaseMenu<TItemId extends string = string>(
	{ size, ...props }: MenuProps<TItemId>,
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
						<Separator
							className={menuSeparatorCSS}
							elementType="hr"
							id={item.id}
						/>
					);
				}

				return item.children ? (
					<ReactAriaSection>
						{item.name ? (
							<ReactAriaHeader
								className={menuHeaderCSS({ size })}
							>
								{item.name}
							</ReactAriaHeader>
						) : null}

						<ReactAriaCollection items={item.children}>
							{(childItem) => (
								<ReactAriaMenuItem
									className={menuItemCSS({
										size,
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
							size,
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
