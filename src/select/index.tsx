import type { ComponentProps, ForwardedRef } from "react";
import type {
	ButtonProps as AriaButtonProps,
	SelectProps as AriaSelectProps,
} from "react-aria-components";

import { faAnglesUpDown } from "@fortawesome/pro-solid-svg-icons/faAnglesUpDown";
import clsx from "clsx";
import { forwardRef } from "react";
import {
	Button as AriaButton,
	Select as AriaSelect,
	SelectValue as AriaSelectValue,
} from "react-aria-components";
import { useController, useFormContext } from "react-hook-form";

import type { IterableListBoxItem } from "../list-box";

import { FieldError } from "../field-error";
import { Icon } from "../icon";
import { ListBox } from "../list-box";
import { Popover } from "../popover";
import "./styles.css";

/**
 * A `SelectButton` component, for use with a `Select` component. [Built with React Aria SelectButton component](https://react-spectrum.adobe.com/react-aria/Select.html#button)
 */
export function SelectButton<TItemId extends string = string>({
	variant = "default",
	...props
}: AriaButtonProps & {
	/**
	 * React ref to the SelectButton element.
	 */
	ref?: ForwardedRef<HTMLButtonElement>;

	/**
	 * The variant of the select button.
	 * - `"borderless"` - A select button with no border.
	 * - `"default"` - A select button with a border.
	 */
	variant?: "borderless" | "default";
}) {
	return (
		<AriaButton
			{...props}
			className={clsx(props.className, "select-button", variant)}
		>
			<AriaSelectValue<IterableListBoxItem<TItemId>>
				className={"select-value"}
			/>
			<Icon
				className="select-icon"
				icon={faAnglesUpDown}
			/>
		</AriaButton>
	);
}

/**
 * A select displays a collapsible list of options and allows a user to select one of them. [Built with React Aria Select component](https://react-spectrum.adobe.com/react-aria/Select.html)
 *
 * ## Install
 *
 * ```sh
 * npm i boondoggle
 * ```
 *
 * ## Usage
 *
 * ```ts
 * import { Select } from "boondoggle";
 * ```
 */
export const Select = forwardRef<
	HTMLDivElement,
	AriaSelectProps<IterableListBoxItem<string>> & {
		/**
		 * The items to display in the select popover.
		 */
		items: Iterable<IterableListBoxItem<string>>;
		/**
		 * The placement of the select popover.
		 */
		placement?: ComponentProps<typeof Popover>["placement"];

		/**
		 * React ref to the Select element.
		 */
		ref?: ForwardedRef<HTMLDivElement>;
	}
>(({ children, ...props }, ref) => {
	return (
		<AriaSelect<IterableListBoxItem<string>>
			{...props}
			className={clsx(props.className, "select")}
			ref={ref}
		>
			{(values) => (
				<>
					{typeof children === "function" ? children(values) : children}

					<Popover placement={props.placement}>
						<ListBox<string> items={props.items} />
					</Popover>
				</>
			)}
		</AriaSelect>
	);
});

/**
 * A `FormSelect` connects a `Select` to a `Form` component using `react-hook-form`.
 *
 * [React Aria Documentation](https://react-spectrum.adobe.com/react-aria/Select.html)
 */
export function FormSelect({
	children,
	...props
}: ComponentProps<typeof Select>) {
	if (!props.name) {
		throw new Error("FormSelect requires a name prop");
	}

	const { control } = useFormContext();

	const {
		field: { disabled: isDisabled, name, onBlur, onChange, ref, value = "" },
		fieldState: { error, invalid },
	} = useController({
		control,
		defaultValue: props.selectedKey || props.defaultSelectedKey,
		name: props.name,
	});

	return (
		<Select
			{...props}
			defaultSelectedKey={value}
			isDisabled={isDisabled}
			isInvalid={invalid}
			name={name}
			onBlur={onBlur}
			onSelectionChange={(k) => {
				onChange(k);
				props.onSelectionChange?.(k);
			}}
			ref={ref}
			selectedKey={value}
			validationBehavior="aria" // Let React Hook Form handle validation instead of the browser.
		>
			{() => {
				return (
					<>
						{children}
						<FieldError>{error?.message}</FieldError>
					</>
				);
			}}
		</Select>
	);
}
