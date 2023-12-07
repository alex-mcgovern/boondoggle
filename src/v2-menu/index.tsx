import * as React from "react";
import {
	Collection as ReactAriaCollection,
	Header as ReactAriaHeader,
	Menu as ReactAriaMenu,
	MenuItem as ReactAriaMenuItem,
	type MenuProps as ReactAriaMenuProps,
	Section as ReactAriaSection,
} from "react-aria-components";
import { ColorOverlay } from "../index.css";
import { WithSize } from "../types";
import { menuCSS, menuHeaderCSS, menuItemCSS } from "./styles.css";

type SingleMenuItem<TItemId extends string = string> = {
	children?: never;
	colorOverlay?: ColorOverlay;
	description?: string;
	href?: string;
	id: TItemId;
	name: string;
	slotLeft?: React.ReactNode;
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
	  };

function BaseMenu<TItemId extends string = string>(
	{
		size,
		...props
	}: WithSize & ReactAriaMenuProps<IterableMenuItem<TItemId>>,
	ref: React.ForwardedRef<HTMLDivElement>,
) {
	return (
		<ReactAriaMenu<IterableMenuItem<TItemId>>
			className={menuCSS}
			ref={ref}
			{...props}
		>
			{(item) =>
				item.children ? (
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
					>
						{item.slotLeft}
						{item.name}
					</ReactAriaMenuItem>
				)
			}
		</ReactAriaMenu>
	);
}

export const Menu = React.forwardRef(BaseMenu);
