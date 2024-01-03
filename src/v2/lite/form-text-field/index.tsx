import { type TextFieldProps as RACTextFieldProps } from "react-aria-components";
import { useController, useFormContext } from "react-hook-form";
import { V2FieldError } from "../../field-error";
import { TextField } from "../text-field";

export function FormTextField(props: RACTextFieldProps) {
	const { control } = useFormContext();

	if (!props.name) {
		throw new Error("FormTextField must have a name prop");
	}

	const {
		field,
		fieldState: { error, invalid },
	} = useController({
		control,
		defaultValue: props.defaultValue,
		name: props.name,
	});

	return (
		<TextField {...props} {...field} isInvalid={invalid}>
			{({ isInvalid }) => {
				return (
					<>
						{props.children}
						{isInvalid && error && (
							<V2FieldError>{error.message}</V2FieldError>
						)}
					</>
				);
			}}
		</TextField>
	);
}
