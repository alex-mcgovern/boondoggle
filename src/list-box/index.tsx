import * as React from "react";
import {
	Collection as ReactAriaCollection,
	Header as ReactAriaHeader,
	ListBox as ReactAriaListBox,
	ListBoxItem as ReactAriaListBoxItem,
	ListBoxItemProps as ReactAriaListBoxItemProps,
	type ListBoxProps as ReactAriaListBoxProps,
	Text as ReactAriaText,
} from "react-aria-components";
import {
	menuCSS,
	menuHeaderCSS,
	menuItemCSS,
	menuItemDescriptionCSS,
	menuItemNameCSS,
} from "../_css/menu.css";
import { ColorOverlay } from "../index.css";
import { Section } from "../section";
import { faCheck } from "@fortawesome/pro-solid-svg-icons";
import { Icon } from "../icon";

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
			name?: string;
			slotLeft?: never;
			type?: never;
	  };

function ListBoxItem<TItemId extends string = string>({
	value,
	...props
}: ReactAriaListBoxItemProps<SingleListBoxItem<TItemId>>) {
	return (
		<ReactAriaListBoxItem
			className={menuItemCSS({
				colorOverlay: value?.colorOverlay,
			})}
			href={value?.href}
			{...props}
		>
			{({ isSelected }) => (
				<>
					{value?.slotLeft}
					<div>
						<ReactAriaText className={menuItemNameCSS} slot="label">
							{value?.name}
						</ReactAriaText>
						<ReactAriaText
							className={menuItemDescriptionCSS}
							slot="description"
						>
							{value?.description}
						</ReactAriaText>
					</div>
					{isSelected ? (
						<Icon
							marginLeft="auto"
							marginRight="space_1"
							color="text_low_contrast"
							icon={faCheck}
						/>
					) : null}
				</>
			)}
		</ReactAriaListBoxItem>
	);
}

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
				return item.children ? (
					<Section>
						{item.name ? (
							<ReactAriaHeader className={menuHeaderCSS}>
								{item.name}
							</ReactAriaHeader>
						) : null}

						<ReactAriaCollection items={item.children}>
							{(i) => (
								<ListBoxItem value={i} textValue={i.name} />
							)}
						</ReactAriaCollection>
					</Section>
				) : (
					<ListBoxItem value={item} textValue={item.name} />
				);
			}}
		</ReactAriaListBox>
	);
}

export const ListBox = React.forwardRef(BaseListBox);
