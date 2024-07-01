import type { ComponentProps, ReactNode } from "react";
import type {
    FieldValues,
    SubmitErrorHandler,
    SubmitHandler,
    UseFormProps,
} from "react-hook-form";

import {
    FormProvider,
    useController,
    useForm,
    useFormContext,
} from "react-hook-form";

import { FieldError } from "../field-error";
import { FileTrigger } from "../file-trigger";
import { NumberField } from "../number-field";
import { TextField } from "../text-field";
import { FormComboBox } from "./components/form-combobox";
import { FormDatePicker } from "./components/form-date-picker";
import { FormDropZone } from "./components/form-drop-zone";

function FormRoot<TFieldValues extends FieldValues>({
    children,
    className,
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
            >
                {children}
            </form>
        </FormProvider>
    );
}

/** -----------------------------------------------------------------------------
 * FormTextField
 * ------------------------------------------------------------------------------- */

/**
 * A form text field connects a `TextField` to a `Form` component using `react-hook-form`.
 *
 * [React Aria Documentation](https://react-spectrum.adobe.com/react-aria/TextField.html)
 */
function FormTextField({
    children,
    ...props
}: ComponentProps<typeof TextField.Root>) {
    if (!props.name) {
        throw new Error("Form.TextField requires a name prop");
    }

    const { control } = useFormContext();

    const {
        field: {
            disabled: isDisabled,
            name,
            onBlur,
            onChange,
            ref,
            value = "",
        },
        fieldState: { error, invalid },
    } = useController({
        control,
        defaultValue: props.value || props.defaultValue,
        name: props.name,
    });

    return (
        <TextField.Root
            {...props}
            defaultValue={value}
            isDisabled={isDisabled}
            isInvalid={invalid}
            name={name}
            onBlur={onBlur}
            onChange={(v) => {
                onChange(v);
                props.onChange?.(v);
            }}
            ref={ref}
            validationBehavior="aria" // Let React Hook Form handle validation instead of the browser.
            value={value}
        >
            {(renderProps) => {
                return (
                    <>
                        {typeof children === "function"
                            ? children(renderProps)
                            : children}
                        <FieldError>{error?.message}</FieldError>
                    </>
                );
            }}
        </TextField.Root>
    );
}

/** -----------------------------------------------------------------------------
 * FormNumberField
 * ------------------------------------------------------------------------------- */

/**
 * A form number field connects a `NumberField` to a `Form` component using `react-hook-form`.
 *
 * [React Aria Documentation](https://react-spectrum.adobe.com/react-aria/NumberField.html)
 */
function FormNumberField({
    children,
    ...props
}: ComponentProps<typeof NumberField.Root>) {
    if (!props.name) {
        throw new Error("FormNumberField requires a name prop");
    }

    const { control } = useFormContext();

    const {
        field: {
            disabled: isDisabled,
            name,
            onBlur,
            onChange,
            ref,
            value = "",
        },
        fieldState: { error, invalid },
    } = useController({
        control,
        defaultValue: props.value || props.defaultValue,
        disabled: props.isDisabled,
        name: props.name,
    });

    return (
        <NumberField.Root
            {...props}
            defaultValue={value}
            isDisabled={isDisabled}
            isInvalid={invalid}
            name={name}
            onBlur={onBlur}
            onChange={(k) => {
                onChange(k);
                props.onChange?.(k);
            }}
            ref={ref}
            validationBehavior="aria" // Let React Hook Form handle validation instead of the browser.
            value={value}
        >
            {(renderProps) => {
                return (
                    <>
                        {typeof children === "function"
                            ? children(renderProps)
                            : children}
                        <FieldError>{error?.message}</FieldError>
                    </>
                );
            }}
        </NumberField.Root>
    );
}

function FormFileTrigger(
    props: ComponentProps<typeof FileTrigger> & { name: string },
) {
    const { control } = useFormContext();

    const {
        field: { onChange, ref },
        fieldState: { error },
    } = useController({
        control,
        name: props.name,
    });

    return (
        <>
            <FileTrigger
                {...props}
                onSelect={(e) => {
                    if (props.onSelect) {
                        props.onSelect(e);
                    }
                    onChange(e?.item(0));
                }}
                ref={ref}
            />
            <FieldError>{error?.message}</FieldError>
        </>
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
    TextField: FormTextField,
};
