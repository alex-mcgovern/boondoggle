import { faAnglesUpDown } from "@fortawesome/pro-solid-svg-icons/faAnglesUpDown";
import clsx from "clsx";
import React from "react";
import {
	Button as RACButton,
	ComboBox as RACCombobox,
	type ComboBoxProps as RACComboBoxProps,
	ComboBoxStateContext as RACComboBoxStateContext,
	Input as RACInput,
	Popover as RACPopover,
	type PopoverProps as RACPopoverProps,
	type ValidationResult,
} from "react-aria-components";
import { popoverCSS } from "../../_css/popover.css";
import { type V2Label, WithName } from "../../types";
import { FieldDescription } from "../../v1/field-description";
import { V2FieldError } from "../field-error";
import { Group } from "../group";
import { Icon } from "../icon";
import { IterableListBoxItem, ListBox } from "../list-box";
import { comboBoxButtonCSS, comboBoxCSS, comboBoxInputCSS } from "./styles.css";
import { Label } from "../_v2-label";

export type ComboBoxProps<TItemId extends string = string> = WithName & {
	description?: string | null;
	errorMessage?: string | ((validation: ValidationResult) => string);
	popoverProps?: RACPopoverProps;
	comboBoxProps: Omit<
		RACComboBoxProps<IterableListBoxItem<TItemId>>,
		"children"
	>;
	label: V2Label;
};

function BaseComboBox<TItemId extends string = string>(
	{
		description,
		errorMessage,
		name,
		label,
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
							<Label name={name} label={label} />

							<Group
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
							</Group>

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
