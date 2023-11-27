import * as React from "react";
import {
	Collection as ReactAriaCollection,
	Header as ReactAriaHeader,
	Menu as ReactAriaMenu,
	MenuItem as ReactAriaMenuItem,
	type MenuProps as ReactAriaMenuProps,
	Section as ReactAriaSection,
} from "react-aria-components";
import { WithSize } from "../types";
import { menuCSS, menuHeaderCSS, menuItemCSS } from "./styles.css";

export type IterableMenuItem<TItemId extends string = string> =
	| {
			children?: never;
			id: TItemId;
			name: string;
			slotLeft?: React.ReactNode;
	  }
	| {
			children: Array<{
				id: TItemId;
				name: string;
				slotLeft?: React.ReactNode;
				children?: never;
			}>;
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
									className={menuItemCSS({ size })}
								>
									{childItem.slotLeft}
									{childItem.name}
								</ReactAriaMenuItem>
							)}
						</ReactAriaCollection>
					</ReactAriaSection>
				) : (
					<ReactAriaMenuItem className={menuItemCSS({ size })}>
						{item.slotLeft}
						{item.name}
					</ReactAriaMenuItem>
				)
			}
		</ReactAriaMenu>
	);
}

export const Menu = React.forwardRef(BaseMenu);
