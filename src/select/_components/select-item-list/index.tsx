import type {
	UseComboboxPropGetters,
	UseMultipleSelectionGetSelectedItemPropsOptions,
	UseSelectPropGetters,
} from "downshift";
import * as React from "react";
import { CSSProperties, ForwardedRef, Fragment } from "react";
import { arrayHasLength } from "../../../_lib/array-has-length";
import { FloatingPanel } from "../../../floating-panel";
import { WithSize } from "../../../types";
import { isGroupedSelectItems } from "../../_lib/isGroupedSelectItems";
import type {
	FlatSelectItems,
	GroupedSelectItems,
	SelectItemShape,
} from "../../types";
import { SelectItem } from "../SelectItem";
import { SelectSeparator } from "../SelectSeparator";
import { innerCSS, menuHeaderCSS, selectItemListCSS } from "./styles.css";

/**
 * Renders a dropdown menu for use with `SelectSingle` or `SelectMulti`
 */
export type SelectItemListProps<
	TValue extends string = string,
	TItemData extends Record<string, unknown> = Record<string, unknown>,
> = WithSize & {
	/**
	 * Function provided by Downshift to check whether an item is selected
	 */
	getIsItemSelected:
		| ((item: SelectItemShape<TValue, TItemData>) => boolean)
		| undefined;

	/**
	 * Function provided by Downshift to get props for an individual item.
	 */
	getItemProps:
		| UseComboboxPropGetters<
				SelectItemShape<TValue, TItemData>
		  >["getItemProps"]
		| UseSelectPropGetters<
				SelectItemShape<TValue, TItemData>
		  >["getItemProps"];

	/**
	 * Function provided by Downshift to get props for the outer menu element.
	 */
	getMenuProps:
		| UseComboboxPropGetters<
				SelectItemShape<TValue, TItemData>
		  >["getMenuProps"]
		| UseSelectPropGetters<
				SelectItemShape<TValue, TItemData>
		  >["getMenuProps"];

	/**
	 * Function provided by Downshift to get props for the currently selected item.
	 */
	getSelectedItemProps:
		| ((
				options: UseMultipleSelectionGetSelectedItemPropsOptions<
					SelectItemShape<TValue, TItemData>
				>,
		  ) => {
				[key: string]: unknown;
		  })
		| undefined;

	/**
	 * The index of the currently highlighted item.
	 */
	highlightedIndex: number | undefined;

	/**
	 * Whether the parent component allows multiple selection or not.
	 */
	isMulti: boolean | undefined;

	/**
	 * Whether the menu is open.
	 */
	isOpen: boolean | undefined;

	/**
	 * The items to render in the list.
	 */
	items:
		| FlatSelectItems<TValue, TItemData>
		| GroupedSelectItems<TValue, TItemData>
		| undefined;

	/**
	 * The style to apply to the outer menu element. Used by floating-ui to position the menu.
	 */
	style: CSSProperties;
};

/**
 * Renders a dropdown menu for use with `SelectSingle` or `SelectMulti`
 * @note This is a base component that should be wrapped with `ForwardRef`.
 */
function SelectItemListBase<
	TValue extends string = string,
	TItemData extends Record<string, unknown> = Record<string, unknown>,
>(
	{
		getIsItemSelected,
		getItemProps,
		getMenuProps,
		getSelectedItemProps,
		highlightedIndex,
		isMulti,
		isOpen,
		items,
		size = "sm",
		...rest
	}: SelectItemListProps<TValue, TItemData>,
	ref: ForwardedRef<HTMLDivElement>,
) {
	if (!items) {
		return null;
	}

	if (isGroupedSelectItems(items)) {
		let index = 0;

		return (
			<FloatingPanel
				className={selectItemListCSS}
				isOpen={isOpen}
				{...getMenuProps?.({
					ref,
					...rest,
				})}
			>
				<div className={innerCSS}>
					{items.map((group) => {
						if (!arrayHasLength(group.items)) {
							return null;
						}

						return (
							<Fragment key={group.title}>
								<div
									key={group.title}
									className={menuHeaderCSS}
								>
									{group.title}
								</div>
								<>
									{group.items.map((item) => {
										if (item === "SEPARATOR") {
											return (
												<SelectSeparator
													key={`separator-${index}`}
													size={size}
												/>
											);
										}

										if (!item.label) {
											return null;
										}

										// Increment the index for each item
										// Note that this index is shared across the entire list
										index += 1;

										const {
											as,
											colorOverlay,
											description,
											isSelected: initIsSelected,
											label,
											onClick,
											slotLeft,
											value,
											itemData: _,
											...otherItemProps
										} = item;
										const isHighlighted =
											highlightedIndex === index - 1;
										const isSelected =
											initIsSelected ||
											getIsItemSelected?.(item);

										return (
											<SelectItem
												as={as}
												colorOverlay={colorOverlay}
												description={description}
												isMulti={isMulti}
												key={`${item.label}-${item.value}`}
												size={size}
												{...otherItemProps}
												{...getItemProps({
													isHighlighted,
													isSelected,
													item,
													label,
													onClick,
													slotLeft,
													value,
													...(isSelected &&
														getSelectedItemProps?.({
															selectedItem: item,
														})),
												})}
											/>
										);
									})}
								</>
							</Fragment>
						);
					})}

					{/* Show a fallback list item when there are no items to display */}

					{Array.isArray(items) && items.length === 0 && (
						<SelectItem
							as="button"
							colorOverlay={undefined}
							description={undefined}
							disabled
							isHighlighted={false}
							isMulti={false}
							label="No results"
							size={size}
							value=""
						/>
					)}
				</div>
			</FloatingPanel>
		);
	}

	let index = 0;

	return (
		<FloatingPanel
			className={selectItemListCSS}
			isOpen={isOpen}
			{...getMenuProps?.({
				ref,
				...rest,
			})}
		>
			<div className={innerCSS}>
				{items.map((item) => {
					if (item === "SEPARATOR") {
						return (
							<SelectSeparator
								key={`separator-${index}`}
								size={size}
							/>
						);
					}

					if (!item.label) {
						return null;
					}

					// Increment the index for each item
					// Note that this index is shared across the entire list
					index += 1;

					const {
						as,
						colorOverlay,
						description,
						isSelected: initIsSelected,
						label,
						onClick,
						slotLeft,
						value,
						itemData: _,
						...otherItemProps
					} = item;
					const isHighlighted = highlightedIndex === index - 1;
					const isSelected =
						initIsSelected || getIsItemSelected?.(item);
					return (
						<SelectItem
							as={as}
							colorOverlay={colorOverlay}
							description={description}
							isMulti={isMulti}
							key={`${item.label}-${item.value}`}
							size={size}
							{...otherItemProps}
							{...getItemProps({
								isHighlighted,
								isSelected,
								item,
								label,
								onClick,
								slotLeft,
								value,
								...(isSelected &&
									getSelectedItemProps?.({
										selectedItem: item,
									})),
							})}
						/>
					);
				})}

				{/* Show a fallback list item when there are no items to display */}

				{Array.isArray(items) && items.length === 0 && (
					<SelectItem
						as="button"
						colorOverlay={undefined}
						description={undefined}
						disabled
						isHighlighted={false}
						isMulti={false}
						label="No results"
						size={size}
						value=""
					/>
				)}
			</div>
		</FloatingPanel>
	);
}

export const SelectItemList = React.forwardRef(SelectItemListBase);
