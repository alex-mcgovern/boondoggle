import * as React from "react";
import {
	Collection as ReactAriaCollection,
	Header as ReactAriaHeader,
	ListBox as ReactAriaListBox,
	ListBoxItem as ReactAriaListBoxItem,
	type ListBoxProps as ReactAriaListBoxProps,
	Section as ReactAriaSection,
	Separator,
} from "react-aria-components";
import { ColorOverlay } from "../index.css";
import {
	menuCSS,
	menuHeaderCSS,
	menuItemCSS,
	menuSeparatorCSS,
} from "../v2-common-css/menu.css";

type SingleListBoxItem<TItemId extends string = string> = {
	children?: never;
	colorOverlay?: ColorOverlay;
	description?: string;
	href?: string;
	id: TItemId;
	name: string;
	slotLeft?: React.ReactNode;
	type?: never;
};

export type IterableListBoxItem<TItemId extends string = string> =
	| SingleListBoxItem
	| {
			children: Array<SingleListBoxItem<TItemId>>;
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

export type ListBoxProps<TItemId extends string = string> =
	ReactAriaListBoxProps<IterableListBoxItem<TItemId>>;

function BaseListBox<TItemId extends string = string>(
	props: ListBoxProps<TItemId>,
	ref: React.ForwardedRef<HTMLDivElement>,
) {
	return (
		<ReactAriaListBox<IterableListBoxItem<TItemId>>
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
								<ReactAriaListBoxItem
									className={menuItemCSS({
										colorOverlay: childItem.colorOverlay,
									})}
									href={childItem.href}
								>
									{childItem.slotLeft}
									{childItem.name}
								</ReactAriaListBoxItem>
							)}
						</ReactAriaCollection>
					</ReactAriaSection>
				) : (
					<ReactAriaListBoxItem
						className={menuItemCSS({
							colorOverlay: item.colorOverlay,
						})}
						href={item.href}
					>
						{item.slotLeft}
						{item.name}
					</ReactAriaListBoxItem>
				);
			}}
		</ReactAriaListBox>
	);
}

export const ListBox = React.forwardRef(BaseListBox);
