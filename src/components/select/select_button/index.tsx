"use client";

import { autoUpdate, flip, offset, useFloating } from "@floating-ui/react";
import { faAngleDown } from "@fortawesome/pro-solid-svg-icons";
import { useSelect } from "downshift";
import { forwardRef } from "react";

import { useForwardRef } from "../../../hooks/use_forward_ref";
import { Box } from "../../box/_components/Box";
import { Button } from "../../button";
import { Icon } from "../../icon";
import { SelectItemList } from "../SelectItemList";

import type { Placement } from "@floating-ui/react";
import type { UseComboboxStateChange } from "downshift";
import type { ForwardedRef } from "react";
import type {
	WithName,
	WithOptionalLabel,
	WithSize,
	WithSlots,
	WithStateDisabled,
	WithStateInvalid,
} from "../../../common-types";
import type { UtilCssArgs } from "../../../styles/utils/util_css.css";
import type { ButtonProps } from "../../button";
import { flattenSelectItems } from "../flattenSelectItems";
import { isNotSeparator } from "../isNotSeparator";
import type {
	FlatSelectItems,
	GroupedSelectItems,
	SelectItemShape,
} from "../types";

export type SelectButtonProps<
	TValue extends string = string,
	TItemData extends Record<string, unknown> = Record<string, unknown>,
> = UtilCssArgs &
	WithName &
	WithSize &
	WithSlots &
	WithStateDisabled &
	WithStateInvalid &
	WithOptionalLabel & {
		/**
		 * Props to customise the button trigger node.
		 */
		buttonProps?: Omit<ButtonProps, "size" | "name" | "disabled" | "id">;

		/**
		 * The text to display in the button.
		 */
		buttonText?: string;

		/**
		 * An item preselected when the component mounts.
		 */
		initialSelectedItem?: SelectItemShape<TValue, TItemData>;

		/**
		 * The items to render in the dropdown.
		 */
		isOpen?: boolean;

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
			selection: SelectItemShape<TValue, TItemData> | null | undefined,
		) => void;

		/**
		 * Function called with the new open state when the dropdown is opened or closed.
		 */
		onIsOpenChange?: (
			changes: UseComboboxStateChange<SelectItemShape<TValue, TItemData>>,
		) => void;

		/**
		 * The placement of the dropdown relative to the button.
		 */
		placement?: Placement;

		/**
		 * Props to customise the wrapper Box component.
		 */
		wrapperProps?: Omit<UtilCssArgs, "position">;
	};

/**
 * Renders a button that opens a dropdown menu when clicked.
 * @note This is a base component that should be wrapped with `ForwardRef`.
 */
function SelectButtonBase<
	TValue extends string = string,
	TItemData extends Record<string, unknown> = Record<string, unknown>,
>(
	{
		buttonProps,
		buttonText,
		disabled,
		initialSelectedItem,
		items,
		name,
		onChange,
		placement,
		size,
		slotLeft,
		slotRight = <Icon icon={faAngleDown} />,
		wrapperProps,
	}: SelectButtonProps<TValue, TItemData>,
	initialRef: ForwardedRef<HTMLButtonElement>,
) {
	const ref = useForwardRef(initialRef);

	const {
		getItemProps,
		getMenuProps,
		getToggleButtonProps,
		highlightedIndex,
		isOpen,
	} = useSelect({
		defaultHighlightedIndex: undefined,
		initialSelectedItem,
		isItemDisabled: (item) => {
			return isNotSeparator(item) && item.disabled;
		},
		items: flattenSelectItems(items),
		onSelectedItemChange: (changes) => {
			return onChange?.(changes.selectedItem);
		},
		// Ensure that onClick is called when the user presses Enter on an item.
		onStateChange(changes) {
			if (
				changes.type ===
				useSelect.stateChangeTypes.ToggleButtonKeyDownEnter
			) {
				changes.selectedItem?.onClick?.();
			}
		},
	});

	const { floatingStyles, refs } = useFloating({
		elements: {
			reference: ref.current,
		},
		middleware: [
			offset(4),
			flip({
				crossAxis: true,
				fallbackAxisSideDirection: "start",
			}),
		],
		open: isOpen,
		placement: placement || "bottom-start",
		whileElementsMounted: autoUpdate,
	});

	return (
		<Box position="relative" {...wrapperProps}>
			<Button
				size={size}
				slotLeft={slotLeft}
				slotRight={slotRight}
				{...getToggleButtonProps?.({
					...buttonProps,
					disabled,
					id: name,
					name,
					ref,
				})}
			>
				{buttonText}
			</Button>

			<SelectItemList
				getIsItemSelected={undefined}
				getItemProps={getItemProps}
				getMenuProps={getMenuProps}
				getSelectedItemProps={undefined}
				highlightedIndex={highlightedIndex}
				isMulti={false}
				isOpen={isOpen}
				items={items}
				ref={isOpen ? refs.setFloating : undefined}
				size={size}
				style={isOpen ? floatingStyles : {}}
			/>
		</Box>
	);
}

export const SelectButton = forwardRef(SelectButtonBase);
