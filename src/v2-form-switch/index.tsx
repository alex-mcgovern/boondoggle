import { useController, useFormContext } from "react-hook-form";
import { Switch } from "../v2-switch";

export function FormSwitch({
	defaultSelected = false,
	name,
	onChange,
	...rest
}: React.ComponentProps<typeof Switch>) {
	const { control } = useFormContext();

	const {
		field: {
			onBlur,
			onChange: reactHookFormOnChange,
			ref,
			value: controlledValue = undefined,
		},
	} = useController({
		control,
		defaultValue: defaultSelected,
		name,
	});

	return (
		<Switch
			ref={ref}
			name={name}
			value={controlledValue}
			onBlur={onBlur}
			onChange={(isSelected) => {
				onChange?.(isSelected);
				reactHookFormOnChange(isSelected);
			}}
			{...rest}
		/>
	);
}
