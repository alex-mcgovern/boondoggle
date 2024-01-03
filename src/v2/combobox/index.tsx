import { faAnglesUpDown } from "@fortawesome/pro-solid-svg-icons/faAnglesUpDown";
import clsx from "clsx";
import React from "react";
import {
	Button as RACButton,
	ComboBox as RACCombobox,
	ComboBoxStateContext as RACComboBoxStateContext,
	Input as RACInput,
	Popover as RACPopover,
	type ComboBoxProps as RACComboBoxProps,
	type PopoverProps as RACPopoverProps,
	type ValidationResult,
} from "react-aria-components";
import { popoverCSS } from "../../_css/popover.css";
import { LabelConfig, WithName } from "../../types";
import { FieldDescription } from "../../v1/field-description";
import { V2FieldError } from "../field-error";
import { Icon } from "../icon";
import { V2Label } from "../label";
import { IterableListBoxItem, ListBox } from "../list-box";
import { V3Group } from "../v3-group";
import { comboBoxButtonCSS, comboBoxCSS, comboBoxInputCSS } from "./styles.css";

export type ComboBoxProps<TItemId extends string = string> = WithName & {
	description?: string | null;
	errorMessage?: string | ((validation: ValidationResult) => string);
	labelConfig?: LabelConfig;
	popoverProps?: RACPopoverProps;
	comboBoxProps: Omit<
		RACComboBoxProps<IterableListBoxItem<TItemId>>,
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
		<RACCombobox
			{...comboBoxProps}
			className={clsx(
				className,
				comboBoxCSS({
					isDisabled,
					isInvalid,
				}),
			)}
			menuTrigger="input"
			ref={ref}
		>
			<RACComboBoxStateContext.Consumer>
				{(state) => {
					const { toggle } = state || {};
					return (
						<>
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

							<V3Group
								isInvalid={isInvalid}
								isDisabled={isDisabled}
							>
								<RACInput
									onClick={() => toggle()}
									className={comboBoxInputCSS}
								/>
								<RACButton className={comboBoxButtonCSS}>
									<Icon icon={faAnglesUpDown} />
								</RACButton>
							</V3Group>

							{description && !isInvalid && errorMessage ? (
								<FieldDescription description={description} />
							) : null}

							{isInvalid && errorMessage ? (
								<V2FieldError>{errorMessage}</V2FieldError>
							) : null}

							<RACPopover
								{...popoverProps}
								className={popoverCSS}
							>
								<ListBox<TItemId> />
							</RACPopover>
						</>
					);
				}}
			</RACComboBoxStateContext.Consumer>
		</RACCombobox>
	);
}

export const ComboBox = React.forwardRef(BaseComboBox);
