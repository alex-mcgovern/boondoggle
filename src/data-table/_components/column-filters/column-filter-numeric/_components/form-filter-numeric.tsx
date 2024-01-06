import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { z } from "zod";

import type { IterableListBoxItem } from "../../../../../list-box";
import type { TableNumberRangeFilterMode } from "../../../../types";

import { i18n } from "../../../../../_i18n";
import { Box } from "../../../../../box";
import { Form } from "../../../../../form";
import { FormSubmitButton } from "../../../../../form-submit-button";
import { Input } from "../../../../../input";
import { FormNumberField } from "../../../../../number-field";
import { FormSelect, SelectButton } from "../../../../../select";
import { sprinkles } from "../../../../../sprinkles/index.css";
import { useNumericFilterMode } from "./numeric-filter-mode-context";

/** -----------------------------------------------------------------------------
 * Filter mode items
 * ------------------------------------------------------------------------------- */

const MODES: Array<IterableListBoxItem<TableNumberRangeFilterMode>> = [
    {
        id: "is_between",
        name: i18n.is_between,
    },
    {
        id: "is_equal_to",
        name: i18n.is_equal_to,
    },
    {
        id: "is_greater_than",
        name: i18n.is_greater_than,
    },
    {
        id: "is_less_than",
        name: i18n.is_less_than,
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
        max: z.coerce.number({
            errorMap,
        }),
        min: z.coerce.number({
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
    setFilter,
    smallestValue,
    transformNumericToRaw,
}: {
    currentMax: number | undefined;
    currentMin: number | undefined;
    largestValue: number;
    setFilter: (v: [number | undefined, number | undefined]) => void;
    smallestValue: number;
    transformNumericToRaw?: (value: number | undefined) => number | undefined;
}) => {
    const [parentFilterMode, setParentFilterMode] = useNumericFilterMode();

    const [localFilterMode, setLocalFilterMode] =
        useState<TableNumberRangeFilterMode>(parentFilterMode);

    return (
        <Form<FieldValuesFilterNumberRange>
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
            name="filter_number_range"
            resolver={zodResolver(zodFilter)}
        >
            <Box paddingX="space_4">
                <FormSelect<TableNumberRangeFilterMode>
                    className={sprinkles({ marginBottom: "space_2" })}
                    items={MODES}
                    name="filter_mode"
                    onSelectionChange={(k) => {
                        alert(k);
                        setLocalFilterMode(k as TableNumberRangeFilterMode);
                    }}
                    selectedKey={localFilterMode}
                >
                    <SelectButton />
                </FormSelect>

                {localFilterMode === "is_between" && (
                    <Box
                        display="grid"
                        gap="space_2"
                        gridTemplateColumns="2x"
                    >
                        <FormNumberField
                            aria-label="min"
                            className={sprinkles({ marginBottom: "space_2" })}
                            defaultValue={
                                transformNumericToRaw
                                    ? transformNumericToRaw(currentMin)
                                    : currentMin
                            }
                            minValue={0}
                            name="min"
                        >
                            <Input />
                        </FormNumberField>

                        <FormNumberField
                            aria-label="max"
                            className={sprinkles({ marginBottom: "space_2" })}
                            defaultValue={
                                transformNumericToRaw
                                    ? transformNumericToRaw(currentMax)
                                    : currentMax
                            }
                            minValue={0}
                            name="max"
                        >
                            <Input />
                        </FormNumberField>
                    </Box>
                )}
                {localFilterMode === "is_equal_to" && (
                    <FormNumberField
                        aria-label="Is equal to"
                        className={sprinkles({ marginBottom: "space_2" })}
                        defaultValue={
                            transformNumericToRaw
                                ? transformNumericToRaw(
                                      currentMin || currentMax,
                                  )
                                : currentMin || currentMax
                        }
                        maxValue={largestValue}
                        minValue={smallestValue}
                        name="is_equal_to"
                    >
                        <Input />
                    </FormNumberField>
                )}
                {localFilterMode === "is_greater_than" && (
                    <FormNumberField
                        aria-label="Is greater than"
                        className={sprinkles({ marginBottom: "space_2" })}
                        defaultValue={
                            transformNumericToRaw
                                ? transformNumericToRaw(
                                      currentMin || currentMax,
                                  )
                                : currentMin || currentMax
                        }
                        maxValue={largestValue}
                        minValue={smallestValue}
                        name="is_greater_than"
                    >
                        <Input />
                    </FormNumberField>
                )}
                {localFilterMode === "is_less_than" && (
                    <FormNumberField
                        aria-label="Is less than"
                        className={sprinkles({ marginBottom: "space_2" })}
                        defaultValue={
                            transformNumericToRaw
                                ? transformNumericToRaw(
                                      currentMax || currentMin,
                                  )
                                : currentMax || currentMin
                        }
                        maxValue={largestValue}
                        minValue={smallestValue}
                        name="is_less_than"
                    >
                        <Input />
                    </FormNumberField>
                )}
            </Box>

            <Box paddingX="space_4">
                <FormSubmitButton
                    className={sprinkles({
                        marginBottom: "space_4",
                        width: "100%",
                    })}
                    size="sm"
                >
                    {i18n.apply_filter}
                </FormSubmitButton>
            </Box>
        </Form>
    );
};
