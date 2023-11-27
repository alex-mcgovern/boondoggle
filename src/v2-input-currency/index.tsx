import {
	Input,
	NumberFieldProps as ReactAriaNumberFieldProps,
	NumberField as ReactAriaNumberField,
	ValidationResult,
} from "react-aria-components";
import { Group } from "../v2-group";
import { numberInputCSS } from "./styles.css";
import * as React from "react";
import { Menu } from "../v2-menu";
import { Icon } from "../icon";
import { faAngleDown } from "@fortawesome/pro-solid-svg-icons/faAngleDown";
import { GroupAddon } from "../v2-group-addon";

/** -----------------------------------------------------------------------------
 * Types
 * ------------------------------------------------------------------------------- */

type CurrencyConfig<TCurrency extends string = string> =
	| {
			currency: TCurrency;
			currencyIcon: React.ReactNode;
			isCurrencyEditable: false;
			items?: never;
			onCurrencyChange?: never;
	  }
	| {
			currency: TCurrency;
			currencyIcon: React.ReactNode;
			isCurrencyEditable: true;
			items: Array<{
				id: TCurrency;
				name: string;
				slotLeft: React.ReactNode;
			}>;
			onCurrencyChange:
				| ((currency: TCurrency | undefined) => unknown)
				| ((currency: TCurrency | undefined) => Promise<unknown>);
	  };

/**
 * Manage the currency state and extract an icon to display it in the UI.
 */
function useCurrencyState<TCurrency extends string = string>(
	currencyConfig: CurrencyConfig<TCurrency>,
) {
	const [currency, setCurrency] = React.useState<TCurrency>(
		currencyConfig.currency,
	);

	const currencyIcon = currencyConfig.isCurrencyEditable
		? currencyConfig.items.find((i) => i.id === currency)?.slotLeft
		: currencyConfig.currencyIcon;

	return { currency, setCurrency, currencyIcon };
}

interface V2InputCurrencyProps<TCurrency extends string>
	extends ReactAriaNumberFieldProps {
	label?: string;
	size: "sm" | "md" | "lg";
	description?: string;
	errorMessage?: string | ((validation: ValidationResult) => string);
	currencyConfig: CurrencyConfig<TCurrency>;
}

export function V2InputCurrency<TCurrency extends string>({
	size = "sm",
	currencyConfig,
	...props
}: V2InputCurrencyProps<TCurrency>) {
	const { currency, currencyIcon, setCurrency } =
		useCurrencyState(currencyConfig);

	return (
		<ReactAriaNumberField
			formatOptions={{
				currency,
				style: "currency",
				currencyDisplay: "code",
				currencySign: "accounting",
			}}
			defaultValue={1024}
			minValue={0}
			{...props}
		>
			{/* <Label>Width</Label> */}
			<Group>
				<Input className={numberInputCSS({ size })} />
				{currencyConfig.isCurrencyEditable ? (
					<Menu
						size={size}
						buttonProps={{
							slot: null,
							children: currencyIcon ? (
								<>
									{currencyIcon}
									<Icon
										color="text_low_contrast"
										icon={faAngleDown}
									/>
								</>
							) : (
								<Icon
									color="text_low_contrast"
									icon={faAngleDown}
								/>
							),
							"data-slot-side": "right",
						}}
						popoverProps={{
							placement: "bottom end",
						}}
						menuProps={{
							items: currencyConfig.items,
							selectionMode: "single",
							onSelectionChange: (s) => {
								if (s === "all") {
									return;
								}
								return setCurrency(s.values().next().value);
							},
						}}
					/>
				) : (
					<GroupAddon data-slot-side="right" size={size}>
						{currencyIcon}
					</GroupAddon>
				)}
			</Group>
		</ReactAriaNumberField>
	);
}
