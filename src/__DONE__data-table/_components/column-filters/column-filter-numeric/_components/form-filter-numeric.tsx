import { zodResolver } from "@hookform/resolvers/zod";
import * as React from "react";
import { FormSubmitButton } from "../../../../../form-submit-button";
import { Box } from "../../../../../__DONE__box";
import { Form } from "../../../../../form";
import { FormSelectSingle } from "../../../../../_DEPRECATED_form-select-single";
import type { TableNumberRangeFilterMode } from "../../../../types";
import { getTableNumberRangeFilterModeItems } from "../_lib/getNumberRangeFilterModeItems";
import {
	FieldValuesFilterNumberRange,
	getZodFilterNumberRange,
} from "../_lib/zodFilterNumberRange";
import { useNumericFilterMode } from "./numeric-filter-mode-context";
import { FormInput } from "../../../../../form-input";
import { sprinkles } from "../../../../../__DONE__sprinkles/index.css";

export const FormFilterNumeric = ({
	currentMax,
	currentMin,
	largestValue,
	smallestValue,
	strApplyFilter,
	strMapNumericFilterMode,
	strNotANumber,
	setFilter,
	transformNumericToRaw,
}: {
	currentMax: number | undefined;
	currentMin: number | undefined;
	largestValue: number;
	smallestValue: number;
	setFilter: (v: [number | undefined, number | undefined]) => void;
	transformNumericToRaw?: (value: number | undefined) => number | undefined;
	strApplyFilter: string;
	strNotANumber: string;
	strMapNumericFilterMode: Record<TableNumberRangeFilterMode, string>;
}) => {
	const [parentFilterMode, setParentFilterMode] = useNumericFilterMode();

	const [localFilterMode, setLocalFilterMode] =
		React.useState<TableNumberRangeFilterMode>(parentFilterMode);

	const filterModeItems = getTableNumberRangeFilterModeItems({
		strMapNumericFilterMode,
	});

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
			resolver={zodResolver(
				getZodFilterNumberRange({
					strNotANumber,
				}),
			)}
		>
			<Box paddingX="space_4">
				<FormSelectSingle<TableNumberRangeFilterMode>
					size="sm"
					name="filter_mode"
					marginBottom="space_2"
					defaultValue={localFilterMode}
					items={filterModeItems}
					onChange={(s) => (s ? setLocalFilterMode(s.value) : null)}
				/>
				{localFilterMode === "is_between" && (
					<Box display="grid" gridTemplateColumns="2x" gap="space_2">
						<FormInput
							size="sm"
							marginBottom="space_2"
							inputMode="numeric"
							name="min"
							defaultValue={
								transformNumericToRaw
									? transformNumericToRaw(currentMin)
									: currentMin
							}
							autoComplete="off"
							placeholder="Min"
						/>
						<FormInput
							size="sm"
							marginBottom="space_2"
							inputMode="numeric"
							name="max"
							defaultValue={
								transformNumericToRaw
									? transformNumericToRaw(currentMax)
									: currentMax
							}
							autoComplete="off"
							placeholder="Max"
						/>
					</Box>
				)}
				{localFilterMode === "is_equal_to" && (
					<FormInput
						size="sm"
						marginBottom="space_2"
						defaultValue={
							transformNumericToRaw
								? transformNumericToRaw(
										currentMin || currentMax,
								  )
								: currentMin || currentMax
						}
						inputMode="numeric"
						name="is_equal_to"
						autoComplete="off"
						min={smallestValue}
						max={largestValue}
					/>
				)}
				{localFilterMode === "is_greater_than" && (
					<FormInput
						size="sm"
						marginBottom="space_2"
						defaultValue={
							transformNumericToRaw
								? transformNumericToRaw(
										currentMin || currentMax,
								  )
								: currentMin || currentMax
						}
						inputMode="numeric"
						name="is_greater_than"
						autoComplete="off"
						min={smallestValue}
						max={largestValue}
					/>
				)}
				{localFilterMode === "is_less_than" && (
					<FormInput
						size="sm"
						marginBottom="space_2"
						defaultValue={
							transformNumericToRaw
								? transformNumericToRaw(
										currentMax || currentMin,
								  )
								: currentMax || currentMin
						}
						inputMode="numeric"
						name="is_less_than"
						autoComplete="off"
						min={smallestValue}
						max={largestValue}
					/>
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
					{strApplyFilter}
				</FormSubmitButton>
			</Box>
		</Form>
	);
};
