import { Box } from "../../../../box";

export const FilterDialogTitle = ({
	strFilterDialogTitle,
}: {
	strFilterDialogTitle: string;
}) => {
	return (
		<Box padding="space_4" as="h3" fontStyle="h6" marginBottom="none">
			{strFilterDialogTitle}
		</Box>
	);
};
