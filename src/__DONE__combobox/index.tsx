import { faAnglesUpDown } from "@fortawesome/pro-solid-svg-icons/faAnglesUpDown";
import clsx from "clsx";
import React from "react";
import {
	Button as RACButton,
	ComboBox as RACCombobox,
	type ComboBoxProps as RACComboBoxProps,
} from "react-aria-components";
import { Icon } from "../__DONE__icon";
import { IterableListBoxItem, ListBox } from "../__DONE__list-box";
import { comboBoxButtonCSS, comboBoxCSS } from "./styles.css";
import { Popover } from "../__DONE__popover/popover";
import { useFormContext, useController } from "react-hook-form";
import { FieldError } from "../__DONE__field-error";

/** -----------------------------------------------------------------------------
 * COMBOBOX BUTTON
 * ------------------------------------------------------------------------------- */

export const ComboBoxButton = () => {
	return (
		<RACButton className={comboBoxButtonCSS}>
			<Icon icon={faAnglesUpDown} />
		</RACButton>
	);
};

/** -----------------------------------------------------------------------------
 * COMBOBOX
 * ------------------------------------------------------------------------------- */

export type ComboBoxProps<TItemId extends string = string> = RACComboBoxProps<
	IterableListBoxItem<TItemId>
>;

function BaseComboBox<TItemId extends string = string>(
	{ children, ...props }: ComboBoxProps<TItemId>,
	ref: React.ForwardedRef<HTMLDivElement>,
) {
	return (
		<RACCombobox
			{...props}
			className={clsx(props.className, comboBoxCSS)}
			menuTrigger="input"
			ref={ref}
		>
			{(values) => (
				<>
					{typeof children === "function"
						? children(values)
						: children}

					<Popover>
						<ListBox<TItemId> />
					</Popover>
				</>
			)}
		</RACCombobox>
	);
}

export const ComboBox = React.forwardRef(BaseComboBox);

/** -----------------------------------------------------------------------------
 * FORM COMBOBOX
 * ------------------------------------------------------------------------------- */

/**
 * A `FormComboBox` connects a `ComboBox` to a `Form` component using `react-hook-form`.
 *
 * [React Aria Documentation](https://react-spectrum.adobe.com/react-aria/ComboBox.html)
 */
export function FormComboBox<TItemId extends string = string>({
	children,
	...props
}: ComboBoxProps<TItemId>) {
	if (!props.name) {
		throw new Error("FormComboBox requires a name prop");
	}

	const { control } = useFormContext();

	const {
		field: { ref, value = "", disabled: isDisabled, onChange, ...field },
		fieldState: { error, invalid },
	} = useController({
		control,
		defaultValue: props.selectedKey,
		name: props.name,
	});

	return (
		<ComboBox
			{...props}
			{...field}
			onSelectionChange={onChange}
			selectedKey={value}
			validationBehavior="aria" // Let React Hook Form handle validation instead of the browser.
			isInvalid={invalid}
		>
			{() => {
				return (
					<>
						{children}
						<FieldError>{error?.message}</FieldError>
					</>
				);
			}}
		</ComboBox>
	);
}
