import {
	Button as RACButton,
	type ButtonProps as RACButtonProps,
	Select as RACSelect,
	type SelectProps as RACSelectProps,
	SelectValue as RACSelectValue,
	FieldError,
} from "react-aria-components";
import { Popover, PopoverProps } from "../popover/popover";
import { IterableListBoxItem, ListBox } from "../list-box";
import { faAnglesUpDown } from "@fortawesome/pro-regular-svg-icons/faAnglesUpDown";
import { Icon } from "../icon";
import * as React from "react";
import clsx from "clsx";
import { selectButtonCSS, selectCSS, selectValueCSS } from "./styles.css";
import { useFormContext, useController } from "react-hook-form";

/** -----------------------------------------------------------------------------
 * SelectTrigger
 * ------------------------------------------------------------------------------- */

export type SelectTriggerProps = RACButtonProps & {
	variant?: "default" | "borderless";
};

function _SelectButton<TItemId extends string = string>(
	{ variant = "default", ...props }: SelectTriggerProps,
	ref: React.ForwardedRef<HTMLButtonElement>,
) {
	return (
		<RACButton
			{...props}
			ref={ref}
			className={clsx(
				props.className,
				selectButtonCSS({ variant: variant }),
			)}
		>
			<RACSelectValue<IterableListBoxItem<TItemId>>
				className={selectValueCSS}
			/>
			<Icon color="text_low_contrast" icon={faAnglesUpDown} />
		</RACButton>
	);
}

export const SelectButton = React.forwardRef(_SelectButton);

/** -----------------------------------------------------------------------------
 * Select
 * ------------------------------------------------------------------------------- */

export type SelectProps<TItemId extends string = string> = RACSelectProps<
	IterableListBoxItem<TItemId>
> & {
	items: Iterable<IterableListBoxItem<TItemId>>;
	placement?: PopoverProps["placement"];
};

function _Select<TItemId extends string = string>(
	{ children, ...props }: SelectProps<TItemId>,
	ref: React.ForwardedRef<HTMLDivElement>,
) {
	return (
		<RACSelect<IterableListBoxItem<TItemId>>
			{...props}
			ref={ref}
			className={clsx(props.className, selectCSS)}
		>
			{(values) => (
				<>
					{typeof children === "function"
						? children(values)
						: children}

					<Popover placement={props.placement}>
						<ListBox<TItemId> items={props.items} />
					</Popover>
				</>
			)}
		</RACSelect>
	);
}

export const Select = React.forwardRef(_Select);

/** -----------------------------------------------------------------------------
 * FormSelect
 * ------------------------------------------------------------------------------- */

/**
 * A `FormSelect` connects a `Select` to a `Form` component using `react-hook-form`.
 *
 * [React Aria Documentation](https://react-spectrum.adobe.com/react-aria/Select.html)
 */
export function FormSelect<TItemId extends string = string>({
	children,
	...props
}: SelectProps<TItemId>) {
	if (!props.name) {
		throw new Error("FormSelect requires a name prop");
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
		<Select<TItemId>
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
		</Select>
	);
}
