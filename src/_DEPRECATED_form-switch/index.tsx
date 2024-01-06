import { useController, useFormContext } from "react-hook-form";

import { Switch } from "../switch";

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
			name={name}
			onBlur={onBlur}
			onChange={(isSelected) => {
				onChange?.(isSelected);
				reactHookFormOnChange(isSelected);
			}}
			ref={ref}
			value={controlledValue}
			{...rest}
		/>
	);
}
