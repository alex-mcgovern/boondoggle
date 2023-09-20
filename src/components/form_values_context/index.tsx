import { useFormContext } from "@alex-mcgovern/react-hook-form";
import { createContext, useMemo } from "react";

import type { FieldValues } from "@alex-mcgovern/react-hook-form";
import type { ReactNode } from "react";

export const FormValuesContext = createContext<{ field_values: FieldValues | undefined }>({
    field_values: undefined,
});

export type FormValuesContextProviderProps = {
    children: ReactNode;
};

export function FormValuesContextProvider({ children }: FormValuesContextProviderProps) {
    const { getValues } = useFormContext();

    const values = useMemo(() => {
        return { getValues };
    }, [getValues]);

    return <FormValuesContext.Provider value={values}>{children}</FormValuesContext.Provider>;
}
