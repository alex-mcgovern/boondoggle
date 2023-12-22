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
import { Text } from "react-aria-components";
import { popoverCSS } from "../_css/popover.css";
import { unstyledInput } from "../index.css";
import { sprinkles } from "../sprinkles/index.css";
import { LabelConfig, WithName } from "../types";
import { V2FieldError } from "../v2-field-error";
import { Icon } from "../v2-icon";
import { V2Label } from "../v2-label";
import { ListBox } from "../v2-list-box";
import { IterableMenuItem } from "../v2-menu";
import { V3Group } from "../v3-group";
import { comboBoxButtonCSS } from "./styles.css";

export type ComboBoxProps<TItemId extends string = string> = WithName & {
	description?: string | null;
	errorMessage?: string | ((validation: ValidationResult) => string);
	labelConfig?: LabelConfig;
	popoverProps?: ReactAriaPopoverProps;
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
		<ReactAriaCombobox {...comboBoxProps} menuTrigger="focus" ref={ref}>
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
				<ReactAriaButton className={comboBoxButtonCSS}>
					<Icon icon={faAngleDown} />
				</ReactAriaButton>
			</V3Group>

			{description && <Text slot="description">{description}</Text>}

			{comboBoxProps.isInvalid && errorMessage && (
				<V2FieldError>{errorMessage}</V2FieldError>
			)}

			<ReactAriaPopover {...popoverProps} className={popoverCSS}>
				<ListBox<TItemId> />
			</ReactAriaPopover>
		</ReactAriaCombobox>
	);
}

export const ComboBox = React.forwardRef(BaseComboBox);
