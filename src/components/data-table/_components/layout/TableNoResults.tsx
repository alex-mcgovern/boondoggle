import {
	faCircleExclamation,
	faTimesCircle,
} from "@fortawesome/pro-solid-svg-icons";
import { Box } from "../../../box/_components/Box";
import { Button } from "../../../button";
import { Icon } from "../../../icon";
import type { useDataTableState } from "../../_lib/useDataTableState";

export function TableNoResults({
	globalFilter,
	setGlobalFilter,
	strClearAllFilters,
	strNoResults,
}: {
	globalFilter: ReturnType<typeof useDataTableState>["globalFilter"];
	setGlobalFilter: ReturnType<typeof useDataTableState>["setGlobalFilter"];
	strClearAllFilters: string;
	strNoResults: string;
}) {
	return (
		<Box
			alignItems="center"
			color="text_low_contrast"
			display="flex"
			flexDirection="column"
			fontStyle="bodySm"
			gap="space_4"
			justifyContent="center"
			paddingX="space_4"
			paddingY="space_12"
			textAlign="center"
		>
			<Icon icon={faCircleExclamation} size="3x" />

			<Box fontStyle="bodyLg" fontWeight="semibold">
				{strNoResults}
			</Box>

			{globalFilter && (
				<Button
					name="clear_filters"
					onClick={() => {
						return setGlobalFilter("");
					}}
					slotRight={<Icon icon={faTimesCircle} />}
				>
					{strClearAllFilters}
				</Button>
			)}
		</Box>
	);
}
