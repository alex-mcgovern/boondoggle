import { createContext, useMemo } from "react";
import { useFormContext } from "react-hook-form";

import type { ReactNode } from "react";
import type { FieldValues } from "react-hook-form";

export const FormValuesContext = createContext<FieldValues | undefined>(undefined);

export type FormValuesContextProviderProps = {
    children: ReactNode;
};

export function FormValuesContextProvider<TFieldValues extends FieldValues>({
    children,
}: FormValuesContextProviderProps) {
    const { getValues } = useFormContext<TFieldValues>();

    const values = useMemo(() => {
        return getValues();
    }, [getValues]);

    return <FormValuesContext.Provider value={values}>{children}</FormValuesContext.Provider>;
}
