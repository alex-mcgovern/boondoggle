"use client";

import { autoUpdate, flip, offset, useFloating } from "@floating-ui/react";
import { faAngleDown } from "@fortawesome/pro-solid-svg-icons";
import clsx from "clsx";
import { useCombobox, useMultipleSelection } from "downshift";
import { forwardRef, useCallback, useState } from "react";

import { getOptionalLabelProps } from "../../../common-types";
import { useForwardRef } from "../../../hooks/use_forward_ref";
import { arrayHasLength } from "../../../lib/array_has_length";
import { Box } from "../../box";
import { Icon } from "../../icon";
import { Input } from "../../input";
import { SelectItemList } from "../SelectItemList";
import { filterSelectItems } from "../filterSelectItems";
import { flattenSelectItems } from "../flattenSelectItems";
import { getIsSelected } from "../getIsSelected";
import { getSlotRight } from "../lib/get_slot_right";
import { selectInputCursorStyles } from "../shared/select_input.styles.css";
import { selectMultiInputSelectedItemsStyle } from "./styles.css";

import type { UseComboboxStateChange } from "downshift";
import type { ForwardedRef } from "react";
import type {
	WithName,
	WithOptionalIsClearable,
	WithOptionalLabel,
	WithOptionalPlaceholder,
	WithSize,
	WithSlots,
	WithStateDisabled,
	WithStateInvalid,
} from "../../../common-types";
import { UtilCssArgs } from "../../../styles/utils/util_css";
import type { InputProps } from "../../input";
import type {
	FlatSelectItems,
	GroupedSelectItems,
	SelectItemShape,
} from "../types";

type GetPlaceholderArgs<
	TValue extends string = string,
	TItemData extends Record<string, unknown> = Record<string, unknown>,
> = {
	/**
	 * The placeholder text to display when no items are selected.
	 */
	placeholder: string | undefined;

	/**
	 * The selected items.
	 */
	selectedItems: Array<SelectItemShape<TValue, TItemData>> | undefined;

	/**
	 * A function that returns a string representation of the selected items.
	 */
	selectedItemsToString:
		| ((selectedItems: Array<SelectItemShape<TValue, TItemData>>) => string)
		| undefined;
};

/**
 * Returns the value to display in the input.
 */
function getPlaceholder<
	TValue extends string = string,
	TItemData extends Record<string, unknown> = Record<string, unknown>,
>({
	placeholder,
	selectedItems,
	selectedItemsToString,
}: GetPlaceholderArgs<TValue, TItemData>) {
	if (!arrayHasLength(selectedItems)) {
		return placeholder;
	}

	if (selectedItemsToString) {
		return selectedItemsToString(selectedItems);
	}

	return `${selectedItems.length} selected`;
}

export type SelectMultiProps<
	TValue extends string = string,
	TItemData extends Record<string, unknown> = Record<string, unknown>,
> = Partial<WithOptionalLabel> &
	WithStateInvalid &
	Omit<WithOptionalIsClearable, "readOnly"> &
	WithSlots &
	WithSize &
	WithStateDisabled &
	WithName &
	WithOptionalPlaceholder & {
		/**
		 * The bottom margin applied to the input element.
		 * @default "space_6" (1.5rem / 24px)
		 */
		marginBottom?: UtilCssArgs["marginBottom"];

		/**
		 * Item to be preselected when the component mounts.
		 */
		initialSelectedItems?: Array<SelectItemShape<TValue, TItemData>>;

		/**
		 * Props to customise the input element.
		 */
		inputProps?: Partial<InputProps>;

		/**
		 * Whether the Select should be filterable by typing.
		 */
		isFilterable?: boolean;

		/**
		 * Prop to toggle the open state of the dropdown.
		 */
		isOpen?: boolean;

		/**
		 * The items to render in the dropdown.
		 */
		items:
			| FlatSelectItems<TValue, TItemData>
			| GroupedSelectItems<TValue, TItemData>;

		/**
		 * Function called with the selected items when the selection changes.
		 */
		onChange?: (
			selection: Array<SelectItemShape<TValue, TItemData>> | undefined,
		) => void;

		/**
		 * Function called with the new open state when the dropdown is opened or closed.
		 */
		onIsOpenChange?: (
			changes: UseComboboxStateChange<SelectItemShape<TValue, TItemData>>,
		) => void;

		/**
		 * An array of selected items, used to control the component from outside.
		 */
		selectedItems?: Array<SelectItemShape<TValue, TItemData>>;

		/**
		 * A function that returns a string representation of the selected items.
		 */
		selectedItemsToString?: (
			selectedItems: Array<SelectItemShape<TValue, TItemData>>,
		) => string;
	};

function SelectMultiBase<
	TValue extends string = string,
	TItemData extends Record<string, unknown> = Record<string, unknown>,
>(
	{
		disabled,
		errorMessage,
		initialSelectedItems = [],
		invalid,
		isClearable,
		isFilterable,
		isLabelVisible,
		items: initialItems,
		label,
		labelTooltip,
		name,
		onChange,
		onIsOpenChange,
		placeholder,
		selectedItems: controlledSelectedItems,
		selectedItemsToString,
		size,
		slotLeft,
		slotRight = <Icon icon={faAngleDown} />,
		strClear,
		marginBottom = "space_6",
	}: SelectMultiProps<TValue, TItemData>,
	initialRef: ForwardedRef<HTMLInputElement>,
) {
	const ref = useForwardRef(initialRef);

	const [inputValue, setInputValue] = useState("");

	const items = isFilterable
		? filterSelectItems({
				inputValue,
				items: initialItems,
		  })
		: initialItems;

	const {
		addSelectedItem,
		getDropdownProps,
		getSelectedItemProps,
		removeSelectedItem,
		selectedItems,
	} = useMultipleSelection<SelectItemShape<TValue, TItemData>>({
		initialSelectedItems: controlledSelectedItems || [
			...initialSelectedItems,
			...flattenSelectItems(initialItems).filter((i) => {
				return i.isSelected;
			}),
		],
		onSelectedItemsChange: (c) => {
			return onChange?.(c.selectedItems);
		},
	});

	const getIsItemSelected = useCallback(
		(item: SelectItemShape<TValue, TItemData>) => {
			return getIsSelected({
				isMulti: true,
				item,
				selectedItems,
			});
		},
		[selectedItems],
	);

	const {
		getInputProps,
		getItemProps,
		getLabelProps,
		getMenuProps,
		highlightedIndex,
		isOpen,
		reset,
	} = useCombobox<SelectItemShape<TValue, TItemData>>({
		defaultHighlightedIndex: 0,
		isItemDisabled: (item) => {
			return item.disabled;
		},
		items: flattenSelectItems(items),
		onIsOpenChange, // after selection, highlight the first item.
		onStateChange({
			inputValue: newInputValue,
			selectedItem: newItem,
			type,
		}) {
			switch (type) {
				case useCombobox.stateChangeTypes.InputKeyDownEnter:
				case useCombobox.stateChangeTypes.ItemClick: {
					if (!newItem) {
						return;
					}

					newItem?.onClick?.();

					if (getIsItemSelected(newItem)) {
						removeSelectedItem(newItem);
					} else {
						addSelectedItem(newItem);
					}

					break;
				}

				case useCombobox.stateChangeTypes.InputChange:
					if (typeof newInputValue !== "undefined") {
						setInputValue(newInputValue);

						break;
					}

					break;

				default:
					break;
			}
		},
		selectedItem: null,
		stateReducer(_, actionAndChanges) {
			const { changes, type } = actionAndChanges;

			switch (type) {
				case useCombobox.stateChangeTypes.InputKeyDownEnter:
				case useCombobox.stateChangeTypes.ItemClick:
					return {
						...changes,
						highlightedIndex: 0, // with the first option highlighted.
						isOpen: true, // keep the menu open after selection.
					};

				default:
					return changes;
			}
		},
	});

	const { floatingStyles, refs } = useFloating({
		middleware: [
			offset(4),
			flip({
				crossAxis: true,
				fallbackAxisSideDirection: "start",
			}),
		],
		open: isOpen,
		placement: "bottom-start",
		whileElementsMounted: autoUpdate,
	});

	return (
		<Box position="relative">
			<Input
				errorMessage={errorMessage}
				invalid={invalid}
				outerRef={refs.setReference}
				size={size}
				slotLeft={slotLeft}
				marginBottom={marginBottom}
				slotRight={getSlotRight({
					isClearable:
						(!!isFilterable && !!inputValue) ||
						(!!isClearable && arrayHasLength(selectedItems)),
					reset,
					slotRight,
					strClear,
				})}
				{...getInputProps?.({
					className: clsx(selectInputCursorStyles, {
						[selectMultiInputSelectedItemsStyle]:
							arrayHasLength(selectedItems),
					}),
					disabled,
					id: name,
					placeholder: getPlaceholder({
						placeholder,
						selectedItems,
						selectedItemsToString,
					}),
					readOnly: !isFilterable,
					value: inputValue,
					...getDropdownProps({
						preventKeyAction: isOpen,
						ref,
					}),
					...getOptionalLabelProps({
						isLabelVisible,
						label,
						labelProps: getLabelProps({
							htmlFor: name,
						}),
						labelTooltip,
						name,
					}),
				})}
			/>
			<SelectItemList<TValue, TItemData>
				getIsItemSelected={getIsItemSelected}
				getItemProps={getItemProps}
				getMenuProps={getMenuProps}
				getSelectedItemProps={getSelectedItemProps}
				highlightedIndex={highlightedIndex}
				isMulti
				isOpen={isOpen}
				items={filterSelectItems({
					inputValue,
					items,
				})}
				ref={isOpen ? refs.setFloating : undefined}
				size={size}
				style={isOpen ? floatingStyles : {}}
			/>
		</Box>
	);
}

export const SelectMulti = forwardRef(SelectMultiBase);
