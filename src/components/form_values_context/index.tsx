import { createContext, useMemo } from "react";
import { useFormContext } from "react-hook-form";

import type { ReactNode } from "react";
import type { FieldValues } from "react-hook-form";

export const FormValuesContext = createContext<{ field_values: FieldValues | undefined }>({
    field_values: undefined,
});

export type FormValuesContextProviderProps = {
    children: ReactNode;
};

export function FormValuesContextProvider({ children }: FormValuesContextProviderProps) {
    const { getValues } = useFormContext();

    const values = useMemo(() => {
        return { field_values: getValues() };
    }, [getValues]);

    return <FormValuesContext.Provider value={values}>{children}</FormValuesContext.Provider>;
}
