import { Box } from "../../../../box";

export const DataTableFilterSelectItem = ({
	isSelected,
	label,
}: {
	isSelected: boolean | undefined;
	label: string;
}) => {
	return (
		<Box
			display="flex"
			alignItems="center"
			gap="space_2"
			marginBottom="space_4"
		>
			<Box
				as="input"
				defaultChecked={isSelected}
				readOnly
				tabIndex={-1}
				type="checkbox"
			/>
			<Box>{label}</Box>
		</Box>
	);
};
