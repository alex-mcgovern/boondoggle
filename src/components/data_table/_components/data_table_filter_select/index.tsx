import { Box } from "../../../box";
import { Button } from "../../../button";
import { DataTableFilterMenu } from "../data_table_filter_menu";
import { DataTableFilterSelectItem } from "./_components/DataTableFilterSelectItem";

export const DataTableFilterSelect = ({
	strApply,
	strTitle,
}: { strApply: string; strTitle: string }) => {
	return (
		<DataTableFilterMenu pillText={"Test"}>
			{strTitle && (
				<Box as="h3" fontStyle="h6" marginBottom="space_4">
					{strTitle}
				</Box>
			)}

			<DataTableFilterSelectItem isSelected={false} label={"Test 1"} />
			<DataTableFilterSelectItem isSelected={false} label={"Test 2"} />
			<DataTableFilterSelectItem isSelected={false} label={"Test 3"} />
			<Button width="100%" name="apply_filter">
				{strApply}
			</Button>
		</DataTableFilterMenu>
	);
};
