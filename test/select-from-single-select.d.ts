import type { ByRoleMatcher, ByRoleOptions } from "@testing-library/dom";
export declare const selectFromSingleSelect: ({ expectedValue, getByRole, itemLabel, selectLabel, }: {
    expectedValue: string;
    getByRole: (role: ByRoleMatcher, options?: ByRoleOptions | undefined) => HTMLElement;
    itemLabel: string;
    selectLabel: string;
}) => Promise<void>;
