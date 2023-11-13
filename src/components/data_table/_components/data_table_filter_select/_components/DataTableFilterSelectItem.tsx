import { Box } from "../../../../box";

export const DataTableFilterSelectItem = ({
	defaultChecked,
	label,
	value,
	handleSelection,
}: {
	handleSelection: (value: string) => void;
	defaultChecked: boolean | undefined;
	label: string;
	value: string;
}) => {
	return (
		<Box
			display="flex"
			alignItems="center"
			gap="space_2"
			marginBottom="space_4"
		>
			<Box
				value={value}
				as="input"
				defaultChecked={defaultChecked}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					handleSelection(e.target.value)
				}
				tabIndex={-1}
				type="checkbox"
				id={`item_${value}`}
			/>
			<Box as="label" htmlFor={`item_${value}`}>
				{label}
			</Box>
		</Box>
	);
};
