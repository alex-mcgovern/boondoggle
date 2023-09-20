import type { FieldErrors } from "@alex-mcgovern/react-hook-form";

/**
 * Handle hook form errors
 */
export const handleHookFormErrors = (errors: FieldErrors) => {
    Object.entries(errors).forEach(([field, error]) => {
        if (process.env.NODE_ENV === "production") {
            return;
        }
        console.error(`[${field}] [${error?.type as string}] ${error?.message as string}`);
    });
};
