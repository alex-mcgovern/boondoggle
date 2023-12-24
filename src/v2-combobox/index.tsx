import { faAngleDown } from "@fortawesome/pro-solid-svg-icons";
import clsx from "clsx";
import React from "react";
import {
	Button as ReactAriaButton,
	ComboBox as ReactAriaCombobox,
	type ComboBoxProps as ReactAriaComboBoxProps,
	Input as ReactAriaInput,
	Popover as ReactAriaPopover,
	type PopoverProps as ReactAriaPopoverProps,
	ValidationResult,
} from "react-aria-components";
import { popoverCSS } from "../_css/popover.css";
import { FieldDescription } from "../field-description";
import { unstyledInput } from "../index.css";
import { sprinkles } from "../sprinkles/index.css";
import { LabelConfig, WithName } from "../types";
import { V2FieldError } from "../v2-field-error";
import { Icon } from "../v2-icon";
import { V2Label } from "../v2-label";
import { IterableListBoxItem, ListBox } from "../v2-list-box";
import { V3Group } from "../v3-group";
import { comboBoxButtonCSS, comboBoxCSS } from "./styles.css";

export type ComboBoxProps<TItemId extends string = string> = WithName & {
	description?: string | null;
	errorMessage?: string | ((validation: ValidationResult) => string);
	labelConfig?: LabelConfig;
	popoverProps?: ReactAriaPopoverProps;
	comboBoxProps: Omit<
		ReactAriaComboBoxProps<IterableListBoxItem<TItemId>>,
		"children"
	>;
};

function BaseComboBox<TItemId extends string = string>(
	{
		description,
		errorMessage,
		name,
		labelConfig,
		popoverProps,
		comboBoxProps: { isDisabled, isInvalid, className, ...comboBoxProps },
	}: ComboBoxProps<TItemId>,
	ref: React.ForwardedRef<HTMLDivElement>,
) {
	return (
		<ReactAriaCombobox
			{...comboBoxProps}
			className={clsx(
				className,
				comboBoxCSS({
					isDisabled,
					isInvalid,
				}),
			)}
			ref={ref}
		>
			{labelConfig?.label ? (
				<V2Label
					htmlFor={name}
					isInvalid={isInvalid}
					isLabelVisible={labelConfig.isLabelVisible}
					label={labelConfig.label}
					labelTooltip={labelConfig.labelTooltip}
					{...labelConfig.labelProps}
				/>
			) : null}

			<V3Group isInvalid={isInvalid} isDisabled={isDisabled}>
				<ReactAriaInput
					className={clsx(
						unstyledInput,
						sprinkles({
							paddingX: "space_3",
							width: "100%",
						}),
					)}
				/>
				<ReactAriaButton className={comboBoxButtonCSS}>
					<Icon icon={faAngleDown} />
				</ReactAriaButton>
			</V3Group>

			{description && !isInvalid && errorMessage ? (
				<FieldDescription description={description} />
			) : null}

			{isInvalid && errorMessage ? (
				<V2FieldError>{errorMessage}</V2FieldError>
			) : null}

			<ReactAriaPopover {...popoverProps} className={popoverCSS}>
				<ListBox<TItemId> />
			</ReactAriaPopover>
		</ReactAriaCombobox>
	);
}

export const ComboBox = React.forwardRef(BaseComboBox);
