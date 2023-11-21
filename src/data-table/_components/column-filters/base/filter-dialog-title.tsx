import { Box } from "../../../../box";

export const FilterDialogTitle = ({
	strFilterDialogTitle,
}: {
	strFilterDialogTitle: string;
}) => {
	return (
		<Box
			paddingX="space_4"
			paddingTop="space_3"
			marginBottom="space_2"
			as="h3"
			fontStyle="bodyMd"
		>
			{strFilterDialogTitle}
		</Box>
	);
};
