import { Box } from "../../../../box";

export const FilterDialogTitle = ({
    strFilterDialogTitle,
}: {
    strFilterDialogTitle: string;
}) => {
    return (
        <Box
            as="h3"
            fontStyle="bodyMd"
            marginBottom="space_2"
            paddingTop="space_3"
            paddingX="space_4"
        >
            {strFilterDialogTitle}
        </Box>
    );
};
