import { zodResolver } from "@hookform/resolvers/zod";
import * as React from "react";
import { Box } from "../../../../../box";
import { Form } from "../../../../../form";
import { FormInput } from "../../../../../form_input";
import { FormSelectSingle } from "../../../../../form_select_single";
import { FormSubmitButton } from "../../../../../form_submit_button";
import { getNumberRangeFilterModeItems } from "../_lib/getNumberRangeFilterModeItems";
import {
	FieldValuesFilterNumberRange,
	getZodFilterNumberRange,
} from "../_lib/zodFilterNumberRange";
import { NumberRangeFilterMode } from "../types";
import { useNumberRangeFilterMode } from "./FilterModeContext";

export const FormFilterNumberRange = ({
	currentMax,
	currentMin,
	largestValue,
	smallestValue,
	strApplyFilter,
	strMapFilterMode,
	strErrorTooLarge,
	strErrorTooSmall,
	setFilter,
}: {
	currentMax: number | undefined;
	currentMin: number | undefined;
	largestValue: number;
	setFilter: (v: [number | undefined, number | undefined]) => void;
	smallestValue: number;
	strApplyFilter: string;
	strErrorTooLarge: string;
	strErrorTooSmall: string;
	strMapFilterMode: Record<NumberRangeFilterMode, string>;
}) => {
	const [parentFilterMode, setParentFilterMode] = useNumberRangeFilterMode();

	const [localFilterMode, setLocalFilterMode] =
		React.useState<NumberRangeFilterMode>(parentFilterMode);

	const filterModeItems = getNumberRangeFilterModeItems({ strMapFilterMode });

	return (
		<Form<FieldValuesFilterNumberRange>
			name="filter_number_range"
			handleSubmit={function (fieldValues) {
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
					smallestValue,
					largestValue,
					strErrorTooLarge,
					strErrorTooSmall,
				}),
			)}
		>
			<Box paddingX="space_4">
				<FormSelectSingle<NumberRangeFilterMode>
					size="sm"
					name="filter_mode"
					defaultValue={localFilterMode}
					items={filterModeItems}
					onChange={(s) => (s ? setLocalFilterMode(s.value) : null)}
				/>
				{localFilterMode === "is_between" && (
					<Box display="grid" gridTemplateColumns="2x" gap="space_2">
						<FormInput
							size="sm"
							marginBottom="space_4"
							inputMode="numeric"
							name="min"
							defaultValue={currentMin}
							autoComplete="off"
							placeholder={`Min ${
								smallestValue ? `(${smallestValue})` : ""
							}`}
						/>
						<FormInput
							size="sm"
							marginBottom="space_4"
							inputMode="numeric"
							name="max"
							defaultValue={currentMax}
							autoComplete="off"
							placeholder={`Max ${
								largestValue ? `(${largestValue})` : ""
							}`}
						/>
					</Box>
				)}
				{localFilterMode === "is_equal_to" && (
					<FormInput
						size="sm"
						marginBottom="space_4"
						defaultValue={currentMin}
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
						marginBottom="space_4"
						defaultValue={currentMin || currentMax}
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
						marginBottom="space_4"
						defaultValue={currentMax || currentMin}
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
					marginBottom="space_4"
					width="100%"
					name="apply_filter"
				>
					{strApplyFilter}
				</FormSubmitButton>
			</Box>
		</Form>
	);
};
