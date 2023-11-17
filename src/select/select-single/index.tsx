
import { autoUpdate, flip, offset, useFloating } from "@floating-ui/react";
import { faAngleDown } from "@fortawesome/pro-solid-svg-icons";
import { useCombobox } from "downshift";
import type { UseComboboxStateChange } from "downshift";
import { forwardRef, useCallback, useState } from "react";
import type { ForwardedRef } from "react";
import { useForwardRef } from "../../_hooks/use-forward-ref";
import { Box } from "../../box";
import { Icon } from "../../icon";
import { Input } from "../../input";
import type { InputProps } from "../../input";
import { WithOptionalInputAddons } from "../../input/InputAddonWrapper";
import { Sprinkles } from "../../sprinkles/index.css";
import {
	WithDescription,
	WithName,
	WithOptionalIsClearable,
	WithOptionalLabel,
	WithOptionalPlaceholder,
	WithSize,
	WithSlots,
	WithStateDisabled,
	WithStateInvalid,
	getOptionalLabelProps,
} from "../../types";
import { SelectItemList } from "../SelectItemList";
import { filterSelectItems } from "../filterSelectItems";
import { flattenSelectItems } from "../flattenSelectItems";
import { getInitialSelectedItem } from "../getInitialSelectedItem";
import { getIsSelected } from "../getIsSelected";
import { getSlotRight } from "../lib/get_slot_right";
import { selectInputCursorStyles } from "../shared/select_input.styles.css";
import type {
	FlatSelectItems,
	GroupedSelectItems,
	SelectItemShape,
	WithOptionalIsFilterable,
} from "../types";

export type SelectSingleProps<
	TValue extends string = string,
	TItemData extends Record<string, unknown> = Record<string, unknown>,
> = Omit<WithOptionalIsClearable, "readOnly"> &
	WithName &
	WithOptionalPlaceholder &
	WithSize &
	WithSlots &
	WithDescription &
	WithStateDisabled &
	WithOptionalInputAddons &
	WithStateInvalid &
	WithOptionalLabel &
	WithOptionalIsFilterable & {
		/**
		 * The bottom margin applied to the input element.
		 * @default "space_6" (1.5rem / 24px)
		 */
		marginBottom?: Sprinkles["marginBottom"];

		/**
		 * Item to be preselected when the component mounts.
		 */
		initialSelectedItem?: SelectItemShape<TValue, TItemData>;

		/**
		 * Props to customise the input element.
		 */
		inputProps?: Partial<
			Omit<
				InputProps,
				| "id"
				| "isClearable"
				| "isCopyable"
				| "isLabelVisible"
				| "isVisibilityToggleable"
				| "isVisible"
				| "label"
				| "labelProps"
				| "labelTooltip"
				| "size"
				| "strClear"
				| "strCopied"
				| "strCopy"
				| "strHide"
				| "strShow"
				| "width"
			>
		>;

		/**
		 * Prop to toggle the open state of the dropdown.
		 */
		isOpen?: boolean;

		/**
		 * Function to convert an item to a string.
		 */
		itemToString?: (
			item: SelectItemShape<TValue, TItemData> | null,
		) => string;

		/**
		 * The items to render in the dropdown.
		 */
		items:
			| FlatSelectItems<TValue, TItemData>
			| GroupedSelectItems<TValue, TItemData>;

		/**
		 * Function called with the new selected item when the selection changes.
		 */
		onChange?: (
			selection: SelectItemShape<TValue, TItemData> | undefined,
		) => void;

		/**
		 * Function called with the new open state when the dropdown is opened or closed.
		 */
		onIsOpenChange?: (
			changes: UseComboboxStateChange<SelectItemShape<TValue, TItemData>>,
		) => void;

		/**
		 * Whether the select should reset when an item is selected.
		 */
		shouldClearFilterOnSelection?: boolean;
	};

/**
 * Renders a single-select dropdown.
 * @private Is a base component that should be wrapped with `ForwardRef`.
 */
function SelectSingleBase<
	TValue extends string = string,
	TItemData extends Record<string, unknown> = Record<string, unknown>,
>(
	{
		addonLeft,
		addonRight,
		description,
		disabled,
		errorMessage,
		initialSelectedItem,
		inputProps,
		invalid,
		isClearable,
		isFilterable,
		isLabelVisible,
		isOpen: controlledIsOpen,
		itemToString = (item: SelectItemShape<TValue, TItemData> | null) => {
			return item?.label || "";
		},
		items: initialItems,
		label,
		labelTooltip,
		name,
		onChange,
		onIsOpenChange,
		placeholder,
		shouldClearFilterOnSelection,
		size,
		slotLeft,
		slotRight = <Icon icon={faAngleDown} />,
		strClear,
		marginBottom = "space_4",
	}: SelectSingleProps<TValue, TItemData>,
	initialRef: ForwardedRef<HTMLInputElement>,
) {
	const ref = useForwardRef(initialRef);

	const initialItem = getInitialSelectedItem({
		initialSelectedItem,
		items: initialItems,
	});

	const [inputValue, setInputValue] = useState(initialItem?.label || "");
	const [isTyping, setIsTyping] = useState(false);

	const items =
		isFilterable && isTyping
			? filterSelectItems({ inputValue, items: initialItems })
			: initialItems;

	const {
		getInputProps,
		getItemProps,
		getLabelProps,
		getMenuProps,
		highlightedIndex,
		isOpen,
		reset,
		selectedItem,
	} = useCombobox({
		initialSelectedItem: initialItem,
		inputValue,
		isItemDisabled: (item) => {
			return item.disabled;
		},
		isOpen: controlledIsOpen,
		items: flattenSelectItems(items),
		itemToString,
		onInputValueChange: (changes) => {
			setInputValue(changes.inputValue || "");
		},
		onIsOpenChange,
		onSelectedItemChange: (changes) => {
			setIsTyping(false);
			onChange?.(changes.selectedItem || undefined);
			if (shouldClearFilterOnSelection) {
				setInputValue("");
			}
		},
		// Ensure that onClick is called when the user presses Enter on an item.
		onStateChange(changes) {
			if (
				changes.type === useCombobox.stateChangeTypes.InputKeyDownEnter
			) {
				changes.selectedItem?.onClick?.();
			}
		},
		// If `shouldClearFilterOnSelection` is true, clear the input value when the user selects an item.
		stateReducer: (_, { changes, type }) => {
			switch (type) {
				case useCombobox.stateChangeTypes.InputChange: {
					setIsTyping(true);
					return changes;
				}

				case useCombobox.stateChangeTypes.InputBlur:
				case useCombobox.stateChangeTypes.InputKeyDownEnter:
				case useCombobox.stateChangeTypes.ItemClick:
					setIsTyping(false);
					return {
						...changes,
						...(shouldClearFilterOnSelection && {
							inputValue: "",
						}),
					};

				default:
					return changes;
			}
		},
	});

	const getIsItemSelected = useCallback(
		(item: SelectItemShape<TValue, TItemData>) => {
			return getIsSelected({
				item,
				selectedItem,
			});
		},
		[selectedItem],
	);

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
				addonLeft={addonLeft}
				addonRight={addonRight}
				description={description}
				errorMessage={errorMessage}
				outerRef={refs.setReference}
				size={size}
				marginBottom={marginBottom}
				slotLeft={selectedItem?.slotLeft || slotLeft}
				slotRight={getSlotRight({
					isClearable:
						(!!isFilterable && !!inputValue) ||
						(!!isClearable && !!initialItem) ||
						(!!isClearable && !!selectedItem),
					reset,
					slotRight,
					strClear,
				})}
				{...getInputProps({
					className: selectInputCursorStyles,
					disabled,
					id: name,
					invalid,
					placeholder,
					readOnly: !isFilterable,
					ref,
					value: inputValue,
					...getOptionalLabelProps({
						isLabelVisible,
						label,
						labelProps: getLabelProps({
							htmlFor: name,
						}),
						labelTooltip,
						name,
					}),
					...inputProps,
				})}
			/>

			<SelectItemList<TValue, TItemData>
				getIsItemSelected={getIsItemSelected}
				getItemProps={getItemProps}
				getMenuProps={getMenuProps}
				getSelectedItemProps={undefined}
				highlightedIndex={highlightedIndex}
				isMulti={false}
				isOpen={isOpen}
				items={items}
				ref={isOpen ? refs.setFloating : undefined}
				size={size}
				style={floatingStyles}
			/>
		</Box>
	);
}

export const SelectSingle = forwardRef(SelectSingleBase);
