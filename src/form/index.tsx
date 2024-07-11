import type { ReactNode, RefObject } from "react";
import type {
    FieldValues,
    SubmitErrorHandler,
    SubmitHandler,
    UseFormProps,
} from "react-hook-form";

import { FormProvider, useForm } from "react-hook-form";

import { FormComboBox } from "./components/form-combobox";
import { FormDatePicker } from "./components/form-date-picker";
import { FormDropZone } from "./components/form-drop-zone";
import { FormFileTrigger } from "./components/form-file-trigger";
import { FormNumberField } from "./components/form-number-field";
import { FormSelect } from "./components/form-select";
import { FormTextField } from "./components/form-text-field";

function FormRoot<TFieldValues extends FieldValues>({
    children,
    className,
    formRef,
    onError,
    onSubmit,
    options,
}: {
    /**
     * Form field components & form submit button. They will be able to access `react-hook-form`'s form context.
     */
    children: ReactNode;

    /**
     * Class name for the form.
     */
    className?: string;

    /**
     * Reference to the form element.
     */
    formRef?: RefObject<HTMLFormElement>;

    /**
     * Function that will be called when form validation errors occur.
     */
    onError?: SubmitErrorHandler<TFieldValues>;

    /**
     * Function that will be called when the form is submitted.
     */
    onSubmit: SubmitHandler<TFieldValues>;

    /**
     * Additional options passed to `react-hook-forms` `useForm` hook.
     */
    options?: UseFormProps<TFieldValues>;
}) {
    const formMethods = useForm<TFieldValues>(options);

    return (
        <FormProvider {...formMethods}>
            <form
                className={className}
                onSubmit={formMethods.handleSubmit(onSubmit, onError)}
                ref={formRef}
            >
                {children}
            </form>
        </FormProvider>
    );
}

/**
 * The `Form` namespace uses `react-hook-form` to connect UI components to form state.
 */
export const Form = {
    ComboBox: FormComboBox,
    DatePicker: FormDatePicker,
    DropZone: FormDropZone,
    FileTrigger: FormFileTrigger,
    NumberField: FormNumberField,
    Root: FormRoot,
    Select: FormSelect,
    TextField: FormTextField,
};
