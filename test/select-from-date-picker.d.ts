import type { ByRoleMatcher, ByRoleOptions, Matcher, MatcherOptions } from "@testing-library/react";
import type { InputDateProps } from "../src/input-date";
type SelectFromInputDateArgs = {
    expectedValue: string;
    getByLabelText: (role: ByRoleMatcher, options?: ByRoleOptions | undefined) => HTMLElement;
    getByTestId: (id: Matcher, options?: MatcherOptions | undefined) => HTMLElement;
    labelText: string;
    onChange?: InputDateProps["onChange"];
};
export declare const selectFromDatePicker: ({ expectedValue, getByLabelText, getByTestId, labelText, onChange, }: SelectFromInputDateArgs) => Promise<void>;
export {};
