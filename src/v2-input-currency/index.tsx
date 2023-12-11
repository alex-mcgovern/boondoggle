import { faAngleDown } from "@fortawesome/pro-solid-svg-icons/faAngleDown";
import * as React from "react";
import {
	Input as ReactAriaInput,
	NumberField as ReactAriaNumberField,
	NumberFieldProps as ReactAriaNumberFieldProps,
} from "react-aria-components";
import { Box } from "../box";
import { Sprinkles, sprinkles } from "../sprinkles/index.css";
import { LabelConfig, WithName, WithSize } from "../types";
import { V2FieldError } from "../v2-field-error";
import { Group } from "../v2-group";
import { GroupAddon } from "../v2-group-addon";
import { Icon } from "../v2-icon";
import { V2Label } from "../v2-label";
import { IterableMenuItem } from "../v2-menu";
import { MenuButton } from "../v2-menu-button";
import { numberInputCSS } from "./styles.css";

type CurrencyConfig<TCurrency extends string = string> =
	| {
			initialCurrency: TCurrency;
			initialCurrencyIcon: React.ReactNode;
			isCurrencyEditable: false;
			items?: never;
			onCurrencyChange?: never;
	  }
	| {
			initialCurrency: TCurrency;
			initialCurrencyIcon: React.ReactNode;
			isCurrencyEditable: true;
			items: Array<IterableMenuItem<TCurrency>>;
			onCurrencyChange?: React.Dispatch<React.SetStateAction<TCurrency>>;
	  };

function useCurrencyState<TCurrency extends string = string>(
	currencyConfig: CurrencyConfig<TCurrency>,
) {
	const [currency, setCurrencyState] = React.useState<TCurrency>(
		currencyConfig.initialCurrency,
	);

	const setCurrency: React.Dispatch<React.SetStateAction<TCurrency>> = (
		n,
	) => {
		currencyConfig.onCurrencyChange?.(n);
		setCurrencyState(n);
	};

	const currencyIcon = currencyConfig.isCurrencyEditable
		? currencyConfig.items.find((i) => i.id === currency)?.slotLeft
		: currencyConfig.initialCurrencyIcon;

	return { currency, setCurrency, currencyIcon };
}

function CurrencyMenuIcon<TCurrency extends string = string>({
	currencyIcon,
	currency,
}: { currency: TCurrency; currencyIcon?: React.ReactNode }) {
	if (currencyIcon) {
		return (
			<>
				{currencyIcon}
				<Box display="flex" gap="space_1" alignItems="center">
					{currency}
					<Icon color="text_low_contrast" icon={faAngleDown} />
				</Box>
			</>
		);
	}

	return <Icon color="text_low_contrast" icon={faAngleDown} />;
}

function CurrencyMenuButton<TCurrency extends string = string>({
	currencyConfig,
	currency,
	currencyIcon,
	onCurrencyChange,
	size = "sm",
}: WithSize & {
	currency: TCurrency;
	currencyConfig: CurrencyConfig<TCurrency>;
	currencyIcon: React.ReactNode;
	onCurrencyChange: React.Dispatch<React.SetStateAction<TCurrency>>;
}) {
	return (
		<MenuButton<TCurrency>
			size={size}
			buttonProps={{
				appearance: "secondary",
				slot: null,
				size: size,
				children: (
					<>
						<CurrencyMenuIcon
							currency={currency}
							currencyIcon={currencyIcon}
						/>
					</>
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
					return onCurrencyChange(s.values().next().value);
				},
			}}
		/>
	);
}

/**
 * Conditionally renders an icon of the selected currency for the field,
 * or a MenuButton that allows switching currencies from a list of provided
 * options.
 */
function InputCurrencyAddon<TCurrency extends string = string>({
	currencyConfig,
	currencyIcon,
	currency,
	onCurrencyChange,
	size,
}: WithSize & {
	currency: TCurrency;
	currencyConfig: CurrencyConfig<TCurrency>;
	currencyIcon: React.ReactNode;
	onCurrencyChange: React.Dispatch<React.SetStateAction<TCurrency>>;
}) {
	if (currencyConfig.isCurrencyEditable) {
		return (
			<CurrencyMenuButton<TCurrency>
				size={size}
				currency={currency}
				currencyConfig={currencyConfig}
				currencyIcon={currencyIcon}
				onCurrencyChange={onCurrencyChange}
			/>
		);
	}
	return (
		<GroupAddon data-slot-side="right" size={size}>
			{currencyIcon} {currency}
		</GroupAddon>
	);
}

/**
 * @private
 * - Renders a numeric input for currency values formatted with Intl.NumberFormat.
 * - Optionally allows toggling the currency
 */
function BaseV2InputCurrency<TCurrency extends string = string>(
	{
		size = "sm",
		currencyConfig,
		labelConfig,
		isInvalid,
		errorMessage,
		marginBottom = "space_4",
		name,
		...props
	}: ReactAriaNumberFieldProps &
		WithSize &
		WithName & {
			labelConfig?: LabelConfig;
			marginBottom?: Sprinkles["marginBottom"];
			description?: string;
			errorMessage?: string | null;
			currencyConfig: CurrencyConfig<TCurrency>;
		},
	ref: React.ForwardedRef<HTMLInputElement>,
) {
	const { currency, currencyIcon, setCurrency } =
		useCurrencyState(currencyConfig);

	return (
		<ReactAriaNumberField
			ref={ref}
			isInvalid={isInvalid}
			validationBehavior="aria"
			formatOptions={{
				currency,
				maximumFractionDigits: 2,
			}}
			className={sprinkles({ marginBottom })}
			{...props}
		>
			{labelConfig?.label ? (
				<V2Label
					isInvalid={isInvalid}
					htmlFor={name}
					isLabelVisible={labelConfig.isLabelVisible}
					label={labelConfig.label}
					labelTooltip={labelConfig.labelTooltip}
					{...labelConfig.labelProps}
				/>
			) : null}
			<Group isInvalid={isInvalid}>
				<ReactAriaInput
					name={name}
					id={name}
					className={numberInputCSS({ size })}
					data-slot-side="left"
				/>
				<InputCurrencyAddon<TCurrency>
					size={size}
					currency={currency}
					currencyConfig={currencyConfig}
					currencyIcon={currencyIcon}
					onCurrencyChange={setCurrency}
				/>
			</Group>
			{isInvalid && errorMessage && (
				<V2FieldError>{errorMessage}</V2FieldError>
			)}
		</ReactAriaNumberField>
	);
}

export const V2InputCurrency = React.forwardRef(BaseV2InputCurrency);
