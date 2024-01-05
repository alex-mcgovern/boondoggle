import { zodResolver } from "@hookform/resolvers/zod";
import * as React from "react";
import { FormSubmitButton } from "../../../../../form-submit-button";
import { Box } from "../../../../../box";
import { Form } from "../../../../../form";
import type { TableNumberRangeFilterMode } from "../../../../types";
import { useNumericFilterMode } from "./numeric-filter-mode-context";
import { sprinkles } from "../../../../../sprinkles/index.css";
import { FormSelect, SelectButton } from "../../../../../select";
import { IterableListBoxItem } from "../../../../../list-box";
import { i18n } from "../../../../../_i18n";
import { FormNumberField } from "../../../../../number-field";
import { Input } from "../../../../../input";
import { z } from "zod";
import { set } from "react-hook-form";

/** -----------------------------------------------------------------------------
 * Filter mode items
 * ------------------------------------------------------------------------------- */

const MODES: Array<IterableListBoxItem<TableNumberRangeFilterMode>> = [
	{
		name: i18n.is_between,
		id: "is_between",
	},
	{
		name: i18n.is_equal_to,
		id: "is_equal_to",
	},
	{
		name: i18n.is_greater_than,
		id: "is_greater_than",
	},
	{
		name: i18n.is_less_than,
		id: "is_less_than",
	},
];

/** -----------------------------------------------------------------------------
 * Validation for filter form
 * ------------------------------------------------------------------------------- */

const errorMap = () => {
	return { message: i18n.not_a_number };
};

const zodFilter = z.discriminatedUnion("filter_mode", [
	z.object({
		filter_mode: z.literal("is_between"),
		min: z.coerce.number({
			errorMap,
		}),
		max: z.coerce.number({
			errorMap,
		}),
	}),
	z.object({
		filter_mode: z.literal("is_equal_to"),
		is_equal_to: z.coerce.number({
			errorMap,
		}),
	}),
	z.object({
		filter_mode: z.literal("is_greater_than"),
		is_greater_than: z.coerce.number({
			errorMap,
		}),
	}),
	z.object({
		filter_mode: z.literal("is_less_than"),
		is_less_than: z.coerce.number({
			errorMap,
		}),
	}),
]);

type FieldValuesFilterNumberRange = z.infer<typeof zodFilter>;

/** -----------------------------------------------------------------------------
 * FormFilterNumeric
 * ------------------------------------------------------------------------------- */

export const FormFilterNumeric = ({
	currentMax,
	currentMin,
	largestValue,
	smallestValue,
	setFilter,
	transformNumericToRaw,
}: {
	currentMax: number | undefined;
	currentMin: number | undefined;
	largestValue: number;
	smallestValue: number;
	setFilter: (v: [number | undefined, number | undefined]) => void;
	transformNumericToRaw?: (value: number | undefined) => number | undefined;
}) => {
	const [parentFilterMode, setParentFilterMode] = useNumericFilterMode();

	const [localFilterMode, setLocalFilterMode] =
		React.useState<TableNumberRangeFilterMode>(parentFilterMode);

	return (
		<Form<FieldValuesFilterNumberRange>
			name="filter_number_range"
			handleSubmit={(fieldValues) => {
				setParentFilterMode(fieldValues.filter_mode);
				switch (fieldValues.filter_mode) {
					case "is_between": {
						return setFilter([fieldValues.min, fieldValues.max]);
					}
					case "is_equal_to": {
						return setFilter([
							fieldValues.is_equal_to,
							fieldValues.is_equal_to,
						]);
					}
					case "is_greater_than": {
						return setFilter([
							fieldValues.is_greater_than,
							undefined,
						]);
					}
					case "is_less_than": {
						return setFilter([0, fieldValues.is_less_than]);
					}
					default: {
						return null;
					}
				}
			}}
			resolver={zodResolver(zodFilter)}
		>
			<Box paddingX="space_4">
				<FormSelect<TableNumberRangeFilterMode>
					className={sprinkles({ marginBottom: "space_2" })}
					name="filter_mode"
					items={MODES}
					selectedKey={localFilterMode}
					onSelectionChange={(k) => {
						alert(k)
						setLocalFilterMode(k as TableNumberRangeFilterMode);
					}}
				>
					<SelectButton />
				</FormSelect>

				{localFilterMode === "is_between" && (
					<Box display="grid" gridTemplateColumns="2x" gap="space_2">
						<FormNumberField
							className={sprinkles({ marginBottom: "space_2" })}
							name="min"
							aria-label="min"
							minValue={0}
							defaultValue={
								transformNumericToRaw
									? transformNumericToRaw(currentMin)
									: currentMin
							}
						>
							<Input />
						</FormNumberField>

						<FormNumberField
							className={sprinkles({ marginBottom: "space_2" })}
							name="max"
							aria-label="max"
							minValue={0}
							defaultValue={
								transformNumericToRaw
									? transformNumericToRaw(currentMax)
									: currentMax
							}
						>
							<Input />
						</FormNumberField>
					</Box>
				)}
				{localFilterMode === "is_equal_to" && (
					<FormNumberField
						className={sprinkles({ marginBottom: "space_2" })}
						defaultValue={
							transformNumericToRaw
								? transformNumericToRaw(
										currentMin || currentMax,
								  )
								: currentMin || currentMax
						}
						aria-label="Is equal to"
						name="is_equal_to"
						minValue={smallestValue}
						maxValue={largestValue}
					>
						<Input />
					</FormNumberField>
				)}
				{localFilterMode === "is_greater_than" && (
					<FormNumberField
						className={sprinkles({ marginBottom: "space_2" })}
						defaultValue={
							transformNumericToRaw
								? transformNumericToRaw(
										currentMin || currentMax,
								  )
								: currentMin || currentMax
						}
						aria-label="Is greater than"
						name="is_greater_than"
						minValue={smallestValue}
						maxValue={largestValue}
					>
						<Input />
					</FormNumberField>
				)}
				{localFilterMode === "is_less_than" && (
					<FormNumberField
						className={sprinkles({ marginBottom: "space_2" })}
						defaultValue={
							transformNumericToRaw
								? transformNumericToRaw(
										currentMax || currentMin,
								  )
								: currentMax || currentMin
						}
						aria-label="Is less than"
						name="is_less_than"
						minValue={smallestValue}
						maxValue={largestValue}
					>
						<Input />
					</FormNumberField>
				)}
			</Box>

			<Box paddingX="space_4">
				<FormSubmitButton
					size="sm"
					className={sprinkles({
						marginBottom: "space_4",
						width: "100%",
					})}
				>
					{i18n.apply_filter}
				</FormSubmitButton>
			</Box>
		</Form>
	);
};
