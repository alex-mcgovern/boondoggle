import { type NumberFieldProps as RACNumberFieldProps } from "react-aria-components";
import { useController, useFormContext } from "react-hook-form";
import { V2FieldError } from "../../field-error";
import { NumberField } from "../number-field";

export function FormNumberField(props: RACNumberFieldProps) {
	const { control } = useFormContext();

	if (!props.name) {
		throw new Error("FormNumberField must have a name prop");
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
		<NumberField {...props} {...field} isInvalid={invalid}>
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
		</NumberField>
	);
}
