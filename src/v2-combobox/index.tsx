import { faAngleDown } from "@fortawesome/pro-solid-svg-icons";
import clsx from "clsx";
import React from "react";
import {
	ComboBox as ReactAriaCombobox,
	type ComboBoxProps as ReactAriaComboBoxProps,
	Input as ReactAriaInput,
	ValidationResult,
} from "react-aria-components";
import { Text } from "react-aria-components";
import { unstyledInput } from "../index.css";
import { sprinkles } from "../sprinkles/index.css";
import { LabelConfig, WithName } from "../types";
import { Button } from "../v2-button";
import { V2FieldError } from "../v2-field-error";
import { Icon } from "../v2-icon";
import { V2Label } from "../v2-label";
import { ListBox } from "../v2-list-box";
import { IterableMenuItem } from "../v2-menu";
import { MenuPopover } from "../v2-menu-popover";
import { V3Group } from "../v3-group";

export type ComboBoxProps<TItemId extends string = string> = WithName & {
	label?: string;
	description?: string | null;
	errorMessage?: string | ((validation: ValidationResult) => string);
	labelConfig?: LabelConfig;
	popoverProps?: React.ComponentProps<typeof MenuPopover>;
	comboBoxProps: Omit<
		ReactAriaComboBoxProps<IterableMenuItem<TItemId>>,
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
		comboBoxProps,
	}: ComboBoxProps<TItemId>,
	ref: React.ForwardedRef<HTMLDivElement>,
) {
	return (
		<ReactAriaCombobox ref={ref} {...comboBoxProps} menuTrigger="focus">
			{labelConfig?.label ? (
				<V2Label
					htmlFor={name}
					isInvalid={comboBoxProps.isInvalid}
					isLabelVisible={labelConfig.isLabelVisible}
					label={labelConfig.label}
					labelTooltip={labelConfig.labelTooltip}
					{...labelConfig.labelProps}
				/>
			) : null}
			<V3Group
				isInvalid={comboBoxProps.isInvalid}
				isDisabled={comboBoxProps.isDisabled}
			>
				<ReactAriaInput
					className={clsx(
						unstyledInput,
						sprinkles({
							paddingX: "space_3",
							width: "100%",
						}),
					)}
				/>
				<Button size="square_sm" appearance="ghost">
					<Icon icon={faAngleDown} />
				</Button>
			</V3Group>
			{description && <Text slot="description">{description}</Text>}
			{comboBoxProps.isInvalid && errorMessage && (
				<V2FieldError>{errorMessage}</V2FieldError>
			)}
			<MenuPopover {...popoverProps}>
				<ListBox<TItemId> />
			</MenuPopover>
		</ReactAriaCombobox>
	);
}

export const ComboBox = React.forwardRef(BaseComboBox);
